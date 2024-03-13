import { Component } from '@angular/core';
import {ReportService} from "../../../services/report.service";
import {MatIconModule} from "@angular/material/icon";
import {NgForOf, NgIf} from "@angular/common";
import {NgxPrintDirective} from "ngx-print";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import Swal from "sweetalert2";
import html2canvas from "html2canvas";
import jspdf from "jspdf";
import {SubjectService} from "../../../services/subject.service";
import {SessionService} from "../../../services/session.service";
import {StudentService} from "../../../services/student.service";

@Component({
  selector: 'app-fees-due-report',
  standalone: true,
  imports: [
    MatIconModule,
    NgForOf,
    NgIf,
    NgxPrintDirective,
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './fees-due-report.component.html',
  styleUrl: './fees-due-report.component.scss'
})
export class FeesDueReportComponent {
  feesDueReportForm: FormGroup;
  dueFeesList: any[];
  courseList: any[];
  semesterList: any[];
  studentList: any[];
  sessionList: any[];
  searchItem: string;
  constructor(private reportService: ReportService, private subjectService: SubjectService
              ,private sessionService: SessionService, private studentService: StudentService) {
    this.feesDueReportForm = new FormGroup({
      id: new FormControl(null),
      course_id: new FormControl(null, [Validators.required]),
      semester_id: new FormControl(null, [Validators.required]),
      session_id: new FormControl(null, [Validators.required]),
      user_id: new FormControl(null, [Validators.required]),
    });
    this.subjectService.getCourseListener().subscribe((response) => {
      this.courseList = response;
    });

    this.sessionService.getSessionListener().subscribe((response) => {
      this.sessionList = response;
    })

  }

  getSemester(){
    this.subjectService.getSemesterByCourseId(this.feesDueReportForm.value.course_id).subscribe((response: any) => {
      this.semesterList = response.data;
    })
  }

  getStudents(){
    this.studentService.getSessionWiseStudent(this.feesDueReportForm.value).subscribe((response: any) => {
      this.studentList = response.data;
    })
  }

  getDueFees(){
    this.reportService.getFeesDueReport().subscribe((response: any) => {
      if(response.success == 1){
        if(this.feesDueReportForm.valid){
          this.dueFeesList = response.data.filter(x => x.user_id == this.feesDueReportForm.value.user_id);
          console.log(this.dueFeesList);
        }else{
          this.dueFeesList = response.data;
        }
      }
    })
  }

  download_pdf(){
    Swal.fire({
      title: 'Please Wait !',
      html: 'Creating Pdf ...', // add html attribute if you want or remove
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      }
    });
    let data = document.getElementById('sectionToPrint');
    // @ts-ignore
    html2canvas(data).then(canvas => {
      // Few necessary setting options
      let imgWidth = 208;
      let pageHeight = 295;
      let imgHeight = canvas.height * imgWidth / canvas.width;
      let heightLeft = imgHeight;

      const contentDataURL = canvas.toDataURL('image/png')
      let pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF
      let position = 0;
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
      Swal.close();
      pdf.save('payslip.pdf'); // Generated PDF
    })
  }

}
