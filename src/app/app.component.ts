import { Component } from "@angular/core";
import {environment} from "../environments/environment";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  public BASE_API_URL = environment.BASE_API_URL;
  public FILE_URL = environment.FILE_URL;
  title = "COLLEGE MANAGEMENT SYSTEM";
  erpSettings: any;
  constructor(private http: HttpClient) {
    this.http.get(this.BASE_API_URL + '/getErpSettings').subscribe((response: any) => {
      this.erpSettings = response.data;
    });
  }
}
