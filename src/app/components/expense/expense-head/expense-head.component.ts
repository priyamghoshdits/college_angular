import { Component } from '@angular/core';
import {IncomeAndExpenseServiceService} from "../../../services/income-and-expense-service.service";
import {MatIconModule} from "@angular/material/icon";
import {NgForOf, NgIf} from "@angular/common";
import {NgxPaginationModule} from "ngx-pagination";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import Swal from "sweetalert2";
import {RolesAndPermissionService} from "../../../services/roles-and-permission.service";

@Component({
  selector: 'app-expense-head',
  standalone: true,
  imports: [
    MatIconModule,
    NgForOf,
    NgIf,
    NgxPaginationModule,
    ReactiveFormsModule
  ],
  templateUrl: './expense-head.component.html',
  styleUrl: './expense-head.component.scss'
})
export class ExpenseHeadComponent {
  expenseHeadForm: FormGroup;
  expenseHeadList: any[];
  isUpdatable = false;
  p: number;
  rolesAndPermission: any[] = [];
  permission: any[] = [];
  constructor(private expenseService:IncomeAndExpenseServiceService, private roleAndPermissionService: RolesAndPermissionService) {
    this.expenseHeadForm = new FormGroup({
      id: new FormControl(null),
      name: new FormControl(null, [Validators.required]),
      description: new FormControl(null),
    });
    this.roleAndPermissionService.getRolesAndPermissionListener().subscribe((response) => {
      this.rolesAndPermission = response;
      this.permission = this.rolesAndPermission.find(x => x.name == 'EXPENSE HEAD').permission;
    });
    this.rolesAndPermission = this.roleAndPermissionService.getRolesAndPermission();
    if(this.rolesAndPermission.length > 0){
      this.permission = this.rolesAndPermission.find(x => x.name == 'EXPENSE HEAD').permission;
    }
    this.expenseService.getExpenseHeadListener().subscribe((response) => {
      this.expenseHeadList = response;
    });
    this.expenseHeadList = this.expenseService.getExpenseHead();
  }

  saveExpenseHead(){
    if(!this.expenseHeadForm.valid){
      this.expenseHeadForm.markAllAsTouched();
      return;
    }
    this.expenseService.saveExpenseHead(this.expenseHeadForm.value).subscribe((response: any) => {
      if(response.success == 1){
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Expense Head Saved',
          showConfirmButton: false,
          timer: 1500
        });
        this.expenseHeadForm.reset();
      }
    })
  }

  updateExpenseHead(){
    if(!this.expenseHeadForm.valid){
      this.expenseHeadForm.markAllAsTouched();
      return;
    }
    this.expenseService.updateExpenseHead(this.expenseHeadForm.value).subscribe((response: any) => {
      if(response.success == 1){
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Updated Expense Head',
          showConfirmButton: false,
          timer: 1000
        });
        this.cancelUpdate();
      }
    })
  }

  cancelUpdate(){
    this.expenseHeadForm.reset();
    this.isUpdatable = false;
  }

  editExpenseHeadList(data){
    this.expenseHeadForm.patchValue(data);
    this.isUpdatable = true;
  }

  deleteExpenseHeadList(data){
    Swal.fire({
      title: 'Confirmation',
      text: 'Do you sure to delete ?',
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete It!'
    }).then((result) => {
      if(result.isConfirmed){
        this.expenseService.deleteExpenseHead(data.id).subscribe((response: any) => {
          if(response.success == 1){
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Expense Head Deleted',
              showConfirmButton: false,
              timer: 1000
            });
          }
        })
      }
    });

  }

}
