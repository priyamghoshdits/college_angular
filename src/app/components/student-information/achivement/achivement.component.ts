import { Component } from '@angular/core';
import {MatIconModule} from "@angular/material/icon";
import {NgForOf, NgIf} from "@angular/common";
import {NgxPaginationModule} from "ngx-pagination";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {RolesAndPermissionService} from "../../../services/roles-and-permission.service";
import {SubjectService} from "../../../services/subject.service";
import {StudentService} from "../../../services/student.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-achivement',
  standalone: true,
    imports: [
        MatIconModule,
        NgForOf,
        NgIf,
        NgxPaginationModule,
        ReactiveFormsModule
    ],
  templateUrl: './achivement.component.html',
  styleUrl: './achivement.component.scss'
})
export class AchivementComponent {
    achievementForm:FormGroup;
    rolesAndPermission: any[] = [];
    permission: any[] = [];
    courseList: any[];
    semesterList: any[];
    studentList: any[];
    filteredStudent: any[];
    isUpdatable = false;
    file = null;
    constructor(private roleAndPermissionService: RolesAndPermissionService, private subjectService: SubjectService
                , private studentService: StudentService) {
        this.achievementForm = new FormGroup({
            id: new FormControl(null),
            course_id: new FormControl(null, [Validators.required]),
            semester_id: new FormControl(null, [Validators.required]),
            student_id: new FormControl(null, [Validators.required]),
            award_date: new FormControl(null, [Validators.required]),
            award_name: new FormControl(null, [Validators.required]),
            file_name: new FormControl(null, [Validators.required]),
        });

        this.studentService.getStudentListener().subscribe((response) => {
            this.studentList = response;
        });
        this.studentList = this.studentService.getStudentLists();

        this.roleAndPermissionService.getRolesAndPermissionListener().subscribe((response) => {
            this.rolesAndPermission = response;
            this.permission = this.rolesAndPermission.find(x => x.name == 'COURSE').permission;
        });
        this.rolesAndPermission = this.roleAndPermissionService.getRolesAndPermission();
        if(this.rolesAndPermission.length > 0){
            this.permission = this.rolesAndPermission.find(x => x.name == 'COURSE').permission;
        }

        this.subjectService.getCourseListener().subscribe((response) => {
            this.courseList = response;
        });
        this.courseList = this.subjectService.getCourses();
    }

    getSemester() {
        this.subjectService.getSemesterByCourseId(this.achievementForm.value.course_id).subscribe((response: any) => {
            this.semesterList = response.data;
        })
    }

    getStudent(){
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

        let x = this.studentList.filter(x => x.course_id == this.achievementForm.value.course_id);
        this.filteredStudent = x.filter(x => x.current_semester_id == this.achievementForm.value.semester_id);
        this.filteredStudent = this.filteredStudent.filter(x => x.session_id == session_id);
    }

    selectedFile(){
        
    }

    saveAchievement(){
        console.log(this.achievementForm.value);
    }


}
