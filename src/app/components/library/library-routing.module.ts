import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LibraryItemStockComponent} from "./library-item-stock/library-item-stock.component";
import {LibraryItemIssueComponent} from "./library-item-issue/library-item-issue.component";
import {UploadDigitalBookComponent} from "./upload-digital-book/upload-digital-book.component";
import {DownloadDigitalBookComponent} from "./download-digital-book/download-digital-book.component";
import {BookListComponent} from "./book-list/book-list.component";
import {ReturnPeriodOverComponent} from "./return-period-over/return-period-over.component";
import {DiscountComponent} from "./discount/discount.component";

const routes: Routes = [
  {
    path: 'item-stock',
    component: LibraryItemStockComponent,
    data: {
      title: "Add Stock",
      breadcrumb: "Add Stock"
    }
  },
  {
    path: 'issue-item',
    component: LibraryItemIssueComponent,
    data: {
      title: "Issue Books",
      breadcrumb: "Issue Books"
    }
  },
  {
    path: 'upload-digital-book',
    component: UploadDigitalBookComponent,
    data: {
      title: "Upload Digital Books",
      breadcrumb: "Upload Digital Books"
    }
  },
  {
    path: 'download-digital-book',
    component: DownloadDigitalBookComponent,
    data: {
      title: "Download Digital Books",
      breadcrumb: "Download Digital Books"
    }
  },
  {
    path: 'book-list',
    component: BookListComponent,
    data: {
      title: "Book List",
      breadcrumb: "Book List"
    }
  },
  {
    path: 'return-over-period',
    component: ReturnPeriodOverComponent,
    data: {
      title: "Return Over Period",
      breadcrumb: "Return Over Period"
    }
  },
  {
    path: 'discount-fine',
    component: DiscountComponent,
    data: {
      title: "Discount Fine",
      breadcrumb: "Discount Fine"
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LibraryRoutingModule { }
