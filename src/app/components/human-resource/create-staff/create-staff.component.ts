import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatIconModule } from "@angular/material/icon";
import { DatePipe, NgForOf, NgIf } from "@angular/common";
import {
    NgbCollapse,
    NgbDateStruct,
    NgbInputDatepicker,
    NgbNav, NgbNavChangeEvent,
    NgbNavContent, NgbNavItem,
    NgbNavLink, NgbNavLinkBase, NgbNavOutlet,
    NgbTimepicker
} from "@ng-bootstrap/ng-bootstrap";
import { NgbDate, NgbCalendar, NgbDatepickerConfig } from '@ng-bootstrap/ng-bootstrap';
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule } from "@angular/material/core";
import { MatInputModule } from "@angular/material/input";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { NgxPaginationModule } from "ngx-pagination";
import { MemberService } from "../../../services/member.service";
import { NgxDropzoneChangeEvent, NgxDropzoneModule } from "ngx-dropzone";
import { ImageService } from "../../../services/image.service";
import Swal from "sweetalert2";
import { DepartmentService } from "../../../services/department.service";
import { DesignationService } from "../../../services/designation.service";
import { CustomFilterPipe } from "../../../../../custom-filter.pipe";
import { UserTypeService } from "../../../services/user-type.service";
import { CommonService } from "../../../services/common.service";
import { RolesAndPermissionService } from "../../../services/roles-and-permission.service";
import { FranchiseService } from "../../../services/franchise.service";
import {
    ModalDismissReasons,
    NgbModal,
    NgbTooltip
} from "@ng-bootstrap/ng-bootstrap";
import {RouterLink} from "@angular/router";

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
        NgIf,
        RouterLink,
    ],
    templateUrl: './create-staff.component.html',
    styleUrl: './create-staff.component.scss'
})
export class CreateStaffComponent {
    staffCreationForm: FormGroup;
    model: NgbDateStruct;
    today = this.calendar.getToday();
    public active = 1;
    memberList: any[];
    categoryList: any[];
    designationList: any[];
    userTypeList: any[];
    departmentList: any[];
    isUpdateable = false;
    searchItem: string;
    rolesAndPermission: any[] = [];
    permission: any[] = [];
    franchiseList: any[];
    showProfile: any = null;
    user: {
        user_type_id: number;
    };

    dobCertificateproof: any = null;
    joiningLetterProof: any = null;
    profileImage: any = null;
    bloodGroupProof: any = null;
    casteCertificateProof: any = null;
    aadhaarProof: any = null;
    panProof: any = null;

    constructor(private departmentService: DepartmentService, private modalService: NgbModal
        , private calendar: NgbCalendar, private memberService: MemberService
        , private imageService: ImageService, private designationService: DesignationService
        , private userTypeService: UserTypeService, private commonService: CommonService
        , private roleAndPermissionService: RolesAndPermissionService, private franchiseService: FranchiseService) {
        this.user = JSON.parse(localStorage.getItem('user') || '{}');
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
            pan_number: new FormControl(null),
            epf_number: new FormControl(null),
            franchise_id: new FormControl(null),
            gross_salary: new FormControl(null),
            location: new FormControl(null),
            contract_type: new FormControl(null, [Validators.required]),
            bank_account_number: new FormControl(null),
            bank_name: new FormControl(null),
            ifsc_code: new FormControl(null),
            bank_branch_name: new FormControl(null),
            password: new FormControl(null),
        });

        this.franchiseService.getFranchiseListener().subscribe((response) => {
            this.franchiseList = response;
        });
        this.franchiseList = this.franchiseService.getFranchiseList();
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
        if (this.rolesAndPermission.length > 0) {
            this.permission = this.rolesAndPermission.find(x => x.name == 'STAFF').permission;
        }
    }
    activeTab(data) {
        this.active = data;
    }

    openCustomModal(content) {
        this.modalService.open(content, { size: 'xl' });
    }

    showMember(data) {
        this.showProfile = data;
    }

    onSelect1(event) {
        let file;
        file = event.target.files[0];
        const formData = new FormData();
        formData.append("image", file);
        // @ts-ignore
        formData.append("p_image", this.staffCreationForm.value.id ? this.staffCreationForm.value.id : null);
        this.imageService.uploadProfilePic(formData).subscribe();
        this.staffCreationForm.patchValue({ image: file['name'] });
    }



    uploadDobCertificate(e: any) {
        this.dobCertificateproof = e.target.files[0];
    }

    uploadJoiningLetter(e: any) {
        this.joiningLetterProof = e.target.files[0];
    }

    uploadProfileImage(e: any) {
        this.profileImage = e.target.files[0];
    }

    uploadBloodGroupProof(e: any) {
        this.bloodGroupProof = e.target.files[0];
    }

    uploadCasteCertificate(e: any) {
        this.casteCertificateProof = e.target.files[0];
    }

    uploadAadhaar(e: any) {
        this.aadhaarProof = e.target.files[0];
    }

    uploadPan(e: any) {
        this.panProof = e.target.files[0];
    }

    saveMember() {
        if (!this.staffCreationForm.valid) {
            this.staffCreationForm.markAllAsTouched();
            return;
        }

        Swal.fire({
            title: 'Please Wait !',
            html: 'Saving ...', // add html attribute if you want or remove
            allowOutsideClick: false,
            didOpen: () => {
                Swal.showLoading();
            }
        });

        const formData = new FormData();
        formData.append("id", this.staffCreationForm.value.id);
        formData.append("identification_no", this.staffCreationForm.value.identification_no);
        formData.append("first_name", this.staffCreationForm.value.first_name);
        formData.append("middle_name", this.staffCreationForm.value.middle_name);
        formData.append("last_name", this.staffCreationForm.value.last_name);
        formData.append("gender", this.staffCreationForm.value.gender);
        formData.append("dob", this.staffCreationForm.value.dob);
        formData.append("date_of_joining", this.staffCreationForm.value.date_of_joining);
        // formData.append("image", this.staffCreationForm.value.image);
        formData.append("mobile_no", this.staffCreationForm.value.mobile_no);
        formData.append("emergency_phone_number", this.staffCreationForm.value.emergency_phone_number);
        formData.append("material_status", this.staffCreationForm.value.material_status);
        formData.append("work_experience", this.staffCreationForm.value.work_experience);
        formData.append("qualification", this.staffCreationForm.value.qualification);
        formData.append("current_address", this.staffCreationForm.value.current_address);
        formData.append("permanent_address", this.staffCreationForm.value.permanent_address);
        formData.append("religion", this.staffCreationForm.value.religion);
        formData.append("blood_group", this.staffCreationForm.value.blood_group);
        formData.append("category_id", this.staffCreationForm.value.category_id);
        formData.append("user_type_id", this.staffCreationForm.value.user_type_id);
        formData.append("email", this.staffCreationForm.value.email);
        formData.append("department_id", this.staffCreationForm.value.department_id);
        formData.append("designation_id", this.staffCreationForm.value.designation_id);
        formData.append("epf_number", this.staffCreationForm.value.epf_number);
        formData.append("franchise_id", this.staffCreationForm.value.franchise_id);
        formData.append("gross_salary", this.staffCreationForm.value.gross_salary);
        formData.append("location", this.staffCreationForm.value.location);
        formData.append("contract_type", this.staffCreationForm.value.contract_type);
        formData.append("bank_account_number", this.staffCreationForm.value.bank_account_number);
        formData.append("bank_name", this.staffCreationForm.value.bank_name);
        formData.append("ifsc_code", this.staffCreationForm.value.ifsc_code);
        formData.append("bank_branch_name", this.staffCreationForm.value.bank_branch_name);
        formData.append("pan_number", this.staffCreationForm.value.pan_number);
        formData.append("password", this.staffCreationForm.value.password);

        formData.append("aadhaar_card_proof", this.aadhaarProof);
        formData.append("pan_proof", this.panProof);
        formData.append("caste_certificate_proof", this.casteCertificateProof);
        formData.append("blood_group_proof", this.bloodGroupProof);
        formData.append("profile_image", this.profileImage);
        formData.append("joining_letter_proof", this.joiningLetterProof);
        formData.append("dob_proof", this.dobCertificateproof);

        this.memberService.saveMember(formData).subscribe((response: any) => {
            if (response.success == 1) {
                Swal.close();
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Member Save',
                    showConfirmButton: false,
                    timer: 1000
                });
                this.staffCreationForm.reset();
            } else {
                Swal.close();
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: 'Invalid inputs',
                    showConfirmButton: false,
                    timer: 1000
                });
            }
        })
    }


    editMember(data) {
        this.staffCreationForm.patchValue(data);
        this.active = 1;
        this.isUpdateable = true;
    }

    deleteMember(record) {
        Swal.fire({
            title: 'Confirmation',
            text: 'Do you sure to delete ?',
            icon: 'info',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete It!'
        }).then((result) => {
            if (result.isConfirmed) {
                this.memberService.deleteStaff(record.id).subscribe((response: any) => {
                    if (response.success == 1) {
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

    cancelUpdate() {
        this.staffCreationForm.reset();
        this.isUpdateable = false;
    }

    updateMember() {
        if (!this.staffCreationForm.valid) {
            this.staffCreationForm.markAllAsTouched();
            return;
        }
        this.memberService.updateMember(this.staffCreationForm.value).subscribe((response) => {
            // @ts-ignore
            if (response.success == 1) {
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

    checkUniqueId() {
        this.commonService.checkId(this.staffCreationForm.value.identification_no).subscribe((response: any) => {
            if (response.success == 0) {
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
