import { Component } from '@angular/core';
import {LibraryService} from "../../../services/library.service";

@Component({
  selector: 'app-return-period-over',
  standalone: true,
  imports: [],
  templateUrl: './return-period-over.component.html',
  styleUrl: './return-period-over.component.scss'
})
export class ReturnPeriodOverComponent {
  returnPeriodList: any[];
  constructor(private libraryService: LibraryService) {
    this.libraryService.getReturnPeriodOverListener().subscribe((response) => {
      this.returnPeriodList = response;
    });
    this.returnPeriodList = this.libraryService.getReturnOverPeriodList();
  }

}
