import {Component} from "@angular/core";
import {environment} from "../environments/environment";
import {HttpClient} from "@angular/common/http";
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
import {ErpSettingService} from "./services/erp-setting.service";
import {NavigationStart, Router} from "@angular/router";
import {NavService} from "./shared/services/nav.service";


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

    constructor(private http: HttpClient, private sanitizer: DomSanitizer, private erpService: ErpSettingService
        , private router: Router, private navService: NavService) {
        // this.http.get(this.BASE_API_URL + '/getErpSettings').subscribe((response: any) => {
        //   this.erpSettings = response.data;
        //   console.log(response);

        //   // @ts-ignore
        //   // this.favicon_url = this.sanitizeUrl(this.FILE_URL + '/fav_icon/' + this.erpSettings.fav_icon);
        //   // console.log(this.favicon_url);
        // });

        // @ts-ignore
        this.router.events.subscribe((event: Event) => {
            if (event instanceof NavigationStart) {
                if (window.innerWidth < 991) {
                    this.navService.collapseSidebar = true;
                }
            }
        });

        this.erpService.erpSettingListener().subscribe((data: any) => {
            this.erpSettings = data;
        });

        this.erpSettings = this.erpService.getErpSetting();

    }

    sanitizeUrl(url: string): SafeResourceUrl {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }

}
