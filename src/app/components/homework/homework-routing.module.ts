import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddHomeWorkComponent} from "./add-home-work/add-home-work.component";

const routes: Routes = [
  {
    path: 'add-homework',
    component: AddHomeWorkComponent,
    data: {
      title: "Add Home Work",
      breadcrumb: "Add Home Work"
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeworkRoutingModule { }
