import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {VisitorBookComponent} from "./visitor-book/visitor-book.component";
import {PostalDispatchComponent} from "./postal-dispatch/postal-dispatch.component";
import {PostalReceiveComponent} from "./postal-receive/postal-receive.component";
import {CallLogComponent} from "./call-log/call-log.component";
import {AdmissionEnquiryComponent} from "./admission-enquiry/admission-enquiry.component";

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
  },
  {
    path: 'call-log',
    component: CallLogComponent,
    data: {
      title: "Call Log",
      breadcrumb: "Call Log"
    }
  },
  {
    path: 'admission-enquiry',
    component: AdmissionEnquiryComponent,
    data: {
      title: "Admission Enquiry",
      breadcrumb: "Admission Enquiry"
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontDeskRoutingModule { }
