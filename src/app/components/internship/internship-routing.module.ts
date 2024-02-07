import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InternshipProviderComponent} from "./internship-provider/internship-provider.component";
import {InternshipComponent} from "./internship/internship.component";

const routes: Routes = [
  {
    path: 'internshipProvider',
    component: InternshipProviderComponent,
    data: {
      title: "Add Internship Provider",
      breadcrumb: "Add Internship Provider"
    }
  },
  {
    path: 'internship',
    component: InternshipComponent,
    data: {
      title: "Add Internship",
      breadcrumb: "Add Internship"
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InternshipRoutingModule { }
