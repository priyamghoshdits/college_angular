import { NgModule } from "@angular/core";
import {CommonModule, DatePipe} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ChartistModule } from "ng-chartist";
import { NgChartsModule } from "ng2-charts";
import { NgxChartsModule } from "@swimlane/ngx-charts";
import { Ng2GoogleChartsModule } from "ng2-google-charts";
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { SharedModule } from "../../shared/shared.module";

import { DashboardRoutingModule } from "./dashboard-routing.module";
import { DefaultComponent } from "./default/default.component";
import { ECommerceComponent } from "./e-commerce/e-commerce.component";
import { UniversityComponent } from "./university/university.component";
import { BitcoinComponent } from "./bitcoin/bitcoin.component";
import { ServerComponent } from "./server/server.component";
import { ProjectComponent } from "./project/project.component";
import { NgApexchartsModule } from "ng-apexcharts";
import {NgIdleKeepaliveModule} from "@ng-idle/keepalive";
import {NgxPaginationModule} from "ngx-pagination";

@NgModule({
  declarations: [DefaultComponent, ECommerceComponent, UniversityComponent, BitcoinComponent, ServerComponent, ProjectComponent],
    imports: [
        CommonModule,
        FormsModule,
        CarouselModule,
        NgbModule,
        ChartistModule,
        NgChartsModule,
        DashboardRoutingModule,
        NgxChartsModule,
        Ng2GoogleChartsModule,
        SharedModule,
        NgApexchartsModule,
        NgxDatatableModule,
        NgIdleKeepaliveModule.forRoot(),
        NgxPaginationModule,
        ReactiveFormsModule
    ],
    providers: [DatePipe],
})
export class DashboardModule {}
