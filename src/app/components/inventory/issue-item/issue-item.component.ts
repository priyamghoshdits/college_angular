import { Component } from '@angular/core';
import {InventoryService} from "../../../services/inventory.service";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import {NgForOf, NgIf} from "@angular/common";
import {NgxPaginationModule} from "ngx-pagination";
import {UserTypeService} from "../../../services/user-type.service";
import {MemberService} from "../../../services/member.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-issue-item',
  standalone: true,
  imports: [
    FormsModule,
    MatIconModule,
    NgForOf,
    NgIf,
    NgxPaginationModule,
    ReactiveFormsModule
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
  constructor(private inventoryService: InventoryService, private userTypeService: UserTypeService
              , private memberService: MemberService) {
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
  }

  getItems(){
    this.inventoryService.getItemListByItemCategory(this.issueItemsForm.value.item_type_id).subscribe((response: any) => {
        this.itemList = response.data;
    })
  }

  showQuantity(){
    this.inventoryService.getQuantityByInventoryTypeId(this.issueItemsForm.value.item_type_id).subscribe((response: any) => {
      this.issueItemsForm.patchValue({available_quantity: response.data});
    })
  }

  getUsers(){
    this.userTypeService.getUsersByUserType(this.issueItemsForm.value.user_type_id).subscribe((response: any) => {
      this.userList = response.data;
    })
  }

  saveIssueItem(){
    if(!this.issueItemsForm.valid){
      this.issueItemsForm.markAllAsTouched();
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
      }
    })
  }

}
