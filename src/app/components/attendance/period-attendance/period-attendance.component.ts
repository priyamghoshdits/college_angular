import { Component } from '@angular/core';
import {SubjectService} from "../../../services/subject.service";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import {DatePipe, NgForOf, NgIf} from "@angular/common";
import {NgxPaginationModule} from "ngx-pagination";
import {StudentService} from "../../../services/student.service";
import Swal from "sweetalert2";
import {SessionService} from "../../../services/session.service";

@Component({
  selector: 'app-period-attendance',
  standalone: true,
  imports: [
    FormsModule,
    MatIconModule,
    NgForOf,
    NgxPaginationModule,
    ReactiveFormsModule,
    NgIf,
  ],
  providers: [DatePipe],
  templateUrl: './period-attendance.component.html',
  styleUrl: './period-attendance.component.scss'
})
export class PeriodAttendanceComponent {
  attendanceForm: FormGroup;
  courseList: any[];
  semesterList: any[];
  subjectList: any[];
  sessionList: any[];
  studentList: any[] = [];
  p: number;
  markAllAsPresent = false;
  markAllAsAbsent = true;
  markAllAsLate = false;
  markAllAsHalfDay = false

  constructor(private subjectService: SubjectService, private studentService:StudentService
              , private sessionService: SessionService, public datepipe: DatePipe) {
    this.attendanceForm = new FormGroup({
      id: new FormControl(null),
      course_id: new FormControl(null, [Validators.required]),
      semester_id: new FormControl(null, [Validators.required]),
      date: new FormControl(null, [Validators.required]),
      subject_id: new FormControl(null, [Validators.required]),
      session_id: new FormControl(null, [Validators.required]),
    });
    this.attendanceForm.patchValue({date: this.datepipe.transform(new Date(), 'yyyy-MM-dd')});
    this.subjectService.getCourseListener().subscribe((response) => {
      this.courseList = response;
    })
    this.courseList = this.subjectService.getCourses();

    this.sessionService.getSessionListener().subscribe((response) => {
      this.sessionList = response;
    });
    this.sessionList = this.sessionService.getSessionList();
  }

  getSemester(){
    this.subjectService.getSemesterByCourseId(this.attendanceForm.value.course_id).subscribe((response) => {
      // @ts-ignore
      this.semesterList = response.data;
    })
  }

  markForAll(status){
    this.studentList.forEach(function (value){
      value.attendance = status;
    });
  }

  getSubject(){
    this.subjectService.getSubjects(this.attendanceForm.value.course_id, this.attendanceForm.value.semester_id).subscribe((response) => {
      // @ts-ignore
      this.subjectList = response.data;
    });
  }

  getStudentAttendanceList(){
    if(!this.attendanceForm.valid){
      this.attendanceForm.markAllAsTouched();
      return;
    }
    this.studentList = [];
    this.studentService.getStudentAttendance(this.attendanceForm.value.course_id
        ,this.attendanceForm.value.semester_id, this.attendanceForm.value.date
        , this.attendanceForm.value.subject_id
        , this.attendanceForm.value.session_id).subscribe((response: any) => {

          if(response.semester_time_table == 0){
            Swal.fire({
              title: 'Confirmation',
              text: 'This subject class is not assigned today still want to give attendance ?',
              icon: 'info',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Yes!'
            }).then((result) => {
              if(result.isConfirmed){
                this.studentList = response.data;
                if(this.studentList.length == 0){
                  Swal.fire({
                    position: 'center',
                    icon: 'info',
                    title: 'No Student Found',
                    showConfirmButton: false,
                    timer: 1000
                  });
                }
              }
            });
          }else{
            this.studentList = response.data;
            if(this.studentList.length == 0){
              Swal.fire({
                position: 'center',
                icon: 'info',
                title: 'No Student Found',
                showConfirmButton: false,
                timer: 1000
              });
            }
          }
    });
  }

  saveAttendance(){
    let date = this.attendanceForm.value.date;
    let subject_id = this.attendanceForm.value.subject_id;
    let course_id = this.attendanceForm.value.course_id;
    let semester_id = this.attendanceForm.value.semester_id;
    let session_id = this.attendanceForm.value.session_id;
    this.studentList.forEach(function (value){
      value.date = date;
      value.subject_id = subject_id;
      value.course_id = course_id;
      value.semester_id = semester_id;
      value.session_id = session_id;
    })
    this.studentService.saveStudentAttendance(this.studentList).subscribe((response) => {
      // @ts-ignore
      if(response.success == 1){
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Attendance saved',
          showConfirmButton: false,
          timer: 1000
        });
        this.attendanceForm.reset();
        this.studentList = [];
      }
    })
  }

}
