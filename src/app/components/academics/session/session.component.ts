import { Component } from '@angular/core';
import {MatIcon, MatIconModule} from "@angular/material/icon";
import {NgForOf, NgIf} from "@angular/common";
import {NgxPaginationModule} from "ngx-pagination";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {SessionService} from "../../../services/session.service";
import Swal from "sweetalert2";
import {RolesAndPermissionService} from "../../../services/roles-and-permission.service";

@Component({
  selector: 'app-session',
  standalone: true,
    imports: [
        MatIconModule,
        NgForOf,
        NgxPaginationModule,
        ReactiveFormsModule,
        NgIf
    ],
  templateUrl: './session.component.html',
  styleUrl: './session.component.scss'
})
export class SessionComponent {
    sessionForm: FormGroup;
    sessionList: any[];
    p: number;
    isUpdatable = false;
    rolesAndPermission: any[] = [];
    permission: any[] = [];

    constructor(private sessionService: SessionService, private roleAndPermissionService: RolesAndPermissionService) {
        this.sessionForm = new FormGroup({
            id: new FormControl(null),
            name: new FormControl(null, [Validators.required]),
        });

        this.sessionService.getSessionListener().subscribe((response) => {
            this.sessionList = response;
        });
        this.sessionList = this.sessionService.getSessionList();

        this.roleAndPermissionService.getRolesAndPermissionListener().subscribe((response) => {
            this.rolesAndPermission = response;
            this.permission = this.rolesAndPermission.find(x => x.name == 'SESSION').permission;
        });
        this.rolesAndPermission = this.roleAndPermissionService.getRolesAndPermission();
        if(this.rolesAndPermission.length > 0){
            this.permission = this.rolesAndPermission.find(x => x.name == 'SESSION').permission;
        }

    }

    saveSession(){
        if(!this.sessionForm.valid){
            this.sessionForm.markAllAsTouched();
            return;
        }
        this.sessionService.saveSession(this.sessionForm.value).subscribe((response) => {
            // @ts-ignore
            if(response.success == 1){
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Session saved',
                    showConfirmButton: false,
                    timer: 1000
                });
                this.sessionForm.reset();
            }
        });
    }

    updateSession(){
        this.sessionService.updateSession(this.sessionForm.value).subscribe((response) => {
            // @ts-ignore
            if(response.success == 1){
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Session Updated',
                    showConfirmButton: false,
                    timer: 1000
                });
                this.cancelUpdate();
            }
        });
    }

    cancelUpdate(){
        this.sessionForm.reset();
        this.isUpdatable = false;
    }

    editSessionList(data){
        this.sessionForm.patchValue(data);
        this.isUpdatable = true;
    }

    deleteSessionList(data){

        Swal.fire({
            title: 'Confirmation',
            text: 'Do you sure to delete semester ?',
            icon: 'info',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete It!'
        }).then((result) => {
            if(result.isConfirmed){
                this.sessionService.deleteSession(data.id).subscribe((response) => {
                    // @ts-ignore
                    if(response.success == 1){
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'Session Deleted',
                            showConfirmButton: false,
                            timer: 1000
                        });
                    }
                });
            }
        });
    }

}
