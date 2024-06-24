import { Component } from '@angular/core';
import {CustomFilterPipe} from "../../../../../custom-filter.pipe";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import {NgForOf, NgIf} from "@angular/common";
import {environment} from "../../../../environments/environment";
import {SubjectService} from "../../../services/subject.service";
import {SessionService} from "../../../services/session.service";
import {CertificateService} from "../../../services/certificate.service";
import Swal from "sweetalert2";
import {MemberService} from "../../../services/member.service";

@Component({
  selector: 'app-payslip',
  standalone: true,
    imports: [
        CustomFilterPipe,
        FormsModule,
        MatIconModule,
        NgForOf,
        NgIf,
        ReactiveFormsModule
    ],
  templateUrl: './payslip.component.html',
  styleUrl: './payslip.component.scss'
})
export class PayslipComponent {

    uploadCertificateForm: FormGroup;
    public FILE_URL = environment.FILE_URL;
    courseList: any[];
    semesterList: any[];
    sessionList: any[];
    filteredStudentList: any[] = [];
    studentList: any[];
    staffList: any[] = [];
    certificateTypeList: any[];
    file: any;
    searchItem: string;
    session_id = null;

    constructor(private subjectService: SubjectService, private memberService: MemberService) {
        this.uploadCertificateForm = new FormGroup({
            id: new FormControl(null),
            course_id: new FormControl(null, [Validators.required]),
        });
        this.subjectService.getCourseListener().subscribe((response) => {
            this.courseList = response;
        });
        this.courseList = this.subjectService.getCourses();

        // this.certificateService.getCertificateTypeListListener().subscribe((response) => {
        //     this.certificateTypeList = response;
        // });
        // this.certificateTypeList = this.certificateService.getCertificateType();

    }

    // getSemester() {
    //     this.subjectService.getSemesterByCourseId(this.uploadCertificateForm.value.course_id).subscribe((response: any) => {
    //         this.semesterList = response.data;
    //     })
    // }

    searchStudents() {
        this.memberService.getStaffForPayslip(this.uploadCertificateForm.value.course_id).subscribe((response: any) => {
            this.staffList = response.data;
        })

        // // @ts-ignore
        // this.session_id = JSON.parse(localStorage.getItem('session_id'));
        // this.uploadCertificateForm.patchValue({session_id: this.session_id});
        //
        // if (!this.session_id) {
        //     Swal.fire({
        //         position: 'center',
        //         icon: 'error',
        //         title: 'Select Session',
        //         showConfirmButton: false,
        //         timer: 1000
        //     });
        //     return;
        // }
        //
        // if (!this.uploadCertificateForm.valid) {
        //     this.uploadCertificateForm.markAllAsTouched();
        //     return;
        // }
        //
        // this.certificateService.getStudentForCertificate(this.uploadCertificateForm.value).subscribe((response: any) => {
        //     this.filteredStudentList = response.data;
        //
        //     if(this.filteredStudentList.length == 0){
        //         Swal.fire({
        //             position: 'center',
        //             icon: 'error',
        //             title: 'No Student Found',
        //             showConfirmButton: false,
        //             timer: 1000
        //         });
        //         return;
        //     }
        // })


    }

    uploadCertificate(event, record) {
    //
    //     // @ts-ignore
    //     this.session_id = JSON.parse(localStorage.getItem('session_id'));
    //
    //     if (!this.session_id) {
    //         Swal.fire({
    //             position: 'center',
    //             icon: 'error',
    //             title: 'Select Session',
    //             showConfirmButton: false,
    //             timer: 1000
    //         });
    //         return;
    //     }
    //
    //     const formData = new FormData();
    //     formData.append("id", record.certificate_id ?? null);
    //     formData.append("course_id", this.uploadCertificateForm.value.course_id);
    //     formData.append("semester_id", this.uploadCertificateForm.value.semester_id);
    //     formData.append("session_id", this.session_id);
    //     formData.append("certificate_type_id", this.uploadCertificateForm.value.certificate_type_id);
    //     formData.append("user_id", record.id);
    //     formData.append("file_name", event.target.files[0]['name']);
    //     formData.append("file", event.target.files[0]);
    //
    //     this.certificateService.saveCertificate(formData).subscribe((response: any) => {
    //         if (response.success == 1) {
    //             Swal.fire({
    //                 position: 'center',
    //                 icon: 'success',
    //                 title: 'Certificate Uploaded',
    //                 showConfirmButton: false,
    //                 timer: 1000
    //             });
    //             this.searchStudents();
    //         }
    //     })
    }

}
