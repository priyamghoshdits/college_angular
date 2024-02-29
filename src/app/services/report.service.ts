import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ErrorService} from "./error.service";
import {environment} from "../../environments/environment";
import {catchError, tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  private BASE_API_URL = environment.BASE_API_URL;

  constructor(private  http: HttpClient, private errorService: ErrorService) { }

  getAttendanceReport(value){
    return this.http.post(this.BASE_API_URL + '/getAttendancePercentage', value)
        .pipe(catchError(this.errorService.serverError), tap(response => {
        }));
  }
}
