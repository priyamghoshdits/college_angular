import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root'
})
export class PaperPosterService {
  BASE_URL = environment.BASE_API_URL;

  constructor(private http: HttpClient, private errorService: ErrorService) { }

  searchPaperSetter(value) {
    return this.http.post(this.BASE_URL + '/searchPaperPoster', value)
      .pipe(catchError(this.errorService.serverError), tap(response => {
      }));
  }

  saveUploadFile(data) {
    return this.http.post(this.BASE_URL + '/saveUploadFile', data)
      .pipe(catchError(this.errorService.serverError)
        , tap((response: any) => {
        }));
  }

  savePaperPoster(data) {
    return this.http.post(this.BASE_URL + '/savePaperPoster', data)
      .pipe(catchError(this.errorService.serverError)
        , tap((response: any) => {
        }));
  }
  updatePaperPoster(data) {
    return this.http.post(this.BASE_URL + '/updatePaperPoster', data)
      .pipe(catchError(this.errorService.serverError)
        , tap((response: any) => {
        }));
  }
  deeletePaperPoster(data) {
    return this.http.get(this.BASE_URL + '/deletePaperPoster/' + data)
      .pipe(catchError(this.errorService.serverError)
        , tap((response: any) => {
        }));
  }
}
