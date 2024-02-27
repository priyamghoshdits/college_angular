import { Component } from '@angular/core';
import {MatIconModule} from "@angular/material/icon";
import {NgForOf, NgIf} from "@angular/common";
import {NgxPaginationModule} from "ngx-pagination";
import {ReactiveFormsModule} from "@angular/forms";
import {environment} from "../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {ErrorService} from "../../../services/error.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-user-log',
  standalone: true,
  imports: [
    MatIconModule,
    NgForOf,
    NgIf,
    NgxPaginationModule,
    ReactiveFormsModule
  ],
  templateUrl: './user-log.component.html',
  styleUrl: './user-log.component.scss'
})
export class UserLogComponent {
  p: number;
  private BASE_API_URL = environment.BASE_API_URL;
  userLogs: any[];
  constructor(private  http: HttpClient, private errorService: ErrorService) {
    this.getUserLogs();
  }

  getUserLogs(){
    this.http.get(this.BASE_API_URL + '/getUserLogs').subscribe((response: any) =>{
      if(response.success == 1){
        this.userLogs = response.data;
      }
    });
  }

  clearLogs(){
    if(this.userLogs.length == 0){
      Swal.fire({
        position: 'center',
        icon: 'info',
        title: 'There is nothing to clear',
        showConfirmButton: false,
        timer: 1000
      });
      return;
    }

    Swal.fire({
      title: 'Confirmation',
      text: 'Do you sure to delete logs ?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete It!'
    }).then((result) => {
      if(result.isConfirmed){
        this.http.get(this.BASE_API_URL + '/deleteUserLogs').subscribe((response: any) =>{
          if(response.success == 1){
            this.userLogs = response.data;
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Cleared',
              showConfirmButton: false,
              timer: 1000
            });
          }
        });
      }
    });

  }
}
