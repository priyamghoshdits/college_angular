import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {ErrorService} from "./error.service";
import {Subject} from "rxjs";
import {catchError, tap} from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})
export class MemberService {
    teacherList = [];
    memberList = [];
    categoryList = [];
    staffExperienceList = [];
    teacherListSubject = new Subject<any[]>();
    memberListSubject = new Subject<any[]>();
    CategoryListSubject = new Subject<any[]>();
    staffAttendanceSubject = new Subject<any[]>();
    generatedPayrollSubject = new Subject<any[]>();
    staffExperienceListSubject = new Subject<any[]>();
    private BASE_API_URL = environment.BASE_API_URL;

    constructor(private http: HttpClient, private errorService: ErrorService) {
        this.http.get(this.BASE_API_URL + '/getTeachers').subscribe((response: any) => {
            this.teacherList = response.data;
            this.teacherListSubject.next([...this.teacherList]);
        });
        this.http.get(this.BASE_API_URL + '/getAllMembers').subscribe((response: any) => {
            this.memberList = response.data;
            this.memberListSubject.next([...this.memberList]);
        });
        this.http.get(this.BASE_API_URL + '/getCategory').subscribe((response: any) => {
            this.categoryList = response.data;
            this.CategoryListSubject.next([...this.categoryList]);
        });
        this.http.get(this.BASE_API_URL + '/getExperience').subscribe((response: any) => {
            this.staffExperienceList = response.data;
            this.staffExperienceListSubject.next([...this.staffExperienceList]);
        });
    }

    getTeacherListener() {
        return this.teacherListSubject.asObservable();
    }

    getStaffExperienceListener() {
        return this.staffExperienceListSubject.asObservable();
    }

    getGeneratedPayrollListener() {
        return this.generatedPayrollSubject.asObservable();
    }

    getMemberListener() {
        return this.memberListSubject.asObservable();
    }

    getStaffAttendanceListener() {
        return this.staffAttendanceSubject.asObservable();
    }

    getCategoryListener() {
        return this.CategoryListSubject.asObservable();
    }

    getStaffExperienceList() {
        return [...this.staffExperienceList];
    }

    getTeacherList() {
        return [...this.teacherList];
    }

    getMemberList() {
        return [...this.memberList];
    }

    getCategoryList() {
        return [...this.categoryList];
    }

    getStaffAttendance(user_type_id, date) {
        return this.http.get(this.BASE_API_URL + '/getStaffAttendance/' + user_type_id + '/' + date)
            .pipe(catchError(this.errorService.serverError), tap(response => {

            }));
    }

    getMembers(user_type_id, month, year) {
        return this.http.get(this.BASE_API_URL + '/getMembers/' + user_type_id + '/' + month + '/' + year)
            .pipe(catchError(this.errorService.serverError), tap(response => {

            }));
    }

    saveProceedToPay(value) {
        return this.http.post(this.BASE_API_URL + '/saveProceedToPay/', value)
            .pipe(catchError(this.errorService.serverError), tap(response => {

            }));
    }

    revertToProceedToPay(id) {
        return this.http.get(this.BASE_API_URL + '/revertToProceedToPay/' + id)
            .pipe(catchError(this.errorService.serverError), tap(response => {

            }));
    }

    revertBackToGenerate(id) {
        return this.http.get(this.BASE_API_URL + '/revertToGenerate/' + id)
            .pipe(catchError(this.errorService.serverError), tap(response => {

            }));
    }

    saveAttendance(data) {
        return this.http.post(this.BASE_API_URL + '/saveStaffAttendance', data)
            .pipe(catchError(this.errorService.serverError), tap(response => {

            }));
    }

    savePaperSetter(value){
        return this.http.post(this.BASE_API_URL + '/savePaperSetter', value)
            .pipe(catchError(this.errorService.serverError), tap(response => {
                
            }));
    }

    saveUploadFile(value){
        return this.http.post(this.BASE_API_URL + '/saveUploadFile', value)
            .pipe(catchError(this.errorService.serverError), tap(response => {
                
            }));
    }

    saveMember(value) {
        return this.http.post(this.BASE_API_URL + '/saveMember', value)
            .pipe(catchError(this.errorService.serverError), tap(response => {
                // @ts-ignore
                if (response.success == 1) {
                    // @ts-ignore
                    this.memberList.push(response.data);
                    this.memberListSubject.next([...this.memberList]);
                }
            }));
    }

    saveStaffExperience(value) {
        return this.http.post(this.BASE_API_URL + '/saveExperience', value)
            .pipe(catchError(this.errorService.serverError), tap(response => {
                // @ts-ignore
                if (response.success == 1) {
                    // @ts-ignore
                    this.staffExperienceList.push(response.data);
                    this.staffExperienceListSubject.next([...this.staffExperienceList]);
                }
            }));
    }

    updateStaffExperience(value) {
        return this.http.post(this.BASE_API_URL + '/updateExperience', value)
            .pipe(catchError(this.errorService.serverError), tap(response => {
                // @ts-ignore
                if (response.success == 1) {
                    // @ts-ignore
                    const index = this.staffExperienceList.findIndex(x => x.id === response.data.id);
                    // @ts-ignore
                    this.staffExperienceList[index] = response.data;
                    this.staffExperienceListSubject.next([...this.staffExperienceList]);
                }
            }));
    }

  deleteStaffExperience(id) {
    return this.http.get(this.BASE_API_URL + '/deleteExperience/' + id)
        .pipe(catchError(this.errorService.serverError), tap(response => {
          // @ts-ignore
          if (response.success == 1) {
            // @ts-ignore
            const index = this.staffExperienceList.findIndex(x => x.id === response.data.id);
            this.staffExperienceList.splice(index, 1);
            this.staffExperienceListSubject.next([...this.staffExperienceList]);
          }
        }));
  }


    saveGeneratedPayroll(value) {
        return this.http.post(this.BASE_API_URL + '/savePayroll', value)
            .pipe(catchError(this.errorService.serverError), tap(response => {
            }));
    }

    updateMember(value) {
        return this.http.post(this.BASE_API_URL + '/updateMember', value)
            .pipe(catchError(this.errorService.serverError), tap(response => {
                // @ts-ignore
                if (response.success == 1) {
                    // @ts-ignore
                    const index = this.memberList.findIndex(x => x.id === response.data.id);
                    // @ts-ignore
                    this.memberList[index] = response.data;
                    this.memberListSubject.next([...this.memberList]);
                }
            }));
    }

    deleteStaff(id) {
        return this.http.get(this.BASE_API_URL + '/deleteMember/' + id)
            .pipe(catchError(this.errorService.serverError), tap(response => {
                // @ts-ignore
                if (response.success == 1) {
                    // @ts-ignore
                    const index = this.memberList.findIndex(x => x.id === response.data.id);
                    this.memberList.splice(index, 1);
                    this.memberListSubject.next([...this.memberList]);
                }
            }));
    }


}
