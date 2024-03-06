import { Component } from '@angular/core';
import {LibraryService} from "../../../services/library.service";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import {NgForOf, NgIf} from "@angular/common";
import {environment} from "../../../../environments/environment";
import {SubjectService} from "../../../services/subject.service";
import Swal from "sweetalert2";
import {RolesAndPermissionService} from "../../../services/roles-and-permission.service";

@Component({
  selector: 'app-download-digital-book',
  standalone: true,
  imports: [
    FormsModule,
    MatIconModule,
    NgForOf,
    NgIf,
    ReactiveFormsModule
  ],
  templateUrl: './download-digital-book.component.html',
  styleUrl: './download-digital-book.component.scss'
})
export class DownloadDigitalBookComponent {
  public FILE_URL = environment.FILE_URL;
  libraryDigitalBookForm: FormGroup;
  libraryDigitalBookList: any[];
  tempLibraryDigitalBookList: any[] = [];
  courseList: any[];
  semesterList: any[];

  constructor(private libraryService: LibraryService, private subjectService: SubjectService) {
    this.libraryDigitalBookForm = new FormGroup({
      id: new FormControl(null),
      course_id: new FormControl(null, [Validators.required]),
      semester_id: new FormControl(null),
    });

    this.libraryService.getLibraryDigitalBookListener().subscribe((response) => {
      this.libraryDigitalBookList = response;
    });
    this.libraryDigitalBookList = this.libraryService.getLibraryDigitalBooksList();

    this.subjectService.getCourseListener().subscribe((response) => {
      this.courseList = response;
    });
    this.courseList = this.subjectService.getCourses();
  }

  getSemester(){
    this.subjectService.getSemesterByCourseId(this.libraryDigitalBookForm.value.course_id).subscribe((response: any) => {
      this.semesterList = response.data;
    })
  };

  searchDigitalBooks(){
    console.log(this.libraryDigitalBookForm.controls['semester_id'].errors);
    if(!this.libraryDigitalBookForm.valid){
      this.libraryDigitalBookForm.markAllAsTouched();
      return;
    }
    this.tempLibraryDigitalBookList = this.libraryDigitalBookList.filter(x => x.course_id == this.libraryDigitalBookForm.value.course_id);
    if(this.libraryDigitalBookForm.value.semester_id){
      this.tempLibraryDigitalBookList = this.tempLibraryDigitalBookList.filter(x => x.semester_id == this.libraryDigitalBookForm.value.semester_id);
    }
    if(this.tempLibraryDigitalBookList.length == 0){
      Swal.fire({
        position: 'center',
        icon: 'info',
        title: 'No data found',
        showConfirmButton: false,
        timer: 1000
      });
    }
  }

}
