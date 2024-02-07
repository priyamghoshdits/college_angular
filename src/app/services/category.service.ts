import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ErrorService} from "./error.service";
import {environment} from "../../environments/environment";
import {Subject} from "rxjs";
import {catchError, tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private BASE_API_URL = environment.BASE_API_URL;
  categoryList = [];

  categoryListSubject = new Subject<any[]>();

  getCategoryListener(){
    return this.categoryListSubject.asObservable();
  }

  constructor(private  http: HttpClient, private errorService: ErrorService) {
    this.http.get(this.BASE_API_URL + '/getCategory').subscribe((response: any) =>{
      this.categoryList = response.data;
      this.categoryListSubject.next([...this.categoryList]);
    });
  }

  getCategoryList(){
    return [...this.categoryList]
  }

  saveCategory(value){
    return this.http.post(this.BASE_API_URL + '/saveCategory', value)
        .pipe(catchError(this.errorService.serverError), tap(response => {
          // @ts-ignore
          if(response.success == 1){
            // @ts-ignore
            this.categoryList.push(response.data);
            this.categoryListSubject.next([...this.categoryList]);
          }
        }));
  }

  updateCategory(data){
    return this.http.post(this.BASE_API_URL + '/updateCategory', data)
        .pipe(catchError(this.errorService.serverError), tap(response => {
          // @ts-ignore
          if(response.success == 1){
            // @ts-ignore
            const index = this.categoryList.findIndex(x => x.id === response.data.id);
            // @ts-ignore
            this.categoryList[index] = response.data;
            this.categoryListSubject.next([...this.categoryList]);
          }
        }));
  }

  deleteCategory(id){
    return this.http.get(this.BASE_API_URL + '/deleteCategory/' + id)
        .pipe(catchError(this.errorService.serverError), tap(response => {
          // @ts-ignore
          if(response.success == 1){
            // @ts-ignore
            const index = this.categoryList.findIndex(x => x.id === response.data.id);
            // @ts-ignore
            this.categoryList.splice(index,1);
            this.categoryListSubject.next([...this.categoryList]);
          }
        }));
  }

}
