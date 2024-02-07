import { Component } from '@angular/core';
import {ExaminationService} from "../../../services/examination.service";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {DatePipe, formatDate, NgForOf, NgIf} from "@angular/common";
import {NgxPaginationModule} from "ngx-pagination";
import Swal from "sweetalert2";
import {NgbModal, NgbTooltip} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-exam',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf,
    NgxPaginationModule,
    ReactiveFormsModule,
    NgIf,
    NgbTooltip,
    DatePipe
  ],
  providers: [
    DatePipe, // Include DatePipe here
  ],
  templateUrl: './exam.component.html',
  styleUrl: './exam.component.scss'
})
export class ExamComponent {
  questionList: any[];
  tempQuestion: any[];
  testStarted = false;
  showAnsSheet: any[];
  totalMarsOfQuestions = 0;
  todayDate = String;
  pipe = new DatePipe('en-US');
  today : Date;
  constructor(private examinationService: ExaminationService, private modalService: NgbModal, private datePipe: DatePipe) {
    // @ts-ignore
    this.todayDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd');

    this.examinationService.getQuestionListListener().subscribe((response) => {
      this.questionList = response;
      this.questionList.forEach(function (value){
        let temp = 0;
        value.questions.forEach(function (item){
          temp = temp + item.marks;
        })
        value.totalQuestionMarks = temp;
      })
    });
    this.questionList = this.examinationService.getQuestionListList();
    this.questionList.forEach(function (value){
      let temp = 0;
      value.questions.forEach(function (item){
        temp = temp + item.marks;
      });
      value.totalQuestionMarks = temp;
    });

    // setInterval(() => {
    //   const d = new Date();
    //   let hour = d.getHours();
    //   console.log(hour);
    //   // console.log(formatDate(today, 'HH:MM:SS', 'en-US', '+0530'));
    // }, 1000);
  }

  compareTime(start_time, end_time){
    const d = new Date();
    const today_time_in_sec = (d.getHours()*3600) + (d.getMinutes()*60) + d.getSeconds();

    const start_time_hour = parseInt(start_time.split(':')[0]);
    const start_time_min = parseInt(start_time.split(':')[1]);
    const start_time_sec = parseInt(start_time.split(':')[2]);
    const start_time_total_sec = ((start_time_hour*3600) + (start_time_min*60) + start_time_sec);
    const start_time_calculate = today_time_in_sec - start_time_total_sec;

    const end_time_hour = parseInt(end_time.split(':')[0]);
    const end_time_min = parseInt(end_time.split(':')[1]);
    const end_time_sec = parseInt(end_time.split(':')[2]);
    const end_time_total_sec = ((end_time_hour*3600) + (end_time_min*60) + end_time_sec);
    const end_time_calculate = today_time_in_sec - end_time_total_sec;

    if((start_time_calculate >= 0) && (end_time_calculate <= 0)){
      console.log('true');
      return true;
    }else{
      console.log('false');
      return false;
    }
  }

  startTest(data){

    Swal.fire({
      title: 'Confirmation',
      text: 'Do you sure to start ?',
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: "Yes, Let's Start!",
      cancelButtonText: "No, Please Wait!"
    }).then((result) => {
      if(result.isConfirmed){
        this.tempQuestion = data.questions;
        this.testStarted = true;
      }
    });
  }

  showAnswerSheet(data){
    this.showAnsSheet = data.questions;
  }

  saveAnswerSheet(){
    let flag = 0;
    this.tempQuestion.forEach(function (value){
      console.log(value.student_answer);
      if (!value.student_answer){
        flag = 1;
      }
      if(parseInt(value.student_answer) != value.answer){
        value.marks = 0;
      }
    });

    if(flag == 1){
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Please ans all questions',
        showConfirmButton: false,
        timer: 1000
      });
      return;
    }

    Swal.fire({
      title: 'Confirmation',
      text: 'Do you want to submit ?',
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: "Yes, Submit!",
      cancelButtonText: "No, Please Wait!"
    }).then((result) => {
      if(result.isConfirmed){
        Swal.fire({
          title: "Alert!",
          html: "Answer sheet will submit and auto redirect please wait do not press anything!",
          timer: 3000,
          timerProgressBar: true,
          didOpen: () => {
            Swal.showLoading();
          },
        }).then((result) => {
            this.examinationService.saveAnswerSheet(this.tempQuestion).subscribe((response) => {
              // @ts-ignore
              if(response.success == 1){
                Swal.fire({
                  position: 'center',
                  icon: 'success',
                  title: 'Answer Sheet Submitted',
                  showConfirmButton: false,
                  timer: 1000
                });
                window.location.reload();
              }else{
                Swal.fire({
                  position: 'center',
                  icon: 'error',
                  title: 'Please attend all questions',
                  showConfirmButton: false,
                  timer: 1000
                });
              }
            })
        });
      }
    });
  }

  openCustomModal(content) {
    this.modalService.open(content,{ size: 'xl'});
  }

  compareDates(temp): number {
    const today = new Date();
    const reqDate = new Date(temp);
    if((reqDate.getDate() == today.getDate()) && (reqDate.getMonth() == today.getMonth()) && (reqDate.getFullYear() == today.getFullYear())){
      return 0; // today
    }else if((reqDate.getFullYear() < today.getFullYear())){
      return 1; //previous year
    }else if((reqDate.getMonth() < today.getMonth())){
      if((reqDate.getFullYear() > today.getFullYear())){
        return 2; // next day
      }else{
        return 1; //previous month in same year
      }
    }else if(reqDate.getDate() < today.getDate()){
      if((reqDate.getFullYear() > today.getFullYear())){
        return 2; // next day
      }else if((reqDate.getMonth() > today.getMonth())){
        return 2;// next day
      }else{
        return 1; //previous day
      }
    }else if((reqDate.getDate() > today.getDate()) && (reqDate.getMonth() == today.getMonth()) && (reqDate.getFullYear() == today.getFullYear())){
      return 2;
    }else{
      return 5;
    }
  }


}
