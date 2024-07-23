import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatIconModule } from "@angular/material/icon";
import { NgForOf, NgIf } from "@angular/common";
import { NgxPaginationModule } from "ngx-pagination";
import { SubjectService } from "../../../services/subject.service";
import { RolesAndPermissionService } from "../../../services/roles-and-permission.service";
import Swal from "sweetalert2";
import { cloneDeep } from 'lodash';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../../environments/environment";
import { SessionService } from 'src/app/services/session.service';

@Component({
    selector: 'app-erp-settings',
    standalone: true,
    imports: [
        FormsModule,
        MatIconModule,
        NgForOf,
        NgIf,
        NgxPaginationModule,
        ReactiveFormsModule
    ],
    templateUrl: './erp-settings.component.html',
    styleUrl: './erp-settings.component.scss'
})
export class ErpSettingsComponent implements OnInit {
    public BASE_API_URL = environment.BASE_API_URL;
    public FILE_URL = environment.FILE_URL;
    erpForm: FormGroup;
    semesterList: any[];
    cloneSemesterList: any[];
    rolesAndPermission: any[] = [];
    permission: any[] = [];
    courseList: any[];
    tempSem = [];
    p: number;
    isUpdatable = false;
    sessionList: any[];

    constructor(private http: HttpClient
        , private subjectService: SubjectService
        , private roleAndPermissionService: RolesAndPermissionService
        , private sessionService: SessionService
    ) {
        this.erpForm = new FormGroup({
            id: new FormControl(null),
            title: new FormControl(null, [Validators.required]),
            // fav_icon: new FormControl(null, [Validators.required]),
            session_id: new FormControl(null, [Validators.required])
        });

        this.roleAndPermissionService.getRolesAndPermissionListener().subscribe((response) => {
            this.rolesAndPermission = response;
            this.permission = this.rolesAndPermission.find(x => x.name == 'COURSE').permission;
        });
        this.rolesAndPermission = this.roleAndPermissionService.getRolesAndPermission();
        if (this.rolesAndPermission.length > 0) {
            this.permission = this.rolesAndPermission.find(x => x.name == 'COURSE').permission;
        }

        this.sessionService.getSessionListener().subscribe((response) => {
            this.sessionList = response;
        });
        this.sessionList = this.sessionService.getSessionList();

    }

    ngOnInit(): void {
        this.http.get(this.BASE_API_URL + '/getErpSettings', this.erpForm.value).subscribe((response: any) => {
            this.erpForm.patchValue(response.data);
        });
    }

    saveErpForm() {
        this.http.post(this.BASE_API_URL + '/updateErpSettings', this.erpForm.value).subscribe((response: any) => {

            if (response.success == 1) {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'ERP Setting saved.',
                    showConfirmButton: false,
                    timer: 1000
                }).then(() => {
                    localStorage.removeItem("session_id");
                    localStorage.setItem("session_id", JSON.stringify(response.data.session_id));
                    window.location.reload();
                });
            }

        });
    }
}
