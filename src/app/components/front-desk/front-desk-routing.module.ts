import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {VisitorBookComponent} from "./visitor-book/visitor-book.component";
import {PostalDispatchComponent} from "./postal-dispatch/postal-dispatch.component";
import {PostalReceiveComponent} from "./postal-receive/postal-receive.component";

const routes: Routes = [
  {
    path: 'visitor-book',
    component: VisitorBookComponent,
    data: {
      title: "Visitor Book",
      breadcrumb: "Visitor Book"
    }
  },
  {
    path: 'postal-dispatch',
    component: PostalDispatchComponent,
    data: {
      title: "Postal Dispatch",
      breadcrumb: "Postal Dispatch"
    }
  },
  {
    path: 'postal-receive',
    component: PostalReceiveComponent,
    data: {
      title: "Postal Receive",
      breadcrumb: "Postal Receive"
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontDeskRoutingModule { }
