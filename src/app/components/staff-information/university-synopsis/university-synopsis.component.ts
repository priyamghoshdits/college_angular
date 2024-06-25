import { JsonPipe, NgForOf, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { NgbNav, NgbNavItem, NgbNavLink, NgbNavLinkBase, NgbNavOutlet } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';
import { MemberService } from 'src/app/services/member.service';
import { RolesAndPermissionService } from 'src/app/services/roles-and-permission.service';
import { StudentService } from 'src/app/services/student.service';
import { SubjectService } from 'src/app/services/subject.service';
import { UniversitySynopsisService } from 'src/app/services/university-synopsis.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-university-synopsis',
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
  templateUrl: './university-synopsis.component.html',
  styleUrl: './university-synopsis.component.scss'
})
export class UniversitySynopsisComponent {
  active: number = 1;
  counter: number = 0;
  memberList: any[];
  isUpdatable: boolean = false;
  totalUniversitySynopsis: any[] = [1];
  universitySynopsisArray: any[] = [];
  semesterList: any[];
  courseList: any[];
  studentList: any[];
  filteredStudentList: any[];
  filesArray: File[] = [];
  universitySynopsisList: any[] = []
  searchForm: FormGroup;

  rolesAndPermission: any[] = [];
  permission: any[] = [];

  constructor(private memberService: MemberService, private studentService: StudentService, private subjectService: SubjectService, private UniversitySynopsisService: UniversitySynopsisService, private roleAndPermissionService: RolesAndPermissionService) {

    this.searchForm = new FormGroup({
      staff_id: new FormControl(null),
    });

    this.universitySynopsisArray = [
      {
        'id': null,
        'course_id': null,
        'semester_id': null,
        'staff_id': null,
        'student_id': null,
        'institute_name': null,
        'title': null,
        'course': null,
        'referance_no': null,
        'ref_date ': null,
        'file_name ': null,
        'date_evaluation': null,
      }
    ]


    this.memberService.getMemberListener().subscribe((response) => {
      this.memberList = response;
    });
    this.memberList = this.memberService.getMemberList();

    this.subjectService.getCourseListener().subscribe((response) => {
      this.courseList = response;
    });
    this.courseList = this.subjectService.getCourses();

    this.subjectService.getCourseListener().subscribe((response) => {
      this.courseList = response;
    });
    this.courseList = this.subjectService.getCourses();

    this.studentService.getStudentListener().subscribe((response) => {
      this.studentList = response;
    });
    this.studentList = this.studentService.getStudentLists();

    this.roleAndPermissionService.getRolesAndPermissionListener().subscribe((response) => {
      this.rolesAndPermission = response;
      this.permission = this.rolesAndPermission.find(x => x.name == 'UNIVERSITY SYNOPSIS').permission;
    });

    this.rolesAndPermission = this.roleAndPermissionService.getRolesAndPermission();

    if (this.rolesAndPermission.length > 0) {
      this.permission = this.rolesAndPermission.find(x => x.name == 'UNIVERSITY SYNOPSIS').permission;
    }
  }


  getStudent(indexOfElement) {
    // @ts-ignore
    // this.educationQualificationForm.patchValue({session_id: session_id});
    this.universitySynopsisArray[indexOfElement].session_id = JSON.parse(localStorage.getItem('session_id'));
    if (this.universitySynopsisArray[indexOfElement].course_id) {
      this.filteredStudentList = this.studentList.filter(x => x.course_id == this.universitySynopsisArray[indexOfElement].course_id);
    }
    if (this.universitySynopsisArray[indexOfElement].semester_id != null) {
      this.filteredStudentList = this.filteredStudentList.filter(x => x.current_semester_id == this.universitySynopsisArray[indexOfElement].semester_id);
    }
    if (this.universitySynopsisArray[indexOfElement].session_id != null) {
      this.filteredStudentList = this.filteredStudentList.filter(x => x.session_id == this.universitySynopsisArray[indexOfElement].session_id);
    }
  }

  getSemester(indexOfElement) {
    this.subjectService.getSemesterByCourseId(this.universitySynopsisArray[indexOfElement].course_id).subscribe((response: any) => {
      this.semesterList = response.data;
    })
  }

  fileUpload(event: any, index: number) {
    const file = event.target.files[0];
    if (file) {
      this.filesArray[index] = file; // Store file in the files array
      this.universitySynopsisArray[index].file_name = file.name;
    }
  }

  saveUniversitySynopsis() {
    let arr = {
      'university_synopsis_array': this.universitySynopsisArray
    };

    const formData = new FormData();
    formData.append('file_name', this.filesArray[0]);

    this.filesArray.forEach((file, index) => {
      if (file) {
        const formData = new FormData();
        formData.append('file_name', file);

        // Send the file to the server
        this.UniversitySynopsisService.saveuniversitySynopsisFile(formData).subscribe((response: any) => {
          // this.pgPddhGuideArray[index].file_name = response.file_name;
        });
      }
    });

    this.UniversitySynopsisService.saveuniversitySynopsisArray(arr).subscribe((response: any) => {
      // @ts-ignore
      if (response.success == 1) {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'University Synopsis Saved',
          showConfirmButton: false,
          timer: 1000
        });
        this.cancelUpdate();
      }
    })
  }


  getUniversitySynopsis() {
    this.UniversitySynopsisService.getuniversitySynopsis(this.searchForm.value.staff_id).subscribe((response: any) => {
      if (response.success == 1) {
        this.universitySynopsisList = response.data;
      }
    })
  }

  updateUniversitySynopsis() {
    let arr = {
      'university_synopsis_array': this.universitySynopsisArray
    };

    const formData = new FormData();
    formData.append('file_name', this.filesArray[0]);

    this.filesArray.forEach((file, index) => {
      if (file) {
        const formData = new FormData();
        formData.append('file_name', file);

        // Send the file to the server
        this.UniversitySynopsisService.saveuniversitySynopsisFile(formData).subscribe((response: any) => {
          // this.pgPddhGuideArray[index].file_name = response.file_name;
        });
      }
    });

    this.UniversitySynopsisService.updateuniversitySynopsisArray(arr).subscribe((response: any) => {
      // @ts-ignore
      if (response.success == 1) {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'University Synopsis Saved',
          showConfirmButton: false,
          timer: 1000
        });
        this.cancelUpdate();
        this.universitySynopsisList = [];
        this.active = 1;
      }
    })
  }


  editUniversitySynopsis(data) {
    this.subjectService.getSemesterByCourseId(data.course_id).subscribe((response: any) => {
      this.semesterList = response.data;

      // @ts-ignore
      const session_id = JSON.parse(localStorage.getItem('session_id'));
      if (data.course_id) {
        this.filteredStudentList = this.studentList.filter(x => x.course_id == data.course_id);
      }
      if (data.semester_id != null) {
        this.filteredStudentList = this.filteredStudentList.filter(x => x.current_semester_id == data.semester_id);
      }
      if (session_id != null) {
        this.filteredStudentList = this.filteredStudentList.filter(x => x.session_id == session_id);
      }

      this.totalUniversitySynopsis = [1];
      this.universitySynopsisArray[0].id = data.id;
      this.universitySynopsisArray[0].course_id = data.course_id;
      this.universitySynopsisArray[0].semester_id = data.semester_id;
      this.universitySynopsisArray[0].staff_id = data.staff_id;
      this.universitySynopsisArray[0].student_id = data.student_id;
      this.universitySynopsisArray[0].institute_name = data.institute_name;
      this.universitySynopsisArray[0].title = data.title;
      this.universitySynopsisArray[0].course = data.course;
      this.universitySynopsisArray[0].referance_no = data.referance_no;
      this.universitySynopsisArray[0].ref_date = data.ref_date;
      this.universitySynopsisArray[0].file_name = data.file_name;
      this.universitySynopsisArray[0].date_evaluation = data.date_evaluation;

      this.active = 1;
      this.isUpdatable = true;
    });
  }

  deleteUniversitySynopsis(data) {
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
        this.UniversitySynopsisService.deleteuniversitySynopsis(data.id).subscribe((response: any) => {
          if (response.success == 1) {
            this.universitySynopsisList = response.data;
          }
        })
      }
    });
  }


  addField() {
    this.counter = this.counter + 1;
    this.totalUniversitySynopsis[this.counter] = [];
    let arr = [
      {
        'id': null,
        'course_id': null,
        'semester_id': null,
        'staff_id': null,
        'student_id': null,
        'institute_name': null,
        'title': null,
        'course': null,
        'referance_no': null,
        'ref_date ': null,
        'file_name ': null,
        'date_evaluation': null,
      }
    ];
    this.universitySynopsisArray.push(arr[0]);
  }

  cancelUpdate() {
    this.isUpdatable = false;
    this.totalUniversitySynopsis = [1];
    this.universitySynopsisArray = [
      {
        'id': null,
        'course_id': null,
        'semester_id': null,
        'staff_id': null,
        'student_id': null,
        'institute_name': null,
        'title': null,
        'course': null,
        'referance_no': null,
        'ref_date ': null,
        'file_name ': null,
        'date_evaluation': null,
      }
    ]
    // this.searchForm.reset();
    this.active = 1;
  }

  activeTab(data) {
    this.active = data;
  }
}
