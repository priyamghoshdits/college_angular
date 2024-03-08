import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CreateVirtualClassComponent} from "./create-virtual-class/create-virtual-class.component";
import {VirtualMeetingComponent} from "./virtual-meeting/virtual-meeting.component";

const routes: Routes = [
  {
    path: 'create-virtual-class',
    component: CreateVirtualClassComponent,
    data: {
      title: "Create Virtual Class",
      breadcrumb: "Create Virtual Class"
    }
  },
  {
    path: 'virtual-meeting',
    component: VirtualMeetingComponent,
    data: {
      title: "Virtual Meeting",
      breadcrumb: "Virtual Meeting"
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VirtualClassMeetingRoutingModule { }
