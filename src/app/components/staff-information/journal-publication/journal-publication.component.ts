import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatIconModule } from "@angular/material/icon";
import { NgForOf, NgIf } from "@angular/common";
import { NgbNav, NgbNavItem, NgbNavLink, NgbNavLinkBase, NgbNavOutlet } from "@ng-bootstrap/ng-bootstrap";
import { NgxPaginationModule } from "ngx-pagination";
import { MemberService } from "../../../services/member.service";
import { ExaminationService } from "../../../services/examination.service";
import { RolesAndPermissionService } from "../../../services/roles-and-permission.service";
import Swal from "sweetalert2";
import { JournalPublicationServiceService } from "../../../services/journal-publication-service.service";
import { NgSelectModule } from '@ng-select/ng-select';

@Component({
    selector: 'app-journal-publication',
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
        NgbNavOutlet,
        NgSelectModule
    ],
    templateUrl: './journal-publication.component.html',
    styleUrl: './journal-publication.component.scss'
})
export class JournalPublicationComponent {
    journalPublicationForm: FormGroup;
    searchPaperList: any[];
    total_question: any[] = [1];
    journalPublicationArray: any[] = [];
    isUpdatable = false;
    counter = 0;
    active = 1;
    p: number;
    rolesAndPermission: any[] = [];
    permission: any[] = [];
    filesArray: File[] = [];
    maxSize =  1 * 1024 * 1024; // 1 MB in bytes
    memberList: any[];

    constructor(private memberService: MemberService, private examinationService: ExaminationService
        , private roleAndPermissionService: RolesAndPermissionService, private journalPublicationService: JournalPublicationServiceService) {

        this.journalPublicationForm = new FormGroup({
            id: new FormControl(null),
            staff_id: new FormControl(null),
        });

        this.journalPublicationArray = [
            {
                'id': null,
                'staff_id': null,
                'journal_name': null,
                'publication': null,
                'ugc_affiliation': null,
                'university_name': null,
                'volume_page_number': null,
                'issn_number': null,
                'topic_name': null,
                'impact_factor': null,
                'acceptance_year': null,
                'file_name': null
            }
        ];

        this.memberService.getMemberListener().subscribe((response) => {
            this.memberList = response;
        });
        this.memberList = this.memberService.getMemberList();

        this.roleAndPermissionService.getRolesAndPermissionListener().subscribe((response) => {
            this.rolesAndPermission = response;
            this.permission = this.rolesAndPermission.find(x => x.name == 'JOURNAL PUBLICATION').permission;
        });
        this.rolesAndPermission = this.roleAndPermissionService.getRolesAndPermission();
        if (this.rolesAndPermission.length > 0) {
            this.permission = this.rolesAndPermission.find(x => x.name == 'JOURNAL PUBLICATION').permission;
        }
    }

    fileUpload(event: any, index: number) {

        if (event.target.files[0].size > this.maxSize) {
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Select file max 1 mb',
                showConfirmButton: false,
                timer: 1000
            });
            event.target.value = '';
            return;
        }

        const file = event.target.files[0];
        if (file) {
            this.filesArray[index] = file;
            this.journalPublicationArray[index].file_name = file.name;

        }
    }

    updateJournalPublication() {
        let arr = {
            'journal_publication_array': this.journalPublicationArray
        };

        this.filesArray.forEach((file, index) => {
            if (file) {
                const formData = new FormData();
                formData.append('file_name', file);

                // Send the file to the server
                this.journalPublicationService.saveUploadFile(formData).subscribe((response: any) => {
                    this.journalPublicationArray[index].file_name = response.file_name;
                });
            }
        });

        this.journalPublicationService.updateJournalPublication(arr).subscribe((response: any) => {
            if (response.success == 1) {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Journal Publication Updated',
                    showConfirmButton: false,
                    timer: 1000
                });
                this.journalPublicationForm.reset();
                this.cancelUpdate();
            }
        })

    }

    editJournalPublication(data) {
        this.journalPublicationArray[0].id = data.id;
        this.journalPublicationArray[0].staff_id = data.staff_id;
        this.journalPublicationArray[0].journal_name = data.journal_name;
        this.journalPublicationArray[0].publication = data.publication;
        this.journalPublicationArray[0].ugc_affiliation = data.ugc_affiliation;
        this.journalPublicationArray[0].volume_page_number = data.volume_page_number;
        this.journalPublicationArray[0].university_name = data.university_name;
        this.journalPublicationArray[0].topic_name = data.topic_name;
        this.journalPublicationArray[0].issn_number = data.issn_number;
        this.journalPublicationArray[0].impact_factor = data.impact_factor;
        this.journalPublicationArray[0].acceptance_year = data.acceptance_year;
        this.journalPublicationArray[0].file_nmae = data.file_name;
        this.active = 1;
        this.isUpdatable = true;
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
                this.journalPublicationService.deleteJournalPublication(data.id).subscribe((response: any) => {
                    if (response.success == 1) {
                        this.searchPaperList = response.data;
                    }
                })
            }
        });
    }


    cancelUpdate() {
        this.isUpdatable = false;
        this.journalPublicationArray = [
            {
                'id': null,
                'staff_id': null,
                'journal_name': null,
                'publication': null,
                'ugc_affiliation': null,
                'university_name': null,
                'volume_page_number': null,
                'issn_number': null,
                'topic_name': null,
                'impact_factor': null,
                'acceptance_year': null,
                'file_name': null
            }
        ];
        // this.counter = 0;
    }

    getJournalPublication() {
        this.journalPublicationService.searchJournalPublication(this.journalPublicationForm.value.staff_id).subscribe((response: any) => {
            if (response.success == 1) {
                this.searchPaperList = response.data;
                // console.log(this.searchPaperList);

            }
        })
    }

    saveJournalPublication() {
        let arr = {
            'journal_publication_array': this.journalPublicationArray
        };

        this.filesArray.forEach((file, index) => {
            if (file) {
                const formData = new FormData();
                formData.append('file_name', file);

                // Send the file to the server
                this.journalPublicationService.saveUploadFile(formData).subscribe((response: any) => {
                    // this.journalPublicationArray[index].file_name = response.file_name;
                });
            }
        });

        this.journalPublicationService.saveJournalPublication(arr).subscribe((response: any) => {
            if (response.success == 1) {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Journal Publication Saved',
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
                'journal_name': null,
                'publication': null,
                'ugc_affiliation': null,
                'university_name': null,
                'volume_page_number': null,
                'issn_number': null,
                'topic_name': null,
                'impact_factor': null,
                'acceptance_year': null,
                'file_name': null
            }
        ];
        this.journalPublicationArray.push(arr[0]);
    }
}
