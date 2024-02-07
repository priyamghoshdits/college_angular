import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AcademicsRoutingModule } from './academics-routing.module';
import {FormsRoutingModule} from "../forms/forms-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgxPaginationModule} from "ngx-pagination";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    AcademicsRoutingModule,
    NgxPaginationModule
  ]
})
export class AcademicsModule { }
