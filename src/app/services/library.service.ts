import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ErrorService} from "./error.service";
import {Subject} from "rxjs";
import {environment} from "../../environments/environment";
import {catchError, tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class LibraryService {
  private BASE_API_URL = environment.BASE_API_URL;
  libraryItemList  = [];
  libraryIssueItemList  = [];
  libraryDigitalBookList  = [];
  returnPeriodOverList  = [];

  libraryItemListSubject = new Subject<any[]>();
  libraryIssueItemListSubject = new Subject<any[]>();
  libraryDigitalBookListSubject = new Subject<any[]>();
  returnPeriodOverListSubject = new Subject<any[]>();

  getLibraryItemListener(){
    return this.libraryItemListSubject.asObservable();
  }

    getReturnPeriodOverListener(){
        return this.returnPeriodOverListSubject.asObservable();
    }

    getLibraryDigitalBookListener(){
        return this.libraryDigitalBookListSubject.asObservable();
    }

  getLibraryIssueItemListener(){
      return this.libraryIssueItemListSubject.asObservable();
  }
  constructor(private  http: HttpClient, private errorService: ErrorService) {
    this.http.get(this.BASE_API_URL + '/getLibraryDetails').subscribe((response: any) =>{
      this.libraryItemList = response.data;
      this.libraryItemListSubject.next([...this.libraryItemList]);
    });

      this.http.get(this.BASE_API_URL + '/getReturnOverPeriod').subscribe((response: any) =>{
          this.returnPeriodOverList = response.data;
          this.returnPeriodOverListSubject.next([...this.returnPeriodOverList]);
      });

      this.http.get(this.BASE_API_URL + '/getIssuedBooks').subscribe((response: any) =>{
          this.libraryIssueItemList = response.data;
          this.libraryIssueItemListSubject.next([...this.libraryIssueItemList]);
      });

      this.http.get(this.BASE_API_URL + '/getLibraryDigitalBook').subscribe((response: any) =>{
          this.libraryDigitalBookList = response.data;
          this.libraryDigitalBookListSubject.next([...this.libraryDigitalBookList]);
      });
  }

  getLibraryItemList(){
    return [...this.libraryItemList];
  }

    getReturnOverPeriodList(){
        return [...this.returnPeriodOverList];
    }

    getLibraryIssueItemList(){
        return [...this.libraryIssueItemList];
    }

    getLibraryDigitalBooksList(){
        return [...this.libraryDigitalBookList];
    }

  saveLibraryItems(data){
    return this.http.post(this.BASE_API_URL + '/saveLibraryDetails', data)
        .pipe(catchError(this.errorService.serverError), tap(response => {
          // @ts-ignore
          if(response.success == 1){
            // @ts-ignore
            this.libraryItemList.push(response.data);
            this.libraryItemListSubject.next([...this.libraryItemList]);
          }
        }));
  }

    saveLibraryDigitalBooks(data){
        return this.http.post(this.BASE_API_URL + '/saveLibraryDigitalBook', data)
            .pipe(catchError(this.errorService.serverError), tap(response => {
                // @ts-ignore
                if(response.success == 1){
                    // @ts-ignore
                    this.libraryDigitalBookList.push(response.data);
                    this.libraryDigitalBookListSubject.next([...this.libraryDigitalBookList]);
                }
            }));
    }

    updateLibraryDigitalBooks(data){
        return this.http.post(this.BASE_API_URL + '/updateLibraryDigitalBook', data)
            .pipe(catchError(this.errorService.serverError), tap(response => {
                // @ts-ignore
                if(response.success == 1){
                    // @ts-ignore
                    const index = this.libraryDigitalBookList.findIndex(x => x.id === response.data.id);
                    // @ts-ignore
                    this.libraryDigitalBookList[index] = response.data;
                    this.libraryDigitalBookListSubject.next([...this.libraryDigitalBookList]);
                }
            }));
    }

    deleteLibraryDigitalBooks(id){
        return this.http.get(this.BASE_API_URL + '/deleteLibraryDigitalBook/' + id)
            .pipe(catchError(this.errorService.serverError), tap(response => {
                // @ts-ignore
                if(response.success == 1){
                    // @ts-ignore
                    const index = this.libraryDigitalBookList.findIndex(x => x.id === response.data.id);
                    this.libraryDigitalBookList.splice(index,1);
                    this.libraryDigitalBookListSubject.next([...this.libraryDigitalBookList]);
                }
            }));
    }

  updateLibraryItems(data){
    return this.http.post(this.BASE_API_URL + '/updateLibraryDetails', data)
        .pipe(catchError(this.errorService.serverError), tap(response => {
          // @ts-ignore
          if(response.success == 1){
            // @ts-ignore
            const index = this.libraryItemList.findIndex(x => x.id === response.data.id);
            // @ts-ignore
            this.libraryItemList[index] = response.data;
            this.libraryItemListSubject.next([...this.libraryItemList]);
          }
        }));
  }

  deleteLibraryItem(id){
    return this.http.get(this.BASE_API_URL + '/deleteLibraryDetails/' + id)
        .pipe(catchError(this.errorService.serverError), tap(response => {
          // @ts-ignore
          if(response.success == 1){
            // @ts-ignore
            const index = this.libraryItemList.findIndex(x => x.id === response.data.id);
            this.libraryItemList.splice(index,1);
            this.libraryItemListSubject.next([...this.libraryItemList]);
          }
        }));
  }

  saveItemIssueBooks(data){
      return this.http.post(this.BASE_API_URL + '/saveIssuedBooks', data)
          .pipe(catchError(this.errorService.serverError), tap(response => {
              // @ts-ignore
              if(response.success == 1){
                  // @ts-ignore
                  const index = this.libraryItemList.findIndex(x => x.id === response.data.book_id);
                  // @ts-ignore
                  this.libraryItemList[index].remaining = data.temp_remaining - data.quantity;
                  this.libraryItemListSubject.next([...this.libraryItemList]);
                  // @ts-ignore
                  this.libraryIssueItemList.push(response.data);
                  this.libraryIssueItemListSubject.next([...this.libraryIssueItemList]);
              }
          }));
  }

  updateReturnStatus(id,book_id,quantity){
      return this.http.get(this.BASE_API_URL + '/updateReturnStatus/' + id)
          .pipe(catchError(this.errorService.serverError), tap(response => {
              // @ts-ignore
              if(response.success == 1){
                  // @ts-ignore
                  const index = this.libraryIssueItemList.findIndex(x => x.id === response.data.id);
                  // @ts-ignore
                  this.libraryIssueItemList[index] = response.data;
                  this.libraryIssueItemListSubject.next([...this.libraryIssueItemList]);
                  // @ts-ignore
                  const index2 = this.libraryItemList.findIndex(x => x.id === book_id);
                  // @ts-ignore
                  this.libraryItemList[index2].remaining = this.libraryItemList[index2].remaining + quantity;
                  this.libraryItemListSubject.next([...this.libraryItemList]);
              }
          }));
  }

  updateItemIssue(data){
      return this.http.post(this.BASE_API_URL + '/updateIssuedBooks', data)
          .pipe(catchError(this.errorService.serverError), tap(response => {
              // @ts-ignore
              if(response.success == 1){
                  // @ts-ignore
                  const index = this.libraryIssueItemList.findIndex(x => x.id === response.data.id);
                  // @ts-ignore
                  this.libraryIssueItemList[index] = response.data;
                  this.libraryIssueItemListSubject.next([...this.libraryIssueItemList]);
              }
          }));
  }

    updateItemIssueDiscount(data){
        return this.http.post(this.BASE_API_URL + '/updateIssuedBooksDiscount', data)
            .pipe(catchError(this.errorService.serverError), tap(response => {
                // @ts-ignore
                if(response.success == 1){
                    // @ts-ignore
                    const index = this.libraryIssueItemList.findIndex(x => x.id === response.data.id);
                    // @ts-ignore
                    this.libraryIssueItemList[index] = response.data;
                    this.libraryIssueItemListSubject.next([...this.libraryIssueItemList]);

                    // @ts-ignore
                    const index1 = this.returnPeriodOverList.findIndex(x => x.id === response.data.id);
                    // @ts-ignore
                    this.returnPeriodOverList[index1] = response.data;
                    this.returnPeriodOverListSubject.next([...this.returnPeriodOverList]);

                    // @ts-ignore
                    // const index1 = this.returnPeriodOverList.findIndex(x => x.id === response.data.id);
                    // this.returnPeriodOverList.splice(index,1);
                    // this.returnPeriodOverListSubject.next([...this.returnPeriodOverList]);
                }
            }));
    }

  deleteIssueItem(id){
      return this.http.get(this.BASE_API_URL + '/deleteIssuedBooks/' + id)
          .pipe(catchError(this.errorService.serverError), tap(response => {
              // @ts-ignore
              if(response.success == 1){
                  // @ts-ignore
                  const index = this.libraryIssueItemList.findIndex(x => x.id === response.data.id);
                  // @ts-ignore
                  this.libraryIssueItemList.splice(index,1);
                  this.libraryIssueItemListSubject.next([...this.libraryIssueItemList]);
              }
          }));
  }

}
