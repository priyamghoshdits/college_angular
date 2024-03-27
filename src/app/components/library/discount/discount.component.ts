import { Component } from '@angular/core';
import {LibraryService} from "../../../services/library.service";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import {NgForOf, NgIf} from "@angular/common";
import {NgxPaginationModule} from "ngx-pagination";
import Swal from "sweetalert2";
import {CustomFilterPipe} from "../../../../../custom-filter.pipe";

@Component({
  selector: 'app-discount',
  standalone: true,
  imports: [
    FormsModule,
    MatIconModule,
    NgForOf,
    NgIf,
    NgxPaginationModule,
    ReactiveFormsModule,
    CustomFilterPipe
  ],
  templateUrl: './discount.component.html',
  styleUrl: './discount.component.scss'
})
export class DiscountComponent {
  discountBookForm: FormGroup;
  returnPeriodList:any[];
  searchItem: string;
  constructor(private libraryService: LibraryService) {
    this.discountBookForm = new FormGroup({
      id: new FormControl(null),
      user_name: new FormControl(null, [Validators.required]),
      book_name: new FormControl(null, [Validators.required]),
      quantity: new FormControl(null, [Validators.required]),
      issued_on: new FormControl(null, [Validators.required]),
      return_date: new FormControl(null, [Validators.required]),
      fine: new FormControl(null, [Validators.required]),
      discount: new FormControl(null, [Validators.required]),
    });
    this.libraryService.getReturnPeriodOverListener().subscribe((response) => {
      this.returnPeriodList = response;
    });
    this.returnPeriodList = this.libraryService.getReturnOverPeriodList();
  }

  editDiscount(data){
    this.discountBookForm.patchValue(data);
  }

  updateDiscount(){
    this.libraryService.updateItemIssueDiscount(this.discountBookForm.value).subscribe((response: any) => {
      if(response.success == 1){
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Discount Updated',
          showConfirmButton: false,
          timer: 1500
        });
      }
    })
  }

  clearData(){
    this.discountBookForm.reset();
  }

}
