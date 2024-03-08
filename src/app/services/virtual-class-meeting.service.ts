import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {ErrorService} from "./error.service";
import {Subject} from "rxjs";
import {catchError, tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class VirtualClassMeetingService {
  private BASE_API_URL = environment.BASE_API_URL;

  virtualClassList = [];

  virtualClassListSubject = new Subject<any[]>();

  getVirtualClassListListener(){
    return this.virtualClassListSubject.asObservable();
  }
  constructor(private  http: HttpClient, private errorService: ErrorService) {
    this.http.get(this.BASE_API_URL + '/getVirtualClass').subscribe((response: any) =>{
      this.virtualClassList = response.data;
      this.virtualClassListSubject.next([...this.virtualClassList]);
    });
  }

  getVirtualClassLink(){
    return [...this.virtualClassList];
  }

  saveVirtualClass(data){
    return this.http.post(this.BASE_API_URL + '/saveVirtualClass', data)
        .pipe(catchError(this.errorService.serverError), tap(response => {
          // @ts-ignore
          if(response.success == 1){
            // @ts-ignore
            this.virtualClassList.push(response.data);
            this.virtualClassListSubject.next([...this.virtualClassList]);
          }
        }));
  }
  updateVirtualClass(data){
    return this.http.post(this.BASE_API_URL + '/updateVirtualClass', data)
        .pipe(catchError(this.errorService.serverError), tap(response => {
          // @ts-ignore
          if(response.success == 1) {
            // @ts-ignore
            const index = this.virtualClassList.findIndex(x => x.id === response.data.id);
            // @ts-ignore
            this.virtualClassList[index] = response.data;
            this.virtualClassListSubject.next([...this.virtualClassList]);
          }
        }));
  }
  deleteVirtualClass(id){
    return this.http.get(this.BASE_API_URL + '/deleteVirtualClass/' + id)
        .pipe(catchError(this.errorService.serverError), tap(response => {
          // @ts-ignore
          if(response.success == 1){
            // @ts-ignore
            const index = this.virtualClassList.findIndex(x => x.id === response.data.id);
            this.virtualClassList.splice(index,1);
            this.virtualClassListSubject.next([...this.virtualClassList]);
          }
        }));
  }

}
