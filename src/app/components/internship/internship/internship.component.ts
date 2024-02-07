import { Component } from '@angular/core';
import {InternshipService} from "../../../services/internship.service";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import {CommonModule, NgForOf} from "@angular/common";
import {NgxPaginationModule} from "ngx-pagination";
import {StudentService} from "../../../services/student.service";
import Swal from "sweetalert2";
import {SubjectService} from "../../../services/subject.service";

@Component({
  selector: 'app-internship',
  standalone: true,
  imports: [
    FormsModule,
    MatIconModule,
    NgForOf,
    NgxPaginationModule,
    ReactiveFormsModule
  ],
  templateUrl: './internship.component.html',
  styleUrl: './internship.component.scss'
})
export class InternshipComponent {
  internshipDetailsForm: FormGroup;
  internshipDetailsList: any[];
  internshipProviderList: any[];
  studentList: any[];
  courseList: any[];
  semesterList: any[];
  isUpdatable = false;
  p: number;
  filteredStudent: any[];
  constructor(private internshipService: InternshipService, private studentService: StudentService, private subjectService: SubjectService) {

    this.internshipDetailsForm = new FormGroup({
      id: new FormControl(null),
      internship_provider_id: new FormControl(null, [Validators.required]),
      user_id: new FormControl(null, [Validators.required]),
      from_date: new FormControl(null, [Validators.required]),
      to_date: new FormControl(null, [Validators.required]),
      course_id: new FormControl(null),
      semester_id: new FormControl(null),
    });

    this.internshipService.getInternshipDetailsListener().subscribe((response) => {
      this.internshipDetailsList = response;
    });
    this.internshipDetailsList = this.internshipService.getInternshipDetailsList();

    this.subjectService.getCourseListener().subscribe((response) => {
      this.courseList = response;
    });
    this.courseList = this.subjectService.getCourses();

    this.internshipService.getInternshipProviderListener().subscribe((response) => {
      this.internshipProviderList = response;
    });
    this.internshipProviderList = this.internshipService.getInternshipProviderList();

    this.studentService.getStudentListener().subscribe((response) => {
      this.studentList = response;
    });
    this.studentList = this.studentService.getStudentLists();
  }

  getSemester(){
    this.subjectService.getSemesterByCourseId(this.internshipDetailsForm.value.course_id).subscribe((response) => {
      // @ts-ignore
      this.semesterList = response.data;
    })
  };

  getStudentList(){
    let x = this.studentList.filter(x => x.course_id == this.internshipDetailsForm.value.course_id);
    this.filteredStudent = x.filter(x => x.current_semester_id == this.internshipDetailsForm.value.semester_id);
  }

  saveInternshipDetails(){
    // console.log(this.internshipDetailsForm.value);
    // return
    this.internshipService.saveInternshipDetails(this.internshipDetailsForm.value).subscribe((response) => {
      // @ts-ignore
      if(response.success == 1){
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Internship Saved',
          showConfirmButton: false,
          timer: 1000
        });
        this.internshipDetailsForm.reset();
      }
    });
  }
  updateInternshipDetails(){
    this.internshipService.updateInternshipDetails(this.internshipDetailsForm.value).subscribe((response) => {
      // @ts-ignore
      if(response.success == 1){
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Internship Updated',
          showConfirmButton: false,
          timer: 1000
        });
        this.cancelUpdate();
      }
    });
  }
  cancelUpdate(){
    this.internshipDetailsForm.reset();
    this.isUpdatable = false;
  }
  editInternshipDetails(data){
    this.internshipDetailsForm.patchValue(data);
    this.isUpdatable = true;
  }

  deleteInternshipDetails(data){
    Swal.fire({
      title: 'Confirmation',
      text: 'Do you sure to delete Internship ?',
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete It!'
    }).then((result) => {
      if(result.isConfirmed){
        this.internshipService.deleteInternshipDetails(data.id).subscribe((response) => {
          // @ts-ignore
          if(response.success == 1){
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Internship Deleted',
              showConfirmButton: false,
              timer: 1000
            });
          }
        });
      }
    });
  }
}
