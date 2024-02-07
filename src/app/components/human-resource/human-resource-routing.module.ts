import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SubjectGroupComponent} from "../academics/subject-group/subject-group.component";
import {CreateStaffComponent} from "./create-staff/create-staff.component";
import {LeaveTypeComponent} from "./leave-type/leave-type.component";
import {LeaveAllocationComponent} from "./leave-allocation/leave-allocation.component";
import {ApplyLeaveComponent} from "./apply-leave/apply-leave.component";
import {DepartmentComponent} from "./department/department.component";
import {DesignationComponent} from "./designation/designation.component";
import {CategoryComponent} from "./category/category.component";
import {HolidayComponent} from "./holiday/holiday.component";

const routes: Routes = [
  {
    path: 'add-staff',
    component: CreateStaffComponent,
    data: {
      title: "Add Staff",
      breadcrumb: "Add Staff"
    }
  },
  {
    path: 'leave-type',
    component: LeaveTypeComponent,
    data: {
      title: "Leave Type",
      breadcrumb: "Leave Type"
    }
  },
  {
    path: 'allocate-leave',
    component: LeaveAllocationComponent,
    data: {
      title: "Leave Allocate",
      breadcrumb: "Leave Allocate"
    }
  },
  {
    path: 'apply-leave',
    component: ApplyLeaveComponent,
    data: {
      title: "Apply Leave",
      breadcrumb: "Apply Leave"
    }
  },
  {
    path: 'department',
    component: DepartmentComponent,
    data: {
      title: "Department",
      breadcrumb: "Department"
    }
  },
  {
    path: 'designation',
    component: DesignationComponent,
    data: {
      title: "Designation",
      breadcrumb: "Designation"
    }
  },
  {
    path: 'category',
    component: CategoryComponent,
    data: {
      title: "Category",
      breadcrumb: "Category"
    }
  },
  {
    path: 'holiday',
    component: HolidayComponent,
    data: {
      title: "Holiday",
      breadcrumb: "Holiday"
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HumanResourceRoutingModule { }
