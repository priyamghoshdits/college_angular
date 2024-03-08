import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {ErrorService} from "./error.service";
import {Subject} from "rxjs";
import {catchError, tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class VirtualClassMeetingService {
  private BASE_API_URL = environment.BASE_API_URL;

  virtualClassList = [];
  virtualMeetingList = [];

  virtualClassListSubject = new Subject<any[]>();
  virtualMeetingListSubject = new Subject<any[]>();

  getVirtualClassListListener(){
    return this.virtualClassListSubject.asObservable();
  }

    getVirtualMeetingListListener(){
        return this.virtualMeetingListSubject.asObservable();
    }
  constructor(private  http: HttpClient, private errorService: ErrorService) {
    this.http.get(this.BASE_API_URL + '/getVirtualClass').subscribe((response: any) =>{
      this.virtualClassList = response.data;
      this.virtualClassListSubject.next([...this.virtualClassList]);
    });
      this.http.get(this.BASE_API_URL + '/getVirtualMeeting').subscribe((response: any) =>{
          this.virtualMeetingList = response.data;
          this.virtualMeetingListSubject.next([...this.virtualMeetingList]);
      });
  }

  getVirtualClassList(){
    return [...this.virtualClassList];
  }

    getVirtualMeetingList(){
        return [...this.virtualMeetingList];
    }

  saveVirtualClass(data){
    return this.http.post(this.BASE_API_URL + '/saveVirtualClass', data)
        .pipe(catchError(this.errorService.serverError), tap(response => {
          // @ts-ignore
          if(response.success == 1){
            // @ts-ignore
            this.virtualClassList.push(response.data);
            this.virtualClassListSubject.next([...this.virtualClassList]);
          }
        }));
  }

    saveVirtualMeeting(data){
        return this.http.post(this.BASE_API_URL + '/saveVirtualMeeting', data)
            .pipe(catchError(this.errorService.serverError), tap(response => {
                // @ts-ignore
                if(response.success == 1){
                    // @ts-ignore
                    this.virtualMeetingList.push(response.data);
                    this.virtualMeetingListSubject.next([...this.virtualMeetingList]);
                }
            }));
    }
  updateVirtualClass(data){
    return this.http.post(this.BASE_API_URL + '/updateVirtualClass', data)
        .pipe(catchError(this.errorService.serverError), tap(response => {
          // @ts-ignore
          if(response.success == 1) {
            // @ts-ignore
            const index = this.virtualClassList.findIndex(x => x.id === response.data.id);
            // @ts-ignore
            this.virtualClassList[index] = response.data;
            this.virtualClassListSubject.next([...this.virtualClassList]);
          }
        }));
  }

    updateVirtualMeeting(data){
        return this.http.post(this.BASE_API_URL + '/updateVirtualMeeting', data)
            .pipe(catchError(this.errorService.serverError), tap(response => {
                // @ts-ignore
                if(response.success == 1) {
                    // @ts-ignore
                    const index = this.virtualMeetingList.findIndex(x => x.id === response.data.id);
                    // @ts-ignore
                    this.virtualMeetingList[index] = response.data;
                    this.virtualMeetingListSubject.next([...this.virtualMeetingList]);
                }
            }));
    }
  deleteVirtualClass(id){
    return this.http.get(this.BASE_API_URL + '/deleteVirtualClass/' + id)
        .pipe(catchError(this.errorService.serverError), tap(response => {
          // @ts-ignore
          if(response.success == 1){
            // @ts-ignore
            const index = this.virtualClassList.findIndex(x => x.id === response.data.id);
            this.virtualClassList.splice(index,1);
            this.virtualClassListSubject.next([...this.virtualClassList]);
          }
        }));
  }

    deleteVirtualMeeting(id){
        return this.http.get(this.BASE_API_URL + '/deleteVirtualMeeting/' + id)
            .pipe(catchError(this.errorService.serverError), tap(response => {
                // @ts-ignore
                if(response.success == 1){
                    // @ts-ignore
                    const index = this.virtualMeetingList.findIndex(x => x.id === response.data.id);
                    this.virtualMeetingList.splice(index,1);
                    this.virtualMeetingListSubject.next([...this.virtualMeetingList]);
                }
            }));
    }

}
