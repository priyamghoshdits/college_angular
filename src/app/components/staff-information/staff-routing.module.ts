import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ConsultancyComponent} from "./consultancy/consultancy.component";
import {JournalPublicationComponent} from "./journal-publication/journal-publication.component";
import {StaffExperienceComponent} from "./staff-experience/staff-experience.component";
import {PromotionComponent} from "./promotion/promotion.component";
import {BookPublicationComponent} from "./book-publication/book-publication.component";
import {UniversitySynopsisComponent} from "./university-synopsis/university-synopsis.component";
import {StaffDegreeComponent} from "./staff-degree/staff-degree.component";
import {StaffEducationComponent} from "./staff-education/staff-education.component";
import {PgPhdGuideComponent} from "./pg-phd-guide/pg-phd-guide.component";
import {PaperSetterComponent} from "./paper-setter/paper-setter.component";
import {AnswerScriptComponent} from "./answer-script/answer-script.component";
import {SeminarWorkshopFacultyComponent} from "./seminar-workshop-faculty/seminar-workshop-faculty.component";
import {ExaminerComponent} from "./examiner/examiner.component";

const routes: Routes = [
  {
    path: 'sponsored-or-consultancy',
    component: ConsultancyComponent,
    data: {
      title: "Sponsored Project/Consultancy",
      breadcrumb: "Sponsored Project/Consultancy"
    }
  },
  {
    path: 'journal-publication',
    component: JournalPublicationComponent,
    data: {
      title: "Journal Publication",
      breadcrumb: "Journal Publication"
    }
  },
  {
    path: 'staff-experience',
    component: StaffExperienceComponent,
    data: {
      title: "Staff Experience",
      breadcrumb: "Staff Experience"
    }
  },
  {
    path: 'promotion',
    component: PromotionComponent,
    data: {
      title: "Promotion",
      breadcrumb: "Promotion"
    }
  },
  {
    path: 'book-publication',
    component: BookPublicationComponent,
    data: {
      title: "Book Publication",
      breadcrumb: "Book Publication"
    }
  },
  {
    path: 'university-synopsis',
    component: UniversitySynopsisComponent,
    data: {
      title: "University Synopsis",
      breadcrumb: "University Synopsis"
    }
  },
  {
    path: 'degree',
    component: StaffDegreeComponent,
    data: {
      title: "Degree",
      breadcrumb: "Degree"
    }
  },
  {
    path: 'staff-education',
    component: StaffEducationComponent,
    data: {
      title: "Staff Education",
      breadcrumb: "Staff Education"
    }
  },
  {
    path: 'pg-phd-guide',
    component: PgPhdGuideComponent,
    data: {
      title: "Pg Phd Guide",
      breadcrumb: "Pg Phd Guide"
    }
  },
  {
    path: 'paper-setter',
    component: PaperSetterComponent,
    data: {
      title: "Paper Setter",
      breadcrumb: "Paper Setter"
    }
  },
  {
    path: 'answer-script-evaluator',
    component: AnswerScriptComponent,
    data: {
      title: "Answer Script Evaluator",
      breadcrumb: "Answer Script Evaluator"
    }
  },
  {
    path: 'seminar-workshop-faculty',
    component: SeminarWorkshopFacultyComponent,
    data: {
      title: "Seminar Workshop Faculty",
      breadcrumb: "Seminar Workshop Faculty"
    }
  },
  {
    path: 'examiners',
    component: ExaminerComponent,
    data: {
      title: "Examiners",
      breadcrumb: "Examiners"
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaffRoutingModule { }
