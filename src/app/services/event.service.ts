import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Subject, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private BASE_API_URL = environment.BASE_API_URL;
  eventList: any[] = [];

  eventListSubject = new Subject<any[]>();

  constructor(private http: HttpClient, private errorService: ErrorService) {
    this.http.get(this.BASE_API_URL + '/getEvent').subscribe((data: any) => {
      this.eventList = data.data;
      this.eventListSubject.next([...this.eventList]);
    });
  }

  getEvent() {
    return [...this.eventList];
  }

  getEventListener() {
    return this.eventListSubject.asObservable();
  }

  saveEvent(data) {
    return this.http.post(this.BASE_API_URL + '/saveEvent', data).pipe(catchError(this.errorService.serverError), tap((response: any) => {
      if (response.success === 1) {
        this.eventList = [response.data, ...this.eventList]
        this.eventListSubject.next([...this.eventList]);
      }
    }));
  }

  updateEvent(data) {
    return this.http.post(this.BASE_API_URL + '/updateEvent', data).pipe(catchError(this.errorService.serverError), tap((response: any) => {
      if (response.success === 1) {
        const index = this.eventList.findIndex(x => x.id === response.data.id);
        this.eventList[index] = response.data;
        this.eventListSubject.next([...this.eventList]);
      }
    }));
  }

  deleteEvent(id) {
    return this.http.get(this.BASE_API_URL + `/deleteEvent/${id}`).pipe(catchError(this.errorService.serverError), tap((response: any) => {
      if (response.success === 1) {
        const index = this.eventList.findIndex(x => x.id === response.data.id);
        this.eventList.splice(index, 1);
        this.eventListSubject.next([...this.eventList]);
      }
    }));
  }

}
