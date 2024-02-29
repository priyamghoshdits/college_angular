import { Component } from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgForOf, NgIf} from "@angular/common";
import {NgxPaginationModule} from "ngx-pagination";
import {SubjectService} from "../../../services/subject.service";
import {SessionService} from "../../../services/session.service";
import {ReportService} from "../../../services/report.service";
import {MatIconModule} from "@angular/material/icon";

@Component({
  selector: 'app-attendance-report',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf,
    NgIf,
    NgxPaginationModule,
    ReactiveFormsModule,
    MatIconModule
  ],
  templateUrl: './attendance-report.component.html',
  styleUrl: './attendance-report.component.scss'
})
export class AttendanceReportComponent {
  attendanceReportForm: FormGroup;
  courseList: any[];
  semesterList: any[];
  sessionList: any[];
  studentAttendanceList: any[] = [];
  constructor(private subjectService:SubjectService, private sessionService: SessionService
              ,private reportService: ReportService) {
    this.attendanceReportForm = new FormGroup({
      id: new FormControl(null),
      course_id: new FormControl(null, [Validators.required]),
      semester_id: new FormControl(null, [Validators.required]),
      session_id: new FormControl(null, [Validators.required]),
      from_date: new FormControl(null, [Validators.required]),
      to_date: new FormControl(null, [Validators.required]),
    });

    this.subjectService.getCourseListener().subscribe((response) => {
      this.courseList = response;
    });
    this.courseList = this.subjectService.getCourses();

    this.sessionService.getSessionListener().subscribe((response) => {
      this.sessionList = response;
    });
    this.sessionList = this.sessionService.getSessionList();
  }

  getSemester(){
    this.subjectService.getSemesterByCourseId(this.attendanceReportForm.value.course_id).subscribe((response: any) => {
      this.semesterList = response.data;
    })
  }

  getAttendance(){
    this.reportService.getAttendanceReport(this.attendanceReportForm.value).subscribe((response: any) => {
      if(response.success){
        this.studentAttendanceList = response.data;
      }
    })
  }

  print_div(){
// @ts-ignore
    const printContents = document.getElementById('sectionToPrint').innerHTML;
    const originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
  }

}
