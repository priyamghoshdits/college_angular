import { Component } from '@angular/core';
import {LeaveService} from "../../../services/leave.service";
import {NgForOf, NgIf} from "@angular/common";
import {NgxPaginationModule} from "ngx-pagination";
import Swal from "sweetalert2";
import {CustomFilterPipe} from "../../../../../custom-filter.pipe";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgbNav, NgbNavItem, NgbNavLink, NgbNavLinkBase, NgbNavOutlet} from "@ng-bootstrap/ng-bootstrap";

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
  ],
  templateUrl: './approve-leave.component.html',
  styleUrl: './approve-leave.component.scss'
})
export class ApproveLeaveComponent {
  p: number;
  leaveList: any[] = [];
  fullLeaveList: any[];
  approvedLeaveList: any[] = [];
  nonApprovedLeaveList: any[] = [];
  searchItem: string;
  approvedLeaveListSearchItem: string;
  nonApprovedLeaveListSearchItem: string;
  active = 1;
  constructor(private leaveService: LeaveService) {
    this.leaveService.getLeaveListListener().subscribe((response) => {
      this.leaveList = response.filter(a => a.approved == 0);
      this.approvedLeaveList = response.filter(a => a.approved == 1);
      this.nonApprovedLeaveList = response.filter(a => a.approved == 2);
    })
    this.fullLeaveList = this.leaveService.getLeaveList();
    if(this.leaveList.length > 0){
      this.leaveList = this.fullLeaveList.filter(a => a.approved == 0);
      this.approvedLeaveList = this.fullLeaveList.filter(a => a.approved == 1);
      this.nonApprovedLeaveList = this.fullLeaveList.filter(a => a.approved == 2);
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

  activeTab(data){
    this.active = data;
  }


}
