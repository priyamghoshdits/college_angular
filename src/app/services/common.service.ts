import { Injectable } from '@angular/core';
import {catchError, tap} from "rxjs/operators";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {ErrorService} from "./error.service";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  private BASE_API_URL = environment.BASE_API_URL;




  constructor(private  http: HttpClient, private errorService: ErrorService) {

  }

  uploadProfilePicture(value){
    return this.http.post(this.BASE_API_URL + '/uploadProfilePicSelf', value)
        .pipe(catchError(this.errorService.serverError), tap(response => {
        }));
  }

  checkId(id){
    return this.http.get(this.BASE_API_URL + '/checkId/' + id)
        .pipe(catchError(this.errorService.serverError), tap(response => {
        }));
  }



}