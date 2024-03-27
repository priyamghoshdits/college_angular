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
  incomeList = [];
  expenseHeadList = [];
    expenseList = [];


  incomeHeadSubject = new Subject<any[]>();
  incomeSubject = new Subject<any[]>();
  expenseHeadSubject = new Subject<any[]>();
  expenseSubject = new Subject<any[]>();

  getIncomeHeadListener(){
    return this.incomeHeadSubject.asObservable();
  }
    getIncomeListener(){
        return this.incomeSubject.asObservable();
    }

    getExpenseHeadListener(){
        return this.expenseHeadSubject.asObservable();
    }
    getExpenseListener(){
        return this.expenseSubject.asObservable();
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
      this.http.get(this.BASE_API_URL + '/getIncome').subscribe((response: any) =>{
          this.incomeList = response.data;
          this.incomeSubject.next([...this.incomeList]);
      });
      this.http.get(this.BASE_API_URL + '/getExpense').subscribe((response: any) =>{
          this.expenseList = response.data;
          this.expenseSubject.next([...this.expenseList]);
      });
  }

  getUpdatedIncome(){
      this.http.get(this.BASE_API_URL + '/getIncome').subscribe((response: any) =>{
          this.incomeList = response.data;
          this.incomeSubject.next([...this.incomeList]);
      });
  }

  getUpdatedExpense(){
      this.http.get(this.BASE_API_URL + '/getExpense').subscribe((response: any) =>{
          this.expenseList = response.data;
          this.expenseSubject.next([...this.expenseList]);
      });
  }

  getExpense(){
      return [...this.expenseList];
  }

  getIncome(){
      return [...this.incomeList];
  }

  getIncomeHead(){
      return [...this.incomeHeadList];
  }

    getExpenseHead(){
        return [...this.expenseHeadList];
    }

    saveIncome(value){
        return this.http.post(this.BASE_API_URL + '/saveIncome', value)
            .pipe(catchError(this.errorService.serverError), tap(response => {
                // @ts-ignore
                if(response.success == 1){
                    // @ts-ignore
                    this.incomeList.push(response.data);
                    this.incomeSubject.next([...this.incomeList]);
                }
            }));
    }

    saveExpense(value){
        return this.http.post(this.BASE_API_URL + '/saveExpense', value)
            .pipe(catchError(this.errorService.serverError), tap(response => {
                // @ts-ignore
                if(response.success == 1){
                    // @ts-ignore
                    this.expenseList.push(response.data);
                    this.expenseSubject.next([...this.expenseList]);
                }
            }));
    }

    updateExpense(value){
        return this.http.post(this.BASE_API_URL + '/updateExpense', value)
            .pipe(catchError(this.errorService.serverError), tap(response => {
                // @ts-ignore
                if(response.success == 1){
                    // @ts-ignore
                    const index = this.expenseList.findIndex(x => x.id === response.data.id);
                    // @ts-ignore
                    this.expenseList[index] = response.data;
                    this.expenseSubject.next([...this.expenseList]);
                }
            }));
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

    updateIncome(value){
        return this.http.post(this.BASE_API_URL + '/updateIncome', value)
            .pipe(catchError(this.errorService.serverError), tap(response => {
                // @ts-ignore
                if(response.success == 1){
                    // @ts-ignore
                    const index = this.incomeList.findIndex(x => x.id === response.data.id);
                    // @ts-ignore
                    this.incomeList[index] = response.data;
                    this.incomeSubject.next([...this.incomeList]);
                }
            }));
    }

    deleteIncome(id){
        return this.http.get(this.BASE_API_URL + '/deleteIncome/'+ id)
            .pipe(catchError(this.errorService.serverError), tap(response => {
                // @ts-ignore
                if(response.success == 1){
                    // @ts-ignore
                    const index = this.incomeList.findIndex(x => x.id === response.data.id);
                    // @ts-ignore
                    this.incomeList.splice(index,1);
                    this.incomeSubject.next([...this.incomeList]);
                }
            }));
    }

    deleteExpense(id){
        return this.http.get(this.BASE_API_URL + '/deleteExpense/'+ id)
            .pipe(catchError(this.errorService.serverError), tap(response => {
                // @ts-ignore
                if(response.success == 1){
                    // @ts-ignore
                    const index = this.expenseList.findIndex(x => x.id === response.data.id);
                    // @ts-ignore
                    this.expenseList.splice(index,1);
                    this.expenseSubject.next([...this.expenseList]);
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
