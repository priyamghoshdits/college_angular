import { Component } from '@angular/core';
import {SubjectService} from "../../../services/subject.service";
import {FeesService} from "../../../services/fees.service";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatIcon, MatIconModule} from "@angular/material/icon";
import {NgForOf} from "@angular/common";
import {NgxPaginationModule} from "ngx-pagination";
import Swal from "sweetalert2";

@Component({
  selector: 'app-fees-structure',
  standalone: true,
  imports: [
    FormsModule,
    MatIconModule,
    NgForOf,
    NgxPaginationModule,
    ReactiveFormsModule
  ],
  templateUrl: './fees-structure.component.html',
  styleUrl: './fees-structure.component.scss'
})
export class FeesStructureComponent {
  feesStructureForm: FormGroup;
  feesStructureSearchForm: FormGroup;
  feesTypeList: any[];
  feesStructureList: any[] = [];
  courseList: any[];
  semesterList: any[];
  isUpdatable = false;
  p: number;
  feesStructureArray: any[] = [];
  totalAmount = 0;
  tableTotalAmount = 0;

  constructor(private subjectService: SubjectService, private feesService: FeesService) {
    this.feesStructureForm = new FormGroup({
      id: new FormControl(null),
      course_id: new FormControl(null, [Validators.required]),
      semester_id: new FormControl(null, [Validators.required]),
      fees_type_id: new FormControl(null, [Validators.required]),
      amount: new FormControl(null, [Validators.required]),
    });
    this.feesStructureSearchForm = new FormGroup({
      id: new FormControl(null),
      course_id: new FormControl(null, [Validators.required]),
    });
    this.subjectService.getCourseListener().subscribe((response) => {
      this.courseList = response;
    })
    this.courseList = this.subjectService.getCourses();

    this.feesService.getFeesTypeListListener().subscribe((response) => {
      this.feesTypeList = response
    });
    this.feesTypeList = this.feesService.getFeesType();
  }

  addFeesType(){
    let feesType = this.feesTypeList.find(x => x.id == this.feesStructureForm.value.fees_type_id);
    let semester = this.semesterList.find(x => x.semester_id == this.feesStructureForm.value.semester_id);
    let a = [{
      'course_id': this.feesStructureForm.value.course_id,
      'semester_id': this.feesStructureForm.value.semester_id,
      'fees_type_id': this.feesStructureForm.value.fees_type_id,
      'fees_type_name': feesType.name,
      'semester_name': semester.name,
      'amount': this.feesStructureForm.value.amount
    }];
    // @ts-ignore
    this.feesStructureArray.push(a[0]);
    this.totalAmount = this.feesStructureArray.reduce((accumulator, currentItem) => accumulator + parseInt(currentItem.amount), 0);
    this.feesStructureForm.controls['fees_type_id'].reset();
    this.feesStructureForm.controls['amount'].reset();
  }

  removeFromArray(index){
    this.feesStructureArray.splice(index, 1);
    this.totalAmount = this.feesStructureArray.reduce((accumulator, currentItem) => accumulator + parseInt(currentItem.amount), 0);
  }

  saveFeesStructure(){
    this.feesService.saveFeesStructure(this.feesStructureArray).subscribe((response) => {
      // @ts-ignore
      if(response.success == 1){
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Fees Structure Saved',
          showConfirmButton: false,
          timer: 1000
        });
        this.feesStructureForm.reset();
        this.feesStructureArray = [];
        this.totalAmount = 0;
      }
    });
  }

  getSemester(){
    this.subjectService.getSemesterByCourseId(this.feesStructureForm.value.course_id).subscribe((response) => {
      // @ts-ignore
      this.semesterList = response.data;
    })
  }

  searchFeesStructure(){
    this.feesService.getFeesStructureByCourseId(this.feesStructureSearchForm.value.course_id).subscribe((response) => {
      // @ts-ignore
      this.feesStructureList = response.data;
    })
  }

  editFeesStructure(data){
    this.feesStructureForm.patchValue({id: data.id,course_id: this.feesStructureSearchForm.value.course_id, fees_type_id: data.fees_type_id,amount:data.amount});
    this.isUpdatable = true;
  }

  deleteFeesStructure(data){
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
        this.feesService.deleteFeesStructure(data.id).subscribe((response) => {
          // @ts-ignore
          if(response.success == 1){
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Fees Structure deleted',
              showConfirmButton: false,
              timer: 1000
            });
          }
        })
      }
    });

  }

  updateFeesStructure(){
    this.feesService.updateFeesStructure(this.feesStructureForm.value).subscribe((response) => {
      // @ts-ignore
      if(response.success == 1){
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Fees Structure updated',
          showConfirmButton: false,
          timer: 1000
        });
        this.isUpdatable = false;
        this.feesStructureList = [];
        this.feesStructureForm.reset();
        this.feesStructureSearchForm.reset();
      }
    })
  }

  cancelUpdate(){
    this.feesStructureForm.reset();
    this.isUpdatable = false;
  }

}
