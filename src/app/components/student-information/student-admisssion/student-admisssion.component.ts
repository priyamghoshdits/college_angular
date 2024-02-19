import { Component } from '@angular/core';
import {MatIcon, MatIconModule} from "@angular/material/icon";
import {NgForOf, NgIf} from "@angular/common";
import {NgbNav, NgbNavItem, NgbNavLink, NgbNavLinkBase, NgbNavOutlet} from "@ng-bootstrap/ng-bootstrap";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MemberService} from "../../../services/member.service";
import {SubjectService} from "../../../services/subject.service";
import {AvatarsComponent} from "../../ui-elements/avatars/avatars.component";
import {SessionService} from "../../../services/session.service";
import {StudentService} from "../../../services/student.service";
import Swal from "sweetalert2";
import {ImageService} from "../../../services/image.service";
import {AgentService} from "../../../services/agent.service";
import {CustomFilterPipe} from "custom-filter.pipe";
import {CommonService} from "../../../services/common.service";
import {RolesAndPermissionService} from "../../../services/roles-and-permission.service";

@Component({
  selector: 'app-student-admisssion',
  standalone: true,
    imports: [
        MatIconModule,
        NgForOf,
        NgbNav,
        NgbNavLink,
        NgbNavLinkBase,
        ReactiveFormsModule,
        NgbNavOutlet,
        NgbNavItem,
        FormsModule,
        CustomFilterPipe,
        NgIf
    ],
  templateUrl: './student-admisssion.component.html',
  styleUrl: './student-admisssion.component.scss'
})
export class StudentAdmisssionComponent {
    studentCreationForm: FormGroup;
    public active = 1;
    categoryList: any[];
    courseList: any[];
    semesterList: any[];
    sessionList: any[];
    isUpdateable = false;
    studentList: any[];
    nonAdmittedStudents: any[];
    agentList: any[];
    searchItem: string;
    rolesAndPermission: any[] = [];
    permission: any[] = [];

    constructor(private memberService: MemberService, private subjectService: SubjectService
                , private sessionService: SessionService, private studentService: StudentService
                , private imageService: ImageService, private agentService: AgentService
                , private commonService: CommonService, private roleAndPermissionService: RolesAndPermissionService) {

        this.roleAndPermissionService.getRolesAndPermissionListener().subscribe((response) => {
            this.rolesAndPermission = response;
            this.permission = this.rolesAndPermission.find(x => x.name == 'STUDENT ADMISSION').permission;
        });
        this.rolesAndPermission = this.roleAndPermissionService.getRolesAndPermission();
        if(this.rolesAndPermission.length > 0){
            this.permission = this.rolesAndPermission.find(x => x.name == 'STUDENT ADMISSION').permission;
        }

        this.studentCreationForm = new FormGroup({
            id: new FormControl(null),
            identification_no: new FormControl(null),
            first_name: new FormControl(null, [Validators.required]),
            middle_name: new FormControl(null),
            last_name: new FormControl(null, [Validators.required]),
            gender: new FormControl(null, [Validators.required]),
            dob: new FormControl(null, [Validators.required]),
            admission_date: new FormControl(null, [Validators.required]),
            image: new FormControl(null),
            mobile_no: new FormControl(null, [Validators.required]),
            emergency_phone_number: new FormControl(null, [Validators.required]),
            material_status: new FormControl(null),
            admission_status: new FormControl(null),
            current_address: new FormControl(null, [Validators.required]),
            permanent_address: new FormControl(null, [Validators.required]),
            religion: new FormControl(null),
            blood_group: new FormControl(null),
            category_id: new FormControl(null, [Validators.required]),
            email: new FormControl(null, [Validators.required, Validators.email]),
            course_id: new FormControl(null, [Validators.required]),
            semester_id: new FormControl(null, [Validators.required]),
            agent_id: new FormControl(null, [Validators.required]),
            father_name: new FormControl(null),
            father_phone: new FormControl(null),
            father_occupation: new FormControl(null),
            mother_name: new FormControl(null),
            mother_phone: new FormControl(null),
            mother_occupation: new FormControl(null),
            guardian_name: new FormControl(null),
            guardian_phone: new FormControl(null),
            guardian_email: new FormControl(null),
            guardian_relation: new FormControl(null),
            guardian_occupation: new FormControl(null),
            guardian_address: new FormControl(null),
            session_id: new FormControl(null, [Validators.required]),
        });

        this.memberService.getCategoryListener().subscribe((response) => {
            this.categoryList = response;
        });
        this.categoryList = this.memberService.getCategoryList();

        this.subjectService.getCourseListener().subscribe((response) => {
            this.courseList = response;
        });
        this.courseList = this.subjectService.getCourses();

        this.agentService.getAgentListListener().subscribe((response) => {
            this.agentList = response;
        });
        this.agentList = this.agentService.getAgentList();

        this.sessionService.getSessionListener().subscribe((response) => {
            this.sessionList = response;
        });
        this.sessionList = this.sessionService.getSessionList();

        this.studentService.getStudentListener().subscribe((response) => {
            this.studentList = response;
            this.nonAdmittedStudents = this.studentList.filter(x => x.admission_status == 0);
        });
        this.studentList = this.studentService.getStudentLists();
        if(this.studentList.length > 0){
            this.nonAdmittedStudents = this.studentList.filter(x => x.admission_status == 0);
        }

    }

    getSemester(){
        this.subjectService.getSemesterByCourseId(this.studentCreationForm.value.course_id).subscribe((response) => {
            // @ts-ignore
            this.semesterList = response.data;
        })
    }

    checkUniqueId(){
        this.commonService.checkId(this.studentCreationForm.value.identification_no).subscribe((response: any) => {
            if(response.success == 0){
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: 'Duplicate ID',
                    showConfirmButton: false,
                    timer: 1000
                });
                this.studentCreationForm.controls['identification_no'].reset();
            }
        })
    }


    onSelect1(event) {
        let file;
        file = event.target.files[0];
        const formData = new FormData();
        formData.append("image", file);
        // @ts-ignore
        formData.append("p_image", this.studentCreationForm.value.id? this.studentCreationForm.value.id:null);
        this.imageService.uploadProfilePic(formData).subscribe();
        this.studentCreationForm.patchValue({image: file['name']});
    }

    activeTab(data){
        this.active = data;
    }

    editStudent(data){
        this.studentCreationForm.reset();
        this.subjectService.getSemesterByCourseId(data.course_id).subscribe((response) => {
            // @ts-ignore
            this.semesterList = response.data;
            this.studentCreationForm.patchValue(data);
            this.isUpdateable = true;
            this.active = 1;
        })
    }

    saveStudent(){
        if(!this.studentCreationForm.valid){
            this.studentCreationForm.markAllAsTouched();
            return;
        }
        this.studentCreationForm.patchValue({admission_status: 1});
        Swal.fire({
            title: 'Please Wait !',
            html: 'Saving ...', // add html attribute if you want or remove
            allowOutsideClick: false,
            didOpen: () => {
                Swal.showLoading();
            }
        });
        this.studentService.saveStudent(this.studentCreationForm.value).subscribe((response) => {
            // @ts-ignore
            if(response.success == 1){
                Swal.close();
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Student Saved',
                    showConfirmButton: false,
                    timer: 1000
                });
                this.studentCreationForm.reset();

            }
        })
    }

    updateStudent(){
        this.studentService.updateStudent(this.studentCreationForm.value).subscribe((response) => {
            // @ts-ignore
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
        this.studentCreationForm.reset();
        this.isUpdateable = false;
    }

    deleteStudent(data){
        Swal.fire({
            title: 'Confirmation',
            text: 'Do you sure to delete ?',
            icon: 'info',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete It!'
        }).then((result) => {
            if (result.isConfirmed){
                this.studentService.deleteStudents(data.id).subscribe((response) => {
                    // @ts-ignore
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

}
