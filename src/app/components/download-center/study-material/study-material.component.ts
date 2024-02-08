import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";
import {NgbTooltip} from "@ng-bootstrap/ng-bootstrap";
import {environment} from "../../../../environments/environment";
import {DownloadCenterService} from "../../../services/download-center.service";
import {RolesAndPermissionService} from "../../../services/roles-and-permission.service";

@Component({
  selector: 'app-study-material',
  standalone: true,
    imports: [
        NgForOf,
        NgbTooltip
    ],
  templateUrl: './study-material.component.html',
  styleUrl: './study-material.component.scss'
})
export class StudyMaterialComponent {
    public FILE_URL = environment.FILE_URL;
    studyMaterialList: any[];
    constructor(private downloadCenterService: DownloadCenterService, private roleAndPermissionService: RolesAndPermissionService) {
        this.downloadCenterService.getStudyMaterialListListener().subscribe((response) => {
            this.studyMaterialList = response;
        });
        this.studyMaterialList = this.downloadCenterService.getStudyMaterialList();

    }
}
