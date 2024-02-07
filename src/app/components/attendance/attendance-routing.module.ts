import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PeriodAttendanceComponent} from "./period-attendance/period-attendance.component";

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'period-attendance',
        component: PeriodAttendanceComponent,
        data: {
          title: "Period Attendance",
          breadcrumb: "Period Attendance"
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AttendanceRoutingModule { }
