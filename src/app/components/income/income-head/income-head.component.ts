import { Component } from '@angular/core';
import {MatIconModule} from "@angular/material/icon";
import {NgForOf, NgIf} from "@angular/common";
import {NgxPaginationModule} from "ngx-pagination";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {IncomeAndExpenseServiceService} from "../../../services/income-and-expense-service.service";
import Swal from "sweetalert2";
import {RolesAndPermissionService} from "../../../services/roles-and-permission.service";

@Component({
  selector: 'app-income-head',
  standalone: true,
    imports: [
        MatIconModule,
        NgForOf,
        NgIf,
        NgxPaginationModule,
        ReactiveFormsModule
    ],
  templateUrl: './income-head.component.html',
  styleUrl: './income-head.component.scss'
})
export class IncomeHeadComponent {
    incomeHeadForm: FormGroup;
    isUpdatable= false;
    incomeHeadList: any[];
    p: number;
    rolesAndPermission: any[] = [];
    permission: any[] = [];

    constructor( private incomeService: IncomeAndExpenseServiceService, private roleAndPermissionService: RolesAndPermissionService) {
        this.incomeHeadForm = new FormGroup({
            id: new FormControl(null),
            name: new FormControl(null, [Validators.required]),
            description: new FormControl(null),
        });

        this.roleAndPermissionService.getRolesAndPermissionListener().subscribe((response) => {
            this.rolesAndPermission = response;
            this.permission = this.rolesAndPermission.find(x => x.name == 'INCOME HEAD').permission;
        });
        this.rolesAndPermission = this.roleAndPermissionService.getRolesAndPermission();
        if(this.rolesAndPermission.length > 0){
            this.permission = this.rolesAndPermission.find(x => x.name == 'INCOME HEAD').permission;
        }

        this.incomeService.getIncomeHeadListener().subscribe((response) => {
            this.incomeHeadList = response;
        });
        this.incomeHeadList = this.incomeService.getIncomeHead();
    }

    saveIncomeHead(){
        if(!this.incomeHeadForm.valid){
            this.incomeHeadForm.markAllAsTouched();
            return;
        }
        this.incomeService.saveIncomeHead(this.incomeHeadForm.value).subscribe((response: any) => {
            if(response.success == 1){
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Income Head Saved',
                    showConfirmButton: false,
                    timer: 1500
                });
                this.incomeHeadForm.reset();
            }
        })
    }

    updateIncomeHead(){
        if(!this.incomeHeadForm.valid){
            this.incomeHeadForm.markAllAsTouched();
            return;
        }
        this.incomeService.updateIncomeHead(this.incomeHeadForm.value).subscribe((response: any) => {
            if(response.success == 1){
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Updated Income Head',
                    showConfirmButton: false,
                    timer: 1000
                });
                this.cancelUpdate();
            }
        })
    }

    cancelUpdate(){
        this.incomeHeadForm.reset();
        this.isUpdatable  = false;
    }

    editIncomeHeadList(data){
        this.incomeHeadForm.patchValue(data);
        this.isUpdatable = true;
    }

    deleteIncomeHeadList(data){
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
                this.incomeService.deleteIncomeHead(data.id).subscribe((response: any) => {
                    if(response.success == 1){
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'Income Head Deleted',
                            showConfirmButton: false,
                            timer: 1000
                        });
                    }
                })
            }
        });
    }

}
