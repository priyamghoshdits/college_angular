import { Component } from '@angular/core';
import {MatIconModule} from "@angular/material/icon";
import {NgForOf, NgIf} from "@angular/common";
import {NgxPaginationModule} from "ngx-pagination";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {JobService} from "../../../services/job.service";
import Swal from "sweetalert2";
import {RolesAndPermissionService} from "../../../services/roles-and-permission.service";

@Component({
  selector: 'app-company',
  standalone: true,
    imports: [
        MatIconModule,
        NgForOf,
        NgIf,
        NgxPaginationModule,
        ReactiveFormsModule
    ],
  templateUrl: './company.component.html',
  styleUrl: './company.component.scss'
})
export class CompanyComponent {
    companyDetailsForm: FormGroup;
    companyDetailsList: any[];
    isUpdatable = false;
    rolesAndPermission: any[] = [];
    permission: any[] = [];
    p: number;
    constructor(private jobService: JobService, private roleAndPermissionService: RolesAndPermissionService) {
        this.companyDetailsForm = new FormGroup({
            id: new FormControl(null),
            name: new FormControl(null, [Validators.required]),
            phone: new FormControl(null, [Validators.required, Validators.pattern("[0-9]{10}")]),
            contact_person_name: new FormControl(null, [Validators.required]),
            address: new FormControl(null, [Validators.required]),
            description: new FormControl(null)
        });

        this.roleAndPermissionService.getRolesAndPermissionListener().subscribe((response) => {
            this.rolesAndPermission = response;
            this.permission = this.rolesAndPermission.find(x => x.name == 'COURSE').permission;
        });
        this.rolesAndPermission = this.roleAndPermissionService.getRolesAndPermission();
        if(this.rolesAndPermission.length > 0){
            this.permission = this.rolesAndPermission.find(x => x.name == 'COURSE').permission;
        }

        this.jobService.getCompanyDetailsListListener().subscribe((response) => {
            this.companyDetailsList = response;
        });
        this.companyDetailsList = this.jobService.getCompanyDetails();
    }

    saveCompanyDetails(){
        this.jobService.saveCompanyDetails(this.companyDetailsForm.value).subscribe((response: any) => {
            if(response.success == 1){
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Company Details Saved Successfully',
                    showConfirmButton: false,
                    timer: 1000
                });
                this.companyDetailsForm.reset();
            }
        })
    }

    editCompanyDetails(data){
        this.companyDetailsForm.patchValue(data);
        this.isUpdatable = true;
    }

    updateCompanyDetails(){
        this.jobService.updateCompanyDetails(this.companyDetailsForm.value).subscribe((response: any) => {
            if(response.success == 1){
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Company Details Updated Successfully',
                    showConfirmButton: false,
                    timer: 1000
                });
                this.cancelUpdate();
            }
        })
    }


    deleteCompanyDetails(data){
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
                this.jobService.deleteCompanyDetails(data.id).subscribe((response: any) => {
                  if(response.success == 1){
                      Swal.fire({
                          position: 'center',
                          icon: 'success',
                          title: 'Company Details Deleted',
                          showConfirmButton: false,
                          timer: 1000
                      });
                  }
                })
            }
        });
    }

    cancelUpdate(){
        this.companyDetailsForm.reset();
        this.isUpdatable = false;
    }

}
