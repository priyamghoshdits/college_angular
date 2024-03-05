import { Component } from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import {NgForOf, NgIf} from "@angular/common";
import {NgxPaginationModule} from "ngx-pagination";
import {CategoryService} from "../../../services/category.service";
import Swal from "sweetalert2";
import _default from "chart.js/dist/plugins/plugin.tooltip";
import reset = _default.reset;
import {RolesAndPermissionService} from "../../../services/roles-and-permission.service";

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [
    FormsModule,
    MatIconModule,
    NgForOf,
    NgxPaginationModule,
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss'
})
export class CategoryComponent {
  categoryForm: FormGroup;
  isUpdatable = false;
  categoryList: any[];
  rolesAndPermission: any[] = [];
  permission: any[] = [];
  constructor(private categoryService: CategoryService, private roleAndPermissionService: RolesAndPermissionService) {
    this.categoryForm = new FormGroup({
      id: new FormControl(null),
      name: new FormControl(null, [Validators.required]),
    });

    this.categoryService.getCategoryListener().subscribe((response) => {
      this.categoryList = response;
    });
    this.categoryList = this.categoryService.getCategoryList();

    this.roleAndPermissionService.getRolesAndPermissionListener().subscribe((response) => {
      this.rolesAndPermission = response;
      this.permission = this.rolesAndPermission.find(x => x.name == 'CASTE').permission;
    });
    this.rolesAndPermission = this.roleAndPermissionService.getRolesAndPermission();
    if(this.rolesAndPermission.length > 0){
      this.permission = this.rolesAndPermission.find(x => x.name == 'CASTE').permission;
    }
  }

  saveCategory(){
    if(!this.categoryForm.valid){
      this.categoryForm.markAllAsTouched();
      return;
    }
    this.categoryService.saveCategory(this.categoryForm.value).subscribe((response) => {
      // @ts-ignore
      if(response.success == 1){
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Category Saved',
          showConfirmButton: false,
          timer: 1000
        });
        this.categoryForm.reset();
      }
    })
  }

  updateCategory(){
    if(!this.categoryForm.valid){
      this.categoryForm.markAllAsTouched();
      return;
    }
    this.categoryService.updateCategory(this.categoryForm.value).subscribe((response) => {
      // @ts-ignore
      if(response.success == 1){
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Category Updated',
          showConfirmButton: false,
          timer: 1000
        });
        this.cancelUpdate();
      }
    })
  }

  cancelUpdate(){
    this.categoryForm.reset();
    this.isUpdatable = false;
  }

  editCategory(data){
    this.categoryForm.patchValue(data);
    this.isUpdatable = true;
  }

  deleteCategory(data){
    Swal.fire({
      title: 'Confirmation',
      text: 'Do you sure to delete Category ?',
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete It!'
    }).then((result) => {
      if(result.isConfirmed){
        this.categoryService.deleteCategory(data.id).subscribe((response) => {
          // @ts-ignore
          if(response.success == 1){
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Category Deleted',
              showConfirmButton: false,
              timer: 1000
            });
          }
        })
      }
    });
  }

}
