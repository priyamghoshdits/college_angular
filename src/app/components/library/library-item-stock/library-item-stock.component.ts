import { Component } from '@angular/core';
import {LibraryService} from "../../../services/library.service";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import {NgForOf, NgIf} from "@angular/common";
import {NgxPaginationModule} from "ngx-pagination";
import Swal from "sweetalert2";
import {RolesAndPermissionService} from "../../../services/roles-and-permission.service";

@Component({
  selector: 'app-library-item-stock',
  standalone: true,
  imports: [
    FormsModule,
    MatIconModule,
    NgForOf,
    NgxPaginationModule,
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './library-item-stock.component.html',
  styleUrl: './library-item-stock.component.scss'
})
export class LibraryItemStockComponent {
  libraryItemList : any [];
  libraryForm: FormGroup;
  isUpdatable = false;
  rolesAndPermission: any[] = [];
  permission: any[] = [];
  constructor(private libraryService: LibraryService, private roleAndPermissionService: RolesAndPermissionService) {
    this.libraryForm = new FormGroup({
      id: new FormControl(null),
      name: new FormControl(null, [Validators.required]),
      quantity: new FormControl(null, [Validators.required]),
      remaining: new FormControl(null, [Validators.required]),
    });
    this.libraryService.getLibraryItemListener().subscribe((response) =>{
      this.libraryItemList = response;
    });
    this.libraryItemList = this.libraryService.getLibraryItemList();

    this.roleAndPermissionService.getRolesAndPermissionListener().subscribe((response) => {
      this.rolesAndPermission = response;
      this.permission = this.rolesAndPermission.find(x => x.name == 'ADD ITEM').permission;
    });
    this.rolesAndPermission = this.roleAndPermissionService.getRolesAndPermission();
    if(this.rolesAndPermission.length > 0){
      this.permission = this.rolesAndPermission.find(x => x.name == 'ADD ITEM').permission;
    }
  }

  saveLibraryItem(){
    if(!this.libraryForm.valid){
      this.libraryForm.markAllAsTouched();
      return;
    }
    if(this.libraryForm.value.remaining > this.libraryForm.value.quantity){
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'Enter valid remaining quantity',
        showConfirmButton: false,
        timer: 1500
      });
      return;
    }
    this.libraryService.saveLibraryItems(this.libraryForm.value).subscribe((response) => {
      // @ts-ignore
      if(response.success == 1){
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Item Saved',
          showConfirmButton: false,
          timer: 1000
        });
        this.libraryForm.reset();
      }
    });
  }

  editItemStock(data){
    this.libraryForm.patchValue({id: data.id, name:data.name ,quantity: data.quantity, remaining: data.remaining});
    this.isUpdatable = true;
  }

  deleteItemStock(data){
    Swal.fire({
      title: 'Confirmation',
      text: 'Please check once before saving',
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, save It!'
    }).then((result) => {
      if(result.isConfirmed){
        this.libraryService.deleteLibraryItem(data.id).subscribe((response) => {
          // @ts-ignore
          if(response.success == 1) {
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Item Deleted',
              showConfirmButton: false,
              timer: 1000
            });
          }
        });
      }
    });
  }

  updateLibraryItem(){
    if(!this.libraryForm.valid){
      this.libraryForm.markAllAsTouched();
      return;
    }
    this.libraryService.updateLibraryItems(this.libraryForm.value).subscribe((response) => {
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
    })
  }

  cancelUpdate(){
    this.libraryForm.reset();
    this.isUpdatable = false;
  }

}
