import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AgentComponent} from "./agent/agent.component";
import {RolesAndPermissionComponent} from "./roles-and-permission/roles-and-permission.component";
import {UserTypesComponent} from "./user-types/user-types.component";
import { IcardComponent } from './icard/icard.component';
import {AgentStudentEntryComponent} from "./agent-student-entry/agent-student-entry.component";
import {FranchiseComponent} from "./franchise/franchise.component";
import {UserLogComponent} from "./user-log/user-log.component";
import {AgentPaymentComponent} from "./agent-payment/agent-payment.component";

const routes: Routes = [
  {
    path: 'agent',
    component: AgentComponent,
    data: {
      title: "Agent",
      breadcrumb: "Agent"
    }
  },
  {
    path: 'roles-and-permission',
    component: RolesAndPermissionComponent,
    data: {
      title: "Roles and permission",
      breadcrumb: "Roles and permission"
    }
  },
  {
    path: 'user-types',
    component: UserTypesComponent,
    data: {
      title: "User Type",
      breadcrumb: "User Type"
    }
  },
  {
    path: 'user-logs',
    component: UserLogComponent,
    data: {
      title: "User Log",
      breadcrumb: "User Log"
    }
  },
  {
    path: 'agent-payment',
    component: AgentPaymentComponent,
    data: {
      title: "Agent Payment",
      breadcrumb: "Agent Payment"
    }
  },
  {
    path: 'franchise',
    component: FranchiseComponent,
    data: {
      title: "Franchise",
      breadcrumb: "Franchise"
    }
  },
  {
    path: 'icard',
    component: IcardComponent,
    data: {
      title: "Icard",
      breadcrumb: "Icard"
    }
  },
  {
    path: 'agent-student-entry',
    component: AgentStudentEntryComponent,
    data: {
      title: "Agent Student Entry",
      breadcrumb: "Agent Student Entry"
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OthersRoutingModule { }
