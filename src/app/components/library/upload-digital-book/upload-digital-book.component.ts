import { Component } from '@angular/core';
import {MatIconModule} from "@angular/material/icon";
import {NgForOf, NgIf} from "@angular/common";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {SubjectService} from "../../../services/subject.service";
import {LibraryService} from "../../../services/library.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-upload-digital-book',
  standalone: true,
    imports: [
        MatIconModule,
        NgForOf,
        NgIf,
        ReactiveFormsModule
    ],
  templateUrl: './upload-digital-book.component.html',
  styleUrl: './upload-digital-book.component.scss'
})
export class UploadDigitalBookComponent {
    isUpdatable = false;
    libraryDigitalBookForm: FormGroup;
    semesterList: any[];
    courseList: any[];
    libraryItemList: any[];
    file: any;

    constructor(private subjectService: SubjectService, private libraryService: LibraryService) {
        this.libraryDigitalBookForm = new FormGroup({
            id: new FormControl(null),
            book_id: new FormControl(null, [Validators.required]),
            course_id: new FormControl(null, [Validators.required]),
            semester_id: new FormControl(null, [Validators.required]),
            file_name: new FormControl(null, [Validators.required]),
        });
        this.subjectService.getCourseListener().subscribe((response) => {
            this.courseList = response;
        });
        this.courseList = this.subjectService.getCourses();
        this.libraryService.getLibraryItemListener().subscribe((response) =>{
            this.libraryItemList = response;
        });
        this.libraryItemList = this.libraryService.getLibraryItemList();
    }

    getSemester(){
        this.subjectService.getSemesterByCourseId(this.libraryDigitalBookForm.value.course_id).subscribe((response) => {
            // @ts-ignore
            this.semesterList = response.data;
        })
    };

    uploadDigitalBooks(){
        if(!this.file){
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Please select a file',
                showConfirmButton: false,
                timer: 1000
            });
            return;
        }
        const formData = new FormData();

    }

    setFile(event){
        this.file = event.target.files[0];

        // formData.append("id", this.libraryDigitalBookForm.value.id);
        // formData.append("title", this.libraryDigitalBookForm.value.title);
        // formData.append("type", this.libraryDigitalBookForm.value.type);
    }

}
