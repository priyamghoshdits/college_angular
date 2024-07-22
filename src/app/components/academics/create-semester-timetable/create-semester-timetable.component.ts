import { Component } from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import {JsonPipe, NgForOf, NgIf} from "@angular/common";
import {NgxPaginationModule} from "ngx-pagination";
import {SubjectService} from "../../../services/subject.service";
import {
    NgbNav,
    NgbNavItem,
    NgbNavLink,
    NgbNavLinkBase,
    NgbNavOutlet,
    NgbTimepicker,
    NgbTooltip
} from "@ng-bootstrap/ng-bootstrap";
import Swal from "sweetalert2";
import {RolesAndPermissionService} from "../../../services/roles-and-permission.service";
import {SessionService} from "../../../services/session.service";
import { NgSelectModule } from '@ng-select/ng-select';

@Component({
  selector: 'app-create-semester-timetable',
  standalone: true,
    imports: [
        FormsModule,
        ReactiveFormsModule,
        MatIconModule,
        NgForOf,
        NgxPaginationModule,
        ReactiveFormsModule,
        NgbTimepicker,
        JsonPipe,
        NgIf,
        NgbNav,
        NgbNavLink,
        NgbNavLinkBase,
        NgbNavItem,
        NgbNavOutlet,
        NgbTooltip,
        NgSelectModule
    ],
  templateUrl: './create-semester-timetable.component.html',
  styleUrl: './create-semester-timetable.component.scss'
})
export class CreateSemesterTimetableComponent {
    semesterTimeTableForm: FormGroup;
    semesterTimeTableSearchForm: FormGroup;
    courseList: any[];
    semesterList: any[];
    subjectList: any[];
    sessionList: any[];
    teacherList: any[];
    weekList: any[];
    tableArray : any[] = [];
    public active = 1;
    week1: any[];
    week2: any[];
    week3: any[];
    week4: any[];
    week5: any[];
    week6: any[];
    week7: any[];
    isUpdatable = false;
    rolesAndPermission: any[] = [];
    permission: any[] = [];

    constructor(private subjectService: SubjectService, private roleAndPermissionService: RolesAndPermissionService
                ,private sessionService: SessionService){
        this.semesterTimeTableForm = new FormGroup({
            id: new FormControl(null),
            course_id: new FormControl(null, [Validators.required]),
            semester_id: new FormControl(null, [Validators.required]),
            session_id: new FormControl(null, [Validators.required]),
            teacher_id: new FormControl(null),
            subject_id: new FormControl(null),
            time_from: new FormControl(null),
            time_to: new FormControl(null),
            room_number: new FormControl(null),
            week_id: new FormControl(null),
        });
        this.semesterTimeTableSearchForm = new FormGroup({
            id: new FormControl(null),
            course_id: new FormControl(null, [Validators.required]),
            semester_id: new FormControl(null, [Validators.required]),
            session_id: new FormControl(null, [Validators.required]),
        });
        this.roleAndPermissionService.getRolesAndPermissionListener().subscribe((response) => {
            this.rolesAndPermission = response;
            this.permission = this.rolesAndPermission.find(x => x.name == 'CREATE SEMESTER TIMETABLE').permission;
        });
        this.rolesAndPermission = this.roleAndPermissionService.getRolesAndPermission();
        if(this.rolesAndPermission.length > 0){
            this.permission = this.rolesAndPermission.find(x => x.name == 'CREATE SEMESTER TIMETABLE').permission;
        }
        this.subjectService.getCourseListener().subscribe((response) => {
            this.courseList = response;
        });
        this.courseList = this.subjectService.getCourses();

        this.sessionService.getSessionListener().subscribe((response) => {
            this.sessionList = response;
        });
        this.sessionList = this.sessionService.getSessionList();

        this.subjectService.getWeekListener().subscribe((response) => {
            this.weekList = response;
        });
        this.weekList = this.subjectService.getWeekDays();
    }

    activeTab(data){
        this.active = data;
    }

    searchTimeTable(){
        if(!this.semesterTimeTableSearchForm.valid){
            this.semesterTimeTableSearchForm.markAllAsTouched();
            return;
        }
        this.subjectService.getSemesterTimeTable(this.semesterTimeTableSearchForm.value.course_id, this.semesterTimeTableSearchForm.value.semester_id
            , this.semesterTimeTableSearchForm.value.session_id)
            .subscribe((response: any) => {
                if(response.success == 1){
                    let x = response.data;
                    if(x.length == 0){
                        Swal.fire({
                            position: 'center',
                            icon: 'info',
                            title: 'No Data Found',
                            showConfirmButton: false,
                            timer: 1000
                        });
                    }
                    this.week1 = x.filter(x => x.week_id === 1);
                    this.week2 = x.filter(x => x.week_id === 2);
                    this.week3 = x.filter(x => x.week_id === 3);
                    this.week4 = x.filter(x => x.week_id === 4);
                    this.week5 = x.filter(x => x.week_id === 5);
                    this.week6 = x.filter(x => x.week_id === 6);
                    this.week7 = x.filter(x => x.week_id === 7);
                }
            });
    }

    getSemester(){
        this.subjectService.getSemesterByCourseId(this.semesterTimeTableForm.value.course_id).subscribe((response) => {
            // @ts-ignore
            this.semesterList = response.data;
        })
    }

    getSemesterSearch(){
        this.subjectService.getSemesterByCourseId(this.semesterTimeTableSearchForm.value.course_id).subscribe((response) => {
            // @ts-ignore
            this.semesterList = response.data;
        })
    }

    editSemesterTimeTable(data){
        Swal.fire({
            title: 'Please Wait !',
            html: 'Editing ...', // add html attribute if you want or remove
            allowOutsideClick: false,
            didOpen: () => {
                Swal.showLoading();
            }
        });
        this.subjectService.getSubjects(data.course_id, data.semester_id)
            .subscribe((response) => {
                // @ts-ignore
                this.subjectList = response.data;
                this.subjectService.getTeacherList(data.course_id, data.semester_id)
                    .subscribe((response) => {
                        // @ts-ignore
                        this.teacherList = response.data;
                        this.semesterTimeTableForm.patchValue(data);
                        this.active = 1;
                        this.semesterTimeTableForm.patchValue({room_number: data.room_no});
                        this.isUpdatable = true;
                        Swal.close();
                    });
            });
    }

    updateSemesterTimeTable(){
        if(!this.semesterTimeTableForm.controls['course_id'].valid){
            this.semesterTimeTableForm.controls['course_id'].markAsTouched();
            return;
        }
        if(!this.semesterTimeTableForm.controls['semester_id'].valid){
            this.semesterTimeTableForm.controls['semester_id'].markAsTouched();
            return;
        }
        this.subjectService.updateSemesterTimeTable(this.semesterTimeTableForm.value).subscribe((response: any) => {
            if(response.success){
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Updated Successfully',
                    showConfirmButton: false,
                    timer: 1000
                });
                this.cancelUpdate();
                this.week1 = [];
                this.week2 = [];
                this.week3 = [];
                this.week4 = [];
                this.week5 = [];
                this.week6 = [];
                this.week7 = [];
            }
        })
    }

    deleteSemesterTimeTable(data){
        Swal.fire({
            title: 'Confirmation',
            text: 'Do you sure to delete leave Type ?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete It!'
        }).then((result) => {
            if(result.isConfirmed){
                this.subjectService.deleteSemesterTimeTable(data.id).subscribe((response: any) => {
                    if(response.success == 1){
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'Successfully Deleted',
                            showConfirmButton: false,
                            timer: 1000
                        });
                        this.searchTimeTable();
                    }
                })
            }
        });
    }

    cancelUpdate(){
        this.semesterTimeTableForm.reset();
        this.isUpdatable = false;
    }

    getSubject(){
        this.subjectService.getSubjects(this.semesterTimeTableForm.value.course_id, this.semesterTimeTableForm.value.semester_id)
            .subscribe((response: any) => {
                this.subjectList = response.data;
            });
        this.subjectService.getTeacherList(this.semesterTimeTableForm.value.course_id, this.semesterTimeTableForm.value.semester_id)
            .subscribe((response: any) => {
               this.teacherList = response.data;
            });
    }

    createArray(){
        // @ts-ignore
        const session = JSON.parse(localStorage.getItem('session_id'));
        this.semesterTimeTableForm.patchValue({session_id: session});

        if(!session){
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Select Session',
                showConfirmButton: false,
                timer: 1000
            });
            return;
        }

        if(!this.semesterTimeTableForm.valid){
            this.semesterTimeTableForm.markAllAsTouched();
            return;
        }
        let time_from_sec = (parseInt(this.semesterTimeTableForm.value.time_from.split(':')[0]) * 3600) + (parseInt(this.semesterTimeTableForm.value.time_from.split(':')[1]) * 60);
        let time_to_sec = (parseInt(this.semesterTimeTableForm.value.time_to.split(':')[0]) * 3600) + (parseInt(this.semesterTimeTableForm.value.time_to.split(':')[1]) * 60);
        let formValue = this.semesterTimeTableForm.value;
        let flag = 0;
        if(time_from_sec > time_to_sec){
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Time to cannot be smaller tha time from',
                showConfirmButton: false,
                timer: 1500
            });
            return;
        }
        if(time_from_sec == time_to_sec){
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Time to and time from cannot be equal',
                showConfirmButton: false,
                timer: 1500
            });
            return;
        }
        this.tableArray.forEach(function (value){
            let array_time_from_sec = (parseInt(value.time_from.split(':')[0]) * 3600) + (parseInt(value.time_from.split(':')[1]) * 60);
            let array_time_to_sec  = (parseInt(value.time_to.split(':')[0]) * 3600) + (parseInt(value.time_to.split(':')[1]) * 60);
            if((value.week_id == formValue.week_id) && (value.teacher_id == formValue.teacher_id)){
                if((array_time_from_sec > time_from_sec) || (time_from_sec < array_time_to_sec)){
                    flag = 1;
                }else if((array_time_from_sec > time_to_sec) || (time_to_sec < array_time_to_sec)){
                    flag = 1;
                }
            }
        })

        if(flag == 1){
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Time overlap',
                showConfirmButton: false,
                timer: 1000
            });
            return;
        }

        let teacher_data = this.teacherList[this.teacherList.findIndex(x => x.teacher_id == this.semesterTimeTableForm.value.teacher_id)];
        let temp = [
            {
                "week_id" : this.semesterTimeTableForm.value.week_id,
                "week_name" : this.weekList[this.weekList.findIndex(x => x.id == this.semesterTimeTableForm.value.week_id)].name,
                "subject_id" : this.semesterTimeTableForm.value.subject_id,
                "subject_name" : this.subjectList[this.subjectList.findIndex(x => x.id == this.semesterTimeTableForm.value.subject_id)].name,
                "teacher_id" : this.semesterTimeTableForm.value.teacher_id,
                "teacher_name" : teacher_data.first_name + ' ' + teacher_data.middle_name + ' ' + teacher_data.last_name,
                "room_no" : this.semesterTimeTableForm.value.room_number,
                // "time_from" : this.semesterTimeTableForm.value.time_from.hour + ':' + this.semesterTimeTableForm.value.time_from.minute,
                // "time_to" : this.semesterTimeTableForm.value.time_to.hour + ':' + this.semesterTimeTableForm.value.time_to.minute,
                "time_from": this.semesterTimeTableForm.value.time_from,
                "time_to": this.semesterTimeTableForm.value.time_to,
            }
        ];
        this.semesterTimeTableForm.controls['week_id'].reset();
        this.semesterTimeTableForm.controls['subject_id'].reset();
        this.semesterTimeTableForm.controls['teacher_id'].reset();
        this.semesterTimeTableForm.controls['room_number'].reset();
        this.semesterTimeTableForm.controls['time_from'].reset();
        this.semesterTimeTableForm.controls['time_to'].reset();
        this.tableArray.push(temp[0]);

        // if(this.tableArray.length > 0){
        //     this.semesterTimeTableForm.get('course_id')?.disable();
        //     this.semesterTimeTableForm.get('semester_id')?.disable();
        // }

        window.scroll({
            top: document.documentElement.scrollHeight,
            left: 0,
            behavior: 'smooth'
        });
    }

    removeRecord(index){
        Swal.fire({
            title: 'Confirmation',
            text: 'Do you want to remove ?',
            icon: 'info',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, remove It!'
        }).then((result) => {
            this.tableArray.splice(index,1);
            // if(this.tableArray.length == 0){
            //     this.semesterTimeTableForm.get('course_id')?.enable();
            //     this.semesterTimeTableForm.get('semester_id')?.enable();
            // }
        });
    }

    createSemesterTimetable(){
        if(!this.semesterTimeTableForm.controls['course_id'].valid){
            this.semesterTimeTableForm.controls['course_id'].markAsTouched();
            return;
        }
        if(!this.semesterTimeTableForm.controls['semester_id'].valid){
            this.semesterTimeTableForm.controls['semester_id'].markAsTouched();
            return;
        }
        if(this.tableArray.length == 0){
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Add timetables before save',
                showConfirmButton: false,
                timer: 1500
            });
        }
        Swal.fire({
            title: 'Confirmation',
            text: 'Please check once before saving',
            icon: 'info',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, save It!'
        }).then((result) => {
            let arr = [
                {
                    "course_id": this.semesterTimeTableForm.value.course_id,
                    "semester_id": this.semesterTimeTableForm.value.semester_id,
                    "session_id": this.semesterTimeTableForm.value.session_id,
                    "details": this.tableArray
                }
            ];
            this.subjectService.createSemesterTimetable(arr[0]).subscribe((response) => {
                // @ts-ignore
                if(response.success == 1){
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Semester Timetable Created',
                        showConfirmButton: false,
                        timer: 1000
                    });
                    this.semesterTimeTableForm.reset();
                    this.tableArray = [];
                }
            });
        });
    }
}
