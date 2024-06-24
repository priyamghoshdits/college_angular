import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, catchError, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root'
})
export class StaffDegreeService {
  private BASE_API_URL = environment.BASE_API_URL;

  degreeList = [];
  degreeSubject = new Subject<any[]>();

  getDegreeListListener() {
    return this.degreeSubject.asObservable();
  }

  constructor(private http: HttpClient, private errorService: ErrorService) {
    this.http.get(this.BASE_API_URL + '/getDegree').subscribe((response: any) => {
      this.degreeList = response.data;
      this.degreeSubject.next([...this.degreeList]);
    });
  }

  getDegreeList() {
    return [...this.degreeList];
  }

  saveDegree(data) {
    return this.http.post(this.BASE_API_URL + '/saveDegree', data)
      .pipe(catchError(this.errorService.serverError), tap(response => {
        // @ts-ignore
        if (response.success == 1) {
          // @ts-ignore
          this.degreeList.push(response.data);
          this.degreeSubject.next([...this.degreeList]);
        }
      }));
  }

  updateDegree(data) {
    return this.http.post(this.BASE_API_URL + '/updateDegree', data)
      .pipe(catchError(this.errorService.serverError), tap(response => {
        // @ts-ignore
        if (response.success == 1) {
          // @ts-ignore
          const index = this.degreeList.findIndex(x => x.id === response.data.id);
          // @ts-ignore
          this.degreeList[index] = response.data;
          this.degreeSubject.next([...this.degreeList]);
        }
      }));
  }

  deleteDegree(data) {
    return this.http.get(this.BASE_API_URL + '/deleteDegree/' + data.id, data)
      .pipe(catchError(this.errorService.serverError), tap(response => {
        // @ts-ignore
        if (response.success == 1) {
          // @ts-ignore
          const index = this.degreeList.findIndex(x => x.id === response.data.id);
          // @ts-ignore
          this.degreeList.splice(index, 1);
          this.degreeSubject.next([...this.degreeList]);
        }
      }));
  }
}
