import { Component } from '@angular/core';
import {MemberService} from "../../../services/member.service";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgForOf, NgIf} from "@angular/common";
import {NgxPaginationModule} from "ngx-pagination";
import {UserTypeService} from "../../../services/user-type.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-staff-attendance',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf,
    NgxPaginationModule,
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './staff-attendance.component.html',
  styleUrl: './staff-attendance.component.scss'
})
export class StaffAttendanceComponent {
  attendanceForm: FormGroup;
  memberAttendanceList : any[] = [];
  userTypeList : any[];
  p: number;
  constructor(private memberService: MemberService, private userTypeService: UserTypeService) {
    this.attendanceForm = new FormGroup({
      id: new FormControl(null),
      user_type_id: new FormControl(null, [Validators.required]),
      date: new FormControl(null, [Validators.required]),
    });
    this.userTypeService.getUserTypeListener().subscribe((response) => {
      this.userTypeList = response;
    });
    this.userTypeList = this.userTypeService.getUserTypeList();
  }

  getStaff(){
    this.memberService.getStaffAttendance(this.attendanceForm.value.user_type_id, this.attendanceForm.value.date).subscribe((response: any) => {
      this.memberAttendanceList = response.data;
    })
  }

  saveAttendance(){
    let date = this.attendanceForm.value.date;
    this.memberAttendanceList.forEach(function (value){
      value.date = date;
    });
    this.memberService.saveAttendance(this.memberAttendanceList).subscribe((response: any) => {
      if(response.success == 1){
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Saved Attendance',
          showConfirmButton: false,
          timer: 1000
        });
      }
    })
  }


}
