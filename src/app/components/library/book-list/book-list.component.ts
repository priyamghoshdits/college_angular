import { Component } from '@angular/core';
import {LibraryService} from "../../../services/library.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import {NgForOf, NgIf} from "@angular/common";
import Swal from "sweetalert2";
import html2canvas from "html2canvas";
import jspdf from "jspdf";
import {CustomFilterPipe} from "../../../../../custom-filter.pipe";

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [
    FormsModule,
    MatIconModule,
    NgForOf,
    NgIf,
    ReactiveFormsModule,
    CustomFilterPipe
  ],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.scss'
})
export class BookListComponent {
  libraryItemList: any[];
  searchItem: string;
  constructor(private libraryService: LibraryService) {
    this.libraryService.getLibraryItemListener().subscribe((response) => {
      this.libraryItemList = response;
    });
    this.libraryItemList = this.libraryService.getLibraryItemList();
  }

  async download_pdf() {
    Swal.fire({
      title: 'Please Wait !',
      html: 'Creating Pdf ...', // add html attribute if you want or remove
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      }
    });
    let data = document.getElementById('sectionToPrint');
    // @ts-ignore
    html2canvas(data).then(canvas => {
      // Few necessary setting options
      let imgWidth = 208;
      let pageHeight = 295;
      let imgHeight = canvas.height * imgWidth / canvas.width;
      let heightLeft = imgHeight;

      const contentDataURL = canvas.toDataURL('image/png')
      let pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF
      let position = 0;
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
      Swal.close();
      pdf.save('book_list.pdf'); // Generated PDF
    })
    //   let doc = new jsPDF('p', 'mm', 'a4');
    //   doc.addHTML(document.getElementById("sectionToPrint"), function() {
    //     Swal.close();
    //     doc.save("obrz.pdf");
    //   });
    // const doc = new jsPDF('p', 'mm', 'a4');
    // const div = document.getElementById('sectionToPrint');
    // // @ts-ignore
    // await doc.html(div);
    // doc.save('test.pdf'); // save / download
  }

}

