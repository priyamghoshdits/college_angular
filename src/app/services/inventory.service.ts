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
  itemSupplier = [];
  itemStoreList = [];
  itemStockList = [];
  issueItemList = [];

  itemListSubject = new Subject<any[]>();
  itemCategoryListSubject = new Subject<any[]>();
  itemSupplierListSubject = new Subject<any[]>();
  itemStoreListSubject = new Subject<any[]>();
  itemStockListSubject = new Subject<any[]>();
  issueItemListSubject = new Subject<any[]>();

    getIssueItemListListener(){
        return this.issueItemListSubject.asObservable();
    }

  getItemStoreListListener(){
    return this.itemStoreListSubject.asObservable();
  }

    getItemCategoryListListener(){
        return this.itemCategoryListSubject.asObservable();
    }

  getItemSupplierListListener(){
      return this.itemSupplierListSubject.asObservable();
  }

  getItemListListener(){
      return this.itemListSubject.asObservable();
  }

    getItemStockListener(){
        return this.itemStockListSubject.asObservable();
    }


  constructor(private  http: HttpClient, private errorService: ErrorService) {
    this.http.get(this.BASE_API_URL + '/getItemCategory').subscribe((response: any) =>{
      this.itemCategoryList = response.data;
      this.itemCategoryListSubject.next([...this.itemCategoryList]);
    });
      this.http.get(this.BASE_API_URL + '/getIssueItem').subscribe((response: any) =>{
          this.issueItemList = response.data;
          this.issueItemListSubject.next([...this.issueItemList]);
      });
      this.http.get(this.BASE_API_URL + '/getInventoryItems').subscribe((response: any) =>{
          this.itemList = response.data;
          this.itemListSubject.next([...this.itemList]);
      });

      this.http.get(this.BASE_API_URL + '/getItemStock').subscribe((response: any) =>{
          this.itemStockList = response.data;
          this.itemStockListSubject.next([...this.itemStockList]);
      });

      this.http.get(this.BASE_API_URL + '/getItemSupplier').subscribe((response: any) =>{
          this.itemSupplier = response.data;
          this.itemSupplierListSubject.next([...this.itemSupplier]);
      });

      this.http.get(this.BASE_API_URL + '/getItemStore').subscribe((response: any) =>{
          this.itemStoreList = response.data;
          this.itemStoreListSubject.next([...this.itemStoreList]);
      });

  }

  getIssueItem(){
      return [...this.issueItemList];
  }

    getItemStoreList(){
        return [...this.itemStoreList];
    }

    getItemStockList(){
        return [...this.itemStockList];
    }

  getItemSupplier(){
      return [...this.itemSupplier];
  }

  getItemCategory(){
    return [...this.itemCategoryList];
  }

  getItem(){
      return [...this.itemList];
  }

    saveItemSupplier(data){
        return this.http.post(this.BASE_API_URL + '/saveItemSupplier', data)
            .pipe(catchError(this.errorService.serverError), tap(response => {
                // @ts-ignore
                if(response.success == 1){
                    // @ts-ignore
                    this.itemSupplier.push(response.data);
                    this.itemSupplierListSubject.next([...this.itemSupplier]);
                }
            }));
    }

    saveIssueItem(data){
        return this.http.post(this.BASE_API_URL + '/saveIssueItem', data)
            .pipe(catchError(this.errorService.serverError), tap(response => {
                // @ts-ignore
                if(response.success == 1){
                    // @ts-ignore
                    this.issueItemList.push(response.data);
                    this.issueItemListSubject.next([...this.issueItemList]);
                }
            }));
    }

    updateStatus(id){
        return this.http.get(this.BASE_API_URL + '/updateStatusInventoryIssue/' + id)
            .pipe(catchError(this.errorService.serverError), tap(response => {
                // @ts-ignore
                if(response.success == 1){
                    // @ts-ignore
                    const index = this.issueItemList.findIndex(x => x.id === response.data.id);
                    // @ts-ignore
                    this.issueItemList[index] = response.data;
                    this.issueItemListSubject.next([...this.issueItemList]);
                }
            }));
    }

    deleteIssueItem(id){
        return this.http.get(this.BASE_API_URL + '/deleteIssueItem/' + id)
            .pipe(catchError(this.errorService.serverError), tap(response => {
                // @ts-ignore
                if(response.success == 1){
                    // @ts-ignore
                    const index = this.issueItemList.findIndex(x => x.id === response.data.id);
                    // @ts-ignore
                    this.issueItemList.splice(index,1);
                    this.issueItemListSubject.next([...this.issueItemList]);
                }
            }));
    }

    getQuantityByInventoryTypeId(inventory_type_id){
        return this.http.get(this.BASE_API_URL + '/getQuantityByItemId/' + inventory_type_id)
            .pipe(catchError(this.errorService.serverError), tap(response => {
            }));
    }

    saveItemStore(data){
        return this.http.post(this.BASE_API_URL + '/saveItemStore', data)
            .pipe(catchError(this.errorService.serverError), tap(response => {
                // @ts-ignore
                if(response.success == 1){
                    // @ts-ignore
                    this.itemStoreList.push(response.data);
                    this.itemStoreListSubject.next([...this.itemStoreList]);
                }
            }));
    }

    saveItemStock(data){
        return this.http.post(this.BASE_API_URL + '/saveItemStock', data)
            .pipe(catchError(this.errorService.serverError), tap(response => {
                // @ts-ignore
                if(response.success == 1){
                    // @ts-ignore
                    this.itemStockList.push(response.data);
                    this.itemStockListSubject.next([...this.itemStockList]);
                }
            }));
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

    updateItemSupplier(data){
        return this.http.post(this.BASE_API_URL + '/updateItemSupplier', data)
            .pipe(catchError(this.errorService.serverError), tap(response => {
                // @ts-ignore
                if(response.success == 1){
                    // @ts-ignore
                    const index = this.itemSupplier.findIndex(x => x.id === response.data.id);
                    // @ts-ignore
                    this.itemSupplier[index] = response.data;
                    this.itemSupplierListSubject.next([...this.itemSupplier]);
                }
            }));
    }

    updateItemStore(data){
        return this.http.post(this.BASE_API_URL + '/updateItemStore', data)
            .pipe(catchError(this.errorService.serverError), tap(response => {
                // @ts-ignore
                if(response.success == 1){
                    // @ts-ignore
                    const index = this.itemStoreList.findIndex(x => x.id === response.data.id);
                    // @ts-ignore
                    this.itemStoreList[index] = response.data;
                    this.itemStoreListSubject.next([...this.itemStoreList]);
                }
            }));
    }

    updateItemStock(data){
        return this.http.post(this.BASE_API_URL + '/updateItemStock', data)
            .pipe(catchError(this.errorService.serverError), tap(response => {
                // @ts-ignore
                if(response.success == 1){
                    // @ts-ignore
                    const index = this.itemStockList.findIndex(x => x.id === response.data.id);
                    // @ts-ignore
                    this.itemStockList[index] = response.data;
                    this.itemStockListSubject.next([...this.itemStockList]);
                }
            }));
    }

    deleteItemStock(id){
        return this.http.get(this.BASE_API_URL + '/deleteItemStock/' + id)
            .pipe(catchError(this.errorService.serverError), tap(response => {
                // @ts-ignore
                if(response.success == 1){
                    // @ts-ignore
                    const index = this.itemStockList.findIndex(x => x.id === response.data.id);
                    this.itemStockList.splice(index,1);
                    this.itemStockListSubject.next([...this.itemStockList]);
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

    getItemListByItemCategory(category_id){
        return this.http.get(this.BASE_API_URL + '/getInventoryItemsByCategory/'+ category_id)
            .pipe(catchError(this.errorService.serverError), tap(response => {
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

    deleteItemSupplier(id){
        return this.http.get(this.BASE_API_URL + '/deleteItemSupplier/' + id)
            .pipe(catchError(this.errorService.serverError), tap(response => {
                // @ts-ignore
                if(response.success == 1){
                    // @ts-ignore
                    const index = this.itemSupplier.findIndex(x => x.id === response.data.id);
                    this.itemSupplier.splice(index,1);
                    this.itemSupplierListSubject.next([...this.itemSupplier]);
                }
            }));
    }

    deleteItemStore(id){
        return this.http.get(this.BASE_API_URL + '/deleteItemStore/' + id)
            .pipe(catchError(this.errorService.serverError), tap(response => {
                // @ts-ignore
                if(response.success == 1){
                    // @ts-ignore
                    const index = this.itemStoreList.findIndex(x => x.id === response.data.id);
                    this.itemStoreList.splice(index,1);
                    this.itemStoreListSubject.next([...this.itemStoreList]);
                }
            }));
    }
}
