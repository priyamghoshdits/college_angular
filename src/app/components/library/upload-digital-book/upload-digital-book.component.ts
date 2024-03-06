import { Component } from '@angular/core';
import {MatIconModule} from "@angular/material/icon";
import {NgForOf, NgIf} from "@angular/common";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {SubjectService} from "../../../services/subject.service";
import {LibraryService} from "../../../services/library.service";
import Swal from "sweetalert2";
import {environment} from "../../../../environments/environment";
import {RolesAndPermissionService} from "../../../services/roles-and-permission.service";

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
    public FILE_URL = environment.FILE_URL;
    isUpdatable = false;
    libraryDigitalBookForm: FormGroup;
    semesterList: any[];
    courseList: any[];
    libraryItemList: any[];
    file: any;
    libraryDigitalBookList: any[];
    rolesAndPermission: any[] = [];
    permission: any[] = [];

    constructor(private subjectService: SubjectService, private libraryService: LibraryService
                , private roleAndPermissionService: RolesAndPermissionService) {
        this.libraryDigitalBookForm = new FormGroup({
            id: new FormControl(null),
            book_id: new FormControl(null, [Validators.required]),
            course_id: new FormControl(null, [Validators.required]),
            semester_id: new FormControl(null, [Validators.required]),
            file_name: new FormControl(null, [Validators.required]),
        });

        this.roleAndPermissionService.getRolesAndPermissionListener().subscribe((response) => {
            this.rolesAndPermission = response;
            this.permission = this.rolesAndPermission.find(x => x.name == 'UPLOAD DIGITAL BOOK').permission;
        });
        this.rolesAndPermission = this.roleAndPermissionService.getRolesAndPermission();
        if(this.rolesAndPermission.length > 0){
            this.permission = this.rolesAndPermission.find(x => x.name == 'UPLOAD DIGITAL BOOK').permission;
        }

        this.libraryService.getLibraryDigitalBookListener().subscribe((response) => {
            this.libraryDigitalBookList = response;
        });
        this.libraryDigitalBookList = this.libraryService.getLibraryDigitalBooksList();

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
        this.subjectService.getSemesterByCourseId(this.libraryDigitalBookForm.value.course_id).subscribe((response: any) => {
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
        formData.append("id", this.libraryDigitalBookForm.value.id);
        formData.append("book_id", this.libraryDigitalBookForm.value.book_id);
        formData.append("course_id", this.libraryDigitalBookForm.value.course_id);
        formData.append("semester_id", this.libraryDigitalBookForm.value.semester_id);
        formData.append("file_name", this.file['name']);
        formData.append("file", this.file);
        this.libraryService.saveLibraryDigitalBooks(formData).subscribe((response: any) => {
            if(response.success == 1){
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Digital Book Uploaded',
                    showConfirmButton: false,
                    timer: 1000
                });
                this.libraryDigitalBookForm.reset();
            }
        })
    }

    updateDigitalBooks(){

        const formData = new FormData();
        formData.append("id", this.libraryDigitalBookForm.value.id);
        formData.append("book_id", this.libraryDigitalBookForm.value.book_id);
        formData.append("course_id", this.libraryDigitalBookForm.value.course_id);
        formData.append("semester_id", this.libraryDigitalBookForm.value.semester_id);
        if(this.file){
            formData.append("file_name", this.file['name']);
            formData.append("file", this.file);
        }
        this.libraryService.updateLibraryDigitalBooks(formData).subscribe((response: any) => {
            if(response.success == 1){
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Digital Book Updated',
                    showConfirmButton: false,
                    timer: 1000
                });
                this.cancelUpdate();
            }
        })
    }

    cancelUpdate(){
        this.libraryDigitalBookForm.reset();
        this.isUpdatable = false;
    }

    setFile(event){
        this.file = event.target.files[0];
    }

    editDigitalBook(data){
        this.subjectService.getSemesterByCourseId(data.course_id).subscribe((response: any) => {
            if(response.success == 1){
                this.semesterList = response.data;
                this.libraryDigitalBookForm.patchValue({id: data.id, book_id: data.book_id
                    , course_id: data.course_id, semester_id: data.semester_id });
                this.isUpdatable = true;
            }
        })
    }

    deleteDigitalBook(data){
        Swal.fire({
            title: 'Confirmation',
            text: 'Do you sure to delete ?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, save It!'
        }).then((result) => {
            if(result.isConfirmed){
                this.libraryService.deleteLibraryDigitalBooks(data.id).subscribe((response: any) => {
                    if(response.success == 1){
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'Digital Book Deleted',
                            showConfirmButton: false,
                            timer: 1000
                        });
                    }
                })
            }
        });
    }

}
