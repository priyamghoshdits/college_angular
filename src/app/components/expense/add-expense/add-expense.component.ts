import { Component } from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import {DatePipe, NgForOf, NgIf} from "@angular/common";
import {NgxPaginationModule} from "ngx-pagination";
import {IncomeAndExpenseServiceService} from "../../../services/income-and-expense-service.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-add-expense',
  standalone: true,
    imports: [
        FormsModule,
        MatIconModule,
        NgForOf,
        NgIf,
        NgxPaginationModule,
        ReactiveFormsModule
    ],
  templateUrl: './add-expense.component.html',
  styleUrl: './add-expense.component.scss'
})
export class AddExpenseComponent {
    expenseForm: FormGroup;
    isUpdatable = false;
    p: number;
    expenseList: any[];
    expenseHeadList: any[];
    datePipe: DatePipe = new DatePipe('en-US');
    constructor(public expenseService: IncomeAndExpenseServiceService) {
        this.expenseForm = new FormGroup({
            id: new FormControl(null),
            expense_head_id: new FormControl(null, [Validators.required]),
            name: new FormControl(null, [Validators.required]),
            invoice_number: new FormControl(null, [Validators.required]),
            date: new FormControl(null, [Validators.required]),
            amount: new FormControl(null, [Validators.required]),
            description: new FormControl(null),
        });
        this.expenseForm.patchValue({date: this.datePipe.transform(new Date(), 'yyyy-MM-dd')})

        this.expenseService.getExpenseListener().subscribe((response) => {
            this.expenseList = response;
        });
        this.expenseList = this.expenseService.getExpense();

        this.expenseService.getExpenseHeadListener().subscribe((response) => {
            this.expenseHeadList = response;
        });
        this.expenseHeadList = this.expenseService.getExpenseHead();
    }

    saveExpense(){
        if(!this.expenseForm.valid){
            this.expenseForm.markAllAsTouched();
            return;
        }
        this.expenseService.saveExpense(this.expenseForm.value).subscribe((response: any) => {
            if(response.success == 1){
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Expense Saved',
                    showConfirmButton: false,
                    timer: 1000
                });
                this.expenseForm.reset();
            }
        })
    }

    updateExpense(){
        if(!this.expenseForm.valid){
            this.expenseForm.markAllAsTouched();
            return;
        }
        this.expenseService.updateExpense(this.expenseForm.value).subscribe((response: any) => {
            if(response.success == 1){
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Expense Updated',
                    showConfirmButton: false,
                    timer: 1000
                });
                this.cancelUpdate();
            }
        })
    }

    cancelUpdate(){
        this.expenseForm.reset();
        this.isUpdatable = false;
    }

    editExpense(data){
        this.expenseForm.patchValue(data);
        this.isUpdatable = true;
    }

    deleteExpense(data){
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
              this.expenseService.deleteExpense(data.id).subscribe((response: any) => {
                  if(response.success == 1){
                      Swal.fire({
                          position: 'center',
                          icon: 'success',
                          title: 'Expense Deleted',
                          showConfirmButton: false,
                          timer: 1000
                      });
                  }
              })
          }
        })
    }

}
