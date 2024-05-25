import { Component } from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatIcon, MatIconModule} from "@angular/material/icon";
import {NgForOf, NgIf, NgOptimizedImage} from "@angular/common";
import {NgxPaginationModule} from "ngx-pagination";
import {SubjectService} from "../../../services/subject.service";
import {StudentService} from "../../../services/student.service";
import {
  ModalDismissReasons,
  NgbInputDatepicker,
  NgbModal,
  NgbNav, NgbNavItem,
  NgbNavLink, NgbNavLinkBase, NgbNavOutlet,
  NgbTooltip
} from "@ng-bootstrap/ng-bootstrap";
import {FeesService} from "../../../services/fees.service";
import {ToastrService} from "ngx-toastr";
import {environment} from "../../../../environments/environment";
import Swal from "sweetalert2";
import {RolesAndPermissionService} from "../../../services/roles-and-permission.service";
import {SessionService} from "../../../services/session.service";
import {NgxPrintDirective} from "ngx-print";

@Component({
  selector: 'app-collect-fees',
  standalone: true,
  imports: [
    FormsModule,
    MatIconModule,
    NgForOf,
    NgxPaginationModule,
    ReactiveFormsModule,
    NgbInputDatepicker,
    NgIf,
    NgbTooltip,
    NgbNav,
    NgbNavLink,
    NgbNavLinkBase,
    NgbNavItem,
    NgbNavOutlet,
    NgOptimizedImage,
    NgxPrintDirective
  ],
  templateUrl: './collect-fees.component.html',
  styleUrl: './collect-fees.component.scss'
})
export class CollectFeesComponent {
  public FILE_URL = environment.FILE_URL;
  collectFeesForm: FormGroup;
  searchTransactionForm: FormGroup;
  courseList: any[];
  semesterList: any[];
  studentList: any[];
  filteredStudentList: any[];
  filteredStudentListForSearch: any[];
  p: number;
  closeResult: string;
  feesDetailsData: any[] = [];
  transactionList: any[];
  status = null;
  tempStudentId = null;
  active = 1;
  collectFees = false;
  file: File | null;
  transactionFile: File | null;
  rolesAndPermission: any[] = [];
  permission: any[] = [];
  sessionList: any[] = [];
  advancePayment: number;
  constructor(private toastrService: ToastrService,private subjectService: SubjectService
              , private feesService: FeesService ,private studentService: StudentService
              , private modalService: NgbModal, private roleAndPermissionService: RolesAndPermissionService
              , private sessionService: SessionService) {
    this.collectFeesForm = new FormGroup({
      id: new FormControl(null),
      course_id: new FormControl(null, [Validators.required]),
      semester_id: new FormControl(null, [Validators.required]),
      session_id: new FormControl(null, [Validators.required]),
    });

    this.searchTransactionForm = new FormGroup({
      id: new FormControl(null),
      course_id: new FormControl(null, [Validators.required]),
      semester_id: new FormControl(null, [Validators.required]),
      user_id: new FormControl(null, [Validators.required]),
    });

    this.subjectService.getCourseListener().subscribe((response) => {
      this.courseList = response;
    });
    this.courseList = this.subjectService.getCourses();

    this.studentService.getStudentListener().subscribe((response) => {
      this.studentList = response;
    });
    this.studentList = this.studentService.getStudentLists();

    this.roleAndPermissionService.getRolesAndPermissionListener().subscribe((response) => {
      this.rolesAndPermission = response;
      this.permission = this.rolesAndPermission.find(x => x.name == 'COLLECT FEES').permission;
    });
    this.rolesAndPermission = this.roleAndPermissionService.getRolesAndPermission();
    if(this.rolesAndPermission.length > 0){
      this.permission = this.rolesAndPermission.find(x => x.name == 'COLLECT FEES').permission;
    }
    this.sessionService.getSessionListener().subscribe((response) => {
      this.sessionList = response;
    });
    this.sessionList = this.sessionService.getSessionList();
  }


  print_div(){
    // @ts-ignore
    const printContents = document.getElementById('sectionToPrint').innerHTML;
    const originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
        // // Create a Blob from the HTML content
        // let blob = new Blob([printContents], { type: 'text/html' });
        //
        // // Create a URL for the Blob
        // let url = URL.createObjectURL(blob);
        //
        // // Open a new tab with the created URL
        // window.open(url, '_blank');
    window.print();
    document.body.innerHTML = originalContents;
  }

  printTransaction(){
    //@ts-ignore
    let printContents = document.getElementById('registration').innerHTML;
    let originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;

    window.print();
    document.body.innerHTML = originalContents;
    // printDiv('registration');
  }

  getSemester(data){
    if(data == 1){
      this.subjectService.getSemesterByCourseId(this.collectFeesForm.value.course_id).subscribe((response) => {
        // @ts-ignore
        this.semesterList = response.data;
      })
    }else{
      this.subjectService.getSemesterByCourseId(this.searchTransactionForm.value.course_id).subscribe((response) => {
        // @ts-ignore
        this.semesterList = response.data;
      })
    }
  }

  // printBtn.onclick = function () {
  //   printDiv('registration');
  // };

  getTransactionDetails(){
    if(!this.searchTransactionForm.valid){
      this.searchTransactionForm.markAllAsTouched();
      return;
    }
    this.feesService.getTransactionDetails(this.searchTransactionForm.value.user_id).subscribe((response) => {
      // @ts-ignore
      this.transactionList = response.data;
    })
  }

  setTransactionFile(event, data){
    this.transactionFile = event.target.files[0];

    const formData = new FormData();
    formData.append("id", data.id);
    // @ts-ignore
    formData.append("file", this.transactionFile);
    // @ts-ignore
    formData.append("file_name", this.transactionFile['name']);
    this.feesService.uploadFileFromTransactionList(formData).subscribe((response: any) => {
      this.getTransactionDetails();
    });
  }

  getStudents(){
    console.log(this.filteredStudentListForSearch);
    if(this.searchTransactionForm.value.course_id){
      this.filteredStudentListForSearch = this.filteredStudentListForSearch.filter(x => x.course_id == this.searchTransactionForm.value.course_id);
    }
    if(this.searchTransactionForm.value.semester_id != null){
      this.filteredStudentListForSearch = this.filteredStudentListForSearch.filter(x => x.current_semester_id == this.searchTransactionForm.value.semester_id);
    }
  }

  getFeesDetails(id){
    this.feesService.getFeesDetails(id).subscribe((response: any) => {
      this.feesDetailsData = response.data;
      this.advancePayment = response.advance_payment;
      this.tempStudentId = id;
      // this.collectFees = true;
    })
  }
  setFile(event){
    this.file = event.target.files[0];
  }

  deleteTransaction(data){
    console.log(data);
    Swal.fire({
      title: 'Confirmation',
      text: 'Do you sure to delete this transaction ?',
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete It!'
    }).then((result) => {
      if(result.isConfirmed){
        this.feesService.deleteTransaction(data.id).subscribe((response: any) => {
          if(response.success == 1){
            this.getTransactionDetails();
          }
        })
      }
    });
  }


  updatePayment(data){
    if(!data.amount){
      this.toastrService.error('Amount is empty', 'Error');
      return;
    }
    if(!data.status){
      this.toastrService.error('Please select the status', 'Error');
      return;
    }
    // console.log(data);
    // return;
    // let a = {
    //   'fees_structure_id': data.fees_structure_id,
    //   'student_id' : this.tempStudentId,
    //   'course_id' : this.collectFeesForm.value.course_id,
    //   'semester_id' : this.collectFeesForm.value.semester_id,
    //   'transaction_id' : data.transaction_id,
    //   'paid_on' : data.paid_on,
    //   'amount' : data.amount,
    //   'mode' : data.status,
    // }

    if(data.amount > data.remaining){
      Swal.fire({
        position: 'center',
        icon: 'info',
        title: 'Amount cannot be greater than due amount',
        showConfirmButton: false,
        timer: 1000
      });
      return;
    }

    const formData = new FormData();
    formData.append("fees_structure_id", data.fees_structure_id);
    // @ts-ignore
    formData.append("student_id", this.tempStudentId);
    formData.append("course_id", this.collectFeesForm.value.course_id);
    formData.append("semester_id", this.collectFeesForm.value.semester_id);
    formData.append("transaction_id", data.transaction_id);
    formData.append("paid_on", data.paid_on);
    formData.append("amount", data.amount);
    formData.append("mode", data.status);
    if(this.file != null){
      // @ts-ignore
      formData.append("file", this.file);
      // @ts-ignore
      formData.append("file_name", this.file['name']);
    }

    this.feesService.updatePayment(formData).subscribe((response: any) => {
      if(response.success == 1){
        this.getFeesDetails(this.tempStudentId);
        this.toastrService.success('Payment Updated', 'Success!');
        this.file = null;
      }

    });
  }

  openCustomModal(content) {
    this.modalService.open(content,{ size: 'xl'});
  }

  searchStudents(){
    // @ts-ignore
    const session = JSON.parse(localStorage.getItem('session_id'));
    this.collectFeesForm.patchValue({session_id: session});

    if(!session){
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Select Session',
        showConfirmButton: false,
        timer: 1000
      });
      return;
    }

    if(!this.collectFeesForm.valid){
      this.collectFeesForm.markAllAsTouched();
      return;
    }
    this.filteredStudentList = this.studentList.filter(x => x.admission_status == 1);
    if(this.collectFeesForm.value.course_id){
      this.filteredStudentList = this.filteredStudentList.filter(x => x.course_id == this.collectFeesForm.value.course_id);
    }
    if(this.collectFeesForm.value.semester_id != null){
      this.filteredStudentList = this.filteredStudentList.filter(x => x.semester_id == this.collectFeesForm.value.semester_id);
    }
    if(this.collectFeesForm.value.session_id != null){
      this.filteredStudentList = this.filteredStudentList.filter(x => x.session_id == this.collectFeesForm.value.session_id);
    }
  }

  activeTab(data){
    this.active = data;
  }



  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

}
