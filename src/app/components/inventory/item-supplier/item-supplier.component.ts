import { Component } from '@angular/core';
import {InventoryService} from "../../../services/inventory.service";
import {MatIconModule} from "@angular/material/icon";
import {NgForOf, NgIf} from "@angular/common";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import Swal from "sweetalert2";

@Component({
  selector: 'app-item-supplier',
  standalone: true,
  imports: [
    MatIconModule,
    NgForOf,
    NgIf,
    ReactiveFormsModule
  ],
  templateUrl: './item-supplier.component.html',
  styleUrl: './item-supplier.component.scss'
})
export class ItemSupplierComponent {
  itemSupplierForm: FormGroup;
  itemSupplier: any[];
  isUpdatable = false;
  constructor(private inventoryService: InventoryService) {
    this.itemSupplierForm = new FormGroup({
      id: new FormControl(null),
      name: new FormControl(null, [Validators.required]),
      phone: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required]),
      address: new FormControl(null, [Validators.required]),
      contact_person_name: new FormControl(null, [Validators.required]),
      contact_person_phone: new FormControl(null, [Validators.required]),
      contact_person_email: new FormControl(null, [Validators.required]),
      description: new FormControl(null),
    });
    this.inventoryService.getItemSupplierListListener().subscribe((response) => {
      this.itemSupplier = response;
    });
    this.itemSupplier = this.inventoryService.getItemSupplier();
  }

  saveItemSupplier(){
    if(!this.itemSupplierForm.valid){
      this.itemSupplierForm.markAllAsTouched();
      return;
    }
    this.inventoryService.saveItemSupplier(this.itemSupplierForm.value).subscribe((response: any) => {
      if(response.success == 1){
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Item Supplier Saved',
          showConfirmButton: false,
          timer: 1000
        });
        this.itemSupplierForm.reset();
      }
    })
  }

  updateItemSupplier(){
    if(!this.itemSupplierForm.valid){
      this.itemSupplierForm.markAllAsTouched();
      return;
    }
    this.inventoryService.updateItemSupplier(this.itemSupplierForm.value).subscribe((response: any) => {
      if(response.success == 1){
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Item Supplier Updated',
          showConfirmButton: false,
          timer: 1000
        });
        this.cancelUpdate();
      }
    })
  }

  cancelUpdate(){
    this.itemSupplierForm.reset();
    this.isUpdatable = false;
  }

  editItemSupplier(data){
    this.itemSupplierForm.patchValue(data);
    this.isUpdatable = true;
  }

  deleteItemSupplier(data){
    Swal.fire({
      title: 'Confirmation',
      text: 'Do you sure to delete Item Supplier ?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete It!'
    }).then((result) => {
      if(result.isConfirmed){
        this.inventoryService.deleteItemSupplier(data.id).subscribe((response: any) => {
          if(response.success == 1){
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Item Supplier Deleted',
              showConfirmButton: false,
              timer: 1000
            });
          }
        })
      }
    });

  }
}
