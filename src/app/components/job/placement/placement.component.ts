import { Component } from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import {NgForOf, NgIf} from "@angular/common";
import {NgxPaginationModule} from "ngx-pagination";
import {StudentService} from "../../../services/student.service";
import {SubjectService} from "../../../services/subject.service";
import {RolesAndPermissionService} from "../../../services/roles-and-permission.service";
import {JobService} from "../../../services/job.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-placement',
  standalone: true,
    imports: [
        FormsModule,
        MatIconModule,
        NgForOf,
        NgIf,
        NgxPaginationModule,
        ReactiveFormsModule
    ],
  templateUrl: './placement.component.html',
  styleUrl: './placement.component.scss'
})
export class PlacementComponent {
    placementDetailsForm: FormGroup;
    companyDetailsList: any[];
    studentList: any[];
    courseList: any[];
    semesterList: any[];
    rolesAndPermission: any[] = [];
    permission: any[] = [];
    isUpdatable = false;
    p: number;
    filteredStudent: any[];
    constructor(private studentService: StudentService, private jobService: JobService,
                private subjectService: SubjectService, private roleAndPermissionService: RolesAndPermissionService) {
        this.placementDetailsForm = new FormGroup({
            id: new FormControl(null),
            company_id: new FormControl(null, [Validators.required]),
            user_id: new FormControl(null, [Validators.required]),
            placement_date: new FormControl(null, [Validators.required]),
            course_id: new FormControl(null,[Validators.required]),
            session_id: new FormControl(null,[Validators.required]),
            semester_id: new FormControl(null, [Validators.required]),
            description: new FormControl(null),
        });

        this.jobService.getCompanyDetailsListListener().subscribe((response) => {
            this.companyDetailsList = response;
        });
        this.companyDetailsList = this.jobService.getCompanyDetails();

        this.subjectService.getCourseListener().subscribe((response) => {
            this.courseList = response;
        });
        this.courseList = this.subjectService.getCourses();

        this.studentService.getStudentListener().subscribe((response) => {
            this.studentList = response;
        });
        this.studentList = this.studentService.getStudentLists();

        this.roleAndPermissionService.getRolesAndPermissionListener().subscribe((response) => {
            this.rolesAndPermission = response;
            this.permission = this.rolesAndPermission.find(x => x.name == 'INTERNSHIP DETAILS').permission;
        });
        this.rolesAndPermission = this.roleAndPermissionService.getRolesAndPermission();
        if(this.rolesAndPermission.length > 0){
            this.permission = this.rolesAndPermission.find(x => x.name == 'INTERNSHIP DETAILS').permission;
        }
    }

    getSemester(){
        // @ts-ignore
        const session_id = JSON.parse(localStorage.getItem('session_id'));

        if(!session_id){
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Select Session',
                showConfirmButton: false,
                timer: 1000
            });
            return;
        }

        this.subjectService.getSemesterByCourseId(this.placementDetailsForm.value.course_id).subscribe((response: any) => {
            this.semesterList = response.data;
        })
    };

    getStudentList(){
        // @ts-ignore
        const session_id = JSON.parse(localStorage.getItem('session_id'));

        let x = this.studentList.filter(x => x.course_id == this.placementDetailsForm.value.course_id);
        this.filteredStudent = x.filter(x => x.current_semester_id == this.placementDetailsForm.value.semester_id);
        if(session_id){
            this.filteredStudent = this.filteredStudent.filter(x => x.session_id == session_id);
        }
    }

    savePlacementDetails(){
        // @ts-ignore
        const session_id = JSON.parse(localStorage.getItem('session_id'));
        if(!session_id){
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Please select session',
                showConfirmButton: false,
                timer: 1000
            });
            return;
        }
        this.placementDetailsForm.patchValue({session_id: session_id});

        if(!this.placementDetailsForm.valid){
            this.placementDetailsForm.markAllAsTouched();
            return;
        }



    }

    updatePlacementDetails(){
        // @ts-ignore
        const session_id = JSON.parse(localStorage.getItem('session_id'));
        if(!session_id){
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Please select session',
                showConfirmButton: false,
                timer: 1000
            });
            return;
        }
        this.placementDetailsForm.patchValue({session_id: session_id});

        if(!this.placementDetailsForm.valid){
            this.placementDetailsForm.markAllAsTouched();
            return;
        }

    }


    cancelUpdate(){
        this.placementDetailsForm.reset();
        this.isUpdatable = false;
    }


}
