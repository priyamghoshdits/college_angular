import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ErrorService} from "./error.service";
import {catchError, tap} from "rxjs/operators";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  private BASE_API_URL = environment.BASE_API_URL;

  constructor(private  http: HttpClient, private errorService: ErrorService) { }

  uploadProfilePic(data){
    return this.http.post(this.BASE_API_URL + '/uploadProfilePic', data)
        .pipe(catchError(this.errorService.serverError), tap(response => {
        }));
  }

}
