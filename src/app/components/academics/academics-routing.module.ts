import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DefaultComponent} from "../dashboard/default/default.component";
import {ECommerceComponent} from "../dashboard/e-commerce/e-commerce.component";
import {UniversityComponent} from "../dashboard/university/university.component";
import {BitcoinComponent} from "../dashboard/bitcoin/bitcoin.component";
import {ServerComponent} from "../dashboard/server/server.component";
import {ProjectComponent} from "../dashboard/project/project.component";
import {CourseComponent} from "./course/course.component";
import {SemesterComponent} from "./semester/semester.component";
import {SubjectComponent} from "./subject/subject.component";
import {SemesterTimetableComponent} from "./semester-timetable/semester-timetable.component";
import {CreateSemesterTimetableComponent} from "./create-semester-timetable/create-semester-timetable.component";
import {AssignSemesterTeacherComponent} from "./assign-semester-teacher/assign-semester-teacher.component";
import {SubjectGroupComponent} from "./subject-group/subject-group.component";
import {SessionComponent} from "./session/session.component";
import {PromoteStudentComponent} from "./promote-student/promote-student.component";
import {HolidayComponent} from "../human-resource/holiday/holiday.component";

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'course',
        component: CourseComponent,
        data: {
          title: "Course",
          breadcrumb: "Course"
        }
      },
      {
        path: 'semester',
        component: SemesterComponent,
        data: {
          title: "Semester",
          breadcrumb: "Semester"
        }
      },
      {
        path: 'subject',
        component: SubjectComponent,
        data: {
          title: "Subject",
          breadcrumb: "Subject"
        }
      },
      {
        path: 'semester-timetable',
        component: SemesterTimetableComponent,
        data: {
          title: "Semester Timetable",
          breadcrumb: "Semester Timetable"
        }
      },
      {
        path: 'create-semester-timeTable',
        component: CreateSemesterTimetableComponent,
        data: {
          title: "Semester Timetable",
          breadcrumb: "Semester Timetable"
        }
      },
      {
        path: 'assign-semester-teacher',
        component: AssignSemesterTeacherComponent,
        data: {
          title: "Semester Timetable",
          breadcrumb: "Semester Timetable"
        }
      },
      {
        path: 'subject-group',
        component: SubjectGroupComponent,
        data: {
          title: "Subject Group",
          breadcrumb: "Subject Group"
        }
      },
      {
        path: 'session',
        component: SessionComponent,
        data: {
          title: "Session",
          breadcrumb: "Session"
        }
      },
      {
        path: 'promote-students',
        component: PromoteStudentComponent,
        data: {
          title: "Promote Students",
          breadcrumb: "Promote Students"
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AcademicsRoutingModule { }
