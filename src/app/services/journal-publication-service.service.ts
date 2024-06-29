import { Injectable } from '@angular/core';
import { environment } from "../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { ErrorService } from "./error.service";
import { catchError, tap } from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})
export class JournalPublicationServiceService {
    private BASE_API_URL = environment.BASE_API_URL;

    constructor(private http: HttpClient, private errorService: ErrorService) {

    }

    saveJournalPublication(value) {
        return this.http.post(this.BASE_API_URL + '/saveJournalPublication', value)
            .pipe(catchError(this.errorService.serverError), tap(response => {

            }));
    }

    searchJournalPublication(value) {
        return this.http.get(this.BASE_API_URL + '/searchJournalPublication/' + value)
            .pipe(catchError(this.errorService.serverError), tap(response => {

            }));
    }

    saveUploadFile(value) {
        return this.http.post(this.BASE_API_URL + '/saveJournalPublicationFile', value)
            .pipe(catchError(this.errorService.serverError), tap(response => {

            }));
    }

    deleteJournalPublication(value) {
        return this.http.get(this.BASE_API_URL + '/deleteJournalPublication/' + value)
            .pipe(catchError(this.errorService.serverError), tap(response => {

            }));
    }

    updateJournalPublication(value) {
        return this.http.post(this.BASE_API_URL + '/updateJournalPublication', value)
            .pipe(catchError(this.errorService.serverError), tap(response => {

            }));
    }

}
