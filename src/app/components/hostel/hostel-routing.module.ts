import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PeriodAttendanceComponent} from "../attendance/period-attendance/period-attendance.component";
import {HostelComponent} from "./hostel/hostel.component";
import {RoomTypeComponent} from "./room-type/room-type.component";
import {AddHostelRoomComponent} from "./add-hostel-room/add-hostel-room.component";

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'hostel',
        component: HostelComponent,
        data: {
          title: "Hostel",
          breadcrumb: "Hostel"
        }
      },
      {
        path: 'roomType',
        component: RoomTypeComponent,
        data: {
          title: "Room Type",
          breadcrumb: "Room Type"
        }
      },
      {
        path: 'addHostelRooms',
        component: AddHostelRoomComponent,
        data: {
          title: "Hostel Room",
          breadcrumb: "Hostel Room"
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HostelRoutingModule { }
