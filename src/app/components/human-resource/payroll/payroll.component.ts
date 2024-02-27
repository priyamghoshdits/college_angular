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
import html2canvas from 'html2canvas';
import jspdf from 'jspdf';

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
  providers: [DatePipe],
  templateUrl: './payroll.component.html',
  styleUrl: './payroll.component.scss'
})
export class PayrollComponent {
  months  = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  payrollForm: FormGroup;
  memberPayrollForm: FormGroup;
  paymentForm: FormGroup;
  userTypeList : any[];
  year: any[] = [];
  memberList: any[];
  selectedData: any;
  rolesAndPermission: any[] = [];
  permission: any[] = [];
  payrollTypeList: any[] = [];
  earnings: any[]= [];
  deductions: any[]= [];
  viewPayslip = false;
  earningsPayslip: any[] = [];
  grossSalaryPayslip = 0;
  deductionSalaryPayslip = 0;
  deductionsPayslip: any[] = [];
  payslipTableLength: any[0] = [];
  fullPayslipData: any;
  datePipe: DatePipe = new DatePipe('en-US');
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
      calculated_gross_salary: new FormControl(0, [Validators.required]),
      net_salary: new FormControl(0, [Validators.required]),
      contract_type: new FormControl({value: '', disabled: true}),
      deduction: new FormControl(0, [Validators.required]),
      total_leave: new FormControl(null, [Validators.required]),
    });

    this.paymentForm = new FormGroup({
      id: new FormControl(null),
      staff_name: new FormControl(null),
      payment_amount: new FormControl(null),
      month: new FormControl(null),
      year: new FormControl(null),
      payment_mode: new FormControl(null),
      payment_date: new FormControl(null),
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

  print_div(){
    // @ts-ignore
    const printContents = document.getElementById('sectionToPrint').innerHTML;
    const originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
  }

  revertToProceedToPay(data){
    this.memberService.revertToProceedToPay(data.payroll.id).subscribe((response: any) => {
      if(response.success == 1){
        this.getStaff();
      }
    });
  }

  revertBackToGenerate(data){
    this.memberService.revertBackToGenerate(data.payroll.id).subscribe((response: any) => {
      if(response.success == 1){
        this.getStaff();
      }
    });
  }

  download_pdf(){
    Swal.fire({
      title: 'Please Wait !',
      html: 'Creating Pdf ...', // add html attribute if you want or remove
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      }
    });
    let data = document.getElementById('sectionToPrint');
    // @ts-ignore
    html2canvas(data).then(canvas => {
// Few necessary setting options
      let imgWidth = 208;
      let pageHeight = 295;
      let imgHeight = canvas.height * imgWidth / canvas.width;
      let heightLeft = imgHeight;

      const contentDataURL = canvas.toDataURL('image/png')
      let pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF
      let position = 0;
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
      Swal.close();
      pdf.save('new-file.pdf'); // Generated PDF
  })
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

  getMonthName(month_id){
    if(month_id == 1){
      return "JANUARY";
    }else if(month_id == 2){
      return "FEBRUARY";
    }else if(month_id == 3){
      return "MARCH";
    }else if(month_id == 4){
      return "APRIL";
    }else if(month_id == 5){
      return "MAY";
    }else if(month_id == 6){
      return "JUNE";
    }else if(month_id == 7){
      return "JULY";
    }else if(month_id == 8){
      return "AUGUST";
    }else if(month_id == 9){
      return "SEPTEMBER";
    }else if(month_id == 10){
      return "OCTOBER";
    }else if(month_id == 11){
      return "NOVEMBER";
    }else if(month_id == 12){
      return "DECEMBER";
    }
  }

  viewSalarySlip(record){
    this.payslipTableLength = [];
    this.viewPayslip = true;
    this.fullPayslipData = record;
    this.earningsPayslip = record.earnings;
    this.deductionsPayslip = record.deductions;
    this.grossSalaryPayslip = this.earningsPayslip.reduce((accumulator, currentItem) => accumulator + parseFloat(currentItem.amount), 0);
    this.deductionSalaryPayslip = this.deductionsPayslip.reduce((accumulator, currentItem) => accumulator + parseFloat(currentItem.amount), 0);
    this.payslipTableLength[(this.earningsPayslip.length >= this.deductionsPayslip.length)? this.earningsPayslip.length-1 : this.deductionsPayslip.length-1] = [];
  }

  returnBackPayslip(){
    this.viewPayslip = false;
  }

  proceedToPay(data){
    let myDate = new Date();
    this.paymentForm.patchValue({
      'id': data.payroll.id,
      'staff_name': data.first_name + ' ' + data.middle_name + ' ' + data.last_name,
      'payment_amount': data.payroll.net_salary,
      'month': this.getMonthName(this.payrollForm.value.month),
      'year': this.payrollForm.value.year,
      'payment_date': this.datePipe.transform(myDate, 'yyyy-MM-dd')
    });
  }

  savePayrollDetails(modal){
    this.memberService.saveProceedToPay(this.paymentForm.value).subscribe((response: any) => {
      if(response.success == 1){
        this.getStaff();
        modal.dismiss();
      }
    })
  }

  openCustomModal(content) {
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
    let deduction = this.deductions;
    let flag = 0;
      for (let i = 0; i < (this.deductions.length-1); i++){
        this.earnings.forEach(function (value){
          if(deduction[i].payroll_type_id == value.payroll_type_id){
            flag = 1;
            return;
          }
        });
      }
      if(flag == 1){
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Deduction and earning have save payroll type',
          showConfirmButton: false,
          timer: 1500
        });
        return;
      }

    let arr = {
      'member_payroll_form': this.memberPayrollForm.value,
      'earnings': this.earnings,
      'deductions': this.deductions,
    }
    if(!this.memberPayrollForm.valid){
      this.memberPayrollForm.markAllAsTouched();
      return;
    }
    if(this.memberPayrollForm.value.gross_salary != this.memberPayrollForm.value.calculated_gross_salary){
      Swal.fire({
        title: 'Confirmation',
        text: 'Gross Salary did not matched still save ?',
        icon: 'info',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, save It!',
        cancelButtonText: 'No, Do not save'
      }).then((result) => {
        if(result.isConfirmed){
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
      });
    }else{
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
    this.memberPayrollForm.patchValue({
      deduction: this.deductions.reduce((accumulator, currentItem) => accumulator + parseFloat(currentItem.amount), 0),
      calculated_gross_salary: this.earnings.reduce((accumulator, currentItem) => accumulator + parseFloat(currentItem.amount), 0),
      net_salary: this.earnings.reduce((accumulator, currentItem) => accumulator + parseFloat(currentItem.amount), 0) - this.deductions.reduce((accumulator, currentItem) => accumulator + parseFloat(currentItem.amount), 0)
    });
  }

}
