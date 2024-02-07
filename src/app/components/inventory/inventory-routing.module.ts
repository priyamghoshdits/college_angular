import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ItemTypeComponent} from "./item-type/item-type.component";
import {AddItemsComponent} from "./add-items/add-items.component";

const routes: Routes = [
  {
    path: 'inventoryItem',
    component: ItemTypeComponent,
    data: {
      title: "Item Category",
      breadcrumb: "Item Category"
    }
  },
  {
    path: 'addItem',
    component: AddItemsComponent,
    data: {
      title: "Add Item",
      breadcrumb: "Add Item"
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventoryRoutingModule { }
