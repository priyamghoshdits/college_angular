import { Component } from '@angular/core';
import {CustomFilterPipe} from "../../../../../custom-filter.pipe";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import {NgForOf, NgIf} from "@angular/common";
import {CertificateService} from "../../../services/certificate.service";
import {environment} from "../../../../environments/environment";
import {StudentService} from "../../../services/student.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-download-certificates',
  standalone: true,
    imports: [
        CustomFilterPipe,
        FormsModule,
        MatIconModule,
        NgForOf,
        NgIf,
        ReactiveFormsModule
    ],
  templateUrl: './download-certificates.component.html',
  styleUrl: './download-certificates.component.scss'
})
export class DownloadCertificatesComponent {
    public FILE_URL = environment.FILE_URL;
    uploadCertificateForm: FormGroup;
    filteredStudentList: any[] = [];
    certificateTypeList: any[];
    studentList: any[];
    searchItem: string;
    user: {
        id: any;
        user_type_id: number;
    }
    constructor(private certificateService: CertificateService, private studentService: StudentService) {
       this.user = JSON.parse(localStorage.getItem('user') || '{}');
        this.uploadCertificateForm = new FormGroup({
            user_id: new FormControl(null),
            certificate_type_id: new FormControl(null, [Validators.required]),
        });

        this.certificateService.getCertificateTypeListListener().subscribe((response) => {
            this.certificateTypeList = response;
        });
        this.certificateTypeList = this.certificateService.getCertificateType();
        if(this.user.user_type_id == 1){
            this.studentService.getStudentListener().subscribe((response) => {
                this.studentList = response;
            });
            this.studentList = this.studentService.getStudentLists();
        }else{
            this.uploadCertificateForm.patchValue({user_id: this.user.id});
        }
       
    }

    getData(){
        if(!this.uploadCertificateForm.valid){
            this.uploadCertificateForm.markAllAsTouched();
            return;
        }
        this.certificateService.getUserWiseData(this.uploadCertificateForm.value).subscribe((response: any) => {
            if(response.success == 1){
                this.filteredStudentList = response.data;
                if(this.filteredStudentList.length == 0){
                    Swal.fire({
                        position: 'center',
                        icon: 'info',
                        title: 'No Data Found',
                        showConfirmButton: false,
                        timer: 1000
                    });
                }
            }
        });
    }
}
