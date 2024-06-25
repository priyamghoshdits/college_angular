import { JsonPipe, NgForOf, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { NgbNav, NgbNavItem, NgbNavLink, NgbNavLinkBase, NgbNavOutlet } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';
import { BookPublicationService } from 'src/app/services/book-publication.service';
import { MemberService } from 'src/app/services/member.service';
import { RolesAndPermissionService } from 'src/app/services/roles-and-permission.service';
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

  rolesAndPermission: any[] = [];
  permission: any[] = [];

  searchForm: FormGroup;

  constructor(private memberService: MemberService, private BookPublicationService: BookPublicationService, private roleAndPermissionService: RolesAndPermissionService) {
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

    this.roleAndPermissionService.getRolesAndPermissionListener().subscribe((response) => {
      this.rolesAndPermission = response;
      this.permission = this.rolesAndPermission.find(x => x.name == 'BOOK PUBLICATION').permission;
    });

    this.rolesAndPermission = this.roleAndPermissionService.getRolesAndPermission();

    if (this.rolesAndPermission.length > 0) {
      this.permission = this.rolesAndPermission.find(x => x.name == 'BOOK PUBLICATION').permission;
    }
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
        this.bookPublicationList = response.data;
      }
    })
  }

  updateBookPublication() {
    let arr = {
      'book_publication_array': this.bookPublicationArray
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
        this.bookPublicationList = [];
        this.active = 2;
      }
    })
  }

  cancelUpdate() {
    this.isUpdatable = false;
    this.totalBookPublication = [1];
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
    ];
    this.searchForm.reset();
    this.active = 1;
  }

  editBookPublication(data) {
    this.totalBookPublication = [1];
    this.bookPublicationArray[0].id = data.id;
    this.bookPublicationArray[0].staff_id = data.staff_id;
    this.bookPublicationArray[0].book_name = data.book_name;
    this.bookPublicationArray[0].ISBN_number = data.ISBN_number;
    this.bookPublicationArray[0].name_of_publisher = data.name_of_publisher;
    this.bookPublicationArray[0].chapter_full_book = data.chapter_full_book;
    this.bookPublicationArray[0].chapter_name = data.chapter_name;
    this.bookPublicationArray[0].page_number = data.page_number;

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
            this.bookPublicationList = response.data;
          }
        })
      }
    });
  }

  activeTab(data) {
    this.active = data;
  }
}
