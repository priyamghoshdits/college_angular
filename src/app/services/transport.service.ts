import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {ErrorService} from "./error.service";
import {Subject} from "rxjs";
import {catchError, tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class TransportService {
  private BASE_API_URL = environment.BASE_API_URL;
  routesList = [];
  vehicleList = [];

  routesListSubject = new Subject<any[]>();
  vehicleListSubject = new Subject<any[]>();

  getRoutesListListener(){
    return this.routesListSubject.asObservable();
  }

  getVehicleListListener(){
      return this.vehicleListSubject.asObservable();
  }

  constructor(private  http: HttpClient, private errorService: ErrorService) {
    this.http.get(this.BASE_API_URL + '/getRoutes').subscribe((response: any) =>{
      this.routesList = response.data;
      this.routesListSubject.next([...this.routesList]);
    });

      this.http.get(this.BASE_API_URL + '/getVehicle').subscribe((response: any) =>{
          this.vehicleList = response.data;
          this.vehicleListSubject.next([...this.vehicleList]);
      });
  }

  getRouteList(){
    return [...this.routesList];
  }

    getVehicleList(){
        return [...this.vehicleList];
    }

    savVehicle(data){
        return this.http.post(this.BASE_API_URL + '/saveVehicle', data)
            .pipe(catchError(this.errorService.serverError), tap(response => {
                // @ts-ignore
                if(response.success == 1){
                    // @ts-ignore
                    this.vehicleList.push(response.data);
                    this.vehicleListSubject.next([...this.vehicleList]);
                }
            }));
    }

    updateVehicle(value){
        return this.http.post(this.BASE_API_URL + '/updateVehicle', value)
            .pipe(catchError(this.errorService.serverError), tap(response => {
                // @ts-ignore
                if(response.success == 1){
                    // @ts-ignore
                    const index = this.vehicleList.findIndex(x => x.id === response.data.id);
                    // @ts-ignore
                    this.vehicleList[index] = response.data;
                    this.vehicleListSubject.next([...this.vehicleList]);
                }
            }));
    }

    deleteVehicle(id){
        return this.http.get(this.BASE_API_URL + '/deleteVehicle/' + id)
            .pipe(catchError(this.errorService.serverError), tap(response => {
                // @ts-ignore
                if(response.success == 1){
                    // @ts-ignore
                    const index = this.vehicleList.findIndex(x => x.course_id === response.data.course_id);
                    this.vehicleList.splice(index,1);
                    this.vehicleListSubject.next([...this.vehicleList]);
                }
            }));
    }

  saveRoute(data){
    return this.http.post(this.BASE_API_URL + '/saveRoutes', data)
        .pipe(catchError(this.errorService.serverError), tap(response => {
          // @ts-ignore
          if(response.success == 1){
            // @ts-ignore
            this.routesList.push(response.data);
            this.routesListSubject.next([...this.routesList]);
          }
        }));
  }

  updateRoute(value){
    return this.http.post(this.BASE_API_URL + '/updateRoutes', value)
        .pipe(catchError(this.errorService.serverError), tap(response => {
          // @ts-ignore
          if(response.success == 1){
            // @ts-ignore
            const index = this.routesList.findIndex(x => x.id === response.data.id);
            // @ts-ignore
            this.routesList[index] = response.data;
            this.routesListSubject.next([...this.routesList]);
          }
        }));
  }

  deleteRoute(id){
    return this.http.get(this.BASE_API_URL + '/deleteRoutes/' + id)
        .pipe(catchError(this.errorService.serverError), tap(response => {
          // @ts-ignore
          if(response.success == 1){
            // @ts-ignore
            const index = this.routesList.findIndex(x => x.course_id === response.data.course_id);
            this.routesList.splice(index,1);
            this.routesListSubject.next([...this.routesList]);
          }
        }));
  }

}
