import { Component } from '@angular/core';
import {LeaveService} from "../../../services/leave.service";
import {NgForOf, NgIf} from "@angular/common";
import {NgxPaginationModule} from "ngx-pagination";
import Swal from "sweetalert2";
import {CustomFilterPipe} from "../../../../../custom-filter.pipe";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {
  NgbModal,
  NgbNav,
  NgbNavItem,
  NgbNavLink,
  NgbNavLinkBase,
  NgbNavOutlet,
  NgbTooltip
} from "@ng-bootstrap/ng-bootstrap";
import {MatIconModule} from "@angular/material/icon";
import {ModalService} from "../../../shared/services/e-commerce/model.service";

@Component({
  selector: 'app-approve-leave',
  standalone: true,
  imports: [
    NgIf,
    NgForOf,
    NgxPaginationModule,
    CustomFilterPipe,
    ReactiveFormsModule,
    FormsModule,
    NgbNav,
    NgbNavLink,
    NgbNavLinkBase,
    NgbNavItem,
    NgbNavOutlet,
    MatIconModule,
    NgbTooltip,
  ],
  templateUrl: './approve-leave.component.html',
  styleUrl: './approve-leave.component.scss'
})
export class ApproveLeaveComponent {
  p: number;
  applyLeaveForm: FormGroup;
  leaveList: any[] = [];
  fullLeaveList: any[];
  approvedLeaveList: any[] = [];
  nonApprovedLeaveList: any[] = [];
  searchItem: string;
  approvedLeaveListSearchItem: string;
  nonApprovedLeaveListSearchItem: string;
  active = 1;
  constructor(private leaveService: LeaveService, private modalService: NgbModal) {
    this.applyLeaveForm = new FormGroup({
      id: new FormControl(null),
      user_name: new FormControl(null, [Validators.required]),
      leave_type_name: new FormControl(null, [Validators.required]),
      from_date: new FormControl(null, [Validators.required]),
      to_date: new FormControl(null, [Validators.required]),
      reason: new FormControl(null),
      total_days: new FormControl(null),
      approved: new FormControl(null),
    });
    this.leaveService.getLeaveListListener().subscribe((response) => {
      this.leaveList = response.filter(a => a.approved == 0);
      this.approvedLeaveList = response.filter(a => a.approved == 1);
      this.nonApprovedLeaveList = response.filter(a => a.approved == 2);
    })
    this.fullLeaveList = this.leaveService.getLeaveList();
    if(this.fullLeaveList.length > 0){
      this.leaveList = this.fullLeaveList.filter(a => a.approved == 0);
      this.approvedLeaveList = this.fullLeaveList.filter(a => a.approved == 1);
      this.nonApprovedLeaveList = this.fullLeaveList.filter(a => a.approved == 2);
    }
  }

  calculateNoOFDate(){
    this.applyLeaveForm.getRawValue();
    if(this.applyLeaveForm.value.from_date && this.applyLeaveForm.value.to_date){
      // @ts-ignore
      let x =Math.floor(((new Date(this.applyLeaveForm.value.to_date) - new Date(this.applyLeaveForm.value.from_date))) / (1000 * 60 * 60 * 24))+1;
      this.applyLeaveForm.patchValue({total_days: x, total_days_show: x})
    }
  }

  leaveAction(data, status){
    Swal.fire({
      title: 'Confirmation',
      text: status==1? 'Are You sure to Approve ?':'Are You sure to Reject ?',
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: status==1?"Yes, Accept it!":"Yes, Reject it!",
      cancelButtonText: "No, Please Wait!"
    }).then((result) => {
      if(result.isConfirmed){
        this.leaveService.updateLeaveStatus(data.id, status).subscribe((response: any) => {
          if(response.success == 1){
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: status==1?'Approved SuccessFully':'Rejected SuccessFully',
              showConfirmButton: false,
              timer: 1000
            });
          }
        })
      }
    });
  }

  updateAndApprove(modal){
    this.applyLeaveForm.patchValue({approved: 1});
    this.leaveService.updateLeave(this.applyLeaveForm.value).subscribe((response: any) => {
      if(response.success == 1){
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Leave approved and updated',
          showConfirmButton: false,
          timer: 1000
        });
        modal.close();
      }
    })
  }

  activeTab(data){
    this.active = data;
  }

  approveWithModification(data){
    this.applyLeaveForm.patchValue(data);
  }

  openCustomModal(content) {
    this.modalService.open(content,{ size: 'lg'});
  }


}
