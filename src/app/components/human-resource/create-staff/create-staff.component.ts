import { Component } from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import {DatePipe, NgForOf, NgIf} from "@angular/common";
import {
    NgbCollapse,
    NgbDateStruct,
    NgbInputDatepicker,
    NgbNav, NgbNavChangeEvent,
    NgbNavContent, NgbNavItem,
    NgbNavLink, NgbNavLinkBase, NgbNavOutlet,
    NgbTimepicker
} from "@ng-bootstrap/ng-bootstrap";
import {NgbDate, NgbCalendar, NgbDatepickerConfig} from '@ng-bootstrap/ng-bootstrap';
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {MatInputModule} from "@angular/material/input";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {NgxPaginationModule} from "ngx-pagination";
import {MemberService} from "../../../services/member.service";
import {NgxDropzoneChangeEvent, NgxDropzoneModule} from "ngx-dropzone";
import {ImageService} from "../../../services/image.service";
import Swal from "sweetalert2";
import {DepartmentService} from "../../../services/department.service";
import {DesignationService} from "../../../services/designation.service";
import {CustomFilterPipe} from "../../../../../custom-filter.pipe";
import {UserTypeService} from "../../../services/user-type.service";
import {CommonService} from "../../../services/common.service";
import {RolesAndPermissionService} from "../../../services/roles-and-permission.service";

@Component({
  selector: 'app-create-staff',
  standalone: true,
    imports: [
        FormsModule,
        MatIconModule,
        NgForOf,
        NgbTimepicker,
        ReactiveFormsModule,
        NgbInputDatepicker,
        MatDatepickerModule,
        MatNativeDateModule,
        MatInputModule,
        MatSlideToggleModule,
        NgbNav,
        NgbNavContent,
        NgbNavLink,
        NgbNavLinkBase,
        NgbNavItem,
        NgbNavOutlet,
        NgbCollapse,
        NgxPaginationModule,
        NgxDropzoneModule,
        CustomFilterPipe,
        NgIf
    ],
  templateUrl: './create-staff.component.html',
  styleUrl: './create-staff.component.scss'
})
export class CreateStaffComponent {
    staffCreationForm: FormGroup;
    model      : NgbDateStruct;
    today = this.calendar.getToday();
    public active = 1;
    memberList : any[];
    categoryList : any[];
    designationList : any[];
    userTypeList : any[];
    departmentList : any[];
    isUpdateable = false;
    searchItem: string;
    rolesAndPermission: any[] = [];
    permission: any[] = [];

    constructor(private departmentService: DepartmentService
                , private calendar: NgbCalendar, private memberService: MemberService
                , private imageService: ImageService, private designationService: DesignationService
                , private userTypeService: UserTypeService, private commonService: CommonService
                , private roleAndPermissionService: RolesAndPermissionService) {
        this.staffCreationForm = new FormGroup({
            id: new FormControl(null),
            identification_no: new FormControl(null),
            first_name: new FormControl(null, [Validators.required]),
            middle_name: new FormControl(null),
            last_name: new FormControl(null, [Validators.required]),
            gender: new FormControl(null, [Validators.required]),
            dob: new FormControl(null, [Validators.required]),
            date_of_joining: new FormControl(null, [Validators.required]),
            image: new FormControl(null),
            mobile_no: new FormControl(null, [Validators.required]),
            emergency_phone_number: new FormControl(null, [Validators.required]),
            material_status: new FormControl(null, [Validators.required]),
            work_experience: new FormControl(null, [Validators.required]),
            qualification: new FormControl(null, [Validators.required]),
            current_address: new FormControl(null, [Validators.required]),
            permanent_address: new FormControl(null, [Validators.required]),
            religion: new FormControl(null),
            blood_group: new FormControl(null),
            category_id: new FormControl(null, [Validators.required]),
            user_type_id: new FormControl(null, [Validators.required]),
            email: new FormControl(null, [Validators.required, Validators.email]),
            department_id: new FormControl(null, [Validators.required]),
            designation_id: new FormControl(null, [Validators.required]),
            epf_number: new FormControl(null),
            basic_salary: new FormControl(null),
            location: new FormControl(null),
            contract_type: new FormControl(null, [Validators.required]),
            bank_account_number: new FormControl(null),
            bank_name: new FormControl(null),
            ifsc_code: new FormControl(null),
            bank_branch_name: new FormControl(null),
            password: new FormControl(null),
        });

        this.memberService.getMemberListener().subscribe((response) => {
            this.memberList = response;
        });
        this.memberList = this.memberService.getMemberList();

        this.memberService.getCategoryListener().subscribe((response) => {
           this.categoryList = response;
        });
        this.categoryList = this.memberService.getCategoryList();

        this.userTypeService.getUserTypeListener().subscribe((response) => {
            this.userTypeList = response;
        })
        this.userTypeList = this.userTypeService.getUserTypeList();

        this.departmentService.getDepartmentListListener().subscribe((response) => {
            this.departmentList = response;
        });
        this.departmentList = this.departmentService.getDepartmentList();

        this.designationService.getDesignationListListener().subscribe((response) => {
            this.designationList = response;
        });
        this.designationList = this.designationService.getDesignationList();

        this.roleAndPermissionService.getRolesAndPermissionListener().subscribe((response) => {
            this.rolesAndPermission = response;
            this.permission = this.rolesAndPermission.find(x => x.name == 'STAFF').permission;
        });
        this.rolesAndPermission = this.roleAndPermissionService.getRolesAndPermission();
        if(this.rolesAndPermission.length > 0){
            this.permission = this.rolesAndPermission.find(x => x.name == 'STAFF').permission;
        }
    }
    activeTab(data){
        this.active = data;
    }

    onSelect1(event) {
        let file;
        file = event.target.files[0];
        const formData = new FormData();
        formData.append("image", file);
        // @ts-ignore
        formData.append("p_image", this.staffCreationForm.value.id? this.staffCreationForm.value.id:null);
        this.imageService.uploadProfilePic(formData).subscribe();
        this.staffCreationForm.patchValue({image: file['name']});
    }
    saveMember(){
        if(!this.staffCreationForm.valid){
            this.staffCreationForm.markAllAsTouched();
            return;
        }
        this.memberService.saveMember(this.staffCreationForm.value).subscribe((response: any) => {
            if(response.success == 1){
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Member Save',
                    showConfirmButton: false,
                    timer: 1000
                });
                this.staffCreationForm.reset();
            }
        })
    }


    editMember(data){
        this.staffCreationForm.patchValue(data);
        this.active = 1;
        this.isUpdateable = true;
    }

    deleteMember(record){
        Swal.fire({
            title: 'Confirmation',
            text: 'Do you sure to delete ?',
            icon: 'info',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete It!'
        }).then((result) => {
            if(result.isConfirmed){
                this.memberService.deleteStaff(record.id).subscribe((response: any) => {
                    if(response.success == 1){
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'Member Deleted Successfully',
                            showConfirmButton: false,
                            timer: 1000
                        });
                    }
                })
            }
        });
    }

    cancelUpdate(){
        this.staffCreationForm.reset();
        this.isUpdateable = false;
    }

    updateMember(){
        if(!this.staffCreationForm.valid){
            this.staffCreationForm.markAllAsTouched();
            return;
        }
        this.memberService.updateMember(this.staffCreationForm.value).subscribe((response) => {
            // @ts-ignore
            if(response.success == 1){
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Member Update',
                    showConfirmButton: false,
                    timer: 1000
                });
                this.cancelUpdate();
            }
        })
    }

    checkUniqueId(){
        this.commonService.checkId(this.staffCreationForm.value.identification_no).subscribe((response: any) => {
            if(response.success == 0){
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: 'Duplicate ID',
                    showConfirmButton: false,
                    timer: 1000
                });
                this.staffCreationForm.controls['identification_no'].reset();
            }
        })
    }

}
