import {Injectable} from '@angular/core';
import {catchError, tap} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";
import {ErrorService} from "./error.service";
import {environment} from "../../environments/environment";

@Injectable({
    providedIn: 'root'
})
export class ExaminerService {
    private BASE_API_URL = environment.BASE_API_URL;

    constructor(private http: HttpClient, private errorService: ErrorService) {
    }

    saveUploadFile(value) {
        return this.http.post(this.BASE_API_URL + '/saveUploadFileExaminer', value)
            .pipe(catchError(this.errorService.serverError), tap(response => {

            }));
    }

    saveExaminer(value) {
        return this.http.post(this.BASE_API_URL + '/saveExaminer', value)
            .pipe(catchError(this.errorService.serverError), tap(response => {

            }));
    }

    searchExaminer(value) {
        return this.http.post(this.BASE_API_URL + '/searchExaminer', value)
            .pipe(catchError(this.errorService.serverError), tap(response => {
            }));
    }

    deleteExaminer(value) {
        return this.http.get(this.BASE_API_URL + '/deleteExaminer/' + value)
            .pipe(catchError(this.errorService.serverError), tap(response => {

            }));
    }

    updateExaminer(value) {
        return this.http.post(this.BASE_API_URL + '/updateExaminer', value)
            .pipe(catchError(this.errorService.serverError), tap(response => {

            }));
    }


}
