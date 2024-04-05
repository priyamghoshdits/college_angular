import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CreateStaffComponent} from "../human-resource/create-staff/create-staff.component";
import {SubjectDetailsComponent} from "./subject-details/subject-details.component";
import {SubjectQuestionsComponent} from "./subject-questions/subject-questions.component";
import {ExamComponent} from "./exam/exam.component";
import {MarksheetComponent} from "./marksheet/marksheet.component";
import {GenerateMarkSheetComponent} from "./generate-mark-sheet/generate-mark-sheet.component";

const routes: Routes = [
  {
    path: 'subject-details',
    component: SubjectDetailsComponent,
    data: {
      title: "Subject Details",
      breadcrumb: "Subject Details"
    }
  },
  {
    path: 'subject-questions',
    component: SubjectQuestionsComponent,
    data: {
      title: "Subject Questions",
      breadcrumb: "Subject Questions"
    }
  },
  {
    path: 'exam',
    component: ExamComponent,
    data: {
      title: "Exam",
      breadcrumb: "Exam"
    }
  },
  {
    path: 'marksheet',
    component: MarksheetComponent,
    data: {
      title: "Mark Sheet",
      breadcrumb: "Mark Sheet"
    }
  },
  {
    path: 'generate-mark-sheet',
    component: GenerateMarkSheetComponent,
    data: {
      title: "Generate Mark Sheet",
      breadcrumb: "Generate Mark Sheet"
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExaminationRoutingModule { }
