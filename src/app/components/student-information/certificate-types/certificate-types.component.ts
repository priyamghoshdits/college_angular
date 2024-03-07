import { Component } from '@angular/core';
import {MatIconModule} from "@angular/material/icon";
import {NgForOf, NgIf} from "@angular/common";
import {NgxPaginationModule} from "ngx-pagination";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {CertificateService} from "../../../services/certificate.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-certificate-types',
  standalone: true,
    imports: [
        MatIconModule,
        NgForOf,
        NgIf,
        NgxPaginationModule,
        ReactiveFormsModule
    ],
  templateUrl: './certificate-types.component.html',
  styleUrl: './certificate-types.component.scss'
})
export class CertificateTypesComponent {
    certificateTypeForm: FormGroup;
    isUpdatable = false;
    certificateTypeList: any[];
    p: number;
    constructor(private certificateService: CertificateService) {
        this.certificateTypeForm = new FormGroup({
            id: new FormControl(null),
            name: new FormControl(null, [Validators.required]),
        });
        this.certificateService.getCertificateTypeListListener().subscribe((response) => {
            this.certificateTypeList = response;
        });
        this.certificateTypeList = this.certificateService.getCertificateType();
    }
    saveCertificateType(){
        this.certificateService.saveCertificateTypes(this.certificateTypeForm.value).subscribe((response: any) => {
            if(response.success == 1){
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Certificate Type Saved',
                    showConfirmButton: false,
                    timer: 1000
                });
                this.certificateTypeForm.reset();
            }
        })
    }

    updateCertificateType(){
        this.certificateService.updateCertificateTypes(this.certificateTypeForm.value).subscribe((response: any) => {
            if(response.success == 1){
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Certificate Type Updated',
                    showConfirmButton: false,
                    timer: 1000
                });
                this.cancelUpdate();
            }
        })
    }

    cancelUpdate(){
        this.certificateTypeForm.reset();
        this.isUpdatable = false;
    }

    editCertificateType(data){
        this.certificateTypeForm.patchValue(data);
        this.isUpdatable = true;
    }

    deleteCertificateType(data){
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
                this.certificateService.deleteCertificateTypes(data.id).subscribe((response: any) => {
                    if(response.success == 1){
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'Certificate Type Deleted',
                            showConfirmButton: false,
                            timer: 1000
                        });
                    }
                })
            }
        });

    }

}
