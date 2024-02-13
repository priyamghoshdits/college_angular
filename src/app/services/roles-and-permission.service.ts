import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ErrorService} from "./error.service";
import {environment} from "../../environments/environment";
import {Subject} from "rxjs";
import {catchError, tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class RolesAndPermissionService {
  private BASE_API_URL = environment.BASE_API_URL;
  rolesAndPermission = [];
  rolesAndPermissionAdmin = [];

  menuManagement = [];


  rolesAndPermissionSubject = new Subject<any[]>();
  rolesAndPermissionAdminSubject = new Subject<any[]>();

  getRolesAndPermissionListener(){
    return this.rolesAndPermissionSubject.asObservable();
  }
  getRolesAndPermissionAdminListener(){
    return this.rolesAndPermissionAdminSubject.asObservable();
  }

  menuManagementSubject = new Subject<any[]>();

  getMenuManagementListener(){
    return this.menuManagementSubject.asObservable();
  }

  constructor(private  http: HttpClient, private errorService: ErrorService) {
    this.http.get(this.BASE_API_URL + '/getRolesAndPermission').subscribe((response: any) =>{
      this.rolesAndPermission = response.data;
      this.rolesAndPermissionSubject.next([...this.rolesAndPermission]);
    });

    this.http.get(this.BASE_API_URL + '/getMenuForUpdate').subscribe((response: any) =>{
      this.menuManagement = response.data;
      this.menuManagementSubject.next([...this.menuManagement]);
    });

    this.http.get(this.BASE_API_URL + '/getRolesAndPermissionForUpdate').subscribe((response: any) =>{
      this.rolesAndPermissionAdmin = response.data;
      this.rolesAndPermissionAdminSubject.next([...this.rolesAndPermissionAdmin]);
    });

  }

  getRolesAndPermission(){
    return [...this.rolesAndPermission];
  }

  getRolesAndPermissionAdmin(){
    return [...this.rolesAndPermissionAdmin];
  }

  updateRoleAndPermissions(id){
    return this.http.get(this.BASE_API_URL + '/updateRoleAndPermissions/' + id)
        .pipe(catchError(this.errorService.serverError), tap(response => {
        }));
  }

  getMenuManagement(){
    return [...this.menuManagement];
  }

  updatePermissions(id){
    return this.http.get(this.BASE_API_URL + '/updateMenuManagement/' + id)
        .pipe(catchError(this.errorService.serverError), tap(response => {
        }));
  }

}
