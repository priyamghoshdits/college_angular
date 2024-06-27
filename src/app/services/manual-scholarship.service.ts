import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, catchError, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root'
})
export class ManualScholarshipService {
  private BASE_API_URL = environment.BASE_API_URL;

  manualScholarship = [];
  manualScholarshipSubject = new Subject<any[]>();


  constructor(private http: HttpClient, private errorService: ErrorService) {

  }


  getManualScholarship(data) {
    return this.http.post(this.BASE_API_URL + '/getManualScholarship', data)
      .pipe(catchError(this.errorService.serverError), tap(response => {

      }));
  }

  saveManualScholarship(data) {
    return this.http.post(this.BASE_API_URL + '/saveManualScholarship', data)
      .pipe(catchError(this.errorService.serverError), tap(response => {

      }));
  }

  updateManualScholarship(data) {
    return this.http.post(this.BASE_API_URL + '/updateManualScholarship', data)
      .pipe(catchError(this.errorService.serverError), tap(response => {

      }));
  }

  deleteManualScholarship(data) {
    return this.http.get(this.BASE_API_URL + '/deleteManualScholarship/' + data.id)
      .pipe(catchError(this.errorService.serverError), tap(response => {

      }));
  }
}
