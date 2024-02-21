import { Component } from '@angular/core';
import {InventoryService} from "../../../services/inventory.service";
import {MatIconModule} from "@angular/material/icon";
import {NgForOf, NgIf} from "@angular/common";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import Swal from "sweetalert2";

@Component({
  selector: 'app-item-store',
  standalone: true,
  imports: [
    MatIconModule,
    NgForOf,
    NgIf,
    ReactiveFormsModule
  ],
  templateUrl: './item-store.component.html',
  styleUrl: './item-store.component.scss'
})
export class ItemStoreComponent {
  itemStoreForm: FormGroup;
  itemStoreList: any[];
  isUpdatable = false;
  constructor(private inventoryService: InventoryService) {
    this.itemStoreForm = new FormGroup({
      id: new FormControl(null),
      name: new FormControl(null, [Validators.required]),
      stock_code: new FormControl(null),
      description: new FormControl(null),
    });
    this.inventoryService.getItemStoreListListener().subscribe((response) => {
      this.itemStoreList = response;
    });
    this.itemStoreList = this.inventoryService.getItemStoreList();
  }

  saveItemStore(){
    if(!this.itemStoreForm.valid){
      this.itemStoreForm.markAllAsTouched();
      return;
    }
    this.inventoryService.saveItemStore(this.itemStoreForm.value).subscribe((response: any) => {
      if(response.success == 1){
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Item Store Saved',
          showConfirmButton: false,
          timer: 1000
        });
        this.itemStoreForm.reset();
      }
    })
  }

  updateItemStore(){
    if(!this.itemStoreForm.valid){
      this.itemStoreForm.markAllAsTouched();
      return;
    }
    this.inventoryService.updateItemStore(this.itemStoreForm.value).subscribe((response: any) => {
      if(response.success == 1){
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Item Store updated',
          showConfirmButton: false,
          timer: 1000
        });
        this.cancelUpdate();
      }
    })
  }

  cancelUpdate(){
    this.itemStoreForm.reset();
    this.isUpdatable = false;
  }

  editItemStore(data){
    this.itemStoreForm.patchValue(data);
    this.isUpdatable = true;
  }

  deleteItemStore(data){
    Swal.fire({
      title: 'Confirmation',
      text: 'Do you sure to delete Item Store ?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete It!'
    }).then((result) => {
      if(result.isConfirmed){
        this.inventoryService.deleteItemStore(data.id).subscribe((response: any) => {
          if(response.success == 1){
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Item Store deleted',
              showConfirmButton: false,
              timer: 1000
            });
          }
        })
      }
    })

  }

}
