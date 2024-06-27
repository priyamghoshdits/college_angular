import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FeesTypeComponent} from "./fees-type/fees-type.component";
import {CollectFeesComponent} from "./collect-fees/collect-fees.component";
import {FeesStructureComponent} from "./fees-structure/fees-structure.component";
import {DiscountComponent} from "./discount/discount.component";
import {SearchFeesComponent} from "./search-fees/search-fees.component";
import {ManualFeesComponent} from "./manual-fees/manual-fees.component";
import {ManualScholarshipComponent} from "./manual-scholarship/manual-scholarship.component";

const routes: Routes = [
  {
    path: 'fees-type',
    component: FeesTypeComponent,
    data: {
      title: "Fees Type",
      breadcrumb: "Fess Type"
    }
  },
  {
    path: 'manual-fees',
    component: ManualFeesComponent,
    data: {
      title: "Manual Fees",
      breadcrumb: "Manual Fees"
    }
  },
  {
    path: 'manual-scholarship',
    component: ManualScholarshipComponent,
    data: {
      title: "Manual Scholarship",
      breadcrumb: "Manual Scholarship"
    }
  },
  {
    path: 'collect-fees',
    component: CollectFeesComponent,
    data: {
      title: "Collect Fees",
      breadcrumb: "Collect Fees"
    }
  },
  {
    path: 'search-fees-payment',
    component: SearchFeesComponent,
    data: {
      title: "Search Fees Payment",
      breadcrumb: "Search Fees Payment"
    }
  },
  {
    path: 'fees-structure',
    component: FeesStructureComponent,
    data: {
      title: "Fees Structure",
      breadcrumb: "Fees Structure"
    }
  },
  {
    path: 'discount',
    component: DiscountComponent,
    data: {
      title: "Discount",
      breadcrumb: "Discount"
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeesCollectionRoutingModule { }
