import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ErrorService} from "./error.service";
import {catchError, tap} from "rxjs/operators";
import {environment} from "../../environments/environment";
import {Subject} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class SemesterService {
  private BASE_API_URL = environment.BASE_API_URL;
  assignedTeacher = [];
  assignedTeacherSubject = new Subject<any[]>();

  assignedTeacherListener(){
    return this.assignedTeacherSubject.asObservable();
  }

  constructor(private  http: HttpClient, private errorService: ErrorService) {
    this.http.get(this.BASE_API_URL + '/getAssignedSemesterTeacher').subscribe((response: any) =>{
      this.assignedTeacher = response.data;
      this.assignedTeacherSubject.next([...this.assignedTeacher]);
    });
  }

  getAssignedTeacher(){
      return [...this.assignedTeacher];
  }

  saveAssignSemesterTeacher(data){
    return this.http.post(this.BASE_API_URL + '/saveSemesterTeacher', data)
        .pipe(catchError(this.errorService.serverError), tap(response => {
          // @ts-ignore
          if(response.success == 1){
            // // @ts-ignore
            // this.assignedTeacher.push(response.data);
            // this.assignedTeacherSubject.next([...this.assignedTeacher]);
              // @ts-ignore
              if(response.success == 1){
                  // @ts-ignore
                  // const index = this.assignedTeacher.findIndex(x => x.course_id === response.data[].course_id);
                  // if(index == -1){
                  //     // @ts-ignore
                  //     this.assignedTeacher[index] = response.data;
                  //     this.assignedTeacherSubject.next([...this.assignedTeacher]);
                  // }else{
                      // @ts-ignore
                      this.assignedTeacher.push(response.data);
                      this.assignedTeacherSubject.next([...this.assignedTeacher]);
                  // }

              }
          }
        }));
  }

  updateAssignSemesterTeacher(value){
    return this.http.post(this.BASE_API_URL + '/updateSemesterTeacher', value)
        .pipe(catchError(this.errorService.serverError), tap(response => {
            // @ts-ignore
            if(response.success == 1){
                // @ts-ignore
                const index = this.assignedTeacher.findIndex(x => x.id === response.data.id);
                // @ts-ignore
                this.assignedTeacher[index] = response.data;
                this.assignedTeacherSubject.next([...this.assignedTeacher]);
            }
        }));
  }

  deleteAssignSemesterTeacher(course_id,semester_id){
    return this.http.get(this.BASE_API_URL + '/deleteTeachersAssign/' + course_id + '/' + semester_id)
        .pipe(catchError(this.errorService.serverError), tap(response => {
          // @ts-ignore
          if(response.success == 1){
            // @ts-ignore
            const index = this.assignedTeacher.findIndex(x => x.course_id === response.data.course_id);
            this.assignedTeacher.splice(index,1);
            this.assignedTeacherSubject.next([...this.assignedTeacher]);
          }
        }));
  }

}
