import { Component } from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import {NgForOf, NgIf} from "@angular/common";
import {NgxPaginationModule} from "ngx-pagination";
import {SubjectService} from "../../../services/subject.service";
import Swal from "sweetalert2";
import {RolesAndPermissionService} from "../../../services/roles-and-permission.service";

@Component({
  selector: 'app-subject',
  standalone: true,
    imports: [
        FormsModule,
        NgForOf,
        NgxPaginationModule,
        ReactiveFormsModule,
        MatIconModule,
        NgIf,
    ],
  templateUrl: './subject.component.html',
  styleUrl: './subject.component.scss'
})
export class SubjectComponent {
    subjectForm: FormGroup;
    p: number;
    subjectList: any[];
    isUpdatable = false;
    rolesAndPermission: any[] = [];
    permission: any[] = [];
    constructor(private subjectService: SubjectService, private roleAndPermissionService: RolesAndPermissionService) {
        this.subjectForm = new FormGroup({
            id: new FormControl(null),
            name: new FormControl(null, [Validators.required]),
            subject_code: new FormControl(null, [Validators.required]),
        });
        this.subjectService.getSubjectListListener().subscribe((response) => {
            this.subjectList = response;
        });
        this.subjectList = this.subjectService.getSubjectList();

        this.roleAndPermissionService.getRolesAndPermissionListener().subscribe((response) => {
            this.rolesAndPermission = response;
            this.permission = this.rolesAndPermission.find(x => x.name == 'SUBJECT').permission;
        });
        this.rolesAndPermission = this.roleAndPermissionService.getRolesAndPermission();
        if(this.rolesAndPermission.length > 0){
            this.permission = this.rolesAndPermission.find(x => x.name == 'SUBJECT').permission;
        }
    }

    editSubject(value){
        this.subjectForm.patchValue({'id': value.id,'name': value.name, 'subject_code': value.subject_code});
        this.isUpdatable = true;
    }

    deleteSubject(value){

        Swal.fire({
            title: 'Confirmation',
            text: 'Do you sure to delete subject ?',
            icon: 'info',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete It!'
        }).then((result) => {
            this.subjectService.deleteSubject(value.id).subscribe((response) => {
                // @ts-ignore
                if(response.success == 1){
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Subject Deleted',
                        showConfirmButton: false,
                        timer: 1000
                    });
                }
            });
        });
    }

    saveSubject(){
        if(!this.subjectForm.valid){
            this.subjectForm.markAllAsTouched();
            return;
        }
        this.subjectService.saveSubject(this.subjectForm.value).subscribe((response) => {
            // @ts-ignore
           if(response.success == 1){
               Swal.fire({
                   position: 'center',
                   icon: 'success',
                   title: 'Subject Saved',
                   showConfirmButton: false,
                   timer: 1000
               });
               this.subjectForm.reset();
           }
        });
    }

    updateSubject(){
        if(!this.subjectForm.valid){
            this.subjectForm.markAllAsTouched();
            return;
        }
        this.subjectService.updateSubject(this.subjectForm.value).subscribe((response) => {
            // @ts-ignore
            if(response.success == 1){
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Subject Updated',
                    showConfirmButton: false,
                    timer: 1000
                });
                this.cancelUpdate();
            }
        })
    }

    cancelUpdate(){
        this.isUpdatable = false;
        this.subjectForm.reset();
    }
}
