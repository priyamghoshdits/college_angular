import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CompanyComponent} from "./company/company.component";
import {PlacementComponent} from "./placement/placement.component";

const routes: Routes = [
  {
    path: 'add-company',
    component: CompanyComponent,
    data: {
      title: "Add Company",
      breadcrumb: "Add Company"
    }
  },
  {
    path: 'placement',
    component: PlacementComponent,
    data: {
      title: "Placement",
      breadcrumb: "Placement"
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobRoutingModule { }
