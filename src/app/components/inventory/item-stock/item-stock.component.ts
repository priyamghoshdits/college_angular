import { Component } from '@angular/core';
import {InventoryService} from "../../../services/inventory.service";
import {MatIconModule} from "@angular/material/icon";
import {NgForOf, NgIf} from "@angular/common";
import {NgxPaginationModule} from "ngx-pagination";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import Swal from "sweetalert2";

@Component({
  selector: 'app-item-stock',
  standalone: true,
  imports: [
    MatIconModule,
    NgForOf,
    NgxPaginationModule,
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './item-stock.component.html',
  styleUrl: './item-stock.component.scss'
})
export class ItemStockComponent {
  itemStockForm: FormGroup;
  itemList: any[];
  itemSupplyList: any[];
  itemStoreList: any[];
  itemStockList: any[];
  itemTypeList: any[];
  isUpdatable = false;
  p:number;
  constructor(private inventoryService: InventoryService) {
    this.itemStockForm = new FormGroup({
      id: new FormControl(null),
      item_type_id: new FormControl(null, [Validators.required]),
      inventory_item_id: new FormControl(null, [Validators.required]),
      item_supplier_id: new FormControl(null, [Validators.required]),
      item_store_id: new FormControl(null, [Validators.required]),
      quantity: new FormControl(null, [Validators.required]),
      purchase_price: new FormControl(null, [Validators.required]),
      purchase_date: new FormControl(null, [Validators.required]),
      description: new FormControl(null),
    });
    this.inventoryService.getItemStoreListListener().subscribe((response) => {
      this.itemStoreList = response;
    })
    this.itemStoreList = this.inventoryService.getItemStoreList();
    this.inventoryService.getItemSupplierListListener().subscribe((response) => {
      this.itemSupplyList = response;
    })
    this.itemSupplyList = this.inventoryService.getItemSupplier();
    // this.inventoryService.getItemListListener().subscribe((response) => {
    //   this.itemList = response;
    // })
    // this.itemList = this.inventoryService.getItem();
    this.inventoryService.getItemStockListener().subscribe((response) => {
      this.itemStockList = response;
    });
    this.itemStockList = this.inventoryService.getItemStockList();
    this.inventoryService.getItemCategoryListListener().subscribe((response) => {
      this.itemTypeList = response;
    })
    this.itemTypeList = this.inventoryService.getItemCategory();
  }

  getItemList(){
    this.inventoryService.getItemListByItemCategory(this.itemStockForm.value.item_type_id).subscribe((response: any) => {
      this.itemList = response.data;
    });
  }

  saveItemStock(){
    if(!this.itemStockForm.valid){
      this.itemStockForm.markAllAsTouched();
      return;
    }
    this.inventoryService.saveItemStock(this.itemStockForm.value).subscribe((response:any) => {
      if(response.success == 1){
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Item Stock Saved',
          showConfirmButton: false,
          timer: 1000
        });
        this.itemStockForm.reset();
      }
    })
  }

  updateItemStock(){
    if(!this.itemStockForm.valid){
      this.itemStockForm.markAllAsTouched();
      return;
    }
    this.inventoryService.updateItemStock(this.itemStockForm.value).subscribe((response: any) => {
      if(response.success == 1){
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Item Stock Updated',
          showConfirmButton: false,
          timer: 1000
        });
        this.cancelUpdate();
      }
    })
  }

  cancelUpdate(){
    this.itemStockForm.reset();
    this.isUpdatable = false;
  }

  editItemStock(data){
    this.itemStockForm.patchValue(data);
    this.isUpdatable = true;
  }

  deleteItemStock(data){
    Swal.fire({
      title: 'Confirmation',
      text: 'Do you sure to delete Item Stock?',
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete It!'
    }).then((result) => {
      if(result.isConfirmed){
        this.inventoryService.deleteItemStock(data.id).subscribe((response: any) => {
          if(response.success == 1){
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Item Stock Deleted',
              showConfirmButton: false,
              timer: 1000
            });
          }
        })
      }
    })
  }

}
