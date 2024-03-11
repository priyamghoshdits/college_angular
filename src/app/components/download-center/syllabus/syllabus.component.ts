import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";
import {NgbTooltip} from "@ng-bootstrap/ng-bootstrap";
import {environment} from "../../../../environments/environment";
import {DownloadCenterService} from "../../../services/download-center.service";

@Component({
  selector: 'app-syllabus',
  standalone: true,
    imports: [
        NgForOf,
        NgbTooltip
    ],
  templateUrl: './syllabus.component.html',
  styleUrl: './syllabus.component.scss'
})
export class SyllabusComponent {
    public FILE_URL = environment.FILE_URL;
    syllabusList: any[];
    constructor(private downloadCenterService: DownloadCenterService) {
        this.downloadCenterService.getSyllabusListListener().subscribe((response) => {
            this.syllabusList = response;
        });
        this.syllabusList = this.downloadCenterService.getSyllabusList();
    }

}
