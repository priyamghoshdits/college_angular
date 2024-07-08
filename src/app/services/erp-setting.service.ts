import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ErpSettingService {
  public BASE_API_URL = environment.BASE_API_URL;

  erpdataList = [];
  erpDataSubject = new Subject<any>();

  constructor(private http: HttpClient) {

    this.http.get(this.BASE_API_URL + '/getErpSettings').subscribe((response: any) => {
      console.log(response);

      this.erpdataList = response.data;
      this.erpDataSubject.next(response.data);
    });

  }

  erpSettingListener() {
    return this.erpDataSubject.asObservable();
  }

  getErpSetting() {
    return this.erpdataList;
  }
}
