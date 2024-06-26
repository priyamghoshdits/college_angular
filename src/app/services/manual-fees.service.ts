import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {ErrorService} from "./error.service";
import {catchError, tap} from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})
export class ManualFeesService {
    private BASE_API_URL = environment.BASE_API_URL;

    constructor(private http: HttpClient, private errorService: ErrorService) {

    }

  saveManualFees(data){
    return this.http.post(this.BASE_API_URL + '/saveManualFees', data)
        .pipe(catchError(this.errorService.serverError), tap(response => {
        }));
  }

  searchManualFees(data){
      return this.http.post(this.BASE_API_URL + '/searchManualFees', data)
          .pipe(catchError(this.errorService.serverError), tap(response => {
          }));
  }

}
