import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, catchError, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root'
})
export class PgPhdGuideService {
  private BASE_API_URL = environment.BASE_API_URL;

  pgPhdGuide = [];
  pgPhdGuideSubject = new Subject<any[]>();

  constructor(private http: HttpClient, private errorService: ErrorService) { }


  savePgPhdGuideArray(data) {
    return this.http.post(this.BASE_API_URL + '/savePgPhdGuide', data)
      .pipe(catchError(this.errorService.serverError), tap(response => {

      }));
  }

  savePgPhdGuideFile(data) {
    return this.http.post(this.BASE_API_URL + '/saveUploadFilePg', data)
      .pipe(catchError(this.errorService.serverError), tap(response => {

      }));
  }

  updatePgPhdGuideArray(data) {
    return this.http.post(this.BASE_API_URL + '/updatePgPhdGuide', data)
      .pipe(catchError(this.errorService.serverError), tap(response => {

      }));
  }

  getPgPhdGuide(data) {
    let paarm = data ? data : '';
    return this.http.get(this.BASE_API_URL + '/getPgPhdGuide/' + paarm)
      .pipe(catchError(this.errorService.serverError), tap(response => {

      }));
  }

  deletePgPhdGuide(data) {
    return this.http.get(this.BASE_API_URL + '/deletePgPhdGuide/' + data)
      .pipe(catchError(this.errorService.serverError), tap(response => {

      }));
  }
}
