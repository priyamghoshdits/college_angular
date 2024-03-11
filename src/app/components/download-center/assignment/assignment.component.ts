import { Component } from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatIcon, MatIconModule} from "@angular/material/icon";
import {NgForOf, NgIf} from "@angular/common";
import {NgxPaginationModule} from "ngx-pagination";
import {SubjectService} from "../../../services/subject.service";
import {DownloadCenterService} from "../../../services/download-center.service";
import {environment} from "../../../../environments/environment";
import {NgbTooltip} from "@ng-bootstrap/ng-bootstrap";
import {RolesAndPermissionService} from "../../../services/roles-and-permission.service";

@Component({
  selector: 'app-assignment',
  standalone: true,
  imports: [
    FormsModule,
    MatIconModule,
    NgForOf,
    NgxPaginationModule,
    ReactiveFormsModule,
    NgbTooltip,
    NgIf
  ],
  templateUrl: './assignment.component.html',
  styleUrl: './assignment.component.scss'
})
export class AssignmentComponent {
  public FILE_URL = environment.FILE_URL;
  assignmentList: any[];
  constructor(private downloadCenterService: DownloadCenterService) {
    this.downloadCenterService.getAssignmentListListener().subscribe((response) => {
      this.assignmentList = response;
    });
    this.assignmentList = this.downloadCenterService.getAssignmentList();
  }

}
