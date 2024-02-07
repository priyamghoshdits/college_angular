import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {ErrorService} from "./error.service";
import {Subject} from "rxjs";
import {catchError, tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class InventoryService {
  private BASE_API_URL = environment.BASE_API_URL;
  itemCategoryList = [];
  itemList = [];


  itemListSubject = new Subject<any[]>();
  itemCategoryListSubject = new Subject<any[]>();


  getItemCategoryListListener(){
    return this.itemCategoryListSubject.asObservable();
  }

  getItemListListener(){
      return this.itemListSubject.asObservable();
  }


  constructor(private  http: HttpClient, private errorService: ErrorService) {
    this.http.get(this.BASE_API_URL + '/getItemCategory').subscribe((response: any) =>{
      this.itemCategoryList = response.data;
      this.itemCategoryListSubject.next([...this.itemCategoryList]);
    });
      this.http.get(this.BASE_API_URL + '/getInventoryItems').subscribe((response: any) =>{
          this.itemList = response.data;
          this.itemListSubject.next([...this.itemList]);
      });

  }

  getItemCategory(){
    return [...this.itemCategoryList];
  }

  getItem(){
      return [...this.itemList];
  }

  saveItemCategory(data){
    return this.http.post(this.BASE_API_URL + '/saveItemCategory', data)
        .pipe(catchError(this.errorService.serverError), tap(response => {
          // @ts-ignore
          if(response.success == 1){
            // @ts-ignore
            this.itemCategoryList.push(response.data);
            this.itemCategoryListSubject.next([...this.itemCategoryList]);
          }
        }));
  }

  deleteItemCategory(id){
    return this.http.get(this.BASE_API_URL + '/deleteItemCategory/' + id)
        .pipe(catchError(this.errorService.serverError), tap(response => {
          // @ts-ignore
          if(response.success == 1){
            // @ts-ignore
            const index = this.itemCategoryList.findIndex(x => x.id === response.data.id);
            this.itemCategoryList.splice(index,1);
            this.itemCategoryListSubject.next([...this.itemCategoryList]);
          }
        }));
  }

  updateItemCategory(data){
    return this.http.post(this.BASE_API_URL + '/updateItemCategory', data)
        .pipe(catchError(this.errorService.serverError), tap(response => {
          // @ts-ignore
          if(response.success == 1){
            // @ts-ignore
            const index = this.itemCategoryList.findIndex(x => x.id === response.data.id);
            // @ts-ignore
            this.itemCategoryList[index] = response.data;
            this.itemCategoryListSubject.next([...this.itemCategoryList]);
          }
        }));
  }

    saveItems(data){
        return this.http.post(this.BASE_API_URL + '/saveInventoryItems', data)
            .pipe(catchError(this.errorService.serverError), tap(response => {
                // @ts-ignore
                if(response.success == 1){
                    // @ts-ignore
                    this.itemList.push(response.data);
                    this.itemListSubject.next([...this.itemList]);
                }
            }));
    }

    updateItems(data){
        return this.http.post(this.BASE_API_URL + '/updateInventoryItems', data)
            .pipe(catchError(this.errorService.serverError), tap(response => {
                // @ts-ignore
                if(response.success == 1){
                    // @ts-ignore
                    const index = this.itemList.findIndex(x => x.id === response.data.id);
                    // @ts-ignore
                    this.itemList[index] = response.data;
                    this.itemListSubject.next([...this.itemList]);
                }
            }));
    }
    deleteItems(id){
        return this.http.get(this.BASE_API_URL + '/deleteInventoryItems/' + id)
            .pipe(catchError(this.errorService.serverError), tap(response => {
                // @ts-ignore
                if(response.success == 1){
                    // @ts-ignore
                    const index = this.itemList.findIndex(x => x.id === response.data.id);
                    this.itemList.splice(index,1);
                    this.itemListSubject.next([...this.itemList]);
                }
            }));
    }
}
