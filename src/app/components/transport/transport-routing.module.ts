import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RoutesComponent} from "./routes/routes.component";
import {VehicleComponent} from "./vehicle/vehicle.component";

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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransportRoutingModule { }
