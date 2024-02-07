import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ErrorService} from "./error.service";
import {environment} from "../../environments/environment";
import {Subject} from "rxjs";
import {catchError, tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AgentService {
  private BASE_API_URL = environment.BASE_API_URL;

  agentList = [];

  agentListSubject = new Subject<any[]>();

  getAgentListListener(){
    return this.agentListSubject.asObservable();
  }

  constructor(private  http: HttpClient, private errorService: ErrorService) {
    this.http.get(this.BASE_API_URL + '/getAgent').subscribe((response: any) =>{
      this.agentList = response.data;
      this.agentListSubject.next([...this.agentList]);
    });
  }

  getAgentList(){
    return [...this.agentList];
  }

  saveAgent(value){
    return this.http.post(this.BASE_API_URL + '/saveAgent', value)
        .pipe(catchError(this.errorService.serverError), tap(response => {
          // @ts-ignore
          if(response.success == 1){
            // @ts-ignore
            this.agentList.push(response.data);
            this.agentListSubject.next([...this.agentList]);
          }
        }));
  }

  updateAgent(data){
    return this.http.post(this.BASE_API_URL + '/updateAgent', data)
        .pipe(catchError(this.errorService.serverError), tap(response => {
          // @ts-ignore
          if(response.success == 1){
            // @ts-ignore
            const index = this.agentList.findIndex(x => x.id === response.data.id);
            // @ts-ignore
            this.agentList[index] = response.data;
            this.agentListSubject.next([...this.agentList]);
          }
        }));
  }

  deleteFeesType(id){
    return this.http.get(this.BASE_API_URL + '/deleteAgent/' + id)
        .pipe(catchError(this.errorService.serverError), tap(response => {
          // @ts-ignore
          if(response.success == 1){
            // @ts-ignore
            const index = this.agentList.findIndex(x => x.id === response.data.id);
            // @ts-ignore
            this.agentList.splice(index,1);
            this.agentListSubject.next([...this.agentList]);
          }
        }));
  }

  getStudentByAgentId(id){
      return this.http.get(this.BASE_API_URL + '/getStudentByAgentId/' + id)
          .pipe(catchError(this.errorService.serverError), tap(response => {
          }));
  }
}
