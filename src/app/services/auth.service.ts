import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {catchError, tap} from "rxjs/operators";
import {ErrorService} from "./error.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private BASE_API_URL = environment.BASE_API_URL;
  constructor(public router: Router, private  http: HttpClient,private errorService: ErrorService) { }

  getLoggedInUserAttendance(){
    return this.http.get(this.BASE_API_URL + '/getTotalUserAttendance')
        .pipe(catchError(this.errorService.serverError), tap(response => {

        }));
  }

  logout(){
    this.http.get(this.BASE_API_URL + '/logout',).subscribe((response: any) =>{
    });
    localStorage.removeItem('user');
    this.router.navigate(["/auth/login"]).then(r => {});
    window.location.reload();
  }
}
