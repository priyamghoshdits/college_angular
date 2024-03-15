import { Component } from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import {NgForOf, NgIf} from "@angular/common";
import {NgxPaginationModule} from "ngx-pagination";
import {SubjectService} from "../../../services/subject.service";
import {SessionService} from "../../../services/session.service";
import {CautionMoneyService} from "../../../services/caution-money.service";
import {CustomFilterPipe} from "../../../../../custom-filter.pipe";
import {NgbModal, NgbTooltip} from "@ng-bootstrap/ng-bootstrap";
import Swal from "sweetalert2";

@Component({
  selector: 'app-caution-money',
  standalone: true,
  imports: [
    FormsModule,
    MatIconModule,
    NgForOf,
    NgIf,
    NgxPaginationModule,
    ReactiveFormsModule,
    CustomFilterPipe,
    NgbTooltip
  ],
  templateUrl: './caution-money.component.html',
  styleUrl: './caution-money.component.scss'
})
export class CautionMoneyComponent {
  cautionMoneyForm: FormGroup;
  cautionMoneyRefundForm: FormGroup;
  courseList: any[];
  semesterList: any[];
  sessionList: any[];
  studentList: any[] = [];
  searchItem: string;
  constructor(private subjectService: SubjectService, private sessionService: SessionService
              ,private cautionMoneyService: CautionMoneyService, private modalService: NgbModal) {
    this.cautionMoneyForm = new FormGroup({
      id: new FormControl(null),
      course_id: new FormControl(null, [Validators.required]),
      semester_id: new FormControl(null, [Validators.required]),
      session_id: new FormControl(null, [Validators.required]),
    });

    this.cautionMoneyRefundForm = new FormGroup({
      id: new FormControl(null),
      user_id: new FormControl(null),
      refund_payment_date: new FormControl(null, [Validators.required]),
      refund_mode_of_payment: new FormControl(null, [Validators.required]),
      refund_transaction_id: new FormControl(null, [Validators.required]),
      caution_money_deduction: new FormControl(null, [Validators.required]),
    });

    this.subjectService.getCourseListener().subscribe((response) => {
      this.courseList = response;
    });
    this.courseList = this.subjectService.getCourses();

    this.sessionService.getSessionListener().subscribe((response) => {
      this.sessionList = response;
    });
    this.sessionList = this.sessionService.getSessionList();
  }

  getSemester(){
    this.subjectService.getSemesterByCourseId(this.cautionMoneyForm.value.course_id).subscribe((response: any) => {
      this.semesterList = response.data;
    })
  }

  openCustomModal(content,record) {
    this.modalService.open(content,{ size: 'xl'});
    this.cautionMoneyRefundForm.patchValue({user_id: record.id});
  }

  getCautionMoney(){
    this.cautionMoneyService.getStudentsForCautionMoney(this.cautionMoneyForm.value).subscribe((response: any) => {
      if(response.success == 1){
        this.studentList = response.data;
      }
    })
  }

  refundCaution(modal){
    this.cautionMoneyService.refundCautionMoney(this.cautionMoneyRefundForm.value).subscribe((response: any) => {
      if(response.success == 1){
        this.getCautionMoney();
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Refunded Successfully',
          showConfirmButton: false,
          timer: 1000
        });
        modal.close();
      }
    })
  }

  revertCautionMoneyPayment(data){
    Swal.fire({
      title: 'Confirmation',
      text: 'Confirm Revert ?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Revert!'
    }).then((result) => {
      if(result.isConfirmed){
        this.cautionMoneyService.revertRefundCautionMoney(data.id).subscribe((response: any) => {
          if(response.success == 1){
            this.getCautionMoney();
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Reverted Successfully',
              showConfirmButton: false,
              timer: 1000
            });
          }
        })
      }
    });

  }

}
