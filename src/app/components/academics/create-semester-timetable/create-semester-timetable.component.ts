import { Component } from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import {JsonPipe, NgForOf} from "@angular/common";
import {NgxPaginationModule} from "ngx-pagination";
import {SubjectService} from "../../../services/subject.service";
import {NgbTimepicker} from "@ng-bootstrap/ng-bootstrap";
import Swal from "sweetalert2";

@Component({
  selector: 'app-create-semester-timetable',
  standalone: true,
    imports: [
        FormsModule,
        MatIconModule,
        NgForOf,
        NgxPaginationModule,
        ReactiveFormsModule,
        NgbTimepicker,
        JsonPipe
    ],
  templateUrl: './create-semester-timetable.component.html',
  styleUrl: './create-semester-timetable.component.scss'
})
export class CreateSemesterTimetableComponent {
    semesterTimeTableForm: FormGroup;
    courseList: any[];
    semesterList: any[];
    subjectList: any[];
    teacherList: any[];
    weekList: any[];
    tableArray : any[] = [];

    constructor(private subjectService: SubjectService) {
        this.semesterTimeTableForm = new FormGroup({
            id: new FormControl(null),
            course_id: new FormControl(null, [Validators.required]),
            semester_id: new FormControl(null, [Validators.required]),
            teacher_id: new FormControl(null),
            subject_id: new FormControl(null),
            time_from: new FormControl(null),
            time_to: new FormControl(null),
            room_number: new FormControl(null),
            week_id: new FormControl(null),
        });
        this.subjectService.getCourseListener().subscribe((response) => {
            this.courseList = response;
        });
        this.courseList = this.subjectService.getCourses();

        this.subjectService.getWeekListener().subscribe((response) => {
            this.weekList = response;
        });
        this.weekList = this.subjectService.getWeekDays();
    }

    getSemester(){
        this.subjectService.getSemesterByCourseId(this.semesterTimeTableForm.value.course_id).subscribe((response) => {
            // @ts-ignore
            this.semesterList = response.data;
        })
    }

    getSubject(){
        this.subjectService.getSubjects(this.semesterTimeTableForm.value.course_id, this.semesterTimeTableForm.value.semester_id)
            .subscribe((response) => {
                // @ts-ignore
                this.subjectList = response.data;
            });
        this.subjectService.getTeacherList(this.semesterTimeTableForm.value.course_id, this.semesterTimeTableForm.value.semester_id)
            .subscribe((response) => {
                // @ts-ignore
               this.teacherList = response.data;
            });
    }

    createArray(){
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
        });
    }

    createSemesterTimetable(){
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
