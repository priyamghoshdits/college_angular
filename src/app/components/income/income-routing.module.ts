import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {IncomeHeadComponent} from "./income-head/income-head.component";
import {AddExpenseComponent} from "../expense/add-expense/add-expense.component";

const routes: Routes = [
  {
    path: 'income-head',
    component: IncomeHeadComponent,
    data: {
      title: "Income Head",
      breadcrumb: "Income Head"
    }
  },
  {
    path: 'add-income',
    component: AddExpenseComponent,
    data: {
      title: "Add Income",
      breadcrumb: "Add Income"
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IncomeRoutingModule { }
