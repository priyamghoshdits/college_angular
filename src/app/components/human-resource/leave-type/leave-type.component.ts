import { Component } from '@angular/core';
import {MatIcon, MatIconModule} from "@angular/material/icon";
import {NgForOf, NgIf} from "@angular/common";
import {NgxPaginationModule} from "ngx-pagination";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {LeaveService} from "../../../services/leave.service";
import Swal from "sweetalert2";
import {RolesAndPermissionService} from "../../../services/roles-and-permission.service";
import {CustomFilterPipe} from "../../../../../custom-filter.pipe";

@Component({
  selector: 'app-leave-type',
  standalone: true,
    imports: [
        MatIconModule,
        NgForOf,
        NgxPaginationModule,
        ReactiveFormsModule,
        NgIf,
        FormsModule,
        CustomFilterPipe
    ],
  templateUrl: './leave-type.component.html',
  styleUrl: './leave-type.component.scss'
})
export class LeaveTypeComponent {
    leaveTypeForm: FormGroup;
    leaveTypeList: any[];
    p: number;
    isUpdatable = false;
    rolesAndPermission: any[] = [];
    permission: any[] = [];
    searchItem: string;
    constructor(private leaveService: LeaveService, private roleAndPermissionService: RolesAndPermissionService) {
        this.leaveTypeForm = new FormGroup({
            id: new FormControl(null),
            name: new FormControl(null, [Validators.required]),
        });

        this.leaveService.getLeaveTypeListener().subscribe((response) => {
            this.leaveTypeList = response
        });
        this.leaveTypeList = this.leaveService.getLeaveTypeList();

        this.roleAndPermissionService.getRolesAndPermissionListener().subscribe((response) => {
            this.rolesAndPermission = response;
            this.permission = this.rolesAndPermission.find(x => x.name == 'LEAVE TYPE').permission;
        });
        this.rolesAndPermission = this.roleAndPermissionService.getRolesAndPermission();
        if(this.rolesAndPermission.length > 0){
            this.permission = this.rolesAndPermission.find(x => x.name == 'LEAVE TYPE').permission;
        }
    }

    saveLeaveType(){
        if(!this.leaveTypeForm.valid){
            this.leaveTypeForm.markAllAsTouched();
            return;
        }
        this.leaveService.saveLeaveType(this.leaveTypeForm.value).subscribe((response) => {
            // @ts-ignore
            if(response.success == 1){
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Leave Type saved',
                    showConfirmButton: false,
                    timer: 1000
                });
                this.leaveTypeForm.reset();
            }
        });
    }

    updateLeaveType(){
        if(!this.leaveTypeForm.valid){
            this.leaveTypeForm.markAllAsTouched();
            return;
        }
        this.leaveService.updateLeaveType(this.leaveTypeForm.value).subscribe((response) => {
            // @ts-ignore
            if(response.success == 1) {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Leave Type Updated',
                    showConfirmButton: false,
                    timer: 1000
                });
                this.cancelUpdate();
            }
        })
    }

    editLeaveType(data){
        this.leaveTypeForm.patchValue(data);
        this.isUpdatable = true;
    }


    deleteLeaveType(data){
        Swal.fire({
            title: 'Confirmation',
            text: 'Do you sure to delete leave Type ?',
            icon: 'info',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete It!'
        }).then((result) => {
            if(result.isConfirmed){
                this.leaveService.deleteLeaveType(data.id).subscribe((response) => {
                    // @ts-ignore
                    if(response.success == 1) {
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'Leave Type Updated',
                            showConfirmButton: false,
                            timer: 1000
                        });
                    }
                })
            }
        });
    }

        cancelUpdate(){
            this.leaveTypeForm.reset();
            this.isUpdatable = false;
        }

}
