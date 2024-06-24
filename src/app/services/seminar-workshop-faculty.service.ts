import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ErrorService} from "./error.service";
import {environment} from "../../environments/environment";
import {catchError, tap} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class SeminarWorkshopFacultyService {
    private BASE_API_URL = environment.BASE_API_URL;

    constructor(private http: HttpClient, private errorService: ErrorService) {
    }

    saveSeminarWorkshopFaculty(data) {
        return this.http.post(this.BASE_API_URL + '/saveSeminarWorkshopFaculty', data)
            .pipe(catchError(this.errorService.serverError), tap(response => {

            }));
    }

    updateSeminarWorkshopFaculty(data) {
        return this.http.post(this.BASE_API_URL + '/updateSeminarWorkshopFaculty', data)
            .pipe(catchError(this.errorService.serverError), tap(response => {

            }));
    }

    searchSeminarWorkshopFaculty(data) {
        return this.http.post(this.BASE_API_URL + '/searchSeminarWorkshopFaculty', data)
            .pipe(catchError(this.errorService.serverError), tap(response => {

            }));
    }

    deleteSeminarWorkshopFaculty(data) {
        return this.http.get(this.BASE_API_URL + '/deleteBookPublication/' + data)
            .pipe(catchError(this.errorService.serverError), tap(response => {

            }));
    }


}
