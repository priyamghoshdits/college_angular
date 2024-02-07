import { Component, OnInit, QueryList, ViewChildren, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { NgbdSortableHeader, SortEvent } from 'src/app/shared/directives/NgbdSortableHeader';
import { supportDB,SUPPORTDB } from 'src/app/shared/data/tables/support-ticket';
import { SupportTicketService } from 'src/app/shared/services/support-ticket.service';
import { DecimalPipe } from '@angular/common';


@Component({
  selector: 'app-support-ticket',
  templateUrl: './support-ticket.component.html',
  styleUrls: ['./support-ticket.component.scss'],
  providers: [SupportTicketService, DecimalPipe],

})
export class SupportTicketComponent implements OnInit {

  public selected = [];

  public tableItem$: Observable<supportDB[]>;
  public searchText;
  total$: Observable<number>;

  constructor(public service: SupportTicketService) {

    this.tableItem$ = service.support$;
    this.total$ = service.total$;

  }



  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;

  onSort({ column, direction }: SortEvent) {
    // resetting other headers
    this.headers.forEach((header) => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

    this.service.sortColumn = column;
    this.service.sortDirection = direction;

  }

  public onSelect(selected) {
    // this.service.deleteSingleData(selected);
}


  ngOnInit() {
  }

}
