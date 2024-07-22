import { Component } from '@angular/core';
import {MemberService} from "../../../services/member.service";
import {LeaveService} from "../../../services/leave.service";
import {MatIcon, MatIconModule} from "@angular/material/icon";
import {JsonPipe, NgForOf, NgIf} from "@angular/common";
import {NgxPaginationModule} from "ngx-pagination";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import Swal from "sweetalert2";
import {NgbInputDatepicker, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {RolesAndPermissionService} from "../../../services/roles-and-permission.service";
import { NgSelectModule } from '@ng-select/ng-select';

@Component({
  selector: 'app-apply-leave',
  standalone: true,
  imports: [
    MatIconModule,
    NgForOf,
    NgxPaginationModule,
    ReactiveFormsModule,
    JsonPipe,
    FormsModule,
    NgbInputDatepicker,
    NgIf,
    NgSelectModule
  ],
  templateUrl: './apply-leave.component.html',
  styleUrl: './apply-leave.component.scss'
})
export class ApplyLeaveComponent {
  memberList: any[];
  leaveTypeList: any[];
  leaveList: any[];
  applyLeaveForm: FormGroup;
  isUpdatable = false;
  p:number;
  nonApprovedLeaves: any[] = [];
  rolesAndPermission: any[] = [];
  permission: any[] = [];
  user: any;

  constructor(private memberService: MemberService, private leaveService: LeaveService
              , private modalService: NgbModal, private roleAndPermissionService: RolesAndPermissionService) {
    this.applyLeaveForm = new FormGroup({
      id: new FormControl(null),
      user_id: new FormControl(null, [Validators.required]),
      leave_type_id: new FormControl(null, [Validators.required]),
      from_date: new FormControl(null, [Validators.required]),
      to_date: new FormControl(null, [Validators.required]),
      reason: new FormControl(null),
      total_days: new FormControl(null),
      total_days_show: new FormControl({value: '', disabled: true}),
      remaining_leave: new FormControl(null),
      remaining_leave_show: new FormControl({value: '', disabled: true}),
    });

    this.user = JSON.parse(localStorage.getItem('user') || '{}');

    if(this.user.user_type_id != 1){
      this.applyLeaveForm.patchValue({user_id: this.user.id});
    }

    this.memberService.getMemberListener().subscribe((response) => {
      this.memberList = response;
    });
    this.memberList = this.memberService.getMemberList();

    this.leaveService.getLeaveTypeListener().subscribe((response) => {
      this.leaveTypeList = response;
    });
    this.leaveTypeList = this.leaveService.getLeaveTypeList();

    this.leaveService.getLeaveListListener().subscribe((response) => {
      this.leaveList = response;
    })
    this.leaveList = this.leaveService.getLeaveList();

    this.roleAndPermissionService.getRolesAndPermissionListener().subscribe((response) => {
      this.rolesAndPermission = response;
      this.permission = this.rolesAndPermission.find(x => x.name == 'APPLY LEAVE').permission;
    });
    this.rolesAndPermission = this.roleAndPermissionService.getRolesAndPermission();
    if(this.rolesAndPermission.length > 0){
      this.permission = this.rolesAndPermission.find(x => x.name == 'APPLY LEAVE').permission;
    }
  }

  getRemainingLeaves(){
    this.leaveService.getLeaveByUserIdAndLeaveTypeId(this.applyLeaveForm.value.user_id, this.applyLeaveForm.value.leave_type_id).subscribe((response) => {
      // @ts-ignore
        this.applyLeaveForm.patchValue({remaining_leave_show: response.data.total_leave, remaining_leave: response.data.total_leave});
    })
  }


  openCustomModal(content) {
    this.modalService.open(content,{ size: 'xl'});
  }

  calculateNoOFDate(){
    this.applyLeaveForm.getRawValue();
    if(this.applyLeaveForm.value.from_date && this.applyLeaveForm.value.to_date){
      // @ts-ignore
      let x =Math.floor(((new Date(this.applyLeaveForm.value.to_date) - new Date(this.applyLeaveForm.value.from_date))) / (1000 * 60 * 60 * 24))+1;
      this.applyLeaveForm.patchValue({total_days: x, total_days_show: x})
    }
  }

  saveApplyLeave(){
    if(!this.applyLeaveForm.valid){
      this.applyLeaveForm.markAllAsTouched();
      return;
    }
    if(this.applyLeaveForm.value.total_days > this.applyLeaveForm.value.remaining_leave){
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Applied leave cannot be greater than remaining leave',
        showConfirmButton: false,
        timer: 1500
      });
      return;
    }

    this.leaveService.saveApplyLeave(this.applyLeaveForm.value).subscribe((response) => {
      // @ts-ignore
      if(response.success == 1){
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Leave Applied',
          showConfirmButton: false,
          timer: 1000
        });
        this.applyLeaveForm.reset();
      }
    })
  }

  cancelUpdate(){
    this.applyLeaveForm.reset();
    this.isUpdatable = false;
  }

  editLeaveList(data){
    this.isUpdatable = true;
    this.applyLeaveForm.patchValue(data);
    this.calculateNoOFDate();
    this.getRemainingLeaves();
  }

  updateApplyLeave(){
    if(!this.applyLeaveForm.valid){
      this.applyLeaveForm.markAllAsTouched();
      return;
    }
    this.leaveService.updateLeave(this.applyLeaveForm.value).subscribe((response: any) => {
      if(response.success == 1){
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Leave Updated',
          showConfirmButton: false,
          timer: 1000
        });
        this.cancelUpdate();
      }
    })
  }

  deleteLeaveList(data){
    Swal.fire({
      title: 'Confirmation',
      text: 'Do you sure to delete Leave ?',
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: "Yes, Delete it!",
      cancelButtonText: "No, Please Wait!"
    }).then((result) => {
      if(result.isConfirmed){
        this.leaveService.deleteLeave(data.id).subscribe((response: any) => {
          if(response.success == 1){
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Leave Deleted',
              showConfirmButton: false,
              timer: 1000
            });
          }
        })
      }
    });

  }

  getLeaveNotApproved(){
    this.nonApprovedLeaves = this.leaveList.filter(a => a.approved == 0);
  }

  leaveAction(data, status){
    this.leaveService.updateLeaveStatus(data.id, status).subscribe((response) => {
      // @ts-ignore
      if(response.success == 1){
        this.getLeaveNotApproved();
      }
    })
  }

}
