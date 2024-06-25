import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubjectGroupComponent } from "../academics/subject-group/subject-group.component";
import { CreateStaffComponent } from "./create-staff/create-staff.component";
import { LeaveTypeComponent } from "./leave-type/leave-type.component";
import { LeaveAllocationComponent } from "./leave-allocation/leave-allocation.component";
import { ApplyLeaveComponent } from "./apply-leave/apply-leave.component";
import { DepartmentComponent } from "./department/department.component";
import { DesignationComponent } from "./designation/designation.component";
import { CategoryComponent } from "./category/category.component";
import { HolidayComponent } from "./holiday/holiday.component";
import { StaffAttendanceComponent } from "./staff-attendance/staff-attendance.component";
import { PayrollComponent } from "./payroll/payroll.component";
import { ApproveLeaveComponent } from "./approve-leave/approve-leave.component";
import { PayrollTypesComponent } from "./payroll-types/payroll-types.component";
import {PayslipComponent} from "./payslip/payslip.component";
import {PromotionComponent} from "./promotion/promotion.component";
import {DownloadPayslipComponent} from "./download-payslip/download-payslip.component";

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
    path: 'caste',
    component: CategoryComponent,
    data: {
      title: "Caste",
      breadcrumb: "Caste"
    }
  },
  {
    path: 'holiday',
    component: HolidayComponent,
    data: {
      title: "Holiday",
      breadcrumb: "Holiday"
    }
  },
  {
    path: 'staff-attendance',
    component: StaffAttendanceComponent,
    data: {
      title: "Staff Attendance",
      breadcrumb: "Staff Attendance"
    }
  },
  {
    path: 'staff-payroll',
    component: PayrollComponent,
    data: {
      title: "Payroll",
      breadcrumb: "Payroll"
    }
  },
  {
    path: 'approve-leave',
    component: ApproveLeaveComponent,
    data: {
      title: "Approve Leave",
      breadcrumb: "Approve Leave"
    }
  },
  {
    path: 'payroll-types',
    component: PayrollTypesComponent,
    data: {
      title: "Payroll Types",
      breadcrumb: "Payroll Types"
    }
  },
  {
    path: 'download-payslip',
    component: DownloadPayslipComponent,
    data: {
      title: "Download Payslip",
      breadcrumb: "Download Payslip"
    }
  },
  {
    path: 'promotion',
    component: PromotionComponent,
    data: {
      title: "Promotion",
      breadcrumb: "Promotion"
    }
  },
  {
    path: 'payroll-types',
    component: PayrollTypesComponent,
    data: {
      title: "Payroll Types",
      breadcrumb: "Payroll Types"
    }
  },
  {
    path: 'payslip',
    component: PayslipComponent,
    data: {
      title: "Payslip",
      breadcrumb: "Payslip"
    }
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HumanResourceRoutingModule { }
