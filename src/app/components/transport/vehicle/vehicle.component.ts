import { Component } from '@angular/core';
import {TransportService} from "../../../services/transport.service";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import {NgForOf, NgIf} from "@angular/common";
import {NgxPaginationModule} from "ngx-pagination";
import Swal from "sweetalert2";


@Component({
  selector: 'app-vehicle',
  standalone: true,
  imports: [
    MatIconModule,
    NgForOf,
    NgIf,
    NgxPaginationModule,
    ReactiveFormsModule,
  ],
  templateUrl: './vehicle.component.html',
  styleUrl: './vehicle.component.scss'
})
export class VehicleComponent {
  vehicleForm: FormGroup;
  vehicleList: any[];
  isUpdatable = false;
  p: number;
  constructor(private transportService: TransportService) {
    this.vehicleForm = new FormGroup({
      id: new FormControl(null),
      number: new FormControl(null, [Validators.required]),
      model: new FormControl(null, [Validators.required]),
      year_made: new FormControl(null, [Validators.required]),
      driver_name: new FormControl(null, [Validators.required]),
      driver_licence: new FormControl(null, [Validators.required]),
      driver_contact: new FormControl(null, [Validators.required]),
      note: new FormControl(null),
    });
    this.transportService.getVehicleListListener().subscribe((response) => {
      this.vehicleList = response;
    });
    this.vehicleList = this.transportService.getVehicleList();
  }

  saveVehicle(){
    if(!this.vehicleForm.valid){
      this.vehicleForm.markAllAsTouched();
      return;
    }
    this.transportService.savVehicle(this.vehicleForm.value).subscribe((response: any) => {
      if(response.success == 1){
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Vehicle Saved',
          showConfirmButton: false,
          timer: 1000
        });
        this.vehicleForm.reset();
      }
    })
  }

  updateVehicle(){
    this.transportService.updateVehicle(this.vehicleForm.value).subscribe((response: any) => {
      if(response.success == 1){
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Vehicle Updated',
          showConfirmButton: false,
          timer: 1000
        });
        this.cancelUpdate();
      }
    })
  }

  cancelUpdate(){
    this.vehicleForm.reset();
    this.isUpdatable = false;
  }

  editVehicle(data){
    this.vehicleForm.patchValue(data);
    this.isUpdatable = true;
  }

  deleteVehicle(data){
    Swal.fire({
      title: 'Confirmation',
      text: 'Do you sure to delete vehicle ?',
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete It!'
    }).then((result) => {
      if(result.isConfirmed){
        this.transportService.deleteVehicle(data.id).subscribe((response: any) => {
          if(response.success == 1){
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Vehicle Deleted',
              showConfirmButton: false,
              timer: 1000
            });
          }
        })
      }
    });

  }

}
