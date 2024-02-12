import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ErrorService} from "./error.service";
import {environment} from "../../environments/environment";
import {Subject} from "rxjs";
import {catchError, tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class LeaveService {
  private BASE_API_URL = environment.BASE_API_URL;
  leaveTypeList = [];
  leaveAllocationList = [];
  leaveList = [];

  leaveTypeListSubject = new Subject<any[]>();
  leaveAllocationSubject = new Subject<any[]>();
  leaveListSubject = new Subject<any[]>();

  getLeaveTypeListener(){
    return this.leaveTypeListSubject.asObservable();
  }

  getLeaveListListener(){
      return this.leaveListSubject.asObservable();
  }

  getLeaveAllocationListener(){
      return this.leaveAllocationSubject.asObservable();
  }

  constructor(private  http: HttpClient, private errorService: ErrorService) {
    this.http.get(this.BASE_API_URL + '/getLeaveType').subscribe((response: any) =>{
      this.leaveTypeList = response.data;
      this.leaveTypeListSubject.next([...this.leaveTypeList]);
    });
      this.http.get(this.BASE_API_URL + '/getLeaveList').subscribe((response: any) =>{
          this.leaveAllocationList = response.data;
          this.leaveAllocationSubject.next([...this.leaveAllocationList]);
      });
      this.http.get(this.BASE_API_URL + '/getLeave').subscribe((response: any) =>{
          this.leaveList = response.data;
          this.leaveListSubject.next([...this.leaveList]);
      });
  }

    getLeaveList(){
        return [...this.leaveList];
    }

  getLeaveAllocationList(){
      return [...this.leaveAllocationList];
  }

  getLeaveTypeList(){
    return [...this.leaveTypeList];
  }

  saveLeaveType(data){
    return this.http.post(this.BASE_API_URL + '/saveLeaveType', data)
        .pipe(catchError(this.errorService.serverError), tap(response => {
          // @ts-ignore
          if(response.success == 1){
            // @ts-ignore
            this.leaveTypeList.push(response.data);
            this.leaveTypeListSubject.next([...this.leaveTypeList]);
          }
        }));
  }

    saveLeaveAllocation(data){
        return this.http.post(this.BASE_API_URL + '/saveLeaveList', data)
            .pipe(catchError(this.errorService.serverError), tap(response => {
                // @ts-ignore
                if(response.success == 1){
                    // @ts-ignore
                    this.leaveAllocationList.push(response.data);
                    this.leaveAllocationSubject.next([...this.leaveAllocationList]);
                }
            }));
    }

    updateLeaveAllocation(data){
        return this.http.post(this.BASE_API_URL + '/updateLeaveList', data)
            .pipe(catchError(this.errorService.serverError), tap(response => {
                // @ts-ignore
                if(response.success == 1){
                    // @ts-ignore
                    console.log(response.data);
                    // // @ts-ignore
                    // this.leaveAllocationList.push(response.data);
                    // this.leaveAllocationSubject.next([...this.leaveAllocationList]);
                }
            }));
    }

  updateLeaveType(data){
    return this.http.post(this.BASE_API_URL + '/updateLeaveType', data)
        .pipe(catchError(this.errorService.serverError), tap(response => {
          // @ts-ignore
          if(response.success == 1){
            // @ts-ignore
            const index = this.leaveTypeList.findIndex(x => x.id === response.data.id);
            // @ts-ignore
            this.leaveTypeList[index] = response.data;
            this.leaveTypeListSubject.next([...this.leaveTypeList]);
          }
        }));
  }

  deleteLeaveType(id){
    return this.http.get(this.BASE_API_URL + '/deleteLeaveType/' + id)
        .pipe(catchError(this.errorService.serverError), tap(response => {
          // @ts-ignore
          if(response.success == 1){
            // @ts-ignore
            const index = this.leaveTypeList.findIndex(x => x.id === response.data.id);
            this.leaveTypeList.splice(index,1);
            this.leaveTypeListSubject.next([...this.leaveTypeList]);
          }
        }));
  }

  deleteLeaveAllocation(id){
      return this.http.get(this.BASE_API_URL + '/deleteLeaveList/' + id)
          .pipe(catchError(this.errorService.serverError), tap(response => {
              // @ts-ignore
              if(response.success == 1){
                  // @ts-ignore
                  const index = this.leaveAllocationList.findIndex(x => x.user_id === response.data.user_id);
                  this.leaveAllocationList.splice(index,1);
                  this.leaveAllocationSubject.next([...this.leaveAllocationList]);
              }
          }));
  }

  getLeaveByUserIdAndLeaveTypeId(userId, leaveTypeId){
      return this.http.get(this.BASE_API_URL + '/getLeavesBy/' + userId + '/' + leaveTypeId)
          .pipe(catchError(this.errorService.serverError), tap(response => {
          }));
  }

  getUpdatedLeaveList(){
      this.http.get(this.BASE_API_URL + '/getLeaveList').subscribe((response: any) =>{
          this.leaveAllocationList = response.data;
          this.leaveAllocationSubject.next([...this.leaveAllocationList]);
      });
  }

  saveApplyLeave(data){
      return this.http.post(this.BASE_API_URL + '/saveLeave', data)
          .pipe(catchError(this.errorService.serverError), tap(response => {
              // @ts-ignore
              if(response.success == 1){
                  // @ts-ignore
                  this.leaveList.push(response.data);
                  this.leaveListSubject.next([...this.leaveList]);
                   this.getUpdatedLeaveList();
              }
          }));
  }

    updateLeaveStatus(id, status){
        return this.http.get(this.BASE_API_URL + '/updateApproval/' + id + '/' +status)
            .pipe(catchError(this.errorService.serverError), tap(response => {
                // @ts-ignore
                if(response.success == 1){
                    // @ts-ignore
                    let index = this.leaveList.findIndex(x => x.id == response.data.id);
                    // @ts-ignore
                    this.leaveList[index] = response.data;
                    this.leaveListSubject.next([...this.leaveList]);
                }
            }));
    }

    updateLeave(value){
        return this.http.post(this.BASE_API_URL + '/updateLeave', value)
            .pipe(catchError(this.errorService.serverError), tap(response => {
                // @ts-ignore
                if(response.success == 1){
                    // @ts-ignore
                    const index = this.leaveList.findIndex(x => x.id === response.data.id);
                    // @ts-ignore
                    this.leaveList[index] = response.data;
                    this.leaveListSubject.next([...this.leaveList]);
                }
            }));
    }

    deleteLeave(id){
        return this.http.get(this.BASE_API_URL + '/deleteLeave/' + id)
            .pipe(catchError(this.errorService.serverError), tap(response => {
                // @ts-ignore
                if(response.success == 1){
                    // @ts-ignore
                    const index = this.leaveList.findIndex(x => x.id === response.data.id);
                    this.leaveList.splice(index,1);
                    this.leaveListSubject.next([...this.leaveList]);
                }
            }));
    }


}
