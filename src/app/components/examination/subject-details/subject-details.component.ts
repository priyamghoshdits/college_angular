import { Component } from '@angular/core';
import {SubjectService} from "../../../services/subject.service";
import {MatIcon, MatIconModule} from "@angular/material/icon";
import {NgForOf, NgIf} from "@angular/common";
import {NgxPaginationModule} from "ngx-pagination";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {SessionService} from "../../../services/session.service";
import {interval} from "rxjs";
import {ExaminationService} from "../../../services/examination.service";
import Swal from "sweetalert2";
import {NgbTimepicker} from "@ng-bootstrap/ng-bootstrap";
import {RolesAndPermissionService} from "../../../services/roles-and-permission.service";

@Component({
  selector: 'app-subject-details',
  standalone: true,
  imports: [
    MatIconModule,
    NgForOf,
    NgxPaginationModule,
    ReactiveFormsModule,
    NgbTimepicker,
    NgIf
  ],
  templateUrl: './subject-details.component.html',
  styleUrl: './subject-details.component.scss'
})
export class SubjectDetailsComponent {
  subjectDetailsForm: FormGroup;
  courseList: any[];
  semesterList: any[];
  subjectList: any[];
  sessionList: any[];
  subjectDetailsList: any[];
  isUpdatable = false;
  p:number;
  rolesAndPermission: any[] = [];
  permission: any[] = [];
  constructor(private subjectService: SubjectService, private sessionService: SessionService
              , private examinationService: ExaminationService , private roleAndPermissionService: RolesAndPermissionService) {
    this.subjectDetailsForm = new FormGroup({
      id: new FormControl(null),
      name: new FormControl(null, [Validators.required]),
      course_id: new FormControl(null, [Validators.required]),
      semester_id: new FormControl(null, [Validators.required]),
      subject_id: new FormControl(null, [Validators.required]),
      session_id: new FormControl(null, [Validators.required]),
      exam_date: new FormControl(null, [Validators.required]),
      publish_date: new FormControl(null, [Validators.required]),
      full_marks: new FormControl(null, [Validators.required]),
      time_from: new FormControl(null, [Validators.required]),
      time_to: new FormControl(null, [Validators.required]),
    });
    this.subjectService.getCourseListener().subscribe((response) => {
      this.courseList = response;
    });
    this.courseList = this.subjectService.getCourses();
    this.sessionService.getSessionListener().subscribe((response) => {
      this.sessionList = response
    });
    this.sessionList = this.sessionService.getSessionList();
    this.examinationService.getSubjectDetailsListListener().subscribe((response) => {
      this.subjectDetailsList = response;
    });
    this.subjectDetailsList = this.examinationService.getSubjectDetailsList();

    this.roleAndPermissionService.getRolesAndPermissionListener().subscribe((response) => {
      this.rolesAndPermission = response;
      this.permission = this.rolesAndPermission.find(x => x.name == 'SUBJECT DETAILS').permission;
    });
    this.rolesAndPermission = this.roleAndPermissionService.getRolesAndPermission();
    if(this.rolesAndPermission.length > 0){
      this.permission = this.rolesAndPermission.find(x => x.name == 'SUBJECT DETAILS').permission;
    }

  }

  getSemester(){
    this.subjectService.getSemesterByCourseId(this.subjectDetailsForm.value.course_id).subscribe((response) => {
      // @ts-ignore
      this.semesterList = response.data;
    });
  }

  getSubject(){
    this.subjectService.getSubjects(this.subjectDetailsForm.value.course_id, this.subjectDetailsForm.value.semester_id).subscribe((response) => {
      // @ts-ignore
      this.subjectList = response.data;
    });
  }

  saveSubjectDetails(){
    if(!this.subjectDetailsForm.valid){
      this.subjectDetailsForm.markAllAsTouched();
      return;
    }
    this.examinationService.saveSubjectDetails(this.subjectDetailsForm.value).subscribe((response) => {
      // @ts-ignore
      if(response.success == 1){
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Subject Details Saved',
          showConfirmButton: false,
          timer: 1000
        });
        this.subjectDetailsForm.reset();
      }
    });
  }

  deleteSubjectDetails(data){
    Swal.fire({
      title: 'Confirmation',
      text: 'Do you sure to delete subject details ?',
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete It!'
    }).then((result) => {
      if(result.isConfirmed){
        this.examinationService.deleteSubjectDetails(data.id).subscribe((response) => {
          // @ts-ignore
          if(response.success == 1){
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Subject Details Deleted',
              showConfirmButton: false,
              timer: 1000
            });
          }
        });
      }
    });
  }

  editSubjectDetails(data){
    this.subjectService.getSemesterByCourseId(data.course_id).subscribe((response) => {
        // @ts-ignore
        this.semesterList = response.data;
    });
    this.subjectService.getSubjects(data.course_id, data.semester_id).subscribe((response) => {
      // @ts-ignore
      this.subjectList = response.data;
    });
    this.subjectDetailsForm.patchValue(data);
    this.isUpdatable = true;
  }

  updateSubjectDetails(){
    // @ts-ignore
    this.examinationService.updateSubjectDetails(this.subjectDetailsForm.value).subscribe((response) => {
      // @ts-ignore
      if(response.success == 1){
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Subject Details Updated',
          showConfirmButton: false,
          timer: 1000
        });
        this.cancelUpdate();
      }
    });
  }

  cancelUpdate(){
    this.subjectDetailsForm.reset();
    this.isUpdatable = false;
  }

}
