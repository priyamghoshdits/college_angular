import { Component } from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {SubjectService} from "../../../services/subject.service";
import {NgForOf, NgIf} from "@angular/common";
import {NgxPaginationModule} from "ngx-pagination";
import {MatIconModule} from "@angular/material/icon";
import Swal from 'sweetalert2'
import {NgbPagination, NgbPaginationConfig} from "@ng-bootstrap/ng-bootstrap";
import {RolesAndPermissionService} from "../../../services/roles-and-permission.service";

@Component({
  selector: 'app-semester',
  standalone: true,
    imports: [
        FormsModule,
        ReactiveFormsModule,
        NgForOf,
        NgxPaginationModule,
        MatIconModule,
        NgbPagination,
        NgIf,
    ],
  templateUrl: './semester.component.html',
  styleUrl: './semester.component.scss',
})
export class SemesterComponent {
    semesterForm: FormGroup;
    semesterList: any[];
    p: number;
    isUpdatable = false;
    page = 4;
    rolesAndPermission: any[] = [];
    permission: any[] = [];
    constructor(private roleAndPermissionService: RolesAndPermissionService, private subjectService: SubjectService) {
        this.p = 1;
        this.roleAndPermissionService.getRolesAndPermissionListener().subscribe((response) => {
            this.rolesAndPermission = response;
            this.permission = this.rolesAndPermission.find(x => x.name == 'SEMESTER').permission;
        });
        this.rolesAndPermission = this.roleAndPermissionService.getRolesAndPermission();
        if(this.rolesAndPermission.length > 0){
            this.permission = this.rolesAndPermission.find(x => x.name == 'SEMESTER').permission;
        }
        this.semesterForm = new FormGroup({
            id: new FormControl(null),
            name: new FormControl(null, [Validators.required]),
        });

        this.subjectService.getSemesterListener().subscribe((response: any) => {
            this.semesterList = response;
        });
        this.semesterList = this.subjectService.getSemester();
    }

    saveSemester(){
        this.subjectService.saveSemester(this.semesterForm.value).subscribe((response) => {
            // @ts-ignore
            if(response.success == 1){
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Semester saved',
                    showConfirmButton: false,
                    timer: 1000
                });
                this.semesterForm.reset();
            }
        });
    }
    editSemester(data){
        this.isUpdatable = true;
        this.semesterForm.patchValue({'id': data.id,'name':data.name});
    }

    deleteSemester(data){

        Swal.fire({
            title: 'Confirmation',
            text: 'Do you sure to delete session ?',
            icon: 'info',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete It!'
        }).then((result) => {
            if (result.isConfirmed){
                this.subjectService.deleteSemester(data.id).subscribe((response) => {
                    // @ts-ignore
                    if(response.success == 1){
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'Semester Deleted',
                            showConfirmButton: false,
                            timer: 1000
                        });
                    }
                })
            }
        });
    }

    updateSemester(){
        this.subjectService.updateSemester(this.semesterForm.value).subscribe((response) =>{
            // @ts-ignore
            if(response.success == 1){
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Semester Updated',
                    showConfirmButton: false,
                    timer: 1000
                });
                this.semesterForm.reset();
                this.isUpdatable = false;
            }
        });
    }

    cancelUpdate(){
        this.semesterForm.reset();
        this.isUpdatable = false;
    }

}
