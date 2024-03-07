import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ErrorService} from "./error.service";
import {environment} from "../../environments/environment";
import {Subject} from "rxjs";
import {catchError, tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CertificateService {
  private BASE_API_URL = environment.BASE_API_URL;
  certificateTypeList = [];
  certificateList = [];

  certificateTypeListSubject = new Subject<any[]>();
  certificateListSubject = new Subject<any[]>();

  getCertificateTypeListListener(){
    return this.certificateTypeListSubject.asObservable();
  }

    getCertificateListListener(){
        return this.certificateListSubject.asObservable();
    }

  constructor(private  http: HttpClient, private errorService: ErrorService) {
    this.http.get(this.BASE_API_URL + '/getCertificateType').subscribe((response: any) =>{
      this.certificateTypeList = response.data;
      this.certificateTypeListSubject.next([...this.certificateTypeList]);
    });
      this.http.get(this.BASE_API_URL + '/getCertificate').subscribe((response: any) =>{
          this.certificateList = response.data;
          this.certificateListSubject.next([...this.certificateList]);
      });
  }

  getCertificateType(){
    return [...this.certificateTypeList];
  }

  saveCertificateTypes(value){
    return this.http.post(this.BASE_API_URL + '/saveCertificateType', value)
        .pipe(catchError(this.errorService.serverError), tap(response => {
          // @ts-ignore
          if(response.success == 1){
            // @ts-ignore
            this.certificateTypeList.push(response.data);
            this.certificateTypeListSubject.next([...this.certificateTypeList]);
          }
        }));
  }

  getStudentForCertificate(value){
      return this.http.post(this.BASE_API_URL + '/getStudentForCertificate', value)
          .pipe(catchError(this.errorService.serverError), tap(response => {
          }));
  }

    saveCertificate(value){
        return this.http.post(this.BASE_API_URL + '/saveCertificate', value)
            .pipe(catchError(this.errorService.serverError), tap(response => {
                // @ts-ignore
                if(response.success == 1){
                    // @ts-ignore
                    this.certificateList.push(response.data);
                    this.certificateListSubject.next([...this.certificateList]);
                }
            }));
    }

  updateCertificateTypes(data){
    return this.http.post(this.BASE_API_URL + '/updateCertificateType', data)
        .pipe(catchError(this.errorService.serverError), tap(response => {
          // @ts-ignore
          if(response.success == 1){
            // @ts-ignore
            const index= this.certificateTypeList.findIndex(x => x.id === response.data.id);
            // @ts-ignore
            this.certificateTypeList[index] = response.data;
            this.certificateTypeListSubject.next([...this.certificateTypeList]);
          }
        }));
  }

  deleteCertificateTypes(id){
    return this.http.get(this.BASE_API_URL + '/deleteCertificateType/' + id)
        .pipe(catchError(this.errorService.serverError), tap(response => {
          // @ts-ignore
          if(response.success == 1){
            // @ts-ignore
            const index = this.certificateTypeList.findIndex(x => x.id === response.data.id);
            // @ts-ignore
            this.certificateTypeList.splice(index,1);
            this.certificateTypeListSubject.next([...this.certificateTypeList]);
          }
        }));
  }

}
