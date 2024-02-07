import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ErrorService} from "./error.service";
import {environment} from "../../environments/environment";
import {Subject} from "rxjs";
import {catchError, tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {
  private BASE_API_URL = environment.BASE_API_URL;
  noticeList = [];
  userTypeList = [];

  noticeListSubject = new Subject<any[]>();
  userTypeListSubject = new Subject<any[]>();

  getNoticeListListener(){
    return this.noticeListSubject.asObservable();
  }
  getUserTypeListListener(){
    return this.userTypeListSubject.asObservable();
  }


  constructor(private  http: HttpClient, private errorService: ErrorService) {
    this.http.get(this.BASE_API_URL + '/getNotices').subscribe((response: any) =>{
      this.noticeList = response.data;
      this.noticeListSubject.next([...this.noticeList]);
    });

    this.http.get(this.BASE_API_URL + '/getUserTypes').subscribe((response: any) =>{
      this.userTypeList = response.data;
      this.userTypeListSubject.next([...this.userTypeList]);
    });
  }

  getNoticeList(){
    return [...this.noticeList];
  }

  getUserTypeList(){
    return [...this.userTypeList];
  }

  saveNotices(value){
    return this.http.post(this.BASE_API_URL + '/saveNotices', value)
        .pipe(catchError(this.errorService.serverError), tap(response => {
            // @ts-ignore
          if(response.success == 1){
              // @ts-ignore
              this.noticeList.push(response.data);
            this.noticeListSubject.next([...this.noticeList]);
            }
        }));
  }

  deleteNotice(id){
    return this.http.get(this.BASE_API_URL + '/deleteNotice/' + id)
        .pipe(catchError(this.errorService.serverError), tap(response => {
          // @ts-ignore
          if(response.success == 1){
            // @ts-ignore
            const index = this.noticeList.findIndex(x => x.id === response.data.id);
            // @ts-ignore
            this.noticeList.splice(index,1);
            this.noticeListSubject.next([...this.noticeList]);
          }
        }));
  }

  updateNotice(data){
    return this.http.post(this.BASE_API_URL + '/updateNotices', data)
        .pipe(catchError(this.errorService.serverError), tap(response => {
          // @ts-ignore
          if(response.success == 1){
            // @ts-ignore
            const index = this.noticeList.findIndex(x => x.id === response.data.id);
            // @ts-ignore
            this.noticeList[index] = response.data;
            this.noticeListSubject.next([...this.noticeList]);
          }
        }));
  }

}
