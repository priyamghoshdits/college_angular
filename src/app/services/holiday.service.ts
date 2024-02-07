import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ErrorService} from "./error.service";
import {environment} from "../../environments/environment";
import {catchError, tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class HolidayService {
  private BASE_API_URL = environment.BASE_API_URL;
  constructor(private  http: HttpClient, private errorService: ErrorService) {

  }

  saveHolidayForWholeYear(data){
    return this.http.post(this.BASE_API_URL + '/saveHolidayForWholeYear', data)
        .pipe(catchError(this.errorService.serverError), tap(response => {
        }));
  }

  saveHoliday(data){
    return this.http.post(this.BASE_API_URL + '/saveHoliday', data)
        .pipe(catchError(this.errorService.serverError), tap(response => {
        }));
  }

  getHolidaysByMonth(month){
    return this.http.get(this.BASE_API_URL + '/getHolidayByMonth/'+month)
        .pipe(catchError(this.errorService.serverError), tap(response => {
        }));
  }

  updateHoliday(data){
    return this.http.post(this.BASE_API_URL + '/updateHoliday', data)
        .pipe(catchError(this.errorService.serverError), tap(response => {
        }));
  }

  deleteHoliday(id){
      return this.http.get(this.BASE_API_URL + '/deleteHoliday/' + id)
          .pipe(catchError(this.errorService.serverError), tap(response => {
          }));
  }

}
