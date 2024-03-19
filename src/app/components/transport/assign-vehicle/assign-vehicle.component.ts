import { Component } from '@angular/core';
import {MatIconModule} from "@angular/material/icon";
import {NgForOf, NgIf} from "@angular/common";
import {NgxPaginationModule} from "ngx-pagination";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {TransportService} from "../../../services/transport.service";
import {cloneDeep} from 'lodash';
import Swal from "sweetalert2";
import {RolesAndPermissionService} from "../../../services/roles-and-permission.service";

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
  assignVehicleForm: FormGroup;
  vehicleList: any[];
  routeList: any[];
  assignVehicleList: any[];
  tempVehicle = [];
  isUpdatable = false;
  cloneVehicleList: any[];
  p: number;
  rolesAndPermission: any[] = [];
  permission: any[] = [];

  constructor(private transportService: TransportService, private roleAndPermissionService: RolesAndPermissionService) {
    this.assignVehicleForm = new FormGroup({
      id: new FormControl(null),
      route_id: new FormControl(null, [Validators.required]),
    });
    this.transportService.getRoutesListListener().subscribe((response) => {
      this.routeList = response;
    });
    this.routeList = this.transportService.getRouteList();
    this.transportService.getVehicleListListener().subscribe((response) => {
      this.vehicleList = response;
      this.cloneVehicleList = cloneDeep(this.vehicleList);
    });
    this.vehicleList = this.transportService.getVehicleList();
    if(this.vehicleList.length > 0){
      this.cloneVehicleList = cloneDeep(this.vehicleList);
    }

    this.roleAndPermissionService.getRolesAndPermissionListener().subscribe((response) => {
      this.rolesAndPermission = response;
      this.permission = this.rolesAndPermission.find(x => x.name == 'ASSIGN VEHICLE').permission;
    });
    this.rolesAndPermission = this.roleAndPermissionService.getRolesAndPermission();
    if(this.rolesAndPermission.length > 0){
      this.permission = this.rolesAndPermission.find(x => x.name == 'ASSIGN VEHICLE').permission;
    }

    this.transportService.getAssignVehicleListener().subscribe((response) => {
      this.assignVehicleList = response;
    });
    this.assignVehicleList = this.transportService.getAssignVehicle();
  }

  importVehicle(data, status){
    let vehicle;
    if(status.target.checked){
      vehicle = [
        {vehicle_id: data.id,route_id: this.assignVehicleForm.value.route_id}
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
    this.transportService.saveAssignVehicle(this.tempVehicle).subscribe((response: any) => {
      if(response.success == 1){
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Vehicle Assigned',
          showConfirmButton: false,
          timer: 1000
        });
        this.assignVehicleForm.reset();
        this.vehicleList= cloneDeep(this.cloneVehicleList);
      }
    })
  }

  updateAssignVehicle(){
    this.transportService.updateAssignVehicle(this.tempVehicle).subscribe((response: any) => {
      if(response.success == 1){
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Assigned Vehicle Updated',
          showConfirmButton: false,
          timer: 1000
        });
        this.cancelUpdate();
      }
    })
  }

  cancelUpdate(){
    this.assignVehicleForm.reset();
    this.vehicleList= cloneDeep(this.cloneVehicleList);
    this.isUpdatable = false;
  }

  editAssignVehicle(data){
    let temp = [];
    this.assignVehicleForm.patchValue({route_id: data.route_id});
    this.vehicleList.forEach(function (value){
      value.checked = data.vehicle.findIndex(x => x.vehicle_id === value.id) != -1;
    });
    let checkedVehicle = this.vehicleList.filter(x => x.checked === true);
    checkedVehicle.forEach(function (value){
      let vehicle;
      vehicle = [
        {vehicle_id: value.id,route_id: data.route_id}
      ];
      // @ts-ignore
      temp.push(vehicle[0]);
    })
    this.tempVehicle = temp;
    this.isUpdatable = true;
  }

  deleteAssignVehicle(data){
    Swal.fire({
      title: 'Confirmation',
      text: 'Do you sure to delete Assigned vehicle ?',
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete It!'
    }).then((result) => {
      if(result.isConfirmed){
        this.transportService.deleteAssignedVehicle(data.route_id).subscribe((response: any) => {
          if(response.success == 1){
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Assigned Vehicle deleted',
              showConfirmButton: false,
              timer: 1000
            });
          }
        })
      }
    });

  }

}
