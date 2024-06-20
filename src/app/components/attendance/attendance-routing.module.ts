import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PeriodAttendanceComponent} from "./period-attendance/period-attendance.component";
import {ShowAttendanceComponent} from "./show-attendance/show-attendance.component";
import {AdminAttendanceComponent} from "./admin-attendance/admin-attendance.component";

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
      {
        path: 'admin-period-attendance',
        component: AdminAttendanceComponent,
        data: {
          title: "Amin Period Attendance",
          breadcrumb: "Admin Period Attendance"
        }
      },
      {
        path: 'show-attendance',
        component: ShowAttendanceComponent,
        data: {
          title: "Show Attendance",
          breadcrumb: "Show Attendance"
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
