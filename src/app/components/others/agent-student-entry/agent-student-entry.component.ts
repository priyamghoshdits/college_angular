import { Component } from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import {NgForOf, NgIf} from "@angular/common";
import {NgxPaginationModule} from "ngx-pagination";
import {MemberService} from "../../../services/member.service";
import {SubjectService} from "../../../services/subject.service";
import Swal from "sweetalert2";
import {StudentService} from "../../../services/student.service";
import {SessionService} from "../../../services/session.service";
import {NgbNav, NgbNavItem, NgbNavLink, NgbNavLinkBase, NgbNavOutlet} from "@ng-bootstrap/ng-bootstrap";
import {AgentService} from "../../../services/agent.service";
import {RolesAndPermissionService} from "../../../services/roles-and-permission.service";

@Component({
  selector: 'app-agent-student-entry',
  standalone: true,
    imports: [
        FormsModule,
        MatIconModule,
        NgForOf,
        NgIf,
        NgxPaginationModule,
        ReactiveFormsModule,
        NgbNavItem,
        NgbNavOutlet,
        NgbNav,
        NgbNavLink,
        NgbNavLinkBase
    ],
  templateUrl: './agent-student-entry.component.html',
  styleUrl: './agent-student-entry.component.scss'
})
export class AgentStudentEntryComponent {
    studentForm: FormGroup;
    agentForm: FormGroup;
    categoryList: any[];
    courseList: any[];
    semesterList: any[];
    sessionList: any[];
    isUpdatable = false;
    active = 1;
    agentList: any[];
    studentList: any[];
    isSuperAdmin = false;
    rolesAndPermission: any[] = [];
    permission: any[] = [];
    constructor(private memberService: MemberService, private subjectService: SubjectService
                , private studentService: StudentService, private sessionService: SessionService
                , private agentService: AgentService, private roleAndPermissionService: RolesAndPermissionService) {
        this.agentForm = new FormGroup({
            id: new FormControl(null),
        });
        this.studentForm = new FormGroup({
            id: new FormControl(null),
            first_name: new FormControl(null, [Validators.required]),
            middle_name: new FormControl(null),
            last_name: new FormControl(null, [Validators.required]),
            mobile_no: new FormControl(null, [Validators.required]),
            admission_status: new FormControl(null),
            current_address: new FormControl(null, [Validators.required]),
            permanent_address: new FormControl(null, [Validators.required]),
            gender: new FormControl(null, [Validators.required]),
            category_id: new FormControl(null, [Validators.required]),
            email: new FormControl(null, [Validators.required, Validators.email]),
            course_id: new FormControl(null, [Validators.required]),
            semester_id: new FormControl(null, [Validators.required]),
            session_id: new FormControl(null, [Validators.required]),
            agent_id: new FormControl(null),
        });

        let user = JSON.parse(localStorage.getItem('user') || '{}');

        if(user.user_type_id == 1){
            this.isSuperAdmin = true;
            this.agentService.getAgentListListener().subscribe((response) => {
                this.agentList = response;
            })
            this.agentList = this.agentService.getAgentList();
        }else{
            this.agentForm.patchValue(user);
            this.isSuperAdmin = false;
            this.getStudentListByAgent();
        }

        this.roleAndPermissionService.getRolesAndPermissionListener().subscribe((response) => {
            this.rolesAndPermission = response;
            this.permission = this.rolesAndPermission.find(x => x.name == 'AGENT STUDENT ENTRY').permission;
        });
        this.rolesAndPermission = this.roleAndPermissionService.getRolesAndPermission();
        if(this.rolesAndPermission.length > 0){
            this.permission = this.rolesAndPermission.find(x => x.name == 'AGENT STUDENT ENTRY').permission;
        }

        this.memberService.getCategoryListener().subscribe((response) => {
            this.categoryList = response;
        });
        this.categoryList = this.memberService.getCategoryList();

        this.subjectService.getCourseListener().subscribe((response) => {
            this.courseList = response;
        });
        this.courseList = this.subjectService.getCourses();

        this.sessionService.getSessionListener().subscribe((response) => {
            this.sessionList = response;
        });
        this.sessionList = this.sessionService.getSessionList();
    }

    getSemester(){
        this.subjectService.getSemesterByCourseId(this.studentForm.value.course_id).subscribe((response) => {
            // @ts-ignore
            this.semesterList = response.data;
        })
    }

    activeTab(data){
        this.active = data;
    }

    getStudentListByAgent(){
        this.agentService.getStudentByAgentId(this.agentForm.value.id).subscribe((response) => {
            // @ts-ignore
            if(response.success == 1){
                // @ts-ignore
                this.studentList = response.data;
            }
        });
    }


    saveStudent(){
        this.studentForm.patchValue({admission_status: 0});
        if(!this.studentForm.valid){
            this.studentForm.markAllAsTouched();
            return;
        }
        let user = JSON.parse(localStorage.getItem('user') || '{}');
        this.studentForm.patchValue({admission_status: 0, agent_id:user.id});
        this.studentForm.markAllAsTouched();
            Swal.fire({
                title: 'Please Wait !',
                html: 'Saving ...', // add html attribute if you want or remove
                allowOutsideClick: false,
                didOpen: () => {
                    Swal.showLoading();
                }
            });
            this.studentService.saveStudent(this.studentForm.value).subscribe((response: any) => {
                if(response.success == 1){
                    Swal.close();
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Student Saved',
                        showConfirmButton: false,
                        timer: 1000
                    });
                    this.studentForm.reset();
                }
            })
    }

    editStudent(data){
        this.studentForm.patchValue(data);
        this.getSemester();
        this.studentForm.patchValue(data);
        this.isUpdatable = true;
        this.active = 1;
    }

    deleteStudent(data){
        Swal.fire({
            title: 'Confirmation',
            text: 'Do you sure to delete student ?',
            icon: 'info',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete It!'
        }).then((result) => {
            if(result.isConfirmed){
                this.studentService.deleteStudents(data.id).subscribe((response: any) => {
                    if(response.success == 1){
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'Student Deleted',
                            showConfirmButton: false,
                            timer: 1000
                        });
                    }
                })
            }
        });
    }

    updateStudent(){
        this.studentService.updateStudent(this.studentForm.value).subscribe((response: any) => {
            if(response.success == 1){
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Student Updated',
                    showConfirmButton: false,
                    timer: 1000
                });
                this.cancelUpdate();
            }
        })
    }

    cancelUpdate(){
        this.isUpdatable = false;
        this.studentForm.reset();
    }
}
