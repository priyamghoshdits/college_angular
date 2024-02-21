import { Component } from '@angular/core';
import {InventoryService} from "../../../services/inventory.service";
import {MatIconModule} from "@angular/material/icon";
import {NgForOf, NgIf} from "@angular/common";
import {NgxPaginationModule} from "ngx-pagination";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import Swal from "sweetalert2";
import {RolesAndPermissionService} from "../../../services/roles-and-permission.service";

@Component({
  selector: 'app-item-type',
  standalone: true,
  imports: [
    MatIconModule,
    NgForOf,
    NgxPaginationModule,
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './item-type.component.html',
  styleUrl: './item-type.component.scss'
})
export class ItemTypeComponent {
  itemCategoryList: any[];
  isUpdatable = false;
  itemCategoryForm: FormGroup;
  p:number;
  rolesAndPermission: any[] = [];
  permission: any[] = [];

  constructor(private inventoryService: InventoryService, private roleAndPermissionService: RolesAndPermissionService) {
    this.itemCategoryForm = new FormGroup({
      id: new FormControl(null),
      name: new FormControl(null, [Validators.required]),
    });
    this.inventoryService.getItemCategoryListListener().subscribe((response) => {
      this.itemCategoryList = response;
    });
    this.itemCategoryList = this.inventoryService.getItemCategory();
    this.roleAndPermissionService.getRolesAndPermissionListener().subscribe((response) => {
      this.rolesAndPermission = response;
      this.permission = this.rolesAndPermission.find(x => x.name == 'INVENTORY ITEM TYPE').permission;
    });
    this.rolesAndPermission = this.roleAndPermissionService.getRolesAndPermission();
    if(this.rolesAndPermission.length > 0){
      this.permission = this.rolesAndPermission.find(x => x.name == 'INVENTORY ITEM TYPE').permission;
    }
  }

  saveItemCategory(){
    if(!this.itemCategoryForm.valid){
      this.itemCategoryForm.markAllAsTouched();
      return;
    }
    this.inventoryService.saveItemCategory(this.itemCategoryForm.value).subscribe((response) => {
      // @ts-ignore
      if(response.success == 1){
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Item Category Saved',
          showConfirmButton: false,
          timer: 1000
        });
        this.itemCategoryForm.reset();
      }
    });
  }

  updateItemCategory(){
    if(!this.itemCategoryForm.valid){
      this.itemCategoryForm.markAllAsTouched();
      return;
    }
    this.inventoryService.updateItemCategory(this.itemCategoryForm.value).subscribe((response) => {
      // @ts-ignore
      if(response.success == 1){
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Item Category Updated',
          showConfirmButton: false,
          timer: 1000
        });
        this.cancelUpdate();
      }
    })
  }

  cancelUpdate(){
    this.itemCategoryForm.reset();
    this.isUpdatable = false;
  }

  editItemCategory(data){
    this.itemCategoryForm.patchValue(data);
    this.isUpdatable = true;
  }

  deleteRoomCategory(data){

    Swal.fire({
      title: 'Confirmation',
      text: 'Do you sure to delete Room Type ?',
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete It!'
    }).then((result) => {
      if(result.isConfirmed){
        this.inventoryService.deleteItemCategory(data.id).subscribe((response) => {
          // @ts-ignore
          if(response.success == 1){
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Deleted successfully',
              showConfirmButton: false,
              timer: 1000
            });
            this.itemCategoryForm.reset();
          }
        });
      }
    });

  }
}
