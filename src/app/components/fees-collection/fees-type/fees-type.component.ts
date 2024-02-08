import { Component } from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatIcon, MatIconModule} from "@angular/material/icon";
import {NgForOf, NgIf} from "@angular/common";
import {NgxPaginationModule} from "ngx-pagination";
import {FeesService} from "../../../services/fees.service";
import Swal from "sweetalert2";
import {RolesAndPermissionService} from "../../../services/roles-and-permission.service";

@Component({
  selector: 'app-fees-type',
  standalone: true,
    imports: [
        FormsModule,
        MatIconModule,
        NgForOf,
        NgxPaginationModule,
        ReactiveFormsModule,
        NgIf
    ],
  templateUrl: './fees-type.component.html',
  styleUrl: './fees-type.component.scss'
})
export class FeesTypeComponent {
    feesTypeForm: FormGroup;
    isUpdatable= false;
    feesTypeList: any[];
    p: number;
    rolesAndPermission: any[] = [];
    permission: any[] = [];

    constructor(private feesService:FeesService, private roleAndPermissionService: RolesAndPermissionService) {
        this.feesTypeForm = new FormGroup({
            id: new FormControl(null),
            name: new FormControl(null, [Validators.required]),
        });
        this.feesService.getFeesTypeListListener().subscribe((response) => {
            this.feesTypeList = response;
        })
        this.feesTypeList = this.feesService.getFeesType();

        this.roleAndPermissionService.getRolesAndPermissionListener().subscribe((response) => {
            this.rolesAndPermission = response;
            this.permission = this.rolesAndPermission.find(x => x.name == 'FEES TYPE').permission;
        });
        this.rolesAndPermission = this.roleAndPermissionService.getRolesAndPermission();
        if(this.rolesAndPermission.length > 0){
            this.permission = this.rolesAndPermission.find(x => x.name == 'FEES TYPE').permission;
        }
    }

    saveFeesType(){
        this.feesService.saveFeesType(this.feesTypeForm.value).subscribe((response) => {
            // @ts-ignore
            if(response.success == 1){
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Saved Fees Type',
                    showConfirmButton: false,
                    timer: 1000
                });
                this.feesTypeForm.reset();
            }
        });
    }

    editFeesType(data){
        this.feesTypeForm.patchValue(data);
        this.isUpdatable = true;
    }

    deleteFeesType(data){
        Swal.fire({
            title: 'Confirmation',
            text: 'Do you sure to delete fees type ?',
            icon: 'info',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete It!'
        }).then((result) => {
            if(result.isConfirmed){
                this.feesService.deleteFeesType(data.id).subscribe((response) => {
                    // @ts-ignore
                    if(response.success == 1){
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'Deleted',
                            showConfirmButton: false,
                            timer: 1000
                        });
                    }
                })
            }
        });
    }

    updateFeesType(){
        this.feesService.updateFeesType(this.feesTypeForm.value).subscribe((response) => {
            // @ts-ignore
            if(response.success == 1){
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Updated Fees Type',
                    showConfirmButton: false,
                    timer: 1000
                });
                this.cancelUpdate();
            }
        });
    }

    cancelUpdate(){
        this.feesTypeForm.reset();
        this.isUpdatable = false;
    }

}
