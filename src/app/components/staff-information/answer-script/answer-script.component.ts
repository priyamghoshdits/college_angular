import {Component} from '@angular/core';
import {MatIconModule} from "@angular/material/icon";
import {NgForOf, NgIf} from "@angular/common";
import {NgbNav, NgbNavItem, NgbNavLink, NgbNavLinkBase, NgbNavOutlet} from "@ng-bootstrap/ng-bootstrap";
import {NgxPaginationModule} from "ngx-pagination";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MemberService} from "../../../services/member.service";
import {ExaminationService} from "../../../services/examination.service";
import {RolesAndPermissionService} from "../../../services/roles-and-permission.service";
import Swal from "sweetalert2";
import {AnswerScriptEvaluatorService} from "../../../services/answer-script-evaluator.service";
import { NgSelectModule } from '@ng-select/ng-select';

@Component({
    selector: 'app-answer-script',
    standalone: true,
    imports: [
        MatIconModule,
        NgForOf,
        NgIf,
        NgbNav,
        NgbNavLink,
        NgbNavLinkBase,
        NgxPaginationModule,
        ReactiveFormsModule,
        FormsModule,
        NgbNavItem,
        NgbNavOutlet,
        NgSelectModule
    ],
    templateUrl: './answer-script.component.html',
    styleUrl: './answer-script.component.scss'
})
export class AnswerScriptComponent {
    answerScriptEvaluatorForm: FormGroup;
    searchAnsScriptEvaluatorList: any[];
    answerScriptField: any[] = [1];
    answerScriptEvaluatorArray: any[] = [];
    isUpdatable = false;
    counter = 0;
    active = 1;
    p: number;
    rolesAndPermission: any[] = [];
    permission: any[] = [];
    filesArray: File[] = [];

    memberList: any[];

    constructor(private memberService: MemberService, private answerScriptService: AnswerScriptEvaluatorService, private roleAndPermissionService: RolesAndPermissionService) {

        this.answerScriptEvaluatorForm = new FormGroup({
            id: new FormControl(null),
            from_date: new FormControl(null, [Validators.required]),
            to_date: new FormControl(null, [Validators.required]),
            staff_id: new FormControl(null),
        });

        this.answerScriptEvaluatorArray = [
            {
                'id': null,
                'staff_id': null,
                'examination_name': null,
                'subject_name': null,
                'university_name': null,
                'referance_no': null,
                'ref_date': null,
                'paper_file': null,
            }
        ];

        this.memberService.getMemberListener().subscribe((response) => {
            this.memberList = response;
        });
        this.memberList = this.memberService.getMemberList();

        this.roleAndPermissionService.getRolesAndPermissionListener().subscribe((response) => {
            this.rolesAndPermission = response;
            this.permission = this.rolesAndPermission.find(x => x.name == 'ANSWER SCRIPT EVALUATOR').permission;
        });
        this.rolesAndPermission = this.roleAndPermissionService.getRolesAndPermission();
        if (this.rolesAndPermission.length > 0) {
            this.permission = this.rolesAndPermission.find(x => x.name == 'ANSWER SCRIPT EVALUATOR').permission;
        }
    }

    updatePaperSetter() {
        const formData = new FormData();
        formData.append('id', this.answerScriptEvaluatorArray[0].id);
        formData.append('staff_id', this.answerScriptEvaluatorArray[0].staff_id);
        formData.append('examination_name', this.answerScriptEvaluatorArray[0].examination_name);
        formData.append('subject_name', this.answerScriptEvaluatorArray[0].subject_name);
        formData.append('university_name', this.answerScriptEvaluatorArray[0].university_name);
        formData.append('referance_no', this.answerScriptEvaluatorArray[0].referance_no);
        formData.append('ref_date', this.answerScriptEvaluatorArray[0].ref_date);
        formData.append('file', this.filesArray[0]);

        this.answerScriptService.updateAnswerScriptEvaluator(formData).subscribe((response: any) => {
            if (response.success == 1) {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Answer Script Evaluator Updated',
                    showConfirmButton: false,
                    timer: 1000
                });
                this.answerScriptField = [1];
                this.answerScriptEvaluatorForm.reset();
                this.cancelUpdate();
                this.searchAnsScriptEvaluatorList = [];
            }
        })
    }

    editPaperSetter(data) {
        this.answerScriptEvaluatorArray[0].id = data.id;
        this.answerScriptEvaluatorArray[0].staff_id = data.staff_id;
        this.answerScriptEvaluatorArray[0].examination_name = data.examination_name;
        this.answerScriptEvaluatorArray[0].subject_name = data.subject_name;
        this.answerScriptEvaluatorArray[0].university_name = data.university_name;
        this.answerScriptEvaluatorArray[0].referance_no = data.referance_no;
        this.answerScriptEvaluatorArray[0].ref_date = data.ref_date;
        this.active = 1;
        this.isUpdatable = true;
    }

    deletePaperSetter(data) {
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
                this.answerScriptService.deleteAnswerScriptEvaluator(data.id).subscribe((response: any) => {
                    if (response.success == 1) {
                        this.searchAnsScriptEvaluatorList = response.data;
                    }
                })
            }
        });

    }


    cancelUpdate() {
        this.isUpdatable = false;
        this.answerScriptEvaluatorArray = [
            {
                'id': null,
                'staff_id': null,
                'examination_name': null,
                'subject_name': null,
                'university_name': null,
                'referance_no': null,
                'ref_date': null,
                'paper_file': null,
            }
        ];
        // this.counter = 0;
    }

    fileUpload(event: any, index: number) {
        const file = event.target.files[0];
        if (file) {
            this.filesArray[index] = file; // Store file in the files array
            this.answerScriptEvaluatorArray[index].paper_file = file.name;
        }
    }


    getPaperSetting() {
        this.answerScriptService.searchAnswerScriptEvaluator(this.answerScriptEvaluatorForm.value).subscribe((response: any) => {
            if (response.success == 1) {
                this.searchAnsScriptEvaluatorList = response.data;
                console.log(this.searchAnsScriptEvaluatorList);
                
            }
        })
    }

    savePaperSetter() {
        let arr = {
            'paper_array': this.answerScriptEvaluatorArray
        };

        this.filesArray.forEach((file, index) => {
            if (file) {
                const formData = new FormData();
                formData.append('paper_file', file);

                // Send the file to the server
                this.answerScriptService.saveUploadFile(formData).subscribe((response: any) => {
                    this.answerScriptEvaluatorArray[index].paper_file = response.file_name;
                });
            }
        });


        this.answerScriptService.saveAnswerScriptEvaluator(arr).subscribe((response) => {
            // @ts-ignore
            if (response.success == 1) {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Answer Script Evaluator Saved',
                    showConfirmButton: false,
                    timer: 1000
                });

                this.answerScriptField = [1];
                this.answerScriptEvaluatorArray = [
                    {
                        'id': null,
                        'staff_id': null,
                        'examination_name': null,
                        'subject_name': null,
                        'university_name': null,
                        'referance_no': null,
                        'ref_date': null,
                        'paper_file': null,
                    }
                ];
            }
        })
    }


    activeTab(data) {
        this.active = data;
    }

    addField() {
        this.counter = this.counter + 1;
        this.answerScriptField[this.counter] = [];
        let arr = [
            {
                'id': null,
                'staff_id': null,
                'examination_name': null,
                'subject_name': null,
                'university_name': null,
                'referance_no': null,
                'ref_date': null,
                'paper_file': null,
            }
        ];
        this.answerScriptEvaluatorArray.push(arr[0]);
    }
}
