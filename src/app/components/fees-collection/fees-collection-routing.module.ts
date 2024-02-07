import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FeesTypeComponent} from "./fees-type/fees-type.component";
import {CollectFeesComponent} from "./collect-fees/collect-fees.component";
import {FeesStructureComponent} from "./fees-structure/fees-structure.component";
import {DiscountComponent} from "./discount/discount.component";

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
    path: 'collect-fees',
    component: CollectFeesComponent,
    data: {
      title: "Collect Fees",
      breadcrumb: "Collect Fees"
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
