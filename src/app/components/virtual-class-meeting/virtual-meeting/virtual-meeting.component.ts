import { Component } from '@angular/core';
import {MatIconModule} from "@angular/material/icon";
import {NgForOf, NgIf} from "@angular/common";
import {NgxPaginationModule} from "ngx-pagination";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {UserTypeService} from "../../../services/user-type.service";
import {VirtualClassMeetingService} from "../../../services/virtual-class-meeting.service";
import Swal from "sweetalert2";
import {RolesAndPermissionService} from "../../../services/roles-and-permission.service";
import {NgbNav, NgbNavItem, NgbNavLink, NgbNavLinkBase, NgbNavOutlet} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-virtual-meeting',
  standalone: true,
    imports: [
        MatIconModule,
        NgForOf,
        NgIf,
        NgxPaginationModule,
        ReactiveFormsModule,
        NgbNav,
        NgbNavLink,
        NgbNavLinkBase,
        NgbNavOutlet,
        NgbNavItem
    ],
  templateUrl: './virtual-meeting.component.html',
  styleUrl: './virtual-meeting.component.scss'
})
export class VirtualMeetingComponent {
    virtualMeetingForm: FormGroup;
    userTypeList: any[];
    public active = 1;
    virtualMeetingList: any[];
    isUpdatable = false;
    p: number;
    rolesAndPermission: any[] = [];
    permission: any[] = [];
    constructor(private userTypeService: UserTypeService, private virtualClassMeetingService: VirtualClassMeetingService
                ,private roleAndPermissionService: RolesAndPermissionService) {
        this.virtualMeetingForm = new FormGroup({
            id: new FormControl(null),
            user_type_id: new FormControl(null, [Validators.required]),
            topic: new FormControl(null, [Validators.required]),
            platform: new FormControl(null, [Validators.required]),
            link: new FormControl(null, [Validators.required]),
            date_of_meeting: new FormControl(null, [Validators.required]),
            time_of_meeting: new FormControl(null, [Validators.required]),
            meeting_duration: new FormControl(null, [Validators.required]),
            meeting_start_before: new FormControl(null, [Validators.required]),
        });
        this.userTypeService.getUserTypeListener().subscribe((response) => {
            this.userTypeList = response;
        });
        this.userTypeList = this.userTypeService.getUserTypeList();

        this.virtualClassMeetingService.getVirtualMeetingListListener().subscribe((response) => {
            this.virtualMeetingList = response;
        });
        this.virtualMeetingList = this.virtualClassMeetingService.getVirtualMeetingList();

        this.roleAndPermissionService.getRolesAndPermissionListener().subscribe((response) => {
            this.rolesAndPermission = response;
            this.permission = this.rolesAndPermission.find(x => x.name == 'VIRTUAL MEETING').permission;
            if(this.permission[0].permission == 0 && this.permission[1].permission == 0 && this.permission[2].permission == 0){
                this.active = 2;
            }
        });
        this.rolesAndPermission = this.roleAndPermissionService.getRolesAndPermission();
        if(this.rolesAndPermission.length > 0){
            this.permission = this.rolesAndPermission.find(x => x.name == 'VIRTUAL MEETING').permission;
            if(this.permission[0].permission == 0 && this.permission[1].permission == 0 && this.permission[2].permission == 0){
                this.active = 2;
            }
        }

    }

    saveVirtualMeeting(){
        this.virtualClassMeetingService.saveVirtualMeeting(this.virtualMeetingForm.value).subscribe((response: any) => {
            if(response.success == 1){
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Virtual meeting created',
                    showConfirmButton: false,
                    timer: 1000
                });
                this.virtualMeetingForm.reset();
            }
        })
    }

    updateVirtualMeeting(){
        this.virtualClassMeetingService.updateVirtualMeeting(this.virtualMeetingForm.value).subscribe((response: any) => {
            if(response.success == 1){
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Virtual meeting updated',
                    showConfirmButton: false,
                    timer: 1000
                });
                this.cancelUpdate();
            }
        })
    }

    cancelUpdate(){
        this.virtualMeetingForm.reset();
        this.isUpdatable = false;
    }

    activeTab(data){
        this.active = data;
    }

    editVirtualMeeting(data){
        this.virtualMeetingForm.patchValue(data);
        this.isUpdatable = true;
    }

    deleteVirtualMeeting(data){

    }

}
