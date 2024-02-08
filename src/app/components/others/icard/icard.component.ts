import { Component } from '@angular/core';
import { MatIcon, MatIconModule } from "@angular/material/icon";
import { NgForOf, NgIf } from "@angular/common";
import { NgbNav, NgbNavItem, NgbNavLink, NgbNavLinkBase, NgbNavOutlet } from "@ng-bootstrap/ng-bootstrap";
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import {StudentService} from "../../../services/student.service";
import {MemberService} from "../../../services/member.service";
import { NgbActiveModal, NgbModal, ModalDismissReasons, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import {environment} from "../../../../environments/environment";

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
    NgIf
  ],
  templateUrl: './icard.component.html',
  styleUrl: './icard.component.scss'
})
export class IcardComponent {
  public FILE_URL = environment.FILE_URL;

  public active = 1;
  studentList: any[];
  memberList : any[];
  selectedMember: any;

  constructor(private studentService: StudentService, private memberService: MemberService, private modalService: NgbModal) {
    this.studentService.getStudentListener().subscribe((response) => {
      this.studentList = response;
    });
    this.studentList = this.studentService.getStudentLists();

    this.memberService.getMemberListener().subscribe((response) => {
      this.memberList = response;
  });
  this.memberList = this.memberService.getMemberList();
  }

  genarateIcard(item){
    console.log(item);
    this.selectedMember = item;
  }

  activeTab(data) {
    this.active = data;
  }

  openLg(content) {
    this.modalService.open(content, { size: 'lg' });
  }

}
