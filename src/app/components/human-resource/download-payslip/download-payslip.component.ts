import { Component } from '@angular/core';
import { CustomFilterPipe } from "../../../../../custom-filter.pipe";
import { MatIconModule } from "@angular/material/icon";
import { NgForOf, NgIf } from "@angular/common";
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { environment } from "../../../../environments/environment";
import { SubjectService } from "../../../services/subject.service";
import { MemberService } from "../../../services/member.service";
import Swal from "sweetalert2";

@Component({
    selector: 'app-download-payslip',
    standalone: true,
    imports: [
        CustomFilterPipe,
        MatIconModule,
        NgForOf,
        NgIf,
        ReactiveFormsModule,
        FormsModule
    ],
    templateUrl: './download-payslip.component.html',
    styleUrl: './download-payslip.component.scss'
})
export class DownloadPayslipComponent {
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
    user = null;
    year: any[] = [];

    constructor(private subjectService: SubjectService, private memberService: MemberService) {

        // @ts-ignore
        this.user = localStorage.getItem('user');

        this.uploadCertificateForm = new FormGroup({
            id: new FormControl(null),
            course_id: new FormControl(null, [Validators.required]),
            month: new FormControl(null, [Validators.required]),
            year: new FormControl(null, [Validators.required]),
        });
        this.subjectService.getCourseListener().subscribe((response) => {
            this.courseList = response;
        });
        this.courseList = this.subjectService.getCourses();

        for (let i = new Date().getFullYear() - 3; i <= new Date().getFullYear() + 3; i++) {
            let x = {
                "year": i
            };
            this.year.push(x);
        }
    }

    searchStaff() {
        this.memberService.getStaffForPayslip(1, this.uploadCertificateForm.value.month, this.uploadCertificateForm.value.year).subscribe((response: any) => {
            const staffList = response.data;
            if (staffList.length == 0) {
                Swal.fire({
                    position: 'center',
                    icon: 'info',
                    title: 'No Data Found',
                    showConfirmButton: false,
                    timer: 1000
                });
            }
            // @ts-ignore
            this.user = JSON.parse(this.user);
            // @ts-ignore
            if (this.user.user_type_id == 1) {
                this.staffList = staffList;
            } else {
                // this.staffList = staffList.filter(x => x.month !== null);
                // @ts-ignore
                this.staffList = staffList.filter(x => x.staff_id == this.user.id);
            }
        });
    }
}
