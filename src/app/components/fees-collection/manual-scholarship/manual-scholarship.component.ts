import { Component } from '@angular/core';
import { MatIconModule } from "@angular/material/icon";
import { NgForOf, NgIf } from "@angular/common";
import { NgbNav, NgbNavItem, NgbNavLink, NgbNavLinkBase, NgbNavOutlet } from "@ng-bootstrap/ng-bootstrap";
import { NgxPaginationModule } from "ngx-pagination";
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { RolesAndPermissionService } from "../../../services/roles-and-permission.service";
import { StudentService } from 'src/app/services/student.service';
import { SubjectService } from 'src/app/services/subject.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import { ManualScholarshipService } from 'src/app/services/manual-scholarship.service';

@Component({
  selector: 'app-manual-scholarship',
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
    NgbNavOutlet,
    NgbNavItem
  ],
  templateUrl: './manual-scholarship.component.html',
  styleUrl: './manual-scholarship.component.scss'
})
export class ManualScholarshipComponent {
  private BASE_API_URL = environment.BASE_API_URL;
  scholarshipForm: FormGroup;
  scholarshipSearchForm: FormGroup;
  scholarshipArray: any[];
  counter = 0;
  active = 1;
  scholarshipField: any[] = [1];
  rolesAndPermission: any[] = [];
  permission: any[] = [];
  isUpdatable = false;
  filteredStudentList: any[] = [];
  studentList: any[] = [];
  studentListSearch: any[] = [];
  semesterList: any[] = [];
  semesterListSearch: any[] = [];
  courseList: any[] = [];
  manualScholarshipList: any[] = [];

  constructor(private http: HttpClient, private roleAndPermissionService: RolesAndPermissionService
    , private studentService: StudentService
    , private subjectService: SubjectService
    , private manualScholarshipService: ManualScholarshipService) {

    this.scholarshipForm = new FormGroup({
      id: new FormControl(null),
      from_date: new FormControl(null, [Validators.required]),
      to_date: new FormControl(null, [Validators.required]),
      student_id: new FormControl(null),
    });

    this.scholarshipSearchForm = new FormGroup({
      id: new FormControl(null),
      course_id: new FormControl(null, [Validators.required]),
      semester_id: new FormControl(null, [Validators.required]),
      student_id: new FormControl(null),
    });

    this.roleAndPermissionService.getRolesAndPermissionListener().subscribe((response) => {
      this.rolesAndPermission = response;
      this.permission = this.rolesAndPermission.find(x => x.name == 'PAPER SETTER').permission;
    });
    this.rolesAndPermission = this.roleAndPermissionService.getRolesAndPermission();
    if (this.rolesAndPermission.length > 0) {
      this.permission = this.rolesAndPermission.find(x => x.name == 'PAPER SETTER').permission;
    }

    this.subjectService.getCourseListener().subscribe((response) => {
      this.courseList = response;
    });
    this.courseList = this.subjectService.getCourses();

    this.studentService.getStudentListener().subscribe((response) => {
      this.studentList = response;
    });
    this.studentList = this.studentService.getStudentLists();

    this.scholarshipArray = [
      {
        'id': null,
        'course_id': null,
        'semester_id': null,
        'student_id': null,
        'type_of_scholarship': null,
        'amount': null,
      }
    ];
  }

  getSemester(indexOfElement) {
    this.subjectService.getSemesterByCourseId(this.scholarshipArray[indexOfElement].course_id).subscribe((response: any) => {
      this.semesterList[indexOfElement] = response.data;
    })
  }

  getSemesterFind() {
    this.subjectService.getSemesterByCourseId(this.scholarshipSearchForm.value.course_id).subscribe((response: any) => {
      this.semesterListSearch = response.data;
    })
  }

  getStudentSearch() {
    // @ts-ignore
    const session_id = JSON.parse(localStorage.getItem('session_id'));
    // this.educationQualificationForm.patchValue({ session_id: session_id });

    if (this.scholarshipSearchForm.value.course_id) {
      this.studentListSearch = this.studentList.filter(x => x.course_id == this.scholarshipSearchForm.value.course_id);
    }
    if (this.scholarshipSearchForm.value.semester_id != null) {
      this.studentListSearch = this.studentListSearch.filter(x => x.current_semester_id == this.scholarshipSearchForm.value.semester_id);
    }
    if (session_id != null) {
      this.studentListSearch = this.studentListSearch.filter(x => x.session_id == session_id);
    }
  }

  getStudent(indexOfElement) {
    // @ts-ignore
    const session_id = JSON.parse(localStorage.getItem('session_id'));
    // this.educationQualificationForm.patchValue({ session_id: session_id });

    if (this.scholarshipArray[indexOfElement].course_id) {
      this.filteredStudentList[indexOfElement] = this.studentList.filter(x => x.course_id == this.scholarshipArray[indexOfElement].course_id);
    }
    if (this.scholarshipArray[indexOfElement].semester_id != null) {
      this.filteredStudentList[indexOfElement] = this.filteredStudentList[indexOfElement].filter(x => x.current_semester_id == this.scholarshipArray[indexOfElement].semester_id);
    }
    if (session_id != null) {
      this.filteredStudentList[indexOfElement] = this.filteredStudentList[indexOfElement].filter(x => x.session_id == session_id);
    }
  }


  activeTab(data) {
    this.active = data;
  }

  saveScholarship() {
    let arr = {
      'scholarship_array': this.scholarshipArray
    };


    this.manualScholarshipService.saveManualScholarship(arr).subscribe((response: any) => {
      if (response.success == 1) {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Manual Scholarship Saved',
          showConfirmButton: false,
          timer: 1000
        });

        this.scholarshipField = [1];
        this.scholarshipArray = [
          {
            'id': null,
            'course_id': null,
            'semester_id': null,
            'student_id': null,
            'type_of_scholarship': null,
            'amount': null,
          }
        ];
      }
    });
  }

  updateScholarship() {
    let arr = {
      'scholarship_array': this.scholarshipArray
    };
    this.manualScholarshipService.updateManualScholarship(arr).subscribe((response: any) => {
      if (response.success == 1) {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Manual Scholarship Updated',
          showConfirmButton: false,
          timer: 1000
        });
        this.cancelScholarship();
        this.manualScholarshipList = [];
      }
    })
  }


  getManualScholarship() {
    this.manualScholarshipService.getManualScholarship(this.scholarshipSearchForm.value).subscribe((response: any) => {
      if (response.success == 1) {
        this.manualScholarshipList = response.data;
      }
    })
  }

  editScholarship(data) {
    this.scholarshipArray[0].id = data.id;
    this.scholarshipArray[0].course_id = data.course_id;

    this.subjectService.getSemesterByCourseId(this.scholarshipArray[0].course_id).subscribe((response: any) => {
      this.semesterList[0] = response.data;
      this.scholarshipArray[0].semester_id = data.semester_id;

      // @ts-ignore
      const session_id = JSON.parse(localStorage.getItem('session_id'));
      // this.educationQualificationForm.patchValue({ session_id: session_id });

      if (this.scholarshipArray[0].course_id) {
        this.filteredStudentList[0] = this.studentList.filter(x => x.course_id == this.scholarshipArray[0].course_id);
      }
      if (this.scholarshipArray[0].semester_id != null) {
        this.filteredStudentList[0] = this.filteredStudentList[0].filter(x => x.current_semester_id == this.scholarshipArray[0].semester_id);
      }
      if (session_id != null) {
        this.filteredStudentList[0] = this.filteredStudentList[0].filter(x => x.session_id == session_id);
      }

      this.scholarshipArray[0].student_id = data.student_id;
      this.scholarshipArray[0].type_of_scholarship = data.type_of_scholarship;
      this.scholarshipArray[0].amount = data.amount;
      this.active = 1;
      this.isUpdatable = true;
    })
  }


  cancelScholarship() {
    this.scholarshipField = [1];
    this.scholarshipArray = [
      {
        'id': null,
        'course_id': null,
        'semester_id': null,
        'student_id': null,
        'type_of_scholarship': null,
        'amount': null,
      }
    ];
    this.isUpdatable = false;
  }

  deleteScholarship(data) {
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
        this.manualScholarshipService.deleteManualScholarship(data).subscribe((response: any) => {
          if (response.success == 1) {
            this.manualScholarshipList = response.data;
          }
        })
      }
    });
  }


  addField() {
    this.counter = this.counter + 1;
    this.scholarshipField[this.counter] = [];
    let arr = [
      {
        'id': null,
        'course_id': null,
        'semester_id': null,
        'student_id': null,
        'type_of_scholarship': null,
        'amount': null,
      }
    ];
    this.scholarshipArray.push(arr[0]);
  }

}
