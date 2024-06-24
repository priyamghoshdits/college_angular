import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, catchError, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root'
})
export class UniversitySynopsisService {
  private BASE_API_URL = environment.BASE_API_URL;

  universitySynopsis = [];
  universitySynopsisSubject = new Subject<any[]>();

  constructor(private http: HttpClient, private errorService: ErrorService) { }

  saveuniversitySynopsisArray(data) {
    return this.http.post(this.BASE_API_URL + '/saveUniversitySynopsis', data)
      .pipe(catchError(this.errorService.serverError), tap(response => {

      }));
  }

  saveuniversitySynopsisFile(data) {
    return this.http.post(this.BASE_API_URL + '/saveUniversitySynopsisFile', data)
      .pipe(catchError(this.errorService.serverError), tap(response => {

      }));
  }

  updateuniversitySynopsisArray(data) {
    return this.http.post(this.BASE_API_URL + '/updateUniversitySynopsis', data)
      .pipe(catchError(this.errorService.serverError), tap(response => {

      }));
  }

  getuniversitySynopsis(data) {
    let paarm = data ? data : '';
    return this.http.get(this.BASE_API_URL + '/getUniversitySynopsis/' + paarm)
      .pipe(catchError(this.errorService.serverError), tap(response => {

      }));
  }

  deleteuniversitySynopsis(data) {
    return this.http.get(this.BASE_API_URL + '/deleteUniversitySynopsis/' + data)
      .pipe(catchError(this.errorService.serverError), tap(response => {

      }));
  }
}
