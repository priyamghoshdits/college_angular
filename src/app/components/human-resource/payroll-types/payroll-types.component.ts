import { Component } from '@angular/core';
import {MatIconModule} from "@angular/material/icon";
import {NgForOf, NgIf} from "@angular/common";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {PayrollTypesService} from "../../../services/payroll-types.service";
import Swal from "sweetalert2";
import {RolesAndPermissionService} from "../../../services/roles-and-permission.service";

@Component({
  selector: 'app-payroll-types',
  standalone: true,
    imports: [
        MatIconModule,
        NgForOf,
        NgIf,
        ReactiveFormsModule
    ],
  templateUrl: './payroll-types.component.html',
  styleUrl: './payroll-types.component.scss'
})
export class PayrollTypesComponent {
    payrollTypeForm: FormGroup;
    isUpdatable = false;
    payrollTypeList: any[];
    rolesAndPermission: any[] = [];
    permission: any[] = [];
    constructor(private payrollTypeService: PayrollTypesService, private roleAndPermissionService: RolesAndPermissionService) {
        this.payrollTypeForm = new FormGroup({
            id: new FormControl(null),
            name: new FormControl(null, [Validators.required]),
        });

        this.payrollTypeService.getPayrollTypeListener().subscribe((response) => {
            this.payrollTypeList = response;
        });
        this.payrollTypeList = this.payrollTypeService.getPayrollTypes();

        this.roleAndPermissionService.getRolesAndPermissionListener().subscribe((response) => {
            this.rolesAndPermission = response;
            this.permission = this.rolesAndPermission.find(x => x.name == 'PAYROLL TYPES').permission;
        });
        this.rolesAndPermission = this.roleAndPermissionService.getRolesAndPermission();
        if(this.rolesAndPermission.length > 0){
            this.permission = this.rolesAndPermission.find(x => x.name == 'PAYROLL TYPES').permission;
        }
    }

    savePayrollTypes(){
        this.payrollTypeService.savePayrollType(this.payrollTypeForm.value).subscribe((response: any) => {
            if(response.success == 1){
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Payroll Type Saved',
                    showConfirmButton: false,
                    timer: 1000
                });
                this.payrollTypeForm.reset();
            }
        })
    }

    updatePayrollTypes(){
        this.payrollTypeService.updatePayrollType(this.payrollTypeForm.value).subscribe((response: any) => {
            if(response.success == 1){
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Payroll Type updated',
                    showConfirmButton: false,
                    timer: 1000
                });
                this.cancelUpdate();
            }
        })
    }

    cancelUpdate(){
        this.payrollTypeForm.reset();
        this.isUpdatable = false;
    }

    editPayrollType(data){
        this.payrollTypeForm.patchValue(data);
        this.isUpdatable = true;
    }

    deletePayrollType(data){
        Swal.fire({
            title: 'Confirmation',
            text: 'Do you sure to delete payroll Type ?',
            icon: 'info',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete It!'
        }).then((result) => {
            if(result.isConfirmed){
                this.payrollTypeService.deletePayrollTypes(data.id).subscribe((response: any) => {
                    if(response.success == 1){
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'Payroll Type deleted',
                            showConfirmButton: false,
                            timer: 1000
                        });
                    }
                })
            }
        });

    }
}
