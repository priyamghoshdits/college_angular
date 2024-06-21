import {Component} from '@angular/core';
import {MemberService} from "../../../services/member.service";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import {NgForOf, NgIf} from "@angular/common";
import {NgxPaginationModule} from "ngx-pagination";
import {DepartmentService} from "../../../services/department.service";
import Swal from "sweetalert2";
import {RolesAndPermissionService} from "../../../services/roles-and-permission.service";

@Component({
    selector: 'app-department',
    standalone: true,
    imports: [
        FormsModule,
        MatIconModule,
        NgForOf,
        NgxPaginationModule,
        ReactiveFormsModule,
        NgIf
    ],
    templateUrl: './staff-experience.component.html',
    styleUrl: './staff-experience.component.scss'
})

export class StaffExperienceComponent {
    staffExperienceForm: FormGroup;
    memberList: any[];
    departmentList: any[];
    isUpdatable = false;
    p: number;
    rolesAndPermission: any[] = [];
    permission: any[] = [];
    experienceProof: any = '';
    staffExperienceList: any[];

    constructor(private memberService: MemberService, private departmentService: DepartmentService, private roleAndPermissionService: RolesAndPermissionService) {

        this.staffExperienceForm = new FormGroup({
            id: new FormControl(null),
            staff_id: new FormControl(null, [Validators.required]),
            organization: new FormControl(null, [Validators.required]),
            designation: new FormControl(null, [Validators.required]),
            experience: new FormControl(null, [Validators.required]),
            to_date: new FormControl(null, [Validators.required]),
            from_date: new FormControl(null, [Validators.required]),
            experience_proof: new FormControl(null),
        });

        this.memberService.getStaffExperienceListener().subscribe((response) => {
            this.staffExperienceList = response;
        })
        this.staffExperienceList = this.memberService.getStaffExperienceList();

        this.memberService.getMemberListener().subscribe((response) => {
            this.memberList = response;
        });
        this.memberList = this.memberService.getMemberList();

        this.roleAndPermissionService.getRolesAndPermissionListener().subscribe((response) => {
            this.rolesAndPermission = response;
            this.permission = this.rolesAndPermission.find(x => x.name == 'LEAVE TYPE').permission;
        });

        this.rolesAndPermission = this.roleAndPermissionService.getRolesAndPermission();

        if (this.rolesAndPermission.length > 0) {
            this.permission = this.rolesAndPermission.find(x => x.name == 'LEAVE TYPE').permission;
        }
    }

    uploadExperienceProof(e) {
        this.experienceProof = e.target.files[0];
    }

    saveStaffExperience() {
        if (!this.staffExperienceForm.valid) {
            this.staffExperienceForm.markAllAsTouched();
            return;
        }

        const formData = new FormData();
        formData.append('staff_id', this.staffExperienceForm.value.staff_id);
        formData.append('designation', this.staffExperienceForm.value.designation);
        formData.append('experience', this.staffExperienceForm.value.experience);
        formData.append('organization', this.staffExperienceForm.value.organization);
        formData.append('from_date', this.staffExperienceForm.value.from_date);
        formData.append('to_date', this.staffExperienceForm.value.to_date);
        formData.append('experience_proof', this.experienceProof);


        this.memberService.saveStaffExperience(formData).subscribe((response: any) => {
            if (response.success == 1) {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Staff Experience Saved',
                    showConfirmButton: false,
                    timer: 1000
                });
                this.staffExperienceForm.reset();
            }
        })
    }

    editStaffExperience(data) {
        this.staffExperienceForm.patchValue(data);
        this.isUpdatable = true;
    }

    deleteStaffExperience(data) {
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
                this.memberService.deleteStaffExperience(data.id).subscribe((response: any) => {
                    if(response.success == 1){
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'Staff Experience Deleted',
                            showConfirmButton: false,
                            timer: 1000
                        });
                    }
                })
            }
        });

    }

    updateStaffExperience() {

      if (!this.staffExperienceForm.valid) {
        this.staffExperienceForm.markAllAsTouched();
        return;
      }

      const formData = new FormData();
      formData.append('id', this.staffExperienceForm.value.id);
      formData.append('staff_id', this.staffExperienceForm.value.staff_id);
      formData.append('designation', this.staffExperienceForm.value.designation);
      formData.append('experience', this.staffExperienceForm.value.experience);
      formData.append('organization', this.staffExperienceForm.value.organization);
      formData.append('from_date', this.staffExperienceForm.value.from_date);
      formData.append('to_date', this.staffExperienceForm.value.to_date);
      formData.append('experience_proof', this.experienceProof);

      this.memberService.updateStaffExperience(formData).subscribe((response: any) => {
        if(response.success == 1){
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Staff Experience updated',
            showConfirmButton: false,
            timer: 1000
          });
          this.cancelUpdate();
        }
      })
    }

    cancelUpdate() {
        this.isUpdatable = false;
        this.staffExperienceForm.reset();
    }

}
