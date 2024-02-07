import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AgentComponent} from "./agent/agent.component";
import {RolesAndPermissionComponent} from "./roles-and-permission/roles-and-permission.component";
import {UserTypesComponent} from "./user-types/user-types.component";

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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OthersRoutingModule { }
