import { NgForOf, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { MemberService } from 'src/app/services/member.service';
import { RolesAndPermissionService } from 'src/app/services/roles-and-permission.service';
import Swal from 'sweetalert2';
import { MatIconModule } from "@angular/material/icon";
import { NgSelectModule } from '@ng-select/ng-select';

@Component({
  selector: 'app-promotion',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NgIf,
    NgForOf,
    NgxPaginationModule,
    MatIconModule,
    NgSelectModule
  ],
  templateUrl: './promotion.component.html',
  styleUrl: './promotion.component.scss'
})
export class PromotionComponent {
  promotionForm: FormGroup;
  promotionFile: any = null;
  isUpdatable: any = false;
  memberList: any[];
  rolesAndPermission: any[] = [];
  permission: any[] = [];
  promotionList: any[];
  p: number;


  constructor(private memberService: MemberService, private roleAndPermissionService: RolesAndPermissionService) {
    this.promotionForm = new FormGroup({
      id: new FormControl(null),
      staff_id: new FormControl(null, [Validators.required]),
      promotion_date: new FormControl(null, [Validators.required]),
      from: new FormControl(null, [Validators.required]),
      to: new FormControl(null, [Validators.required]),
      promotion_file: new FormControl(null)
    });

    this.memberService.getpromotionListListener().subscribe((response) => {
      this.promotionList = response;
      console.log(response);
    });
    this.promotionList = this.memberService.getPromotionList();

    this.memberService.getMemberListener().subscribe((response) => {
      this.memberList = response;
    });
    this.memberList = this.memberService.getMemberList();

    this.roleAndPermissionService.getRolesAndPermissionListener().subscribe((response) => {
      this.rolesAndPermission = response;
      this.permission = this.rolesAndPermission.find(x => x.name == 'STAFF PROMOTION').permission;
    });

    this.rolesAndPermission = this.roleAndPermissionService.getRolesAndPermission();

    if (this.rolesAndPermission.length > 0) {
      this.permission = this.rolesAndPermission.find(x => x.name == 'STAFF PROMOTION').permission;
    }
  }


  uploadPromotionFile(evenet) {
    this.promotionFile = evenet.target.files[0];
  }

  savePromotionForm() {
    if (!this.promotionForm.valid) {
      this.promotionForm.markAllAsTouched();
      return;
    }

    const formData = new FormData();
    formData.append('staff_id', this.promotionForm.value.staff_id);
    formData.append('from', this.promotionForm.value.from);
    formData.append('to', this.promotionForm.value.to);
    formData.append('promotion_date', this.promotionForm.value.promotion_date);
    formData.append('file', this.promotionFile);

    this.memberService.savePromotion(formData).subscribe((response: any) => {
      if (response.success == 1) {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Staff Promotion Saved',
          showConfirmButton: false,
          timer: 1000
        });
        this.promotionForm.reset();
      }
    })
  }


  editPromotion(record) {
    this.promotionForm.patchValue(record);
    this.isUpdatable = true;
  }

  updatePromotionForm() {
    if (!this.promotionForm.valid) {
      this.promotionForm.markAllAsTouched();
      return;
    }

    const formData = new FormData();

    formData.append('id', this.promotionForm.value.id);
    formData.append('staff_id', this.promotionForm.value.staff_id);
    formData.append('from', this.promotionForm.value.from);
    formData.append('to', this.promotionForm.value.to);
    formData.append('promotion_date', this.promotionForm.value.promotion_date);
    formData.append('file', this.promotionFile);

    this.memberService.updatePromotion(formData).subscribe((response: any) => {
      if (response.success == 1) {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Staff Promotion updated',
          showConfirmButton: false,
          timer: 1000
        });
        this.promotionForm.reset();
      }
    })
  }

  deletePromotion(record) {
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
        this.memberService.deletePromotion(record.id).subscribe((response: any) => {
          if (response.success == 1) {
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Promotion Deleted',
              showConfirmButton: false,
              timer: 1000
            });
          }
        })
      }
    });
  }

  cancelUpdate() {
    this.isUpdatable = false;
    this.promotionForm.reset();
  }
}
