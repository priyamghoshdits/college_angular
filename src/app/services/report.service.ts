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

  getFeesDueReport(){
      return this.http.get(this.BASE_API_URL + '/getDueFeesReport')
          .pipe(catchError(this.errorService.serverError), tap(response => {
          }));
  }

  getExaminationReport(value){
    return this.http.post(this.BASE_API_URL + '/getExamReport', value)
        .pipe(catchError(this.errorService.serverError), tap(response => {
        }));
  }

  getStudentReport(value){
      return this.http.post(this.BASE_API_URL + '/getStudentReport', value)
          .pipe(catchError(this.errorService.serverError), tap(response => {
          }));
  }

  getFeesCollectionReport(value){
    return this.http.post(this.BASE_API_URL + '/getFeesCollectionReport', value)
        .pipe(catchError(this.errorService.serverError), tap(response => {
        }));
  }

    getStudentPerDayAttendance(){
        return this.http.get(this.BASE_API_URL + '/getStudentPerDayAttendance')
            .pipe(catchError(this.errorService.serverError), tap(response => {
            }));
    }
}
