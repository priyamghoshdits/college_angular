import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { SharedModule, HttpLoaderFactory } from "./shared/shared.module";
import { AppRoutingModule } from "./app-routing.module";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from "@angular/common/http";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./auth/login/login.component";
import { ToastrModule } from "ngx-toastr";
import {HashLocationStrategy, LocationStrategy} from "@angular/common";
import { DecimalPipe } from "@angular/common";
import {AuthInterceptorInterceptor} from './services/auth-interceptor.interceptor';
import "hammerjs";
import "mousetrap";
import {MatIconModule} from "@angular/material/icon";

// @ts-ignore
@NgModule({
  declarations: [AppComponent, LoginComponent],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        SharedModule,
        AppRoutingModule,
        HttpClientModule,
        ToastrModule.forRoot(),
        HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient],
            },
        }),
        MatIconModule,
    ],
  // providers: [ AdminGuard, CookieService, DecimalPipe],
  // providers: [
  //   {provide: LocationStrategy, useClass: HashLocationStrategy}
  // ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorInterceptor, multi: true},
    {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent],
})
export class AppModule {}
