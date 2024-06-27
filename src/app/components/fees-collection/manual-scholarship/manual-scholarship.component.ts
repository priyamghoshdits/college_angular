import { Component } from '@angular/core';
import {MatIconModule} from "@angular/material/icon";
import {NgForOf, NgIf} from "@angular/common";
import {NgbNav, NgbNavItem, NgbNavLink, NgbNavLinkBase, NgbNavOutlet} from "@ng-bootstrap/ng-bootstrap";
import {NgxPaginationModule} from "ngx-pagination";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {RolesAndPermissionService} from "../../../services/roles-and-permission.service";

@Component({
  selector: 'app-manual-scholarship',
  standalone: true,
  imports: [
    MatIconModule,
    NgForOf,
    NgIf,
    NgbNav,
    NgbNavLink,
    NgbNavLinkBase,
    NgxPaginationModule,
    ReactiveFormsModule,
    FormsModule,
    NgbNavOutlet,
    NgbNavItem
  ],
  templateUrl: './manual-scholarship.component.html',
  styleUrl: './manual-scholarship.component.scss'
})
export class ManualScholarshipComponent {
  paperSettingForm: FormGroup;
  paperSetterArray: any[];
  counter = 0;
  active = 1;
  paperField: any[] = [1];
  rolesAndPermission: any[] = [];
  permission: any[] = [];
  isUpdatable = false;
  constructor(private roleAndPermissionService: RolesAndPermissionService) {
    this.paperSettingForm = new FormGroup({
      id: new FormControl(null),
      from_date: new FormControl(null, [Validators.required]),
      to_date: new FormControl(null, [Validators.required]),
      staff_id: new FormControl(null),
    });

    this.roleAndPermissionService.getRolesAndPermissionListener().subscribe((response) => {
      this.rolesAndPermission = response;
      this.permission = this.rolesAndPermission.find(x => x.name == 'PAPER SETTER').permission;
    });
    this.rolesAndPermission = this.roleAndPermissionService.getRolesAndPermission();
    if (this.rolesAndPermission.length > 0) {
      this.permission = this.rolesAndPermission.find(x => x.name == 'PAPER SETTER').permission;
    }

    this.paperSetterArray = [
      {
        'id': null,
        'student_id': null,
        'type_of_scholarship': null,
        'amount': null,
      }
    ];
  }

  activeTab(data){
    this.active = data;
  }

  fileUpload(event, index){

  }

  addField() {
    this.counter = this.counter + 1;
    this.paperField[this.counter] = [];
    let arr = [
      {
        'id': null,
        'student_id': null,
        'type_of_scholarship': null,
        'amount': null,
      }
    ];
    this.paperSetterArray.push(arr[0]);
  }

}
