import { Component } from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import {NgForOf, NgIf} from "@angular/common";
import {NgxPaginationModule} from "ngx-pagination";
import {UserTypeService} from "../../../services/user-type.service";
import Swal from "sweetalert2";
import {RolesAndPermissionService} from "../../../services/roles-and-permission.service";

@Component({
  selector: 'app-user-types',
  standalone: true,
  imports: [
    FormsModule,
    MatIconModule,
    NgForOf,
    NgxPaginationModule,
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './user-types.component.html',
  styleUrl: './user-types.component.scss'
})
export class UserTypesComponent {
  userTypeForm: FormGroup;
  isUpdatable = false;
  userTypeList: any[];
  rolesAndPermission: any[] = [];
  permission: any[] = [];

  constructor(private userTypeService: UserTypeService, private roleAndPermissionService: RolesAndPermissionService) {
    this.userTypeForm = new FormGroup({
      id: new FormControl(null),
      name: new FormControl(null, [Validators.required]),
    });

    this.userTypeService.getUserTypeListener().subscribe((response) => {
      this.userTypeList = response;
    })
    this.userTypeList = this.userTypeService.getUserTypeList();

    this.roleAndPermissionService.getRolesAndPermissionListener().subscribe((response) => {
      this.rolesAndPermission = response;
      this.permission = this.rolesAndPermission.find(x => x.name == 'USER TYPE').permission;
    });
    this.rolesAndPermission = this.roleAndPermissionService.getRolesAndPermission();
    if(this.rolesAndPermission.length > 0){
      this.permission = this.rolesAndPermission.find(x => x.name == 'USER TYPE').permission;
    }
  }

  saveUserType(){
    if(!this.userTypeForm.valid){
      this.userTypeForm.markAllAsTouched();
      return;
    }
    this.userTypeService.saveUserType(this.userTypeForm.value).subscribe((response) => {
      // @ts-ignore
      if(response.success == 1){
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'User Type Saved',
          showConfirmButton: false,
          timer: 1000
        });
        this.userTypeForm.reset();
      }
    })
  }

  updateUserType(){
    this.userTypeService.updateUserTypes(this.userTypeForm.value).subscribe((response) => {
      // @ts-ignore
      if(response.success == 1){
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'User Type updated',
          showConfirmButton: false,
          timer: 1000
        });
        this.cancelUpdate();
      }
    })
  }

  cancelUpdate(){
    this.userTypeForm.reset();
    this.isUpdatable = false;
  }

  editUserType(data){
    this.userTypeForm.patchValue(data);
    this.isUpdatable = true;
  }

  deleteUserType(data){
    Swal.fire({
      title: 'Confirmation',
      text: 'Do you sure to delete user type ?',
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete It!'
    }).then((result) => {
      if(result.isConfirmed){
        this.userTypeService.deleteUserType(data.id).subscribe((response) => {
          // @ts-ignore
          if(response.success == 1){
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'User Type deleted',
              showConfirmButton: false,
              timer: 1000
            });
          }
        })
      }
    });

  }

}
