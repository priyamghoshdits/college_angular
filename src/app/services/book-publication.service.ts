import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, catchError, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root'
})
export class BookPublicationService {
  private BASE_API_URL = environment.BASE_API_URL;

  bookPublication = [];
  bookPublicationSubject = new Subject<any[]>()

  constructor(private http: HttpClient, private errorService: ErrorService) {

  }

  saveBookPublicationArray(data) {
    return this.http.post(this.BASE_API_URL + '/saveBookPublication', data)
      .pipe(catchError(this.errorService.serverError), tap(response => {

      }));
  }

  updateBookPublicationArray(data) {
    return this.http.post(this.BASE_API_URL + '/updateBookPublication', data)
      .pipe(catchError(this.errorService.serverError), tap(response => {

      }));
  }

  getBookPublication(data) {
    let paarm = data ? data : '';
    return this.http.get(this.BASE_API_URL + '/getBookPublication/' + paarm)
      .pipe(catchError(this.errorService.serverError), tap(response => {

      }));
  }

  deleteBookPublication(data) {
    return this.http.get(this.BASE_API_URL + '/deleteBookPublication/' + data)
      .pipe(catchError(this.errorService.serverError), tap(response => {

      }));
  }
}
