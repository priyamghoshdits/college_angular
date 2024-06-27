import {Component} from '@angular/core';
import {LibraryService} from "../../../services/library.service";
import {StudentService} from "../../../services/student.service";
import {MatIconModule} from "@angular/material/icon";
import {NgForOf, NgIf} from "@angular/common";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import Swal from "sweetalert2";
import {SubjectService} from "../../../services/subject.service";
import {RolesAndPermissionService} from "../../../services/roles-and-permission.service";
import {CustomFilterPipe} from "../../../../../custom-filter.pipe";

@Component({
    selector: 'app-library-item-issue',
    standalone: true,
    imports: [
        MatIconModule,
        NgForOf,
        ReactiveFormsModule,
        NgIf,
        FormsModule,
        CustomFilterPipe

    ],
    templateUrl: './library-item-issue.component.html',
    styleUrl: './library-item-issue.component.scss'
})
export class LibraryItemIssueComponent {
    libraryIssueItemList: any[];
    libraryItemList: any[];
    studentList: any[];
    courseList: any[];
    semesterList: any[];
    filteredStudent: any[];
    libraryIssueForm: FormGroup;
    isUpdatable = false;
    rolesAndPermission: any[] = [];
    permission: any[] = [];
    searchItem: string;

    constructor(private libraryService: LibraryService, private studentService: StudentService
        , private subjectService: SubjectService, private roleAndPermissionService: RolesAndPermissionService) {

        this.libraryIssueForm = new FormGroup({
            id: new FormControl(null),
            book_id: new FormControl(null, [Validators.required]),
            user_id: new FormControl(null, [Validators.required]),
            quantity: new FormControl(null, [Validators.required]),
            issued_on: new FormControl(null, [Validators.required]),
            return_date: new FormControl(null, [Validators.required]),
            remaining: new FormControl({value: '', disabled: true}, [Validators.required]),
            temp_remaining: new FormControl(0),
            course_id: new FormControl(null),
            semester_id: new FormControl(null),
        });

        this.libraryService.getLibraryIssueItemListener().subscribe((response) => {
            this.libraryIssueItemList = response;
        });
        this.libraryIssueItemList = this.libraryService.getLibraryIssueItemList();

        this.libraryService.getLibraryItemListener().subscribe((response) => {
            this.libraryItemList = response;
        });
        this.libraryItemList = this.libraryService.getLibraryItemList();

        this.studentService.getStudentListener().subscribe((response) => {
            this.studentList = response;
        });
        this.studentList = this.studentService.getStudentLists();

        this.subjectService.getCourseListener().subscribe((response) => {
            this.courseList = response;
        });
        this.courseList = this.subjectService.getCourses();
        this.roleAndPermissionService.getRolesAndPermissionListener().subscribe((response) => {
            this.rolesAndPermission = response;
            this.permission = this.rolesAndPermission.find(x => x.name == 'ISSUE BOOK').permission;
        });
        this.rolesAndPermission = this.roleAndPermissionService.getRolesAndPermission();
        if (this.rolesAndPermission.length > 0) {
            this.permission = this.rolesAndPermission.find(x => x.name == 'ISSUE BOOK').permission;
        }
    }

    updateIssueDetails() {
        if (!this.libraryIssueForm.valid) {
            this.libraryIssueForm.markAllAsTouched();
            return;
        }
        if (this.libraryIssueForm.value.temp_remaining < this.libraryIssueForm.value.quantity) {
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: 'Enter valid remaining quantity',
                showConfirmButton: false,
                timer: 1500
            });
            return;
        }
        this.libraryService.updateItemIssue(this.libraryIssueForm.value).subscribe((response: any) => {
            if (response.success == 1) {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Item Saved',
                    showConfirmButton: false,
                    timer: 1000
                });
                this.libraryIssueForm.reset();
            }
        })
    }

    getStudent() {
        let x = this.studentList.filter(x => x.course_id == this.libraryIssueForm.value.course_id);
        this.filteredStudent = x.filter(x => x.current_semester_id == this.libraryIssueForm.value.semester_id);
    }

    getSemester() {
        this.subjectService.getSemesterByCourseId(this.libraryIssueForm.value.course_id).subscribe((response: any) => {
            this.semesterList = response.data;
        })
    };

    cancelUpdate() {
        this.libraryIssueForm.reset();
        this.isUpdatable = false;
    }

    showRemaining() {
        let x = this.libraryItemList.findIndex(x => x.id == this.libraryIssueForm.value.book_id);
        this.libraryIssueForm.patchValue({
            temp_remaining: this.libraryItemList[x].remaining,
            remaining: this.libraryItemList[x].remaining
        });
    }

    deleteItem(data) {
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
                this.libraryService.deleteIssueItem(data.id).subscribe((response: any) => {
                    if (response.success == 1) {
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Item Deleted',
                            showConfirmButton: false,
                            timer: 1500
                        });
                    }
                })
            }
        });
    }

    saveIssueDetails() {
        if (!this.libraryIssueForm.valid) {
            this.libraryIssueForm.markAllAsTouched();
            return;
        }
        if (this.libraryIssueForm.value.temp_remaining < this.libraryIssueForm.value.quantity) {
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: 'Enter valid remaining quantity',
                showConfirmButton: false,
                timer: 1500
            });
            return;
        }
        this.libraryService.saveItemIssueBooks(this.libraryIssueForm.value).subscribe((response) => {
            // @ts-ignore
            if (response.success == 1) {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Item Saved',
                    showConfirmButton: false,
                    timer: 1000
                });
                this.libraryIssueForm.reset();
            }
        })
    }

    itemReturned(data) {
        this.libraryService.updateReturnStatus(data.id, data.book_id, data.quantity).subscribe((response) => {
            // @ts-ignore
            if (response.success == 1) {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Return Status Updated',
                    showConfirmButton: false,
                    timer: 1000
                });
            }
        });
    }

    editItem(data) {
        // this.libraryIssueForm.patchValue({id: data.id,book_id: data.book_id, user_id: data.user_id, quantity: data.quantity});
        this.libraryIssueForm.patchValue(data);
        let x = this.libraryItemList.findIndex(x => x.id == data.book_id);
        this.libraryIssueForm.patchValue({
            temp_remaining: this.libraryItemList[x].remaining,
            remaining: this.libraryItemList[x].remaining
        });
        this.isUpdatable = true;
    }

}
