import { JsonPipe, NgForOf, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { NgbNav, NgbNavItem, NgbNavLink, NgbNavLinkBase, NgbNavOutlet } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';
import { MemberService } from 'src/app/services/member.service';
import { PgPhdGuideService } from 'src/app/services/pg-phd-guide.service';
import { StudentService } from 'src/app/services/student.service';
import { SubjectService } from 'src/app/services/subject.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pg-phd-guide',
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
  templateUrl: './pg-phd-guide.component.html',
  styleUrl: './pg-phd-guide.component.scss'
})
export class PgPhdGuideComponent {
  active: number = 1;
  counter: number = 0;
  memberList: any[];
  isUpdatable: boolean = false;
  totalPgPhdGuide: any[] = [1];
  pgPddhGuideArray: any[] = [];
  semesterList: any[];
  courseList: any[];
  studentList: any[];
  filteredStudentList: any[];
  filesArray: File[] = [];
  pgPhdGuideList: any[] = []
  searchForm: FormGroup;

  constructor(private memberService: MemberService, private studentService: StudentService, private subjectService: SubjectService, private PgPhdGuideService: PgPhdGuideService) {

    this.searchForm = new FormGroup({
      staff_id: new FormControl(null),
    });


    this.pgPddhGuideArray = [
      {
        'id': null,
        'course_id': null,
        'semester_id': null,
        'staff_id': null,
        'student_id': null,
        'course': null,
        'title_name': null,
        'guide': null,
        'co_guide': null,
        'referance_no': null,
        'ref_date ': null,
        'file_name ': null,
        'status': null,
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
  }

  getStudent(indexOfElement) {
    // @ts-ignore
    // this.educationQualificationForm.patchValue({session_id: session_id});
    this.pgPddhGuideArray[indexOfElement].session_id = JSON.parse(localStorage.getItem('session_id'));
    if (this.pgPddhGuideArray[indexOfElement].course_id) {
      this.filteredStudentList = this.studentList.filter(x => x.course_id == this.pgPddhGuideArray[indexOfElement].course_id);
    }
    if (this.pgPddhGuideArray[indexOfElement].semester_id != null) {
      this.filteredStudentList = this.filteredStudentList.filter(x => x.current_semester_id == this.pgPddhGuideArray[indexOfElement].semester_id);
    }
    if (this.pgPddhGuideArray[indexOfElement].session_id != null) {
      this.filteredStudentList = this.filteredStudentList.filter(x => x.session_id == this.pgPddhGuideArray[indexOfElement].session_id);
    }
  }

  getSemester(indexOfElement) {
    this.subjectService.getSemesterByCourseId(this.pgPddhGuideArray[indexOfElement].course_id).subscribe((response: any) => {
      this.semesterList = response.data;
    })
  }

  fileUpload(event: any, index: number) {
    const file = event.target.files[0];
    if (file) {
      this.filesArray[index] = file; // Store file in the files array
      this.pgPddhGuideArray[index].file_name = file.name;
    }
  }

  savePgPhdGuide() {
    let arr = {
      'pgphdguid_array': this.pgPddhGuideArray
    };

    const formData = new FormData();
    formData.append('file_name', this.filesArray[0]);

    this.filesArray.forEach((file, index) => {
      if (file) {
        const formData = new FormData();
        formData.append('file_name', file);

        // Send the file to the server
        this.PgPhdGuideService.savePgPhdGuideFile(formData).subscribe((response: any) => {
          // this.pgPddhGuideArray[index].file_name = response.file_name;
        });
      }
    });

    this.PgPhdGuideService.savePgPhdGuideArray(arr).subscribe((response: any) => {
      // @ts-ignore
      if (response.success == 1) {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Pg Phd Guide Saved',
          showConfirmButton: false,
          timer: 1000
        });
        this.cancelUpdate();
      }
    })
  }


  getBookPublicationSearch() {
    this.PgPhdGuideService.getPgPhdGuide(this.searchForm.value.staff_id).subscribe((response: any) => {
      if (response.success == 1) {
        this.pgPhdGuideList = response.data;
      }
    })
  }

  updatePgPhdGuide() {
    let arr = {
      'pgphdguid_array': this.pgPddhGuideArray
    };

    this.PgPhdGuideService.updatePgPhdGuideArray(arr).subscribe((response: any) => {
      if (response.success == 1) {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Book Publication Saved',
          showConfirmButton: false,
          timer: 1000
        });
        this.cancelUpdate();
        this.pgPhdGuideList = [];
        this.active = 2;
      }
    })
  }

  cancelUpdate() {
    this.isUpdatable = false;
    this.totalPgPhdGuide = [1];
    this.pgPddhGuideArray = [
      {
        'id': null,
        'course_id': null,
        'semester_id': null,
        'staff_id': null,
        'student_id': null,
        'course': null,
        'title_name': null,
        'guide': null,
        'co_guide': null,
        'referance_no': null,
        'ref_date ': null,
        'file_name ': null,
        'status': null,
      }
    ];
    // this.searchForm.reset();
    this.active = 1;
  }

  addField() {
    this.counter = this.counter + 1;
    this.totalPgPhdGuide[this.counter] = [];
    let arr = [
      {
        'id': null,
        'course_id': null,
        'semester_id': null,
        'staff_id': null,
        'student_id': null,
        'course': null,
        'title_name': null,
        'guide': null,
        'co_guide': null,
        'referance_no': null,
        'ref_date ': null,
        'file_name ': null,
        'status': null,
      }
    ];
    this.pgPddhGuideArray.push(arr[0]);
  }

  editPgPhdGuide(data) {

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

      this.totalPgPhdGuide = [1];
      this.pgPddhGuideArray[0].id = data.id;
      this.pgPddhGuideArray[0].course_id = data.course_id;
      this.pgPddhGuideArray[0].semester_id = data.semester_id;
      this.pgPddhGuideArray[0].staff_id = data.staff_id;
      this.pgPddhGuideArray[0].student_id = data.student_id;
      this.pgPddhGuideArray[0].course = data.course;
      this.pgPddhGuideArray[0].title_name = data.title_name;
      this.pgPddhGuideArray[0].guide = data.guide;
      this.pgPddhGuideArray[0].co_guide = data.co_guide;
      this.pgPddhGuideArray[0].referance_no = data.referance_no;
      this.pgPddhGuideArray[0].ref_date = data.ref_date;
      this.pgPddhGuideArray[0].file_name = data.file_name;
      this.pgPddhGuideArray[0].status = data.status;

      this.active = 1;
      this.isUpdatable = true;
    });


  }


  deletePgPhdGuide(data) {
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
        this.PgPhdGuideService.deletePgPhdGuide(data.id).subscribe((response: any) => {
          if (response.success == 1) {
            this.pgPhdGuideList = response.data;
          }
        })
      }
    });
  }


  activeTab(data) {
    this.active = data;
  }
}
