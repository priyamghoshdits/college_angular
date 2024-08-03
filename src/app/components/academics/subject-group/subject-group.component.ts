import {Component} from '@angular/core';
import {MatIconModule} from "@angular/material/icon";
import {NgForOf, NgIf} from "@angular/common";
import {NgxPaginationModule} from "ngx-pagination";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {SubjectService} from "../../../services/subject.service";
import Swal from "sweetalert2";
import {RolesAndPermissionService} from "../../../services/roles-and-permission.service";
import {cloneDeep} from 'lodash';
import {CustomFilterPipe} from "../../../../../custom-filter.pipe";

@Component({
  selector: 'app-subject-group',
  standalone: true,
    imports: [
        MatIconModule,
        NgForOf,
        NgxPaginationModule,
        ReactiveFormsModule,
        NgIf,
        CustomFilterPipe,
        FormsModule
    ],
  templateUrl: './subject-group.component.html',
  styleUrl: './subject-group.component.scss'
})
export class SubjectGroupComponent {

  subjectGroupForm: FormGroup;
  courseList: any[];
  semesterList: any[] = [];
  subjectList: any[];
  cloneSubjectList: any[];
  subjectGroupList: any[];
  tempSem = [];
  tempSub = [];
  isUpdatable = false;
  p: number;
  rolesAndPermission: any[] = [];
  permission: any[] = [];
  searchItem: string;

  constructor(private subjectService: SubjectService, private roleAndPermissionService: RolesAndPermissionService){
    this.subjectGroupForm = new FormGroup({
      id: new FormControl(null),
      name: new FormControl(null, [Validators.required]),
      course_id: new FormControl(null, [Validators.required]),
      old_semester_id: new FormControl(null),
      search_item: new FormControl(null),
      semester_id: new FormControl(null, [Validators.required]),
      subject_id: new FormControl(null),
    });

    this.subjectService.getCourseListener().subscribe((response) => {
      this.courseList = response;
    });
    this.courseList = this.subjectService.getCourses();

    this.subjectService.getSubjectListListener().subscribe((response) => {
      this.subjectList = response;
      this.cloneSubjectList = cloneDeep(this.subjectList);
    });
    this.subjectList = this.subjectService.getSubjectList();
    if(this.subjectList.length > 0){
      this.cloneSubjectList = cloneDeep(this.subjectList);
    }

    this.subjectService.subjectGroupListener().subscribe((response) => {
      this.subjectGroupList = response;
    });
    this.subjectGroupList = this.subjectService.getSubjectGroupList();

    this.roleAndPermissionService.getRolesAndPermissionListener().subscribe((response) => {
      this.rolesAndPermission = response;
      this.permission = this.rolesAndPermission.find(x => x.name == 'SUBJECT GROUP').permission;
    });
    this.rolesAndPermission = this.roleAndPermissionService.getRolesAndPermission();
    if(this.rolesAndPermission.length > 0){
      this.permission = this.rolesAndPermission.find(x => x.name == 'SUBJECT GROUP').permission;
    }
  }

  filterData(){
    console.log(this.subjectGroupForm.value.search_item);
    this.searchItem = this.subjectGroupForm.value.search_item;
  }

  getSemester(){
    this.subjectService.getSemesterByCourseId(this.subjectGroupForm.value.course_id).subscribe((response: any) => {
      this.semesterList = response.data;
    })
  }

  // importSemester(data, status){
  //   let sem;
  //   if(status.target.checked){
  //     sem = [
  //       {id: data.semester_id}
  //     ];
  //     // @ts-ignore
  //     this.tempSem.push(sem[0]);
  //   }else {
  //     // @ts-ignore
  //     let index = this.tempSem.findIndex(x => x.id === data.id)
  //     this.tempSem.splice(index, 1);
  //   }
  // }

  importSubject(data, status){
    let sub;
    if(status.target.checked){
      sub = [
        {id: data.id}
      ];
      // @ts-ignore
      this.tempSub.push(sub[0]);
    }else {
      // @ts-ignore
      let index = this.tempSub.findIndex(x => x.id === data.id)
      this.tempSub.splice(index, 1);
    }
  }

  saveSubjectGroup(){
    if(!this.subjectGroupForm.valid){
      this.subjectGroupForm.markAllAsTouched();
      return;
    }
    if(this.tempSub.length == 0){
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Select Subjects',
        showConfirmButton: false,
        timer: 1000
      });
      return;
    }
    let arr;
    arr = [
      {
        name: this.subjectGroupForm.value.name,
        course_id : this.subjectGroupForm.value.course_id,
        semester_id: this.subjectGroupForm.value.semester_id,
        subject: this.tempSub
      }
    ];
    this.subjectService.saveSubjectGroup(arr[0]).subscribe((response: any) => {
        if(response.success == 1){
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Subject grouped successfully',
            showConfirmButton: false,
            timer: 1000
          });
          this.subjectGroupForm.reset();
          this.subjectList.forEach(function (value){
            value.checked = false;
          });
          this.semesterList.forEach(function (value){
            value.checked = false;
          });
          this.tempSub = [];
          this.tempSem = [];
          this.semesterList = [];
        }else if(response.success == 2){
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Subject group already exists please update it',
            showConfirmButton: false,
            timer: 1500
          });
        }

      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    });
  }

  editSubjectGroup(data){
    if(this.semesterList.findIndex(x => x.semester_id === data.semester_id) != -1){
      this.subjectGroupForm.patchValue({semester_id: data.semester_id, old_semester_id: data.semester_id});

      let tempSub =[];
      data.subject.forEach(function (value){
        let sub;
        sub = [
          {id: value.subject_id}
        ];
        // @ts-ignore
        tempSub.push(sub[0]);
      });
      this.tempSub = tempSub;

      this.subjectList.forEach(function (value){
        value.checked = data.subject.findIndex(x => x.subject_id === value.id) != -1;
      });
      this.isUpdatable = true;

      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });

      return;
    }

    this.subjectGroupForm.patchValue(data);
    this.subjectService.getSemesterByCourseId(this.subjectGroupForm.value.course_id).subscribe((response: any) => {
      if(response.success == 1){
        this.semesterList = response.data;
        this.subjectGroupForm.patchValue({semester_id: data.semester_id, old_semester_id: data.semester_id});
        // this.subjectGroupForm.patchValue({'course_id' :data.course_id, 'name': data.name, 'semester_id': data.semester_id});
        // this.semesterList.forEach(function (value){
        //   value.checked = data.semester.findIndex(x => x.semester_id === value.semester_id) != -1;
        // });
        // let tempSem = [];
        // data.semester.forEach(function (value){
        //   let sem;
        //   sem = [
        //     {id: value.semester_id, old: value.semester_id}
        //   ];
        //   // @ts-ignore
        //   tempSem.push(sem[0]);
        // });
        // this.tempSem = tempSem;


        let tempSub =[];
        data.subject.forEach(function (value){
          let sub;
          sub = [
            {id: value.subject_id}
          ];
          // @ts-ignore
          tempSub.push(sub[0]);
        });
        this.tempSub = tempSub;

        this.subjectList.forEach(function (value){
          value.checked = data.subject.findIndex(x => x.subject_id === value.id) != -1;
        });
        this.isUpdatable = true;

        window.scroll({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
      }
    });

  }

  deleteSubjectGroup(data){
    Swal.fire({
      title: 'Confirmation',
      text: 'Do you sure to delete subject group ?',
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete It!'
    }).then((result) => {
      this.subjectService.deleteSubjectGroup(data.course_id,data.semester_id).subscribe((response) => {
        // @ts-ignore
        if(response.success == 1){
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Subject Group Deleted',
            showConfirmButton: false,
            timer: 1000
          });
        }
      });
    });
  }

  updateSubjectGroup(){
    if(!this.subjectGroupForm.valid){
      this.subjectGroupForm.markAllAsTouched();
      return;
    }
    if(this.tempSub.length == 0){
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Select Subjects',
        showConfirmButton: false,
        timer: 1000
      });
      return;
    }
    let arr = [
      {
        name: this.subjectGroupForm.value.name,
        course_id : this.subjectGroupForm.value.course_id,
        semester: this.subjectGroupForm.value.semester_id,
        old_semester: this.subjectGroupForm.value.old_semester_id,
        subject: this.tempSub
      }
    ];

    // console.log(arr[0]);
    // return;

    this.subjectService.updateSubjectGroup(arr[0]).subscribe((response) => {
      // @ts-ignore
        if(response.success == 1 ){
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Subject Group successfully updated',
            showConfirmButton: false,
            timer: 1000
          });
          this.cancelUpdate();
        }
    });
  }

  cancelUpdate(){
    // this.subjectList.forEach(function (value){
    //   value.checked = false;
    // });
    // this.semesterList.forEach(function (value){
    //   value.checked = false;
    // });
    this.subjectList = cloneDeep(this.cloneSubjectList);

    this.tempSem = [];
    this.tempSub = [];
    this.semesterList = [];
    this.subjectGroupForm.reset();
    this.isUpdatable = false;

    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

}
