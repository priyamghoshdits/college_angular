import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {ErrorService} from "./error.service";
import {catchError, tap} from "rxjs/operators";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class CautionMoneyService {
  private BASE_API_URL = environment.BASE_API_URL;
  certificateTypeForm: FormGroup;
  studentList = [];
  constructor(private  http: HttpClient, private errorService: ErrorService) {
    this.certificateTypeForm = new FormGroup({
      id: new FormControl(null),
      course_id: new FormControl(null, [Validators.required]),
      semester_id: new FormControl(null, [Validators.required]),
      session_id: new FormControl(null, [Validators.required]),
    });
  }

  getStudentsForCautionMoney(data){
    return this.http.post(this.BASE_API_URL + '/getStudentsForCautionMoney', data)
        .pipe(catchError(this.errorService.serverError), tap(response => {
        }));
  }

  refundCautionMoney(data){
    return this.http.post(this.BASE_API_URL + '/refundCationMoney', data)
        .pipe(catchError(this.errorService.serverError), tap(response => {
        }));
  }

  revertRefundCautionMoney(user_id){
    return this.http.get(this.BASE_API_URL + '/revertCautionMoney/'+ user_id)
        .pipe(catchError(this.errorService.serverError), tap(response => {
        }));
  }


}
