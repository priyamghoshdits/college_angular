import { Component } from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import {NgForOf, NgIf} from "@angular/common";
import {NgxPaginationModule} from "ngx-pagination";
import {SubjectService} from "../../../services/subject.service";
import Swal from "sweetalert2";
import {StudentService} from "../../../services/student.service";
import {SessionService} from "../../../services/session.service";
import {ExaminationService} from "../../../services/examination.service";
import {NgbNav, NgbNavItem, NgbNavLink, NgbNavLinkBase, NgbNavOutlet} from "@ng-bootstrap/ng-bootstrap";
import { RolesAndPermissionService } from 'src/app/services/roles-and-permission.service';

@Component({
  selector: 'app-marksheet',
  standalone: true,
    imports: [
        FormsModule,
        MatIconModule,
        NgForOf,
        NgIf,
        NgxPaginationModule,
        ReactiveFormsModule,
        NgbNav,
        NgbNavLink,
        NgbNavLinkBase,
        NgbNavItem,
        NgbNavOutlet
    ],
  templateUrl: './marksheet.component.html',
  styleUrl: './marksheet.component.scss'
})
export class MarksheetComponent {
    isUpdatable = false;
    subjectMarksForm: FormGroup;
    subjectMarksSearchForm: FormGroup;
    courseList: any[];
    semesterList: any[];
    subjectList: any[];
    copySubjectList: any[];
    sessionList: any[];
    studentList: any[];
    tempMarkSheet: any[] = [];
    rolesAndPermission: any[] = [];
    permission: any[] = [];
    active = 1;
    markSheetList: any[];
    session_id = null;

    constructor(private subjectService: SubjectService,private studentSubject: StudentService
        , private sessionSubject: SessionService, private examinationService: ExaminationService, private roleAndPermissionService: RolesAndPermissionService) {
        this.subjectMarksForm = new FormGroup({
            id: new FormControl(null),
            course_id: new FormControl(null, [Validators.required]),
            semester_id: new FormControl(null, [Validators.required]),
            subject_id: new FormControl(null, [Validators.required]),
            session_id: new FormControl(null, [Validators.required]),
            student_id: new FormControl(null, [Validators.required]),
            division: new FormControl(null, [Validators.required]),
            date_of_issue: new FormControl(null, [Validators.required]),
            result_status: new FormControl(null, [Validators.required]),
            marks: new FormControl(null, [Validators.required]),
            min_marks: new FormControl(null, [Validators.required]),
            full_marks: new FormControl(null, [Validators.required]),
        });
        this.subjectMarksSearchForm = new FormGroup({
            id: new FormControl(null),
            course_id: new FormControl(null, [Validators.required]),
            semester_id: new FormControl(null, [Validators.required]),
            session_id: new FormControl(null, [Validators.required]),
        });
        this.subjectService.getCourseListener().subscribe((response) => {
            this.courseList = response;
        });
        this.courseList = this.subjectService.getCourses();
        this.sessionSubject.getSessionListener().subscribe((response) => {
            this.sessionList = response;
        });
        this.sessionList = this.sessionSubject.getSessionList();

        this.roleAndPermissionService.getRolesAndPermissionListener().subscribe((response) => {
            this.rolesAndPermission = response;
            this.permission = this.rolesAndPermission.find(x => x.name == 'UPDATE MARKS').permission;
        });
        this.rolesAndPermission = this.roleAndPermissionService.getRolesAndPermission();
        if(this.rolesAndPermission.length > 0){
            this.permission = this.rolesAndPermission.find(x => x.name == 'UPDATE MARKS').permission;
        }
    }

    activeTab(data) {
        this.active = data;
    }

    getSemester(){
        this.subjectService.getSemesterByCourseId(this.subjectMarksForm.value.course_id ?? this.subjectMarksSearchForm.value.course_id).subscribe((response: any) => {
            this.semesterList = response.data;
        })
    }

    getSubject(){
        // @ts-ignore
        const session_id = JSON.parse(localStorage.getItem('session_id'));
        this.subjectMarksForm.patchValue({session_id: session_id});
        this.subjectService.getSubjects(this.subjectMarksForm.value.course_id, this.subjectMarksForm.value.semester_id)
            .subscribe((response: any) => {
                this.subjectList = response.data;
                this.copySubjectList = [...this.subjectList];
                this.getStudent();
            });
    }

    getStudent(){
        this.studentSubject.getSessionWiseStudent(this.subjectMarksForm.value).subscribe((response: any) => {
            if(response.success == 1){
                this.studentList = response.data;
            }
        })
    }

    getMarkSheet(){
        this.examinationService.getMarkSheet(this.subjectMarksSearchForm.value).subscribe((response: any) => {
            if(response.success == 1){
                this.markSheetList = response.data;
            }
        })
    }

    addMarksheet(){

        // @ts-ignore
        this.session_id = JSON.parse(localStorage.getItem('session_id'));
        this.subjectMarksForm.patchValue({ session_id: this.session_id });

        if (!this.session_id) {
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Select Session',
                showConfirmButton: false,
                timer: 1000
            });
            return;
        }

        if(!this.subjectMarksForm.valid){
            this.subjectMarksForm.markAllAsTouched();
            return;
        }
        if(parseInt(this.subjectMarksForm.value.full_marks) < parseInt(this.subjectMarksForm.value.marks)){
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Marks cannot be greater than full marks',
                showConfirmButton: false,
                timer: 1500
            });
            return;
        }
        let a = [{
            'course_id': this.subjectMarksForm.value.course_id,
            'semester_id': this.subjectMarksForm.value.semester_id,
            'subject_id': this.subjectMarksForm.value.subject_id,
            'subject_name': this.subjectList.find(x => x.id == this.subjectMarksForm.value.subject_id).name,
            'session_id': this.subjectMarksForm.value.session_id,
            'student_id': this.subjectMarksForm.value.student_id,
            'date_of_issue': this.subjectMarksForm.value.date_of_issue,
            'division': this.subjectMarksForm.value.division,
            'result_status': this.subjectMarksForm.value.result_status,
            'marks': this.subjectMarksForm.value.marks,
            'min_marks': this.subjectMarksForm.value.min_marks,
            'full_marks': this.subjectMarksForm.value.full_marks
        }];
        this.tempMarkSheet.push(a[0]);
        const index = this.subjectList.findIndex(x => x.id == this.subjectMarksForm.value.subject_id);
        this.subjectList.splice(index,1);
        this.subjectMarksForm.controls['subject_id'].reset();
        this.subjectMarksForm.controls['marks'].reset();
    }

    editMarksheet(record){
        this.subjectMarksForm.patchValue(record);
        this.studentSubject.getSessionWiseStudent(this.subjectMarksForm.value).subscribe((response: any) => {
            if(response.success == 1){
                this.studentList = response.data;
                this.subjectService.getSubjects(this.subjectMarksForm.value.course_id, this.subjectMarksForm.value.semester_id)
                    .subscribe((response: any) => {
                        // this.subjectMarksForm.patchValue(record);
                        this.subjectList = response.data;
                        this.copySubjectList = [...this.subjectList];
                        const temp : [] = [];
                        const subjectList = [...this.subjectList];
                        this.subjectMarksForm.patchValue(record);
                        record.subject_details.forEach(function (value){
                            let a = [{
                                'course_id': record.course_id,
                                'semester_id': record.semester_id,
                                'subject_id': value.subject_id,
                                'subject_name': subjectList.find(x => x.id == value.subject_id).name,
                                'session_id': record.session_id,
                                'student_id': record.student_id,
                                'marks': value.marks,
                                'full_marks': value.full_marks
                            }];
                            // @ts-ignore
                            temp.push(a[0]);
                            const index = subjectList.findIndex(x => x.id == value.subject_id);
                            subjectList.splice(index,1);
                        });
                        this.subjectList = subjectList;
                        this.tempMarkSheet = temp;
                    });
            }
        })
        this.active = 1;
    }

    removeFromArray(index,record){
        // console.log(record);
        // console.log(this.copySubjectList);
        this.tempMarkSheet.splice(index,1);
        this.subjectList.push(this.copySubjectList.find(x => x.id == record.subject_id));
    }

    saveMarkSheet(){
        this.examinationService.saveMarksheet(this.tempMarkSheet).subscribe((response: any) => {
            if(response.success == 1){
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Marksheet successfully saved',
                    showConfirmButton: false,
                    timer: 1500
                });
            }
            this.subjectMarksForm.reset();
            this.tempMarkSheet = [];
        })
    }
}
