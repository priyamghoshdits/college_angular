import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ErrorService} from "./error.service";
import {environment} from "../../environments/environment";
import {Subject} from "rxjs";
import {catchError, tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class FeesService {
  private BASE_API_URL = environment.BASE_API_URL;
  feesTypeList = [];
  discountList = [];

  feesTypeListSubject = new Subject<any[]>();
  discountListSubject = new Subject<any[]>();

  getFeesTypeListListener(){
    return this.feesTypeListSubject.asObservable();
  }
  getDiscountListListener(){
      return this.discountListSubject.asObservable();
  }

  constructor(private  http: HttpClient, private errorService: ErrorService) {
    this.http.get(this.BASE_API_URL + '/getFeesType').subscribe((response: any) =>{
      this.feesTypeList = response.data;
      this.feesTypeListSubject.next([...this.feesTypeList]);
    });

    this.http.get(this.BASE_API_URL + '/getDiscount').subscribe((response: any) =>{
        this.discountList = response.data;
        this.discountListSubject.next([...this.discountList]);
    });
  }

  getFeesType(){
    return [...this.feesTypeList];
  }

  getDiscountList(){
      return [...this.discountList];
  }

  getTransactionDetails(id){
      return this.http.get(this.BASE_API_URL + '/getPaymentByStudentID/' + id)
          .pipe(catchError(this.errorService.serverError), tap(response => {
          }));
  }

  saveFeesType(value){
    return this.http.post(this.BASE_API_URL + '/saveFeesType', value)
        .pipe(catchError(this.errorService.serverError), tap(response => {
          // @ts-ignore
          if(response.success == 1){
            // @ts-ignore
            this.feesTypeList.push(response.data);
            this.feesTypeListSubject.next([...this.feesTypeList]);
          }
        }));
  }

  updateFeesType(data){
    return this.http.post(this.BASE_API_URL + '/updateFeesType', data)
        .pipe(catchError(this.errorService.serverError), tap(response => {
          // @ts-ignore
          if(response.success == 1){
            // @ts-ignore
            const index = this.feesTypeList.findIndex(x => x.id === response.data.id);
            // @ts-ignore
            this.feesTypeList[index] = response.data;
            this.feesTypeListSubject.next([...this.feesTypeList]);
          }
        }));
  }

  deleteFeesType(id){
    return this.http.get(this.BASE_API_URL + '/deleteFeesType/' + id)
        .pipe(catchError(this.errorService.serverError), tap(response => {
          // @ts-ignore
          if(response.success == 1){
            // @ts-ignore
            const index = this.feesTypeList.findIndex(x => x.id === response.data.id);
            // @ts-ignore
            this.feesTypeList.splice(index,1);
            this.feesTypeListSubject.next([...this.feesTypeList]);
          }
        }));
  }

  getFeesStructureByCourseId(id){
      return this.http.get(this.BASE_API_URL + '/getFeesStructureByCourseId/'+ id)
          .pipe(catchError(this.errorService.serverError), tap(response => {
      }));
  }

  saveFeesStructure(value){
      return this.http.post(this.BASE_API_URL + '/saveFeesStructure', value)
          .pipe(catchError(this.errorService.serverError), tap(response => {
              // @ts-ignore
          }));
  }

  deleteFeesStructure(id){
      return this.http.get(this.BASE_API_URL + '/deleteFeesStructure/' + id)
          .pipe(catchError(this.errorService.serverError), tap(response => {
              // @ts-ignore
          }));
  }
  updateFeesStructure(value){
      return this.http.post(this.BASE_API_URL + '/updateFeesStructure', value)
          .pipe(catchError(this.errorService.serverError), tap(response => {
              // @ts-ignore
          }));
  }

  getFeesDetails(id){
      return this.http.get(this.BASE_API_URL + '/getStudentFeesDetails/'+ id)
          .pipe(catchError(this.errorService.serverError), tap(response => {
              // @ts-ignore
          }));
  }

  updatePayment(value){
      return this.http.post(this.BASE_API_URL + '/savePayment', value)
          .pipe(catchError(this.errorService.serverError), tap(response => {
              // @ts-ignore
          }));
  }

  uploadFileFromTransactionList(value){
      return this.http.post(this.BASE_API_URL + '/uploadFeesReceipt', value)
          .pipe(catchError(this.errorService.serverError), tap(response => {
              // @ts-ignore
          }));
  }

  saveDiscount(value){
      return this.http.post(this.BASE_API_URL + '/saveDiscount', value)
          .pipe(catchError(this.errorService.serverError), tap(response => {
              // @ts-ignore
              if(response.success == 1){
                  // @ts-ignore
                  this.discountList.push(response.data);
                  this.discountListSubject.next([...this.discountList]);
              }
          }));
  }

  deleteTransaction(id){
      return this.http.get(this.BASE_API_URL + '/deletePayment/' + id)
          .pipe(catchError(this.errorService.serverError), tap(response => {
          }));
  }

  updateDiscount(data){
      return this.http.post(this.BASE_API_URL + '/updateDiscount', data)
          .pipe(catchError(this.errorService.serverError), tap(response => {
              // @ts-ignore
              if(response.success == 1){
                  // @ts-ignore
                  const index = this.discountList.findIndex(x => x.id === response.data.id);
                  // @ts-ignore
                  this.discountList[index] = response.data;
                  this.discountListSubject.next([...this.discountList]);
              }
          }));
  }

  deleteDiscount(id){
      return this.http.get(this.BASE_API_URL + '/deleteDiscount/' + id)
          .pipe(catchError(this.errorService.serverError), tap(response => {
              // @ts-ignore
              if(response.success == 1){
                  // @ts-ignore
                  const index = this.discountList.findIndex(x => x.id === response.data.id);
                  this.discountList.splice(index,1);
                  this.discountListSubject.next([...this.discountList]);
              }
          }));
  }


}
