import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {Subject} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {ErrorService} from "./error.service";
import {catchError, tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class VisitorBookService {
  private BASE_API_URL = environment.BASE_API_URL;

  visitorList = []

  visitorListSubject = new Subject<any[]>();

  getVisitorListener(){
    return this.visitorListSubject.asObservable();
  }

  constructor(private  http: HttpClient, private errorService: ErrorService) {
    this.http.get(this.BASE_API_URL + '/getVisitorBook').subscribe((response: any) =>{
      this.visitorList = response.data;
      this.visitorListSubject.next([...this.visitorList]);
    });
  }

  getVisitorList(){
    return [...this.visitorList];
  }

  saveVisitorBook(data){
    return this.http.post(this.BASE_API_URL + '/saveVisitorBook', data)
        .pipe(catchError(this.errorService.serverError), tap(response => {
          // @ts-ignore
          if(response.success == 1){
            // @ts-ignore
            this.visitorList.push(response.data);
            this.visitorListSubject.next([...this.visitorList]);
          }
        }));
  }

  updateVisitorBook(value){
    return this.http.post(this.BASE_API_URL + '/updateVisitorBook', value)
        .pipe(catchError(this.errorService.serverError), tap(response => {
          // @ts-ignore
          if(response.success == 1){
            // @ts-ignore
            const index = this.visitorList.findIndex(x => x.id === response.data.id);
            // @ts-ignore
            this.visitorList[index] = response.data;
            this.visitorListSubject.next([...this.visitorList]);
          }
        }));
  }

  deleteVisitorBook(id){
    return this.http.get(this.BASE_API_URL + '/deleteVisitorBook/' + id)
        .pipe(catchError(this.errorService.serverError), tap(response => {
          // @ts-ignore
          if(response.success == 1){
            // @ts-ignore
            const index = this.visitorList.findIndex(x => x.id === response.data.id);
            this.visitorList.splice(index,1);
            this.visitorListSubject.next([...this.visitorList]);
          }
        }));
  }

}
