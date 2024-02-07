import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {ErrorService} from "./error.service";
import {Subject} from "rxjs";
import {catchError, tap} from "rxjs/operators";
import {DatePipe} from "@angular/common";

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  private BASE_API_URL = environment.BASE_API_URL;
  teacherList = [];
  memberList = [];
  categoryList = [];
  userTypeList = [];


  teacherListSubject = new Subject<any[]>();
  memberListSubject = new Subject<any[]>();
  CategoryListSubject = new Subject<any[]>();
  getTeacherListener(){
    return this.teacherListSubject.asObservable();
  }

  getMemberListener(){
    return this.memberListSubject.asObservable();
  }

  getCategoryListener(){
    return this.CategoryListSubject.asObservable();
  }

  constructor(private  http: HttpClient, private errorService: ErrorService) {
    this.http.get(this.BASE_API_URL + '/getTeachers').subscribe((response: any) =>{
      this.teacherList = response.data;
      this.teacherListSubject.next([...this.teacherList]);
    });
    this.http.get(this.BASE_API_URL + '/getAllMembers').subscribe((response: any) =>{
      this.memberList = response.data;
      this.memberListSubject.next([...this.memberList]);
    });
    this.http.get(this.BASE_API_URL + '/getCategory').subscribe((response: any) =>{
      this.categoryList = response.data;
      this.CategoryListSubject.next([...this.categoryList]);
    });
  }

  getTeacherList(){
    return [...this.teacherList];
  }

  getMemberList(){
    return [...this.memberList];
  }

  getCategoryList(){
    return [...this.categoryList];
  }

  saveMember(value){
    return this.http.post(this.BASE_API_URL + '/saveMember', value)
        .pipe(catchError(this.errorService.serverError), tap(response => {
            // @ts-ignore
          if(response.success == 1){
              // @ts-ignore
            this.memberList.push(response.data);
            this.memberListSubject.next([...this.memberList]);
          }
        }));
  }

  updateMember(value){
    return this.http.post(this.BASE_API_URL + '/updateMember', value)
        .pipe(catchError(this.errorService.serverError), tap(response => {
          // @ts-ignore
            if(response.success == 1){
              // @ts-ignore
              const index = this.memberList.findIndex(x => x.id === response.data.id);
              // @ts-ignore
              this.memberList.splice(index,1);
              this.memberListSubject.next([...this.memberList]);
            }
        }));
  }

}
