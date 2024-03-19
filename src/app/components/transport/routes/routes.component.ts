import { Component } from '@angular/core';
import {TransportService} from "../../../services/transport.service";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import {NgForOf, NgIf} from "@angular/common";
import {NgxPaginationModule} from "ngx-pagination";
import Swal from "sweetalert2";
import {RolesAndPermissionService} from "../../../services/roles-and-permission.service";

@Component({
  selector: 'app-routes',
  standalone: true,
  imports: [
    FormsModule,
    MatIconModule,
    NgForOf,
    NgIf,
    NgxPaginationModule,
    ReactiveFormsModule
  ],
  templateUrl: './routes.component.html',
  styleUrl: './routes.component.scss'
})
export class RoutesComponent {

  routeForm: FormGroup;
  routesList: any[];
  isUpdatable = false;
  p: number;
  rolesAndPermission: any[] = [];
  permission: any[] = [];
  constructor(private transportService: TransportService, private roleAndPermissionService: RolesAndPermissionService) {
    this.routeForm = new FormGroup({
      id: new FormControl(null),
      title: new FormControl(null, [Validators.required]),
      fare: new FormControl(null, [Validators.required,Validators.pattern("^[0-9]*$")]),
    });

    this.roleAndPermissionService.getRolesAndPermissionListener().subscribe((response) => {
      this.rolesAndPermission = response;
      this.permission = this.rolesAndPermission.find(x => x.name == 'ROUTES').permission;
    });
    this.rolesAndPermission = this.roleAndPermissionService.getRolesAndPermission();
    if(this.rolesAndPermission.length > 0){
      this.permission = this.rolesAndPermission.find(x => x.name == 'ROUTES').permission;
    }

    this.transportService.getRoutesListListener().subscribe((response) => {
      this.routesList = response;
    });
    this.routesList = this.transportService.getRouteList();
  }

  saveRoute(){
    if(!this.routeForm.valid){
      this.routeForm.markAllAsTouched();
      return;
    }
    this.transportService.saveRoute(this.routeForm.value).subscribe((response: any) => {
      if(response.success == 1){
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Route Saved',
          showConfirmButton: false,
          timer: 1000
        });
        this.routeForm.reset();
      }
    })
  }

  cancelUpdate(){
    this.routeForm.reset();
    this.isUpdatable = false;
  }

  updateRoute(){
    if(!this.routeForm.valid){
      this.routeForm.markAllAsTouched();
      return;
    }
    this.transportService.updateRoute(this.routeForm.value).subscribe((response: any) => {
      if(response.success == 1){
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Route Updated',
          showConfirmButton: false,
          timer: 1000
        });
        this.cancelUpdate();
      }
    })
  }

  editRoute(data){
    this.routeForm.patchValue(data);
    this.isUpdatable = true;
  }

  deleteRoute(data){
    Swal.fire({
      title: 'Confirmation',
      text: 'Do you sure to delete route ?',
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete It!'
    }).then((result) => {
      if(result.isConfirmed){
        this.transportService.deleteRoute(data.id).subscribe((response: any) => {
          if(response.success == 1){
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Route Deleted',
              showConfirmButton: false,
              timer: 1000
            });
          }
        })
      }
    });
  }

}
