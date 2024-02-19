import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ErrorService} from "./error.service";
import {environment} from "../../environments/environment";
import {Subject} from "rxjs";
import {catchError, tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class FranchiseService {
  private BASE_API_URL = environment.BASE_API_URL;

  franchiseList = [];

  franchiseListSubject = new Subject<any[]>();
  getFranchiseListener(){
    return this.franchiseListSubject.asObservable();
  }
  constructor(private  http: HttpClient, private errorService: ErrorService) {
    this.http.get(this.BASE_API_URL + '/getFranchise').subscribe((response: any) =>{
      this.franchiseList = response.data;
      this.franchiseListSubject.next([...this.franchiseList]);
    });
  }

  getFranchiseList(){
    return [...this.franchiseList];
  }

  saveFranchise(value){
    return this.http.post(this.BASE_API_URL + '/saveFranchise', value)
        .pipe(catchError(this.errorService.serverError), tap(response => {
          // @ts-ignore
          if(response.success == 1){
            // @ts-ignore
            this.franchiseList.push(response.data);
            this.franchiseListSubject.next([...this.franchiseList]);
          }
        }));
  }

  updateFranchise(value){
    return this.http.post(this.BASE_API_URL + '/updateFranchise', value)
        .pipe(catchError(this.errorService.serverError), tap(response => {
          // @ts-ignore
          if(response.success == 1){
            // @ts-ignore
            const index = this.franchiseList.findIndex(x => x.id === response.data.id);
            // @ts-ignore
            this.franchiseList[index] = response.data;
            this.franchiseListSubject.next([...this.franchiseList]);
          }
        }));
  }

  deleteFranchise(id){
    return this.http.get(this.BASE_API_URL + '/deleteFranchise/' + id)
        .pipe(catchError(this.errorService.serverError), tap(response => {
          // @ts-ignore
          if(response.success == 1){
            // @ts-ignore
            const index = this.franchiseList.findIndex(x => x.id === response.data.id);
            // @ts-ignore
            this.franchiseList.splice(index,1);
            this.franchiseListSubject.next([...this.franchiseList]);
          }
        }));
  }


}
