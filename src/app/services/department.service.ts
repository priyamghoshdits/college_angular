import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ErrorService} from "./error.service";
import {environment} from "../../environments/environment";
import {Subject} from "rxjs";
import {catchError, tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  private BASE_API_URL = environment.BASE_API_URL;
  departmentList = [];


    departmentListSubject = new Subject<any[]>();
  getDepartmentListListener(){
    return this.departmentListSubject.asObservable();
  }

  constructor(private  http: HttpClient, private errorService: ErrorService) {
    this.http.get(this.BASE_API_URL + '/getDepartment').subscribe((response: any) =>{
      this.departmentList = response.data;
      this.departmentListSubject.next([...this.departmentList]);
    });
  }

  getDepartmentList(){
    return [...this.departmentList];
  }

  saveDepartment(value){
    return this.http.post(this.BASE_API_URL + '/saveDepartment', value)
        .pipe(catchError(this.errorService.serverError), tap(response => {
          // @ts-ignore
          if(response.success == 1){
            // @ts-ignore
            this.departmentList.push(response.data);
            this.departmentListSubject.next([...this.departmentList]);
          }
        }));
  }

  updateDepartment(data){
    return this.http.post(this.BASE_API_URL + '/updateDepartment', data)
        .pipe(catchError(this.errorService.serverError), tap(response => {
          // @ts-ignore
          if(response.success == 1){
            // @ts-ignore
            const index= this.departmentList.findIndex(x => x.id === response.data.id);
            // @ts-ignore
            this.departmentList[index] = response.data;
            this.departmentListSubject.next([...this.departmentList]);
          }
        }));
  }

  deleteDepartment(id){
    return this.http.get(this.BASE_API_URL + '/deleteDepartment/' + id)
        .pipe(catchError(this.errorService.serverError), tap(response => {
          // @ts-ignore
          if(response.success == 1){
            // @ts-ignore
            const index = this.departmentList.findIndex(x => x.id === response.data.id);
            // @ts-ignore
            this.departmentList.splice(index,1);
            this.departmentListSubject.next([...this.departmentList]);
          }
        }));
  }

}
