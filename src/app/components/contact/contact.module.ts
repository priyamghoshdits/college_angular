import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { NewUserComponent } from './new-user/new-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ContactsComponent } from './contacts/contacts.component';
import { EditUserComponent } from './edit-user/edit-user.component';

import { HttpClientModule } from '@angular/common/http';
import { NgxSliderModule } from 'ngx-slider-v2';
import { ToastrModule } from 'ngx-toastr';

import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [NewUserComponent, ContactsComponent, EditUserComponent],

  imports: [
    CommonModule,
    ContactRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    NgxSliderModule,
    ToastrModule.forRoot()
  ],

  providers: []
})
export class ContactModule { }
