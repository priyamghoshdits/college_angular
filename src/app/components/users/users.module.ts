import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GalleryModule } from '@ks89/angular-modal-gallery';
import 'hammerjs';
import 'mousetrap';

import { UsersRoutingModule } from './users-routing.module';
import { UsersProfileComponent } from './users-profile/users-profile.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserCardsComponent } from './user-cards/user-cards.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";


@NgModule({
  declarations: [UsersProfileComponent, UserEditComponent, UserCardsComponent],
    imports: [
        CommonModule,
        UsersRoutingModule,
        GalleryModule,
        FormsModule,
        ReactiveFormsModule,
        MatIconModule
    ]
})
export class UsersModule { }
