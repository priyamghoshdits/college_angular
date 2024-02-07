import { Component, OnInit, Output } from "@angular/core";
import { Router } from "@angular/router";
import { Options, ChangeContext, PointerType, LabelType } from "ngx-slider-v2";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-contacts",
  templateUrl: "./contacts.component.html",
  styleUrls: ["./contacts.component.scss"],
})
export class ContactsComponent implements OnInit {
  public searchValue: string = "";
  public user: any;
  public age: any;
  public sidebaron: any;
  public listView: any;

  constructor(private router: Router, private toastr: ToastrService) {}

  showDelete() {
    this.toastr.error("User Deleted !");
  }

  public logText: string = "";
  public min: number;
  public value: number = 10;
  public highValue: number = 50;
  public options: Options = {
    floor: 0,
    ceil: 100,
  };

  onUserChangeStart(changeContext: ChangeContext): void {
    this.logText += `onUserChangeStart(${this.getChangeContextString(changeContext)})\n`;
  }

  onUserChange(changeContext: ChangeContext): void {
    this.logText += `onUserChange(${this.getChangeContextString(changeContext)})\n`;
  }

  onUserChangeEnd(changeContext: ChangeContext): void {
    this.logText += `onUserChangeEnd(${this.getChangeContextString(changeContext)})\n`;
  }

  getChangeContextString(changeContext: ChangeContext): void {
    this.min = changeContext.value;
    this.age = changeContext.value;
    this.rangeChange(this.age);
  }

  searchByName() {
    let value = this.searchValue.toLowerCase();
  }

  rangeChange(event) {}

  delete(contactId) {
    this.router.navigate(["/contact/contacts"]);
  }

  getData() {}
  ngOnInit() {
    this.getData();
  }

  items = [
    {
      id: 1,
      avatar: "assets/images/avtar/7.jpg",
      name: "John",
      surname: "Deo",
      mobile: "44265 55155",
      age: 25,
    },
    {
      id: 2,
      avatar: "assets/images/avtar/8.jpg",
      name: "Elana",
      surname: "John",
      mobile: "44545 54542",
      age: 30,
    },
    {
      id: 3,
      avatar: "assets/images/avtar/11.jpg",
      name: "Meryl",
      surname: "Streep",
      mobile: "84634 48455",
      age: 22,
    },
    {
      id: 4,
      avatar: "assets/images/avtar/16.jpg",
      name: "Emma",
      surname: "Stone",
      mobile: "68254 85542",
      age: 30,
    },
  ];
}
