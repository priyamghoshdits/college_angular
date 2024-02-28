import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ErrorService} from "./error.service";
import {catchError, tap} from "rxjs/operators";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AgentPaymentService {
  private BASE_API_URL = environment.BASE_API_URL;

  constructor(private  http: HttpClient, private errorService: ErrorService) {

  }

  saveAgentPayment(value){
    return this.http.post(this.BASE_API_URL + '/saveAgentPayment', value)
        .pipe(catchError(this.errorService.serverError), tap(response => {
        }));
  }

  getAgentDetails(id){
    return this.http.get(this.BASE_API_URL + '/getAgentDetails/'+id)
        .pipe(catchError(this.errorService.serverError), tap(response => {
        }));
  }

}
