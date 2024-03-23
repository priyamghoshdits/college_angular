import { Component, OnInit } from '@angular/core';
import {environment} from "../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {ErrorService} from "../../../services/error.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {catchError, tap} from "rxjs/operators";
import {MemberService} from "../../../services/member.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {
  private BASE_API_URL = environment.BASE_API_URL;
  studentCreationForm: FormGroup;
  categoryList: any[];
  showPopup = true;

  user = JSON.parse(localStorage.getItem('user') || '{}');
  // @ts-ignore
  userDetails: {
    category_id: any;
    permanent_address: any;
    material_status: any;
    religion: any;
    blood_group: any;
    mobile_no: any;
    dob: any;
    gender: any;
    identification_no: any;
    current_semester: any;
    course_name: any;
    email: any;
    user_type: any;
    last_name: any;
    middle_name: any;
    first_name: any;
  } = {};
  constructor(private  http: HttpClient, private errorService: ErrorService, private memberService: MemberService) {
    this.studentCreationForm = new FormGroup({
      id: new FormControl(null),
      identification_no: new FormControl(null),
      gender: new FormControl(null),
      dob: new FormControl(null),
      admission_date: new FormControl(null),
      image: new FormControl(null),
      mobile_no: new FormControl(null, [Validators.pattern("[0-9 ]{10}")]),
      emergency_phone_number: new FormControl(null),
      material_status: new FormControl(null),
      admission_status: new FormControl(null),
      current_address: new FormControl(null),
      permanent_address: new FormControl(null),
      religion: new FormControl(null),
      blood_group: new FormControl(null),
      category_id: new FormControl(null),
      email: new FormControl(null),
      course_name: new FormControl(null),
      semester_name: new FormControl(null),
      agent_id: new FormControl(null),
      father_name: new FormControl(null),
      father_phone: new FormControl(null),
      father_occupation: new FormControl(null),
      mother_name: new FormControl(null),
      mother_phone: new FormControl(null),
      mother_occupation: new FormControl(null),
      guardian_name: new FormControl(null),
      guardian_phone: new FormControl(null),
      guardian_email: new FormControl(null),
      guardian_relation: new FormControl(null),
      guardian_occupation: new FormControl(null),
      guardian_address: new FormControl(null),
      franchise_id: new FormControl(null),
      session_id: new FormControl(null),
    });
    this.memberService.getCategoryListener().subscribe((response) => {
      this.categoryList = response;
    });
    this.categoryList = this.memberService.getCategoryList();
  }

  getUserDetails(){
    this.http.get(this.BASE_API_URL + '/getLoggedInUserData').subscribe((response: any) =>{
      if(response.success == 1){
        this.userDetails = response.data;
        this.studentCreationForm.patchValue({email: this.userDetails.email
          , course_name: this.userDetails.course_name
          , semester_name: this.userDetails.current_semester
          , permanent_address: this.userDetails.permanent_address
          , gender: this.userDetails.gender
          , dob: this.userDetails.dob
          , category_id: this.userDetails.category_id
          , mobile_no: this.userDetails.mobile_no
          , blood_group: this.userDetails.blood_group
          , religion: this.userDetails.religion
          , material_status: this.userDetails.material_status
          , identification_no: this.userDetails.identification_no
        });
        // @ts-ignore
        // setTimeout(this.showPopup = false,2000);
      }
    });
  }

  updateProfile(){
    return this.http.post(this.BASE_API_URL + '/updateMemberOwn', this.studentCreationForm.value)
        .subscribe(response => {
          // @ts-ignore
          if(response.success == 1){
            // Swal.fire({
            //   position: 'center',
            //   icon: 'success',
            //   title: 'Profile Updated',
            //   showConfirmButton: false,
            //   timer: 1000
            // });
            Swal.fire({
              title: "Well Done!!",
              text: "Profile Updated",
              icon: "success"
            });
          }
        });
  }

  ngOnInit() {
    this.getUserDetails();
  }

}
