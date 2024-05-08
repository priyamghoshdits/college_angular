import { Component } from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import {NgForOf, NgIf} from "@angular/common";
import {ReportService} from "../../../services/report.service";
import Swal from "sweetalert2";
import * as XLSX from 'xlsx';
import {NgxPrintDirective} from "ngx-print";
import {NgbNav, NgbNavItem, NgbNavLink, NgbNavLinkBase, NgbNavOutlet} from "@ng-bootstrap/ng-bootstrap";
import {ChartistModule} from "ng-chartist";
import * as chartData from "../../../shared/data/chart/chartist";
import {Chart} from "../../../shared/data/chart/chartist";

@Component({
  selector: 'app-admission-report',
  standalone: true,
  imports: [
    FormsModule,
    MatIconModule,
    NgForOf,
    NgIf,
    ReactiveFormsModule,
    NgxPrintDirective,
    NgbNav,
    NgbNavLink,
    NgbNavLinkBase,
    NgbNavItem,
    NgbNavOutlet,
    ChartistModule
  ],
  templateUrl: './admission-report.component.html',
  styleUrl: './admission-report.component.scss'
})
export class AdmissionReportComponent {
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
  admissionReportForm: FormGroup;
  admissionReport: any[] = [];
  active = 1;
  monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  public chart7 : Chart = {
    type: "Bar",
    data: {
      labels: [],
      series: [
        [],
      ],
    },
    options: {
      stackBars: true,
      scaleMinSpace: 90,
      height: 450,
    },
  };
  constructor(private reportService: ReportService) {
    this.admissionReportForm = new FormGroup({
      id: new FormControl(null),
      from_date: new FormControl(null, [Validators.required]),
      to_date: new FormControl(null, [Validators.required]),
    });
  }

  activeTab(data) {
    this.active = data;
  }

  getStudentReport(){
    if(!this.admissionReportForm.valid){
      this.admissionReportForm.markAllAsTouched();
      return;
    }
    this.reportService.getStudentReport(this.admissionReportForm.value).subscribe((response:any) => {
      if(response.success == 1){
        this.admissionReport = response.data;
        // console.log(this.admissionReport);
        // admission_date
        if(this.admissionReport.length == 0){
          Swal.fire({
            position: 'center',
            icon: 'info',
            title: 'No Data Found',
            showConfirmButton: false,
            timer: 1000
          });
        }else{
          const temp = [];
          const temp_dd = [];
          // console.log(this.admissionReport.filter(x => new Date(x.admission_date).getMonth() == 3));
          const from_date = new Date(this.admissionReportForm.value.from_date).getMonth();
          const to_date = new Date(this.admissionReportForm.value.to_date).getMonth();
          for(let i = from_date; i <= to_date; i++){
            // @ts-ignore
            temp_dd.push((this.admissionReport.filter(x => new Date(x.admission_date).getMonth() == i)).length);
            // console.log(i);
            // @ts-ignore
            temp.push(this.monthNames[i]);
          }
          this.chart7.data.labels =  temp;
          this.chart7.data.series =  [temp_dd];
          // this.chart7.data.series =  [[3, 3, 0, 2, 0, 3, 0]];
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
