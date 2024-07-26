import { Component } from '@angular/core';
import {FeesService} from "../../../services/fees.service";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatIcon, MatIconModule} from "@angular/material/icon";
import {NgForOf, NgIf} from "@angular/common";
import {NgxPaginationModule} from "ngx-pagination";
import {StudentService} from "../../../services/student.service";
import Swal from "sweetalert2";
import {SubjectService} from "../../../services/subject.service";
import {RolesAndPermissionService} from "../../../services/roles-and-permission.service";
import { NgSelectModule } from '@ng-select/ng-select';

@Component({
  selector: 'app-discount',
  standalone: true,
  imports: [
    FormsModule,
    MatIconModule,
    NgForOf,
    NgxPaginationModule,
    ReactiveFormsModule,
    NgIf,
    NgSelectModule
  ],
  templateUrl: './discount.component.html',
  styleUrl: './discount.component.scss'
})
export class DiscountComponent {
  discountForm: FormGroup;
  discountList: any[];
  courseList: any[];
  semesterList: any[];
  studentList: any[];
  feesTypeList: any[];
  isUpdatable = false;
  p: number;
  filteredStudent: any[];
  rolesAndPermission: any[] = [];
  permission: any[] = [];
  constructor(private feesService: FeesService, private studentService: StudentService
              , private subjectService: SubjectService, private roleAndPermissionService: RolesAndPermissionService) {
    this.discountForm = new FormGroup({
      id: new FormControl(null),
      student_id: new FormControl(null, [Validators.required]),
      course_id: new FormControl(null, [Validators.required]),
      semester_id: new FormControl(null, [Validators.required]),
      scholarship_code: new FormControl(null, [Validators.required]),
      amount: new FormControl(null, [Validators.required]),
      description: new FormControl(null),
    });
    this.feesService.getDiscountListListener().subscribe((response) => {
      this.discountList = response;
    });
    this.discountList = this.feesService.getDiscountList();

    this.subjectService.getCourseListener().subscribe((response) => {
      this.courseList = response;
    });
    this.courseList = this.subjectService.getCourses();

    this.studentService.getStudentListener().subscribe((response) => {
      this.studentList = response;
    });
    this.studentList = this.studentService.getStudentLists();

    this.feesService.getFeesTypeListListener().subscribe((response) => {
      this.feesTypeList = response;
    });
    this.feesTypeList = this.feesService.getFeesType();

    this.roleAndPermissionService.getRolesAndPermissionListener().subscribe((response) => {
      this.rolesAndPermission = response;
      this.permission = this.rolesAndPermission.find(x => x.name == 'DISCOUNT').permission;
    });
    this.rolesAndPermission = this.roleAndPermissionService.getRolesAndPermission();
    if(this.rolesAndPermission.length > 0){
      this.permission = this.rolesAndPermission.find(x => x.name == 'DISCOUNT').permission;
    }
  }

  getSemester(){
    this.subjectService.getSemesterByCourseId(this.discountForm.value.course_id).subscribe((response: any) => {
      this.semesterList = response.data;
    });
  }

  getStudent(){
    let x = this.studentList.filter(x => x.course_id == this.discountForm.value.course_id);
    this.filteredStudent = x.filter(x => x.current_semester_id == this.discountForm.value.semester_id);
  }

  saveDiscount(){
    if(!this.discountForm.valid){
      this.discountForm.markAllAsTouched();
      return;
    }
    this.feesService.saveDiscount(this.discountForm.value).subscribe((response) => {
      // @ts-ignore
      if(response.success == 1){
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Discount Saved',
          showConfirmButton: false,
          timer: 1000
        });
        this.discountForm.reset();
      }
    })
  }

  editDiscount(data){
    this.subjectService.getSemesterByCourseId(data.course_id).subscribe((response) => {
      // @ts-ignore
      this.semesterList = response.data;
      let x = this.studentList.filter(x => x.course_id == data.course_id);
      this.filteredStudent = x.filter(x => x.current_semester_id == data.semester_id);
    });
    this.discountForm.patchValue(data);
    this.isUpdatable = true;
  }

  updateDiscount(){
    this.feesService.updateDiscount(this.discountForm.value).subscribe((response) => {
      // @ts-ignore
      if(response.success == 1){
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Discount Updated',
          showConfirmButton: false,
          timer: 1000
        });
        this.cancelUpdate();
      }
    })
  }

  cancelUpdate(){
    this.discountForm.reset();
    this.isUpdatable = false;
  }

  deleteDiscount(data){

    Swal.fire({
      title: 'Confirmation',
      text: 'Do you sure to delete ?',
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete It!'
    }).then((result) => {
      if(result.isConfirmed){
        this.feesService.deleteDiscount(data.id).subscribe((response) => {
          // @ts-ignore
          if(response.success == 1){
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Discount Deleted',
              showConfirmButton: false,
              timer: 1000
            });
          }
        })
      }
    });

  }


}
