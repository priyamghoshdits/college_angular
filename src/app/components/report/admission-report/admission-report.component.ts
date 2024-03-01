import { Component } from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import {NgForOf, NgIf} from "@angular/common";
import {ReportService} from "../../../services/report.service";
import Swal from "sweetalert2";
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-admission-report',
  standalone: true,
  imports: [
    FormsModule,
    MatIconModule,
    NgForOf,
    NgIf,
    ReactiveFormsModule
  ],
  templateUrl: './admission-report.component.html',
  styleUrl: './admission-report.component.scss'
})
export class AdmissionReportComponent {
  admissionReportForm: FormGroup;
  admissionReport: any[] = [];
  constructor(private reportService: ReportService) {
    this.admissionReportForm = new FormGroup({
      id: new FormControl(null),
      from_date: new FormControl(null, [Validators.required]),
      to_date: new FormControl(null, [Validators.required]),
    });
  }

  getStudentReport(){

    this.reportService.getStudentReport(this.admissionReportForm.value).subscribe((response:any) => {
      if(response.success == 1){
        this.admissionReport = response.data;
        if(this.admissionReport.length == 0){
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
    let x: [{ "Date Of Birth": any; "Gender": any; "User Type": any; "Mobile Number": any; "Name": any; "Email": any }] = [];
    let output = [];
    this.admissionReport.forEach(function (value){
      x =[{
        'Name' : value.first_name + ' ' + value.middle_name + ' ' + value.last_name,
        'Gender': value.gender,
        'Date Of Birth': value.dob,
        'User Type': value.user_type,
        'Mobile Number': value.mobile_no,
        'Email': value.email,
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
    XLSX.writeFile(wb, 'Admission-Report.xlsx');
  }

}
