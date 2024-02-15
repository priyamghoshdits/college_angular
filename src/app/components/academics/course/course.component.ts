import { Component } from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgForOf, NgIf} from "@angular/common";
import {NgxPaginationModule} from "ngx-pagination";
import {SubjectService} from "../../../services/subject.service";
import { MatIconModule } from '@angular/material/icon';
import Swal from "sweetalert2";
import {CommonService} from "../../../services/common.service";
import {RolesAndPermissionService} from "../../../services/roles-and-permission.service";
import {cloneDeep} from 'lodash';



@Component({
  selector: 'app-course',
  standalone: true,
    imports: [
        FormsModule,
        NgForOf,
        NgxPaginationModule,
        ReactiveFormsModule,
        MatIconModule,
        NgIf,
    ],
  templateUrl: './course.component.html',
  styleUrl: './course.component.scss'
})
export class CourseComponent {
    courseForm: FormGroup;
    semesterList: any[];
    cloneSemesterList: any[];
    rolesAndPermission: any[] = [];
    permission: any[] = [];
    courseList: any[];
    tempSem = [];
    p: number;
    isUpdatable = false;

    constructor(private subjectService: SubjectService, private roleAndPermissionService: RolesAndPermissionService){
        this.courseForm = new FormGroup({
            id: new FormControl(null),
            name: new FormControl(null, [Validators.required]),
        });

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
        this.subjectService.getSemesterListener().subscribe((response: any) => {
            this.semesterList = response;
            this.cloneSemesterList = cloneDeep(this.semesterList);
        });
        this.semesterList = this.subjectService.getSemester();
        if(this.semesterList.length > 0){
            this.cloneSemesterList = cloneDeep(this.semesterList);
        }
    }

    editCourse(data){
        this.courseForm.patchValue({'id': data.id, 'name': data.course_name});
        // this.tempSem = data.semester;
        let temp = [];
        data.semester.forEach(function (key,value){
            let sem;
            sem = [
                {semester_id: key.id}
            ];
            // @ts-ignore
            temp.push(sem[0]);
        });
        this.tempSem = temp;

        this.semesterList.forEach(function (value){
            value.checked = data.semester.findIndex(x => x.id === value.id) != -1;
        })
        this.isUpdatable = true;
    }

    deleteCourse(data){
        Swal.fire({
            title: 'Confirmation',
            text: 'Do you sure to delete course ?',
            icon: 'info',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete It!'
        }).then((result) => {
            if (result.isConfirmed){
                this.subjectService.deleteCourse(data.id).subscribe((response) => {
                    // @ts-ignore
                    if(response.success == 1){
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'Course Deleted',
                            showConfirmButton: false,
                            timer: 1000
                        });
                    }
                });
            }
        });
    }

    saveCourse(){
        if(!this.courseForm.valid){
            this.courseForm.markAllAsTouched();
            return;
        }
        if(this.tempSem.length == 0){
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Select atleast one sem',
                showConfirmButton: false,
                timer: 1500
            });
            return;
        }
        let arr;
        arr = [
            {
                course_name: this.courseForm.value.name,
                duration: 1,
                semester : this.tempSem
            }
        ];
        this.subjectService.saveCourse(arr[0]).subscribe((response) => {
            // @ts-ignore
            if(response.success == 1){
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Course saved',
                    showConfirmButton: false,
                    timer: 1000
                });
                this.courseForm.reset();
                this.semesterList= cloneDeep(this.cloneSemesterList);
                this.tempSem = [];
            }
        });
    }

    cancelUpdate(){
        this.courseForm.reset();
        // this.semesterList.forEach(function (value){
        //     value.checked = false;
        // })
        this.semesterList= cloneDeep(this.cloneSemesterList);
        this.isUpdatable = false;
    }

    importSemester(data, status){
        let sem;
        if(status.target.checked){
            sem = [
                {semester_id: data.id}
            ];
            // @ts-ignore
            this.tempSem.push(sem[0]);
        }else {
            // @ts-ignore
            let index = this.tempSem.findIndex(x => x.id === data.id)
            this.tempSem.splice(index, 1);
        }
    }

    updateCourse(){
        if(!this.courseForm.valid){
            this.courseForm.markAllAsTouched();
            return;
        }
        if(this.tempSem.length == 0){
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Select atleast one sem',
                showConfirmButton: false,
                timer: 1500
            });
            return;
        }
        let arr;
        arr = [
            {
                id: this.courseForm.value.id,
                course_name: this.courseForm.value.name,
                duration: 1,
                semester : this.tempSem
            }
        ]
        this.subjectService.updateCourse(arr[0]).subscribe((response) => {
            // @ts-ignore
            if(response.success == 1){
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Course Updated',
                    showConfirmButton: false,
                    timer: 1000
                });
            }
            this.cancelUpdate();
        });
    }

}
