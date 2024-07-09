import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ErrorService } from "./error.service";
import { environment } from "../../environments/environment";
import { Subject } from "rxjs";
import { catchError, tap } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private BASE_API_URL = environment.BASE_API_URL;

  constructor(private http: HttpClient, private errorService: ErrorService) {
  }

  getDashboardData() {
    return this.http.get(this.BASE_API_URL + '/dashboard')
      .pipe(catchError(this.errorService.serverError), tap(response => {
      }));
  }

  getDashboardDataForStudent() {
    return this.http.get(this.BASE_API_URL + '/dashboardForStudent')
      .pipe(catchError(this.errorService.serverError), tap(response => {
      }));
  }

}
