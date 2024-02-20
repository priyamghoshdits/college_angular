import { Component } from '@angular/core';
import {InventoryService} from "../../../services/inventory.service";
import {MatIconModule} from "@angular/material/icon";
import {NgForOf} from "@angular/common";
import {NgxPaginationModule} from "ngx-pagination";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";

@Component({
  selector: 'app-item-stock',
  standalone: true,
  imports: [
    MatIconModule,
    NgForOf,
    NgxPaginationModule,
    ReactiveFormsModule
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
  isUpdatable = false;
  constructor(private inventoryService: InventoryService) {
    this.itemStockForm = new FormGroup({
      id: new FormControl(null),
      inventory_item_id: new FormControl(null, [Validators.required]),
      item_type_id: new FormControl(0, [Validators.required]),
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
    this.inventoryService.getItemListListener().subscribe((response) => {
      this.itemList = response;
    })
    this.itemList = this.inventoryService.getItem();
    this.inventoryService.getItemStockListener().subscribe((response) => {
      this.itemStockList = response;
    });
    this.itemStockList = this.inventoryService.getItemStockList();
  }

  saveItemStock(){

  }

  updateItemStock(){

  }

  cancelUpdate(){
    this.itemStockForm.reset();
    this.isUpdatable = true;
  }

}
