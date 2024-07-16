import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatIconModule } from "@angular/material/icon";
import { NgForOf, NgIf } from "@angular/common";
import { NgbNav, NgbNavItem, NgbNavLink, NgbNavLinkBase, NgbNavOutlet } from "@ng-bootstrap/ng-bootstrap";
import { NgxPaginationModule } from "ngx-pagination";
import { SubjectService } from "../../../services/subject.service";
import Swal from "sweetalert2";
import { HomeworkService } from "../../../services/homework.service";
import { environment } from "../../../../environments/environment";
import { RolesAndPermissionService } from "../../../services/roles-and-permission.service";

@Component({
  selector: 'app-add-home-work',
  standalone: true,
  imports: [
    FormsModule,
    MatIconModule,
    NgForOf,
    NgIf,
    NgbNav,
    NgbNavLink,
    NgbNavLinkBase,
    NgxPaginationModule,
    ReactiveFormsModule,
    NgbNavOutlet,
    NgbNavItem
  ],
  templateUrl: './add-home-work.component.html',
  styleUrl: './add-home-work.component.scss'
})
export class AddHomeWorkComponent {
  public FILE_URL = environment.FILE_URL;
  homeworkForm: FormGroup;
  public active = 1;
  courseList: any[];
  semesterList: any[];
  subjectList: any[];
  homeworkList: any[] = [];
  isUpdatable = false;
  file: File;
  p: number;
  rolesAndPermission: any[] = [];
  permission: any[] = [];
  constructor(private subjectService: SubjectService, public homeworkService: HomeworkService
    , private roleAndPermissionService: RolesAndPermissionService) {
    this.homeworkForm = new FormGroup({
      id: new FormControl(null),
      course_id: new FormControl(null, [Validators.required]),
      semester_id: new FormControl(null, [Validators.required]),
      subject_id: new FormControl(null, [Validators.required]),
      homework_date: new FormControl(null, [Validators.required]),
      submission_date: new FormControl(null, [Validators.required]),
      file: new FormControl(null, [Validators.required]),
    });

    this.homeworkService.getHomeworkListListener().subscribe((response) => {
      this.homeworkList = response;
    });
    this.homeworkList = this.homeworkService.getHomeworkList();

    this.subjectService.getCourseListener().subscribe((response) => {
      this.courseList = response;
    });
    this.courseList = this.subjectService.getCourses();

    this.roleAndPermissionService.getRolesAndPermissionListener().subscribe((response) => {
      this.rolesAndPermission = response;
      this.permission = this.rolesAndPermission.find(x => x.name == 'HOMEWORK').permission;
    });
    this.rolesAndPermission = this.roleAndPermissionService.getRolesAndPermission();
    if (this.rolesAndPermission.length > 0) {
      this.permission = this.rolesAndPermission.find(x => x.name == 'HOMEWORK').permission;
    }
  }

  getSemester() {
    this.subjectService.getSemesterByCourseId(this.homeworkForm.value.course_id).subscribe((response: any) => {
      this.semesterList = response.data;
    })
  }

  getSubject() {
    this.subjectService.getSubjects(this.homeworkForm.value.course_id, this.homeworkForm.value.semester_id)
      .subscribe((response: any) => {
        this.subjectList = response.data;
      });
  }

  setFile(event) {
    this.file = event.target.files[0];
  }

  saveHomework() {
    if (!this.file) {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Please select a Assignment PDF',
        showConfirmButton: false,
        timer: 1000
      });
      return;
    }

    const formData = new FormData();
    formData.append("id", this.homeworkForm.value.id);
    formData.append("course_id", this.homeworkForm.value.course_id);
    formData.append("semester_id", this.homeworkForm.value.semester_id);
    formData.append("subject_id", this.homeworkForm.value.subject_id);
    formData.append("homework_date", this.homeworkForm.value.homework_date);
    formData.append("submission_date", this.homeworkForm.value.submission_date);
    formData.append("file_name", this.file['name']);
    formData.append("file", this.file);
    this.homeworkService.saveHomework(formData).subscribe((response: any) => {
      if (response.success == 1) {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Homework Saved',
          showConfirmButton: false,
          timer: 1000
        });
        this.homeworkForm.reset();
      }
    })
  }

  editHomework(data) {
    Swal.fire({
      title: 'Please Wait !',
      html: 'Editing ...', // add html attribute if you want or remove
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      }
    });
    this.homeworkForm.patchValue(data);
    this.subjectService.getSemesterByCourseId(this.homeworkForm.value.course_id).subscribe((response: any) => {
      this.semesterList = response.data;
      this.subjectService.getSubjects(this.homeworkForm.value.course_id, this.homeworkForm.value.semester_id)
        .subscribe((response: any) => {
          this.subjectList = response.data;
          this.homeworkForm.patchValue(data);
          this.isUpdatable = true;
          Swal.close();
        });
    })
  }

  updateHomework() {
    const formData = new FormData();
    formData.append("id", this.homeworkForm.value.id);
    formData.append("course_id", this.homeworkForm.value.course_id);
    formData.append("semester_id", this.homeworkForm.value.semester_id);
    formData.append("subject_id", this.homeworkForm.value.subject_id);
    formData.append("homework_date", this.homeworkForm.value.homework_date);
    formData.append("submission_date", this.homeworkForm.value.submission_date);
    formData.append("file_name", this.file['name']);
    formData.append("file", this.file);
    this.homeworkService.updateHomework(formData).subscribe((response: any) => {
      if (response.success == 1) {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Homework Updated',
          showConfirmButton: false,
          timer: 1000
        });
        this.cancelUpdate();
      }
    })
  }

  deleteHomework(data) {
    Swal.fire({
      title: 'Confirmation',
      text: 'Do you sure to delete ?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete It!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.homeworkService.deleteHomework(data.id).subscribe((response: any) => {
          if (response.success == 1) {
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Homework Deleted',
              showConfirmButton: false,
              timer: 1000
            });
          }
        })
      }
    });
  }

  cancelUpdate() {
    this.homeworkForm.reset();
    this.isUpdatable = false;
  }


  activeTab(data) {
    this.active = data;
  }

}
