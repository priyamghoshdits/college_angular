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

@Component({
  selector: 'app-marksheet',
  standalone: true,
    imports: [
        FormsModule,
        MatIconModule,
        NgForOf,
        NgIf,
        NgxPaginationModule,
        ReactiveFormsModule
    ],
  templateUrl: './marksheet.component.html',
  styleUrl: './marksheet.component.scss'
})
export class MarksheetComponent {
    isUpdatable = false;
    subjectMarksForm: FormGroup;
    courseList: any[];
    semesterList: any[];
    subjectList: any[];
    copySubjectList: any[];
    sessionList: any[];
    studentList: any[];
    tempMarkSheet: any[] = [];

    constructor(private subjectService: SubjectService,private studentSubject: StudentService
                , private sessionSubject: SessionService, private examinationService: ExaminationService) {
        this.subjectMarksForm = new FormGroup({
            id: new FormControl(null),
            course_id: new FormControl(null, [Validators.required]),
            semester_id: new FormControl(null, [Validators.required]),
            subject_id: new FormControl(null, [Validators.required]),
            session_id: new FormControl(null, [Validators.required]),
            student_id: new FormControl(null, [Validators.required]),
            marks: new FormControl(null, [Validators.required]),
            full_marks: new FormControl(null, [Validators.required]),
        });
        this.subjectService.getCourseListener().subscribe((response) => {
            this.courseList = response;
        });
        this.courseList = this.subjectService.getCourses();
        this.sessionSubject.getSessionListener().subscribe((response) => {
            this.sessionList = response;
        });
        this.sessionList = this.sessionSubject.getSessionList();
    }

    getSemester(){
        this.subjectService.getSemesterByCourseId(this.subjectMarksForm.value.course_id).subscribe((response: any) => {
            this.semesterList = response.data;
        })
    }

    getSubject(){
        this.subjectService.getSubjects(this.subjectMarksForm.value.course_id, this.subjectMarksForm.value.semester_id)
            .subscribe((response: any) => {
                this.subjectList = response.data;
                this.copySubjectList = [...this.subjectList];
            });
    }

    getStudent(){
        this.studentSubject.getSessionWiseStudent(this.subjectMarksForm.value).subscribe((response: any) => {
            if(response.success == 1){
                this.studentList = response.data;
            }
        })
    }

    addMarksheet(){
        if(!this.subjectMarksForm.valid){
            this.subjectMarksForm.markAllAsTouched();
            return;
        }
        if(this.subjectMarksForm.value.full_marks < this.subjectMarksForm.value.marks){
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
            'marks': this.subjectMarksForm.value.marks,
            'full_marks': this.subjectMarksForm.value.full_marks
        }];
        this.tempMarkSheet.push(a[0]);
        const index = this.subjectList.findIndex(x => x.id == this.subjectMarksForm.value.subject_id);
        this.subjectList.splice(index,1);
        this.subjectMarksForm.controls['subject_id'].reset();
        this.subjectMarksForm.controls['marks'].reset();
    }

    removeFromArray(index,record){
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
