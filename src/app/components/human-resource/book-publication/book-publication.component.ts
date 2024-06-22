import { JsonPipe, NgForOf, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { NgbNav, NgbNavItem, NgbNavLink, NgbNavLinkBase, NgbNavOutlet } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';
import { BookPublicationService } from 'src/app/services/book-publication.service';
import { MemberService } from 'src/app/services/member.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-book-publication',
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
  templateUrl: './book-publication.component.html',
  styleUrl: './book-publication.component.scss'
})
export class BookPublicationComponent {
  active: number = 1;
  counter: number = 0;
  totalBookPublication: any[] = [1];
  bookPublicationArray: any[] = [];
  bookPublicationList: any[] = [];

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

    this.bookPublicationArray = [
      {
        'id': null,
        'staff_id': null,
        'book_name': null,
        'ISBN_number': null,
        'name_of_publisher': null,
        'chapter_full_book': null,
        'chapter_name': null,
        'page_number': null,
      }
    ]
  }

  addField() {
    this.counter = this.counter + 1;
    this.totalBookPublication[this.counter] = [];
    let arr = [
      {
        'id': null,
        'staff_id': null,
        'book_name': null,
        'ISBN_number': null,
        'name_of_publisher': null,
        'chapter_full_book': null,
        'chapter_name': null,
        'page_number': null,
      }
    ];
    this.bookPublicationArray.push(arr[0]);
  }

  saveBookPublication() {
    let arr = {
      'book_publication_array': this.bookPublicationArray
    };

    console.log(arr);


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
      }
    })

  }

  getBookPublicationSearch() {
    this.BookPublicationService.getBookPublication().subscribe((response: any) => {
      if (response.success == 1) {
        this.bookPublicationList = response.data;
      }
    })
  }

  updateBookPublication() {

  }
  cancelUpdate() {

  }

  editBookPublication(data) {
    // this.totalBookPublication = data.questions;
    // this.total_question[data.questions.length - 1] = [];
    // this.active = 1;
    // this.totalMarks = this.paperSetterArray.reduce((accumulator, currentItem) => accumulator + parseInt(currentItem.marks), 0);
    // let x = this.subjectDetailsList.find(x => x.id == data.subject_details_id);
    // this.selected_details = x;
    // this.isUpdatable = true;
    // this.counter = data.questions.length - 1;
  }

  deleteBookPublication(data) {

  }

  activeTab(data) {
    this.active = data;
  }
}
