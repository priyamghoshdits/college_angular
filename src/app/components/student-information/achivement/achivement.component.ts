import {Component} from '@angular/core';
import {MatIconModule} from "@angular/material/icon";
import {NgForOf, NgIf} from "@angular/common";
import {NgxPaginationModule} from "ngx-pagination";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {RolesAndPermissionService} from "../../../services/roles-and-permission.service";
import {SubjectService} from "../../../services/subject.service";
import {StudentService} from "../../../services/student.service";
import Swal from "sweetalert2";
import {AchievementService} from "../../../services/achievement.service";

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
    achievementForm: FormGroup;
    rolesAndPermission: any[] = [];
    permission: any[] = [];
    courseList: any[];
    semesterList: any[];
    achievementList: any[];
    studentList: any[];
    filteredStudent: any[];
    isUpdatable = false;
    file: any;
    p:number;

    constructor(private roleAndPermissionService: RolesAndPermissionService, private subjectService: SubjectService
        , private studentService: StudentService, private achievementService: AchievementService) {
        this.achievementForm = new FormGroup({
            id: new FormControl(null),
            course_id: new FormControl(null, [Validators.required]),
            semester_id: new FormControl(null, [Validators.required]),
            student_id: new FormControl(null, [Validators.required]),
            session_id: new FormControl(null, [Validators.required]),
            award_date: new FormControl(null, [Validators.required]),
            award_name: new FormControl(null, [Validators.required]),
            file_name: new FormControl(null, [Validators.required]),
        });

        this.achievementService.getAchievementListListener().subscribe((response) => {
            this.achievementList = response;
            console.log(this.achievementList);
        });
        this.achievementList = this.achievementService.getAchievementList();

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

    getStudent() {
        // @ts-ignore
        const session_id = JSON.parse(localStorage.getItem('session_id'));

        this.achievementForm.patchValue({session_id: session_id});

        if (!session_id) {
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

    selectedFile(event) {
        this.file = event.target.files[0];
    }

    saveAchievement() {

        if (!this.achievementForm.valid) {
            this.achievementForm.markAllAsTouched();
            return;
        }
        if (!this.file) {
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Please select a file',
                showConfirmButton: false,
                timer: 1000
            });
            return;
        }

        const formData = new FormData();
        formData.append("id", this.achievementForm.value.id);
        formData.append("course_id", this.achievementForm.value.course_id);
        formData.append("semester_id", this.achievementForm.value.semester_id);
        formData.append("session_id", this.achievementForm.value.semester_id);
        formData.append("student_id", this.achievementForm.value.student_id);
        formData.append("award_date", this.achievementForm.value.award_date);
        formData.append("award_name", this.achievementForm.value.award_name);
        formData.append("file_name", this.file['name']);
        formData.append("file", this.file);

        this.achievementService.saveAchievement(formData).subscribe((response: any) => {
            if (response.success == 1) {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Achievement saved',
                    showConfirmButton: false,
                    timer: 1000
                });
                this.file = null;
                this.achievementForm.reset();
            }
        })
    }

    updateAchievement() {

        if (!this.achievementForm.valid) {
            this.achievementForm.markAllAsTouched();
            return;
        }
        if (!this.file) {
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Please select a file',
                showConfirmButton: false,
                timer: 1000
            });
            return;
        }

        const formData = new FormData();
        formData.append("id", this.achievementForm.value.id);
        formData.append("course_id", this.achievementForm.value.course_id);
        formData.append("semester_id", this.achievementForm.value.semester_id);
        formData.append("session_id", this.achievementForm.value.semester_id);
        formData.append("student_id", this.achievementForm.value.student_id);
        formData.append("award_date", this.achievementForm.value.award_date);
        formData.append("award_name", this.achievementForm.value.award_name);
        formData.append("file_name", this.file['name']);
        formData.append("file", this.file);

        this.achievementService.saveAchievement(formData).subscribe((response: any) => {
            if (response.success == 1) {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Achievement Updated',
                    showConfirmButton: false,
                    timer: 1000
                });
                this.file = null;
                this.cancelUpdate();
            }
        })
    }

    cancelUpdate(){
        this.achievementForm.reset();
        this.isUpdatable = false;
    }

    editAchievement(data){
        this.achievementForm.patchValue(data);
        this.isUpdatable = true;
    }

    deleteAchievement(data){

    }


}
