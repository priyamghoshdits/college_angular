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
    searchPaperList: any[];
    total_question: any[] = [1];
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
            this.permission = this.rolesAndPermission.find(x => x.name == 'SUBJECT QUESTION').permission;
        });
        this.rolesAndPermission = this.roleAndPermissionService.getRolesAndPermission();
        if (this.rolesAndPermission.length > 0) {
            this.permission = this.rolesAndPermission.find(x => x.name == 'SUBJECT QUESTION').permission;
        }
    }

    updatePaperSetter() {
        const formData = new FormData();
        formData.append('id', this.paperSetterArray[0].id);
        formData.append('staff_id', this.paperSetterArray[0].staff_id);
        formData.append('examination_name', this.paperSetterArray[0].examination_name);
        formData.append('subject_name', this.paperSetterArray[0].subject_name);
        formData.append('university_name', this.paperSetterArray[0].university_name);
        formData.append('referance_no', this.paperSetterArray[0].referance_no);
        formData.append('ref_date', this.paperSetterArray[0].ref_date);
        formData.append('file', this.filesArray[0]);

        this.memberService.updatePaperSetter(formData).subscribe((response: any) => {
            if (response.success == 1) {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Paper Setter Updated',
                    showConfirmButton: false,
                    timer: 1000
                });
                this.paperSettingForm.reset();
                this.cancelUpdate();
            }
        })

    }

    editPaperSetter(data) {
        this.paperSetterArray[0].id = data.id;
        this.paperSetterArray[0].staff_id = data.staff_id;
        this.paperSetterArray[0].examination_name = data.examination_name;
        this.paperSetterArray[0].subject_name = data.subject_name;
        this.paperSetterArray[0].university_name = data.university_name;
        this.paperSetterArray[0].referance_no = data.referance_no;
        this.paperSetterArray[0].ref_date = data.ref_date;
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
                this.memberService.deletePaperSetter(data.id).subscribe((response: any) => {
                    if (response.success == 1) {
                        this.searchPaperList = response.data;
                    }
                })
            }
        });

    }


    cancelUpdate() {
        this.isUpdatable = false;
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
        // this.counter = 0;
    }

    fileUpload(event: any, index: number) {
        const file = event.target.files[0];
        if (file) {
            this.filesArray[index] = file; // Store file in the files array
        }
    }

    getPaperSetting() {
        this.memberService.searchPaperSetter(this.paperSettingForm.value).subscribe((response: any) => {
            if (response.success == 1) {
                this.searchPaperList = response.data;
            }
        })
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
        // this.counter = this.counter + 1;
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

}
