import { Component } from '@angular/core';
import {MatIconModule} from "@angular/material/icon";
import {NgForOf, NgIf} from "@angular/common";
import {NgxPaginationModule} from "ngx-pagination";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {PostalService} from "../../../services/postal.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-postal-receive',
  standalone: true,
  imports: [
    MatIconModule,
    NgForOf,
    NgIf,
    NgxPaginationModule,
    ReactiveFormsModule
  ],
  templateUrl: './postal-receive.component.html',
  styleUrl: './postal-receive.component.scss'
})
export class PostalReceiveComponent {
  postalReceiveForm: FormGroup;
  isUpdatable = false;
  postalReceiveList: any[] = [];
  p: number;

  constructor(private postalService: PostalService) {
    this.postalReceiveForm = new FormGroup({
      id: new FormControl(null),
      postal_type: new FormControl('postal receive'),
      from_title: new FormControl(null, [Validators.required]),
      reference_no: new FormControl(null, [Validators.required]),
      address: new FormControl(null, [Validators.required]),
      note: new FormControl(null),
      to_title: new FormControl(null, [Validators.required]),
      date: new FormControl(null),
    });

    this.postalService.getPostalReceiveListener().subscribe((response: any) => {
        this.postalReceiveList = response;
    });
    this.postalReceiveList = this.postalService.getPostalReceiveList();

  }

  savePostalReceive(){
    this.postalService.savePostal(this.postalReceiveForm.value).subscribe((response: any) => {
      if(response.success == 1){
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Postal Receive Saved',
          showConfirmButton: false,
          timer: 1000
        });
        this.postalReceiveForm.reset();
      }
    })
  }

  updatePostalReceive(){
    this.postalService.updatePostal(this.postalReceiveForm.value).subscribe((response: any) => {
      if(response.success == 1){
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Postal Receive Updated',
          showConfirmButton: false,
          timer: 1000
        });
        this.cancelUpdate();
      }
    })
  }

  cancelUpdate(){
    this.postalReceiveForm.reset();
    this.isUpdatable = false;
  }

  editPostalReceive(data){
    this.postalReceiveForm.patchValue(data);
    this.isUpdatable = true;
  }

  deletePostalReceive(data){
    Swal.fire({
      title: 'Confirmation',
      text: 'Do you sure to delete ?',
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete It!'
    }).then((result) => {
      if(result.isConfirmed){
        this.postalService.deletePostal(data.id).subscribe((response: any) => {
          if(response.success == 1){
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Postal Receive Deleted',
              showConfirmButton: false,
              timer: 1000
            });
          }
        })
      }
    });
  }

}
