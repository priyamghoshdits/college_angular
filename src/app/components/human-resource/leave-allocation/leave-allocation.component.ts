import { Component } from '@angular/core';
import {LeaveService} from "../../../services/leave.service";
import {MemberService} from "../../../services/member.service";
import {MatIcon, MatIconModule} from "@angular/material/icon";
import {NgForOf, NgIf} from "@angular/common";
import {NgxPaginationModule} from "ngx-pagination";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import Swal from "sweetalert2";
import {RolesAndPermissionService} from "../../../services/roles-and-permission.service";

@Component({
  selector: 'app-leave-allocation',
  standalone: true,
  imports: [
    MatIconModule,
    NgForOf,
    NgxPaginationModule,
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './leave-allocation.component.html',
  styleUrl: './leave-allocation.component.scss'
})
export class LeaveAllocationComponent {
  memberList: any[];
  leaveTypeList: any[];
  leaveAllocationForm: FormGroup;
  isUpdatable = false;
  leaveAllocationList: any[];
  p: number;
  rolesAndPermission: any[] = [];
  permission: any[] = [];

  constructor(private leaveService: LeaveService,private memberService: MemberService, private roleAndPermissionService: RolesAndPermissionService) {
    this.leaveAllocationForm = new FormGroup({
      id: new FormControl(null),
      user_id: new FormControl(null, [Validators.required]),
      leave_type_id: new FormControl(null, [Validators.required]),
      total_leave: new FormControl(null, [Validators.required]),
    });
    this.memberService.getMemberListener().subscribe((response) => {
      this.memberList = response;
    });
    this.memberList = this.memberService.getMemberList();

    this.leaveService.getLeaveTypeListener().subscribe((response) => {
      this.leaveTypeList = response;
    });
    this.leaveTypeList = this.leaveService.getLeaveTypeList();

    this.leaveService.getLeaveAllocationListener().subscribe((response) => {
      this.leaveAllocationList = response;
    });
    this.leaveAllocationList = this.leaveService.getLeaveAllocationList();

    this.roleAndPermissionService.getRolesAndPermissionListener().subscribe((response) => {
      this.rolesAndPermission = response;
      this.permission = this.rolesAndPermission.find(x => x.name == 'ALLOCATE LEAVE').permission;
    });
    this.rolesAndPermission = this.roleAndPermissionService.getRolesAndPermission();
    if(this.rolesAndPermission.length > 0){
      this.permission = this.rolesAndPermission.find(x => x.name == 'ALLOCATE LEAVE').permission;
    }
  }

  saveLeaveAllocation(){
    this.leaveService.saveLeaveAllocation(this.leaveAllocationForm.value).subscribe((response) => {
      // @ts-ignore
      if(response.success == 1){
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Leave Allocation saved',
          showConfirmButton: false,
          timer: 1000
        });
        this.leaveAllocationForm.reset();
      }
    })
  }

  deleteLeaveAllocation(data){
    Swal.fire({
      title: 'Confirmation',
      text: 'Do you sure to delete leave Type ?',
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete It!'
    }).then((result) => {
      if(result.isConfirmed){
        this.leaveService.deleteLeaveAllocation(data.user_id).subscribe((response) => {
          // @ts-ignore
          if(response.success == 1){
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Leave Allocation deleted',
              showConfirmButton: false,
              timer: 1000
            });
          }
        })
      }
    });
  }

  updateLeaveAllocation(){

  }

  cancelUpdate(){

  }

}
