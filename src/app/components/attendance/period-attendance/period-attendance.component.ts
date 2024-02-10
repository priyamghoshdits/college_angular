import { Component } from '@angular/core';
import {SubjectService} from "../../../services/subject.service";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import {NgForOf} from "@angular/common";
import {NgxPaginationModule} from "ngx-pagination";
import {StudentService} from "../../../services/student.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-period-attendance',
  standalone: true,
  imports: [
    FormsModule,
    MatIconModule,
    NgForOf,
    NgxPaginationModule,
    ReactiveFormsModule,
  ],
  templateUrl: './period-attendance.component.html',
  styleUrl: './period-attendance.component.scss'
})
export class PeriodAttendanceComponent {
  attendanceForm: FormGroup;
  courseList: any[];
  semesterList: any[];
  subjectList: any[];
  studentList: any[] = [];
  p: number;

  constructor(private subjectService: SubjectService, private studentService:StudentService) {
    this.attendanceForm = new FormGroup({
      id: new FormControl(null),
      course_id: new FormControl(null, [Validators.required]),
      semester_id: new FormControl(null, [Validators.required]),
      date: new FormControl(null, [Validators.required]),
      subject_id: new FormControl(null, [Validators.required]),
    });
    this.subjectService.getCourseListener().subscribe((response) => {
      this.courseList = response;
    })
    this.courseList = this.subjectService.getCourses();
  }

  getSemester(){
    this.subjectService.getSemesterByCourseId(this.attendanceForm.value.course_id).subscribe((response) => {
      // @ts-ignore
      this.semesterList = response.data;
    })
  }

  getSubject(){
    this.subjectService.getSubjects(this.attendanceForm.value.course_id, this.attendanceForm.value.semester_id).subscribe((response) => {
      // @ts-ignore
      this.subjectList = response.data;
    });
  }

  getStudentAttendanceList(){
    this.studentList = [];
    this.studentService.getStudentAttendance(this.attendanceForm.value.course_id,this.attendanceForm.value.semester_id, this.attendanceForm.value.date, this.attendanceForm.value.subject_id).subscribe((response) => {
      // @ts-ignore
      this.studentList = response.data;
    });
  }

  saveAttendance(){
    let date = this.attendanceForm.value.date;
    let subject_id = this.attendanceForm.value.subject_id;
    let course_id = this.attendanceForm.value.course_id;
    let semester_id = this.attendanceForm.value.semester_id;
    this.studentList.forEach(function (value){
      value.date = date;
      value.subject_id = subject_id;
      value.course_id = course_id;
      value.semester_id = semester_id;
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
