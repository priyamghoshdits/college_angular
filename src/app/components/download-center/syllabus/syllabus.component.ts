import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";
import {NgbTooltip} from "@ng-bootstrap/ng-bootstrap";
import {environment} from "../../../../environments/environment";
import {DownloadCenterService} from "../../../services/download-center.service";
import {FormsModule} from "@angular/forms";
import {CustomFilterPipe} from "../../../../../custom-filter.pipe";

@Component({
  selector: 'app-syllabus',
  standalone: true,
    imports: [
        NgForOf,
        NgbTooltip,
        FormsModule,
        CustomFilterPipe
    ],
  templateUrl: './syllabus.component.html',
  styleUrl: './syllabus.component.scss'
})
export class SyllabusComponent {
    public FILE_URL = environment.FILE_URL;
    syllabusList: any[];
    searchItem: string;
    constructor(private downloadCenterService: DownloadCenterService) {
        this.downloadCenterService.getSyllabusListListener().subscribe((response) => {
            this.syllabusList = response;
        });
        this.syllabusList = this.downloadCenterService.getSyllabusList();
    }

}
