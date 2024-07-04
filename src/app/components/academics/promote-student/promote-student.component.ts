import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatIcon, MatIconModule } from "@angular/material/icon";
import { NgForOf, NgIf } from "@angular/common";
import { NgxPaginationModule } from "ngx-pagination";
import { SubjectService } from "../../../services/subject.service";
import { SessionService } from "../../../services/session.service";
import { StudentService } from "../../../services/student.service";
import { ToastrService } from "ngx-toastr";
import Swal from "sweetalert2";
import { RolesAndPermissionService } from 'src/app/services/roles-and-permission.service';

@Component({
    selector: 'app-promote-student',
    standalone: true,
    imports: [
        FormsModule,
        MatIconModule,
        NgForOf,
        NgxPaginationModule,
        ReactiveFormsModule,
        NgIf
    ],
    templateUrl: './promote-student.component.html',
    styleUrl: './promote-student.component.scss'
})
export class PromoteStudentComponent {
    promotionForm: FormGroup;
    courseList: any[];
    semesterList: any[];
    sessionList: any[];
    studentList: any[];
    searched = false;
    filteredStudent: any[] = [];
    p: number;
    rolesAndPermission: any[] = [];
    permission: any[] = [];

    constructor(private subjectService: SubjectService, private sessionService: SessionService, private studentService: StudentService, private roleAndPermissionService: RolesAndPermissionService) {
        this.promotionForm = new FormGroup({
            id: new FormControl(null),
            course_id: new FormControl(null, [Validators.required]),
            semester_id: new FormControl(null, [Validators.required]),
            promote_semester_id: new FormControl(null, [Validators.required]),
            session_id: new FormControl(null, [Validators.required]),
            promote_session_id: new FormControl(null, [Validators.required]),
        });
        this.subjectService.getCourseListener().subscribe((response) => {
            this.courseList = response;
        })
        this.courseList = this.subjectService.getCourses();

        this.sessionService.getSessionListener().subscribe((response) => {
            this.sessionList = response;
        });
        this.sessionList = this.sessionService.getSessionList();
        this.studentService.getStudentListener().subscribe((response) => {
            this.studentList = response;
        });
        this.studentList = this.studentService.getStudentLists();

        this.roleAndPermissionService.getRolesAndPermissionListener().subscribe((response) => {
            this.rolesAndPermission = response;
            this.permission = this.rolesAndPermission.find(x => x.name == 'SEMESTER').permission;
        });
        this.rolesAndPermission = this.roleAndPermissionService.getRolesAndPermission();
        if (this.rolesAndPermission.length > 0) {
            this.permission = this.rolesAndPermission.find(x => x.name == 'SEMESTER').permission;
        }
    }

    getSemester() {
        this.subjectService.getSemesterByCourseId(this.promotionForm.value.course_id).subscribe((response) => {
            // @ts-ignore
            this.semesterList = response.data;
        })
    }

    searchStudents() {
        if (!this.promotionForm.valid) {
            this.promotionForm.markAllAsTouched();
            return;
        }
        let studentsByCourse = this.studentList.filter(x => x.course_id == this.promotionForm.value.course_id);
        let studentsBySemester = studentsByCourse.filter(x => x.current_semester_id == this.promotionForm.value.semester_id);
        this.filteredStudent = studentsBySemester.filter(x => x.session_id == this.promotionForm.value.session_id);
        this.filteredStudent.forEach(function (value) {
            value.checked = false;
        });
        this.searched = true;
    }

    checkAll(event) {
        if (event.target.checked) {
            this.filteredStudent.forEach(function (value) {
                value.checked = true;
            });
        } else {
            this.filteredStudent.forEach(function (value) {
                value.checked = false;
            });
        }
    }

    promotionCheck(data, event) {
        if (event.target.checked) {
            let index = this.filteredStudent.findIndex(x => x.id == data.id);
            this.filteredStudent[index].checked = true;
        } else {
            let index = this.filteredStudent.findIndex(x => x.id == data.id);
            this.filteredStudent[index].checked = false;
        }
    }

    promoteStudent() {
        let checkedStudent = this.studentList.filter(x => x.checked == true);
        if (checkedStudent.length == 0) {
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Select atleast one student',
                showConfirmButton: false,
                timer: 1500
            });
            return;
        }
        let promote_semester_id = this.promotionForm.value.promote_semester_id;
        let promote_session_id = this.promotionForm.value.promote_session_id;
        checkedStudent.forEach(function (value) {
            value.promote_semester_id = promote_semester_id;
            value.promote_session_id = promote_session_id;
        });
        this.studentService.promoteStudents(checkedStudent).subscribe((response) => {
            // @ts-ignore
            if (response.success == 1) {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Promoted Successfully',
                    showConfirmButton: false,
                    timer: 1000
                });
                this.promotionForm.reset();
                this.filteredStudent = [];
            }
        })
    }

}
