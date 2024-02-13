import { Component } from '@angular/core';
import {RolesAndPermissionService} from "../../../services/roles-and-permission.service";
import {MatIconModule} from "@angular/material/icon";
import {JsonPipe, NgForOf, NgStyle} from "@angular/common";
import {NgxPaginationModule} from "ngx-pagination";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {
  NgbAccordionBody,
  NgbAccordionButton,
  NgbAccordionCollapse,
  NgbAccordionDirective, NgbAccordionHeader, NgbAccordionItem
} from "@ng-bootstrap/ng-bootstrap";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {CommonService} from "../../../services/common.service";

@Component({
  selector: 'app-roles-and-permission',
  standalone: true,
    imports: [
        MatIconModule,
        NgForOf,
        NgxPaginationModule,
        ReactiveFormsModule,
        NgbAccordionBody,
        NgbAccordionButton,
        NgbAccordionCollapse,
        NgbAccordionDirective,
        NgbAccordionHeader,
        NgbAccordionItem,
        JsonPipe,
        MatSlideToggleModule,
        FormsModule,
        NgStyle
    ],
  templateUrl: './roles-and-permission.component.html',
  styleUrl: './roles-and-permission.component.scss'
})
export class RolesAndPermissionComponent {
  menuManagement: any[];
  rolesAndPermission: any[] = [];

  constructor(private rolesAndPermissionService: RolesAndPermissionService, private commonService:CommonService) {
    this.rolesAndPermissionService.getMenuManagementListener().subscribe((response) => {
      this.menuManagement = response;
    });
    this.menuManagement = this.rolesAndPermissionService.getMenuManagement();

    this.rolesAndPermissionService.getRolesAndPermissionAdminListener().subscribe((response) => {
        this.rolesAndPermission = response;
    });
    this.rolesAndPermission = this.rolesAndPermissionService.getRolesAndPermissionAdmin();
  }

  updatePermission(data){
      this.rolesAndPermissionService.updatePermissions(data.id).subscribe((response) => {

      })
  }

    updatePermissionIndividual(data){
      this.rolesAndPermissionService.updateRoleAndPermissions(data.id).subscribe(() => {

      })
    }

}
