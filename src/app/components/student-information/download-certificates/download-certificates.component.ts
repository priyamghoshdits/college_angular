import { Component } from '@angular/core';
import {CustomFilterPipe} from "../../../../../custom-filter.pipe";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import {NgForOf, NgIf} from "@angular/common";
import {SessionService} from "../../../services/session.service";
import {CertificateService} from "../../../services/certificate.service";
import {environment} from "../../../../environments/environment";

@Component({
  selector: 'app-download-certificates',
  standalone: true,
    imports: [
        CustomFilterPipe,
        FormsModule,
        MatIconModule,
        NgForOf,
        NgIf,
        ReactiveFormsModule
    ],
  templateUrl: './download-certificates.component.html',
  styleUrl: './download-certificates.component.scss'
})
export class DownloadCertificatesComponent {
    public FILE_URL = environment.FILE_URL;
    uploadCertificateForm: FormGroup;
    filteredStudentList: any[] = [];
    certificateTypeList: any[];
    searchItem: string;
    constructor(private certificateService: CertificateService) {
        this.uploadCertificateForm = new FormGroup({
            id: new FormControl(null),
            certificate_type_id: new FormControl(null, [Validators.required]),
        });

        this.certificateService.getCertificateTypeListListener().subscribe((response) => {
            this.certificateTypeList = response;
        });
        this.certificateTypeList = this.certificateService.getCertificateType();

    }

    getData(){

    }
}
