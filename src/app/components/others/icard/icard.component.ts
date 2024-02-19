import { Component } from '@angular/core';
import { MatIcon, MatIconModule } from "@angular/material/icon";
import { NgForOf, NgIf } from "@angular/common";
import { NgbNav, NgbNavItem, NgbNavLink, NgbNavLinkBase, NgbNavOutlet } from "@ng-bootstrap/ng-bootstrap";
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { StudentService } from "../../../services/student.service";
import { MemberService } from "../../../services/member.service";
import { NgbActiveModal, NgbModal, ModalDismissReasons, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { environment } from "../../../../environments/environment";
import {CustomFilterPipe} from "custom-filter.pipe";

@Component({
  selector: 'app-icard',
  standalone: true,
  imports: [
    MatIconModule,
    NgForOf,
    NgbNav,
    NgbNavLink,
    NgbNavLinkBase,
    ReactiveFormsModule,
    NgbNavOutlet,
    NgbNavItem,
    FormsModule,
    NgIf,
    CustomFilterPipe,
  ],
  templateUrl: './icard.component.html',
  styleUrl: './icard.component.scss'
})
export class IcardComponent {
  public FILE_URL = environment.FILE_URL;

  public active = 1;
  studentList: any[];
  memberList: any[];
  selectedMember: any;
  searchItem: string;

  constructor(private studentService: StudentService, private memberService: MemberService, private modalService: NgbModal) {
    let user = JSON.parse(localStorage.getItem('user') || '{}');
    if (user.user_type_id == 1) {
      this.studentService.getStudentListener().subscribe((response) => {
        this.studentList = response;
        this.studentList = this.studentList.filter(x => x.admission_status == 1);
      });
      this.studentList = this.studentService.getStudentLists();
      if(this.studentList.length > 0){
        this.studentList = this.studentList.filter(x => x.admission_status == 1);
      }
  
      this.memberService.getMemberListener().subscribe((response) => {
        this.memberList = response;
      });
      this.memberList = this.memberService.getMemberList();
    }
    else{
      this.studentService.getStudentListener().subscribe((response) => {
        this.studentList = response.filter(x => x.id == user.id);
        this.studentList = this.studentList.filter(x => x.admission_status == 1);
      });
      this.studentList = this.studentService.getStudentLists();
      if(this.studentList.length > 0){
        this.studentList = this.studentList.filter(x => x.id == user.id);
        this.studentList = this.studentList.filter(x => x.admission_status == 1);
      }
    }
   
  }

  generateIcard(item) {
    this.selectedMember = item;
  }

  onPrint() {
    // @ts-ignore
    const printContents = document.getElementById('sectionToPrint').innerHTML;
    const originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
  }

  activeTab(data) {
    this.active = data;
  }

  openLg(content) {
    this.modalService.open(content, { size: 'lg' });
  }

  


}
