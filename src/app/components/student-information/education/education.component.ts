import {Component} from '@angular/core';
import {MatIconModule} from "@angular/material/icon";
import {NgForOf, NgIf} from "@angular/common";
import {NgxPaginationModule} from "ngx-pagination";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {RolesAndPermissionService} from "../../../services/roles-and-permission.service";
import {SubjectService} from "../../../services/subject.service";
import {StudentService} from "../../../services/student.service";
import Swal from "sweetalert2";
import {NgbNav, NgbNavItem, NgbNavLink, NgbNavLinkBase} from "@ng-bootstrap/ng-bootstrap";

@Component({
    selector: 'app-education',
    standalone: true,
    imports: [
        MatIconModule,
        NgForOf,
        NgIf,
        NgxPaginationModule,
        ReactiveFormsModule,
        NgbNav,
        NgbNavLink,
        NgbNavLinkBase,
        NgbNavItem
    ],
    templateUrl: './education.component.html',
    styleUrl: './education.component.scss'
})
export class EducationComponent {
    educationQualificationForm: FormGroup;
    searchEducationQualificationForm: FormGroup;
    rolesAndPermission: any[] = [];
    permission: any[] = [];
    courseList: any[];
    semesterList: any[];
    studentList: any[];
    filteredStudentList: any[];
    educationQualificationList: any;
    isUpdatable = false;
    public active = 1;

    constructor(private roleAndPermissionService: RolesAndPermissionService, private subjectService: SubjectService, private studentService: StudentService) {
        this.educationQualificationForm = new FormGroup({
            id: new FormControl(null),
            course_id: new FormControl(null, [Validators.required]),
            semester_id: new FormControl(null, [Validators.required]),
            session_id: new FormControl(null, [Validators.required]),
            student_id: new FormControl(null, [Validators.required]),
            board_ten: new FormControl(null, [Validators.required]),
            marks_obtained_ten: new FormControl(null, [Validators.required]),
            percentage_ten: new FormControl(null, [Validators.required]),
            division_ten: new FormControl(null, [Validators.required]),
            main_subject_ten: new FormControl(null, [Validators.required]),
            year_of_passing_ten: new FormControl(null, [Validators.required]),
            board_twelve: new FormControl(null, [Validators.required]),
            marks_obtained_twelve: new FormControl(null, [Validators.required]),
            percentage_twelve: new FormControl(null, [Validators.required]),
            division_twelve: new FormControl(null, [Validators.required]),
            main_subject_twelve: new FormControl(null, [Validators.required]),
            year_of_passing_twelve: new FormControl(null, [Validators.required]),
            board_graduation: new FormControl(null, [Validators.required]),
            marks_obtained_graduation: new FormControl(null, [Validators.required]),
            percentage_graduation: new FormControl(null, [Validators.required]),
            division_graduation: new FormControl(null, [Validators.required]),
            main_subject_graduation: new FormControl(null, [Validators.required]),
            year_of_passing_graduation: new FormControl(null, [Validators.required]),
        });

        this.searchEducationQualificationForm = new FormGroup({
            id: new FormControl(null),
            course_id: new FormControl(null, [Validators.required]),
            semester_id: new FormControl(null, [Validators.required]),
            session_id: new FormControl(null, [Validators.required]),
            student_id: new FormControl(null, [Validators.required]),
        });

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
            this.permission = this.rolesAndPermission.find(x => x.name == 'COURSE').permission;
        });
        this.rolesAndPermission = this.roleAndPermissionService.getRolesAndPermission();
        if (this.rolesAndPermission.length > 0) {
            this.permission = this.rolesAndPermission.find(x => x.name == 'COURSE').permission;
        }
    }

    activeTab(data){
        this.active = data;
    }

    getSemester() {
        this.subjectService.getSemesterByCourseId(this.educationQualificationForm.value.course_id ?? this.searchEducationQualificationForm.value.course_id).subscribe((response: any) => {
            this.semesterList = response.data;
        })
    }

    getStudent() {
        // @ts-ignore
        const session_id = JSON.parse(localStorage.getItem('session_id'));
        this.educationQualificationForm.patchValue({session_id: session_id});

        if (this.educationQualificationForm.value.course_id) {
            this.filteredStudentList = this.studentList.filter(x => x.course_id == this.educationQualificationForm.value.course_id);
        }
        if (this.educationQualificationForm.value.semester_id != null) {
            this.filteredStudentList = this.filteredStudentList.filter(x => x.current_semester_id == this.educationQualificationForm.value.semester_id);
        }
        if (this.educationQualificationForm.value.session_id != null) {
            this.filteredStudentList = this.filteredStudentList.filter(x => x.session_id == this.educationQualificationForm.value.session_id);
        }
    }

    getStudentForSearch(){
        // @ts-ignore
        const session_id = JSON.parse(localStorage.getItem('session_id'));
        this.searchEducationQualificationForm.patchValue({session_id: session_id});

        if (this.searchEducationQualificationForm.value.course_id) {
            this.filteredStudentList = this.studentList.filter(x => x.course_id == this.searchEducationQualificationForm.value.course_id);
        }
        if (this.searchEducationQualificationForm.value.semester_id != null) {
            this.filteredStudentList = this.filteredStudentList.filter(x => x.current_semester_id == this.searchEducationQualificationForm.value.semester_id);
        }
        if (this.searchEducationQualificationForm.value.session_id != null) {
            this.filteredStudentList = this.filteredStudentList.filter(x => x.session_id == this.searchEducationQualificationForm.value.session_id);
        }
    }

    saveEducationQualification(){
        this.studentService.saveEducationQualification(this.educationQualificationForm.value).subscribe((response: any) => {
            if(response.success == 1){
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Education Qualification Saved',
                    showConfirmButton: false,
                    timer: 1000
                });
                this.educationQualificationForm.reset();
            }
        })
    }

    searchEducationQualification(){
        this.studentService.searchEducationQualification(this.searchEducationQualificationForm.value.student_id).subscribe((response: any) => {
            if(response.success == 1){
                this.educationQualificationList = response.data;
            }
        });
    }

    editEducationQualification(){
        this.educationQualificationForm.patchValue({course_id: this.searchEducationQualificationForm.value.course_id});
        if(this.semesterList.findIndex(x => x.semester_id == this.searchEducationQualificationForm.value.semester_id) == -1){
            this.subjectService.getSemesterByCourseId(this.educationQualificationForm.value.course_id).subscribe((response: any) => {
                this.semesterList = response.data;
                this.educationQualificationForm.patchValue({semester_id: this.searchEducationQualificationForm.value.semester_id});
                this.educationQualificationForm.patchValue(this.educationQualificationList);
                this.active = 1;
                this.isUpdatable = true;
            });
        }else{
            this.educationQualificationForm.patchValue({semester_id: this.searchEducationQualificationForm.value.semester_id});
            this.educationQualificationForm.patchValue(this.educationQualificationList);
            this.active = 1;
            this.isUpdatable = true;
        }
    }

    updateEducationQualification(){
        this.studentService.updateEducationQualification(this.educationQualificationForm.value).subscribe((response: any) => {
            if(response.success == 1){
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Education Qualification Updated',
                    showConfirmButton: false,
                    timer: 1000
                });
                this.cancelUpdate();
                this.searchEducationQualificationForm.reset();
                this.educationQualificationList = null;
            }
        });
    }

    cancelUpdate(){
        this.isUpdatable = false;
        this.educationQualificationForm.reset();
    }

}
