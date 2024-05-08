import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import Swal from "sweetalert2";

type UserFields = "email" | "password";
type FormErrors = { [u in UserFields]: string };

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  siteKey = "6LfZFp8pAAAAADd6vXQG8oWC7iM4LGVKJh1vomdN";
  public newUser = false;
  // public user: firebase.User;
  public loginForm: FormGroup;
  public forgotPasswordForm: FormGroup;
  isForgotPassword = false;
  checked = false;

  public errorMessage: any;
  private BASE_API_URL = environment.BASE_API_URL;

  constructor(private fb: FormBuilder, public router: Router, private  http: HttpClient) {

    this.loginForm = this.fb.group({
      email: ["admin@admin.com", [Validators.required, Validators.email]],
      password: ["12345678", Validators.required],
      // recaptcha: ['', Validators.required]
    });

    this.forgotPasswordForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
    });
  }

  ngOnInit(): void {
    const user = localStorage.getItem('user');
    if(!user){
      this.router.navigate(["/"]);
    }
  }

  login() {
    const loginData = {
      "email" : this.loginForm.value.email,
      "password" : this.loginForm.value.password,
    }

    this.http.post(this.BASE_API_URL + '/login',loginData).subscribe((response: any) =>{
      if(response.success == 1){
        localStorage.setItem("user", JSON.stringify(response.data));
        // @ts-ignore
        this.router.navigate(["/dashboard/university"]);
      }else{
          this.checked = true;
      }
    });


    // if (this.loginForm.value['email'] == "Test@gmail.com" && this.loginForm.value['password'] == "test123") {
    //   let user = {
    //     email: "Test@gmail.com",
    //     password: "test123",
    //     name: "test user",
    //   };
    //   localStorage.setItem("user", JSON.stringify(user));
    //   this.router.navigate(["/dashboard/default"]);
    // }
  }

  forgotPassword(){
    this.isForgotPassword = true;
  }

  updatePassword(){
    this.http.get(this.BASE_API_URL + '/forgotPassword/' + this.forgotPasswordForm.value.email).subscribe((response: any) =>{
      if(response.success == 1){
        this.loginForm.reset();
        this.isForgotPassword = false;
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: response.data,
          showConfirmButton: false,
          timer: 1000
        });
      }
    });
  }

  returnBack(){
    this.isForgotPassword = false;
  }

  loginFacebook(){

  }
  loginTwitter(){

  }
  loginGoogle(){

  }
}
