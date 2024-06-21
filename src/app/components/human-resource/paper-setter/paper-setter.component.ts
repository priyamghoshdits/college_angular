import {Component} from '@angular/core';
import {ExaminationService} from "../../../services/examination.service";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import {JsonPipe, NgForOf, NgIf} from "@angular/common";
import {NgxPaginationModule} from "ngx-pagination";
import Swal from "sweetalert2";
import {NgbNav, NgbNavItem, NgbNavLink, NgbNavLinkBase, NgbNavOutlet} from "@ng-bootstrap/ng-bootstrap";
import {RolesAndPermissionService} from "../../../services/roles-and-permission.service";
import {MemberService} from 'src/app/services/member.service';

@Component({
    selector: 'app-paper-setter',
    standalone: true,
    imports: [
        FormsModule,
        MatIconModule,
        NgForOf,
        NgxPaginationModule,
        ReactiveFormsModule,
        NgIf,
        NgbNav,
        NgbNavLink,
        NgbNavLinkBase,
        NgbNavItem,
        NgbNavOutlet,
        JsonPipe
    ],
    templateUrl: './paper-setter.component.html',
    styleUrl: './paper-setter.component.scss'
})
export class PaperSetterComponent {
    paperSettingForm: FormGroup;
    paperList: any[];
    searchPaperList: any[];
    subjectDetailsList: any[];
    selected_details = null;
    total_question: any[] = [1];
    totalMarks = 0;
    paperSetterArray: any[] = [];
    isUpdatable = false;
    counter = 0;
    active = 1;
    p: number;
    rolesAndPermission: any[] = [];
    permission: any[] = [];
    filesArray: File[] = [];

    memberList: any[];

    constructor(private memberService: MemberService, private examinationService: ExaminationService, private roleAndPermissionService: RolesAndPermissionService) {

        this.paperSettingForm = new FormGroup({
            id: new FormControl(null),
            from_date: new FormControl(null, [Validators.required]),
            to_date: new FormControl(null, [Validators.required]),
            staff_id: new FormControl(null),
        });

        this.paperSetterArray = [
            {
                'staff_id': null,
                'examination_name': null,
                'subject_name': null,
                'university_name': null,
                'referance_no': null,
                'ref_date': null,
                'paper_file': null,
            }
        ];

        // this.staffForm = new FormGroup({
        //   id: new FormControl(null),
        //   staff_id: new FormControl(null, [Validators.required]),
        // });

        this.memberService.getMemberListener().subscribe((response) => {
            this.memberList = response;
        });
        this.memberList = this.memberService.getMemberList();

        this.roleAndPermissionService.getRolesAndPermissionListener().subscribe((response) => {
            this.rolesAndPermission = response;
            this.permission = this.rolesAndPermission.find(x => x.name == 'SUBJECT QUESTION').permission;
        });
        this.rolesAndPermission = this.roleAndPermissionService.getRolesAndPermission();
        if (this.rolesAndPermission.length > 0) {
            this.permission = this.rolesAndPermission.find(x => x.name == 'SUBJECT QUESTION').permission;
        }
    }


    cancelUpdate() {
        this.isUpdatable = false;
        this.total_question = [1];
        this.totalMarks = 0;
        this.paperSetterArray = [
            {
                'examination_name': null,
                'subject_name': null,
                'university_name': null,
                'referance_no': null,
                'ref_date': null,
                'paper_file': null,
            }
        ];
        this.counter = 0;
    }

    fileUpload(event: any, index: number) {
        const file = event.target.files[0];
        if (file) {
            this.filesArray[index] = file; // Store file in the files array
        }
    }

    updateQuestionPaper() {
        let arr = [
            {
                'questions': this.paperSetterArray
            }
        ];
        this.examinationService.updateQuestions(arr[0]).subscribe((response: any) => {
            if (response.success == 1) {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Question paper updated',
                    showConfirmButton: false,
                    timer: 1000
                });
                this.cancelUpdate();
            }
        })
    }

    getPaperSetting(){
        this.memberService.searchPaperSetter(this.paperSettingForm.value).subscribe((response: any) => {
            if(response.success == 1){
                this.searchPaperList = response.data;
            }
        })
    }


    deleteQuestionPaper(data) {
        Swal.fire({
            title: 'Confirmation',
            text: 'Do you sure to delete ?',
            icon: 'info',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete It!'
        }).then((result) => {
            if (result.isConfirmed) {
                this.examinationService.deleteQuestions(data).subscribe((response: any) => {
                    if (response.success == 1) {
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'Successfully deleted',
                            showConfirmButton: false,
                            timer: 1000
                        });
                    }
                })
            }
        });
    }

    editQuestionPaper(data) {
        this.paperSetterArray = data.questions;
        this.total_question[data.questions.length - 1] = [];
        this.active = 1;
        this.totalMarks = this.paperSetterArray.reduce((accumulator, currentItem) => accumulator + parseInt(currentItem.marks), 0);
        let x = this.subjectDetailsList.find(x => x.id == data.subject_details_id);
        this.selected_details = x;
        this.isUpdatable = true;
        this.counter = data.questions.length - 1;
    }

    savePaperSetter() {
        let arr = {
            'paper_array': this.paperSetterArray
        };

        this.filesArray.forEach((file, index) => {
            if (file) {
                const formData = new FormData();
                formData.append('paper_file', file);

                // Send the file to the server
                this.memberService.saveUploadFile(formData).subscribe((response: any) => {
                    this.paperSetterArray[index].paper_file = response.file_name;
                });
            }
        });


        this.memberService.savePaperSetter(arr).subscribe((response) => {
            // @ts-ignore
            if (response.success == 1) {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Question Paper Saved',
                    showConfirmButton: false,
                    timer: 1000
                });
            }
        })
    }



    activeTab(data) {
        this.active = data;
    }

    addField() {
        this.counter = this.counter + 1;
        this.total_question[this.counter] = [];
        let arr = [
            {
                'staff_id': null,
                'examination_name': null,
                'subject_name': null,
                'university_name': null,
                'referance_no': null,
                'ref_date': null,
                'paper_file': null,
            }
        ];
        this.paperSetterArray.push(arr[0]);
    }

    updateStatus(id) {
        this.examinationService.updateSubjectStatus(id).subscribe((response) => {

        })
    }
}
