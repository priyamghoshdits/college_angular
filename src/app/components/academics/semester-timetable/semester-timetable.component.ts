import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgForOf, NgIf} from "@angular/common";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {SubjectService} from "../../../services/subject.service";
import {MatTabsModule} from "@angular/material/tabs";
import {SessionService} from "../../../services/session.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-semester-timetable',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    NgForOf,
    MatTabsModule
  ],
  templateUrl: './semester-timetable.component.html',
  styleUrl: './semester-timetable.component.scss'
})
export class SemesterTimetableComponent {

  semesterTimeTableForm: FormGroup;
  semesterList: any[];
  courseList: any[];
  sessionList: any[];
  semesterTimeTableList: any[];
  lengthOfSemesterTimeTableList : number;
  week1: any[];
  week2: any[];
  week3: any[];
  week4: any[];
  week5: any[];
  week6: any[];
  week7: any[];
  constructor(private subjectService: SubjectService, private sessionService: SessionService) {
    this.semesterTimeTableForm = new FormGroup({
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
    this.subjectService.getSemesterByCourseId(this.semesterTimeTableForm.value.course_id).subscribe((response) => {
      // @ts-ignore
      this.semesterList = response.data;
    })
  }

  searchTimeTable(){
    if(!this.semesterTimeTableForm.valid){
      this.semesterTimeTableForm.markAllAsTouched();
      return;
    }
    this.subjectService.getSemesterTimeTable(this.semesterTimeTableForm.value.course_id, this.semesterTimeTableForm.value.semester_id, this.semesterTimeTableForm.value.session_id)
        .subscribe((response) => {
          // @ts-ignore
            if(response.success == 1){
              // @ts-ignore
              let x = response.data
              this.week1 = x.filter(x => x.week_id === 1);
              this.week2 = x.filter(x => x.week_id === 2);
              this.week3 = x.filter(x => x.week_id === 3);
              this.week4 = x.filter(x => x.week_id === 4);
              this.week5 = x.filter(x => x.week_id === 5);
              this.week6 = x.filter(x => x.week_id === 6);
              this.week7 = x.filter(x => x.week_id === 7);
              // @ts-ignore
              this.semesterTimeTableList = response.data;
              if(this.semesterTimeTableList.length == 0){
                Swal.fire({
                  position: 'center',
                  icon: 'info',
                  title: 'No Data Found',
                  showConfirmButton: false,
                  timer: 1000
                });
              }
            }
        });
  }


}
