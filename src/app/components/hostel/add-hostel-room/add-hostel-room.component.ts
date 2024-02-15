import { Component } from '@angular/core';
import {HostelService} from "../../../services/hostel.service";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import {NgForOf, NgIf} from "@angular/common";
import {NgxPaginationModule} from "ngx-pagination";
import Swal from "sweetalert2";
import {RolesAndPermissionService} from "../../../services/roles-and-permission.service";

@Component({
  selector: 'app-add-hostel-room',
  standalone: true,
  imports: [
    FormsModule,
    MatIconModule,
    NgForOf,
    NgxPaginationModule,
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './add-hostel-room.component.html',
  styleUrl: './add-hostel-room.component.scss'
})
export class AddHostelRoomComponent {

  hostelForm: FormGroup;
  roomType: any[];
  hostelList: any[];
  hostelRoomList: any[];
  isUpdatable = false;
  p: number;
  rolesAndPermission: any[] = [];
  permission: any[] = [];

  constructor(private hostelServices: HostelService, private roleAndPermissionService: RolesAndPermissionService) {
    this.hostelForm = new FormGroup({
      id: new FormControl(null),
      name: new FormControl(null, [Validators.required]),
      hostel_id: new FormControl(null, [Validators.required]),
      room_type_id: new FormControl(null, [Validators.required]),
      no_of_bed: new FormControl(null, [Validators.required]),
      cost_per_bed: new FormControl(null, [Validators.required]),
      description: new FormControl(null),
    });

    this.hostelServices.getRoomTypeListListener().subscribe((response) => {
      this.roomType = response;
    });
    this.roomType = this.hostelServices.getRoomTypes();

    this.hostelServices.getHostelListListener().subscribe((response) => {
      this.hostelList = response;
    })
    this.hostelList = this.hostelServices.getHostels();

    this.hostelServices.getHostelRoomListener().subscribe((response) => {
      this.hostelRoomList = response;
    });
    this.hostelRoomList = this.hostelServices.getHostelRoomListTypes();

    this.roleAndPermissionService.getRolesAndPermissionListener().subscribe((response) => {
      this.rolesAndPermission = response;
      this.permission = this.rolesAndPermission.find(x => x.name == 'ADD HOSTEL ROOM').permission;
    });
    this.rolesAndPermission = this.roleAndPermissionService.getRolesAndPermission();
    if(this.rolesAndPermission.length > 0){
      this.permission = this.rolesAndPermission.find(x => x.name == 'ADD HOSTEL ROOM').permission;
    }
  }

  saveHostelRooms(){
    if(!this.hostelForm.valid){
      this.hostelForm.markAllAsTouched();
      return;
    }
    this.hostelServices.saveHostelRoomList(this.hostelForm.value).subscribe((response) => {
      // @ts-ignore
      if(response.success == 1){
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Room Type Saved',
          showConfirmButton: false,
          timer: 1000
        });
        this.hostelForm.reset();
      }
    });
  }

  updateHostelRooms(){
    if(!this.hostelForm.valid){
      this.hostelForm.markAllAsTouched();
      return;
    }
    this.hostelServices.updateHostelRoomList(this.hostelForm.value).subscribe((response) => {
      // @ts-ignore
      if(response.success == 1){
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Room Updated',
          showConfirmButton: false,
          timer: 1000
        });
        this.cancelUpdate();
      }
    });
  }

  editHostelRooms(data){
    this.hostelForm.patchValue(data);
    this.isUpdatable = true;
  }

  deleteHostelRooms(data){

    Swal.fire({
      title: 'Confirmation',
      text: 'Do you sure to delete room ?',
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete It!'
    }).then((result) => {
      if(result.isConfirmed){
        this.hostelServices.deleteHostelRoomList(data.id).subscribe((response) => {
          // @ts-ignore
          if(response.success == 1){
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Room Deleted',
              showConfirmButton: false,
              timer: 1000
            });
          }
        });
      }
    });

  }

  cancelUpdate(){
    this.hostelForm.reset();
    this.isUpdatable = false;
  }

}
