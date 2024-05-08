import { Component } from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import {NgForOf, NgIf} from "@angular/common";
import {SubjectService} from "../../../services/subject.service";
import {SessionService} from "../../../services/session.service";
import {ReportService} from "../../../services/report.service";
import * as XLSX from "xlsx";
import Swal from "sweetalert2";
import {NgxPrintDirective} from "ngx-print";

@Component({
  selector: 'app-examination-report',
  standalone: true,
    imports: [
        FormsModule,
        MatIconModule,
        NgForOf,
        NgIf,
        ReactiveFormsModule,
        NgxPrintDirective
    ],
  templateUrl: './examination-report.component.html',
  styleUrl: './examination-report.component.scss'
})
export class ExaminationReportComponent {
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
    examinationReportForm: FormGroup;
    courseList: any[];
    sessionList: any[];
    semesterList: any[];
    examinationReportList: any[] = [];
    constructor(private subjectService: SubjectService, private sessionService:SessionService
                ,private reportService: ReportService) {
        this.examinationReportForm = new FormGroup({
            id: new FormControl(null),
            course_id: new FormControl(null, [Validators.required]),
            semester_id: new FormControl(null, [Validators.required]),
            session_id: new FormControl(null, [Validators.required]),
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
        this.subjectService.getSemesterByCourseId(this.examinationReportForm.value.course_id).subscribe((response: any) => {
            this.semesterList = response.data;
        })
    }

    getExaminationReport(){
        // @ts-ignore
        const session = JSON.parse(localStorage.getItem('session_id'));
        this.examinationReportForm.patchValue({session_id: session});

        if(!session){
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Select Session',
                showConfirmButton: false,
                timer: 1000
            });
            return;
        }

        if(!this.examinationReportForm.valid){
            this.examinationReportForm.markAllAsTouched();
            return;
        }
        this.reportService.getExaminationReport(this.examinationReportForm.value).subscribe((response: any) => {
            if(response.success == 1){
                // this.examinationReportList = response.data;
                if(response.data[0].name == null){
                    Swal.fire({
                        position: 'center',
                        icon: 'info',
                        title: 'No Data Found',
                        showConfirmButton: false,
                        timer: 1000
                    });
                }else{
                    this.examinationReportList = response.data;
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
        let x: [{ "Name": any; "Full Marks": any; "Marks Obtained": any; "Status": any}] = [];
        let output = [];
        this.examinationReportList.forEach(function (value){
            x =[{
                'Name' : value.name,
                'Full Marks': value.full_marks,
                'Marks Obtained': value.obtained_marks,
                'Status': value.status
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
        XLSX.writeFile(wb, 'Examination-Report.xlsx');
    }

}
