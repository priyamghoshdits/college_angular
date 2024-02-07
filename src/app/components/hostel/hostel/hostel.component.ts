import { Component } from '@angular/core';
import {HostelService} from "../../../services/hostel.service";
import {MatIconModule} from "@angular/material/icon";
import {NgForOf, NgIf} from "@angular/common";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import Swal from "sweetalert2";
import {NgxPaginationModule} from "ngx-pagination";

@Component({
  selector: 'app-hostel',
  standalone: true,
  imports: [
    MatIconModule,
    NgForOf,
    NgIf,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  templateUrl: './hostel.component.html',
  styleUrl: './hostel.component.scss'
})
export class HostelComponent {

  hostelForm: FormGroup;
  hostelTypes: any[];
  hostelList: any[];
  isUpdatable = false;
  p: number;
  constructor(private hostelService: HostelService) {

    this.hostelForm = new FormGroup({
      id: new FormControl(null),
      name: new FormControl(null, [Validators.required]),
      hostel_type_id: new FormControl(0, [Validators.required]),
      address: new FormControl(null, [Validators.required]),
      description: new FormControl(null),
    });

    this.hostelService.getHostelTypesListener().subscribe((response) => {
      this.hostelTypes = response;
    });
    this.hostelTypes = this.hostelService.getHostelTypes();
    this.hostelService.getHostelListListener().subscribe((response) => {
      this.hostelList = response;
    });
    this.hostelList = this.hostelService.getHostels();
  }

  saveHostels(){
    this.hostelService.saveHostels(this.hostelForm.value).subscribe((response) => {
      // @ts-ignore
      if(response.success == 1){
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Hostel Saved',
          showConfirmButton: false,
          timer: 1000
        });
        this.hostelForm.reset();
      }
    });
  }

  editHotel(data){
    this.hostelForm.patchValue(data);
    this.isUpdatable = true;
  }

  deleteHotel(data){

    Swal.fire({
      title: 'Confirmation',
      text: 'Do you sure to delete hostel ?',
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete It!'
    }).then((result) => {
      if(result.isConfirmed){
        this.hostelService.deleteHostels(data.id).subscribe(() => {
          // @ts-ignore
          if(response.success == 1){
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Deleted Successfully',
              showConfirmButton: false,
              timer: 1000
            });
          }
        });
      }
    });

  }

  updateHostels(){
    this.hostelService.updateHostels(this.hostelForm.value).subscribe((response) => {
      // @ts-ignore
      if(response.success == 1){
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Updated Successfully',
          showConfirmButton: false,
          timer: 1000
        });
        this.cancelUpdate();
      }
    });
  }

  cancelUpdate(){
    this.hostelForm.reset();
    this.isUpdatable = false;
  }

}
