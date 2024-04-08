import { Component } from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import {NgForOf, NgIf} from "@angular/common";
import {NgxPaginationModule} from "ngx-pagination";
import {SubjectService} from "../../../services/subject.service";
import {SessionService} from "../../../services/session.service";
import {ExaminationService} from "../../../services/examination.service";
import {NgxPrintDirective} from "ngx-print";

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
    NgxPrintDirective
  ],
  templateUrl: './generate-mark-sheet.component.html',
  styleUrl: './generate-mark-sheet.component.scss'
})
export class GenerateMarkSheetComponent {
  subjectMarksSearchForm: FormGroup;
  courseList: any[];
  semesterList: any[];
  sessionList: any[];
  markSheetList: any[];
  subjectDetails: any[] = [];
  subjectDetailsPrintData: any;
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
        // console.log(this.markSheetList[0].subject_details);
      }
    })
  }

  generateMarksheet(data){
    this.subjectDetails = data.subject_details;
    this.subjectDetailsPrintData = data;
    console.log(this.subjectDetailsPrintData);
  }

}
