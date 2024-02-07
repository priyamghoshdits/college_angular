import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NoticeComponent} from "./notice/notice.component";

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'notice',
        component: NoticeComponent,
        data: {
          title: "Notice",
          breadcrumb: "Notice"
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommunicationRoutingModule { }
