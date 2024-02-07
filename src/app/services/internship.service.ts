import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ErrorService} from "./error.service";
import {environment} from "../../environments/environment";
import {Subject} from "rxjs";
import {catchError, tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class InternshipService {
  private BASE_API_URL = environment.BASE_API_URL;
  internshipProviderList = [];
  internshipDetailsList = [];


  // SUBJECTS
  internshipProviderSubject = new Subject<any[]>();
  internshipDetailsSubject = new Subject<any[]>();


  //OBSERVABLES
  getInternshipProviderListener(){
    return this.internshipProviderSubject.asObservable();
  }

    getInternshipDetailsListener(){
        return this.internshipDetailsSubject.asObservable();
    }

  constructor(private  http: HttpClient, private errorService: ErrorService) {
    this.http.get(this.BASE_API_URL + '/getInternshipProvider').subscribe((response: any) =>{
      this.internshipProviderList = response.data;
      this.internshipProviderSubject.next([...this.internshipProviderList]);
    });

      this.http.get(this.BASE_API_URL + '/getInternshipDetails').subscribe((response: any) =>{
          this.internshipDetailsList = response.data;
          this.internshipDetailsSubject.next([...this.internshipDetailsList]);
      });
  }

  getInternshipProviderList(){
    return [...this.internshipProviderList];
  }

    getInternshipDetailsList(){
        return [...this.internshipDetailsList];
    }

  saveInternshipProvider(data){
    return this.http.post(this.BASE_API_URL + '/saveInternshipProvider', data)
        .pipe(catchError(this.errorService.serverError), tap(response => {
          // @ts-ignore
          if(response.success == 1){
            // @ts-ignore
            this.internshipProviderList.push(response.data);
            this.internshipProviderSubject.next([...this.internshipProviderList]);
          }
        }));
  }

    saveInternshipDetails(data){
        return this.http.post(this.BASE_API_URL + '/saveInternshipDetails', data)
            .pipe(catchError(this.errorService.serverError), tap(response => {
                // @ts-ignore
                if(response.success == 1){
                    // @ts-ignore
                    this.internshipDetailsList.push(response.data);
                    this.internshipDetailsSubject.next([...this.internshipDetailsList]);
                }
            }));
    }

  updateInternshipProvider(data){
    return this.http.post(this.BASE_API_URL + '/updateInternshipProvider', data)
        .pipe(catchError(this.errorService.serverError), tap(response => {
          // @ts-ignore
          if(response.success == 1){
            // @ts-ignore
            const index = this.internshipProviderList.findIndex(x => x.id === response.data.id);
            // @ts-ignore
            this.internshipProviderList[index] = response.data;
            this.internshipProviderSubject.next([...this.internshipProviderList]);
          }
        }));
  }

    updateInternshipDetails(data){
        return this.http.post(this.BASE_API_URL + '/updateInternshipDetails', data)
            .pipe(catchError(this.errorService.serverError), tap(response => {
                // @ts-ignore
                if(response.success == 1){
                    // @ts-ignore
                    const index = this.internshipDetailsList.findIndex(x => x.id === response.data.id);
                    // @ts-ignore
                    this.internshipDetailsList[index] = response.data;
                    this.internshipDetailsSubject.next([...this.internshipDetailsList]);
                }
            }));
    }

  deleteInternshipProvider(id){
    return this.http.get(this.BASE_API_URL + '/deleteInternshipProvider/' + id)
        .pipe(catchError(this.errorService.serverError), tap(response => {
          // @ts-ignore
          if(response.success == 1){
            // @ts-ignore
            const index = this.internshipProviderList.findIndex(x => x.id === response.data.id);
            this.internshipProviderList.splice(index,1);
            this.internshipProviderSubject.next([...this.internshipProviderList]);
          }
        }));
  }
    deleteInternshipDetails(id){
        return this.http.get(this.BASE_API_URL + '/deleteInternshipDetails/' + id)
            .pipe(catchError(this.errorService.serverError), tap(response => {
                // @ts-ignore
                if(response.success == 1){
                    // @ts-ignore
                    const index = this.internshipDetailsList.findIndex(x => x.id === response.data.id);
                    this.internshipDetailsList.splice(index,1);
                    this.internshipDetailsSubject.next([...this.internshipDetailsList]);
                }
            }));
    }



}
