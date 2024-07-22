import { Component } from '@angular/core';
import { MatIconModule } from "@angular/material/icon";
import { NgForOf, NgIf } from "@angular/common";
import { NgbNav, NgbNavItem, NgbNavLink, NgbNavLinkBase, NgbNavOutlet } from "@ng-bootstrap/ng-bootstrap";
import { NgxPaginationModule } from "ngx-pagination";
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { MemberService } from "../../../services/member.service";
import { ExaminationService } from "../../../services/examination.service";
import { RolesAndPermissionService } from "../../../services/roles-and-permission.service";
import Swal from "sweetalert2";
import { ApiScoreService } from "../../../services/api-score.service";
import { environment } from "../../../../environments/environment";
import { NgSelectModule } from '@ng-select/ng-select';

@Component({
    selector: 'app-api-score',
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
    templateUrl: './api-score.component.html',
    styleUrl: './api-score.component.scss'
})
export class ApiScoreComponent {
    public FILE_URL = environment.FILE_URL;
    paperSettingForm: FormGroup;
    searchPaperList: any[];
    paperField: any[] = [1];
    paperSetterArray: any[] = [];
    isUpdatable = false;
    counter = 0;
    active = 1;
    p: number;
    rolesAndPermission: any[] = [];
    permission: any[] = [];
    filesArray: File[] = [];

    memberList: any[];

    constructor(private memberService: MemberService
        , private examinationService: ExaminationService
        , private apiScoreService: ApiScoreService
        , private roleAndPermissionService: RolesAndPermissionService) {

        this.paperSettingForm = new FormGroup({
            id: new FormControl(null),
            staff_id: new FormControl(null),
        });

        this.paperSetterArray = [
            {
                'id': null,
                'staff_id': null,
                'assignment_year': null,
                'file_name': null,
            }
        ];

        this.memberService.getMemberListener().subscribe((response) => {
            this.memberList = response;
        });
        this.memberList = this.memberService.getMemberList();

        this.roleAndPermissionService.getRolesAndPermissionListener().subscribe((response) => {
            this.rolesAndPermission = response;
            this.permission = this.rolesAndPermission.find(x => x.name == 'API SCORE').permission;
        });
        this.rolesAndPermission = this.roleAndPermissionService.getRolesAndPermission();
        if (this.rolesAndPermission.length > 0) {
            this.permission = this.rolesAndPermission.find(x => x.name == 'API SCORE').permission;
        }
    }

    updateApiScore() {
        const formData = new FormData();
        formData.append('id', this.paperSetterArray[0].id);
        formData.append('staff_id', this.paperSetterArray[0].staff_id);
        formData.append('assignment_year', this.paperSetterArray[0].assignment_year);
        formData.append('file', this.filesArray[0]);

        this.apiScoreService.updateApiScore(formData).subscribe((response: any) => {
            if (response.success == 1) {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Api Score Updated',
                    showConfirmButton: false,
                    timer: 1000
                });
                this.paperField = [1];
                this.paperSettingForm.reset();
                this.cancelUpdate();
                this.searchPaperList = [];
            }
        })
    }

    editApiScore(data) {
        this.paperSetterArray[0].id = data.id;
        this.paperSetterArray[0].staff_id = data.staff_id;
        this.paperSetterArray[0].assignment_year = data.assignment_year;
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
                this.apiScoreService.deleteApiScore(data.id).subscribe((response: any) => {
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
                'id': null,
                'staff_id': null,
                'assignment_year': null,
                'file_name': null,
            }
        ];
        // this.counter = 0;
    }

    fileUpload(event: any, index: number) {
        const file = event.target.files[0];
        if (file) {
            this.filesArray[index] = file; // Store file in the files array
            this.paperSetterArray[index].file_name = file.name;
        }
    }


    getPaperSetting() {
        this.apiScoreService.searchApiScore(this.paperSettingForm.value).subscribe((response: any) => {
            if (response.success == 1) {
                this.searchPaperList = response.data;
            }
        })
    }

    saveApiScore() {
        let arr = {
            'paper_array': this.paperSetterArray
        };

        this.filesArray.forEach((file, index) => {
            if (file) {
                const formData = new FormData();
                formData.append('paper_file', file);

                // Send the file to the server
                this.apiScoreService.saveUploadFile(formData).subscribe((response: any) => {
                });
            }
        });


        this.apiScoreService.saveApiScore(arr).subscribe((response: any) => {
            if (response.success == 1) {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Api Score Saved',
                    showConfirmButton: false,
                    timer: 1000
                });

                this.paperField = [1];
                this.paperSetterArray = [
                    {
                        'id': null,
                        'staff_id': null,
                        'assignment_year': null,
                        'file_name': null,
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
        this.paperField[this.counter] = [];
        let arr = [
            {
                'id': null,
                'staff_id': null,
                'assignment_year': null,
            }
        ];
        this.paperSetterArray.push(arr[0]);
    }

}
