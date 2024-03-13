import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ErrorService} from "./error.service";
import {Subject} from "rxjs";
import {environment} from "../../environments/environment";
import {catchError, tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class PayrollTypesService {
  private BASE_API_URL = environment.BASE_API_URL;

  payrollTypeList = [];

  payrollTypeListSubject = new Subject<any[]>();

    getPayrollTypeListener(){
        return this.payrollTypeListSubject.asObservable();
    }
  constructor(private  http: HttpClient, private errorService: ErrorService) {
    this.http.get(this.BASE_API_URL + '/getPayrollTypes').subscribe((response: any) =>{
      this.payrollTypeList = response.data;
      this.payrollTypeListSubject.next([...this.payrollTypeList]);
    });
  }

  getPayrollTypes(){
    return [...this.payrollTypeList];
  }

  savePayrollType(data){
    return this.http.post(this.BASE_API_URL + '/savePayrollTypes', data)
        .pipe(catchError(this.errorService.serverError), tap(response => {
          // @ts-ignore
          if(response.success == 1){
            // @ts-ignore
            this.payrollTypeList.push(response.data);
            this.payrollTypeListSubject.next([...this.payrollTypeList]);
          }
        }));
  }

  updatePayrollType(value){
    return this.http.post(this.BASE_API_URL + '/updatePayrollTypes', value)
        .pipe(catchError(this.errorService.serverError), tap(response => {
          // @ts-ignore
          if(response.success == 1){
            // @ts-ignore
            const index = this.payrollTypeList.findIndex(x => x.id === response.data.id);
            // @ts-ignore
            this.payrollTypeList[index] = response.data;
            this.payrollTypeListSubject.next([...this.payrollTypeList]);
          }
        }));
  }
  deletePayrollTypes(id){
    return this.http.get(this.BASE_API_URL + '/deletePayrollTypes/' + id)
        .pipe(catchError(this.errorService.serverError), tap(response => {
          // @ts-ignore
          if(response.success == 1){
            // @ts-ignore
            const index = this.payrollTypeList.findIndex(x => x.id === response.data.id);
            this.payrollTypeList.splice(index,1);
            this.payrollTypeListSubject.next([...this.payrollTypeList]);
          }
        }));
  }

}
