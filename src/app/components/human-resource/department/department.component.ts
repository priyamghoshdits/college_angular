import { Component } from '@angular/core';
import {MemberService} from "../../../services/member.service";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatIcon, MatIconModule} from "@angular/material/icon";
import {NgForOf, NgIf} from "@angular/common";
import {NgxPaginationModule} from "ngx-pagination";
import {DepartmentService} from "../../../services/department.service";
import Swal from "sweetalert2";
import {catchError, tap} from "rxjs/operators";
import {RolesAndPermissionService} from "../../../services/roles-and-permission.service";

@Component({
  selector: 'app-department',
  standalone: true,
  imports: [
    FormsModule,
    MatIconModule,
    NgForOf,
    NgxPaginationModule,
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './department.component.html',
  styleUrl: './department.component.scss'
})
export class DepartmentComponent {
  departmentForm: FormGroup;
  memberList: any[];
  departmentList: any[];
  isUpdatable = false;
  p: number;
  rolesAndPermission: any[] = [];
  permission: any[] = [];
  constructor(private memberService: MemberService, private departmentService: DepartmentService, private roleAndPermissionService: RolesAndPermissionService) {
    this.departmentForm = new FormGroup({
      id: new FormControl(null),
      name: new FormControl(null, [Validators.required]),
      user_id: new FormControl(null, [Validators.required]),
    });
    this.memberService.getMemberListener().subscribe((response) => {
      this.memberList = response;
    });
    this.memberList = this.memberService.getMemberList();
    this.departmentService.getDepartmentListListener().subscribe((response) => {
      this.departmentList = response;
    });
    this.departmentList = this.departmentService.getDepartmentList();

    this.roleAndPermissionService.getRolesAndPermissionListener().subscribe((response) => {
      this.rolesAndPermission = response;
      this.permission = this.rolesAndPermission.find(x => x.name == 'LEAVE TYPE').permission;
    });
    this.rolesAndPermission = this.roleAndPermissionService.getRolesAndPermission();
    if(this.rolesAndPermission.length > 0){
      this.permission = this.rolesAndPermission.find(x => x.name == 'LEAVE TYPE').permission;
    }
  }

  saveDepartment(){
    this.departmentService.saveDepartment(this.departmentForm.value).subscribe((response) => {
      // @ts-ignore
      if(response.success == 1){
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Department saved',
          showConfirmButton: false,
          timer: 1000
        });
        this.departmentForm.reset();
      }
    })
  }

  editDepartment(data){
    this.departmentForm.patchValue(data);
    this.isUpdatable = true;
  }

  updateDepartment(){
    this.departmentService.updateDepartment(this.departmentForm.value).subscribe((response) => {
      // @ts-ignore
      if(response.success == 1){
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Department updated',
          showConfirmButton: false,
          timer: 1000
        });
        this.cancelUpdate();
      }
    });
  }

  cancelUpdate(){
    this.departmentForm.reset();
    this.isUpdatable = false;
  }

  deleteDepartment(data){
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
        this.departmentService.deleteDepartment(data.id).subscribe((response) => {
          // @ts-ignore
          if(response.success == 1){
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Department Deleted',
              showConfirmButton: false,
              timer: 1000
            });
          }
        });
      }
    });
  }

}
