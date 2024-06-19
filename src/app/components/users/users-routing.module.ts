import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersProfileComponent } from './users-profile/users-profile.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserCardsComponent } from './user-cards/user-cards.component';
import {StudentProfileComponent} from "./student-profile/student-profile.component";

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'profile',
        component: UsersProfileComponent,
        data: {
          title: "Profile",
          breadcrumb: "Profile"
        }
      },
      {
        path: 'show-profile',
        component: UserEditComponent,
        data: {
          title: "Profile",
          breadcrumb: "Profile"
        }
      },
      {
        path: 'cards',
        component: UserCardsComponent,
        data: {
          title: "Cards",
          breadcrumb: "Cards"
        }
      },
      {
        path: 'student-profile/:id',
        component: StudentProfileComponent,
        data: {
          title: "Student Profile",
          breadcrumb: "Student Profile"
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
