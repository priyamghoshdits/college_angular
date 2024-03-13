import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AttendanceReportComponent} from "./attendance-report/attendance-report.component";
import {ExaminationReportComponent} from "./examination-report/examination-report.component";
import {FeesCollectionReportComponent} from "./fees-collection-report/fees-collection-report.component";
import {AdmissionReportComponent} from "./admission-report/admission-report.component";
import {FeesDueReportComponent} from "./fees-due-report/fees-due-report.component";

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
  },
  {
    path: 'admission-report',
    component: AdmissionReportComponent,
    data: {
      title: "Admission Report",
      breadcrumb: "Admission Report"
    }
  },
  {
    path: 'fees-collection-report',
    component: FeesCollectionReportComponent,
    data: {
      title: "Fees Collection Report",
      breadcrumb: "Fees Collection Report"
    }
  },
  {
    path: 'fees-due-report',
    component: FeesDueReportComponent,
    data: {
      title: "Fees Due Report",
      breadcrumb: "Fees Due Report"
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportRoutingModule { }
