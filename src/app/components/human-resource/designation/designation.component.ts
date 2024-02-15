import { Component } from '@angular/core';
import {DesignationService} from "../../../services/designation.service";
import {MatIcon, MatIconModule} from "@angular/material/icon";
import {NgForOf, NgIf} from "@angular/common";
import {NgxPaginationModule} from "ngx-pagination";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import Swal from "sweetalert2";
import {RolesAndPermissionService} from "../../../services/roles-and-permission.service";

@Component({
  selector: 'app-designation',
  standalone: true,
  imports: [
    MatIconModule,
    NgForOf,
    NgxPaginationModule,
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './designation.component.html',
  styleUrl: './designation.component.scss'
})
export class DesignationComponent {
  designationForm: FormGroup;
  designationList: any[];
  isUpdatable = false;
  p: number;
  rolesAndPermission: any[] = [];
  permission: any[] = [];
  constructor(private designationService: DesignationService, private roleAndPermissionService: RolesAndPermissionService) {
    this.designationForm = new FormGroup({
      id: new FormControl(null),
      name: new FormControl(null, [Validators.required]),
    });
    this.designationService.getDesignationListListener().subscribe((response) => {
      this.designationList = response;
    });
    this.designationList = this.designationService.getDesignationList();

    this.roleAndPermissionService.getRolesAndPermissionListener().subscribe((response) => {
      this.rolesAndPermission = response;
      this.permission = this.rolesAndPermission.find(x => x.name == 'DESIGNATION').permission;
    });
    this.rolesAndPermission = this.roleAndPermissionService.getRolesAndPermission();
    if(this.rolesAndPermission.length > 0){
      this.permission = this.rolesAndPermission.find(x => x.name == 'DESIGNATION').permission;
    }
  }

  saveDesignation(){
    if(!this.designationForm.valid){
      this.designationForm.markAllAsTouched();
      return;
    }
    this.designationService.saveDesignation(this.designationForm.value).subscribe((response) => {
      // @ts-ignore
      if(response.success == 1){
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Designation Created',
          showConfirmButton: false,
          timer: 1000
        });
        this.designationForm.reset();
      }
    });
  }

  updateDesignation(){
    if(!this.designationForm.valid){
      this.designationForm.markAllAsTouched();
      return;
    }
    this.designationService.updateDesignation(this.designationForm.value).subscribe((response) => {
      // @ts-ignore
      if(response.success == 1){
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Designation Updated',
          showConfirmButton: false,
          timer: 1000
        });
        this.cancelUpdate();
      }
    })
  }

  cancelUpdate(){
    this.isUpdatable = false;
    this.designationForm.reset();
  }

  editDesignation(data){
    this.designationForm.patchValue(data);
    this.isUpdatable = true;
  }

  deleteDesignation(data){
    Swal.fire({
      title: 'Confirmation',
      text: 'Do you sure to delete course ?',
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete It!'
    }).then((result) => {
      if(result.isConfirmed){
        this.designationService.deleteDesignation(data.id).subscribe((response) => {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Designation Deleted',
            showConfirmButton: false,
            timer: 1000
          });
        })
      }
    });
  }

}
