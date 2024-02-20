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

  payrolltypeList = [];

  payrollTypeListSubject = new Subject<any[]>();

    getPayrollTypeListener(){
        return this.payrollTypeListSubject.asObservable();
    }
  constructor(private  http: HttpClient, private errorService: ErrorService) {
    this.http.get(this.BASE_API_URL + '/getPayrollTypes').subscribe((response: any) =>{
      this.payrolltypeList = response.data;
      this.payrollTypeListSubject.next([...this.payrolltypeList]);
    });
  }

  getPayrollTypes(){
    return [...this.payrolltypeList];
  }

  savePayrollType(data){
    return this.http.post(this.BASE_API_URL + '/savePayrollTypes', data)
        .pipe(catchError(this.errorService.serverError), tap(response => {
          // @ts-ignore
          if(response.success == 1){
            // @ts-ignore
            this.payrolltypeList.push(response.data);
            this.payrollTypeListSubject.next([...this.payrolltypeList]);
          }
        }));
  }

  updatePayrollType(value){
    return this.http.post(this.BASE_API_URL + '/updatePayrollTypes', value)
        .pipe(catchError(this.errorService.serverError), tap(response => {
          // @ts-ignore
          if(response.success == 1){
            // @ts-ignore
            const index = this.payrolltypeList.findIndex(x => x.id === response.data.id);
            // @ts-ignore
            this.payrolltypeList[index] = response.data;
            this.payrollTypeListSubject.next([...this.payrolltypeList]);
          }
        }));
  }
  deletePayrollTypes(id){
    return this.http.get(this.BASE_API_URL + '/deletePayrollTypes/' + id)
        .pipe(catchError(this.errorService.serverError), tap(response => {
          // @ts-ignore
          if(response.success == 1){
            // @ts-ignore
            const index = this.payrolltypeList.findIndex(x => x.id === response.data.id);
            this.payrolltypeList.splice(index,1);
            this.payrollTypeListSubject.next([...this.payrolltypeList]);
          }
        }));
  }

}
