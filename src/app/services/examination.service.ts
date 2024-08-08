import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ErrorService} from "./error.service";
import {Subject} from "rxjs";
import {environment} from "../../environments/environment";
import {catchError, tap} from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})
export class ExaminationService {
    subjectDetailsList = [];
    questionList = [];
    subjectDetailsListSubject = new Subject<any[]>();
    questionListSubject = new Subject<any[]>();
    private BASE_API_URL = environment.BASE_API_URL;

    constructor(private http: HttpClient, private errorService: ErrorService) {
        this.http.get(this.BASE_API_URL + '/getSubjectDetails').subscribe((response: any) => {
            this.subjectDetailsList = response.data;
            this.subjectDetailsListSubject.next([...this.subjectDetailsList]);
        });
        this.http.get(this.BASE_API_URL + '/getQuestions').subscribe((response: any) => {
            this.questionList = response.data;
            this.questionListSubject.next([...this.questionList]);
        });
    }

    getSubjectDetailsListListener() {
        return this.subjectDetailsListSubject.asObservable();
    }

    getQuestionListListener() {
        return this.questionListSubject.asObservable();
    }

    getSubjectDetailsList() {
        return [...this.subjectDetailsList];
    }

    getQuestionListList() {
        return [...this.questionList];
    }

    saveSubjectDetails(value) {
        return this.http.post(this.BASE_API_URL + '/saveSubjectDetails', value)
            .pipe(catchError(this.errorService.serverError), tap(response => {
                // @ts-ignore
                if (response.success == 1) {
                    // @ts-ignore
                    this.subjectDetailsList.push(response.data);
                    this.subjectDetailsListSubject.next([...this.subjectDetailsList]);
                }
            }));
    }

    deleteSubjectDetails(id) {
        return this.http.get(this.BASE_API_URL + '/deleteSubjectDetails/' + id)
            .pipe(catchError(this.errorService.serverError), tap(response => {
                // @ts-ignore
                if (response.success == 1) {
                    // @ts-ignore
                    const index = this.subjectDetailsList.findIndex(x => x.id === response.data.id);
                    // @ts-ignore
                    this.subjectDetailsList.splice(index, 1);
                    this.subjectDetailsListSubject.next([...this.subjectDetailsList]);
                }
            }));
    }

    updateSubjectDetails(data) {
        return this.http.post(this.BASE_API_URL + '/updateSubjectDetails', data)
            .pipe(catchError(this.errorService.serverError), tap(response => {
                // @ts-ignore
                if (response.success == 1) {
                    // @ts-ignore
                    const index = this.subjectDetailsList.findIndex(x => x.id === response.data.id);
                    // @ts-ignore
                    this.subjectDetailsList[index] = response.data;
                    this.subjectDetailsListSubject.next([...this.subjectDetailsList]);
                }
            }));
    }

    getUpdatedQuestionList() {
        this.http.get(this.BASE_API_URL + '/getQuestions').subscribe((response: any) => {
            this.questionList = response.data;
            this.questionListSubject.next([...this.questionList]);
        });
    }

    saveQuestions(value) {
        return this.http.post(this.BASE_API_URL + '/saveQuestions', value)
            .pipe(catchError(this.errorService.serverError), tap(response => {
                // @ts-ignore
                if (response.success == 1) {
                    this.getUpdatedQuestionList();
                }
            }));
    }

    updateQuestions(value) {
        return this.http.post(this.BASE_API_URL + '/updateQuestions', value)
            .pipe(catchError(this.errorService.serverError), tap(response => {
                // @ts-ignore
                if (response.success == 1) {
                    this.getUpdatedQuestionList();
                }
            }));
    }

    deleteQuestions(value) {
        return this.http.post(this.BASE_API_URL + '/deleteQuestion', value)
            .pipe(catchError(this.errorService.serverError), tap(response => {
                // @ts-ignore
                if (response.success == 1) {
                    this.getUpdatedQuestionList();
                }
            }));
    }

    updateSubjectStatus(id) {
        return this.http.get(this.BASE_API_URL + '/updateStatus/' + id)
            .pipe(catchError(this.errorService.serverError), tap(response => {
                // @ts-ignore
                if (response.success == 1) {
                    // @ts-ignore
                    const index = this.questionList.findIndex(x => x.subject_details_id === response.data.subject_details_id);
                    // @ts-ignore
                    this.questionList[index] = response.data;
                    this.questionListSubject.next([...this.questionList]);
                }
            }));
    }

    saveAnswerSheet(value) {
        return this.http.post(this.BASE_API_URL + '/saveAnswerSheet', value)
            .pipe(catchError(this.errorService.serverError), tap(response => {
                // @ts-ignore
                if (response.success == 1) {
                    this.getUpdatedQuestionList();
                }
            }));
    }

    saveMarksheet(value) {
        return this.http.post(this.BASE_API_URL + '/saveMarksheet', value)
            .pipe(catchError(this.errorService.serverError), tap(response => {
            }));
    }

    getMarkSheet(value) {
        return this.http.post(this.BASE_API_URL + '/getMarksheet', value)
            .pipe(catchError(this.errorService.serverError), tap(response => {
            }));
    }

}
