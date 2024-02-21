import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ItemTypeComponent} from "./item-type/item-type.component";
import {AddItemsComponent} from "./add-items/add-items.component";
import {ItemSupplierComponent} from "./item-supplier/item-supplier.component";
import {ItemStoreComponent} from "./item-store/item-store.component";
import {ItemStockComponent} from "./item-stock/item-stock.component";
import {IssueItemComponent} from "./issue-item/issue-item.component";

const routes: Routes = [
  {
    path: 'inventory-item',
    component: ItemTypeComponent,
    data: {
      title: "Item Category",
      breadcrumb: "Item Category"
    }
  },
  {
    path: 'add-item',
    component: AddItemsComponent,
    data: {
      title: "Add Item",
      breadcrumb: "Add Item"
    }
  },
  {
    path: 'item-supplier',
    component: ItemSupplierComponent,
    data: {
      title: "Item Supplier",
      breadcrumb: "Item Supplier"
    }
  },
  {
    path: 'item-store',
    component: ItemStoreComponent,
    data: {
      title: "Item Store",
      breadcrumb: "Item Store"
    }
  },
  {
    path: 'item-stock',
    component: ItemStockComponent,
    data: {
      title: "Item Stock",
      breadcrumb: "Item Stock"
    }
  },
  {
    path: 'issue-item',
    component: IssueItemComponent,
    data: {
      title: "Issue Item",
      breadcrumb: "Issue Item"
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventoryRoutingModule { }
