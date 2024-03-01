import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AttendanceReportComponent} from "./attendance-report/attendance-report.component";
import {ExaminationReportComponent} from "./examination-report/examination-report.component";

const routes: Routes = [
  {
    path: 'attendance-report',
    component: AttendanceReportComponent,
    data: {
      title: "Attendance Report",
      breadcrumb: "Attendance Report"
    }
  },
  {
    path: 'examination-report',
    component: ExaminationReportComponent,
    data: {
      title: "Examination Report",
      breadcrumb: "Examination Report"
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportRoutingModule { }
