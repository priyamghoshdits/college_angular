import { Component } from '@angular/core';
import {FranchiseService} from "../../../services/franchise.service";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import {NgForOf, NgIf} from "@angular/common";
import {NgxPaginationModule} from "ngx-pagination";
import Swal from "sweetalert2";
import {RolesAndPermissionService} from "../../../services/roles-and-permission.service";

@Component({
  selector: 'app-franchise',
  standalone: true,
  imports: [
    FormsModule,
    MatIconModule,
    NgForOf,
    NgIf,
    NgxPaginationModule,
    ReactiveFormsModule
  ],
  templateUrl: './franchise.component.html',
  styleUrl: './franchise.component.scss'
})
export class FranchiseComponent {
  franchiseList: any[];
  franchiseForm: FormGroup;
  isUpdatable = false;
  p: number;
  rolesAndPermission: any[] = [];
  permission: any[] = [];
  constructor(private franchiseService: FranchiseService, private roleAndPermissionService: RolesAndPermissionService) {
    this.franchiseForm = new FormGroup({
      id: new FormControl(null),
      name: new FormControl(null, [Validators.required]),
    });
    this.franchiseService.getFranchiseListener().subscribe((response) => {
      this.franchiseList = response;
    });
    this.franchiseList = this.franchiseService.getFranchiseList();
    this.roleAndPermissionService.getRolesAndPermissionListener().subscribe((response) => {
      this.rolesAndPermission = response;
      this.permission = this.rolesAndPermission.find(x => x.name == 'FRANCHISE').permission;
    });
    this.rolesAndPermission = this.roleAndPermissionService.getRolesAndPermission();
    if(this.rolesAndPermission.length > 0){
      this.permission = this.rolesAndPermission.find(x => x.name == 'FRANCHISE').permission;
    }
  }

  saveFranchise(){
    if(!this.franchiseForm.valid){
      this.franchiseForm.markAllAsTouched();
      return;
    }
    this.franchiseService.saveFranchise(this.franchiseForm.value).subscribe((response: any) => {
      if(response.success == 1){
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Franchise saved',
          showConfirmButton: false,
          timer: 1000
        });
        this.franchiseForm.reset();
      }
    });
  }

  updateFranchise(){
    if(!this.franchiseForm.valid){
      this.franchiseForm.markAllAsTouched();
      return;
    }
    this.franchiseService.updateFranchise(this.franchiseForm.value).subscribe((response: any) => {
      if(response.success == 1){
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Franchise Updated',
          showConfirmButton: false,
          timer: 1000
        });
        this.cancelUpdate();
      }
    })
  }

  cancelUpdate(){
    this.franchiseForm.reset();
    this.isUpdatable = false;
  }

  editFranchise(record){
    this.franchiseForm.patchValue(record);
    this.isUpdatable = true;
  }

  deleteFranchise(record){
    Swal.fire({
      title: 'Confirmation',
      text: 'Do you sure to delete ?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete It!'
    }).then((result) => {
      if(result.isConfirmed){
        this.franchiseService.deleteFranchise(record.id).subscribe((response: any) => {
          if(response.success == 1){
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Franchise deleted',
              showConfirmButton: false,
              timer: 1000
            });
          }
        })
      }
    });
  }
}
