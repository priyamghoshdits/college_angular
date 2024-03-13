import { Component } from '@angular/core';
import {MatIconModule} from "@angular/material/icon";
import {NgForOf, NgIf} from "@angular/common";
import {NgxPaginationModule} from "ngx-pagination";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {PostalService} from "../../../services/postal.service";

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
  postalDispatchList: any[] = [];
  p: number;

  constructor(private postalService: PostalService) {
    this.postalReceiveForm = new FormGroup({
      id: new FormControl(null),
      postal_type: new FormControl('postal dispatch'),
      from_title: new FormControl(null, [Validators.required]),
      reference_no: new FormControl(null, [Validators.required]),
      address: new FormControl(null, [Validators.required]),
      note: new FormControl(null),
      to_title: new FormControl(null, [Validators.required]),
      date: new FormControl(null),
    });


  }

  savePostalReceive(){

  }

  updatePostalReceive(){

  }

  cancelUpdate(){
    this.postalReceiveForm.reset();
    this.isUpdatable = false;
  }

  editPostalReceive(data){

  }

  deletePostalReceive(data){

  }

}
