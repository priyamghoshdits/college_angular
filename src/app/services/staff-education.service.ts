import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, catchError, tap } from 'rxjs';
import { ErrorService } from './error.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StaffEducationService {
  private BASE_API_URL = environment.BASE_API_URL;

  staffEducation = [];
  staffEducationSubject = new Subject<any[]>();

  constructor(private http: HttpClient, private errorService: ErrorService) { }

  saveStaffEducation(data) {
    return this.http.post(this.BASE_API_URL + '/saveStaffEducation', data)
      .pipe(catchError(this.errorService.serverError), tap(response => {

      }));
  }

  saveStaffEducationFile(data) {
    return this.http.post(this.BASE_API_URL + '/saveStaffEducationFile', data)
      .pipe(catchError(this.errorService.serverError), tap(response => {

      }));
  }

  updateStaffEducation(data) {
    return this.http.post(this.BASE_API_URL + '/updateStaffEducation', data)
      .pipe(catchError(this.errorService.serverError), tap(response => {

      }));
  }

  getStaffEducation(data) {
    let paarm = data ? data : '';
    return this.http.get(this.BASE_API_URL + '/getStaffEducation/' + paarm)
      .pipe(catchError(this.errorService.serverError), tap(response => {

      }));
  }

  deleteStaffEducation(data) {
    return this.http.get(this.BASE_API_URL + '/deleteStaffEducation/' + data)
      .pipe(catchError(this.errorService.serverError), tap(response => {

      }));
  }
}
