import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Subject} from "rxjs";
import {catchError, tap} from "rxjs/operators";
import {ErrorService} from "./error.service";
import {ɵFormGroupValue, ɵTypedOrUntyped} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  private BASE_API_URL = environment.BASE_API_URL;
  semesterList = [];
  courseList = [];
  subjectList = [];
  weekList = [];
  subjectGroupList = [];

  semesterSubject = new Subject<any[]>();
  coursesSubject = new Subject<any[]>();
  subjectListSubject = new Subject<any[]>();
  weekListSubject = new Subject<any[]>();
  subjectGroupSubject = new Subject<any[]>();

  getSemesterListener(){
    return this.semesterSubject.asObservable();
  }
  subjectGroupListener(){
    return this.subjectGroupSubject.asObservable();
  }

    getWeekListener(){
        return this.weekListSubject.asObservable();
    }

    getSubjectListListener(){
        return this.subjectListSubject.asObservable();
    }

  getCourseListener(){
    return this.coursesSubject.asObservable();
  }


  constructor(private  http: HttpClient, private errorService: ErrorService) {
    this.http.get(this.BASE_API_URL + '/getSemester').subscribe((response: any) =>{
      this.semesterList = response.data;
      this.semesterSubject.next([...this.semesterList]);
    });

    this.http.get(this.BASE_API_URL + '/getCourse').subscribe((response: any) =>{
      this.courseList = response.data;
      this.coursesSubject.next([...this.courseList]);
    });

      this.http.get(this.BASE_API_URL + '/getWeekdays').subscribe((response: any) =>{
          this.weekList = response.data;
          this.weekListSubject.next([...this.weekList]);
      });

      this.http.get(this.BASE_API_URL + '/getSubject').subscribe((response: any) =>{
          this.subjectList = response.data;
          this.subjectListSubject.next([...this.subjectList]);
      });

      this.http.get(this.BASE_API_URL + '/getSubjectGroup').subscribe((response: any) =>{
          this.subjectGroupList = response.data;
          this.subjectGroupSubject.next([...this.subjectGroupList]);
      });
  }

  updateSemester(value){
    return this.http.post(this.BASE_API_URL + '/updateSemester', value)
        .pipe(catchError(this.errorService.serverError), tap(response => {
            // @ts-ignore
            if(response.success ==1){
                // @ts-ignore
                const index = this.semesterList.findIndex(x => x.id === response.data.id);
                // @ts-ignore
                this.semesterList[index] = response.data;
                this.semesterSubject.next([...this.semesterList]);
            }
        }));
  }

  getCourses(){
    return [...this.courseList];
  }

  getWeekDays(){
      return [...this.weekList];
  }

  getSubjectGroupList(){
      return [...this.subjectGroupList];
  }



  getSemester(){
    return [...this.semesterList];
  }

  getSubjectList(){
      return [...this.subjectList];
  }


  deleteSemester(value){
    return this.http.get(this.BASE_API_URL + '/deleteSemester/' + value)
        .pipe(catchError(this.errorService.serverError), tap(response => {
            // @ts-ignore
            if(response.success ==1){
                // @ts-ignore
                const index = this.semesterList.findIndex(x => x.id === response.data.id);
                this.semesterList.splice(index,1);
                this.semesterSubject.next([...this.semesterList]);
            }
        }));
  }

  saveCourse(data){
      return this.http.post(this.BASE_API_URL + '/saveCourse', data)
          .pipe(catchError(this.errorService.serverError), tap(response => {
              // @ts-ignore
              if(response.success == 1){
                  // @ts-ignore
                  this.courseList.push(response.data);
                  this.coursesSubject.next([...this.courseList]);
              }
          }));
  }

  saveSubject(data){
      return this.http.post(this.BASE_API_URL + '/saveSubject', data)
          .pipe(catchError(this.errorService.serverError), tap(response => {
              // @ts-ignore
              if(response.success == 1){
                  // @ts-ignore
                  this.subjectList.push(response.data);
                  this.subjectListSubject.next([...this.subjectList]);
              }
          }));
  }

  updateSubject(data){
      return this.http.post(this.BASE_API_URL + '/updateSubject', data)
          .pipe(catchError(this.errorService.serverError), tap(response => {
              // @ts-ignore
              if(response.success == 1){
                  // @ts-ignore
                  const index = this.subjectList.findIndex(x => x.id === response.data.id);
                  // @ts-ignore
                  this.subjectList[index] = response.data;
                  this.subjectListSubject.next([...this.subjectList]);
              }
          }));
  }

  getSemesterByCourseId(course_id){
      return this.http.get(this.BASE_API_URL + '/getSemesterByCourse/' + course_id)
          .pipe(catchError(this.errorService.serverError), tap(response => {
          }));
  }

  getSemesterTimeTable(course_id, semester_id, session_id){
      return this.http.get(this.BASE_API_URL + '/getSemesterTimeTableByCourseAndSemesterId/' + course_id + '/' + semester_id + '/' + session_id)
          .pipe(catchError(this.errorService.serverError), tap(response => {
          }));
  }

  getSubjects(course_id, semester_id){
      return this.http.get(this.BASE_API_URL + '/getSubject/' + course_id + '/' + semester_id)
          .pipe(catchError(this.errorService.serverError), tap(response => {
          }));
  }

    getTeacherList(course_id, semester_id){
        return this.http.get(this.BASE_API_URL + '/getTeacherByCourseAndSem/' + course_id + '/' + semester_id)
            .pipe(catchError(this.errorService.serverError), tap(response => {
            }));
    }


  deleteSubject(value){
      return this.http.get(this.BASE_API_URL + '/deleteSubject/' + value)
          .pipe(catchError(this.errorService.serverError), tap(response => {
              // @ts-ignore
              if(response.success ==1){
                  // @ts-ignore
                  const index = this.subjectList.findIndex(x => x.id === response.data.id);
                  this.subjectList.splice(index,1);
                  this.subjectListSubject.next([...this.subjectList]);
              }
          }));
  }

  deleteCourse(value){
      return this.http.get(this.BASE_API_URL + '/deleteCourse/' + value)
          .pipe(catchError(this.errorService.serverError), tap(response => {
              // @ts-ignore
              if(response.success ==1){
                  // @ts-ignore
                  const index = this.courseList.findIndex(x => x.id === response.data.id);
                  this.courseList.splice(index,1);
                  this.coursesSubject.next([...this.courseList]);
              }
          }));
  }

  saveSemester(value){
    return this.http.post(this.BASE_API_URL + '/saveSemester', value)
        .pipe(catchError(this.errorService.serverError), tap(response => {
          // @ts-ignore
          this.semesterList.push(response.data);
          this.semesterSubject.next([...this.semesterList]);
        }));
  }

  updateCourse(data){
      return this.http.post(this.BASE_API_URL + '/updateCourse', data)
          .pipe(catchError(this.errorService.serverError), tap(response => {
              // @ts-ignore
              if(response.success == 1){
                  // @ts-ignore
                  const index = this.courseList.findIndex(x => x.id === response.data.id);
                  // @ts-ignore
                  this.courseList[index] = response.data;
                  this.coursesSubject.next([...this.courseList]);
              }
          }));
  }

  createSemesterTimetable(value){
      return this.http.post(this.BASE_API_URL + '/saveSemesterTimeTable', value)
          .pipe(catchError(this.errorService.serverError), tap(response => {
          }));
  }

  updateSemesterTimeTable(data){
      return this.http.post(this.BASE_API_URL + '/updateSemesterTimeTable', data)
          .pipe(catchError(this.errorService.serverError), tap(response => {

          }));
  }

  deleteSemesterTimeTable(id){
      return this.http.get(this.BASE_API_URL + '/deleteSemesterTimeTable/' + id)
          .pipe(catchError(this.errorService.serverError), tap(response => {

          }));
  }

  saveSubjectGroup(value){
      return this.http.post(this.BASE_API_URL + '/saveSubjectGroup', value)
          .pipe(catchError(this.errorService.serverError), tap(response => {
              // @ts-ignore
              if(response.success == 1){
                  // @ts-ignore
                  this.subjectGroupList = response.data;
                  this.subjectGroupSubject.next([...this.subjectGroupList]);
              }
          }));
  }

  updateSubjectGroup(value){
      return this.http.post(this.BASE_API_URL + '/updateSubjectGroup', value)
          .pipe(catchError(this.errorService.serverError), tap(response => {
              // @ts-ignore
              if(response.success == 1){
                  // @ts-ignore
                  this.subjectGroupList = response.data;
                  this.subjectGroupSubject.next([...this.subjectGroupList]);
              }
          }));
  }

  deleteSubjectGroup(course_id,semester_id){
      return this.http.get(this.BASE_API_URL + '/deleteSubjectGroup/' + course_id + '/' + semester_id)
          .pipe(catchError(this.errorService.serverError), tap(response => {
              // @ts-ignore
              if(response.success ==1){
                  // @ts-ignore
                  this.subjectGroupList = response.data;
                  this.subjectGroupSubject.next([...this.subjectGroupList]);
              }
          }));
  }


}
