import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ErrorService} from "./error.service";
import {Subject} from "rxjs";
import {environment} from "../../environments/environment";
import {catchError, tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UserTypeService {
  private BASE_API_URL = environment.BASE_API_URL;

  userTypeList = [];

  UserTypeListSubject = new Subject<any[]>();

  getUserTypeListener(){
    return this.UserTypeListSubject.asObservable();
  }

  constructor(private  http: HttpClient, private errorService: ErrorService) {
    this.http.get(this.BASE_API_URL + '/getUserTypes').subscribe((response: any) =>{
      this.userTypeList = response.data;
      this.UserTypeListSubject.next([...this.userTypeList]);
    });
  }

  getUserTypeList(){
    return [...this.userTypeList];
  }

  getUsersByUserType(user_type_id){
      return this.http.get(this.BASE_API_URL + '/getUserByUserTypes/' + user_type_id)
          .pipe(catchError(this.errorService.serverError), tap(response => {
          }));
  }

  saveUserType(data){
    return this.http.post(this.BASE_API_URL + '/saveUserTypes', data)
        .pipe(catchError(this.errorService.serverError), tap(response => {
          // @ts-ignore
          if(response.success == 1){
            // @ts-ignore
            this.userTypeList.push(response.data);
            this.UserTypeListSubject.next([...this.userTypeList]);
          }
        }));
  }

  updateUserTypes(value){
    return this.http.post(this.BASE_API_URL + '/updateUserTypes', value)
        .pipe(catchError(this.errorService.serverError), tap(response => {
          // @ts-ignore
          if(response.success == 1){
            // @ts-ignore
            const index = this.userTypeList.findIndex(x => x.id === response.data.id);
            // @ts-ignore
            this.userTypeList[index] = response.data;
            this.UserTypeListSubject.next([...this.userTypeList]);
          }
        }));
  }

  deleteUserType(id){
    return this.http.get(this.BASE_API_URL + '/deleteUserTypes/' + id)
        .pipe(catchError(this.errorService.serverError), tap(response => {
          // @ts-ignore
          if(response.success == 1){
            // @ts-ignore
            const index = this.userTypeList.findIndex(x => x.id === response.data.id);
            this.userTypeList.splice(index,1);
            this.UserTypeListSubject.next([...this.userTypeList]);
          }
        }));
  }

}
