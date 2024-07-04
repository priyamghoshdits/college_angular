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
}
