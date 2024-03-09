import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ErrorService} from "./error.service";
import {Subject} from "rxjs";
import {environment} from "../../environments/environment";
import {catchError, tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private BASE_API_URL = environment.BASE_API_URL;

  studentList = [];

  studentListSubject = new Subject<any[]>();

  getStudentListener(){
    return this.studentListSubject.asObservable();
  }

  constructor(private  http: HttpClient, private errorService: ErrorService) {
    this.http.get(this.BASE_API_URL + '/getStudents').subscribe((response: any) =>{
      this.studentList = response.data;
      this.studentListSubject.next([...this.studentList]);
    });
  }

  getUpdatedStudentList(){
      this.http.get(this.BASE_API_URL + '/getStudents').subscribe((response: any) =>{
          this.studentList = response.data;
          this.studentListSubject.next([...this.studentList]);
      });
  }

  getStudentLists(){
    return [...this.studentList];
  }

  saveStudent(data){
    return this.http.post(this.BASE_API_URL + '/saveStudent', data)
        .pipe(catchError(this.errorService.serverError), tap(response => {
          // @ts-ignore
          if(response.success == 1){
            // @ts-ignore
            this.studentList.push(response.data);
            this.studentListSubject.next([...this.studentList]);
          }
        }));
  }

  updateStudent(value){
    return this.http.post(this.BASE_API_URL + '/updateStudent', value)
        .pipe(catchError(this.errorService.serverError), tap(response => {
          // @ts-ignore
          if(response.success == 1){
            // @ts-ignore
            const index = this.studentList.findIndex(x => x.id === response.data.id);
            // @ts-ignore
            this.studentList[index] = response.data;
            this.studentListSubject.next([...this.studentList]);
          }
        }));
  }

    promoteStudents(value){
        return this.http.post(this.BASE_API_URL + '/promoteStudents', value)
            .pipe(catchError(this.errorService.serverError), tap(response => {
                // @ts-ignore
                if(response.success == 1){
                    this.getUpdatedStudentList();
                }
            }));
    }

  deleteStudents(id){
    return this.http.get(this.BASE_API_URL + '/deleteMember/' + id)
        .pipe(catchError(this.errorService.serverError), tap(response => {
          // @ts-ignore
          if(response.success == 1){
            // @ts-ignore
            const index = this.studentList.findIndex(x => x.id === response.data.id);
            this.studentList.splice(index,1);
            this.studentListSubject.next([...this.studentList]);
          }
        }));
  }

  getStudentAttendance(course_id,semester_id,date,subject_id,session_id){
      return this.http.get(this.BASE_API_URL + '/getStudentAttendance/' + course_id + '/' + semester_id + '/' + date + '/' + subject_id + '/' + session_id)
          .pipe(catchError(this.errorService.serverError), tap(response => {
          }));
  }

  getUserAttendance(course_id,semester_id,date,user_id){
      return this.http.get(this.BASE_API_URL + '/getStudentOwnAttendance/' + course_id + '/' + semester_id + '/' + date + '/' + user_id)
          .pipe(catchError(this.errorService.serverError), tap(response => {
          }));
  }

  changeStudentStatus(id){
      return this.http.get(this.BASE_API_URL + '/changeStudentStatus/'+id)
          .pipe(catchError(this.errorService.serverError), tap(response => {
              // @ts-ignore
              if(response.success == 1){
                  // @ts-ignore
                  const index = this.studentList.findIndex(x => x.id === response.data.id);
                  // @ts-ignore
                  this.studentList[index] = response.data;
                  this.studentListSubject.next([...this.studentList]);
              }
          }));
  }

  saveStudentAttendance(data){
      return this.http.post(this.BASE_API_URL + '/saveAttendance',data)
          .pipe(catchError(this.errorService.serverError), tap(response => {
          }));
  }

  refundStudent(id){
      return this.http.get(this.BASE_API_URL + '/refundPayment/' + id)
          .pipe(catchError(this.errorService.serverError), tap(response => {
              // @ts-ignore
              if(response.success == 1){
                  // @ts-ignore
                  const index = this.studentList.findIndex(x => x.id === response.data.id);
                  // @ts-ignore
                  this.studentList[index] = response.data;
                  this.studentListSubject.next([...this.studentList]);
              }
          }));
  }
}
