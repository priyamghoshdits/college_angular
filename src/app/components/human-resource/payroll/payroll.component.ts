import { Component } from '@angular/core';
import {UserTypeService} from "../../../services/user-type.service";
import {JsonPipe, NgForOf, NgIf} from "@angular/common";
import {NgxPaginationModule} from "ngx-pagination";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {MemberService} from "../../../services/member.service";
import {CustomFilterPipe} from "../../../../../custom-filter.pipe";
import {MatIconModule} from "@angular/material/icon";
import {NgbModal, NgbTooltip} from "@ng-bootstrap/ng-bootstrap";
import Swal from "sweetalert2";

@Component({
  selector: 'app-payroll',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    NgxPaginationModule,
    ReactiveFormsModule,
    CustomFilterPipe,
    MatIconModule,
    NgbTooltip,
    JsonPipe
  ],
  templateUrl: './payroll.component.html',
  styleUrl: './payroll.component.scss'
})
export class PayrollComponent {

  payrollForm: FormGroup;
  memberPayrollForm: FormGroup;
  userTypeList : any[];
  year: any[] = [];
  memberList: any[];
  selectedData: any[] = [];
  constructor(private userTypeService: UserTypeService, private memberService: MemberService, private modalService: NgbModal) {
    this.payrollForm = new FormGroup({
      id: new FormControl(null),
      user_type_id: new FormControl(null, [Validators.required]),
      date: new FormControl(null, [Validators.required]),
      month: new FormControl(null, [Validators.required]),
      year: new FormControl(null, [Validators.required]),
    });
    this.memberPayrollForm = new FormGroup({
      id: new FormControl(null),
      staff_id: new FormControl(null),
      month: new FormControl(null),
      year: new FormControl(null),
      first_name: new FormControl({value: '', disabled: true}),
      middle_name: new FormControl({value: '', disabled: true}),
      last_name: new FormControl({value: '', disabled: true}),
      department_name: new FormControl({value: '', disabled: true}),
      no_of_days: new FormControl({value: '', disabled: true}),
      total_present: new FormControl(null, [Validators.required]),
      total_absent: new FormControl(null, [Validators.required]),
      designation_name: new FormControl({value: '', disabled: true}),
      total_approved_leave: new FormControl({value: '', disabled: true}),
      total_non_approved_leave: new FormControl({value: '', disabled: true}),
      gross_salary: new FormControl(null, [Validators.required]),
      basic_salary: new FormControl(null, [Validators.required]),
      contract_type: new FormControl({value: '', disabled: true}),
      deduction: new FormControl(null, [Validators.required]),
      tax: new FormControl(null, [Validators.required]),
      total_leave: new FormControl(null, [Validators.required]),
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
    this.memberService.getMembers(this.payrollForm.value.user_type_id, this.payrollForm.value.month, this.payrollForm.value.year).subscribe((response: any) => {
      this.memberList = response.data;
    })
  }

  openCustomModal(content) {
    this.memberPayrollForm.markAsUntouched();
    this.modalService.open(content,{ size: 'xl'});
  }

  savePayroll($event){
    if(!this.memberPayrollForm.valid){
      this.memberPayrollForm.markAllAsTouched();
      return;
    }
    this.memberService.saveGeneratedPayroll(this.memberPayrollForm.value).subscribe((response: any) => {
      if(response.success == 1){
        $event.close();
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Payroll generated',
          showConfirmButton: false,
          timer: 1000
        });
      }
    })
  }

  generatePayroll(data){
    this.memberPayrollForm.patchValue(data);
    this.memberPayrollForm.patchValue({total_leave: data.total_approved_leave
      , staff_id : data.id, year: this.payrollForm.value.year, month: this.payrollForm.value.month});
  }

}
