import {Component, ElementRef, ViewChild} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import {NgForOf, NgIf, UpperCasePipe} from "@angular/common";
import {NgxPaginationModule} from "ngx-pagination";
import {SubjectService} from "../../../services/subject.service";
import {SessionService} from "../../../services/session.service";
import {ExaminationService} from "../../../services/examination.service";
import {NgxPrintDirective} from "ngx-print";
import Swal from "sweetalert2";

@Component({
  selector: 'app-generate-mark-sheet',
  standalone: true,
  imports: [
    FormsModule,
    MatIconModule,
    NgForOf,
    NgIf,
    NgxPaginationModule,
    ReactiveFormsModule,
    NgxPrintDirective,
    UpperCasePipe
  ],
  templateUrl: './generate-mark-sheet.component.html',
  styleUrl: './generate-mark-sheet.component.scss'
})
export class GenerateMarkSheetComponent {
  @ViewChild('divClick') divClick: ElementRef;
  subjectMarksSearchForm: FormGroup;
  courseList: any[];
  semesterList: any[];
  sessionList: any[];
  markSheetList: any[];
  subjectDetails: any[] = [];
  subjectDetailsPrintData: any = {};
  grandTotal = 0;
  totalFullMarks = 0;
  percentageObtained = 0;
  numWords = require('num-words');
  constructor(private subjectService: SubjectService, private sessionSubject: SessionService, public examinationService: ExaminationService) {
    this.subjectMarksSearchForm = new FormGroup({
      id: new FormControl(null),
      course_id: new FormControl(null, [Validators.required]),
      semester_id: new FormControl(null, [Validators.required]),
      session_id: new FormControl(null, [Validators.required]),
    });
    this.subjectService.getCourseListener().subscribe((response) => {
      this.courseList = response;
    });
    this.courseList = this.subjectService.getCourses();
    this.sessionSubject.getSessionListener().subscribe((response) => {
      this.sessionList = response;
    });
    this.sessionList = this.sessionSubject.getSessionList();
  }

  getSemester(){
    this.subjectService.getSemesterByCourseId(this.subjectMarksSearchForm.value.course_id).subscribe((response: any) => {
      this.semesterList = response.data;
    })
  }

  getMarkSheet(){
    this.examinationService.getMarkSheet(this.subjectMarksSearchForm.value).subscribe((response: any) => {
      if(response.success == 1){
        this.markSheetList = response.data;
        if(response.data.length == 0){
          Swal.fire({
            position: 'center',
            icon: 'info',
            title: 'No data found',
            showConfirmButton: false,
            timer: 1000
          });
        }
      }
    })
  }

  generateMarksheet(data){
    this.subjectDetails = data.subject_details;
    this.subjectDetailsPrintData = data;
    console.log(this.subjectDetailsPrintData);
    this.subjectDetails.map(data => {
      return this.grandTotal += parseFloat(data.marks);
    });
    this.subjectDetails.map(data => {
      return this.totalFullMarks += parseFloat(data.full_marks);
    });
    this.percentageObtained = (this.grandTotal/this.totalFullMarks)*100;
    setTimeout(() => {
      this.divClick.nativeElement.click();
    }, 300);
  }

}
