import { Component } from '@angular/core';
import {UserTypeService} from "../../../services/user-type.service";
import {NgForOf, NgIf} from "@angular/common";
import {NgxPaginationModule} from "ngx-pagination";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {MemberService} from "../../../services/member.service";
import {CustomFilterPipe} from "../../../../../custom-filter.pipe";
import {MatIconModule} from "@angular/material/icon";

@Component({
  selector: 'app-payroll',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    NgxPaginationModule,
    ReactiveFormsModule,
    CustomFilterPipe,
    MatIconModule
  ],
  templateUrl: './payroll.component.html',
  styleUrl: './payroll.component.scss'
})
export class PayrollComponent {

  payrollForm: FormGroup;
  userTypeList : any[];
  year: any[] = [];
  memberList: any[];
  constructor(private userTypeService: UserTypeService, private memberService: MemberService) {
    this.payrollForm = new FormGroup({
      id: new FormControl(null),
      user_type_id: new FormControl(null, [Validators.required]),
      date: new FormControl(null, [Validators.required]),
      month: new FormControl(null, [Validators.required]),
      year: new FormControl(null, [Validators.required]),
    });
    this.userTypeService.getUserTypeListener().subscribe((response) => {
      this.userTypeList = response;
    });
    this.userTypeList = this.userTypeService.getUserTypeList();
    for(let i = new Date().getFullYear() - 3; i<=new Date().getFullYear()+3; i++){
      let x = {
        "year": i
      };
      this.year.push(x);
    }
  }

  getStaff(){
    this.memberService.getMembers(this.payrollForm.value.user_type_id).subscribe((response: any) => {
      this.memberList = response.data;
    })
  }

}
