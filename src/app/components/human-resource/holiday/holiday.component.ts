import { Component } from '@angular/core';
import {SubjectService} from "../../../services/subject.service";
import {MatIconModule} from "@angular/material/icon";
import {NgForOf, NgIf} from "@angular/common";
import {NgxPaginationModule} from "ngx-pagination";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {HolidayService} from "../../../services/holiday.service";
import Swal from "sweetalert2";
import {RolesAndPermissionService} from "../../../services/roles-and-permission.service";

@Component({
  selector: 'app-holiday',
  standalone: true,
  imports: [
    MatIconModule,
    NgForOf,
    NgIf,
    NgxPaginationModule,
    ReactiveFormsModule
  ],
  templateUrl: './holiday.component.html',
  styleUrl: './holiday.component.scss'
})
export class HolidayComponent {
  holidayForm: FormGroup;
  holidayYearForm: FormGroup;
  holidaySearchForm: FormGroup;
  weekDays: any[];
  holidayList: any[];
  isUpdatable = false;
  rolesAndPermission: any[] = [];
  permission: any[] = [];
  constructor(private subjectService: SubjectService, private holidayService:HolidayService, private roleAndPermissionService: RolesAndPermissionService) {
    this.holidayForm = new FormGroup({
      id: new FormControl(null),
      date: new FormControl(null, [Validators.required]),
      description: new FormControl(null, [Validators.required]),
    });
    this.holidayYearForm = new FormGroup({
      id: new FormControl(null),
      description: new FormControl(null, [Validators.required]),
      week_name: new FormControl(null, [Validators.required]),
    });
    this.holidaySearchForm = new FormGroup({
      id: new FormControl(null),
      month_id: new FormControl(null, [Validators.required]),
    });

    this.subjectService.getWeekListener().subscribe((response) => {
      this.weekDays = response;
    });
    this.weekDays = this.subjectService.getWeekDays();

    this.roleAndPermissionService.getRolesAndPermissionListener().subscribe((response) => {
      this.rolesAndPermission = response;
      this.permission = this.rolesAndPermission.find(x => x.name == 'HOLIDAY').permission;
    });
    this.rolesAndPermission = this.roleAndPermissionService.getRolesAndPermission();
    if(this.rolesAndPermission.length > 0){
      this.permission = this.rolesAndPermission.find(x => x.name == 'HOLIDAY').permission;
    }
  }

  saveForWholeYear(){
    if(!this.holidayYearForm.valid){
      this.holidayYearForm.markAllAsTouched();
      return;
    }
    this.holidayService.saveHolidayForWholeYear(this.holidayYearForm.value).subscribe((response : any) => {
      if(response.success == 1){
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Holiday Saved',
          showConfirmButton: false,
          timer: 1000
        });
      }
      this.holidayYearForm.reset();
    });
  }

  saveHoliday(){
    if(!this.holidayForm.valid){
      this.holidayForm.markAllAsTouched();
      return;
    }
    this.holidayService.saveHoliday(this.holidayForm.value).subscribe((response: any) => {
      if(response.success == 1){
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Holiday Saved',
          showConfirmButton: false,
          timer: 1000
        });
        this.holidayForm.reset();
      }
    })
  }

  getHolidays(){
    if(!this.holidaySearchForm.valid){
      this.holidaySearchForm.markAllAsTouched();
      return;
    }
    this.holidayService.getHolidaysByMonth(this.holidaySearchForm.value.month_id).subscribe((response: any) => {
      this.holidayList = response.data;
    })
  }

  editHoliday(data){
    this.holidayForm.patchValue(data);
    this.isUpdatable = true;
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  cancelUpdate(){
    this.isUpdatable = false;
    this.holidayForm.reset();
    this.holidayYearForm.reset();
  }

  updateHoliday(){
    if(!this.holidayForm.valid){
      this.holidayForm.markAllAsTouched();
      return;
    }
    this.holidayService.updateHoliday(this.holidayForm.value).subscribe((response: any) => {
      if(response.success == 1){
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Holiday Updated',
          showConfirmButton: false,
          timer: 1000
        });
        this.cancelUpdate();
      }
    })
  }

  deleteHoliday(data){
    this.holidayService.deleteHoliday(data.id).subscribe((response: any) => {
      if(response.success == 1){
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Holiday Deleted',
          showConfirmButton: false,
          timer: 1000
        });
        this.getHolidays();
      }
    });
  }

}
