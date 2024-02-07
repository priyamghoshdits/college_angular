import { Component } from '@angular/core';
import {MatIconModule} from "@angular/material/icon";
import {NgForOf, NgIf} from "@angular/common";
import {NgxPaginationModule} from "ngx-pagination";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {HostelService} from "../../../services/hostel.service";
import Swal from "sweetalert2";
import {RolesAndPermissionService} from "../../../services/roles-and-permission.service";

@Component({
  selector: 'app-room-type',
  standalone: true,
    imports: [
        MatIconModule,
        NgForOf,
        NgxPaginationModule,
        ReactiveFormsModule,
        NgIf
    ],
  templateUrl: './room-type.component.html',
  styleUrl: './room-type.component.scss'
})
export class RoomTypeComponent {
    roomTypeForm: FormGroup;
    roomTypeList: any[];
    isUpdatable = false;
    p: number;
    rolesAndPermission: any[] = [];
    permission: any[] = [];

    constructor(private hostelService: HostelService, private roleAndPermissionService: RolesAndPermissionService) {
        this.roomTypeForm = new FormGroup({
            id: new FormControl(null),
            name: new FormControl(null, [Validators.required]),
            description: new FormControl(null, [Validators.required]),
        });
        this.hostelService.getRoomTypeListListener().subscribe((response) => {
            this.roomTypeList = response;
        });
        this.roomTypeList = this.hostelService.getRoomTypes();
        this.roleAndPermissionService.getRolesAndPermissionListener().subscribe((response) => {
            this.rolesAndPermission = response;
            this.permission = this.rolesAndPermission.find(x => x.name == 'ROOM TYPE').permission;
        });
        this.rolesAndPermission = this.roleAndPermissionService.getRolesAndPermission();
        if(this.rolesAndPermission.length > 0){
            this.permission = this.rolesAndPermission.find(x => x.name == 'ROOM TYPE').permission;
        }
    }


    saveRoomType(){
        this.hostelService.saveRoomType(this.roomTypeForm.value).subscribe((response) => {
            // @ts-ignore
            if(response.success == 1){
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Room Type Saved',
                    showConfirmButton: false,
                    timer: 1000
                });
                this.roomTypeForm.reset();
            }
        })
    }

    updateRoomType(){
        this.hostelService.updateRoomType(this.roomTypeForm.value).subscribe((response) => {
            // @ts-ignore
            if(response.success == 1){
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Room Type Updated',
                    showConfirmButton: false,
                    timer: 1000
                });
                this.cancelUpdate();
            }
        })
    }

    cancelUpdate(){
        this.roomTypeForm.reset();
        this.isUpdatable = false;
    }

    editRoomType(data){
        this.roomTypeForm.patchValue(data);
        this.isUpdatable = true;
    }

    deleteRoomType(data){

        Swal.fire({
            title: 'Confirmation',
            text: 'Do you sure to delete Room Type ?',
            icon: 'info',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete It!'
        }).then((result) => {
            if(result.isConfirmed){
                this.hostelService.deleteRoomType(data.id).subscribe((response) => {
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

}
