import { Component } from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import {NgForOf, NgIf} from "@angular/common";
import {SubjectService} from "../../../services/subject.service";
import {ReportService} from "../../../services/report.service";
import Swal from "sweetalert2";
import * as XLSX from "xlsx";

@Component({
  selector: 'app-fees-collection-report',
  standalone: true,
  imports: [
    FormsModule,
    MatIconModule,
    NgForOf,
    NgIf,
    ReactiveFormsModule
  ],
  templateUrl: './fees-collection-report.component.html',
  styleUrl: './fees-collection-report.component.scss'
})
export class FeesCollectionReportComponent {
  feesCollectionReportForm: FormGroup;
  courseList: any[];
  semesterList: any[];
  feesCollectionReport: any[] = [];
  total = 0;
  constructor(private subjectService: SubjectService, private reportService: ReportService) {
    this.feesCollectionReportForm = new FormGroup({
      id: new FormControl(null),
      course_id: new FormControl(null, [Validators.required]),
      semester_id: new FormControl(null, [Validators.required]),
      from_date: new FormControl(null, [Validators.required]),
      to_date: new FormControl(null, [Validators.required]),
    });
    this.subjectService.getCourseListener().subscribe((response) => {
      this.courseList = response;
    });
    this.courseList = this.subjectService.getCourses();
  }

  getSemester(){
    this.subjectService.getSemesterByCourseId(this.feesCollectionReportForm.value.course_id).subscribe((response: any) => {
      this.semesterList = response.data;
    })
  }

  getFeesCollectionReport(){
    this.reportService.getFeesCollectionReport(this.feesCollectionReportForm.value).subscribe((response: any) => {
      if(response.success == 1){
        this.feesCollectionReport = response.data;
        if(this.feesCollectionReport.length == 0){
          Swal.fire({
            position: 'center',
            icon: 'info',
            title: 'No Data Found',
            showConfirmButton: false,
            timer: 1000
          });
        }else{
          this.total = this.feesCollectionReport.reduce((accumulator, currentItem) => accumulator + parseInt(currentItem.amount), 0);
        }
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

  exportExcel(){
    // @ts-ignore
    let x: [{ "Course": any; "Semester": any; "Student Name": any; "Transaction ID": any; "Amount": any, "Payment Date": any}] = [];
    let output = [];
    this.feesCollectionReport.forEach(function (value){
      x =[{
        'Course': value.course_name,
        'Semester': value.semester_name,
        'Student Name': value.student_name,
        'Transaction ID': value.transaction_id,
        'Amount': value.amount,
        'Payment Date': value.paid_on,
      }];
      // @ts-ignore
      output.push(x[0]);
    });

    /* pass here the table id */
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(output);
    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    /* save to file */
    XLSX.writeFile(wb, 'fees-collection-Report.xlsx');
  }

}
