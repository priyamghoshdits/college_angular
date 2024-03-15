import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ErrorService} from "./error.service";
import {Subject} from "rxjs";
import {environment} from "../../environments/environment";
import {catchError, tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class HomeworkService {
  private BASE_API_URL = environment.BASE_API_URL;

  homeworkList = [];

  homeworkListSubject = new Subject<any[]>();

  getHomeworkListListener(){
    return this.homeworkListSubject.asObservable();
  }
  constructor(private  http: HttpClient, private errorService: ErrorService) {
    this.http.get(this.BASE_API_URL + '/getHomework').subscribe((response: any) =>{
      this.homeworkList = response.data;
      this.homeworkListSubject.next([...this.homeworkList]);
    });
  }

  getHomeworkList(){
    return [...this.homeworkList]
  }

  saveHomework(data){
    return this.http.post(this.BASE_API_URL + '/saveHomework', data)
        .pipe(catchError(this.errorService.serverError), tap(response => {
          // @ts-ignore
          if(response.success == 1){
            // @ts-ignore
            this.homeworkList.push(response.data);
            this.homeworkListSubject.next([...this.homeworkList]);
          }
        }));
  }

  deleteHomework(id){
    return this.http.get(this.BASE_API_URL + '/deleteHomework/' + id)
        .pipe(catchError(this.errorService.serverError), tap(response => {
          // @ts-ignore
          if(response.success == 1){
            // @ts-ignore
            const index = this.homeworkList.findIndex(x => x.id === response.data.id);
            this.homeworkList.splice(index,1);
            this.homeworkListSubject.next([...this.homeworkList]);
          }
        }));
  }

  updateHomework(value){
    return this.http.post(this.BASE_API_URL + '/updateHomework', value)
        .pipe(catchError(this.errorService.serverError), tap(response => {
          // @ts-ignore
          if(response.success == 1){
            // @ts-ignore
            const index = this.homeworkList.findIndex(x => x.id === response.data.id);
            // @ts-ignore
            this.homeworkList[index] = response.data;
            this.homeworkListSubject.next([...this.homeworkList]);
          }
        }));
  }

}
