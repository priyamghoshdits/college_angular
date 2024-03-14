import { Component } from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import {NgForOf, NgIf} from "@angular/common";
import {NgxPaginationModule} from "ngx-pagination";
import {CallLogService} from "../../../services/call-log.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-call-log',
  standalone: true,
    imports: [
        FormsModule,
        MatIconModule,
        NgForOf,
        NgIf,
        NgxPaginationModule,
        ReactiveFormsModule
    ],
  templateUrl: './call-log.component.html',
  styleUrl: './call-log.component.scss'
})
export class CallLogComponent {
    callLogForm: FormGroup;
    isUpdatable = false;
    callLogList: any[] = [];
    p: number;
    constructor(private callLogService: CallLogService) {
        this.callLogForm = new FormGroup({
            id: new FormControl(null),
            name: new FormControl(null, [Validators.required]),
            phone: new FormControl(null, [Validators.required, Validators.pattern("[0-9 ]{10}")]),
            date: new FormControl(null, [Validators.required]),
            description: new FormControl(null),
            next_follow_up_date: new FormControl(null),
            call_duration: new FormControl(null, [Validators.required]),
            note: new FormControl(null),
        });

        this.callLogService.getCallLogListListener().subscribe((response) => {
            this.callLogList = response;
        });
        this.callLogList = this.callLogService.getCallLogList();
    }

    saveCallLog(){
        if(!this.callLogForm.valid){
            this.callLogForm.markAllAsTouched();
            return;
        }
        this.callLogService.saveCallLog(this.callLogForm.value).subscribe((response: any) => {
            if(response.success == 1){
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Call Log Saved',
                    showConfirmButton: false,
                    timer: 1000
                });
                this.callLogForm.reset();
            }
        })
    }

    updateCallLog(){
        if(!this.callLogForm.valid){
            this.callLogForm.markAllAsTouched();
            return;
        }
        this.callLogService.updateCallLog(this.callLogForm.value).subscribe((response: any) => {
            if(response.success == 1){
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Call Log Updated',
                    showConfirmButton: false,
                    timer: 1000
                });
                this.cancelUpdate();
            }
        })
    }

    cancelUpdate(){
        this.callLogForm.reset();
        this.isUpdatable = false;
    }

    deleteCallLog(data){
        Swal.fire({
            title: 'Confirmation',
            text: 'Do you sure to delete ?',
            icon: 'info',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete It!'
        }).then((result) => {
           if(result.isConfirmed){
               this.callLogService.deleteCallLog(data.id).subscribe((response: any) => {
                   if(response.success == 1){
                       Swal.fire({
                           position: 'center',
                           icon: 'success',
                           title: 'Call Log Deleted',
                           showConfirmButton: false,
                           timer: 1000
                       });
                   }
               })
           }
        });
    }

    editCallLog(data){
        this.callLogForm.patchValue(data);
        this.isUpdatable = true;
    }
}
