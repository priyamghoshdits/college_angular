import { Component } from '@angular/core';
import {MatIconModule} from "@angular/material/icon";
import {NgForOf, NgIf} from "@angular/common";
import {NgxPaginationModule} from "ngx-pagination";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {PostalService} from "../../../services/postal.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-postal-dispatch',
  standalone: true,
    imports: [
        MatIconModule,
        NgForOf,
        NgIf,
        NgxPaginationModule,
        ReactiveFormsModule
    ],
  templateUrl: './postal-dispatch.component.html',
  styleUrl: './postal-dispatch.component.scss'
})
export class PostalDispatchComponent {
    postalDispatchForm: FormGroup;
    isUpdatable = false;
    postalDispatchList: any[];
    p: number;
    constructor(private postalService: PostalService) {
        this.postalDispatchForm = new FormGroup({
            id: new FormControl(null),
            postal_type: new FormControl('postal dispatch'),
            from_title: new FormControl(null, [Validators.required]),
            reference_no: new FormControl(null, [Validators.required]),
            address: new FormControl(null, [Validators.required]),
            note: new FormControl(null),
            to_title: new FormControl(null, [Validators.required]),
            date: new FormControl(null),
        });

        this.postalService.getPostalDispatchListener().subscribe((response) => {
            this.postalDispatchList =response;
        });
        this.postalDispatchList = this.postalService.getPostalDispatchList();

    }

    savePostalDispatch(){
        this.postalService.savePostal(this.postalDispatchForm.value).subscribe((response: any) => {
            if(response.success == 1){
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Postal Dispatch Saved',
                    showConfirmButton: false,
                    timer: 1000
                });
                this.postalDispatchForm.reset();
            }
        })
    }

    updatePostalDispatch(){
        this.postalService.updatePostal(this.postalDispatchForm.value).subscribe((response: any) => {
            if(response.success == 1){
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Postal Dispatch Updated',
                    showConfirmButton: false,
                    timer: 1000
                });
                this.cancelUpdate();
            }
        })
    }

    cancelUpdate(){
        this.postalDispatchForm.reset();
        this.isUpdatable = false;
    }

    editPostalDispatch(record){
        this.postalDispatchForm.patchValue(record);
        this.isUpdatable = true;
    }

    deletePostalDispatch(record){
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
               this.postalService.deletePostal(record.id).subscribe((response: any) => {
                   if(response.success == 1){
                       Swal.fire({
                           position: 'center',
                           icon: 'success',
                           title: 'Postal Dispatch Deleted',
                           showConfirmButton: false,
                           timer: 1000
                       });
                   }
               })
           }
        });

    }


}
