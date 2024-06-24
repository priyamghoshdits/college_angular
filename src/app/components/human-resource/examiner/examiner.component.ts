import {Component} from '@angular/core';
import {MatIconModule} from "@angular/material/icon";
import {NgForOf, NgIf} from "@angular/common";
import {NgbNav, NgbNavItem, NgbNavLink, NgbNavLinkBase, NgbNavOutlet} from "@ng-bootstrap/ng-bootstrap";
import {NgxPaginationModule} from "ngx-pagination";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MemberService} from "../../../services/member.service";
import {RolesAndPermissionService} from "../../../services/roles-and-permission.service";
import Swal from "sweetalert2";
import {ExaminerService} from "../../../services/examiner.service";

@Component({
    selector: 'app-examiner',
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
        NgbNavOutlet
    ],
    templateUrl: './examiner.component.html',
    styleUrl: './examiner.component.scss'
})
export class ExaminerComponent {
    paperSettingForm: FormGroup;
    searchPaperList: any[];
    examinerField: any[] = [1];
    examinerArray: any[] = [];
    isUpdatable = false;
    counter = 0;
    active = 1;
    p: number;
    rolesAndPermission: any[] = [];
    permission: any[] = [];
    filesArray: File[] = [];

    memberList: any[];

    constructor(private memberService: MemberService
        , private roleAndPermissionService: RolesAndPermissionService
        , private examinerService: ExaminerService) {

        this.paperSettingForm = new FormGroup({
            id: new FormControl(null),
            from_date: new FormControl(null, [Validators.required]),
            to_date: new FormControl(null, [Validators.required]),
            staff_id: new FormControl(null),
        });

        this.examinerArray = [
            {
                'id': null,
                'staff_id': null,
                'examination_name': null,
                'type_of_examiner': null,
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
            this.permission = this.rolesAndPermission.find(x => x.name == 'SUBJECT QUESTION').permission;
        });
        this.rolesAndPermission = this.roleAndPermissionService.getRolesAndPermission();
        if (this.rolesAndPermission.length > 0) {
            this.permission = this.rolesAndPermission.find(x => x.name == 'SUBJECT QUESTION').permission;
        }
    }

    updatePaperSetter() {
        const formData = new FormData();
        formData.append('id', this.examinerArray[0].id);
        formData.append('staff_id', this.examinerArray[0].staff_id);
        formData.append('examination_name', this.examinerArray[0].examination_name);
        formData.append('type_of_examiner', this.examinerArray[0].type_of_examiner);
        formData.append('university_name', this.examinerArray[0].university_name);
        formData.append('referance_no', this.examinerArray[0].referance_no);
        formData.append('ref_date', this.examinerArray[0].ref_date);
        formData.append('file', this.filesArray[0]);

        this.examinerService.updateExaminer(formData).subscribe((response: any) => {
            if (response.success == 1) {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Examiner Updated',
                    showConfirmButton: false,
                    timer: 1000
                });
                this.examinerField = [1];
                this.paperSettingForm.reset();
                this.cancelUpdate();
                this.searchPaperList = [];
            }
        })
    }

    editPaperSetter(data) {
        this.examinerArray[0].id = data.id;
        this.examinerArray[0].staff_id = data.staff_id;
        this.examinerArray[0].examination_name = data.examination_name;
        this.examinerArray[0].type_of_examiner = data.type_of_examiner;
        this.examinerArray[0].university_name = data.university_name;
        this.examinerArray[0].referance_no = data.referance_no;
        this.examinerArray[0].ref_date = data.ref_date;
        this.active = 1;
        this.isUpdatable = true;
    }

    deletePaperSetter(data) {
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
                this.examinerService.deleteExaminer(data.id).subscribe((response: any) => {
                    if (response.success == 1) {
                        this.searchPaperList = response.data;
                    }
                })
            }
        });

    }


    cancelUpdate() {
        this.isUpdatable = false;
        this.examinerArray = [
            {
                'id': null,
                'staff_id': null,
                'examination_name': null,
                'type_of_examiner': null,
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
            this.examinerArray[index].paper_file = file.name;
        }
    }


    getPaperSetting() {
        this.examinerService.searchExaminer(this.paperSettingForm.value).subscribe((response: any) => {
            if (response.success == 1) {
                this.searchPaperList = response.data;
            }
        })
    }

    savePaperSetter() {
        let arr = {
            'paper_array': this.examinerArray
        };

        this.filesArray.forEach((file, index) => {
            if (file) {
                const formData = new FormData();
                formData.append('paper_file', file);

                // Send the file to the server
                this.examinerService.saveUploadFile(formData).subscribe((response: any) => {
                });
            }
        });


        this.examinerService.saveExaminer(arr).subscribe((response) => {
            // @ts-ignore
            if (response.success == 1) {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Examiner Saved',
                    showConfirmButton: false,
                    timer: 1000
                });

                this.examinerField = [1];
                this.examinerArray = [
                    {
                        'id': null,
                        'staff_id': null,
                        'examination_name': null,
                        'type_of_examiner': null,
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
        this.examinerField[this.counter] = [];
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
        this.examinerArray.push(arr[0]);
    }
}
