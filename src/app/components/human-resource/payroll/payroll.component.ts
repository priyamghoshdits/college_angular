import { Component } from '@angular/core';
import {UserTypeService} from "../../../services/user-type.service";
import {DatePipe, JsonPipe, NgForOf, NgIf} from "@angular/common";
import {NgxPaginationModule} from "ngx-pagination";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MemberService} from "../../../services/member.service";
import {CustomFilterPipe} from "../../../../../custom-filter.pipe";
import {MatIconModule} from "@angular/material/icon";
import {NgbModal, NgbTooltip} from "@ng-bootstrap/ng-bootstrap";
import Swal from "sweetalert2";
import {RolesAndPermissionService} from "../../../services/roles-and-permission.service";
import {PayrollTypesService} from "../../../services/payroll-types.service";

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
    JsonPipe,
    DatePipe,
    FormsModule
  ],
  templateUrl: './payroll.component.html',
  styleUrl: './payroll.component.scss'
})
export class PayrollComponent {
  months  = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  payrollForm: FormGroup;
  memberPayrollForm: FormGroup;
  userTypeList : any[];
  year: any[] = [];
  memberList: any[];
  selectedData: any;
  rolesAndPermission: any[] = [];
  permission: any[] = [];
  payrollTypeList: any[] = [];
  earnings: any[]= [];
  deductions: any[]= [];

  constructor(private userTypeService: UserTypeService, private memberService: MemberService
              , private modalService: NgbModal, private roleAndPermissionService: RolesAndPermissionService
              , private payrollTypeService: PayrollTypesService) {
    this.payrollForm = new FormGroup({
      id: new FormControl(null),
      user_type_id: new FormControl(null, [Validators.required]),
      month: new FormControl(null, [Validators.required]),
      year: new FormControl(null, [Validators.required]),
    });
    this.earnings = [
      {
        'payroll_type_id': null,
        'amount': null
      }
    ];
    this.deductions = [
      {
        'payroll_type_id': null,
        'amount': null
      }
    ];
    this.payrollTypeService.getPayrollTypeListener().subscribe((response) => {
      this.payrollTypeList = response;
    });
    this.payrollTypeList = this.payrollTypeService.getPayrollTypes();

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
      working_days: new FormControl({value: '', disabled: true}),
      total_approved_leave: new FormControl({value: '', disabled: true}),
      total_non_approved_leave: new FormControl({value: '', disabled: true}),
      total_holidays: new FormControl({value: '', disabled: true}),
      gross_salary: new FormControl(0, [Validators.required]),
      net_salary: new FormControl(0, [Validators.required]),
      contract_type: new FormControl({value: '', disabled: true}),
      deduction: new FormControl(0, [Validators.required]),
      total_leave: new FormControl(null, [Validators.required]),
    });
    this.roleAndPermissionService.getRolesAndPermissionListener().subscribe((response) => {
      this.rolesAndPermission = response;
      this.permission = this.rolesAndPermission.find(x => x.name == 'PAYROLL').permission;
    });
    this.rolesAndPermission = this.roleAndPermissionService.getRolesAndPermission();
    if(this.rolesAndPermission.length > 0){
      this.permission = this.rolesAndPermission.find(x => x.name == 'PAYROLL').permission;
    }
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
    if(!this.payrollForm.valid){
      this.payrollForm.markAllAsTouched();
      return;
    }
    this.memberService.getMembers(this.payrollForm.value.user_type_id, this.payrollForm.value.month, this.payrollForm.value.year).subscribe((response: any) => {
      this.memberList = response.data;
    });
  }

  openCustomModal(content) {
    this.memberPayrollForm.markAsUntouched();
    this.modalService.open(content,{ size: 'xl'});
  }

  addEarnings(){
    let flag = 0;
    this.earnings.forEach(function (value){
      if(value.payroll_type_id == null){
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Select payroll type',
          showConfirmButton: false,
          timer: 1000
        });
        flag = 1;
      }
      if(value.amount == null){
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Enter Amount',
          showConfirmButton: false,
          timer: 1000
        });
        flag = 1;
      }
    });
    if(flag == 1){
      return;
    }
    let arr = {
      'payroll_type_id': null,
      'amount': null
    }
    this.earnings.push(arr);
  }

  addDeduction(){
    let flag = 0;
    this.deductions.forEach(function (value){
      if(value.payroll_type_id == null){
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Select payroll type',
          showConfirmButton: false,
          timer: 1000
        });
        flag = 1;
      }
      if(value.amount == null){
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Enter Amount',
          showConfirmButton: false,
          timer: 1000
        });
        flag = 1;
      }
    })
    if(flag == 1){
      return;
    }
    let arr = {
      'payroll_type_id': null,
      'amount': null
    }
    this.deductions.push(arr);
  }

  savePayroll(){
    this.calculate();
    let arr = {
      'member_payroll_form': this.memberPayrollForm.value,
      'earnings': this.earnings,
      'deductions': this.deductions,
    }
    // console.log(arr);
    // return;
    if(!this.memberPayrollForm.valid){
      this.memberPayrollForm.markAllAsTouched();
      return;
    }
    this.memberService.saveGeneratedPayroll(arr).subscribe((response: any) => {
      if(response.success == 1){
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Payroll generated',
          showConfirmButton: false,
          timer: 1000
        });
      }else{
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Error in generating payroll',
          showConfirmButton: false,
          timer: 1000
        });
      }
    })
  }

  generatePayroll(data){
    this.memberPayrollForm.patchValue(data);
    this.memberPayrollForm.patchValue({total_leave: data.total_approved_leave
      , staff_id : data.id, year: this.payrollForm.value.year, month: this.payrollForm.value.month
      , working_days: data.no_of_days - data.total_holidays});
    this.selectedData = data;
  }

  returnBack(){
    this.selectedData = null;
  }

  calculate(){
    // if(this.memberPayrollForm.value.gross_salary == null){
    //   this.memberPayrollForm.patchValue({gross_salary: this.memberPayrollForm.value.basic_salary});
    // }
    // let per_day = parseFloat(this.memberPayrollForm.value.gross_salary)/this.selectedData.no_of_days;
    // let deduction = parseFloat(this.selectedData.total_absent) * per_day;
    // this.memberPayrollForm.patchValue({tax: 0, deduction: deduction.toFixed(2)});
    this.memberPayrollForm.patchValue({
      deduction: this.deductions.reduce((accumulator, currentItem) => accumulator + parseFloat(currentItem.amount), 0),
      gross_salary: this.earnings.reduce((accumulator, currentItem) => accumulator + parseFloat(currentItem.amount), 0),
      net_salary: this.earnings.reduce((accumulator, currentItem) => accumulator + parseFloat(currentItem.amount), 0) - this.deductions.reduce((accumulator, currentItem) => accumulator + parseFloat(currentItem.amount), 0)
    });
  }

}
