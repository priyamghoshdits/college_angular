import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ErrorService} from "./error.service";
import {environment} from "../../environments/environment";
import {Subject} from "rxjs";
import {catchError, tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class IncomeAndExpenseServiceService {
  private BASE_API_URL = environment.BASE_API_URL;

  incomeHeadList = [];
  expenseHeadList = [];


  incomeHeadSubject = new Subject<any[]>();
  expenseHeadSubject = new Subject<any[]>();

  getIncomeHeadListener(){
    return this.incomeHeadSubject.asObservable();
  }

    getExpenseHeadListener(){
        return this.expenseHeadSubject.asObservable();
    }

  constructor(private  http: HttpClient, private errorService: ErrorService) {
    this.http.get(this.BASE_API_URL + '/getIncomeHead').subscribe((response: any) =>{
      this.incomeHeadList = response.data;
      this.incomeHeadSubject.next([...this.incomeHeadList]);
    });
      this.http.get(this.BASE_API_URL + '/getExpenseHead').subscribe((response: any) =>{
          this.expenseHeadList = response.data;
          this.expenseHeadSubject.next([...this.expenseHeadList]);
      });
  }

  getIncomeHead(){
      return [...this.incomeHeadList];
  }

    getExpenseHead(){
        return [...this.expenseHeadList];
    }

  saveIncomeHead(value){
    return this.http.post(this.BASE_API_URL + '/saveIncomeHead', value)
        .pipe(catchError(this.errorService.serverError), tap(response => {
          // @ts-ignore
          if(response.success == 1){
            // @ts-ignore
            this.incomeHeadList.push(response.data);
            this.incomeHeadSubject.next([...this.incomeHeadList]);
          }
        }));
  }

    saveExpenseHead(value){
        return this.http.post(this.BASE_API_URL + '/saveExpenseHead', value)
            .pipe(catchError(this.errorService.serverError), tap(response => {
                // @ts-ignore
                if(response.success == 1){
                    // @ts-ignore
                    this.expenseHeadList.push(response.data);
                    this.expenseHeadSubject.next([...this.expenseHeadList]);
                }
            }));
    }

  updateIncomeHead(value){
    return this.http.post(this.BASE_API_URL + '/updateIncomeHead', value)
        .pipe(catchError(this.errorService.serverError), tap(response => {
          // @ts-ignore
          if(response.success == 1){
            // @ts-ignore
            const index = this.incomeHeadList.findIndex(x => x.id === response.data.id);
            // @ts-ignore
            this.incomeHeadList[index] = response.data;
            this.incomeHeadSubject.next([...this.incomeHeadList]);
          }
        }));
  }

    updateExpenseHead(value){
        return this.http.post(this.BASE_API_URL + '/updateExpenseHead', value)
            .pipe(catchError(this.errorService.serverError), tap(response => {
                // @ts-ignore
                if(response.success == 1){
                    // @ts-ignore
                    const index = this.expenseHeadList.findIndex(x => x.id === response.data.id);
                    // @ts-ignore
                    this.expenseHeadList[index] = response.data;
                    this.expenseHeadSubject.next([...this.expenseHeadList]);
                }
            }));
    }

  deleteIncomeHead(id){
      return this.http.get(this.BASE_API_URL + '/deleteIncomeHead/'+ id)
          .pipe(catchError(this.errorService.serverError), tap(response => {
              // @ts-ignore
              if(response.success == 1){
                  // @ts-ignore
                  const index = this.incomeHeadList.findIndex(x => x.id === response.data.id);
                  // @ts-ignore
                  this.incomeHeadList.splice(index,1);
                  this.incomeHeadSubject.next([...this.incomeHeadList]);
              }
          }));
  }

    deleteExpenseHead(id){
        return this.http.get(this.BASE_API_URL + '/deleteExpenseHead/'+ id)
            .pipe(catchError(this.errorService.serverError), tap(response => {
                // @ts-ignore
                if(response.success == 1){
                    // @ts-ignore
                    const index = this.expenseHeadList.findIndex(x => x.id === response.data.id);
                    // @ts-ignore
                    this.expenseHeadList.splice(index,1);
                    this.expenseHeadSubject.next([...this.expenseHeadList]);
                }
            }));
    }

}
