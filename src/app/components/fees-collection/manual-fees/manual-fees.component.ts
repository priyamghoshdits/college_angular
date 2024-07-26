import { Component } from '@angular/core';
import { ManualFeesService } from "../../../services/manual-fees.service";
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatIconModule } from "@angular/material/icon";
import { NgForOf, NgIf } from "@angular/common";
import { NgxPaginationModule } from "ngx-pagination";
import { RolesAndPermissionService } from "../../../services/roles-and-permission.service";
import { SubjectService } from "../../../services/subject.service";
import { StudentService } from "../../../services/student.service";
import { NgbNav, NgbNavItem, NgbNavLink, NgbNavLinkBase } from "@ng-bootstrap/ng-bootstrap";
import { CustomFilterPipe } from "../../../../../custom-filter.pipe";
import { environment } from "../../../../environments/environment";
import Swal from "sweetalert2";
import { NgSelectModule } from '@ng-select/ng-select';

@Component({
    selector: 'app-manual-fees',
    standalone: true,
    imports: [
        FormsModule,
        MatIconModule,
        NgForOf,
        NgIf,
        NgxPaginationModule,
        ReactiveFormsModule,
        NgbNav,
        NgbNavLink,
        NgbNavLinkBase,
        NgbNavItem,
        CustomFilterPipe,
        NgSelectModule
    ],
    templateUrl: './manual-fees.component.html',
    styleUrl: './manual-fees.component.scss'
})
export class ManualFeesComponent {
    public FILE_URL = environment.FILE_URL;
    manualFeesForm: FormGroup;
    searchManualFeesForm: FormGroup;
    rolesAndPermission: any[] = [];
    permission: any[] = [];
    courseList: any[] = [];
    semesterList: any[] = [];
    studentList: any[] = [];
    filteredStudent: any[] = [];
    selectedFile = File;
    isUpdatable = false;
    active = 1;
    manualFeesList: any[] = [];
    p: number;
    maxSize =  1 * 1024 * 1024; // 1 MB in bytes
    
    constructor(private manualFeesService: ManualFeesService, private roleAndPermissionService: RolesAndPermissionService
        , private subjectService: SubjectService, private studentService: StudentService) {
        this.roleAndPermissionService.getRolesAndPermissionListener().subscribe((response) => {
            this.rolesAndPermission = response;
            this.permission = this.rolesAndPermission.find(x => x.name == 'MANUAL FEES').permission;
        });
        this.rolesAndPermission = this.roleAndPermissionService.getRolesAndPermission();
        if (this.rolesAndPermission.length > 0) {
            this.permission = this.rolesAndPermission.find(x => x.name == 'MANUAL FEES').permission;
        }

        this.manualFeesForm = new FormGroup({
            id: new FormControl(null),
            course_id: new FormControl(null, [Validators.required]),
            semester_id: new FormControl(null, [Validators.required]),
            student_id: new FormControl(null, [Validators.required]),
            session_id: new FormControl(null, [Validators.required]),
            date_of_payment: new FormControl(null, [Validators.required]),
            amount: new FormControl(null, [Validators.required]),
        });

        this.searchManualFeesForm = new FormGroup({
            from_date: new FormControl(null, [Validators.required]),
            to_date: new FormControl(null, [Validators.required]),
        });


        this.subjectService.getCourseListener().subscribe((response) => {
            this.courseList = response;
        });
        this.courseList = this.subjectService.getCourses();

        this.studentService.getStudentListener().subscribe((response) => {
            this.studentList = response;
        });
        this.studentList = this.studentService.getStudentLists();

    }

    activeTab(data) {
        this.active = data;
    }

    getSemester() {
        this.subjectService.getSemesterByCourseId(this.manualFeesForm.value.course_id).subscribe((response: any) => {
            this.semesterList = response.data;
        })
    }

    searchManualFeesFunc() {
        this.manualFeesService.searchManualFees(this.searchManualFeesForm.value).subscribe((response: any) => {
            if (response.success == 1) {
                this.manualFeesList = response.data;
            }
        })
    }

    getStudent() {

        // @ts-ignore
        const session_id = JSON.parse(localStorage.getItem('session_id'));
        this.manualFeesForm.patchValue({ session_id: session_id });

        let x = this.studentList.filter(x => x.course_id == this.manualFeesForm.value.course_id);
        this.filteredStudent = x.filter(x => x.current_semester_id == this.manualFeesForm.value.semester_id);
        this.filteredStudent = this.filteredStudent.filter(x => x.session_id == this.manualFeesForm.value.session_id);
    }

    selectFile(event) {
        if (event.target.files[0].size > this.maxSize) {
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Select file max 1 mb',
                showConfirmButton: false,
                timer: 1000
            });
            event.target.value = '';
            return;
        }

        this.selectedFile = event.target.files[0];
    }


    saveManualFees() {

        const formData = new FormData();
        formData.append('course_id', this.manualFeesForm.value.course_id);
        formData.append('semester_id', this.manualFeesForm.value.semester_id);
        formData.append('student_id', this.manualFeesForm.value.student_id);
        formData.append('session_id', this.manualFeesForm.value.session_id);
        formData.append('date_of_payment', this.manualFeesForm.value.date_of_payment);
        formData.append('amount', this.manualFeesForm.value.amount);
        // @ts-ignore
        formData.append('file', this.selectedFile);

        this.manualFeesService.saveManualFees(formData).subscribe((response: any) => {
            if (response.success == 1) {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'SuccessFully Saved',
                    showConfirmButton: false,
                    timer: 1000
                });
                this.manualFeesForm.reset();
            }
        })
    }

    updateManualFees() {

    }

    cancelUpdate() {
        this.manualFeesForm.reset();
        this.isUpdatable = false;
    }

    editManualFees(data) {
        // this.manualFeesForm.patchValue(data);
        this.subjectService.getSemesterByCourseId(data.course_id).subscribe((response: any) => {
            this.semesterList = response.data;

            this.manualFeesForm.patchValue(data);

            // @ts-ignore
            const session_id = JSON.parse(localStorage.getItem('session_id'));
            this.manualFeesForm.patchValue({ session_id: session_id });

            let x = this.studentList.filter(x => x.course_id == this.manualFeesForm.value.course_id);
            this.filteredStudent = x.filter(x => x.current_semester_id == this.manualFeesForm.value.semester_id);
            this.filteredStudent = this.filteredStudent.filter(x => x.session_id == this.manualFeesForm.value.session_id);


            this.manualFeesForm.patchValue(data);
            this.isUpdatable = true;
            this.active = 1;
        })

    }

    deleteManualFees(data) {
        Swal.fire({
            title: 'Confirmation',
            text: 'Do you sure to delete ?',
            icon: 'info',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete It!'
        }).then((result) => {
            if (result.isConfirmed) {
                this.manualFeesService.deleteManualFees(data.id).subscribe((response: any) => {
                    if (response.success == 1) {
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'Manual fees deleted',
                            showConfirmButton: false,
                            timer: 1000
                        });
                        // this.manualFeesList = response.data;
                        this.searchManualFeesFunc();
                    }
                })
            }
        });

    }


}
