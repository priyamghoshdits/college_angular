import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ErrorService} from "./error.service";
import {catchError, tap} from "rxjs/operators";
import {environment} from "../../environments/environment";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AgentPaymentService {
  private BASE_API_URL = environment.BASE_API_URL;

  paymentList = [];

  paymentListSubject = new Subject<any[]>();

  getPaymentListListener(){
    return this.paymentListSubject.asObservable();
  }

  constructor(private  http: HttpClient, private errorService: ErrorService) {
    this.http.get(this.BASE_API_URL + '/getAgentPayment').subscribe((response: any) =>{
      this.paymentList = response.data;
      this.paymentListSubject.next([...this.paymentList]);
    });
  }

  getPaymentList(){
      return [...this.paymentList];
  }

  saveAgentPayment(value){
    return this.http.post(this.BASE_API_URL + '/saveAgentPayment', value)
        .pipe(catchError(this.errorService.serverError), tap(response=> {
          // @ts-ignore
          if(response.success == 1){
            // @ts-ignore
            this.paymentList.push(response.data);
            this.paymentListSubject.next([...this.paymentList]);
          }
        }));
  }

  updateAgentPayment(value){
    return this.http.post(this.BASE_API_URL + '/updateAgentPayment', value)
        .pipe(catchError(this.errorService.serverError), tap(response=> {
          // @ts-ignore
          if(response.success == 1){
            // @ts-ignore
            const index = this.paymentList.findIndex(x => x.id === response.data.id);
            // @ts-ignore
            this.paymentList[index] = response.data;
            this.paymentListSubject.next([...this.paymentList]);
          }
        }));
  }

    deleteAgentPayment(id){
        return this.http.get(this.BASE_API_URL + '/deleteAgentPayment/'+id)
            .pipe(catchError(this.errorService.serverError), tap(response=> {
                // @ts-ignore
                if(response.success == 1){
                    // @ts-ignore
                    const index = this.paymentList.findIndex(x => x.id === response.data.id);
                    // @ts-ignore
                    this.paymentList.splice(index,1);
                    this.paymentListSubject.next([...this.paymentList]);
                }
            }));
    }

  getAgentDetails(id){
    return this.http.get(this.BASE_API_URL + '/getAgentDetails/'+id)
        .pipe(catchError(this.errorService.serverError), tap(response => {
        }));
  }

}
