import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardsRoutingModule } from './cards-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { BasicComponent } from './basic/basic.component';
import { CreativeComponent } from './creative/creative.component';
import { SimpleTabComponent } from './tabbed/simple-tab/simple-tab.component';
import { MaterialTabColorComponent } from './tabbed/material-tab-color/material-tab-color.component';
import { ColorTabComponent } from './tabbed/color-tab/color-tab.component';
import { ColorOptionComponent } from './tabbed/color-option/color-option.component';
import { TabbedComponent } from './tabbed/tabbed.component';
import { SharedModule } from '../../../app/shared/shared.module';

@NgModule({
  declarations: [BasicComponent, CreativeComponent, TabbedComponent, ColorOptionComponent, ColorTabComponent, MaterialTabColorComponent, SimpleTabComponent ],
  imports: [
    CommonModule,
    CardsRoutingModule,
    NgbModule,
    SharedModule
  ]
})
export class CardsModule { }
