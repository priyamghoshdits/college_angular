import { Component } from '@angular/core';
import {InventoryService} from "../../../services/inventory.service";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import {NgForOf, NgIf} from "@angular/common";
import {NgxPaginationModule} from "ngx-pagination";
import {UserTypeService} from "../../../services/user-type.service";
import {MemberService} from "../../../services/member.service";
import Swal from "sweetalert2";
import {NgbNav, NgbNavItem, NgbNavLink, NgbNavLinkBase, NgbNavOutlet} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-issue-item',
  standalone: true,
  imports: [
    FormsModule,
    MatIconModule,
    NgForOf,
    NgIf,
    NgxPaginationModule,
    ReactiveFormsModule,
    NgbNav,
    NgbNavLink,
    NgbNavLinkBase,
    NgbNavItem,
    NgbNavOutlet
  ],
  templateUrl: './issue-item.component.html',
  styleUrl: './issue-item.component.scss'
})
export class IssueItemComponent {
  issueItemsForm: FormGroup;
  userTypeList: any[];
  staffList: any[];
  userList: any[];
  itemCategoryList: any[];
  itemList: any[];
  issueItemList: any[];
  active = 1;
  user: {
    user_type_id: number;
  };
  constructor(private inventoryService: InventoryService, private userTypeService: UserTypeService
              , private memberService: MemberService) {
    this.user = JSON.parse(localStorage.getItem('user') || '{}');
    this.issueItemsForm = new FormGroup({
      id: new FormControl(null),
      user_type_id: new FormControl(null, [Validators.required]),
      item_type_id: new FormControl(null, [Validators.required]),
      issue_to: new FormControl(null, [Validators.required]),
      issue_by: new FormControl(null, [Validators.required]),
      issue_date: new FormControl(null, [Validators.required]),
      return_date: new FormControl(null, [Validators.required]),
      quantity: new FormControl(null, [Validators.required]),
      inventory_item_id: new FormControl(null, [Validators.required]),
      available_quantity: new FormControl(null),
      description: new FormControl(null),
    });
    this.userTypeService.getUserTypeListener().subscribe((response) => {
      this.userTypeList = response;
    });
    this.userTypeList = this.userTypeService.getUserTypeList();
    this.memberService.getMemberListener().subscribe((response) => {
      this.staffList = response;
    });
    this.staffList = this.memberService.getMemberList();
    this.inventoryService.getItemCategoryListListener().subscribe((response) => {
      this.itemCategoryList = response;
    });
    this.itemCategoryList = this.inventoryService.getItemCategory();
    this.inventoryService.getIssueItemListListener().subscribe((response) => {
      this.issueItemList = response;
    });
    this.issueItemList = this.inventoryService.getIssueItem();

    if(this.user.user_type_id != 1){
      this.issueItemsForm.patchValue({user_type_id: this.user.user_type_id})
    }
  }

  getItems(){
    this.inventoryService.getItemListByItemCategory(this.issueItemsForm.value.item_type_id).subscribe((response: any) => {
        this.itemList = response.data;
        this.issueItemsForm.patchValue({available_quantity: null});
    })
  }

  activeTab(data){
    this.active = data;
  }

  showQuantity(){
    if(this.issueItemsForm.value.inventory_item_id == 'null'){
      this.issueItemsForm.patchValue({available_quantity: null});
      return;
    }
    this.inventoryService.getQuantityByInventoryTypeId(this.issueItemsForm.value.inventory_item_id).subscribe((response: any) => {
      this.issueItemsForm.patchValue({available_quantity: response.data});
    })
  }

  deleteIssueItem(data){
    Swal.fire({
      title: 'Confirmation',
      text: 'Do you sure to delete Issue Item ?',
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete It!'
    }).then((result) => {
      if(result.isConfirmed){
        this.inventoryService.deleteIssueItem(data.id).subscribe((response: any) => {
          if(response.success == 1){
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Issue Item Deleted',
              showConfirmButton: false,
              timer: 1000
            });
          }
        })
      }
    });
  }

  returnItem(data){
    Swal.fire({
      title: 'Confirmation',
      text: 'Do you sure to return ?',
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, return It!'
    }).then((result) => {
      if(result.isConfirmed){
        this.inventoryService.updateStatus(data.id).subscribe((response: any) => {
        });
      }
    });
  }

  getUsers(){
    this.userTypeService.getUsersByUserType(this.issueItemsForm.value.user_type_id).subscribe((response: any) => {
      this.userList = response.data;
    })
  }

  saveIssueItem(){
    // console.log(this.user.user_type_id);
    if(this.user.user_type_id != 1){
      this.issueItemsForm.patchValue({user_type_id: this.user.user_type_id})
    }
    // return;
    if(!this.issueItemsForm.valid){
      this.issueItemsForm.markAllAsTouched();
      return;
    }

    if(this.issueItemsForm.value.available_quantity < this.issueItemsForm.value.quantity){
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Quantity cannot be greater than available',
        showConfirmButton: false,
        timer: 1000
      });
      return;
    }

    this.inventoryService.saveIssueItem(this.issueItemsForm.value).subscribe((response: any) => {
      if(response.success == 1){
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Issue Item Saved',
          showConfirmButton: false,
          timer: 1000
        });
        this.issueItemsForm.reset();
      }
    })
  }

}
