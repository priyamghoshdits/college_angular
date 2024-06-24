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
import { StaffExperienceComponent } from "./staff-experience/staff-experience.component";
import { PaperSetterComponent } from './paper-setter/paper-setter.component';
import { JournalPublicationComponent } from "./journal-publication/journal-publication.component";
import { PromotionComponent } from './promotion/promotion.component';
import { BookPublicationComponent } from './book-publication/book-publication.component';
import {ConsultancyComponent} from "./consultancy/consultancy.component";
import { PgPhdGuideComponent } from './pg-phd-guide/pg-phd-guide.component';
import {ExaminerComponent} from "./examiner/examiner.component";
import {AnswerScriptComponent} from "./answer-script/answer-script.component";
import {SeminarWorkshopFacultyComponent} from "./seminar-workshop-faculty/seminar-workshop-faculty.component";
import {PayslipComponent} from "./payslip/payslip.component";

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
    path: 'sponsored-or-consultancy',
    component: ConsultancyComponent,
    data: {
      title: "Sponsored Project/Consultancy",
      breadcrumb: "Sponsored Project/Consultancy"
    }
  },
  {
    path: 'journal-publication',
    component: JournalPublicationComponent,
    data: {
      title: "Journal Publication",
      breadcrumb: "Journal Publication"
    }
  },
  {
    path: 'staff-experience',
    component: StaffExperienceComponent,
    data: {
      title: "Staff Experience",
      breadcrumb: "Staff Experience"
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
    path: 'book-publication',
    component: BookPublicationComponent,
    data: {
      title: "Book Publication",
      breadcrumb: "Book Publication"
    }
  },
  {
    path: 'pg-phd-guide',
    component: PgPhdGuideComponent,
    data: {
      title: "Pg Phd Guide",
      breadcrumb: "Pg Phd Guide"
    }
  },
  {
    path: 'paper-setter',
    component: PaperSetterComponent,
    data: {
      title: "Paper Setter",
      breadcrumb: "Paper Setter"
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
    path: 'answer-script-evaluator',
    component: AnswerScriptComponent,
    data: {
      title: "Answer Script Evaluator",
      breadcrumb: "Answer Script Evaluator"
    }
  },
  {
    path: 'seminar-workshop-faculty',
    component: SeminarWorkshopFacultyComponent,
    data: {
      title: "Seminar Workshop Faculty",
      breadcrumb: "Seminar Workshop Faculty"
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
  {
    path: 'examiners',
    component: ExaminerComponent,
    data: {
      title: "Examiners",
      breadcrumb: "Examiners"
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HumanResourceRoutingModule { }
