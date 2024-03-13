import { Component } from '@angular/core';
import {MatIconModule} from "@angular/material/icon";
import {NgForOf, NgIf} from "@angular/common";
import {NgxPaginationModule} from "ngx-pagination";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {VisitorBookService} from "../../../services/visitor-book.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-visitor-book',
  standalone: true,
    imports: [
        MatIconModule,
        NgForOf,
        NgIf,
        NgxPaginationModule,
        ReactiveFormsModule
    ],
  templateUrl: './visitor-book.component.html',
  styleUrl: './visitor-book.component.scss'
})
export class VisitorBookComponent {
    visitorForm: FormGroup;
    isUpdatable = false;
    visitorList: any[];
    p: number;
    constructor(private visitorService: VisitorBookService) {
        this.visitorForm = new FormGroup({
            id: new FormControl(null),
            purpose: new FormControl(null, [Validators.required]),
            name: new FormControl(null, [Validators.required]),
            phone: new FormControl(null, [Validators.required]),
            icard: new FormControl(null),
            date: new FormControl(null, [Validators.required]),
            time_in: new FormControl(null),
            time_out: new FormControl(null),
            note: new FormControl(null),
        });

        this.visitorService.getVisitorListener().subscribe((response) => {
            this.visitorList = response;
        });
        this.visitorList = this.visitorService.getVisitorList();
    }

    saveVisitor(){
        this.visitorService.saveVisitorBook(this.visitorForm.value).subscribe((response: any) => {
            if(response.success == 1){
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Saved Visitor Book',
                    showConfirmButton: false,
                    timer: 1000
                });
            }
        })
    }

    editVisitorBook(data){
        this.visitorForm.patchValue(data);
        this.isUpdatable = true;
    }

    deleteVisitorBook(data){
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
              this.visitorService.deleteVisitorBook(data.id).subscribe((response: any) => {
                  if(response.success == 1){
                      Swal.fire({
                          position: 'center',
                          icon: 'success',
                          title: 'Visitor Book Deleted',
                          showConfirmButton: false,
                          timer: 1000
                      });
                  }
              })
          }
        })

    }

    updateVisitorBook(){
        this.visitorService.updateVisitorBook(this.visitorForm.value).subscribe((response: any) => {
            if(response.success == 1){
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Updated Visitor Book',
                    showConfirmButton: false,
                    timer: 1000
                });
                this.cancelUpdate();
            }
        })
    }

    cancelUpdate(){
        this.visitorForm.reset();
        this.isUpdatable = false;
    }


}
