import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {catchError, tap} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";
import {ErrorService} from "./error.service";

@Injectable({
  providedIn: 'root'
})
export class ConsultancyService {
  private BASE_API_URL = environment.BASE_API_URL;

  consultancyList = [];

  constructor(private http: HttpClient, private errorService: ErrorService) { }

  saveConsultation(value){
    return this.http.post(this.BASE_API_URL + '/saveConsultation', value)
        .pipe(catchError(this.errorService.serverError), tap(response => {
        }));
  }

  searchConsultancy(value){
    return this.http.get(this.BASE_API_URL + '/searchConsultancy/' + value)
        .pipe(catchError(this.errorService.serverError), tap(response => {
        }));
  }

  updateConsultancy(value){
    return this.http.post(this.BASE_API_URL + '/updateConsultation', value)
        .pipe(catchError(this.errorService.serverError), tap(response => {
        }));
  }

}
