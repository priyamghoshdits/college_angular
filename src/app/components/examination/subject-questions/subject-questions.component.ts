import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {ExaminationService} from "../../../services/examination.service";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatIcon, MatIconModule} from "@angular/material/icon";
import {JsonPipe, NgForOf, NgIf} from "@angular/common";
import {NgxPaginationModule} from "ngx-pagination";
import Swal from "sweetalert2";
import {NgbNav, NgbNavItem, NgbNavLink, NgbNavLinkBase, NgbNavOutlet} from "@ng-bootstrap/ng-bootstrap";
import {RolesAndPermissionService} from "../../../services/roles-and-permission.service";

interface QuestionAnswer {
  question: string;
  // You can add more fields for the answer or any other information related to the question
}

@Component({
  selector: 'app-subject-questions',
  standalone: true,
  imports: [
    FormsModule,
    MatIconModule,
    NgForOf,
    NgxPaginationModule,
    ReactiveFormsModule,
    NgIf,
    NgbNav,
    NgbNavLink,
    NgbNavLinkBase,
    NgbNavItem,
    NgbNavOutlet,
    JsonPipe
  ],
  templateUrl: './subject-questions.component.html',
  styleUrl: './subject-questions.component.scss'
})

export class SubjectQuestionsComponent {
  questionForm: FormGroup;
  questionList: any[];
  subjectDetailsList: any[];
  selected_details = null;
  total_question :any[] = [1];
  totalMarks = 0;
  questionAnswers: any[]= [];
  isUpdatable = false;
  counter = 0;
  active = 1;
  p:number;
  rolesAndPermission: any[] = [];
  permission: any[] = [];
  constructor(private examinationService:ExaminationService, private roleAndPermissionService: RolesAndPermissionService) {
    this.questionAnswers = [
        {
          'question': null,
          'option_1': null,
          'option_2': null,
          'option_3': null,
          'option_4': null,
          'marks': null,
          'answer': null
        }
    ];
    this.questionForm = new FormGroup({
      id: new FormControl(null),
      subject_details_id: new FormControl(null, [Validators.required]),
      course_name: new FormControl({value: null, disabled: true}, [Validators.required]),
      semester_name: new FormControl({value: null, disabled: true}, [Validators.required]),
      session_name: new FormControl({value: null, disabled: true}, [Validators.required]),
      subject_name: new FormControl({value: null, disabled: true}, [Validators.required]),
      full_marks: new FormControl({value: null, disabled: true}, [Validators.required]),
      total_questions: new FormControl(1, [Validators.required]),
      time_from: new FormControl(null, [Validators.required]),
      time_to: new FormControl(null, [Validators.required]),
      question: new FormControl(null),
      option1: new FormControl(null),
      option2: new FormControl(null),
      option3: new FormControl(null),
      option4: new FormControl(null),
    });
    this.examinationService.getSubjectDetailsListListener().subscribe((response) => {
      this.subjectDetailsList = response;
    });
    this.subjectDetailsList = this.examinationService.getSubjectDetailsList();

    this.examinationService.getQuestionListListener().subscribe((response) => {
      this.questionList = response;
      console.log(this.questionList);
    });
    this.questionList = this.examinationService.getQuestionListList();

    this.roleAndPermissionService.getRolesAndPermissionListener().subscribe((response) => {
      this.rolesAndPermission = response;
      this.permission = this.rolesAndPermission.find(x => x.name == 'SUBJECT QUESTION').permission;
    });
    this.rolesAndPermission = this.roleAndPermissionService.getRolesAndPermission();
    if(this.rolesAndPermission.length > 0){
      this.permission = this.rolesAndPermission.find(x => x.name == 'SUBJECT QUESTION').permission;
    }
  }

  selectDetails(){
    let x = this.subjectDetailsList.find(x => x.id == this.questionForm.value.subject_details_id);
    this.selected_details = x;
    this.questionForm.patchValue(x);
  }

  cancelUpdate(){
    this.isUpdatable = false;
    this.total_question = [1];
    this.totalMarks = 0;
    this.questionAnswers = [
      {
        'question': null,
        'option_1': null,
        'option_2': null,
        'option_3': null,
        'option_4': null,
        'marks': null,
        'answer': null
      }
    ];
    this.counter = 0;
    this.questionForm.reset();
  }

  updateQuestionPaper(){
    let arr = [
      {
        'subject_details_id': this.questionForm.value.subject_details_id,
        'questions': this.questionAnswers
      }
    ];
    this.examinationService.updateQuestions(arr[0]).subscribe((response: any) => {
      if(response.success == 1){
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Question paper updated',
          showConfirmButton: false,
          timer: 1000
        });
        this.cancelUpdate();
      }
    })
  }

  deleteQuestionPaper(data){
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
        this.examinationService.deleteQuestions(data).subscribe((response: any) => {
          if(response.success == 1){
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Successfully deleted',
              showConfirmButton: false,
              timer: 1000
            });
          }
        })
      }
    });

  }

  editQuestionPaper(data){
    this.questionAnswers = data.questions;
    this.total_question[data.questions.length -1] = [];
    this.active = 1;
    this.totalMarks = this.questionAnswers.reduce((accumulator, currentItem) => accumulator + parseInt(currentItem.marks), 0);
    let x = this.subjectDetailsList.find(x => x.id == data.subject_details_id);
    this.selected_details = x;
    this.questionForm.patchValue(x);
    this.questionForm.patchValue({subject_details_id: data.subject_details_id});
    this.isUpdatable = true;
    this.counter = data.questions.length -1;
  }

  saveQuestions(){
    // @ts-ignore
    if(this.totalMarks >= this.selected_details.full_marks){
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Marks crossing full marks',
        showConfirmButton: false,
        timer: 1000
      });
      return;
    }
    let arr = [
      {
        'subject_details_id': this.questionForm.value.subject_details_id,
        'questions': this.questionAnswers
      }
    ];

    this.examinationService.saveQuestions(arr[0]).subscribe((response) => {
      // @ts-ignore
      if(response.success == 1){
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Question Paper Saved',
          showConfirmButton: false,
          timer: 1000
        });
        this.total_question = [1];
        this.totalMarks = 0;
        this.questionAnswers = [
          {
            'question': null,
            'option_1': null,
            'option_2': null,
            'option_3': null,
            'option_4': null,
            'marks': null,
            'answer': null
          }
        ];
        this.counter = 0;
        this.questionForm.reset();
      }
    })
  }

  activeTab(data){
    this.active = data;
  }

  updateMarks(){
      this.totalMarks = this.questionAnswers.reduce((accumulator, currentItem) => accumulator + parseInt(currentItem.marks), 0);
    // @ts-ignore
    if(this.totalMarks > this.selected_details.full_marks){
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Marks crossing full marks',
        showConfirmButton: false,
        timer: 1000
      });
      // @ts-ignore
      this.questionAnswers[this.questionAnswers.length-1].marks = 0;
      this.totalMarks = this.questionAnswers.reduce((accumulator, currentItem) => accumulator + parseInt(currentItem.marks), 0);
      return;
    }
  }

  addField(){
    if(!this.selected_details){
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Please select subject',
        showConfirmButton: false,
        timer: 1000
      });
      return;
    }
    // @ts-ignore
    if(this.totalMarks >= this.selected_details.full_marks){
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Marks crossing full marks',
        showConfirmButton: false,
        timer: 1000
      });
      return;
    }

    for (let i = 0; i < this.questionAnswers.length; i++) {
      if(this.questionAnswers[i].question == null){
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Enter the question',
          showConfirmButton: false,
          timer: 1000
        });
        return;
      }
    }
    this.counter = this.counter + 1;
    this.total_question[this.counter] = [];
    let arr = [
      {
        'question': null,
        'option_1': null,
        'option_2': null,
        'option_3': null,
        'option_4': null,
        'marks': null,
        'answer': null
      }
    ];
    this.questionAnswers.push(arr[0]);
  }

  updateStatus(id){
    this.examinationService.updateSubjectStatus(id).subscribe((response) => {

    })
  }

}
