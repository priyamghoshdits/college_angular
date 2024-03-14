import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {ErrorService} from "./error.service";
import {Subject} from "rxjs";
import {catchError, tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class PostalService {
  private BASE_API_URL = environment.BASE_API_URL;

  postalDispatchList = [];
  postalReceiveList = [];

  postalDispatchListSubject = new Subject<any[]>();
  postalReceiveListSubject = new Subject<any[]>();

  getPostalDispatchListener(){
    return this.postalDispatchListSubject.asObservable();
  }

  getPostalReceiveListener(){
    return this.postalReceiveListSubject.asObservable();
  }

  constructor(private  http: HttpClient, private errorService: ErrorService) {
    this.http.get(this.BASE_API_URL + '/getPostalDispatch').subscribe((response: any) =>{
      this.postalDispatchList = response.data;
      this.postalDispatchListSubject.next([...this.postalDispatchList]);
    });

    this.http.get(this.BASE_API_URL + '/getPostalReceive').subscribe((response: any) =>{
      this.postalReceiveList = response.data;
      this.postalReceiveListSubject.next([...this.postalReceiveList]);
    });
  }

  getPostalDispatchList(){
    return [...this.postalDispatchList];
  }

  getPostalReceiveList(){
    return [...this.postalReceiveList];
  }

  savePostal(data){
    return this.http.post(this.BASE_API_URL + '/savePostal', data)
        .pipe(catchError(this.errorService.serverError), tap(response => {
          // @ts-ignore
          if(response.success == 1){
            console.log(response);
            // @ts-ignore
            if(response.data.postal_type == "postal dispatch"){
              // @ts-ignore
              this.postalDispatchList.push(response.data);
              this.postalDispatchListSubject.next([...this.postalDispatchList]);
            }else{
              // @ts-ignore
              this.postalReceiveList.push(response.data);
              this.postalReceiveListSubject.next([...this.postalReceiveList]);
            }
          }
        }));
  }

  updatePostal(data){
    return this.http.post(this.BASE_API_URL + '/updatePostal', data)
        .pipe(catchError(this.errorService.serverError), tap(response => {
          // @ts-ignore
          if(response.success == 1){
            // @ts-ignore
            if(response.data.postal_type == "postal dispatch"){
              // @ts-ignore
              const index = this.postalDispatchList.findIndex(x => x.id === response.data.id);
              // @ts-ignore
              this.postalDispatchList[index] = response.data;
              this.postalDispatchListSubject.next([...this.postalDispatchList]);
            }else{
              // @ts-ignore
              // @ts-ignore
              const index = this.postalReceiveList.findIndex(x => x.id === response.data.id);
              // @ts-ignore
              this.postalReceiveList[index] = response.data;
              this.postalReceiveListSubject.next([...this.postalReceiveList]);
            }
          }
        }));
  }

  deletePostal(id){
    return this.http.get(this.BASE_API_URL + '/deletePostal/' + id)
        .pipe(catchError(this.errorService.serverError), tap(response => {
          // @ts-ignore
          if(response.success == 1){
            // @ts-ignore
            if(response.data.postal_type == "postal dispatch"){
              // @ts-ignore
              const index = this.postalDispatchList.findIndex(x => x.id === response.data.id);
              // @ts-ignore
              this.postalDispatchList.splice(index,1);
              this.postalDispatchListSubject.next([...this.postalDispatchList]);
            }else{
              // @ts-ignore
              // @ts-ignore
              const index = this.postalReceiveList.findIndex(x => x.id === response.data.id);
              // @ts-ignore
              this.postalReceiveList.splice(index,1);
              this.postalReceiveListSubject.next([...this.postalReceiveList]);
            }
          }
        }));
  }

}
