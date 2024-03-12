import { Component } from '@angular/core';
import {LibraryService} from "../../../services/library.service";
import {NgForOf} from "@angular/common";
import {NgbTooltip} from "@ng-bootstrap/ng-bootstrap";
import {FormsModule} from "@angular/forms";
import {CustomFilterPipe} from "../../../../../custom-filter.pipe";

@Component({
  selector: 'app-return-period-over',
  standalone: true,
  imports: [
    NgForOf,
    NgbTooltip,
    FormsModule,
    CustomFilterPipe
  ],
  templateUrl: './return-period-over.component.html',
  styleUrl: './return-period-over.component.scss'
})
export class ReturnPeriodOverComponent {
  returnPeriodList: any[];
  searchItem: string;
  constructor(private libraryService: LibraryService) {
    this.libraryService.getReturnPeriodOverListener().subscribe((response) => {
      this.returnPeriodList = response;
    });
    this.returnPeriodList = this.libraryService.getReturnOverPeriodList();
  }

}
