import {Component} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import {NgForOf, NgIf} from "@angular/common";
import {NgbNav, NgbNavItem, NgbNavLink, NgbNavLinkBase, NgbNavOutlet} from "@ng-bootstrap/ng-bootstrap";
import {NgxPaginationModule} from "ngx-pagination";
import {MemberService} from "../../../services/member.service";
import {RolesAndPermissionService} from "../../../services/roles-and-permission.service";
import {JournalPublicationServiceService} from "../../../services/journal-publication-service.service";
import Swal from "sweetalert2";
import {SubjectService} from "../../../services/subject.service";
import {StudentService} from "../../../services/student.service";
import {ConsultancyService} from "../../../services/consultancy.service";

@Component({
    selector: 'app-consultancy',
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
    NgbNavItem,
    NgbNavOutlet
  ],
    templateUrl: './consultancy.component.html',
    styleUrl: './consultancy.component.scss'
})
export class ConsultancyComponent {
    consultancyForm: FormGroup;
    consultationList: any[];
    total_question: any[] = [1];
    consultationArray: any[] = [];
    isUpdatable = false;
    counter = 0;
    active = 1;
    p: number;
    rolesAndPermission: any[] = [];
    permission: any[] = [];
    courseList: any[];
    memberList: any[];
    semesterList: any[];
    studentList: any[];
    filteredStudentList: any[];

    constructor(private memberService: MemberService, private studentService: StudentService, private subjectService: SubjectService
        , private roleAndPermissionService: RolesAndPermissionService, private consultancyService: ConsultancyService) {

        this.consultancyForm = new FormGroup({
            id: new FormControl(null),
            staff_id: new FormControl(null),
        });

        this.consultationArray = [
            {
                'id': null,
                'staff_id': null,
                'project_consultancy': null,
                'sponsored_by': null,
                'consultant': null,
                'amount': null,
                'duration': null,
                'status': null,
            }
        ];

        this.memberService.getMemberListener().subscribe((response) => {
            this.memberList = response;
        });
        this.memberList = this.memberService.getMemberList();

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
            this.permission = this.rolesAndPermission.find(x => x.name == 'SUBJECT QUESTION').permission;
        });
        this.rolesAndPermission = this.roleAndPermissionService.getRolesAndPermission();
        if (this.rolesAndPermission.length > 0) {
            this.permission = this.rolesAndPermission.find(x => x.name == 'SUBJECT QUESTION').permission;
        }
    }

    getStudent(indexOfElement){
        // @ts-ignore
        // this.educationQualificationForm.patchValue({session_id: session_id});
        this.consultationArray[indexOfElement].session_id = JSON.parse(localStorage.getItem('session_id'));
        if (this.consultationArray[indexOfElement].course_id) {
            this.filteredStudentList = this.studentList.filter(x => x.course_id == this.consultationArray[indexOfElement].course_id);
        }
        if (this.consultationArray[indexOfElement].semester_id != null) {
            this.filteredStudentList = this.filteredStudentList.filter(x => x.current_semester_id == this.consultationArray[indexOfElement].semester_id);
        }
        if (this.consultationArray[indexOfElement].session_id != null) {
            this.filteredStudentList = this.filteredStudentList.filter(x => x.session_id == this.consultationArray[indexOfElement].session_id);
        }
    }

    getSemester(indexOfElement){
        this.subjectService.getSemesterByCourseId(this.consultationArray[indexOfElement].course_id).subscribe((response: any) => {
            this.semesterList = response.data;
        })
    }

    updateConsultancy() {
        let arr = {
            'consultationArray': this.consultationArray
        };
        this.consultancyService.updateConsultancy(arr).subscribe((response: any) => {
            if (response.success == 1) {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Paper Setter Updated',
                    showConfirmButton: false,
                    timer: 1000
                });
                this.consultancyForm.reset();
                this.cancelUpdate();
            }
        })
    }

    editConsultancy(data) {
        this.consultationArray[0].id = data.id;
        this.consultationArray[0].staff_id = data.staff_id;
        this.consultationArray[0].project_consultancy = data.project_consultancy;
        this.consultationArray[0].sponsored_by = data.sponsored_by;
        this.consultationArray[0].consultant = data.consultant;
        this.consultationArray[0].amount = data.amount;
        this.consultationArray[0].duration = data.duration;
        this.consultationArray[0].status = data.status;
        this.active = 1;
        this.isUpdatable = true;

        // 'id': null,
        //     'staff_id': null,
        //     'project_consultancy': null,
        //     'sponsored_by': null,
        //     'consultant': null,
        //     'amount': null,
        //     'duration': null,
        //     'status': null,
    }


    deleteJournalPublication(data) {
        Swal.fire({
            title: 'Confirmation',
            text: 'Do you sure to delete course ?',
            icon: 'info',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete It!'
        }).then((result) => {
            if (result.isConfirmed) {
                // this.journalPublicationService.deleteJournalPublication(data.id).subscribe((response: any) => {
                //     if (response.success == 1) {
                //         this.searchPaperList = response.data;
                //     }
                // })
            }
        });

    }


    cancelUpdate() {
        this.isUpdatable = false;
        this.consultationArray = [
            {
                'id': null,
                'staff_id': null,
                'project_consultancy': null,
                'sponsored_by': null,
                'consultant': null,
                'amount': null,
                'duration': null,
                'status': null,
            }
        ];
        // this.counter = 0;
    }

    getConsultancy() {
        this.consultancyService.searchConsultancy(this.consultancyForm.value.staff_id).subscribe((response: any) => {
            if (response.success == 1) {
                this.consultationList = response.data;
            }
        })
    }

    saveConsultancy() {
        let arr = {
            'consultationArray': this.consultationArray
        };

        this.consultancyService.saveConsultation(arr).subscribe((response: any) => {
            if (response.success == 1) {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Question Paper Saved',
                    showConfirmButton: false,
                    timer: 1000
                });
                this.cancelUpdate();
            }
        })
    }


    activeTab(data) {
        this.active = data;
    }

    addField() {
        let arr = [
            {
                'id': null,
                'staff_id': null,
                'project_consultancy': null,
                'sponsored_by': null,
                'consultant': null,
                'amount': null,
                'duration': null,
                'status': null,
            }
        ];
        this.consultationArray.push(arr[0]);
    }
}
