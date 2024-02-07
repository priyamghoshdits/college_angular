import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StudentAdmisssionComponent} from "./student-admisssion/student-admisssion.component";

const routes: Routes = [
  {
    path: 'studentAdmission',
    component: StudentAdmisssionComponent,
    data: {
      title: "Student Admission",
      breadcrumb: "Student Admission"
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentInformationRoutingModule { }
