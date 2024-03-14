import { Component } from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import {NgForOf, NgIf} from "@angular/common";
import {NgxPaginationModule} from "ngx-pagination";
import {AdmissionEnquiryService} from "../../../services/admission-enquiry.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-admission-enquiry',
  standalone: true,
    imports: [
        FormsModule,
        MatIconModule,
        NgForOf,
        NgIf,
        NgxPaginationModule,
        ReactiveFormsModule
    ],
  templateUrl: './admission-enquiry.component.html',
  styleUrl: './admission-enquiry.component.scss'
})
export class AdmissionEnquiryComponent {
    admissionEnquiryForm: FormGroup;
    isUpdatable = false;
    studentEnquiryList:  any[];
    constructor(private admissionEnquiryService: AdmissionEnquiryService) {
        this.admissionEnquiryForm = new FormGroup({
            id: new FormControl(null),
            name: new FormControl(null, [Validators.required]),
            phone: new FormControl(null, [Validators.required, Validators.pattern("[0-9 ]{10}")]),
            email: new FormControl(null, [Validators.required]),
            address: new FormControl(null, [Validators.required]),
            description: new FormControl(null),
            note: new FormControl(null),
            date: new FormControl(null, [Validators.required]),
            follow_up_date: new FormControl(null, [Validators.required]),
            reference: new FormControl(null, [Validators.required]),
            source: new FormControl(null, [Validators.required]),
            course: new FormControl(null, [Validators.required]),
        });

        this.admissionEnquiryService.getStudentEnquiryListListener().subscribe((response) => {
            this.studentEnquiryList = response;
        });
        this.studentEnquiryList = this.admissionEnquiryService.getStudentEnquiryList();
    }

    saveStudentEnquiry(){
        this.admissionEnquiryService.saveStudentEnquiry(this.admissionEnquiryForm.value).subscribe((response: any) => {
            if(response.success == 1){
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Admission Enquiry Saved',
                    showConfirmButton: false,
                    timer: 1000
                });
                this.admissionEnquiryForm.reset();
            }
        })
    }

    updateStudentEnquiry(){
        this.admissionEnquiryService.updateStudentEnquiry(this.admissionEnquiryForm.value).subscribe((response: any) => {
            if(response.success == 1){
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Admission Enquiry Saved',
                    showConfirmButton: false,
                    timer: 1000
                });
                this.cancelUpdate();
            }
        })
    }

    cancelUpdate(){
        this.admissionEnquiryForm.reset();
        this.isUpdatable = false;
    }
}
