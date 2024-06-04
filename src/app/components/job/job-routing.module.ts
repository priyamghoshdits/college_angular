import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CompanyComponent} from "./company/company.component";

const routes: Routes = [
  {
    path: 'add-company',
    component: CompanyComponent,
    data: {
      title: "Add Company",
      breadcrumb: "Add Company"
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobRoutingModule { }
