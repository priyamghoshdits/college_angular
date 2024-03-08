import { Component } from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgForOf, NgIf} from "@angular/common";
import {SubjectService} from "../../../services/subject.service";
import {VirtualClassMeetingService} from "../../../services/virtual-class-meeting.service";
import Swal from "sweetalert2";
import {MatIconModule} from "@angular/material/icon";
import {NgxPaginationModule} from "ngx-pagination";
import {NgbNav, NgbNavItem, NgbNavLink, NgbNavLinkBase, NgbNavOutlet} from "@ng-bootstrap/ng-bootstrap";
import {RolesAndPermissionService} from "../../../services/roles-and-permission.service";

@Component({
  selector: 'app-create-virtual-class',
  standalone: true,
    imports: [
        FormsModule,
        NgForOf,
        NgIf,
        ReactiveFormsModule,
        MatIconModule,
        NgxPaginationModule,
        NgbNav,
        NgbNavLink,
        NgbNavLinkBase,
        NgbNavOutlet,
        NgbNavItem
    ],
  templateUrl: './create-virtual-class.component.html',
  styleUrl: './create-virtual-class.component.scss'
})
export class CreateVirtualClassComponent {
    virtualClassForm:FormGroup;
    public active = 1;
    isUpdatable = false;
    courseList: any[];
    virtualMeetingList: any[];
    semesterList: any[];
    subjectList: any[];
    teacherList: any[];
    p: number;
    rolesAndPermission: any[] = [];
    permission: any[] = [];
    constructor(private subjectService: SubjectService, private virtualClassMeetingService: VirtualClassMeetingService
                ,private roleAndPermissionService: RolesAndPermissionService) {
        this.virtualClassForm = new FormGroup({
            id: new FormControl(null),
            course_id: new FormControl(null, [Validators.required]),
            semester_id: new FormControl(null, [Validators.required]),
            subject_id: new FormControl(null, [Validators.required]),
            teacher_id: new FormControl(null, [Validators.required]),
            topic: new FormControl(null, [Validators.required]),
            platform: new FormControl(null, [Validators.required]),
            link: new FormControl(null, [Validators.required]),
            date_of_class: new FormControl(null, [Validators.required]),
            time_of_class: new FormControl(null, [Validators.required]),
            class_start_before: new FormControl(null, [Validators.required]),
        });
        this.subjectService.getCourseListener().subscribe((response) => {
            this.courseList = response;
        });
        this.courseList = this.subjectService.getCourses();

        this.virtualClassMeetingService.getVirtualClassListListener().subscribe((response) => {
            this.virtualMeetingList = response;
        });
        this.virtualMeetingList = this.virtualClassMeetingService.getVirtualClassLink();

        this.roleAndPermissionService.getRolesAndPermissionListener().subscribe((response) => {
            this.rolesAndPermission = response;
            this.permission = this.rolesAndPermission.find(x => x.name == 'VIRTUAL CLASS').permission;
            if(this.permission[0].permission == 0 && this.permission[1].permission == 0 && this.permission[2].permission == 0){
                this.active = 2;
            }
        });
        this.rolesAndPermission = this.roleAndPermissionService.getRolesAndPermission();
        if(this.rolesAndPermission.length > 0){
            this.permission = this.rolesAndPermission.find(x => x.name == 'VIRTUAL CLASS').permission;
            if(this.permission[0].permission == 0 && this.permission[1].permission == 0 && this.permission[2].permission == 0){
                this.active = 2;
            }
        }
    }

    getSemester(){
        this.subjectService.getSemesterByCourseId(this.virtualClassForm.value.course_id).subscribe((response: any) => {
            this.semesterList = response.data;
        })
    }

    getSubject(){
        this.subjectService.getSubjects(this.virtualClassForm.value.course_id, this.virtualClassForm.value.semester_id)
            .subscribe((response: any) => {
                this.subjectList = response.data;
            });
        this.subjectService.getTeacherList(this.virtualClassForm.value.course_id, this.virtualClassForm.value.semester_id)
            .subscribe((response: any) => {
                this.teacherList = response.data;
            });
    }

    saveVirtualClass(){
        if(!this.virtualClassForm.valid){
            this.virtualClassForm.markAllAsTouched();
            return;
        }
        this.virtualClassMeetingService.saveVirtualClass(this.virtualClassForm.value).subscribe((response: any) => {
            if(response.success == 1){
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Virtual meeting created',
                    showConfirmButton: false,
                    timer: 1000
                });
                this.virtualClassForm.reset();
            }
        })
    }

    editVirtualClassEdit(data){
        Swal.fire({
            title: 'Please Wait !',
            html: 'Editing ...', // add html attribute if you want or remove
            allowOutsideClick: false,
            didOpen: () => {
                Swal.showLoading();
            }
        });
        this.virtualClassForm.patchValue(data);
        this.subjectService.getSemesterByCourseId(this.virtualClassForm.value.course_id).subscribe((response: any) => {
            this.semesterList = response.data;
            this.subjectService.getSubjects(this.virtualClassForm.value.course_id, this.virtualClassForm.value.semester_id)
                .subscribe((response: any) => {
                    this.subjectList = response.data;
                    this.subjectService.getTeacherList(this.virtualClassForm.value.course_id, this.virtualClassForm.value.semester_id)
                        .subscribe((response: any) => {
                            this.teacherList = response.data;
                            this.virtualClassForm.patchValue(data);
                            this.isUpdatable = true;
                            Swal.close();
                        });
                });
        })
    }

    activeTab(data){
        this.active = data;
    }

    updateVirtualClass(){
        if(!this.virtualClassForm.valid){
            this.virtualClassForm.markAllAsTouched();
            return;
        }
        this.virtualClassMeetingService.updateVirtualClass(this.virtualClassForm.value).subscribe((response: any) => {
            if(response.success == 1){
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Virtual meeting updated',
                    showConfirmButton: false,
                    timer: 1000
                });
                this.cancelUpdate();
            }
        })
    }

    cancelUpdate(){
        this.virtualClassForm.reset();
        this.isUpdatable = false;
    }

    deleteVirtualClassEdit(data){
        Swal.fire({
            title: 'Confirmation',
            text: 'Do you sure to delete ?',
            icon: 'info',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete It!'
        }).then((result) => {
           if(result.isConfirmed){
               this.virtualClassMeetingService.deleteVirtualClass(data.id).subscribe((response: any) => {
                   if(response.success == 1){
                       Swal.fire({
                           position: 'center',
                           icon: 'success',
                           title: 'Virtual meeting deleted',
                           showConfirmButton: false,
                           timer: 1000
                       });
                   }
               })
           }
        });
    }
}
