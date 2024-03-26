import { Component } from '@angular/core';
import {LibraryService} from "../../../services/library.service";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import {NgForOf, NgIf} from "@angular/common";
import {NgxPaginationModule} from "ngx-pagination";
import Swal from "sweetalert2";
import {RolesAndPermissionService} from "../../../services/roles-and-permission.service";
import * as XLSX from 'xlsx';
import {SubjectService} from "../../../services/subject.service";
import {CustomFilterPipe} from "../../../../../custom-filter.pipe";

@Component({
  selector: 'app-library-item-stock',
  standalone: true,
  imports: [
    FormsModule,
    MatIconModule,
    NgForOf,
    NgxPaginationModule,
    ReactiveFormsModule,
    NgIf,
    CustomFilterPipe
  ],
  templateUrl: './library-item-stock.component.html',
  styleUrl: './library-item-stock.component.scss'
})
export class LibraryItemStockComponent {
  libraryItemList: any [];
  libraryForm: FormGroup;
  isUpdatable = false;
  rolesAndPermission: any[] = [];
  permission: any[] = [];
  subjectList: any[];
  courseList: any[];
  semesterList: any[];
  searchItem: string;

  constructor(private libraryService: LibraryService, private roleAndPermissionService: RolesAndPermissionService
      , private subjectService: SubjectService) {
    this.libraryForm = new FormGroup({
      id: new FormControl(null),
      name: new FormControl(null, [Validators.required]),
      course_id: new FormControl(null, [Validators.required]),
      semester_id: new FormControl(null, [Validators.required]),
      subject_id: new FormControl(null, [Validators.required]),
      isbn_no: new FormControl(null, [Validators.required]),
      publisher_name: new FormControl(null, [Validators.required]),
      author_name: new FormControl(null, [Validators.required]),
      rack_number: new FormControl(null, [Validators.required]),
      quantity: new FormControl(null, [Validators.required]),
      remaining: new FormControl(null, [Validators.required]),
      description: new FormControl(null, [Validators.required]),
      book_price: new FormControl(null, [Validators.required]),
      fine: new FormControl(null, [Validators.required]),
    });
    this.libraryService.getLibraryItemListener().subscribe((response) => {
      this.libraryItemList = response;
    });
    this.libraryItemList = this.libraryService.getLibraryItemList();

    this.subjectService.getCourseListener().subscribe((response) => {
      this.courseList = response;
    });
    this.courseList = this.subjectService.getCourses();

    this.roleAndPermissionService.getRolesAndPermissionListener().subscribe((response) => {
      this.rolesAndPermission = response;
      this.permission = this.rolesAndPermission.find(x => x.name == 'ADD ITEM').permission;
    });
    this.rolesAndPermission = this.roleAndPermissionService.getRolesAndPermission();
    if (this.rolesAndPermission.length > 0) {
      this.permission = this.rolesAndPermission.find(x => x.name == 'ADD ITEM').permission;
    }
  }

  getSemester(){
    this.subjectService.getSemesterByCourseId(this.libraryForm.value.course_id).subscribe((response: any) => {
      this.semesterList = response.data;
    })
  }

  getSubject(){
    this.subjectService.getSubjects(this.libraryForm.value.course_id,this.libraryForm.value.semester_id).subscribe((response: any) => {
        this.subjectList = response.data;
    })
  }

  saveLibraryItem() {
    if (!this.libraryForm.valid) {
      this.libraryForm.markAllAsTouched();
      return;
    }
    if (this.libraryForm.value.remaining > this.libraryForm.value.quantity) {
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'Enter valid remaining quantity',
        showConfirmButton: false,
        timer: 1500
      });
      return;
    }
    this.libraryService.saveLibraryItems(this.libraryForm.value).subscribe((response) => {
      // @ts-ignore
      if (response.success == 1) {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Item Saved',
          showConfirmButton: false,
          timer: 1000
        });
        this.libraryForm.reset();
      }
    });
  }

  exportExcel() {
    if (this.libraryItemList.length == 0) {
      Swal.fire({
        position: 'center',
        icon: 'info',
        title: 'No Data To Export',
        showConfirmButton: false,
        timer: 1000
      });
      return;
    }
    // @ts-ignore
    let x: [{ "Name": any; }] = [];
    let output = [];
    this.libraryItemList.forEach(function (value) {
      x = [{
        'Name': value.name,
      }];
      // @ts-ignore
      output.push(x[0]);
    })
    /* pass here the table id */
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(output);
    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    /* save to file */
    XLSX.writeFile(wb, 'Income-Report.xlsx');
  }

  editItemStock(data) {
    Swal.fire({
      title: 'Please Wait !',
      html: 'Editing ...', // add html attribute if you want or remove
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      }
    });
    // this.libraryForm.patchValue({id: data.id, name: data.name, quantity: data.quantity, remaining: data.remaining});
    this.libraryForm.patchValue(data);
    this.subjectService.getSemesterByCourseId(this.libraryForm.value.course_id).subscribe((response: any) => {
      this.semesterList = response.data;
      this.libraryForm.patchValue(data);
      this.subjectService.getSubjects(this.libraryForm.value.course_id,this.libraryForm.value.semester_id).subscribe((response: any) => {
        this.subjectList = response.data;
        this.libraryForm.patchValue(data);
        Swal.close();
        this.isUpdatable = true;
      })
    })
  }

  deleteItemStock(data) {
    Swal.fire({
      title: 'Confirmation',
      text: 'Do you sure to delete ?',
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, save It!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.libraryService.deleteLibraryItem(data.id).subscribe((response) => {
          // @ts-ignore
          if (response.success == 1) {
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Item Deleted',
              showConfirmButton: false,
              timer: 1000
            });
          }
        });
      }
    });
  }

  updateLibraryItem() {
    if (!this.libraryForm.valid) {
      this.libraryForm.markAllAsTouched();
      return;
    }
    this.libraryService.updateLibraryItems(this.libraryForm.value).subscribe((response) => {
      // @ts-ignore
      if (response.success == 1) {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Item Updated',
          showConfirmButton: false,
          timer: 1000
        });
        this.cancelUpdate();
      }
    })
  }

  cancelUpdate() {
    this.libraryForm.reset();
    this.isUpdatable = false;
  }
}