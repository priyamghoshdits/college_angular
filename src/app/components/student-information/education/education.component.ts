import { Component } from '@angular/core';
import { MatIconModule } from "@angular/material/icon";
import { NgForOf, NgIf } from "@angular/common";
import { NgxPaginationModule } from "ngx-pagination";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { RolesAndPermissionService } from "../../../services/roles-and-permission.service";
import { SubjectService } from "../../../services/subject.service";
import { StudentService } from "../../../services/student.service";
import Swal from "sweetalert2";
import { NgbNav, NgbNavItem, NgbNavLink, NgbNavLinkBase } from "@ng-bootstrap/ng-bootstrap";

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
    file_ten: File;
    file_twelve: File;
    file_graduation: File;
    maxSize =  1 * 1024 * 1024; // 1 MB in bytes

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
            file_ten: new FormControl(null),
            file_twelve: new FormControl(null),
            file_graduation: new FormControl(null),
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
            this.permission = this.rolesAndPermission.find(x => x.name == 'EDUCATION QUALIFICATION').permission;
        });
        this.rolesAndPermission = this.roleAndPermissionService.getRolesAndPermission();
        if (this.rolesAndPermission.length > 0) {
            this.permission = this.rolesAndPermission.find(x => x.name == 'EDUCATION QUALIFICATION').permission;
        }
    }

    activeTab(data) {
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
        this.educationQualificationForm.patchValue({ session_id: session_id });

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

    getStudentForSearch() {
        // @ts-ignore
        const session_id = JSON.parse(localStorage.getItem('session_id'));
        this.searchEducationQualificationForm.patchValue({ session_id: session_id });

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

    uploadFilehelper(event, type) {

        if(event.target.files[0].size > this.maxSize){
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

        if (type == '10') {
            this.file_ten = event.target.files[0];
        } else if (type == '12') {
            this.file_twelve = event.target.files[0];
        } else {
            this.file_graduation = event.target.files[0];
        }
    }

    saveEducationQualification() {
        const formData = new FormData();
        formData.append('id', this.educationQualificationForm.value.id);
        formData.append('course_id', this.educationQualificationForm.value.course_id);
        formData.append('semester_id', this.educationQualificationForm.value.semester_id);
        formData.append('session_id', this.educationQualificationForm.value.session_id);
        formData.append('student_id', this.educationQualificationForm.value.student_id);
        formData.append('board_ten', this.educationQualificationForm.value.board_ten);
        formData.append('marks_obtained_ten', this.educationQualificationForm.value.marks_obtained_ten);
        formData.append('percentage_ten', this.educationQualificationForm.value.percentage_ten);
        formData.append('division_ten', this.educationQualificationForm.value.division_ten);
        formData.append('main_subject_ten', this.educationQualificationForm.value.main_subject_ten);
        formData.append('year_of_passing_ten', this.educationQualificationForm.value.year_of_passing_ten);
        formData.append('board_twelve', this.educationQualificationForm.value.board_twelve);
        formData.append('marks_obtained_twelve', this.educationQualificationForm.value.marks_obtained_twelve);
        formData.append('percentage_twelve', this.educationQualificationForm.value.percentage_twelve);
        formData.append('division_twelve', this.educationQualificationForm.value.division_twelve);
        formData.append('main_subject_twelve', this.educationQualificationForm.value.main_subject_twelve);
        formData.append('year_of_passing_twelve', this.educationQualificationForm.value.year_of_passing_twelve);
        formData.append('board_graduation', this.educationQualificationForm.value.board_graduation);
        formData.append('marks_obtained_graduation', this.educationQualificationForm.value.marks_obtained_graduation);
        formData.append('percentage_graduation', this.educationQualificationForm.value.percentage_graduation);
        formData.append('division_graduation', this.educationQualificationForm.value.division_graduation);
        formData.append('main_subject_graduation', this.educationQualificationForm.value.main_subject_graduation);
        formData.append('year_of_passing_graduation', this.educationQualificationForm.value.year_of_passing_graduation);
        formData.append('file_ten', this.file_ten);
        formData.append('file_twelve', this.file_twelve);
        formData.append('file_graduation', this.file_graduation);

        this.studentService.saveEducationQualification(formData).subscribe((response: any) => {
            if (response.success == 1) {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Education Qualification Saved',
                    showConfirmButton: false,
                    timer: 1000
                });
                this.educationQualificationForm.reset();
            } else if (response.success == 2) {
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: response.message,
                    showConfirmButton: false,
                    timer: 2000
                });
                this.educationQualificationForm.reset();
            }
        })
    }

    searchEducationQualification() {
        this.studentService.searchEducationQualification(this.searchEducationQualificationForm.value.student_id).subscribe((response: any) => {
            if (response.success == 1) {
                this.educationQualificationList = response.data;
            }
        });
    }

    editEducationQualification() {
        this.educationQualificationForm.patchValue({ course_id: this.searchEducationQualificationForm.value.course_id });
        if (this.semesterList.findIndex(x => x.semester_id == this.searchEducationQualificationForm.value.semester_id) == -1) {
            this.subjectService.getSemesterByCourseId(this.educationQualificationForm.value.course_id).subscribe((response: any) => {
                this.semesterList = response.data;
                this.educationQualificationForm.patchValue({ semester_id: this.searchEducationQualificationForm.value.semester_id });
                this.educationQualificationForm.patchValue(this.educationQualificationList);
                this.active = 1;
                this.isUpdatable = true;
            });
        } else {
            this.educationQualificationForm.patchValue({ semester_id: this.searchEducationQualificationForm.value.semester_id });
            this.educationQualificationForm.patchValue(this.educationQualificationList);
            this.active = 1;
            this.isUpdatable = true;
        }
    }

    updateEducationQualification() {

        const formData = new FormData();
        formData.append('id', this.educationQualificationForm.value.id);
        formData.append('course_id', this.educationQualificationForm.value.course_id);
        formData.append('semester_id', this.educationQualificationForm.value.semester_id);
        formData.append('session_id', this.educationQualificationForm.value.session_id);
        formData.append('student_id', this.educationQualificationForm.value.student_id);
        formData.append('board_ten', this.educationQualificationForm.value.board_ten);
        formData.append('marks_obtained_ten', this.educationQualificationForm.value.marks_obtained_ten);
        formData.append('percentage_ten', this.educationQualificationForm.value.percentage_ten);
        formData.append('division_ten', this.educationQualificationForm.value.division_ten);
        formData.append('main_subject_ten', this.educationQualificationForm.value.main_subject_ten);
        formData.append('year_of_passing_ten', this.educationQualificationForm.value.year_of_passing_ten);
        formData.append('board_twelve', this.educationQualificationForm.value.board_twelve);
        formData.append('marks_obtained_twelve', this.educationQualificationForm.value.marks_obtained_twelve);
        formData.append('percentage_twelve', this.educationQualificationForm.value.percentage_twelve);
        formData.append('division_twelve', this.educationQualificationForm.value.division_twelve);
        formData.append('main_subject_twelve', this.educationQualificationForm.value.main_subject_twelve);
        formData.append('year_of_passing_twelve', this.educationQualificationForm.value.year_of_passing_twelve);
        formData.append('board_graduation', this.educationQualificationForm.value.board_graduation);
        formData.append('marks_obtained_graduation', this.educationQualificationForm.value.marks_obtained_graduation);
        formData.append('percentage_graduation', this.educationQualificationForm.value.percentage_graduation);
        formData.append('division_graduation', this.educationQualificationForm.value.division_graduation);
        formData.append('main_subject_graduation', this.educationQualificationForm.value.main_subject_graduation);
        formData.append('year_of_passing_graduation', this.educationQualificationForm.value.year_of_passing_graduation);
        formData.append('file_ten', this.file_ten);
        formData.append('file_twelve', this.file_twelve);
        formData.append('file_graduation', this.file_graduation);

        this.studentService.updateEducationQualification(formData).subscribe((response: any) => {
            if (response.success == 1) {
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

    cancelUpdate() {
        this.isUpdatable = false;
        this.educationQualificationForm.reset();
    }

}
