import { Component } from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import {DatePipe, NgForOf, NgIf} from "@angular/common";
import {NgxPaginationModule} from "ngx-pagination";
import {IncomeAndExpenseServiceService} from "../../../services/income-and-expense-service.service";
import Swal from "sweetalert2";
import {RolesAndPermissionService} from "../../../services/roles-and-permission.service";
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-add-income',
  standalone: true,
    imports: [
        FormsModule,
        MatIconModule,
        NgForOf,
        NgIf,
        NgxPaginationModule,
        ReactiveFormsModule
    ],
  templateUrl: './add-income.component.html',
  styleUrl: './add-income.component.scss'
})
export class AddIncomeComponent {
    incomeForm: FormGroup;
    incomeHeadList: any[];
    incomeList: any[];
    isUpdatable = false;
    p: number;
    datePipe: DatePipe = new DatePipe('en-US');
    rolesAndPermission: any[] = [];
    permission: any[] = [];
    constructor(private incomeService: IncomeAndExpenseServiceService, private roleAndPermissionService: RolesAndPermissionService) {
        this.incomeForm = new FormGroup({
            id: new FormControl(null),
            income_head_id: new FormControl(null, [Validators.required]),
            name: new FormControl(null, [Validators.required]),
            invoice_number: new FormControl(null, [Validators.required]),
            date: new FormControl(null, [Validators.required]),
            amount: new FormControl(null, [Validators.required, Validators.pattern("^[0-9]*$")]),
            description: new FormControl(null),
        });

        this.roleAndPermissionService.getRolesAndPermissionListener().subscribe((response) => {
            this.rolesAndPermission = response;
            this.permission = this.rolesAndPermission.find(x => x.name == 'ADD INCOME').permission;
        });
        this.rolesAndPermission = this.roleAndPermissionService.getRolesAndPermission();
        if(this.rolesAndPermission.length > 0){
            this.permission = this.rolesAndPermission.find(x => x.name == 'ADD INCOME').permission;
        }

        this.incomeForm.patchValue({date: this.datePipe.transform(new Date(), 'yyyy-MM-dd')})
        this.incomeService.getIncomeHeadListener().subscribe((response) => {
            this.incomeHeadList = response;
        });
        this.incomeHeadList = this.incomeService.getIncomeHead();

        this.incomeService.getIncomeListener().subscribe((response) => {
            this.incomeList = response;
        });
        this.incomeList = this.incomeService.getIncome();
    }

    saveIncome(){
        if(!this.incomeForm.valid){
            this.incomeForm.markAllAsTouched();
            return;
        }
        this.incomeService.saveIncome(this.incomeForm.value).subscribe((response: any) => {
            if(response.success == 1){
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Income Saved',
                    showConfirmButton: false,
                    timer: 1500
                });
                this.incomeForm.reset();
            }
        })
    }

    exportExcel(){
        if(this.incomeList.length == 0){
            Swal.fire({
                position: 'center',
                icon: 'info',
                title: 'No Data To Export',
                showConfirmButton: false,
                timer: 1000
            });
            return;
        }
        // @ts-ignore
        let x: [{ "Invoice Number": any; "Date": any; "Amount": any; "Income Head Name": any; "Name": any; "Description": any; }] = [];
        let output = [];
        this.incomeList.forEach(function (value){
            x =[{
                'Name' : value.name,
                'Invoice Number': value.invoice_number,
                'Date': value.date,
                'Amount': value.amount,
                'Income Head Name': value.income_head_name,
                'Description': value.description,
            }];
            // @ts-ignore
            output.push(x[0]);
        })
        /* pass here the table id */
        const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(output);
        /* generate workbook and add the worksheet */
        const wb: XLSX.WorkBook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
        /* save to file */
        XLSX.writeFile(wb, 'Income-Report.xlsx');
    }

    updateIncome(){
        if(!this.incomeForm.valid){
            this.incomeForm.markAllAsTouched();
            return;
        }
        this.incomeService.updateIncome(this.incomeForm.value).subscribe((response: any) => {
            if(response.success == 1){
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Income Updated',
                    showConfirmButton: false,
                    timer: 1500
                });
                this.cancelUpdate();
            }
        })
    }

    cancelUpdate(){
        this.incomeForm.reset();
        this.isUpdatable = false;
    }

    editIncome(data){
        this.incomeForm.patchValue(data);
        this.isUpdatable = true;
    }

    deleteIncome(data){
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
               this.incomeService.deleteIncome(data.id).subscribe((response: any) => {
                   if(response.success == 1){
                       Swal.fire({
                           position: 'center',
                           icon: 'success',
                           title: 'Income Deleted',
                           showConfirmButton: false,
                           timer: 1500
                       });
                   }
               })
           }
        });
    }

}
