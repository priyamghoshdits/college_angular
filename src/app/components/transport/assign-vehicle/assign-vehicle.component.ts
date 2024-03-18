import { Component } from '@angular/core';
import {MatIconModule} from "@angular/material/icon";
import {NgForOf, NgIf} from "@angular/common";
import {NgxPaginationModule} from "ngx-pagination";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {TransportService} from "../../../services/transport.service";

@Component({
  selector: 'app-assign-vehicle',
  standalone: true,
  imports: [
    MatIconModule,
    NgForOf,
    NgIf,
    NgxPaginationModule,
    ReactiveFormsModule
  ],
  templateUrl: './assign-vehicle.component.html',
  styleUrl: './assign-vehicle.component.scss'
})
export class AssignVehicleComponent {
  courseForm: FormGroup;
  vehicleList: any[];
  routeList: any[];
  tempVehicle = [];
  isUpdatable = false;

  constructor(private transportService: TransportService) {
    this.courseForm = new FormGroup({
      id: new FormControl(null),
      route_id: new FormControl(null, [Validators.required]),
    });
    this.transportService.getRoutesListListener().subscribe((response) => {
      this.routeList = response;
    });
    this.routeList = this.transportService.getRouteList();
    this.transportService.getVehicleListListener().subscribe((response) => {
      this.vehicleList = response;
    });
    this.vehicleList = this.transportService.getVehicleList();
  }

  importVehicle(data, status){
    let vehicle;
    if(status.target.checked){
      vehicle = [
        {id: data.id}
      ];
      // @ts-ignore
      this.tempVehicle.push(vehicle[0]);
    }else {
      // @ts-ignore
      let index = this.tempVehicle.findIndex(x => x.id === data.id)
      this.tempVehicle.splice(index, 1);
    }
  }

  saveAssignVehicle(){

  }

}
