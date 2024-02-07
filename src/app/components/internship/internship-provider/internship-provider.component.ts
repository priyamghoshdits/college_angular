import { Component } from '@angular/core';
import {InternshipService} from "../../../services/internship.service";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import {NgForOf, NgIf} from "@angular/common";
import {NgxPaginationModule} from "ngx-pagination";
import Swal from "sweetalert2";
import {RolesAndPermissionService} from "../../../services/roles-and-permission.service";

@Component({
  selector: 'app-internship-provider',
  standalone: true,
  imports: [
    FormsModule,
    MatIconModule,
    NgForOf,
    NgxPaginationModule,
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './internship-provider.component.html',
  styleUrl: './internship-provider.component.scss'
})
export class InternshipProviderComponent {
  internshipProviderList: any[];
  isUpdatable = false;
  p: number;
  internshipProviderForm: FormGroup;
  rolesAndPermission: any[] = [];
  permission: any[] = [];

  constructor(private internshipService: InternshipService, private roleAndPermissionService: RolesAndPermissionService) {
    this.internshipProviderForm = new FormGroup({
      id: new FormControl(null),
      name: new FormControl(null, [Validators.required])
    });
    this.internshipService.getInternshipProviderListener().subscribe((response) => {
      this.internshipProviderList = response;
    });
    this.internshipProviderList = this.internshipService.getInternshipProviderList();

    this.roleAndPermissionService.getRolesAndPermissionListener().subscribe((response) => {
      this.rolesAndPermission = response;
      this.permission = this.rolesAndPermission.find(x => x.name == 'INTERNSHIP PROVIDER').permission;
    });
    this.rolesAndPermission = this.roleAndPermissionService.getRolesAndPermission();
    if(this.rolesAndPermission.length > 0){
      this.permission = this.rolesAndPermission.find(x => x.name == 'INTERNSHIP PROVIDER').permission;
    }
  }

  saveInternshipProvider(){
    this.internshipService.saveInternshipProvider(this.internshipProviderForm.value).subscribe((response) => {
      // @ts-ignore
      if(response.success == 1){
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Internship Provider Saved',
          showConfirmButton: false,
          timer: 1000
        });
        this.internshipProviderForm.reset();
      }
    });
  }

  updateInternshipProvider(){
    this.internshipService.updateInternshipProvider(this.internshipProviderForm.value).subscribe((response) => {
      // @ts-ignore
      if(response.success == 1){
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Internship Provider Updated',
          showConfirmButton: false,
          timer: 1000
        });
        this.cancelUpdate();
      }
    });
  }

  editInternshipProvider(data){
    this.internshipProviderForm.patchValue(data);
    this.isUpdatable = true;
  }

  deleteInternshipProvider(data){

    Swal.fire({
      title: 'Confirmation',
      text: 'Do you sure to delete Internship Provider ?',
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete It!'
    }).then((result) => {
      if(result.isConfirmed){
        this.internshipService.deleteInternshipProvider(data.id).subscribe((response) => {
          // @ts-ignore
          if(response.success == 1){
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Internship Provider Deleted',
              showConfirmButton: false,
              timer: 1000
            });
          }
        })
      }
    });
  }

  cancelUpdate(){
    this.internshipProviderForm.reset();
    this.isUpdatable = false;
  }


}
