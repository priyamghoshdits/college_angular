import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ErrorService} from "./error.service";
import {Subject} from "rxjs";
import {environment} from "../../environments/environment";
import {catchError, tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private BASE_API_URL = environment.BASE_API_URL;

  sessionList = [];

  sessionListSubject = new Subject<any[]>();

  getSessionListener(){
    return this.sessionListSubject.asObservable();
  }
  constructor(private  http: HttpClient, private errorService: ErrorService) {
    this.http.get(this.BASE_API_URL + '/getSession').subscribe((response: any) =>{
      this.sessionList = response.data;
      this.sessionListSubject.next([...this.sessionList]);
    });
  }

  getSessionList(){
    return [...this.sessionList];
  }

  saveSession(data){
    return this.http.post(this.BASE_API_URL + '/saveSession', data)
        .pipe(catchError(this.errorService.serverError), tap(response => {
          // @ts-ignore
          if(response.success == 1){
            // @ts-ignore
            this.sessionList.push(response.data);
            this.sessionListSubject.next([...this.sessionList]);
          }
        }));
  }

  updateSession(value){
    return this.http.post(this.BASE_API_URL + '/updateSession', value)
        .pipe(catchError(this.errorService.serverError), tap(response => {
          // @ts-ignore
          if(response.success == 1){
            // @ts-ignore
            const index = this.sessionList.findIndex(x => x.id === response.data.id);
            // @ts-ignore
            this.sessionList[index] = response.data;
            this.sessionListSubject.next([...this.sessionList]);
          }
        }));
  }

  deleteSession(id){
    return this.http.get(this.BASE_API_URL + '/deleteSession/' + id)
        .pipe(catchError(this.errorService.serverError), tap(response => {
          // @ts-ignore
          if(response.success == 1){
            // @ts-ignore
            const index = this.sessionList.findIndex(x => x.course_id === response.data.course_id);
            this.sessionList.splice(index,1);
            this.sessionListSubject.next([...this.sessionList]);
          }
        }));
  }

}
