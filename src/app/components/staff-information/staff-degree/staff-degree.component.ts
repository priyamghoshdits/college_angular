import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { RolesAndPermissionService } from 'src/app/services/roles-and-permission.service';
import { StaffDegreeService } from 'src/app/services/staff-degree.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-staff-degree',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NgIf,
    NgFor,
    MatIconModule
  ],
  templateUrl: './staff-degree.component.html',
  styleUrl: './staff-degree.component.scss'
})
export class StaffDegreeComponent {
  degreeFrom: FormGroup;
  isUpdatable: boolean = false;
  degreeList: any[] = [];
  rolesAndPermission: any[] = [];
  permission: any[] = [];

  constructor(private StaffDegreeService: StaffDegreeService, private roleAndPermissionService: RolesAndPermissionService) {
    this.degreeFrom = new FormGroup({
      id: new FormControl(null),
      name: new FormControl(null, [Validators.required]),
    })

    this.StaffDegreeService.getDegreeListListener().subscribe((response: any) => {
      this.degreeList = response;
    });
    this.degreeList = this.StaffDegreeService.getDegreeList();

    this.roleAndPermissionService.getRolesAndPermissionListener().subscribe((response) => {
      this.rolesAndPermission = response;
      this.permission = this.rolesAndPermission.find(x => x.name == 'DEGREE').permission;
    });

    this.rolesAndPermission = this.roleAndPermissionService.getRolesAndPermission();

    if (this.rolesAndPermission.length > 0) {
      this.permission = this.rolesAndPermission.find(x => x.name == 'DEGREE').permission;
    }
  }

  saveDegreeForm() {
    if (!this.degreeFrom.valid) {
      this.degreeFrom.markAllAsTouched();
      return;
    }
    this.StaffDegreeService.saveDegree(this.degreeFrom.value).subscribe((response: any) => {
      if (response.success == 1) {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Degree saved',
          showConfirmButton: false,
          timer: 1000
        });
        this.degreeFrom.reset();
      }
    })
  }

  updateDegreeForm() {
    if (!this.degreeFrom.valid) {
      this.degreeFrom.markAllAsTouched();
      return;
    }
    this.StaffDegreeService.updateDegree(this.degreeFrom.value).subscribe((response: any) => {
      if (response.success == 1) {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Degree updated',
          showConfirmButton: false,
          timer: 1000
        });
        this.degreeFrom.reset();
      }
    })
  }


  editDegree(data) {
    this.degreeFrom.patchValue(data);
    this.isUpdatable = true;
  }

  deleteDegree(data) {
    Swal.fire({
      title: 'Confirmation',
      text: 'Do you sure to delete?',
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete It!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.StaffDegreeService.deleteDegree(data).subscribe((response) => {
          // @ts-ignore
          if (response.success == 1) {
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Degree Deleted',
              showConfirmButton: false,
              timer: 1000
            });
          }
        })
      }
    });
  }

  cancelUpdate() {
    this.degreeFrom.reset();
  }
}
