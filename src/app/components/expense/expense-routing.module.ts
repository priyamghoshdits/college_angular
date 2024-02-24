import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ExpenseHeadComponent} from "./expense-head/expense-head.component";
import {AddExpenseComponent} from "./add-expense/add-expense.component";

const routes: Routes = [
  {
    path: 'expense-head',
    component: ExpenseHeadComponent,
    data: {
      title: "Expense Head",
      breadcrumb: "Expense Head"
    }
  },
  {
    path: 'add-expense',
    component: AddExpenseComponent,
    data: {
      title: "Add Expense",
      breadcrumb: "Add Expense"
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExpenseRoutingModule { }
