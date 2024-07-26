import { Component } from '@angular/core';
import { NgForOf, NgIf } from "@angular/common";
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { SubjectService } from "../../../services/subject.service";
import { DownloadCenterService } from "../../../services/download-center.service";
import Swal from "sweetalert2";
import { MatIconModule } from "@angular/material/icon";
import { CustomFilterPipe } from "custom-filter.pipe";
import { RolesAndPermissionService } from "../../../services/roles-and-permission.service";
import { NgSelectModule } from '@ng-select/ng-select';

@Component({
    selector: 'app-upload-content',
    standalone: true,
    imports: [
        NgForOf,
        ReactiveFormsModule,
        MatIconModule,
        CustomFilterPipe,
        FormsModule,
        NgIf,
        NgSelectModule
        // Ng2SearchPipeModule
    ],
    templateUrl: './upload-content.component.html',
    styleUrl: './upload-content.component.scss'
})
export class UploadContentComponent {
    uploadContentForm: FormGroup;
    courseList: any[];
    semesterList: any[];
    subjectList: any[];
    isAssignment = false;
    file: any;
    contentList: any[];
    isUpdatable = false;
    searchItem: string;
    rolesAndPermission: any[] = [];
    permission: any[] = [];
    maxSize = 10 * 1024 * 1024; // 1 MB in bytes

    constructor(private subjectService: SubjectService, private downloadCenterService: DownloadCenterService
        , private roleAndPermissionService: RolesAndPermissionService) {
        this.uploadContentForm = new FormGroup({
            id: new FormControl(null),
            title: new FormControl(null, [Validators.required]),
            course_id: new FormControl(null, [Validators.required]),
            semester_id: new FormControl(null, [Validators.required]),
            type: new FormControl(null, [Validators.required]),
            subject_id: new FormControl(null, [Validators.required]),
            content_name: new FormControl(null),
            upload_date: new FormControl(null, [Validators.required]),
            description: new FormControl(null),
            fileTemp: new FormControl(null),
        });

        this.subjectService.getCourseListener().subscribe((response) => {
            this.courseList = response;
        })
        this.courseList = this.subjectService.getCourses();

        this.downloadCenterService.getContentListListener().subscribe((response) => {
            this.contentList = response;
        })
        this.contentList = this.downloadCenterService.getAllContents();

        this.roleAndPermissionService.getRolesAndPermissionListener().subscribe((response) => {
            this.rolesAndPermission = response;
            this.permission = this.rolesAndPermission.find(x => x.name == 'UPLOAD CONTENT').permission;
        });
        this.rolesAndPermission = this.roleAndPermissionService.getRolesAndPermission();
        if (this.rolesAndPermission.length > 0) {
            this.permission = this.rolesAndPermission.find(x => x.name == 'UPLOAD CONTENT').permission;
        }
    }

    getSemester() {
        this.subjectService.getSemesterByCourseId(this.uploadContentForm.value.course_id).subscribe((response: any) => {
            this.semesterList = response.data;
        })
    }

    getSubject() {
        this.subjectService.getSubjects(this.uploadContentForm.value.course_id, this.uploadContentForm.value.semester_id).subscribe((response: any) => {
            this.subjectList = response.data;
        })
    }

    checkType() {
        if (this.uploadContentForm.value.type == 'assignment') {
            this.isAssignment = true;
        } else {
            this.isAssignment = false;
        }
    }

    setFile(event) {
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

        this.file = event.target.files[0];
    }

    uploadContent() {
        if (!this.uploadContentForm.valid) {
            this.uploadContentForm.markAllAsTouched();
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
        formData.append("id", this.uploadContentForm.value.id);
        formData.append("title", this.uploadContentForm.value.title);
        formData.append("type", this.uploadContentForm.value.type);
        formData.append("course_id", this.uploadContentForm.value.course_id);
        formData.append("semester_id", this.uploadContentForm.value.semester_id);
        formData.append("subject_id", this.uploadContentForm.value.subject_id);
        formData.append("content_name", this.file['name']);
        formData.append("upload_date", this.uploadContentForm.value.upload_date);
        formData.append("description", this.uploadContentForm.value.description);
        formData.append("file", this.file);
        this.downloadCenterService.uploadContent(formData).subscribe((response) => {
            // @ts-ignore
            if (response.success == 1) {
                this.file = null;
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Content saved',
                    showConfirmButton: false,
                    timer: 1000
                });
                this.uploadContentForm.reset();
            }
        })
    }

    cancelUpdate() {
        this.uploadContentForm.reset();
    }

    editUpload(data) {
        this.uploadContentForm.patchValue(data);
        this.getSemester();
        this.getSubject();
        this.uploadContentForm.patchValue(data);
        this.isUpdatable = true;
    }

    updateContent() {
        const formData = new FormData();
        formData.append("id", this.uploadContentForm.value.id);
        if (this.file) {
            formData.append("file", this.file);
            formData.append("content_name", this.file['name']);
        }
        formData.append("title", this.uploadContentForm.value.title);
        formData.append("type", this.uploadContentForm.value.type);
        formData.append("course_id", this.uploadContentForm.value.course_id);
        formData.append("semester_id", this.uploadContentForm.value.semester_id);
        formData.append("subject_id", this.uploadContentForm.value.subject_id);
        formData.append("upload_date", this.uploadContentForm.value.upload_date);
        formData.append("description", this.uploadContentForm.value.description);
        this.downloadCenterService.updateContent(formData).subscribe((response) => {
            // @ts-ignore
            if (response.success == 1) {
                this.file = null;
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Content updated',
                    showConfirmButton: false,
                    timer: 1000
                });
                this.uploadContentForm.reset();
                this.isUpdatable = false;
            }
        })
    }

    deleteContent(data) {
        Swal.fire({
            title: 'Confirmation',
            text: 'Do you sure to delete content ?',
            icon: 'info',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete It!'
        }).then((result) => {
            if (result.isConfirmed) {
                this.downloadCenterService.deleteContent(data.id).subscribe((response) => {
                    // @ts-ignore
                    if (response.success == 1) {
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'Successfully removed',
                            showConfirmButton: false,
                            timer: 1000
                        });
                    }
                })
            }
        });
    }

}
