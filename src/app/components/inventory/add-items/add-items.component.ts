import { Component } from '@angular/core';
import {InventoryService} from "../../../services/inventory.service";
import {MatIconModule} from "@angular/material/icon";
import {NgForOf, NgIf} from "@angular/common";
import {NgxPaginationModule} from "ngx-pagination";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import Swal from "sweetalert2";

@Component({
  selector: 'app-add-items',
  standalone: true,
  imports: [
    MatIconModule,
    NgForOf,
    NgxPaginationModule,
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './add-items.component.html',
  styleUrl: './add-items.component.scss'
})
export class AddItemsComponent {
  inventoryItemsForm: FormGroup;
  itemCategoryList: any[];
  itemList: any[];
  isUpdatable = false;
  p:number;
  constructor(private inventoryService: InventoryService) {
    this.inventoryItemsForm = new FormGroup({
      id: new FormControl(null),
      name: new FormControl(null, [Validators.required]),
      item_type_id: new FormControl(null, [Validators.required]),
      unit: new FormControl(null, [Validators.required]),
      description: new FormControl(null),
    });
    this.inventoryService.getItemCategoryListListener().subscribe((response) => {
      this.itemCategoryList = response;
    })
    this.itemCategoryList = this.inventoryService.getItemCategory();

    this.inventoryService.getItemListListener().subscribe((response) => {
      this.itemList = response;
    });
    this.itemList = this.inventoryService.getItem();
  }

  saveItems(){
    if(!this.inventoryItemsForm.valid){
      this.inventoryItemsForm.markAllAsTouched();
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
    this.inventoryService.saveItems(this.inventoryItemsForm.value).subscribe((response) => {
      // @ts-ignore
      if(response.success == 1){
        Swal.close();
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Item Saved',
          showConfirmButton: false,
          timer: 1000
        });
        this.inventoryItemsForm.reset();
      }
    })
  }
  updateItems(){
    if(!this.inventoryItemsForm.valid){
      this.inventoryItemsForm.markAllAsTouched();
      return;
    }
    Swal.fire({
      title: 'Please Wait !',
      html: 'Updating ...', // add html attribute if you want or remove
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      }
    });
    this.inventoryService.updateItems(this.inventoryItemsForm.value).subscribe((response) => {
      Swal.close();
      // @ts-ignore
      if(response.success == 1){
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Item Updated',
          showConfirmButton: false,
          timer: 1000
        });
        this.cancelUpdate();
      }
    });
  }

  cancelUpdate(){
    this.inventoryItemsForm.reset();
    this.isUpdatable = false;
  }

  editItem(data){
    this.inventoryItemsForm.patchValue(data);
    this.isUpdatable = true;
  }

  deleteItem(data){
    Swal.fire({
      title: 'Confirmation',
      text: 'Do you sure to delete Item ?',
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete It!'
    }).then((result) => {
      this.inventoryService.deleteItems(data.id).subscribe((response) => {
        // @ts-ignore
        if(response.success == 1){
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Item Deleted',
            showConfirmButton: false,
            timer: 1000
          });
        }
      });
    });
  }
}
