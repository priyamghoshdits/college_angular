import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SamplePage3Component } from './sample-page3.component';

const routes: Routes = [
  {
    path: '',
    component: SamplePage3Component,
    data: {
      title: "Sample Page 3",
      breadcrumb: "Sample Page 3"
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SamplePage3RoutingModule { }
