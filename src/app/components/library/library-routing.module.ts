import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LibraryItemStockComponent} from "./library-item-stock/library-item-stock.component";
import {LibraryItemIssueComponent} from "./library-item-issue/library-item-issue.component";

const routes: Routes = [
  {
    path: 'itemStock',
    component: LibraryItemStockComponent,
    data: {
      title: "Add Stock",
      breadcrumb: "Add Stock"
    }
  },
  {
    path: 'issueItem',
    component: LibraryItemIssueComponent,
    data: {
      title: "Issue Books",
      breadcrumb: "Issue Books"
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LibraryRoutingModule { }
