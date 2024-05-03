import { Component } from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgForOf, NgIf} from "@angular/common";
import {NgxPaginationModule} from "ngx-pagination";
import {SubjectService} from "../../../services/subject.service";
import {SessionService} from "../../../services/session.service";
import {ReportService} from "../../../services/report.service";
import {MatIconModule} from "@angular/material/icon";
import jspdf from 'jspdf';
import * as XLSX from 'xlsx';
import Swal from "sweetalert2";
import {NgxPrintDirective} from "ngx-print";

@Component({
  selector: 'app-attendance-report',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf,
    NgIf,
    NgxPaginationModule,
    ReactiveFormsModule,
    MatIconModule,
    NgxPrintDirective
  ],
  templateUrl: './attendance-report.component.html',
  styleUrl: './attendance-report.component.scss'
})
export class AttendanceReportComponent {
  settings = {
    table: {
      'width': '100%',
      'border-spacing': '0',
      'border-collapse': 'collapse',
      'border': '1px solid #000',
    },
    th: {
      'border': '1px solid #000',
    },
    td: {
      'border': '1px solid #000',
    }
  }
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
    // @ts-ignore
    const session_id = JSON.parse(localStorage.getItem('session_id'));
    this.attendanceReportForm.patchValue({ session_id: session_id });

    if (!session_id) {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Select Session',
        showConfirmButton: false,
        timer: 1000
      });
      return;
    }

    if(!this.attendanceReportForm.valid){
      this.attendanceReportForm.markAllAsTouched();
      return;
    }
    this.reportService.getAttendanceReport(this.attendanceReportForm.value).subscribe((response: any) => {
      if(response.success){
        this.studentAttendanceList = response.data;
        if(this.studentAttendanceList.length == 0){
          Swal.fire({
            position: 'center',
            icon: 'info',
            title: 'No Data Found',
            showConfirmButton: false,
            timer: 1000
          });
        }
      }
    })
  }

  getAttendanceReport(){
    this.reportService.getStudentPerDayAttendance().subscribe((response: any) => {

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

    exportExcel(): void {
        // @ts-ignore
      let x: [{ Percentage: any; Present: any; Absent: any; "Total Classes": any; Name: any }] = [];
      let output = [];
      this.studentAttendanceList.forEach(function (value){
        x =[{
          'Name' : value.name,
          'Total Classes': value.total_classes,
          'Present': value.present,
          'Absent': value.absent,
          'Percentage': value.attendance_percentage,
        }];
        // @ts-ignore
        output.push(x[0]);
      })
        /* pass here the table id */
        const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(output);
        /* generate workbook and add the worksheet */
        const wb: XLSX.WorkBook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
        /* save to file */
        XLSX.writeFile(wb, 'Attendance-Report.xlsx');
    }

}
