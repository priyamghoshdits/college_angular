import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ErrorService} from "./error.service";
import {environment} from "../../environments/environment";
import {Subject} from "rxjs";
import {catchError, tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class JobService {
  private BASE_API_URL = environment.BASE_API_URL;
  companyDetailsList = [];

  companyDetailsListSubject = new Subject<any[]>();


  getCompanyDetailsListListener(){
    return this.companyDetailsListSubject.asObservable();
  }

  constructor(private  http: HttpClient, private errorService: ErrorService) {
    this.http.get(this.BASE_API_URL + '/getCompanyDetails').subscribe((response: any) =>{
      this.companyDetailsList = response.data;
      this.companyDetailsListSubject.next([...this.companyDetailsList]);
    });
  }

  getCompanyDetails(){
    return [...this.companyDetailsList];
  }

  saveCompanyDetails(data){
    return this.http.post(this.BASE_API_URL + '/saveCompanyDetails', data)
        .pipe(catchError(this.errorService.serverError), tap(response => {
          // @ts-ignore
          if(response.success == 1){
            // @ts-ignore
            this.companyDetailsList.push(response.data);
            this.companyDetailsListSubject.next([...this.companyDetailsList]);
          }
        }));
  }

  updateCompanyDetails(data){
    return this.http.post(this.BASE_API_URL + '/updateCompanyDetails', data)
        .pipe(catchError(this.errorService.serverError), tap(response => {
          // @ts-ignore
          if(response.success == 1){
            // @ts-ignore
            const index = this.companyDetailsList.findIndex(x => x.id === response.data.id);
            // @ts-ignore
            this.companyDetailsList[index] = response.data;
            this.companyDetailsListSubject.next([...this.companyDetailsList]);
          }
        }));
  }

  deleteCompanyDetails(id){
    return this.http.get(this.BASE_API_URL + '/deleteCompanyDetails/' + id)
        .pipe(catchError(this.errorService.serverError), tap(response => {
          // @ts-ignore
          if(response.success == 1){
            // @ts-ignore
            const index = this.companyDetailsList.findIndex(x => x.id === response.data.id);
            this.companyDetailsList.splice(index,1);
            this.companyDetailsListSubject.next([...this.companyDetailsList]);
          }
        }));
  }

}
