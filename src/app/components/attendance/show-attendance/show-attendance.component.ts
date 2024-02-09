import { Component } from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgForOf} from "@angular/common";
import {NgxPaginationModule} from "ngx-pagination";
import {StudentService} from "../../../services/student.service";
import {SubjectService} from "../../../services/subject.service";

@Component({
  selector: 'app-show-attendance',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf,
    NgxPaginationModule,
    ReactiveFormsModule
  ],
  templateUrl: './show-attendance.component.html',
  styleUrl: './show-attendance.component.scss'
})
export class ShowAttendanceComponent {
  attendanceForm: FormGroup;
  semesterList: any[];
  courseList: any[];
  subjectList: any[];
  studentList: any[];
  constructor(private subjectService: SubjectService, private studentService: StudentService) {
    this.attendanceForm = new FormGroup({
      id: new FormControl(null),
      course_id: new FormControl(null, [Validators.required]),
      semester_id: new FormControl(null, [Validators.required]),
      date: new FormControl(null, [Validators.required]),
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


  getStudentAttendanceList(){
    this.studentList = [];
    this.studentService.getUserAttendance(this.attendanceForm.value.course_id,this.attendanceForm.value.semester_id, this.attendanceForm.value.date).subscribe((response) => {
      // @ts-ignore
      this.studentList = response.data;
    });
  }

}
