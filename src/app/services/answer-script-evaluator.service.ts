import {Injectable} from '@angular/core';
import {catchError, tap} from "rxjs/operators";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {ErrorService} from "./error.service";

@Injectable({
    providedIn: 'root'
})
export class AnswerScriptEvaluatorService {
    private BASE_API_URL = environment.BASE_API_URL;

    constructor(private http: HttpClient, private errorService: ErrorService) {
    }

    updateAnswerScriptEvaluator(value) {
        return this.http.post(this.BASE_API_URL + '/updateAnswerScriptEvaluator', value)
            .pipe(catchError(this.errorService.serverError), tap(response => {

            }));
    }

    deleteAnswerScriptEvaluator(value) {
        return this.http.get(this.BASE_API_URL + '/deleteAnswerScriptEvaluator/' + value)
            .pipe(catchError(this.errorService.serverError), tap(response => {

            }));
    }

    searchAnswerScriptEvaluator(value) {
        return this.http.post(this.BASE_API_URL + '/searchAnswerScriptEvaluator', value)
            .pipe(catchError(this.errorService.serverError), tap(response => {
            }));
    }

    saveUploadFile(value) {
        return this.http.post(this.BASE_API_URL + '/saveUploadFile', value)
            .pipe(catchError(this.errorService.serverError), tap(response => {

            }));
    }

    saveAnswerScriptEvaluator(value) {
        return this.http.post(this.BASE_API_URL + '/saveAnswerScriptEvaluator', value)
            .pipe(catchError(this.errorService.serverError), tap(response => {

            }));
    }

}
