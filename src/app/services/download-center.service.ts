import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ErrorService} from "./error.service";
import {catchError, tap} from "rxjs/operators";
import {environment} from "../../environments/environment";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DownloadCenterService {
  private BASE_API_URL = environment.BASE_API_URL;
  assignmentList = [];
  contentList = [];
  studyMaterialList = [];
  syllabusList = [];


  assignmentListSubject = new Subject<any[]>();
  contentListSubject = new Subject<any[]>();
  studyMaterialListSubject = new Subject<any[]>();
  syllabusListSubject = new Subject<any[]>();

  getStudyMaterialListListener(){
    return this.studyMaterialListSubject.asObservable();
  }

  getSyllabusListListener(){
    return this.syllabusListSubject.asObservable();
  }

  getAssignmentListListener(){
    return this.assignmentListSubject.asObservable();
  }

  getContentListListener(){
    return this.contentListSubject.asObservable();
  }

  constructor(private  http: HttpClient, private errorService: ErrorService) {
    this.http.get(this.BASE_API_URL + '/getAssignment').subscribe((response: any) =>{
      this.assignmentList = response.data;
      this.assignmentListSubject.next([...this.assignmentList]);
    });
    this.http.get(this.BASE_API_URL + '/getContent').subscribe((response: any) =>{
      this.contentList = response.data;
      this.contentListSubject.next([...this.contentList]);
    });
    this.http.get(this.BASE_API_URL + '/getStudyMaterial').subscribe((response: any) =>{
      this.studyMaterialList = response.data;
      this.studyMaterialListSubject.next([...this.studyMaterialList]);
    });
    this.http.get(this.BASE_API_URL + '/getSyllabus').subscribe((response: any) =>{
      this.syllabusList = response.data;
      this.syllabusListSubject.next([...this.syllabusList]);
    });
  }

  getSyllabusList(){
    return [...this.syllabusList];
  }

  getAssignmentList(){
    return [...this.assignmentList];
  }

  getAllContents(){
    return [...this.contentList];
  }

  getStudyMaterialList(){
    return [...this.studyMaterialList];
  }

  uploadContent(value){
    return this.http.post(this.BASE_API_URL + '/saveContent', value)
        .pipe(catchError(this.errorService.serverError), tap(response => {
          // @ts-ignore
          if(response.success == 1){
            // @ts-ignore
            this.contentList.unshift(response.data);
            this.contentListSubject.next([...this.contentList]);
            // @ts-ignore
            if(response.data.type == 'assignment'){
              // @ts-ignore
              this.assignmentList.unshift(response.data);
              this.assignmentListSubject.next([...this.assignmentList]);
              // @ts-ignore
            }else if(response.data.type == 'study-material'){
              // @ts-ignore
              this.studyMaterialList.unshift(response.data);
              this.studyMaterialListSubject.next([...this.studyMaterialList]);
            }else{
              // @ts-ignore
              this.syllabusList.unshift(response.data);
              this.syllabusListSubject.next([...this.syllabusList]);
            }
          }
        }));
  }

  updateContent(value){
    return this.http.post(this.BASE_API_URL + '/updateContent', value)
        .pipe(catchError(this.errorService.serverError), tap(response => {

          // @ts-ignore
          if(response.success == 1){
            // @ts-ignore
            const index = this.contentList.findIndex(x => x.id == response.data.id);
            // @ts-ignore
            this.contentList[index] = response.data;
            this.contentListSubject.next([...this.contentList]);
            // @ts-ignore
            if(response.data.type == 'assignment'){
              // @ts-ignore
              const index = this.assignmentList.findIndex(x => x.id == response.data.id);
              // @ts-ignore
              this.assignmentList[index] = response.data;
              this.assignmentListSubject.next([...this.assignmentList]);
              // @ts-ignore
            }else if(response.data.type == 'study-material'){
              // @ts-ignore
              const index = this.studyMaterialList.findIndex(x => x.id == response.data.id);
              // @ts-ignore
              this.studyMaterialList[index] = response.data;
              this.studyMaterialListSubject.next([...this.studyMaterialList]);
            }else{
              // @ts-ignore
              this.syllabusList[index] = response.data;
              this.syllabusListSubject.next([...this.syllabusList]);
            }
          }

        }));
  }

  deleteContent(id){
    return this.http.get(this.BASE_API_URL + '/deleteContent/' + id)
        .pipe(catchError(this.errorService.serverError), tap(response => {
          // @ts-ignore
          if(response.success == 1){
            // @ts-ignore
            const index = this.contentList.findIndex(x => x.id == response.data.id);
            this.contentList.splice(index,1);
            this.contentListSubject.next([...this.contentList]);
            // @ts-ignore
            if(response.data.type == 'assignment'){
              // @ts-ignore
              const index = this.assignmentList.findIndex(x => x.id == response.data.id);
              this.assignmentList.splice(index,1);
              this.assignmentListSubject.next([...this.assignmentList]);
            }else{
              // @ts-ignore
              const index = this.studyMaterialList.findIndex(x => x.id == response.data.id);
              this.studyMaterialList.splice(index,1);
              this.studyMaterialListSubject.next([...this.studyMaterialList]);
            }
          }
        }));
  }

}
