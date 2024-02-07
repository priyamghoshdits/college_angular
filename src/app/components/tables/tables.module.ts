import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TablesRoutingModule } from './tables-routing.module';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { BasicComponent } from './bootstrap-tables/basic/basic.component'
import { BorderComponent } from './bootstrap-tables/border/border.component'
import { SizingComponent } from './bootstrap-tables/sizing/sizing.component'
import { StylingComponent } from './bootstrap-tables/styling/styling.component'
import { NgbdSortableHeader2 } from 'src/app/shared/directives/sor-table.directive';
import { SupportTicketService } from '../../shared/services/support-ticket.service';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { BasicNgxDatatableComponent } from './ngx-datatables/basic/basic.component';

@NgModule({
  declarations: [BasicComponent,NgbdSortableHeader2, BorderComponent, SizingComponent, StylingComponent, BasicNgxDatatableComponent​],
  imports: [
    CommonModule,
    TablesRoutingModule,
    NgbModule,
    FormsModule,
    SharedModule

  ],
  providers: [
    SupportTicketService
  ]
})
export class TablesModule { }
