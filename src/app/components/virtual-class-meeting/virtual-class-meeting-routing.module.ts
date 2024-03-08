import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CreateVirtualClassComponent} from "./create-virtual-class/create-virtual-class.component";

const routes: Routes = [
  {
    path: 'create-virtual-class',
    component: CreateVirtualClassComponent,
    data: {
      title: "Create Virtual Class",
      breadcrumb: "Create Virtual Class"
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VirtualClassMeetingRoutingModule { }
