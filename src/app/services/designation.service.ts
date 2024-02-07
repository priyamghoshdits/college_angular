import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {ErrorService} from "./error.service";
import {Subject} from "rxjs";
import {catchError, tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class DesignationService {
  private BASE_API_URL = environment.BASE_API_URL;
  designationList = [];

  designationSubject = new Subject<any[]>();

  getDesignationListListener(){
    return this.designationSubject.asObservable();
  }

  constructor(private  http: HttpClient, private errorService: ErrorService) {
    this.http.get(this.BASE_API_URL + '/getDesignation').subscribe((response: any) =>{
      this.designationList = response.data;
      this.designationSubject.next([...this.designationList]);
    });
  }

  getDesignationList(){
    return [...this.designationList];
  }

  saveDesignation(value){
    return this.http.post(this.BASE_API_URL + '/saveDesignation', value)
        .pipe(catchError(this.errorService.serverError), tap(response => {
          // @ts-ignore
          if(response.success == 1){
            // @ts-ignore
            this.designationList.push(response.data);
            this.designationSubject.next([...this.designationList]);
          }
        }));
  }

  updateDesignation(data){
    return this.http.post(this.BASE_API_URL + '/updateDesignation', data)
        .pipe(catchError(this.errorService.serverError), tap(response => {
          // @ts-ignore
          if(response.success == 1){
            // @ts-ignore
            const index= this.designationList.findIndex(x => x.id === response.data.id);
            // @ts-ignore
            this.designationList[index] = response.data;
            this.designationSubject.next([...this.designationList]);
          }
        }));
  }

  deleteDesignation(id){
    return this.http.get(this.BASE_API_URL + '/deleteDesignation/' + id)
        .pipe(catchError(this.errorService.serverError), tap(response => {
          // @ts-ignore
          if(response.success == 1){
            // @ts-ignore
            const index = this.designationList.findIndex(x => x.id === response.data.id);
            // @ts-ignore
            this.designationList.splice(index,1);
            this.designationSubject.next([...this.designationList]);
          }
        }));
  }

}
