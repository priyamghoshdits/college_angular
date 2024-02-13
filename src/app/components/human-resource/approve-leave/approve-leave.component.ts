import { Component } from '@angular/core';
import {LeaveService} from "../../../services/leave.service";
import {NgForOf, NgIf} from "@angular/common";
import {NgxPaginationModule} from "ngx-pagination";
import Swal from "sweetalert2";
import {CustomFilterPipe} from "../../../../../custom-filter.pipe";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

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
  ],
  templateUrl: './approve-leave.component.html',
  styleUrl: './approve-leave.component.scss'
})
export class ApproveLeaveComponent {
  p: number;
  leaveList: any[];
  searchItem: string;
  constructor(private leaveService: LeaveService) {
    this.leaveService.getLeaveListListener().subscribe((response) => {
      this.leaveList = response.filter(a => a.approved == 0);
    })
    this.leaveList = this.leaveService.getLeaveList();
    if(this.leaveList.length > 0){
      this.leaveList = this.leaveList.filter(a => a.approved == 0);
    }
  }

  leaveAction(data, status){
    this.leaveService.updateLeaveStatus(data.id, status).subscribe((response) => {
      // @ts-ignore
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


}
