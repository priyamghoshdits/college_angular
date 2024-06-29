import {Injectable} from '@angular/core';
import {catchError, tap} from "rxjs/operators";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {ErrorService} from "./error.service";

@Injectable({
    providedIn: 'root'
})
export class ApiScoreService {
    private BASE_API_URL = environment.BASE_API_URL;

    constructor(private http: HttpClient, private errorService: ErrorService) {
    }

    saveUploadFile(value) {
        return this.http.post(this.BASE_API_URL + '/saveUploadFileApiScore', value)
            .pipe(catchError(this.errorService.serverError), tap(response => {

            }));
    }

    saveApiScore(value) {
        return this.http.post(this.BASE_API_URL + '/saveApiScore', value)
            .pipe(catchError(this.errorService.serverError), tap(response => {

            }));
    }

    updateApiScore(value) {
        return this.http.post(this.BASE_API_URL + '/updateApiScore', value)
            .pipe(catchError(this.errorService.serverError), tap(response => {

            }));
    }

    searchApiScore(value) {
        return this.http.post(this.BASE_API_URL + '/searchApiScore', value)
            .pipe(catchError(this.errorService.serverError), tap(response => {
            }));
    }

    deleteApiScore(value) {
        return this.http.get(this.BASE_API_URL + '/deleteApiScore/' + value)
            .pipe(catchError(this.errorService.serverError), tap(response => {

            }));
    }


}
