import { JsonPipe, NgForOf, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { NgbNav, NgbNavItem, NgbNavLink, NgbNavLinkBase, NgbNavOutlet } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';
import { MemberService } from 'src/app/services/member.service';
import { RolesAndPermissionService } from 'src/app/services/roles-and-permission.service';
import { StaffDegreeService } from 'src/app/services/staff-degree.service';
import { StaffEducationService } from 'src/app/services/staff-education.service';
import { StudentService } from 'src/app/services/student.service';
import { SubjectService } from 'src/app/services/subject.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-staff-education',
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
  templateUrl: './staff-education.component.html',
  styleUrl: './staff-education.component.scss'
})
export class StaffEducationComponent {
  active: number = 1;
  counter: number = 0;
  memberList: any[];
  isUpdatable: boolean = false;
  totalstaffEducation: any[] = [1];
  staffEducationArray: any[] = [];
  semesterList: any[];
  courseList: any[];
  studentList: any[];
  filteredStudentList: any[];
  filesArray: File[] = [];
  staffEducationList: any[] = []
  degreeList: any[] = [];
  searchForm: FormGroup;

  rolesAndPermission: any[] = [];
  permission: any[] = [];

  constructor(private memberService: MemberService, private StaffEducationService: StaffEducationService, private StaffDegreeService: StaffDegreeService, private roleAndPermissionService: RolesAndPermissionService) {

    this.searchForm = new FormGroup({
      staff_id: new FormControl(null),
    });

    this.staffEducationArray = [
      {
        'id': null,
        'staff_id': null,
        'degree': null,
        'specialization': null,
        'university_name': null,
        'percentage': null,
        'grade ': null,
        'file_name ': null,
      }
    ]

    this.memberService.getMemberListener().subscribe((response) => {
      this.memberList = response;
    });
    this.memberList = this.memberService.getMemberList();

    this.StaffDegreeService.getDegreeListListener().subscribe(response => {
      this.degreeList = response;
    });
    this.degreeList = this.StaffDegreeService.getDegreeList();

    this.roleAndPermissionService.getRolesAndPermissionListener().subscribe((response) => {
      this.rolesAndPermission = response;
      this.permission = this.rolesAndPermission.find(x => x.name == 'STAFF EDUCATION').permission;
    });

    this.rolesAndPermission = this.roleAndPermissionService.getRolesAndPermission();

    if (this.rolesAndPermission.length > 0) {
      this.permission = this.rolesAndPermission.find(x => x.name == 'STAFF EDUCATION').permission;
    }

  }


  fileUpload(event: any, index: number) {
    const file = event.target.files[0];
    if (file) {
      this.filesArray[index] = file; // Store file in the files array
      this.staffEducationArray[index].file_name = file.name;
    }
  }

  saveStaffEducation() {
    let arr = {
      'staff_education_array': this.staffEducationArray
    };

    this.filesArray.forEach((file, index) => {
      if (file) {
        const formData = new FormData();
        formData.append('file_name', file);

        // Send the file to the server
        this.StaffEducationService.saveStaffEducationFile(formData).subscribe((response: any) => {
        });
      }
    });

    this.StaffEducationService.saveStaffEducation(arr).subscribe((response: any) => {
      // @ts-ignore
      if (response.success == 1) {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Staff Education Saved',
          showConfirmButton: false,
          timer: 1000
        });
        this.cancelUpdate();
        this.staffEducationList = [];
      }
    })
  }

  updateStaffEducation() {
    let arr = {
      'staff_education_array': this.staffEducationArray
    };

    const formData = new FormData();
    formData.append('file_name', this.filesArray[0]);

    this.filesArray.forEach((file, index) => {
      if (file) {
        const formData = new FormData();
        formData.append('file_name', file);

        // Send the file to the server
        this.StaffEducationService.saveStaffEducationFile(formData).subscribe((response: any) => {
          // this.pgPddhGuideArray[index].file_name = response.file_name;
        });
      }
    });

    this.StaffEducationService.updateStaffEducation(arr).subscribe((response: any) => {
      // @ts-ignore
      if (response.success == 1) {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Staff Education Saved',
          showConfirmButton: false,
          timer: 1000
        });
        this.cancelUpdate();
        this.staffEducationList = [];
        this.active = 2;
      }
    })
  }

  getStaffEducation() {
    this.StaffEducationService.getStaffEducation(this.searchForm.value.staff_id).subscribe((response: any) => {
      if (response.success == 1) {
        this.staffEducationList = response.data;
      }
    })
  }

  editStaffEducation(data) {

    this.staffEducationArray[0].id = data.id;
    this.staffEducationArray[0].staff_id = data.staff_id;
    this.staffEducationArray[0].degree = data.degree;
    this.staffEducationArray[0].specialization = data.specialization;
    this.staffEducationArray[0].university_name = data.university_name;
    this.staffEducationArray[0].percentage = data.percentage;
    this.staffEducationArray[0].grade = data.grade;
    this.staffEducationArray[0].file_name = data.file_name;


    this.active = 1;
    this.isUpdatable = true;
  }

  deleteStaffEducation(data) {
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
        this.StaffEducationService.deleteStaffEducation(data.id).subscribe((response: any) => {
          if (response.success == 1) {
            this.staffEducationList = response.data;
          }
        })
      }
    });
  }


  cancelUpdate() {
    this.isUpdatable = false;
    this.totalstaffEducation = [1];
    this.staffEducationArray = [
      {
        'id': null,
        'staff_id': null,
        'degree': null,
        'specialization': null,
        'university_name': null,
        'percentage': null,
        'grade ': null,
        'file_name ': null,
      }
    ];
    // this.searchForm.reset();
    this.active = 1;
  }


  addField() {
    this.counter = this.counter + 1;
    this.totalstaffEducation[this.counter] = [];
    let arr = [
      {
        'id': null,
        'staff_id': null,
        'degree': null,
        'specialization': null,
        'university_name': null,
        'percentage': null,
        'grade ': null,
        'file_name ': null,
      }
    ];
    this.staffEducationArray.push(arr[0]);
  }

  activeTab(data) {
    this.active = data;
  }
}
