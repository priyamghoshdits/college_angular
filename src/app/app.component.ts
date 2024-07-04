import { Component } from "@angular/core";
import {environment} from "../environments/environment";
import {HttpClient} from "@angular/common/http";
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  public BASE_API_URL = environment.BASE_API_URL;
  public FILE_URL = environment.FILE_URL;
  safeUrl: SafeResourceUrl;
  title = "COLLEGE MANAGEMENT SYSTEM";
  erpSettings: any;
  favicon_url = null;
  constructor(private http: HttpClient, private sanitizer: DomSanitizer) {
    this.http.get(this.BASE_API_URL + '/getErpSettings').subscribe((response: any) => {
      this.erpSettings = response.data;
      // @ts-ignore
      this.favicon_url = this.sanitizeUrl(this.FILE_URL + '/fav_icon/' + this.erpSettings.fav_icon);
      console.log(this.favicon_url);
    });
  }

  sanitizeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
