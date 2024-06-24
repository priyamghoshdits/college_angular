import {Component} from '@angular/core';
import {MatIconModule} from "@angular/material/icon";
import {NgForOf, NgIf} from "@angular/common";
import {NgbNav, NgbNavItem, NgbNavLink, NgbNavLinkBase, NgbNavOutlet} from "@ng-bootstrap/ng-bootstrap";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MemberService} from "../../../services/member.service";
import Swal from "sweetalert2";
import {BookPublicationService} from "../../../services/book-publication.service";

@Component({
    selector: 'app-seminar-workshop-faculty',
    standalone: true,
    imports: [
        MatIconModule,
        NgForOf,
        NgIf,
        NgbNav,
        NgbNavLink,
        NgbNavLinkBase,
        ReactiveFormsModule,
        FormsModule,
        NgbNavItem,
        NgbNavOutlet
    ],
    templateUrl: './seminar-workshop-faculty.component.html',
    styleUrl: './seminar-workshop-faculty.component.scss'
})
export class SeminarWorkshopFacultyComponent {
    active: number = 1;
    counter: number = 0;
    totalArray: any[] = [1];
    seminarWorkshopArray: any[] = [];
    seminarWorkshopList: any[] = [];

    memberList: any[];
    isUpdatable: boolean = false;

    searchForm: FormGroup;

    constructor(private memberService: MemberService, private BookPublicationService: BookPublicationService) {
        this.searchForm = new FormGroup({
            staff_id: new FormControl(null),
        });

        this.memberService.getMemberListener().subscribe((response) => {
            this.memberList = response;
        });
        this.memberList = this.memberService.getMemberList();

        this.seminarWorkshopArray = [
            {
                'id': null,
                'staff_id': null,
                'title_of_seminar': null,
                'type_of_seminar': null,
                'organized_by': null,
                'duration': null,
                'date': null,
                'achievement': null,
            }
        ]
    }

    addField() {
        this.counter = this.counter + 1;
        this.totalArray[this.counter] = [];
        let arr = [
            {
                'id': null,
                'staff_id': null,
                'title_of_seminar': null,
                'type_of_seminar': null,
                'organized_by': null,
                'duration': null,
                'date': null,
                'achievement': null,
            }
        ];
        this.seminarWorkshopArray.push(arr[0]);
    }

    saveBookPublication() {
        let arr = {
            'post_array': this.seminarWorkshopArray
        };

        this.BookPublicationService.saveBookPublicationArray(arr).subscribe((response: any) => {
            // @ts-ignore
            if (response.success == 1) {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Book Publication Saved',
                    showConfirmButton: false,
                    timer: 1000
                });
                this.cancelUpdate();
            }
        })

    }

    getBookPublicationSearch() {
        this.BookPublicationService.getBookPublication(this.searchForm.value.staff_id).subscribe((response: any) => {
            if (response.success == 1) {
                this.seminarWorkshopList = response.data;
            }
        })
    }

    updateBookPublication() {
        let arr = {
            'post_array': this.seminarWorkshopArray
        };

        this.BookPublicationService.updateBookPublicationArray(arr).subscribe((response: any) => {
            if (response.success == 1) {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Book Publication Saved',
                    showConfirmButton: false,
                    timer: 1000
                });
                this.cancelUpdate();
                this.seminarWorkshopList = [];
                this.active = 2;
            }
        })
    }

    cancelUpdate() {
        this.isUpdatable = false;
        this.totalArray = [1];
        this.seminarWorkshopArray = [
            {
                'id': null,
                'staff_id': null,
                'title_of_seminar': null,
                'type_of_seminar': null,
                'organized_by': null,
                'duration': null,
                'date': null,
                'achievement': null,
            }
        ];
        this.searchForm.reset();
        this.active = 1;
    }

    editBookPublication(data) {

        this.totalArray = [1];
        this.seminarWorkshopArray[0].id = data.id;
        this.seminarWorkshopArray[0].staff_id = data.staff_id;
        this.seminarWorkshopArray[0].title_of_seminar = data.title_of_seminar;
        this.seminarWorkshopArray[0].type_of_seminar = data.type_of_seminar;
        this.seminarWorkshopArray[0].organized_by = data.organized_by;
        this.seminarWorkshopArray[0].duration = data.duration;
        this.seminarWorkshopArray[0].date = data.date;
        this.seminarWorkshopArray[0].achievement = data.achievement;

        this.active = 1;
        this.isUpdatable = true;
    }

    deleteBookPublication(data) {
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
                this.BookPublicationService.deleteBookPublication(data.id).subscribe((response: any) => {
                    if (response.success == 1) {
                        this.seminarWorkshopList = response.data;
                    }
                })
            }
        });
    }

    activeTab(data) {
        this.active = data;
    }
}
