import { Component } from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import {NgForOf, NgIf} from "@angular/common";
import {NgxPrintDirective} from "ngx-print";
import {SubjectService} from "../../../services/subject.service";
import {SessionService} from "../../../services/session.service";
import {StudentService} from "../../../services/student.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-send-student-login-credential',
  standalone: true,
    imports: [
        FormsModule,
        MatIconModule,
        NgForOf,
        NgIf,
        NgxPrintDirective,
        ReactiveFormsModule
    ],
  templateUrl: './send-student-login-credential.component.html',
  styleUrl: './send-student-login-credential.component.scss'
})
export class SendStudentLoginCredentialComponent {
    examinationReportForm: FormGroup;
    courseList: any[];
    semesterList: any[];
    sessionList: any[];
    studentList: any[] = [];
    constructor(private subjectService: SubjectService, private sessionService:SessionService, private studentService:StudentService) {
        this.examinationReportForm = new FormGroup({
            id: new FormControl(null),
            course_id: new FormControl(null, [Validators.required]),
            semester_id: new FormControl(null, [Validators.required]),
            session_id: new FormControl(null, [Validators.required]),
        });

        this.sessionService.getSessionListener().subscribe((response) => {
            this.sessionList = response;
        });
        this.sessionList = this.sessionService.getSessionList();

        this.subjectService.getCourseListener().subscribe((response) => {
            this.courseList = response;
        });
        this.courseList = this.subjectService.getCourses();
    }

    getSemester(){
        this.subjectService.getSemesterByCourseId(this.examinationReportForm.value.course_id).subscribe((response: any) => {
            this.semesterList = response.data;
        })
    }

    getStudents(){
        this.studentService.getSessionWiseStudent(this.examinationReportForm.value).subscribe((response: any) => {
            if(response.success == 1){
                this.studentList = response.data;
            }
        })
    }

    sendCredentials(data){
        Swal.fire({
            title: 'Send Credentials',
            text: 'New Password will be generated and sent ?',
            icon: 'info',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, send!'
        }).then((result) => {
           if(result.isConfirmed){
                this.studentService.sendLoginCredentials(data.id).subscribe((response: any) => {
                    if(response.success == 1){
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: response.message,
                            showConfirmButton: false,
                            timer: 1000
                        });
                    }
               })
           }
        });
    }

}
