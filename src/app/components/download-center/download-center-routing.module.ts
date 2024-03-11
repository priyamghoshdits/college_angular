import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AssignmentComponent} from "./assignment/assignment.component";
import {UploadContentComponent} from "./upload-content/upload-content.component";
import {StudyMaterialComponent} from "./study-material/study-material.component";
import {SyllabusComponent} from "./syllabus/syllabus.component";

const routes: Routes = [
  {
    path: 'assignment',
    component: AssignmentComponent,
    data: {
      title: "Assignment",
      breadcrumb: "Assignment"
    }
  },
  {
    path: 'upload-content',
    component: UploadContentComponent,
    data: {
      title: "Upload Content",
      breadcrumb: "Upload Content"
    }
  },
  {
    path: 'study-material',
    component: StudyMaterialComponent,
    data: {
      title: "Study Material",
      breadcrumb: "Study Material"
    }
  },
  {
    path: 'syllabus',
    component: SyllabusComponent,
    data: {
      title: "Syllabus",
      breadcrumb: "Syllabus"
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DownloadCenterRoutingModule { }
