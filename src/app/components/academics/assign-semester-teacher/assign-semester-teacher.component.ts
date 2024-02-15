import { Component } from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import {NgForOf, NgIf} from "@angular/common";
import {NgxPaginationModule} from "ngx-pagination";
import {SubjectService} from "../../../services/subject.service";
import {MemberService} from "../../../services/member.service";
import {SemesterService} from "../../../services/semester.service";
import Swal from "sweetalert2";
import {RolesAndPermissionService} from "../../../services/roles-and-permission.service";
import {cloneDeep} from 'lodash';

@Component({
  selector: 'app-assign-semester-teacher',
  standalone: true,
    imports: [
        FormsModule,
        MatIconModule,
        NgForOf,
        NgxPaginationModule,
        ReactiveFormsModule,
        NgIf
    ],
  templateUrl: './assign-semester-teacher.component.html',
  styleUrl: './assign-semester-teacher.component.scss'
})
export class AssignSemesterTeacherComponent {
    courseList: any[];
    semesterList: any[];
    teachers: any[];
    cloneTeacher: any[];
    assignSemesterTeacherForm: FormGroup;
    tempTeacher = [];
    assignedTeacher: any[];
    p: number;
    isUpdatable = false;
    rolesAndPermission: any[] = [];
    permission: any[] = [];
    constructor(private subjectService: SubjectService, private memberService: MemberService, private semesterService: SemesterService, private roleAndPermissionService: RolesAndPermissionService) {

        this.assignSemesterTeacherForm = new FormGroup({
            id: new FormControl(null),
            course_id: new FormControl(null, [Validators.required]),
            semester_id: new FormControl(null, [Validators.required]),
        });

        this.subjectService.getCourseListener().subscribe((response) => {
            this.courseList = response;
        });
        this.courseList = this.subjectService.getCourses();

        this.memberService.getTeacherListener().subscribe((response) => {
            this.teachers = response;
            this.cloneTeacher = cloneDeep(this.teachers);
        })
        this.teachers = this.memberService.getTeacherList();

        this.semesterService.assignedTeacherListener().subscribe((response) => {
            this.assignedTeacher = response;
        })
        this.assignedTeacher = this.semesterService.getAssignedTeacher();

        this.roleAndPermissionService.getRolesAndPermissionListener().subscribe((response) => {
            this.rolesAndPermission = response;
            this.permission = this.rolesAndPermission.find(x => x.name == 'ASSIGN SEMESTER TEACHER').permission;
        });
        this.rolesAndPermission = this.roleAndPermissionService.getRolesAndPermission();
        if(this.rolesAndPermission.length > 0){
            this.permission = this.rolesAndPermission.find(x => x.name == 'ASSIGN SEMESTER TEACHER').permission;
        }

    }

    getSemester(){
        this.subjectService.getSemesterByCourseId(this.assignSemesterTeacherForm.value.course_id).subscribe((response) => {
            // @ts-ignore
            this.semesterList = response.data;
        })
    }

    saveAssignSemesterTeacher(){
        if(!this.assignSemesterTeacherForm.valid){
            this.assignSemesterTeacherForm.markAllAsTouched();
            return;
        }
        if(this.tempTeacher.length == 0){
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Please select teacher',
                showConfirmButton: false,
                timer: 1500
            });
        }
        let arr;
        arr = [
            {course_id: this.assignSemesterTeacherForm.value.course_id,
                semester_id: this.assignSemesterTeacherForm.value.semester_id,
                teacher : this.tempTeacher
            }
        ];
        this.semesterService.saveAssignSemesterTeacher(arr[0]).subscribe((response) => {
            // @ts-ignore
            if(response.success == 1){
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Teacher Assigned',
                    showConfirmButton: false,
                    timer: 1000
                });
                this.assignSemesterTeacherForm.reset();
                // this.teachers.forEach(function (value){
                //     value.checked = false;
                // });
                this.tempTeacher = [];
                this.cancelUpdate();
                this.teachers = cloneDeep(this.cloneTeacher);
            }
        });
    }

    deleteAssignTeacher(data){
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
                this.semesterService.deleteAssignSemesterTeacher(data.course_id, data.semester_id)
                    .subscribe((response) => {
                        // @ts-ignore
                        if (response.success == 1) {
                            Swal.fire({
                                position: 'center',
                                icon: 'success',
                                title: 'Assigned Teacher Removed',
                                showConfirmButton: false,
                                timer: 1000
                            });
                        }
                    });
            }

        });
    }

    editAssignTeacher(data){
        this.assignSemesterTeacherForm.patchValue({'id': data.id, 'course_id': data.course_id});
        this.getSemester();
        this.assignSemesterTeacherForm.patchValue({'semester_id': data.semester_id});
        let temp = [];
        data.teacher.forEach(function (value){
            let teacher;
            teacher = [
                {"id": value.id}
            ];
            // @ts-ignore
            temp.push(teacher[0]);
        });
        this.tempTeacher = temp;

        this.teachers.forEach(function (value){
            value.checked = data.teacher.findIndex(x => x.id === value.id) != -1;
        });

        this.isUpdatable = true;
    }

    updateAssignSemesterTeacher(){
        let arr;
        arr = [
            {course_id: this.assignSemesterTeacherForm.value.course_id,
                semester_id: this.assignSemesterTeacherForm.value.semester_id,
                teacher : this.tempTeacher
            }
        ];
        this.semesterService.updateAssignSemesterTeacher(arr[0]).subscribe((response) => {
            // @ts-ignore
            if(response.success == 1){
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Updated successfully',
                    showConfirmButton: false,
                    timer: 1000
                });
            }
        });
    }

    cancelUpdate(){
        this.assignSemesterTeacherForm.reset();
        this.teachers.forEach(function (value){
            value.checked = false;
        });
        this.isUpdatable = false;
    }

    importTeacher(data, event){
        let teacher;
        if(event.target.checked){
            teacher = [
                {"id": data.id}
            ];
            // @ts-ignore
            this.tempTeacher.push(teacher[0]);
        }else{
            // @ts-ignore
            let index = this.tempTeacher.findIndex(x => x.id === data.id)
            this.tempTeacher.splice(index,1);
        }

    }



}
