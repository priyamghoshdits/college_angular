import { Component } from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import {NgForOf, NgIf} from "@angular/common";
import {NgxPaginationModule} from "ngx-pagination";
import {SubjectService} from "../../../services/subject.service";
import Swal from "sweetalert2";
import {StudentService} from "../../../services/student.service";
import {SessionService} from "../../../services/session.service";

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
    sessionList: any[];
    studentList: any[];

    constructor(private subjectService: SubjectService,private studentSubject: StudentService
                , private sessionSubject: SessionService) {
        this.subjectMarksForm = new FormGroup({
            id: new FormControl(null),
            course_id: new FormControl(null, [Validators.required]),
            semester_id: new FormControl(null, [Validators.required]),
            subject_id: new FormControl(null, [Validators.required]),
            session_id: new FormControl(null, [Validators.required]),
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
        console.log(this.subjectMarksForm.value);
    }
}
