import { Injectable } from '@angular/core';
import {catchError, tap} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";
import {ErrorService} from "./error.service";
import {environment} from "../../environments/environment";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AdmissionEnquiryService {
  private BASE_API_URL = environment.BASE_API_URL;

  studentEnquiryList = [];

  studentEnquiryListSubject = new Subject<any[]>();

  getStudentEnquiryListListener(){
    return this.studentEnquiryListSubject.asObservable();
  }

  constructor(private  http: HttpClient, private errorService: ErrorService) {
    this.http.get(this.BASE_API_URL + '/getAdmissionEnquiry').subscribe((response: any) =>{
      this.studentEnquiryList = response.data;
      this.studentEnquiryListSubject.next([...this.studentEnquiryList]);
    });
  }

  getStudentEnquiryList(){
    return [...this.studentEnquiryList];
  }

  saveStudentEnquiry(data){
    return this.http.post(this.BASE_API_URL + '/saveAdmissionEnquiry', data)
        .pipe(catchError(this.errorService.serverError), tap(response => {
          // @ts-ignore
          if(response.success == 1){
            // @ts-ignore
            this.studentEnquiryList.push(response.data);
            this.studentEnquiryListSubject.next([...this.studentEnquiryList]);
          }
        }));
  }

  updateStudentEnquiry(value){
    return this.http.post(this.BASE_API_URL + '/updateAdmissionEnquiry', value)
        .pipe(catchError(this.errorService.serverError), tap(response => {
          // @ts-ignore
          if(response.success == 1){
            // @ts-ignore
            const index = this.studentEnquiryList.findIndex(x => x.id === response.data.id);
            // @ts-ignore
            this.studentEnquiryList[index] = response.data;
            this.studentEnquiryListSubject.next([...this.studentEnquiryList]);
          }
        }));
  }

  deleteStudentEnquiry(id){
    return this.http.get(this.BASE_API_URL + '/deleteAdmissionEnquiry/' + id)
        .pipe(catchError(this.errorService.serverError), tap(response => {
          // @ts-ignore
          if(response.success == 1){
            // @ts-ignore
            const index = this.studentEnquiryList.findIndex(x => x.id === response.data.id);
            this.studentEnquiryList.splice(index,1);
            this.studentEnquiryListSubject.next([...this.studentEnquiryList]);
          }
        }));
  }
}
