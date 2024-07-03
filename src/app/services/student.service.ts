import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ErrorService} from "./error.service";
import {Subject} from "rxjs";
import {environment} from "../../environments/environment";
import {catchError, tap} from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})
export class StudentService {
    studentList = [];
    educationQualificationList = [];

    studentListSubject = new Subject<any[]>();
    private BASE_API_URL = environment.BASE_API_URL;

    getStudentListener() {
        return this.studentListSubject.asObservable();
    }

    constructor(private http: HttpClient, private errorService: ErrorService) {
        this.http.get(this.BASE_API_URL + '/getStudents').subscribe((response: any) => {
            this.studentList = response.data;
            this.studentListSubject.next([...this.studentList]);
        });
    }

    getSingleStudentFullDetails(student_id){
        return this.http.get(this.BASE_API_URL + '/getStudentFullDetails/' + student_id)
            .pipe(catchError(this.errorService.serverError), tap(response => {

            }));
    }

    saveEducationQualification(data){
        return this.http.post(this.BASE_API_URL + '/saveEducationQualification', data)
            .pipe(catchError(this.errorService.serverError), tap(response => {

            }));
    }

    updateEducationQualification(data){
        return this.http.post(this.BASE_API_URL + '/updateEducationQualification', data)
            .pipe(catchError(this.errorService.serverError), tap(response => {

            }));
    }

    searchEducationQualification(student_id){
        return this.http.get(this.BASE_API_URL + '/searchEducationQualification/'+ student_id)
            .pipe(catchError(this.errorService.serverError), tap(response => {

            }));
    }

    getUpdatedStudentList() {
        this.http.get(this.BASE_API_URL + '/getStudents').subscribe((response: any) => {
            this.studentList = response.data;
            this.studentListSubject.next([...this.studentList]);
        });
    }

    getSessionWiseStudent(data) {
        return this.http.post(this.BASE_API_URL + '/getStudentsBySession', data)
            .pipe(catchError(this.errorService.serverError), tap(response => {
            }));
    }

    getStudentLists() {
        return [...this.studentList];
    }

    sendLoginCredentials(id) {
        return this.http.get(this.BASE_API_URL + '/sendLoginCredentials/' + id)
            .pipe(catchError(this.errorService.serverError), tap(response => {
            }));
    }

    saveStudent(data) {
        return this.http.post(this.BASE_API_URL + '/saveStudent', data)
            .pipe(catchError(this.errorService.serverError), tap(response => {
                // @ts-ignore
                if (response.success == 1) {
                    // @ts-ignore
                    this.studentList.push(response.data);
                    this.studentListSubject.next([...this.studentList]);
                }
            }));
    }

    updateStudent(value) {
        return this.http.post(this.BASE_API_URL + '/updateStudent', value)
            .pipe(catchError(this.errorService.serverError), tap(response => {
                // @ts-ignore
                if (response.success == 1) {
                    // @ts-ignore
                    const index = this.studentList.findIndex(x => x.id === response.data.id);
                    // @ts-ignore
                    this.studentList[index] = response.data;
                    this.studentListSubject.next([...this.studentList]);
                }
            }));
    }

    promoteStudents(value) {
        return this.http.post(this.BASE_API_URL + '/promoteStudents', value)
            .pipe(catchError(this.errorService.serverError), tap(response => {
                // @ts-ignore
                if (response.success == 1) {
                    this.getUpdatedStudentList();
                }
            }));
    }

    deleteStudents(id) {
        return this.http.get(this.BASE_API_URL + '/deleteMember/' + id)
            .pipe(catchError(this.errorService.serverError), tap(response => {
                // @ts-ignore
                if (response.success == 1) {
                    // @ts-ignore
                    const index = this.studentList.findIndex(x => x.id === response.data.id);
                    this.studentList.splice(index, 1);
                    this.studentListSubject.next([...this.studentList]);
                }
            }));
    }

    getStudentAttendance(course_id, semester_id, date, subject_id, session_id) {
        return this.http.get(this.BASE_API_URL + '/getStudentAttendance/' + course_id + '/' + semester_id + '/' + date + '/' + subject_id + '/' + session_id)
            .pipe(catchError(this.errorService.serverError), tap(response => {
            }));
    }

    getStudentAttendanceNew(course_id, semester_id, date, subject_id, session_id, _class) {
        return this.http.get(this.BASE_API_URL + '/getStudentAttendance/' + course_id + '/' + semester_id + '/' + date + '/' + subject_id + '/' + session_id + '/' + _class)
            .pipe(catchError(this.errorService.serverError), tap(response => {
            }));
    }

    getUserAttendance(course_id, semester_id, date, user_id, member_id) {
        return this.http.get(this.BASE_API_URL + '/getStudentOwnAttendance/' + course_id + '/' + semester_id + '/' + date + '/' + user_id + '/' + member_id)
            .pipe(catchError(this.errorService.serverError), tap(response => {
            }));
    }

    changeStudentStatus(id) {
        return this.http.get(this.BASE_API_URL + '/changeStudentStatus/' + id)
            .pipe(catchError(this.errorService.serverError), tap(response => {
                // @ts-ignore
                if (response.success == 1) {
                    // @ts-ignore
                    const index = this.studentList.findIndex(x => x.id === response.data.id);
                    // @ts-ignore
                    this.studentList[index] = response.data;
                    this.studentListSubject.next([...this.studentList]);
                }
            }));
    }

    saveStudentAttendance(data) {
        return this.http.post(this.BASE_API_URL + '/saveAttendance', data)
            .pipe(catchError(this.errorService.serverError), tap(response => {
            }));
    }

    updateClassStart(data,latitude, longitude) {
        return this.http.get(this.BASE_API_URL + '/updateClassStart/' + data + '/' + latitude + '/'+ longitude)
            .pipe(catchError(this.errorService.serverError), tap(response => {
            }));
    }

    updateClassEnd(data,latitude, longitude) {
        return this.http.get(this.BASE_API_URL + '/updateClassEnd/' + data + '/' + latitude + '/'+ longitude)
            .pipe(catchError(this.errorService.serverError), tap(response => {
            }));
    }


    refundStudent(id) {
        return this.http.get(this.BASE_API_URL + '/refundPayment/' + id)
            .pipe(catchError(this.errorService.serverError), tap(response => {
                // @ts-ignore
                if (response.success == 1) {
                    // @ts-ignore
                    const index = this.studentList.findIndex(x => x.id === response.data.id);
                    // @ts-ignore
                    this.studentList[index] = response.data;
                    this.studentListSubject.next([...this.studentList]);
                }
            }));
    }

}
