import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RoutesComponent} from "./routes/routes.component";
import {VehicleComponent} from "./vehicle/vehicle.component";
import {AssignVehicleComponent} from "./assign-vehicle/assign-vehicle.component";

const routes: Routes = [
  {
    path: 'routes',
    component: RoutesComponent,
    data: {
      title: "Routes",
      breadcrumb: "Routes"
    }
  },
  {
    path: 'vehicle',
    component: VehicleComponent,
    data: {
      title: "Vehicle",
      breadcrumb: "Vehicle"
    }
  },
  {
    path: 'assign-vehicle',
    component: AssignVehicleComponent,
    data: {
      title: "Assign Vehicle",
      breadcrumb: "Assign Vehicle"
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransportRoutingModule { }
