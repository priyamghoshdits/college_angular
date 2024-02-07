import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ErrorService} from "./error.service";
import {environment} from "../../environments/environment";
import {Subject} from "rxjs";
import {catchError, tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class HostelService {
  private BASE_API_URL = environment.BASE_API_URL;

  hostelTypes = [];
  hostelList = [];
  roomTypeList = [];
  hostelRoomList = [];

  hostelTypesSubject = new Subject<any[]>();
  hostelListSubject = new Subject<any[]>();
  roomTypeListSubject = new Subject<any[]>();
  hostelRoomListSubject = new Subject<any[]>();

  getHostelTypesListener(){
    return this.hostelTypesSubject.asObservable();
  }

  getHostelRoomListener(){
    return this.hostelRoomListSubject.asObservable();
  }

  getHostelListListener(){
    return this.hostelListSubject.asObservable();
  }

  getRoomTypeListListener(){
    return this.roomTypeListSubject.asObservable();
  }

  constructor(private  http: HttpClient, private errorService: ErrorService) {
    this.http.get(this.BASE_API_URL + '/getHostelTypes').subscribe((response: any) =>{
      this.hostelTypes = response.data;
      this.hostelTypesSubject.next([...this.hostelTypes]);
    });
    this.http.get(this.BASE_API_URL + '/getHostels').subscribe((response: any) =>{
      this.hostelList = response.data;
      this.hostelListSubject.next([...this.hostelList]);
    });
    this.http.get(this.BASE_API_URL + '/getRoomType').subscribe((response: any) =>{
      this.roomTypeList = response.data;
      this.roomTypeListSubject.next([...this.roomTypeList]);
    });
    this.http.get(this.BASE_API_URL + '/getRoomDetails').subscribe((response: any) =>{
      this.hostelRoomList = response.data;
      this.hostelRoomListSubject.next([...this.hostelRoomList]);
    });
  }
  getHostelTypes(){
    return [...this.hostelTypes];
  }
  getHostelRoomListTypes(){
    return [...this.hostelRoomList];
  }
  getRoomTypes(){
    return [...this.roomTypeList];
  }

  getHostels(){
    return [...this.hostelList];
  }

  saveHostels(value){
    return this.http.post(this.BASE_API_URL + '/saveHostels', value)
        .pipe(catchError(this.errorService.serverError), tap(response => {
          // @ts-ignore
          if(response.success == 1){
            // @ts-ignore
            this.hostelList.push(response.data);
            this.hostelListSubject.next([...this.hostelList]);
          }
        }));
  }

  saveRoomType(value){
    return this.http.post(this.BASE_API_URL + '/saveRoomType', value)
        .pipe(catchError(this.errorService.serverError), tap(response => {
          // @ts-ignore
          if(response.success == 1){
            // @ts-ignore
            this.roomTypeList.push(response.data);
            this.roomTypeListSubject.next([...this.roomTypeList]);
          }
        }));
  }

  updateRoomType(value){
    return this.http.post(this.BASE_API_URL + '/updateRoomType', value)
        .pipe(catchError(this.errorService.serverError), tap(response => {
          // @ts-ignore
          if(response.success == 1){
            // @ts-ignore
            const index = this.roomTypeList.findIndex(x => x.id === response.data.id);
            // @ts-ignore
            this.roomTypeList[index] = response.data;
            this.roomTypeListSubject.next([...this.roomTypeList]);
          }
        }));
  }

  deleteRoomType(id){
    return this.http.get(this.BASE_API_URL + '/deleteRoomType/' + id)
        .pipe(catchError(this.errorService.serverError), tap(response => {
          // @ts-ignore
          if(response.success == 1){
            // @ts-ignore
            const index = this.hostelList.findIndex(x => x.id === response.data.id);
            // @ts-ignore
            this.roomTypeList.splice(index,1);
            this.roomTypeListSubject.next([...this.roomTypeList]);
          }
        }));
  }

  deleteHostels(id){
    return this.http.get(this.BASE_API_URL + '/deleteHostels/' + id)
        .pipe(catchError(this.errorService.serverError), tap(response => {
          // @ts-ignore
          if(response.success == 1){
            // @ts-ignore
            const index = this.hostelList.findIndex(x => x.id === response.data.id);
            // @ts-ignore
            this.hostelList.splice(index,1);
            this.hostelListSubject.next([...this.hostelList]);
          }
        }));
  }

  updateHostels(value){
    return this.http.post(this.BASE_API_URL + '/updateHostels', value)
        .pipe(catchError(this.errorService.serverError), tap(response => {
          // @ts-ignore
          if(response.success == 1){
            // @ts-ignore
            const index = this.hostelList.findIndex(x => x.id === response.data.id);
            // @ts-ignore
            this.hostelList[index] = response.data;
            this.hostelListSubject.next([...this.hostelList]);
          }
        }));
  }

  saveHostelRoomList(value){
    return this.http.post(this.BASE_API_URL + '/saveRoomDetails', value)
        .pipe(catchError(this.errorService.serverError), tap(response => {
          // @ts-ignore
          if(response.success == 1){
            // @ts-ignore
            this.hostelRoomList.push(response.data);
            this.hostelRoomListSubject.next([...this.hostelRoomList]);
          }
        }));
  }

  updateHostelRoomList(value){
    return this.http.post(this.BASE_API_URL + '/updateRoomDetails', value)
        .pipe(catchError(this.errorService.serverError), tap(response => {
          // @ts-ignore
          if(response.success == 1){
            // @ts-ignore
            const index = this.hostelRoomList.findIndex(x => x.id === response.data.id);
            // @ts-ignore
            this.hostelRoomList[index] = response.data;
            this.hostelRoomListSubject.next([...this.hostelRoomList]);
          }
        }));
  }

  deleteHostelRoomList(id){
    return this.http.get(this.BASE_API_URL + '/deleteRoomDetails/' + id)
        .pipe(catchError(this.errorService.serverError), tap(response => {
          // @ts-ignore
          if(response.success == 1){
            // @ts-ignore
            const index = this.hostelRoomList.findIndex(x => x.id === response.data.id);
            // @ts-ignore
            this.hostelRoomList.splice(index,1);
            this.hostelRoomListSubject.next([...this.hostelRoomList]);
          }
        }));
  }
}
