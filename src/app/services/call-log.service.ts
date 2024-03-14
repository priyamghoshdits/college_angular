import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {Subject} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {ErrorService} from "./error.service";
import {catchError, tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CallLogService {
  private BASE_API_URL = environment.BASE_API_URL;

  callLogList = [];

  callLogListSubject = new Subject<any[]>();

  getCallLogListListener(){
    return this.callLogListSubject.asObservable();
  }
  constructor(private  http: HttpClient, private errorService: ErrorService) {
    this.http.get(this.BASE_API_URL + '/getCallLog').subscribe((response: any) =>{
      this.callLogList = response.data;
      this.callLogListSubject.next([...this.callLogList]);
    });
  }

  getCallLogList(){
      return [...this.callLogList];
  }

  saveCallLog(value){
    return this.http.post(this.BASE_API_URL + '/saveCallLog', value)
        .pipe(catchError(this.errorService.serverError), tap(response => {
          // @ts-ignore
          if(response.success == 1){
            // @ts-ignore
            this.callLogList.push(response.data);
            this.callLogListSubject.next([...this.callLogList]);
          }
        }));
  }

  updateCallLog(data){
    return this.http.post(this.BASE_API_URL + '/updateCallLog', data)
        .pipe(catchError(this.errorService.serverError), tap(response => {
          // @ts-ignore
          if(response.success == 1){
            // @ts-ignore
            const index = this.callLogList.findIndex(x => x.id === response.data.id);
            // @ts-ignore
            this.callLogList[index] = response.data;
            this.callLogListSubject.next([...this.callLogList]);
          }
        }));
  }

  deleteCallLog(id){
    return this.http.get(this.BASE_API_URL + '/deleteCallLog/' + id)
        .pipe(catchError(this.errorService.serverError), tap(response => {
          // @ts-ignore
          if(response.success == 1){
            // @ts-ignore
            const index = this.callLogList.findIndex(x => x.id === response.data.id);
            // @ts-ignore
            this.callLogList.splice(index,1);
            this.callLogListSubject.next([...this.callLogList]);
          }
        }));
  }

}
