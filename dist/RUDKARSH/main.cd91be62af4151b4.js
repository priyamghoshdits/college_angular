"use strict";
(self["webpackChunkRUDKARSH"] = self["webpackChunkRUDKARSH"] || []).push([["main"],{

/***/ 23966:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth/login/login.component */ 87285);
/* harmony import */ var _shared_components_layout_content_layout_content_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/components/layout/content-layout/content-layout.component */ 5282);
/* harmony import */ var _shared_components_layout_full_layout_full_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/components/layout/full-layout/full-layout.component */ 549);
/* harmony import */ var _shared_routes_content_routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/routes/content-routes */ 78497);
/* harmony import */ var _shared_routes_full_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/routes/full.routes */ 42348);
/* harmony import */ var _shared_guard_admin_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/guard/admin.guard */ 18105);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 61699);









const routes = [{
  path: "",
  redirectTo: "/dashboard/default",
  pathMatch: "full"
}, {
  path: "auth/login",
  component: _auth_login_login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent
}, {
  path: "",
  component: _shared_components_layout_content_layout_content_layout_component__WEBPACK_IMPORTED_MODULE_1__.ContentLayoutComponent,
  canActivate: [_shared_guard_admin_guard__WEBPACK_IMPORTED_MODULE_5__.AdminGuard],
  children: _shared_routes_content_routes__WEBPACK_IMPORTED_MODULE_3__.content
}, {
  path: "",
  component: _shared_components_layout_full_layout_full_layout_component__WEBPACK_IMPORTED_MODULE_2__.FullLayoutComponent,
  canActivate: [_shared_guard_admin_guard__WEBPACK_IMPORTED_MODULE_5__.AdminGuard],
  children: _shared_routes_full_routes__WEBPACK_IMPORTED_MODULE_4__.full
}, {
  path: "**",
  redirectTo: ""
}];
class AppRoutingModule {
  static #_ = this.ɵfac = function AppRoutingModule_Factory(t) {
    return new (t || AppRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
    type: AppRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forRoot(routes, {
      preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_7__.PreloadAllModules,
      anchorScrolling: "enabled",
      scrollPositionRestoration: "enabled"
    }), _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule]
  });
})();

/***/ }),

/***/ 66401:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/components/loader/loader.component */ 99185);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 27947);



class AppComponent {
  constructor() {
    this.title = "RUDRAKSH";
  }
  static #_ = this.ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    decls: 2,
    vars: 0,
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-loader")(1, "router-outlet");
      }
    },
    dependencies: [_shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_0__.LoaderComponent, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 78629:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ 36480);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ 24987);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/shared.module */ 56208);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 23966);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ 21916);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 54860);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ 66401);
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/login/login.component */ 87285);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-toastr */ 57548);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _services_auth_interceptor_interceptor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/auth-interceptor.interceptor */ 82649);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! hammerjs */ 4700);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var mousetrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! mousetrap */ 83929);
/* harmony import */ var mousetrap__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(mousetrap__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ 86515);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 61699);


















// @ts-ignore
class AppModule {
  static #_ = this.ɵfac = function AppModule_Factory(t) {
    return new (t || AppModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent]
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
    providers: [{
      provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HTTP_INTERCEPTORS,
      useClass: _services_auth_interceptor_interceptor__WEBPACK_IMPORTED_MODULE_4__.AuthInterceptorInterceptor,
      multi: true
    }, {
      provide: _angular_common__WEBPACK_IMPORTED_MODULE_9__.LocationStrategy,
      useClass: _angular_common__WEBPACK_IMPORTED_MODULE_9__.HashLocationStrategy
    }],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__.BrowserAnimationsModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClientModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_13__.ToastrModule.forRoot(), _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClientModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslateModule.forRoot({
      loader: {
        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslateLoader,
        useFactory: _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.HttpLoaderFactory,
        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClient]
      }
    }), _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__.MatIconModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent, _auth_login_login_component__WEBPACK_IMPORTED_MODULE_3__.LoginComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__.BrowserAnimationsModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClientModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_13__.ToastrModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClientModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslateModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__.MatIconModule]
  });
})();

/***/ }),

/***/ 87285:
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginComponent: () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 20553);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ 27889);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 54860);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 86515);









function LoginComponent_form_12_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Email is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function LoginComponent_form_12_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Invalid Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function LoginComponent_form_12_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Password is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function LoginComponent_form_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form", 9)(1, "div", 10)(2, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, LoginComponent_form_12_div_5_Template, 2, 0, "div", 13)(6, LoginComponent_form_12_div_6_Template, 2, 0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 10)(8, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, LoginComponent_form_12_div_11_Template, 2, 0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Remember me");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LoginComponent_form_12_Template_button_click_16_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r5.forgotPassword());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Forgot Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 21)(19, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keyup.enter", function LoginComponent_form_12_Template_button_keyup_enter_19_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r7.login());
    })("click", function LoginComponent_form_12_Template_button_click_19_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r8.login());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r0.loginForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.loginForm.controls["email"].touched && (ctx_r0.loginForm.controls["email"].errors == null ? null : ctx_r0.loginForm.controls["email"].errors["required"]));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.loginForm.controls["email"].touched && (ctx_r0.loginForm.controls["email"].errors == null ? null : ctx_r0.loginForm.controls["email"].errors["email"]));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.loginForm.controls["password"].touched && (ctx_r0.loginForm.controls["password"].errors == null ? null : ctx_r0.loginForm.controls["password"].errors["required"]));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx_r0.loginForm.valid);
  }
}
function LoginComponent_form_20_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Email is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function LoginComponent_form_20_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Invalid Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function LoginComponent_form_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form", 9)(1, "div", 10)(2, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, LoginComponent_form_20_div_5_Template, 2, 0, "div", 13)(6, LoginComponent_form_20_div_6_Template, 2, 0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 21)(8, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keyup.enter", function LoginComponent_form_20_Template_button_keyup_enter_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r11.updatePassword());
    })("click", function LoginComponent_form_20_Template_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r13.updatePassword());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r1.forgotPasswordForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.forgotPasswordForm.controls["email"].touched && (ctx_r1.forgotPasswordForm.controls["email"].errors == null ? null : ctx_r1.forgotPasswordForm.controls["email"].errors["required"]));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.forgotPasswordForm.controls["email"].touched && (ctx_r1.forgotPasswordForm.controls["email"].errors == null ? null : ctx_r1.forgotPasswordForm.controls["email"].errors["email"]));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx_r1.forgotPasswordForm.valid);
  }
}
class LoginComponent {
  constructor(fb, router, http) {
    this.fb = fb;
    this.router = router;
    this.http = http;
    this.newUser = false;
    this.isForgotPassword = false;
    this.BASE_API_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.BASE_API_URL;
    this.loginForm = this.fb.group({
      email: ["admin@admin.com", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.email]],
      password: ["12345678", _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]
    });
    this.forgotPasswordForm = this.fb.group({
      email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.email]]
    });
  }
  ngOnInit() {
    const user = localStorage.getItem('user');
    if (!user) {
      this.router.navigate(["/"]);
    }
  }
  login() {
    const loginData = {
      "email": this.loginForm.value.email,
      "password": this.loginForm.value.password
    };
    this.http.post(this.BASE_API_URL + '/login', loginData).subscribe(response => {
      if (response.success == 1) {
        localStorage.setItem("user", JSON.stringify(response.data));
        // @ts-ignore
        this.router.navigate(["/dashboard/default"]);
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

  forgotPassword() {
    this.isForgotPassword = true;
  }
  updatePassword() {
    this.http.get(this.BASE_API_URL + '/forgotPassword/' + this.forgotPasswordForm.value.email).subscribe(response => {
      if (response.success == 1) {
        this.loginForm.reset();
        this.isForgotPassword = false;
        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
          position: 'center',
          icon: 'success',
          title: response.data,
          showConfirmButton: false,
          timer: 1000
        });
      }
    });
  }
  returnBack() {
    this.isForgotPassword = false;
  }
  loginFacebook() {}
  loginTwitter() {}
  loginGoogle() {}
  static #_ = this.ɵfac = function LoginComponent_Factory(t) {
    return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: LoginComponent,
    selectors: [["app-login"]],
    decls: 21,
    vars: 4,
    consts: [[1, "page-wrapper"], [1, "auth-bg"], [1, "authentication-box"], [1, "text-center"], ["src", "assets/images/RUDRAKASH-logo.png", "alt", ""], [1, "card", "mt-4"], [1, "card-body", 3, "hidden"], ["class", "theme-form", 3, "formGroup", 4, "ngIf"], [2, "cursor", "pointer", "float", "left", 3, "click"], [1, "theme-form", 3, "formGroup"], [1, "form-group"], [1, "col-form-label", "pt-0"], ["formControlName", "email", "type", "email", "required", "", 1, "form-control"], ["class", "text text-danger mt-1", 4, "ngIf"], [1, "col-form-label"], ["type", "password", "formControlName", "password", "required", "", 1, "form-control"], ["class", "text text-danger mtz-1", 4, "ngIf"], [1, "checkbox", "p-0"], ["id", "checkbox1", "type", "checkbox"], ["for", "checkbox1"], ["type", "button", 1, "btn", "btn-tertiary", 2, "float", "right", 3, "click"], [1, "form-group", "row", "mt-3", "mb-0"], ["type", "submit", 1, "btn", "btn-primary", "btn-block", "btn-lg", 3, "disabled", "keyup.enter", "click"], [1, "text", "text-danger", "mt-1"], [1, "text", "text-danger", "mtz-1"], [1, "btn", "btn-primary", "btn-block", "btn-lg", 3, "disabled", "keyup.enter", "click"]],
    template: function LoginComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 5)(6, "div", 6)(7, "div", 3)(8, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "LOGIN");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Enter your Username and Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, LoginComponent_form_12_Template, 22, 5, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 6)(14, "div", 3)(15, "h4")(16, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LoginComponent_Template_a_click_16_listener() {
          return ctx.returnBack();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "backspace");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Forgot Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, LoginComponent_form_20_Template, 11, 4, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", ctx.isForgotPassword);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.newUser);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", !ctx.isForgotPassword);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.newUser);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIcon],
    styles: [".loader--text[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 200%;\n  left: 0;\n  right: 0;\n  margin: auto;\n}\n\n.loader--text[_ngcontent-%COMP%]:after {\n  content: \"Loading\";\n  font-weight: bold;\n  animation-name: _ngcontent-%COMP%_loading-text;\n  animation-duration: 3s;\n  animation-iteration-count: infinite;\n}\n\n@keyframes _ngcontent-%COMP%_loader {\n  15% {\n    transform: translateX(0);\n  }\n  45% {\n    transform: translateX(230px);\n  }\n  65% {\n    transform: translateX(230px);\n  }\n  95% {\n    transform: translateX(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_loading-text {\n  0% {\n    content: \"Loading\";\n  }\n  25% {\n    content: \"Loading.\";\n  }\n  50% {\n    content: \"Loading..\";\n  }\n  75% {\n    content: \"Loading...\";\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUNBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQ0FBQTtBQUVGOztBQUNBO0VBQ0U7SUFDRSx3QkFBQTtFQUVGO0VBQUE7SUFDRSw0QkFBQTtFQUVGO0VBQUE7SUFDRSw0QkFBQTtFQUVGO0VBQUE7SUFDRSx3QkFBQTtFQUVGO0FBQ0Y7QUFBQTtFQUNFO0lBQ0Usa0JBQUE7RUFFRjtFQUFBO0lBQ0UsbUJBQUE7RUFFRjtFQUFBO0lBQ0Usb0JBQUE7RUFFRjtFQUFBO0lBQ0UscUJBQUE7RUFFRjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLmxvYWRlci0tdGV4dCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMjAwJTtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG4ubG9hZGVyLS10ZXh0OmFmdGVyIHtcclxuICBjb250ZW50OiBcIkxvYWRpbmdcIjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBhbmltYXRpb24tbmFtZTogbG9hZGluZy10ZXh0O1xyXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogM3M7XHJcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgbG9hZGVyIHtcclxuICAxNSUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG4gIH1cclxuICA0NSUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIzMHB4KTtcclxuICB9XHJcbiAgNjUlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMzBweCk7XHJcbiAgfVxyXG4gIDk1JSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbiAgfVxyXG59XHJcbkBrZXlmcmFtZXMgbG9hZGluZy10ZXh0IHtcclxuICAwJSB7XHJcbiAgICBjb250ZW50OiBcIkxvYWRpbmdcIjtcclxuICB9XHJcbiAgMjUlIHtcclxuICAgIGNvbnRlbnQ6IFwiTG9hZGluZy5cIjtcclxuICB9XHJcbiAgNTAlIHtcclxuICAgIGNvbnRlbnQ6IFwiTG9hZGluZy4uXCI7XHJcbiAgfVxyXG4gIDc1JSB7XHJcbiAgICBjb250ZW50OiBcIkxvYWRpbmcuLi5cIjtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 82649:
/*!**********************************************************!*\
  !*** ./src/app/services/auth-interceptor.interceptor.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthInterceptorInterceptor: () => (/* binding */ AuthInterceptorInterceptor)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 84980);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 33252);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 2389);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 27947);




class AuthInterceptorInterceptor {
  constructor(router) {
    this.router = router;
  }
  intercept(req, next) {
    // console.log(JSON.parse(localStorage.getItem('user')).token);
    if (localStorage.getItem('user')) {
      this.userData = JSON.parse(localStorage.getItem('user') || '{}');
    } else {
      this.userData = {
        id: 0,
        personName: 'No Person',
        _authKey: 'no key',
        personTypeId: 0
      };
    }
    // Clone the request to add the new header.
    const authReq = req.clone({
      headers: req.headers.set('Authorization', 'Bearer ' + this.userData.token)
    });
    // send the newly created request
    return next.handle(authReq).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.catchError)(x => this.handleAuthError(x)));
  }
  handleAuthError(err) {
    // handle your auth error or rethrow
    if (err.status === 401 || err.status === 403) {
      // navigate /delete cookies or whatever
      this.router.navigateByUrl('/auth/login');
      localStorage.removeItem('user');
      // this.router.navigate(['/auth']);
      // tslint:disable-next-line:max-line-length
      // if you've caught / handled the error, you don't want to rethrow it unless you also want downstream consumers to have to handle it as well.
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(err.message); // or EMPTY may be appropriate here
    }

    return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(err);
  }
  static #_ = this.ɵfac = function AuthInterceptorInterceptor_Factory(t) {
    return new (t || AuthInterceptorInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
    token: AuthInterceptorInterceptor,
    factory: AuthInterceptorInterceptor.ɵfac
  });
}

/***/ }),

/***/ 75731:
/*!********************************************!*\
  !*** ./src/app/services/common.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CommonService: () => (/* binding */ CommonService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 2389);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 13738);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 20553);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 54860);
/* harmony import */ var _error_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./error.service */ 68027);





class CommonService {
  constructor(http, errorService) {
    this.http = http;
    this.errorService = errorService;
    this.BASE_API_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.BASE_API_URL;
  }
  uploadProfilePicture(value) {
    return this.http.post(this.BASE_API_URL + '/uploadProfilePicSelf', value).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.errorService.serverError), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(response => {}));
  }
  checkId(id) {
    return this.http.get(this.BASE_API_URL + '/checkId/' + id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.errorService.serverError), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(response => {}));
  }
  static #_ = this.ɵfac = function CommonService_Factory(t) {
    return new (t || CommonService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_error_service__WEBPACK_IMPORTED_MODULE_1__.ErrorService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
    token: CommonService,
    factory: CommonService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 68027:
/*!*******************************************!*\
  !*** ./src/app/services/error.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ErrorService: () => (/* binding */ ErrorService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 33252);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 27947);



// @ts-ignore
class ErrorService {
  constructor(router) {
    this.router = router;
  }
  serverError(err) {
    // console.log('sever error:', err);  // debug
    if (err instanceof Response) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.throwError)('backend server error');
      // if you're using lite-server, use the following line
      // instead of the line above:
      // return Observable.throw(err.text() || 'backend server error');
    }

    if (err.status === 0) {
      // tslint:disable-next-line:label-position
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.throwError)({
        status: err.status,
        message: 'Backend Server is not Working',
        statusText: err.statusText
      });
    }
    if (err.status === 401) {
      // this.router.navigateByUrl('/auth/login');
      // tslint:disable-next-line:label-position
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.throwError)({
        status: err.status,
        message: 'Your are not authorised',
        statusText: err.statusText
      });
    }
    if (err.status === 500) {
      // tslint:disable-next-line:label-position
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.throwError)({
        status: err.status,
        message: 'Data saving error',
        statusText: err.statusText
      });
    }
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.throwError)(err);
  }
  handleError(errorResponse) {
    if (errorResponse.error.message.includes('1062')) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.throwError)('Record already exists');
    } else {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.throwError)(errorResponse.error.message);
    }
  }
  static #_ = this.ɵfac = function ErrorService_Factory(t) {
    return new (t || ErrorService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: ErrorService,
    factory: ErrorService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 15450:
/*!******************************************************************!*\
  !*** ./src/app/shared/components/bookmark/bookmark.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BookmarkComponent: () => (/* binding */ BookmarkComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _services_nav_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/nav.service */ 82484);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 76101);
/* harmony import */ var _feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../feather-icons/feather-icons.component */ 49177);







function BookmarkComponent_li_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li")(1, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "app-feather-icons", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("ngbTooltip", item_r2 == null ? null : item_r2.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", item_r2 == null ? null : item_r2.path);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", item_r2 == null ? null : item_r2.icon);
  }
}
function BookmarkComponent_div_9_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 15)(1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "app-feather-icons", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 18)(4, "div", 19)(5, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BookmarkComponent_div_9_div_1_Template_a_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r5.removeFix());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "span", 21)(8, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BookmarkComponent_div_9_div_1_Template_a_click_8_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);
      const item_r4 = restoredCtx.$implicit;
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r7.addToBookmark(item_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", item_r4.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", item_r4 == null ? null : item_r4.path);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r4 == null ? null : item_r4.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("starred", item_r4.bookmark);
  }
}
function BookmarkComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, BookmarkComponent_div_9_div_1_Template, 10, 5, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("is-open", ctx_r1.searchResult);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind3"](2, 3, ctx_r1.menuItems, 0, 8));
  }
}
const _c0 = () => ({
  standalone: true
});
class BookmarkComponent {
  constructor(navServices) {
    this.navServices = navServices;
    this.open = false;
    this.searchResult = false;
    this.searchResultEmpty = false;
    this.bookmarkItems = [];
  }
  ngOnInit() {
    this.navServices.items.subscribe(menuItems => {
      this.items = menuItems;
      this.items.filter(items => {
        if (items.bookmark) {
          this.bookmarkItems.push(items);
        }
      });
    });
  }
  openBookmarkSearch() {
    this.open = !this.open;
    this.removeFix();
  }
  searchTerm(term) {
    term ? this.addFix() : this.removeFix();
    if (!term) {
      this.open = false;
      return this.menuItems = [];
    }
    let items = [];
    term = term.toLowerCase();
    this.items.filter(menuItems => {
      if (menuItems.title.toLowerCase().includes(term) && menuItems.type === 'link') {
        items.push(menuItems);
      }
      if (!menuItems.children) return false;
      menuItems.children.filter(subItems => {
        if (subItems.title.toLowerCase().includes(term) && subItems.type === 'link') {
          subItems.icon = menuItems.icon;
          items.push(subItems);
        }
        if (!subItems.children) return false;
        subItems.children.filter(suSubItems => {
          if (suSubItems.title.toLowerCase().includes(term)) {
            suSubItems.icon = menuItems.icon;
            items.push(suSubItems);
          }
        });
        return;
      });
      this.checkSearchResultEmpty(items);
      this.menuItems = items;
      return;
    });
    return;
  }
  checkSearchResultEmpty(items) {
    if (!items.length) this.searchResultEmpty = true;else this.searchResultEmpty = false;
  }
  addFix() {
    this.searchResult = true;
    document.getElementById("canvas-bookmark").classList.add("offcanvas-bookmark");
  }
  removeFix() {
    this.searchResult = false;
    this.text = "";
    document.getElementById("canvas-bookmark").classList.remove("offcanvas-bookmark");
  }
  addToBookmark(items) {
    const index = this.bookmarkItems.indexOf(items);
    if (index === -1 && !items.bookmark) {
      items.bookmark = true;
      this.bookmarkItems.push(items);
      this.text = "";
    } else {
      this.bookmarkItems.splice(index, 1);
      items.bookmark = false;
    }
  }
  static #_ = this.ɵfac = function BookmarkComponent_Factory(t) {
    return new (t || BookmarkComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_nav_service__WEBPACK_IMPORTED_MODULE_0__.NavService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: BookmarkComponent,
    selectors: [["app-bookmark"]],
    decls: 14,
    vars: 10,
    consts: [[1, "bookmark", "pull-right"], [4, "ngFor", "ngForOf"], ["href", "javacript::void(0)", 3, "click"], [1, "bookmark-search", 3, "icon"], [1, "form-inline", "search-form", "bookmark-form"], [1, "form-group", "form-control-search"], ["type", "text", "placeholder", "Search..", 3, "ngModel", "ngModelOptions", "ngModelChange", "keyup"], ["class", "Typeahead-menu", "id", "boomark-search-outer", 3, "is-open", 4, "ngIf"], [1, "Typeahead-menu"], [1, "tt-dataset", "tt-dataset-0"], [1, "EmptyMessage"], ["placement", "top", 3, "routerLink", "ngbTooltip"], [3, "icon"], ["id", "boomark-search-outer", 1, "Typeahead-menu"], ["class", "ProfileCard u-cf", 4, "ngFor", "ngForOf"], [1, "ProfileCard", "u-cf"], [1, "ProfileCard-avatar"], [1, "header-search", 3, "icon"], [1, "ProfileCard-details"], [1, "ProfileCard-realName"], [1, "realname", 3, "routerLink", "click"], [1, "pull-right"], [1, "fa", "fa-star-o", "f-18", "mt-1"]],
    template: function BookmarkComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, BookmarkComponent_li_2_Template, 3, 3, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "li")(4, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BookmarkComponent_Template_a_click_4_listener() {
          return ctx.openBookmarkSearch();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "app-feather-icons", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "form", 4)(7, "div", 5)(8, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function BookmarkComponent_Template_input_ngModelChange_8_listener($event) {
          return ctx.text = $event;
        })("keyup", function BookmarkComponent_Template_input_keyup_8_listener() {
          return ctx.searchTerm(ctx.text);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, BookmarkComponent_div_9_Template, 3, 7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 8)(11, "div", 9)(12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, " Opps!! There are no result found. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.bookmarkItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", "star");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("open", ctx.open);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.text)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](9, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.menuItems == null ? null : ctx.menuItems.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("is-open", ctx.searchResultEmpty);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgForm, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbTooltip, _feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_1__.FeatherIconsComponent, _angular_common__WEBPACK_IMPORTED_MODULE_3__.SlicePipe],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 14414:
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/breadcrumb/breadcrumb.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BreadcrumbComponent: () => (/* binding */ BreadcrumbComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 74520);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 79736);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _bookmark_bookmark_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../bookmark/bookmark.component */ 15450);
/* harmony import */ var _feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../feather-icons/feather-icons.component */ 49177);








function BreadcrumbComponent_li_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.breadcrumbs == null ? null : ctx_r0.breadcrumbs.parentBreadcrumb);
  }
}
function BreadcrumbComponent_li_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx_r1.breadcrumbs == null ? null : ctx_r1.breadcrumbs.childBreadcrumb, " ");
  }
}
class BreadcrumbComponent {
  constructor(activatedRoute, router) {
    this.activatedRoute = activatedRoute;
    this.router = router;
    this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__.NavigationEnd)).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.map)(() => this.activatedRoute)).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.map)(route => {
      while (route.firstChild) {
        route = route.firstChild;
      }
      return route;
    })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(route => route.outlet === _angular_router__WEBPACK_IMPORTED_MODULE_4__.PRIMARY_OUTLET)).subscribe(route => {
      let snapshot = this.router.routerState.snapshot;
      let title = route.snapshot.data['title'];
      let parent = route.parent.snapshot.data['breadcrumb'];
      let child = route.snapshot.data['breadcrumb'];
      this.breadcrumbs = {};
      this.title = title;
      this.breadcrumbs = {
        "parentBreadcrumb": parent,
        "childBreadcrumb": child
      };
    });
  }
  ngOnInit() {}
  ngOnDestroy() {}
  static #_ = this.ɵfac = function BreadcrumbComponent_Factory(t) {
    return new (t || BreadcrumbComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: BreadcrumbComponent,
    selectors: [["app-breadcrumb"]],
    decls: 15,
    vars: 5,
    consts: [[1, "container-fluid"], [1, "page-header"], [1, "row"], [1, "col-lg-6"], [1, "page-header-left"], [1, "breadcrumb"], [1, "breadcrumb-item"], [3, "routerLink"], [3, "icon"], ["class", "breadcrumb-item", 4, "ngIf"], ["class", "breadcrumb-item active", 4, "ngIf"], [1, "breadcrumb-item", "active"]],
    template: function BreadcrumbComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "ol", 5)(8, "li", 6)(9, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "app-feather-icons", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, BreadcrumbComponent_li_11_Template, 2, 1, "li", 9)(12, BreadcrumbComponent_li_12_Template, 2, 1, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "app-bookmark");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", "/dashboard/default");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", "home");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.breadcrumbs == null ? null : ctx.breadcrumbs.parentBreadcrumb);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.breadcrumbs == null ? null : ctx.breadcrumbs.childBreadcrumb);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _bookmark_bookmark_component__WEBPACK_IMPORTED_MODULE_0__.BookmarkComponent, _feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_1__.FeatherIconsComponent],
    styles: [".ProfileCard-realName[_ngcontent-%COMP%]   .realname[_ngcontent-%COMP%] {\n  color: #949598 !important;\n}\n\n.offcanvas-bookmark.page-wrapper[_ngcontent-%COMP%]   .page-body-wrapper[_ngcontent-%COMP%]   .page-body[_ngcontent-%COMP%]   .bookmark[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n\n.bookmark[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #313131;\n}\n\ni.fa.fa-star-o.f-18.mt-1.starred[_ngcontent-%COMP%] {\n  color: orange;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvYnJlYWRjcnVtYi9icmVhZGNydW1iLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7QUFDSjs7QUFFQTtFQUNJLHFCQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0FBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyIuUHJvZmlsZUNhcmQtcmVhbE5hbWUgLnJlYWxuYW1lIHtcclxuICAgIGNvbG9yOiAjOTQ5NTk4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5vZmZjYW52YXMtYm9va21hcmsucGFnZS13cmFwcGVyIC5wYWdlLWJvZHktd3JhcHBlciAucGFnZS1ib2R5IC5ib29rbWFyayB1bCBsaSBhIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLmJvb2ttYXJrIHVsIGxpIGEge1xyXG4gICAgY29sb3I6ICMzMTMxMzEgO1xyXG59XHJcblxyXG5pLmZhLmZhLXN0YXItby5mLTE4Lm10LTEuc3RhcnJlZCB7XHJcbiAgICBjb2xvcjogb3JhbmdlO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 40155:
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/customizer/customizer.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomizerComponent: () => (/* binding */ CustomizerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _services_customizer_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/customizer.service */ 33844);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 76101);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ 57548);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 26575);





function CustomizerComponent_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 91)(1, "h5", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Customizer configuration");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CustomizerComponent_ng_template_18_Template_button_click_3_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
      const modal_r2 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](modal_r2.dismiss("Cross click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 94)(5, "div", 95)(6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "To replace our design with your desired theme. Please do configuration as mention ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p")(9, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " Path : shared > data > config > config.ts ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div")(12, "pre")(13, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "\n                  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "button", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CustomizerComponent_ng_template_18_Template_button_click_16_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r5.copyText(ctx_r5.customize.data));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Copy Json");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolateV"](["\nexport class ConfigDB {\n   static data = {\n   settings: {\n   layout_type: '", ctx_r0.customize.data.settings.layout_type, "',\n   sidebar: {\n      type: '", ctx_r0.customize.data.settings.sidebar.type, "',\n      body_type: '", ctx_r0.customize.data.settings.sidebar.body_type, "'\n   },\n   sidebar_setting: '", ctx_r0.customize.data.settings.sidebar_setting, "',\n   sidebar_backround: '", ctx_r0.customize.data.settings.sidebar_backround, "'\n},\ncolor: {\n   layout_version: '", ctx_r0.customize.data.color.layout_version, "',\n   color: '", ctx_r0.customize.data.color.color, "',\n   primary_color: '", ctx_r0.customize.data.color.primary_color, "',\n   secondary_color: '", ctx_r0.customize.data.color.secondary_color, "',\n   mix_layout: '", ctx_r0.customize.data.color.mix_layout, "'\n},\nrouter_animation: 'fadeIn'\n}\n}\n"]);
  }
}
const _c0 = a0 => ({
  "open": a0
});
const _c1 = a0 => ({
  "active show": a0
});
const _c2 = a0 => ({
  "active": a0
});
class CustomizerComponent {
  constructor(customize, modalService, toastrService) {
    this.customize = customize;
    this.modalService = modalService;
    this.toastrService = toastrService;
    this.sidebarSetting = 'color';
    this.layoutType = 'ltr';
    this.sidebarType = 'default';
    this.customize.data.color.layout_version = localStorage.getItem("layoutVersion");
    this.customize.data.color.color = localStorage.getItem("color");
    this.customize.data.color.primary_color = localStorage.getItem("primary_color");
    this.customize.data.color.secondary_color = localStorage.getItem("secondary_color");
  }
  // Open customizer
  openCustomizerSetting(val) {
    this.customizer = val;
  }
  // Sidebar customizer Settings
  customizerSetting(val) {
    this.sidebarSetting = val;
  }
  // Customize Layout Type
  customizeLayoutType(val) {
    this.customize.setLayoutType(val);
    this.layoutType = val;
  }
  // Customize Sidebar Type
  customizeSidebarType(val) {
    if (val == 'default') {
      this.customize.data.settings.sidebar.type = 'default';
      this.customize.data.settings.sidebar.body_type = 'default';
    } else if (val == 'compact') {
      this.customize.data.settings.sidebar.type = 'compact-wrapper';
      this.customize.data.settings.sidebar.body_type = 'sidebar-icon';
    } else if (val == 'compact-icon') {
      this.customize.data.settings.sidebar.type = 'compact-page';
      this.customize.data.settings.sidebar.body_type = 'sidebar-hover';
    }
    this.sidebarType = val;
  }
  // Customize Sidebar Setting
  customizeSidebarSetting(val) {
    this.customize.data.settings.sidebar_setting = val;
  }
  // Customize Sidebar Backround
  customizeSidebarBackround(val) {
    this.customize.data.settings.sidebar_backround = val;
  }
  // Customize Mix Layout
  customizeMixLayout(val) {
    this.customize.setLayout(val);
  }
  // Customize Light Color
  customizeLightColorScheme(val) {
    this.customize.setColorLightScheme(val);
  }
  // Customize Dark Color
  customizeDarkColorScheme(val) {
    this.customize.setColorDarkScheme(val);
  }
  //Display modal for copy config
  copyConfig(popup, data) {
    this.modalService.open(popup, {
      backdropClass: 'dark-modal',
      centered: true
    });
    data = this.customize.data;
  }
  //Copy config
  copyText(data) {
    let selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = JSON.stringify(data);
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
    this.toastrService.show('<p class="mb-0 mt-1">Code Copied to clipboard</p>', '', {
      closeButton: true,
      enableHtml: true,
      positionClass: 'toast-bottom-right'
    });
  }
  ngOnInit() {}
  static #_ = this.ɵfac = function CustomizerComponent_Factory(t) {
    return new (t || CustomizerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_customizer_service__WEBPACK_IMPORTED_MODULE_0__.CustomizerService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__.ToastrService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: CustomizerComponent,
    selectors: [["app-customizer"]],
    decls: 244,
    vars: 60,
    consts: [["id", "inner-customizer", 1, "customizer-links", 3, "ngClass"], ["id", "c-pills-tab", "role", "tablist", "aria-orientation", "vertical", 1, "nav", "flex-column", "nac-pills"], ["href", "javascript:void(0)", "id", "c-pills-home-tab", 1, "nav-link", 3, "ngClass", "click"], [1, "settings"], [1, "icofont", "icofont-ui-settings"], ["href", "javascript:void(0)", "id", "c-pills-profile-tab", 1, "nav-link", 3, "ngClass", "click"], [1, "settings", "color-settings"], [1, "icofont", "icofont-color-bucket"], [1, "customizer-contain", 3, "ngClass"], ["id", "c-pills-tabContent", 1, "tab-content"], [1, "customizer-header"], [1, "icofont-close", "icon-close", 3, "click"], [1, "mb-0"], [1, "btn", "btn-primary", "plus-popup", "mt-2", 3, "click"], ["popup", ""], [1, "customizer-body", "custom-scrollbar"], ["id", "c-pills-home", "role", "tabpanel", "aria-labelledby", "c-pills-home-tab", 1, "tab-pane", "fade", 3, "ngClass"], [1, "main-layout", "layout-grid"], ["data-attr", "ltr", 3, "ngClass", "click"], [1, "header", "bg-light"], [1, "body"], [1, "bg-dark", "sidebar"], [1, "bg-light", "body"], [1, "badge", "badge-dark"], ["data-attr", "rtl", 3, "ngClass", "click"], [1, ""], [1, "sidebar-type", "layout-grid"], ["data-attr", "normal-sidebar", 3, "ngClass", "click"], ["data-attr", "compact-sidebar", 3, "ngClass", "click"], [1, "bg-dark", "sidebar", "compact"], ["data-attr", "compact-icon-sidebar", 3, "ngClass", "click"], [1, "bg-dark", "sidebar", "compact-icon"], [1, "sidebar-setting", "layout-grid"], ["data-attr", "default-sidebar", 3, "ngClass", "click"], [1, "body", "bg-light"], ["data-attr", "border-sidebar", 3, "ngClass", "click"], ["data-attr", "iconcolor-sidebar", 3, "ngClass", "click"], ["id", "c-pills-profile", "role", "tabpanel", "aria-labelledby", "c-pills-profile-tab", 1, "tab-pane", "fade", 3, "ngClass"], [1, "layout-grid", "customizer-color"], ["data-attr", "light-1", "data-primary", "#4466f2", "data-secondary", "#1ea6ec", 1, "color-layout", 3, "click"], ["data-attr", "light-2", "data-primary", "#0288d1", "data-secondary", "#26c6da", 1, "color-layout", 3, "click"], ["data-attr", "light-3", "data-primary", "#8e24aa", "data-secondary", "#ff6e40", 1, "color-layout", 3, "click"], ["data-attr", "light-4", "data-primary", "#4c2fbf", "data-secondary", "#2e9de4", 1, "color-layout", 3, "click"], ["data-attr", "light-5", "data-primary", "#7c4dff", "data-secondary", "#7b1fa2", 1, "color-layout", 3, "click"], ["data-attr", "light-6", "data-primary", "#3949ab", "data-secondary", "#4fc3f7", 1, "color-layout", 3, "click"], [1, "layout-grid", "customizer-color", "dark"], ["data-attr", "dark-1", "data-primary", "#4466f2", "data-secondary", "#1ea6ec", 1, "color-layout", 3, "click"], ["data-attr", "dark-2", "data-primary", "#0288d1", "data-secondary", "#26c6da", 1, "color-layout", 3, "click"], ["data-attr", "dark-3", "data-primary", "#8e24aa", "data-secondary", "#ff6e40", 1, "color-layout", 3, "click"], ["data-attr", "dark-4", "data-primary", "#4c2fbf", "data-secondary", "#2e9de4", 1, "color-layout", 3, "click"], ["data-attr", "dark-5", "data-primary", "#7c4dff", "data-secondary", "#7b1fa2", 1, "color-layout", 3, "click"], ["data-attr", "dark-6", "data-primary", "#3949ab", "data-secondary", "#4fc3f7", 1, "color-layout", 3, "click"], [1, "layout-grid", "customizer-mix"], ["data-attr", "light-only", 1, "color-layout", 3, "click"], [1, "bg-light", "sidebar"], ["data-attr", "", 1, "color-layout", 3, "click"], ["data-attr", "dark-body-only", 1, "color-layout", 3, "click"], [1, "bg-dark", "body"], ["data-attr", "dark-sidebar-body-mix", 1, "color-layout", 3, "click"], ["data-attr", "dark-header-sidebar-mix", 1, "color-layout", 3, "click"], [1, "header", "bg-dark"], ["data-attr", "dark-only", 1, "color-layout", 3, "click"], ["id", "pills-tab", "role", "tablist", 1, "nav", "nac-pills"], [1, "nav-item"], ["href", "javascript:void(0)", "id", "pills-home-tab", 1, "nav-link", 3, "ngClass", "click"], ["href", "javascript:void(0)", "id", "pills-profile-tab", 1, "nav-link", 3, "ngClass", "click"], ["href", "javascript:void(0)", "id", "pills-contact-tab", 1, "nav-link", 3, "ngClass", "click"], ["id", "pills-tabContent", 1, "tab-content", "sidebar-main-bg-setting"], ["id", "pills-home", "role", "tabpanel", "aria-labelledby", "pills-home-tab", 1, "tab-pane", "fade", 3, "ngClass"], [1, "sidebar-bg-settings"], ["data-attr", "dark-sidebar", 1, "bg-dark", 3, "click"], ["data-attr", "light-sidebar", 1, "bg-white", 3, "click"], ["data-attr", "color1-sidebar", 1, "bg-color1", 3, "click"], ["data-attr", "color2-sidebar", 1, "bg-color2", 3, "click"], ["data-attr", "color3-sidebar", 1, "bg-color3", 3, "click"], ["data-attr", "color4-sidebar", 1, "bg-color4", 3, "click"], ["data-attr", "color5-sidebar", 1, "bg-color5", 3, "click"], ["id", "pills-profile", "role", "tabpanel", "aria-labelledby", "pills-profile-tab", 1, "tab-pane", "fade", 3, "ngClass"], ["data-attr", "sidebar-pattern1", 1, "bg-pattern1", 3, "click"], ["data-attr", "sidebar-pattern2", 1, "bg-pattern2", 3, "click"], ["data-attr", "sidebar-pattern3", 1, "bg-pattern3", 3, "click"], ["data-attr", "sidebar-pattern4", 1, "bg-pattern4", 3, "click"], ["data-attr", "sidebar-pattern5", 1, "bg-pattern5", 3, "click"], ["data-attr", "sidebar-pattern6", 1, "bg-pattern6", 3, "click"], ["id", "pills-contact", "role", "tabpanel", "aria-labelledby", "pills-contact-tab", 1, "tab-pane", "fade", 3, "ngClass"], ["data-attr", "sidebar-img1", 1, "bg-img1", 3, "click"], ["data-attr", "sidebar-img2", 1, "bg-img2", 3, "click"], ["data-attr", "sidebar-img3", 1, "bg-img3", 3, "click"], ["data-attr", "sidebar-img4", 1, "bg-img4", 3, "click"], ["data-attr", "sidebar-img5", 1, "bg-img5", 3, "click"], ["data-attr", "sidebar-img6", 1, "bg-img6", 3, "click"], [1, "modal-header", "modal-copy-header"], [1, "headerTitle", "mb-0"], ["type", "button", "aria-label", "Close", 1, "btn-close", 3, "click"], [1, "modal-body"], [1, "modal-header", "config-popup"], [1, "btn", "btn-primary", "mt-2", 3, "click"]],
    template: function CustomizerComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CustomizerComponent_Template_a_click_2_listener() {
          return ctx.openCustomizerSetting("settings");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CustomizerComponent_Template_a_click_5_listener() {
          return ctx.openCustomizerSetting("color");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 8)(9, "div", 9)(10, "div", 10)(11, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CustomizerComponent_Template_i_click_11_listener() {
          return ctx.customizer = "";
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Customizer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Customize & Preview Real Time");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CustomizerComponent_Template_button_click_16_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](19);
          return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.copyConfig(_r1, ctx.data));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Configuration");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, CustomizerComponent_ng_template_18_Template, 18, 10, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 15)(21, "div", 16)(22, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Layout Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "ul", 17)(25, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CustomizerComponent_Template_li_click_25_listener() {
          return ctx.customizeLayoutType("ltr");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 19)(27, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "li")(29, "li")(30, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 20)(32, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "li", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "li", 22)(35, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "LTR Layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "li", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CustomizerComponent_Template_li_click_37_listener() {
          return ctx.customizeLayoutType("rtl");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 19)(39, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "li")(41, "li")(42, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 20)(44, "ul")(45, "li", 22)(46, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "RTL Layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](48, "li", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "h6", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Sidebar Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "ul", 26)(52, "li", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CustomizerComponent_Template_li_click_52_listener() {
          return ctx.customizeSidebarType("default");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 19)(54, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](55, "li")(56, "li")(57, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "div", 20)(59, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](60, "li", 21)(61, "li", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "li", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CustomizerComponent_Template_li_click_62_listener() {
          return ctx.customizeSidebarType("compact");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "div", 19)(64, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](65, "li")(66, "li")(67, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "div", 20)(69, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](70, "li", 29)(71, "li", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "li", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CustomizerComponent_Template_li_click_72_listener() {
          return ctx.customizeSidebarType("compact-icon");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "div", 19)(74, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](75, "li")(76, "li")(77, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "div", 20)(79, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](80, "li", 31)(81, "li", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "h6", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](83, "Sidebar settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "ul", 32)(85, "li", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CustomizerComponent_Template_li_click_85_listener() {
          return ctx.customizeSidebarSetting("default-sidebar");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "div", 19)(87, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](88, "li")(89, "li")(90, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "div", 34)(92, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](93, "Default");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "li", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CustomizerComponent_Template_li_click_94_listener() {
          return ctx.customizeSidebarSetting("border-sidebar");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "div", 19)(96, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](97, "li")(98, "li")(99, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "div", 34)(101, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](102, "Border");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "li", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CustomizerComponent_Template_li_click_103_listener() {
          return ctx.customizeSidebarSetting("iconcolor-sidebar");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "div", 19)(105, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](106, "li")(107, "li")(108, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "div", 34)(110, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](111, "icon Color");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "div", 37)(113, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](114, "Light layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "ul", 38)(116, "li", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CustomizerComponent_Template_li_click_116_listener() {
          return ctx.customizeLightColorScheme("color-1");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](117, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](118, "li", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CustomizerComponent_Template_li_click_118_listener() {
          return ctx.customizeLightColorScheme("color-2");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](119, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](120, "li", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CustomizerComponent_Template_li_click_120_listener() {
          return ctx.customizeLightColorScheme("color-3");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](121, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "li", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CustomizerComponent_Template_li_click_122_listener() {
          return ctx.customizeLightColorScheme("color-4");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](123, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](124, "li", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CustomizerComponent_Template_li_click_124_listener() {
          return ctx.customizeLightColorScheme("color-5");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](125, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](126, "li", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CustomizerComponent_Template_li_click_126_listener() {
          return ctx.customizeLightColorScheme("color-6");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](127, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](128, "h6", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](129, "Dark Layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](130, "ul", 45)(131, "li", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CustomizerComponent_Template_li_click_131_listener() {
          return ctx.customizeDarkColorScheme("color-1");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](132, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](133, "li", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CustomizerComponent_Template_li_click_133_listener() {
          return ctx.customizeDarkColorScheme("color-2");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](134, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](135, "li", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CustomizerComponent_Template_li_click_135_listener() {
          return ctx.customizeDarkColorScheme("color-3");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](136, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](137, "li", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CustomizerComponent_Template_li_click_137_listener() {
          return ctx.customizeDarkColorScheme("color-4");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](138, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](139, "li", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CustomizerComponent_Template_li_click_139_listener() {
          return ctx.customizeDarkColorScheme("color-5");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](140, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](141, "li", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CustomizerComponent_Template_li_click_141_listener() {
          return ctx.customizeDarkColorScheme("color-6");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](142, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](143, "h6", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](144, "Mix Layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](145, "ul", 52)(146, "li", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CustomizerComponent_Template_li_click_146_listener() {
          return ctx.customizeMixLayout("light-only");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](147, "div", 19)(148, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](149, "li")(150, "li")(151, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](152, "div", 20)(153, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](154, "li", 54)(155, "li", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](156, "li", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CustomizerComponent_Template_li_click_156_listener() {
          return ctx.customizeMixLayout("default");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](157, "div", 19)(158, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](159, "li")(160, "li")(161, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](162, "div", 20)(163, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](164, "li", 21)(165, "li", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](166, "li", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CustomizerComponent_Template_li_click_166_listener() {
          return ctx.customizeMixLayout("dark-body-only");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](167, "div", 19)(168, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](169, "li")(170, "li")(171, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](172, "div", 20)(173, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](174, "li", 54)(175, "li", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](176, "li", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CustomizerComponent_Template_li_click_176_listener() {
          return ctx.customizeMixLayout("dark-sidebar-body-mix");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](177, "div", 19)(178, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](179, "li")(180, "li")(181, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](182, "div", 20)(183, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](184, "li", 21)(185, "li", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](186, "li", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CustomizerComponent_Template_li_click_186_listener() {
          return ctx.customizeMixLayout("dark-header-sidebar-mix");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](187, "div", 60)(188, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](189, "li")(190, "li")(191, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](192, "div", 20)(193, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](194, "li", 21)(195, "li", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](196, "li", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CustomizerComponent_Template_li_click_196_listener() {
          return ctx.customizeMixLayout("dark-only");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](197, "div", 60)(198, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](199, "li")(200, "li")(201, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](202, "div", 20)(203, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](204, "li", 21)(205, "li", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](206, "h6", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](207, "Sidebar background setting");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](208, "ul", 62)(209, "li", 63)(210, "a", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CustomizerComponent_Template_a_click_210_listener() {
          return ctx.customizerSetting("color");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](211, "Color");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](212, "li", 63)(213, "a", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CustomizerComponent_Template_a_click_213_listener() {
          return ctx.customizerSetting("pattern");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](214, "Pattern");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](215, "li", 63)(216, "a", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CustomizerComponent_Template_a_click_216_listener() {
          return ctx.customizerSetting("image");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](217, "image");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](218, "div", 67)(219, "div", 68)(220, "ul", 69)(221, "li", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CustomizerComponent_Template_li_click_221_listener() {
          return ctx.customizeSidebarBackround("dark-sidebar");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](222, "li", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CustomizerComponent_Template_li_click_222_listener() {
          return ctx.customizeSidebarBackround("light-sidebar");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](223, "li", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CustomizerComponent_Template_li_click_223_listener() {
          return ctx.customizeSidebarBackround("color1-sidebar");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](224, "li", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CustomizerComponent_Template_li_click_224_listener() {
          return ctx.customizeSidebarBackround("color2-sidebar");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](225, "li", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CustomizerComponent_Template_li_click_225_listener() {
          return ctx.customizeSidebarBackround("color3-sidebar");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](226, "li", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CustomizerComponent_Template_li_click_226_listener() {
          return ctx.customizeSidebarBackround("color4-sidebar");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](227, "li", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CustomizerComponent_Template_li_click_227_listener() {
          return ctx.customizeSidebarBackround("color5-sidebar");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](228, "div", 77)(229, "ul", 69)(230, "li", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CustomizerComponent_Template_li_click_230_listener() {
          return ctx.customizeSidebarBackround("sidebar-pattern1");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](231, "li", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CustomizerComponent_Template_li_click_231_listener() {
          return ctx.customizeSidebarBackround("sidebar-pattern2");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](232, "li", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CustomizerComponent_Template_li_click_232_listener() {
          return ctx.customizeSidebarBackround("sidebar-pattern3");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](233, "li", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CustomizerComponent_Template_li_click_233_listener() {
          return ctx.customizeSidebarBackround("sidebar-pattern4");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](234, "li", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CustomizerComponent_Template_li_click_234_listener() {
          return ctx.customizeSidebarBackround("sidebar-pattern5");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](235, "li", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CustomizerComponent_Template_li_click_235_listener() {
          return ctx.customizeSidebarBackround("sidebar-pattern6");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](236, "div", 84)(237, "ul", 69)(238, "li", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CustomizerComponent_Template_li_click_238_listener() {
          return ctx.customizeSidebarBackround("sidebar-img1");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](239, "li", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CustomizerComponent_Template_li_click_239_listener() {
          return ctx.customizeSidebarBackround("sidebar-img2");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](240, "li", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CustomizerComponent_Template_li_click_240_listener() {
          return ctx.customizeSidebarBackround("sidebar-img3");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](241, "li", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CustomizerComponent_Template_li_click_241_listener() {
          return ctx.customizeSidebarBackround("sidebar-img4");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](242, "li", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CustomizerComponent_Template_li_click_242_listener() {
          return ctx.customizeSidebarBackround("sidebar-img5");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](243, "li", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CustomizerComponent_Template_li_click_243_listener() {
          return ctx.customizeSidebarBackround("sidebar-img6");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](20, _c0, ctx.customizer));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](22, _c1, ctx.customizer == "settings"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](24, _c1, ctx.customizer == "color"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](26, _c0, ctx.customizer));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](28, _c1, ctx.customizer == "settings"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](30, _c2, ctx.layoutType == "ltr"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](32, _c2, ctx.layoutType == "rtl"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](34, _c2, ctx.sidebarType == "default"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](36, _c2, ctx.sidebarType == "compact"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](38, _c2, ctx.sidebarType == "compact-icon"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](40, _c2, ctx.customize.data.settings.sidebar_setting == "default-sidebar"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](42, _c2, ctx.customize.data.settings.sidebar_setting == "border-sidebar"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](44, _c2, ctx.customize.data.settings.sidebar_setting == "iconcolor-sidebar"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](46, _c1, ctx.customizer == "color"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](98);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](48, _c1, ctx.sidebarSetting == "color"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](50, _c1, ctx.sidebarSetting == "pattern"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](52, _c1, ctx.sidebarSetting == "image"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](54, _c1, ctx.sidebarSetting == "color"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](56, _c1, ctx.sidebarSetting == "pattern"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](58, _c1, ctx.sidebarSetting == "image"));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass],
    styles: [".config-popup[_ngcontent-%COMP%] {\n  display: block;\n  border-bottom: none;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvY3VzdG9taXplci9jdXN0b21pemVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtFQUNBLG1CQUFBO0FBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyIuY29uZmlnLXBvcHVwIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 49177:
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/feather-icons/feather-icons.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FeatherIconsComponent: () => (/* binding */ FeatherIconsComponent)
/* harmony export */ });
/* harmony import */ var feather_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! feather-icons */ 89029);
/* harmony import */ var feather_icons__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(feather_icons__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);


class FeatherIconsComponent {
  constructor() {}
  ngOnInit() {
    setTimeout(() => {
      feather_icons__WEBPACK_IMPORTED_MODULE_0__.replace();
    });
  }
  static #_ = this.ɵfac = function FeatherIconsComponent_Factory(t) {
    return new (t || FeatherIconsComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: FeatherIconsComponent,
    selectors: [["app-feather-icons"]],
    inputs: {
      icon: "icon"
    },
    decls: 1,
    vars: 1,
    template: function FeatherIconsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i");
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("data-feather", ctx.icon);
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 68014:
/*!**************************************************************!*\
  !*** ./src/app/shared/components/footer/footer.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FooterComponent: () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);

class FooterComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function FooterComponent_Factory(t) {
    return new (t || FooterComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: FooterComponent,
    selectors: [["app-footer"]],
    decls: 9,
    vars: 0,
    consts: [[1, "container-fluid"], [1, "row"], [1, "col-md-6", "footer-copyright"], [1, "mb-0"], [1, "col-md-6"], [1, "pull-right", "mb-0"], [1, "fa", "fa-heart"]],
    template: function FooterComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Copyright 2018 \u00A9 RUDRAKASH All rights reserved.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4)(6, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Hand crafted & made with");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 10074:
/*!**************************************************************!*\
  !*** ./src/app/shared/components/header/header.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeaderComponent: () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../environments/environment */ 20553);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ 27889);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_nav_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/nav.service */ 82484);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 54860);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 76101);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 21916);
/* harmony import */ var _feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../feather-icons/feather-icons.component */ 49177);














function HeaderComponent_div_19_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 60)(1, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "app-feather-icons", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 63)(4, "div", 64)(5, "a", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HeaderComponent_div_19_div_1_Template_a_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r5.removeFix());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const menuItem_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", menuItem_r4.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", menuItem_r4 == null ? null : menuItem_r4.path);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](menuItem_r4 == null ? null : menuItem_r4.title);
  }
}
function HeaderComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, HeaderComponent_div_19_div_1_Template, 7, 3, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("is-open", ctx_r0.searchResult);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind3"](2, 3, ctx_r0.menuItems, 0, 8));
  }
}
function HeaderComponent_ng_template_103_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 66)(1, "h4", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Modal title");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "button", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HeaderComponent_ng_template_103_Template_button_click_3_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r9);
      const modal_r7 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](modal_r7.dismiss("Cross click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "i", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 70)(6, "form", 71)(7, "div", 72)(8, "div", 73)(9, "label", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "New Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "input", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 72)(13, "div", 73)(14, "label", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Confirm Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](16, "input", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 77)(18, "button", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HeaderComponent_ng_template_103_Template_button_click_18_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r9);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r10.updatePassword());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx_r1.passwordResetForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx_r1.passwordResetForm.valid);
  }
}
const _c0 = a0 => ({
  open: a0
});
const _c1 = () => ({
  standalone: true
});
var body = document.getElementsByTagName("body")[0];
class HeaderComponent {
  constructor(navServices, router, http, config, modalService, document, translate) {
    this.navServices = navServices;
    this.router = router;
    this.http = http;
    this.modalService = modalService;
    this.document = document;
    this.translate = translate;
    this.BASE_API_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.BASE_API_URL;
    this.searchResult = false;
    this.searchResultEmpty = false;
    this.openNav = false;
    this.right_sidebar = false;
    this.isOpenMobile = false;
    this.rightSidebarEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
    this.passwordResetForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroup({
      // old_password: new FormControl(null, [Validators.required]),
      new_password: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]),
      confirm_password: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required])
    });
  }
  ngOnDestroy() {
    this.removeFix();
  }
  right_side_bar() {
    this.right_sidebar = !this.right_sidebar;
    this.rightSidebarEvent.emit(this.right_sidebar);
  }
  collapseSidebar() {
    this.navServices.collapseSidebar = !this.navServices.collapseSidebar;
  }
  openMobileNav() {
    this.openNav = !this.openNav;
  }
  changeLanguage(lang) {
    this.translate.use(lang);
  }
  searchTerm(term) {
    term ? this.addFix() : this.removeFix();
    if (!term) return this.menuItems = [];
    let items = [];
    term = term.toLowerCase();
    this.items.filter(menuItems => {
      if (menuItems.title.toLowerCase().includes(term) && menuItems.type === 'link') {
        items.push(menuItems);
      }
      if (!menuItems.children) return false;
      menuItems.children.filter(subItems => {
        if (subItems.title.toLowerCase().includes(term) && subItems.type === 'link') {
          subItems.icon = menuItems.icon;
          items.push(subItems);
        }
        if (!subItems.children) return false;
        subItems.children.filter(suSubItems => {
          if (suSubItems.title.toLowerCase().includes(term)) {
            suSubItems.icon = menuItems.icon;
            items.push(suSubItems);
          }
        });
        return;
      });
      this.checkSearchResultEmpty(items);
      this.menuItems = items;
      return;
    });
    return;
  }
  checkSearchResultEmpty(items) {
    if (!items.length) this.searchResultEmpty = true;else this.searchResultEmpty = false;
  }
  addFix() {
    this.searchResult = true;
    body.classList.add("offcanvas");
  }
  removeFix() {
    this.searchResult = false;
    body.classList.remove("offcanvas");
    this.text = "";
  }
  ngOnInit() {
    this.elem = document.documentElement;
    this.navServices.items.subscribe(menuItems => {
      this.items = menuItems;
    });
  }
  SignOut() {
    this.http.get(this.BASE_API_URL + '/logout').subscribe(response => {
      if (response.success == 1) {
        localStorage.removeItem('user');
        this.router.navigate(["/auth/login"]);
        window.location.reload();
      }
    });
  }
  toggleFullScreen() {
    this.navServices.fullScreen = !this.navServices.fullScreen;
    if (this.navServices.fullScreen) {
      if (this.elem.requestFullscreen) {
        this.elem.requestFullscreen();
      } else if (this.elem.mozRequestFullScreen) {
        /* Firefox */
        this.elem.mozRequestFullScreen();
      } else if (this.elem.webkitRequestFullscreen) {
        /* Chrome, Safari and Opera */
        this.elem.webkitRequestFullscreen();
      } else if (this.elem.msRequestFullscreen) {
        /* IE/Edge */
        this.elem.msRequestFullscreen();
      }
    } else {
      if (!this.document.exitFullscreen) {
        this.document.exitFullscreen();
      } else if (this.document.mozCancelFullScreen) {
        /* Firefox */
        this.document.mozCancelFullScreen();
      } else if (this.document.webkitExitFullscreen) {
        /* Chrome, Safari and Opera */
        this.document.webkitExitFullscreen();
      } else if (this.document.msExitFullscreen) {
        /* IE/Edge */
        this.document.msExitFullscreen();
      }
    }
  }
  openSm(content) {
    this.modalService.open(content, {
      size: 'md'
    });
  }
  updatePassword() {
    if (this.passwordResetForm.value.new_password != this.passwordResetForm.value.confirm_password) {
      sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
        position: 'center',
        icon: 'error',
        title: "Confirm password not matched",
        showConfirmButton: false,
        timer: 1000
      });
      return;
    }
    this.http.post(this.BASE_API_URL + '/resetPassword', this.passwordResetForm.value).subscribe(response => {
      if (response.success == 1) {
        this.passwordResetForm.reset();
        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
          position: 'center',
          icon: 'success',
          title: "Password Updated",
          showConfirmButton: false,
          timer: 1000
        });
      }
    });
  }
  static #_ = this.ɵfac = function HeaderComponent_Factory(t) {
    return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_nav_service__WEBPACK_IMPORTED_MODULE_2__.NavService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbModalConfig), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_9__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: HeaderComponent,
    selectors: [["app-header"]],
    outputs: {
      rightSidebarEvent: "rightSidebarEvent"
    },
    decls: 132,
    vars: 28,
    consts: [["id", "page-main-header", 1, "page-main-header", 3, "ngClass"], [1, "main-header-right", "row"], [1, "main-header-left", "col-auto", "p-0", "d-lg-none"], [1, "logo-wrapper"], ["href", "javascript:void(0)"], ["src", "assets/images/RUDRAKASH-logo.png", "alt", ""], [1, "mobile-sidebar", "col-auto", "p-0"], [1, "media-body", "text-start", "switch-sm"], [1, "switch"], ["href", "javascript:void(0)", 3, "click"], ["id", "sidebar-toggle", 3, "icon"], [1, "nav-right", "col"], [1, "nav-menus", 3, "ngClass"], [1, "form-inline", "search-form"], [1, "form-group", "mb-0"], ["type", "text", "autocomplete", "off", "placeholder", "Search..", 1, "form-control-plaintext", 3, "ngModel", "ngModelOptions", "ngModelChange", "keyup"], [1, "d-sm-none", "mobile-search"], [3, "icon", "click"], ["class", "Typeahead-menu", "id", "search-outer", 3, "is-open", 4, "ngIf"], [1, "Typeahead-menu"], [1, "tt-dataset", "tt-dataset-0"], [1, "EmptyMessage"], ["href", "javascript:void(0)", 1, "text-dark", 3, "click"], [3, "icon"], [1, "onhover-dropdown"], ["href", "javascript:void(0)", 1, "txt-dark"], [1, "language-dropdown", "onhover-show-div", "p-20"], ["href", "javascript:void(0)", "data-lng", "en", 3, "click"], [1, "flag-icon", "flag-icon-is"], ["href", "javascript:void(0)", "data-lng", "es", 3, "click"], [1, "flag-icon", "flag-icon-um"], ["href", "javascript:void(0)", "data-lng", "pt", 3, "click"], [1, "flag-icon", "flag-icon-uy"], ["href", "javascript:void(0)", "data-lng", "fr", 3, "click"], [1, "flag-icon", "flag-icon-nz"], [1, "dot"], [1, "notification-dropdown", "onhover-show-div"], [1, "badge", "rounded-pill", "badge-primary", "pull-right"], [1, "media"], [1, "flex-grow-1"], [1, "mt-0"], [1, "shopping-color", 3, "icon"], [1, "pull-right"], [1, "mb-0"], [1, "mt-0", "txt-success"], [1, "download-color", "font-success", 3, "icon"], [1, "mt-0", "txt-danger"], [1, "alert-color", "font-danger", 3, "icon"], [1, "bg-light", "txt-dark"], [1, "right_side_toggle", 3, "icon", "click"], [1, "media", "align-items-center"], ["src", "assets/images/dashboard/user.png", "alt", "header-user", 1, "align-self-center", "pull-right", "img-50", "rounded-circle"], [1, "dotted-animation"], [1, "animate-circle"], [1, "main-circle"], ["content", ""], [1, "profile-dropdown", "onhover-show-div", "p-20"], [1, "d-lg-none", "mobile-toggle", "pull-right", 3, "click"], ["id", "search-outer", 1, "Typeahead-menu"], ["class", "ProfileCard u-cf", 4, "ngFor", "ngForOf"], [1, "ProfileCard", "u-cf"], [1, "ProfileCard-avatar"], [1, "header-search", 3, "icon"], [1, "ProfileCard-details"], [1, "ProfileCard-realName"], [1, "realname", 3, "routerLink", "click"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "btn-close", 3, "click"], [1, "icon-calendar"], [1, "modal-body"], [3, "formGroup"], [1, "row"], [1, "col-md-12", "mb-3"], ["for", "exampleInputEmail1", 1, "col-form-label", "pt-0"], ["formControlName", "new_password", "id", "exampleInputEmail1", "type", "text", "placeholder", "Enter New Password", 1, "form-control"], ["formControlName", "confirm_password", "id", "exampleInputEmail1", "type", "text", "placeholder", "Enter Confirm Password", 1, "form-control"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-outline-dark", 3, "disabled", "click"]],
    template: function HeaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 6)(7, "div", 7)(8, "label", 8)(9, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_9_listener() {
          return ctx.collapseSidebar();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "app-feather-icons", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 11)(12, "ul", 12)(13, "li")(14, "form", 13)(15, "div", 14)(16, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function HeaderComponent_Template_input_ngModelChange_16_listener($event) {
          return ctx.text = $event;
        })("keyup", function HeaderComponent_Template_input_keyup_16_listener() {
          return ctx.searchTerm(ctx.text);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "span", 16)(18, "app-feather-icons", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HeaderComponent_Template_app_feather_icons_click_18_listener() {
          return ctx.isOpenMobile = !ctx.isOpenMobile;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](19, HeaderComponent_div_19_Template, 3, 7, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 19)(21, "div", 20)(22, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, "Opps!! There are no result found.");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "li")(25, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_25_listener() {
          return ctx.toggleFullScreen();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](26, "app-feather-icons", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "li", 24)(28, "a", 25)(29, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30, "EN");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "ul", 26)(32, "li")(33, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_33_listener() {
          return ctx.changeLanguage("en");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](34, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35, " English");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "li")(37, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_37_listener() {
          return ctx.changeLanguage("es");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](38, "i", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](39, " Spanish");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "li")(41, "a", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_41_listener() {
          return ctx.changeLanguage("pt");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](42, "i", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](43, " Portuguese");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "li")(45, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_45_listener() {
          return ctx.changeLanguage("fr");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](46, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](47, " French");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "li", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](49, "app-feather-icons", 23)(50, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "ul", 36)(52, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](53, "Notification ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](54, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](55, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](56, "li")(57, "div", 38)(58, "div", 39)(59, "h6", 40)(60, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](61, "app-feather-icons", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](62, "Your order ready for Ship..!");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](63, "small", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](64, "9:00 AM");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](65, "p", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](66, "Lorem ipsum dolor sit amet, consectetuer.");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](67, "li")(68, "div", 38)(69, "div", 39)(70, "h6", 44)(71, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](72, "app-feather-icons", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](73, "Download Complete");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](74, "small", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](75, "2:30 PM");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](76, "p", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](77, "Lorem ipsum dolor sit amet, consectetuer.");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](78, "li")(79, "div", 38)(80, "div", 39)(81, "h6", 46)(82, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](83, "app-feather-icons", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](84, "250 MB trush files");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](85, "small", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](86, "5:00 PM");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](87, "p", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](88, "Lorem ipsum dolor sit amet, consectetuer.");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](89, "li", 48)(90, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](91, "All");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](92, " notification");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](93, "li")(94, "a")(95, "app-feather-icons", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HeaderComponent_Template_app_feather_icons_click_95_listener() {
          return ctx.right_side_bar();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](96, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](97, "li", 24)(98, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](99, "img", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](100, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](101, "span", 53)(102, "span", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](103, HeaderComponent_ng_template_103_Template, 20, 2, "ng-template", null, 55, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](105, "ul", 56)(106, "li")(107, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_107_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r11);
          const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](104);
          return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx.openSm(_r2));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](108, "app-feather-icons");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](109, "Change Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](110, "li")(111, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](112, "app-feather-icons", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](113, "Edit Profile ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](114, "li")(115, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](116, "app-feather-icons", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](117, "Inbox ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](118, "li")(119, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](120, "app-feather-icons", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](121, "Lock Screen ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](122, "li")(123, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](124, "app-feather-icons", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](125, "Settings ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](126, "li")(127, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_127_listener() {
          return ctx.SignOut();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](128, "app-feather-icons", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](129, "Logout ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](130, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HeaderComponent_Template_div_click_130_listener() {
          return ctx.openMobileNav();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](131, "app-feather-icons", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](23, _c0, ctx.navServices.collapseSidebar));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", "align-left");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](25, _c0, ctx.openNav));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("open", ctx.isOpenMobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.text)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](27, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.menuItems == null ? null : ctx.menuItems.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("is-open", ctx.searchResultEmpty);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", "maximize");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", "bell");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", "shopping-bag");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", "download");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", "alert-circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", "message-circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", "user");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", "mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", "lock");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", "settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", "log-out");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", "more-horizontal");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_3__.FeatherIconsComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.SlicePipe],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 5282:
/*!*************************************************************************************!*\
  !*** ./src/app/shared/components/layout/content-layout/content-layout.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContentLayoutComponent: () => (/* binding */ ContentLayoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/animations */ 12501);
/* harmony import */ var ng_animate__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-animate */ 28063);
/* harmony import */ var feather_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! feather-icons */ 89029);
/* harmony import */ var feather_icons__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(feather_icons__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _services_nav_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/nav.service */ 82484);
/* harmony import */ var _services_customizer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/customizer.service */ 33844);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../header/header.component */ 10074);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../footer/footer.component */ 68014);
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../sidebar/sidebar.component */ 57378);
/* harmony import */ var _right_sidebar_right_sidebar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../right-sidebar/right-sidebar.component */ 36809);
/* harmony import */ var _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../breadcrumb/breadcrumb.component */ 14414);
/* harmony import */ var _customizer_customizer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../customizer/customizer.component */ 40155);














class ContentLayoutComponent {
  constructor(navServices, customizer, cd) {
    this.navServices = navServices;
    this.customizer = customizer;
    this.cd = cd;
  }
  ngAfterViewInit() {
    this.cd.detectChanges();
    setTimeout(() => {
      feather_icons__WEBPACK_IMPORTED_MODULE_0__.replace();
    });
  }
  clickedOutside(event) {
    // click outside Area perform following action
    document.getElementById('outer-container').onclick = function (e) {
      e.stopPropagation();
      if (e.target != document.getElementById('search-outer')) {
        document.getElementsByTagName("body")[0].classList.remove("offcanvas");
      }
      if (e.target != document.getElementById('outer-container')) {
        document.getElementById("canvas-bookmark").classList.remove("offcanvas-bookmark");
      }
      if (e.target != document.getElementById('inner-customizer')) {
        document.getElementsByClassName("customizer-links")[0].classList.remove("open");
        document.getElementsByClassName("customizer-contain")[0].classList.remove("open");
      }
    };
  }
  getRouterOutletState(outlet) {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }
  rightSidebar($event) {
    this.right_side_bar = $event;
  }
  ngOnInit() {}
  static #_ = this.ɵfac = function ContentLayoutComponent_Factory(t) {
    return new (t || ContentLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_nav_service__WEBPACK_IMPORTED_MODULE_1__.NavService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_customizer_service__WEBPACK_IMPORTED_MODULE_2__.CustomizerService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__.ChangeDetectorRef));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
    type: ContentLayoutComponent,
    selectors: [["app-content-layout"]],
    hostBindings: function ContentLayoutComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ContentLayoutComponent_click_HostBindingHandler($event) {
          return ctx.clickedOutside($event);
        }, false, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresolveDocument"]);
      }
    },
    decls: 16,
    vars: 9,
    consts: [["id", "outer-container", 1, "dark-body-only"], ["id", "canvas-bookmark", 1, "page-wrapper", 3, "ngClass"], [3, "rightSidebarEvent"], [1, "page-body-wrapper", 3, "ngClass"], ["id", "pages-sidebar", 1, "page-sidebar", 3, "ngClass"], ["id", "right_side_bar", 1, "right-sidebar"], [1, "page-body"], ["o", "outlet"], [1, "footer"]],
    template: function ContentLayoutComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "app-header", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("rightSidebarEvent", function ContentLayoutComponent_Template_app_header_rightSidebarEvent_2_listener($event) {
          return ctx.rightSidebar($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "div", 3)(4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](5, "app-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](7, "app-right-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](9, "app-breadcrumb");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](11, "router-outlet", null, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "footer", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](14, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](15, "app-customizer");
      }
      if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", ctx.customizer.data.settings.sidebar.type);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", ctx.customizer.data.settings.sidebar.body_type);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("open", ctx.navServices.collapseSidebar);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", ctx.customizer.data.settings.sidebar_backround);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵattribute"]("sidebar-layout", ctx.customizer.data.settings.sidebar_setting);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("show", ctx.right_side_bar);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("@animateRoute", ctx.getRouterOutletState(_r0));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgClass, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterOutlet, _header_header_component__WEBPACK_IMPORTED_MODULE_3__.HeaderComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__.FooterComponent, _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__.SidebarComponent, _right_sidebar_right_sidebar_component__WEBPACK_IMPORTED_MODULE_6__.RightSidebarComponent, _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_7__.BreadcrumbComponent, _customizer_customizer_component__WEBPACK_IMPORTED_MODULE_8__.CustomizerComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"],
    data: {
      animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.trigger)('animateRoute', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.transition)('* => *', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.useAnimation)(ng_animate__WEBPACK_IMPORTED_MODULE_13__.fadeIn, {
        // Set the duration to 5seconds and delay to 2 seconds
        //params: { timing: 3}
      }))])]
    }
  });
}

/***/ }),

/***/ 549:
/*!*******************************************************************************!*\
  !*** ./src/app/shared/components/layout/full-layout/full-layout.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FullLayoutComponent: () => (/* binding */ FullLayoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 27947);


class FullLayoutComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function FullLayoutComponent_Factory(t) {
    return new (t || FullLayoutComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: FullLayoutComponent,
    selectors: [["app-full-layout"]],
    decls: 2,
    vars: 0,
    consts: [[1, "page-wrapper"]],
    template: function FullLayoutComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 99185:
/*!**************************************************************!*\
  !*** ./src/app/shared/components/loader/loader.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoaderComponent: () => (/* binding */ LoaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);

class LoaderComponent {
  constructor() {
    this.show = true;
    setTimeout(() => {
      this.show = false;
    }, 1500);
  }
  ngOnInit() {}
  ngOnDestroy() {}
  static #_ = this.ɵfac = function LoaderComponent_Factory(t) {
    return new (t || LoaderComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: LoaderComponent,
    selectors: [["app-loader"]],
    decls: 3,
    vars: 2,
    consts: [[1, "loader-wrapper"], [1, "loader", "bg-white"], [1, "whirly-loader"]],
    template: function LoaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("loderhide", !ctx.show);
      }
    },
    styles: [".loader-wrapper.loderhide[_ngcontent-%COMP%] {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbG9hZGVyL2xvYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5sb2FkZXItd3JhcHBlci5sb2RlcmhpZGUge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 36809:
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/right-sidebar/right-sidebar.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RightSidebarComponent: () => (/* binding */ RightSidebarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _shared_services_chat_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/services/chat.service */ 23022);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 28849);





const _c0 = () => ["/chat/"];
const _c1 = (a0, a1) => ({
  "online": a0,
  "offline": a1
});
function RightSidebarComponent_ng_container_15_li_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 16)(1, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 18)(3, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 20)(5, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const user_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](5, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", user_r2 == null ? null : user_r2.profile, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](6, _c1, user_r2.online, !user_r2.online));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](user_r2 == null ? null : user_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](user_r2 == null ? null : user_r2.status);
  }
}
function RightSidebarComponent_ng_container_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, RightSidebarComponent_ng_container_15_li_1_Template, 9, 9, "li", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const user_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", user_r2.authenticate != 1);
  }
}
function RightSidebarComponent_ng_container_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 23)(2, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Sorry, We didn't find any results matching this search");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
}
const _c2 = () => ({
  standalone: true
});
class RightSidebarComponent {
  constructor(chatService) {
    this.chatService = chatService;
    this.users = [];
    this.searchUsers = [];
    this.notFound = false;
    this.searchText = '';
    this.chatService.getUsers().subscribe(users => {
      this.searchUsers = users;
      this.users = users;
    });
  }
  searchTerm(term) {
    if (!term) return this.searchUsers = this.users;
    term = term.toLowerCase();
    let user = [];
    this.users.filter(users => {
      if (users.name.toLowerCase().includes(term)) {
        user.push(users);
      }
    });
    this.checkSearchResultEmpty(user);
    this.searchUsers = user;
    return;
  }
  checkSearchResultEmpty(user) {
    if (!user.length) this.notFound = true;else this.notFound = false;
  }
  ngOnInit() {}
  static #_ = this.ɵfac = function RightSidebarComponent_Factory(t) {
    return new (t || RightSidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_services_chat_service__WEBPACK_IMPORTED_MODULE_0__.ChatService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: RightSidebarComponent,
    selectors: [["app-right-sidebar"]],
    decls: 17,
    vars: 5,
    consts: [[1, "container", "p-0"], [1, "modal-header", "p-l-20", "p-r-20"], [1, "col-sm-8", "p-0"], [1, "modal-title", "font-weight-bold"], [1, "col-sm-4", "text-end", "p-0"], ["data-feather", "settings", 1, "me-2"], [1, "friend-list-search", "mt-0"], ["type", "text", "placeholder", "search", 1, "form-control", 3, "ngModel", "ngModelOptions", "ngModelChange", "keyup"], [1, "fa", "fa-search"], [1, "p-l-30", "p-r-30"], [1, "chat-box"], [1, "people-list", "friend-list", "custom-scrollbar"], [1, "list"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["class", "clearfix", 4, "ngIf"], [1, "clearfix"], [3, "routerLink"], ["alt", "", 1, "rounded-circle", "user-image", 3, "src"], [1, "status-circle", 3, "ngClass"], [1, "about"], [1, "name"], [1, "status"], [1, "image-not-found"], [1, ""], ["src", "assets/images/search-not-found.png", "alt", ""], [1, "mb-0"]],
    template: function RightSidebarComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "h6", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "FRIEND LIST");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6)(9, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RightSidebarComponent_Template_input_ngModelChange_9_listener($event) {
          return ctx.searchText = $event;
        })("keyup", function RightSidebarComponent_Template_input_keyup_9_listener() {
          return ctx.searchTerm(ctx.searchText);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 9)(12, "div", 10)(13, "div", 11)(14, "ul", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, RightSidebarComponent_ng_container_15_Template, 2, 1, "ng-container", 13)(16, RightSidebarComponent_ng_container_16_Template, 6, 0, "ng-container", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.searchText)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](4, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.searchUsers);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.notFound);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 57378:
/*!****************************************************************!*\
  !*** ./src/app/shared/components/sidebar/sidebar.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SidebarComponent: () => (/* binding */ SidebarComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../environments/environment */ 20553);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _services_nav_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/nav.service */ 82484);
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/common.service */ 75731);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 54860);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../feather-icons/feather-icons.component */ 49177);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 21916);










function SidebarComponent_li_17_a_1_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const menuItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMapInterpolate1"]("badge badge-", menuItem_r1.badgeType, " me-3");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](menuItem_r1.badgeValue);
  }
}
function SidebarComponent_li_17_a_1_i_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "i", 23);
  }
}
function SidebarComponent_li_17_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SidebarComponent_li_17_a_1_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r12);
      const menuItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r10.toggletNavActive(menuItem_r1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "app-feather-icons", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, SidebarComponent_li_17_a_1_span_5_Template, 2, 4, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, SidebarComponent_li_17_a_1_i_6_Template, 1, 0, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const menuItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("hidden", menuItem_r1.hidden);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", menuItem_r1.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 5, menuItem_r1.title));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", menuItem_r1.badgeType);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", menuItem_r1.children);
  }
}
function SidebarComponent_li_17_a_2_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const menuItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMapInterpolate1"]("badge badge-", menuItem_r1.badgeType, " me-3");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](menuItem_r1.badgeValue);
  }
}
function SidebarComponent_li_17_a_2_i_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "i", 23);
  }
}
const _c0 = a0 => [a0];
function SidebarComponent_li_17_a_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "app-feather-icons", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, SidebarComponent_li_17_a_2_span_5_Template, 2, 4, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, SidebarComponent_li_17_a_2_i_6_Template, 1, 0, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const menuItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", !menuItem_r1.type ? null : _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](8, _c0, menuItem_r1.path))("hidden", menuItem_r1.hidden);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", menuItem_r1.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 6, menuItem_r1.title));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", menuItem_r1.badgeType);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", menuItem_r1.children);
  }
}
function SidebarComponent_li_17_a_3_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const menuItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMapInterpolate1"]("badge badge-", menuItem_r1.badgeType, " me-3");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](menuItem_r1.badgeValue);
  }
}
function SidebarComponent_li_17_a_3_i_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "i", 23);
  }
}
function SidebarComponent_li_17_a_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "app-feather-icons", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, SidebarComponent_li_17_a_3_span_5_Template, 2, 4, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, SidebarComponent_li_17_a_3_i_6_Template, 1, 0, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const menuItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("href", !menuItem_r1.type ? null : menuItem_r1.path, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("hidden", menuItem_r1.hidden);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", menuItem_r1.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 6, menuItem_r1.title));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", menuItem_r1.badgeType);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", menuItem_r1.children);
  }
}
function SidebarComponent_li_17_a_4_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const menuItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMapInterpolate1"]("badge badge-", menuItem_r1.badgeType, " me-3");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](menuItem_r1.badgeValue);
  }
}
function SidebarComponent_li_17_a_4_i_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "i", 23);
  }
}
function SidebarComponent_li_17_a_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "app-feather-icons", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, SidebarComponent_li_17_a_4_span_5_Template, 2, 4, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, SidebarComponent_li_17_a_4_i_6_Template, 1, 0, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const menuItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("href", !menuItem_r1.type ? null : menuItem_r1.path, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("hidden", menuItem_r1.hidden);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", menuItem_r1.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 6, menuItem_r1.title));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", menuItem_r1.badgeType);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", menuItem_r1.children);
  }
}
function SidebarComponent_li_17_ul_5_li_1_a_1_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const childrenItem_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMapInterpolate1"]("badge badge-", childrenItem_r27.badgeType, " pull-right");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](childrenItem_r27.badgeValue);
  }
}
function SidebarComponent_li_17_ul_5_li_1_a_1_i_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "i", 36);
  }
}
function SidebarComponent_li_17_ul_5_li_1_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SidebarComponent_li_17_ul_5_li_1_a_1_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r38);
      const childrenItem_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r36.toggletNavActive(childrenItem_r27));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, SidebarComponent_li_17_ul_5_li_1_a_1_span_5_Template, 2, 4, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, SidebarComponent_li_17_ul_5_li_1_a_1_i_6_Template, 1, 0, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const childrenItem_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("hidden", childrenItem_r27.hidden);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 4, childrenItem_r27.title), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", childrenItem_r27.badgeType);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", childrenItem_r27.children);
  }
}
function SidebarComponent_li_17_ul_5_li_1_a_2_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const childrenItem_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMapInterpolate1"]("badge badge-", childrenItem_r27.badgeType, " pull-right");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](childrenItem_r27.badgeValue);
  }
}
function SidebarComponent_li_17_ul_5_li_1_a_2_i_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "i", 36);
  }
}
const _c1 = () => ({
  exact: true
});
function SidebarComponent_li_17_ul_5_li_1_a_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, SidebarComponent_li_17_ul_5_li_1_a_2_span_5_Template, 2, 4, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, SidebarComponent_li_17_ul_5_li_1_a_2_i_6_Template, 1, 0, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const childrenItem_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", !childrenItem_r27.type ? null : _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](8, _c0, childrenItem_r27.path))("hidden", childrenItem_r27.hidden)("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](10, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 6, childrenItem_r27.title), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", childrenItem_r27.badgeType);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", childrenItem_r27.children);
  }
}
function SidebarComponent_li_17_ul_5_li_1_a_3_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const childrenItem_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMapInterpolate1"]("badge badge-", childrenItem_r27.badgeType, " pull-right");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](childrenItem_r27.badgeValue);
  }
}
function SidebarComponent_li_17_ul_5_li_1_a_3_i_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "i", 36);
  }
}
function SidebarComponent_li_17_ul_5_li_1_a_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, SidebarComponent_li_17_ul_5_li_1_a_3_span_5_Template, 2, 4, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, SidebarComponent_li_17_ul_5_li_1_a_3_i_6_Template, 1, 0, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const childrenItem_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("href", !childrenItem_r27.type ? null : childrenItem_r27.path, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("hidden", childrenItem_r27.hidden)("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](8, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 6, childrenItem_r27.title), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", childrenItem_r27.badgeType);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", childrenItem_r27.children);
  }
}
function SidebarComponent_li_17_ul_5_li_1_a_4_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const childrenItem_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMapInterpolate1"]("badge badge-", childrenItem_r27.badgeType, " pull-right");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](childrenItem_r27.badgeValue);
  }
}
function SidebarComponent_li_17_ul_5_li_1_a_4_i_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "i", 36);
  }
}
function SidebarComponent_li_17_ul_5_li_1_a_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, SidebarComponent_li_17_ul_5_li_1_a_4_span_5_Template, 2, 4, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, SidebarComponent_li_17_ul_5_li_1_a_4_i_6_Template, 1, 0, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const childrenItem_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("href", !childrenItem_r27.type ? null : childrenItem_r27.path, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("hidden", childrenItem_r27.hidden);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 5, childrenItem_r27.title), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", childrenItem_r27.badgeType);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", childrenItem_r27.children);
  }
}
function SidebarComponent_li_17_ul_5_li_1_ul_5_li_1_a_1_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const childrenSubItem_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMapInterpolate1"]("badge badge-", childrenSubItem_r53.badgeType, " pull-right");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](childrenSubItem_r53.badgeValue);
  }
}
function SidebarComponent_li_17_ul_5_li_1_ul_5_li_1_a_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, SidebarComponent_li_17_ul_5_li_1_ul_5_li_1_a_1_span_5_Template, 2, 4, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const childrenSubItem_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", !childrenSubItem_r53.type ? null : _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](6, _c0, childrenSubItem_r53.path))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](8, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 4, childrenSubItem_r53.title), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", childrenSubItem_r53.badgeType);
  }
}
function SidebarComponent_li_17_ul_5_li_1_ul_5_li_1_a_2_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const childrenSubItem_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMapInterpolate1"]("badge badge-", childrenSubItem_r53.badgeType, " pull-right");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](childrenSubItem_r53.badgeValue);
  }
}
function SidebarComponent_li_17_ul_5_li_1_ul_5_li_1_a_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, SidebarComponent_li_17_ul_5_li_1_ul_5_li_1_a_2_span_5_Template, 2, 4, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const childrenSubItem_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("href", !childrenSubItem_r53.type ? null : childrenSubItem_r53.path, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](6, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 4, childrenSubItem_r53.title), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", childrenSubItem_r53.badgeType);
  }
}
function SidebarComponent_li_17_ul_5_li_1_ul_5_li_1_a_3_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const childrenSubItem_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMapInterpolate1"]("badge badge-", childrenSubItem_r53.badgeType, " pull-right");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](childrenSubItem_r53.badgeValue);
  }
}
function SidebarComponent_li_17_ul_5_li_1_ul_5_li_1_a_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, SidebarComponent_li_17_ul_5_li_1_ul_5_li_1_a_3_span_5_Template, 2, 4, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const childrenSubItem_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("href", !childrenSubItem_r53.type ? null : childrenSubItem_r53.path, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 3, childrenSubItem_r53.title), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", childrenSubItem_r53.badgeType);
  }
}
function SidebarComponent_li_17_ul_5_li_1_ul_5_li_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, SidebarComponent_li_17_ul_5_li_1_ul_5_li_1_a_1_Template, 6, 9, "a", 42)(2, SidebarComponent_li_17_ul_5_li_1_ul_5_li_1_a_2_Template, 6, 7, "a", 43)(3, SidebarComponent_li_17_ul_5_li_1_ul_5_li_1_a_3_Template, 6, 5, "a", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const childrenSubItem_r53 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", childrenSubItem_r53.type === "link");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", childrenSubItem_r53.type === "extLink");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", childrenSubItem_r53.type === "extTabLink");
  }
}
function SidebarComponent_li_17_ul_5_li_1_ul_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ul", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, SidebarComponent_li_17_ul_5_li_1_ul_5_li_1_Template, 4, 3, "li", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const childrenItem_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("hidden", childrenItem_r27.hidden);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", childrenItem_r27.children);
  }
}
const _c2 = a0 => ({
  active: a0
});
function SidebarComponent_li_17_ul_5_li_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, SidebarComponent_li_17_ul_5_li_1_a_1_Template, 7, 6, "a", 28)(2, SidebarComponent_li_17_ul_5_li_1_a_2_Template, 7, 11, "a", 29)(3, SidebarComponent_li_17_ul_5_li_1_a_3_Template, 7, 9, "a", 30)(4, SidebarComponent_li_17_ul_5_li_1_a_4_Template, 7, 7, "a", 31)(5, SidebarComponent_li_17_ul_5_li_1_ul_5_Template, 2, 2, "ul", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const childrenItem_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](6, _c2, childrenItem_r27.active));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", childrenItem_r27.type === "sub");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", childrenItem_r27.type === "link");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", childrenItem_r27.type === "extLink");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", childrenItem_r27.type === "extTabLink");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", childrenItem_r27.children);
  }
}
const _c3 = (a0, a1) => ({
  "menu-open": a0,
  "menu-close": a1
});
function SidebarComponent_li_17_ul_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ul", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, SidebarComponent_li_17_ul_5_li_1_Template, 6, 8, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const menuItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](3, _c3, menuItem_r1.active, !menuItem_r1.active))("hidden", menuItem_r1.hidden);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", menuItem_r1.children);
  }
}
function SidebarComponent_li_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, SidebarComponent_li_17_a_1_Template, 7, 7, "a", 14)(2, SidebarComponent_li_17_a_2_Template, 7, 10, "a", 15)(3, SidebarComponent_li_17_a_3_Template, 7, 8, "a", 16)(4, SidebarComponent_li_17_a_4_Template, 7, 8, "a", 17)(5, SidebarComponent_li_17_ul_5_Template, 2, 6, "ul", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const menuItem_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](6, _c2, menuItem_r1.active));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", menuItem_r1.type === "sub");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", menuItem_r1.type === "link");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", menuItem_r1.type === "extLink");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", menuItem_r1.type === "extTabLink");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", menuItem_r1.children);
  }
}
class SidebarComponent {
  constructor(router, navServices, commonService, http) {
    this.router = router;
    this.navServices = navServices;
    this.commonService = commonService;
    this.http = http;
    this.BASE_API_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.BASE_API_URL;
    this.FILE_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.FILE_URL;
    // @ts-ignore
    this.user = JSON.parse(localStorage.getItem('user'));
    if (this.user) {
      this.url = this.FILE_URL + '/user_image/' + this.user.image;
    }
    this.http.get(this.BASE_API_URL + '/getMenuManagement').subscribe(response => {
      // console.log(menuManagement.find(x => x.id == 1));
      if (response.success == 1) {
        let menuManagement = response.data;
        this.navServices.items.subscribe(menuItems => {
          this.menuItems = menuItems;
          let x;
          this.menuItems.forEach(function (value) {
            for (let j = 0; j < menuManagement.length; j++) {
              if (value.title === menuManagement[j].name) {
                value.hidden = menuManagement[j].permission == 0;
              } else {
                if (value.children) {
                  for (let i = 0; i < value.children.length; i++) {
                    if (menuManagement[j].name === value.children[i].title) {
                      value.children[i].hidden = menuManagement[j].permission == 0;
                    }
                  }
                }
              }
            }
          });
          this.router.events.subscribe(event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__.NavigationEnd) {
              menuItems.filter(items => {
                if (items.path === event.url) this.setNavActive(items);
                if (!items.children) return false;
                items.children.filter(subItems => {
                  if (subItems.path === event.url) this.setNavActive(subItems);
                  if (!subItems.children) return false;
                  subItems.children.filter(subSubItems => {
                    if (subSubItems.path === event.url) this.setNavActive(subSubItems);
                  });
                  return;
                });
                return;
              });
            }
          });
        });
      }
    });
  }
  // Active Nave state
  setNavActive(item) {
    this.menuItems.filter(menuItem => {
      if (menuItem != item) menuItem.active = false;
      if (menuItem.children && menuItem.children.includes(item)) menuItem.active = true;
      if (menuItem.children) {
        menuItem.children.filter(submenuItems => {
          if (submenuItems.children && submenuItems.children.includes(item)) {
            menuItem.active = true;
            submenuItems.active = true;
          }
        });
      }
    });
  }
  // Click Toggle menu
  toggletNavActive(item) {
    if (!item.active) {
      this.menuItems.forEach(a => {
        if (this.menuItems.includes(item)) a.active = false;
        if (!a.children) return false;
        a.children.forEach(b => {
          if (a.children.includes(item)) {
            b.active = false;
          }
        });
        return;
      });
    }
    item.active = !item.active;
  }
  onErrorImg() {}
  //Fileupload
  readUrl(event) {
    if (event.target.files.length === 0) return;
    //Image upload validation
    var mimeType = event.target.files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }
    console.log(this.user);
    let file = event.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    formData.append("user_id", this.user.id);
    formData.append("file_name", file['name']);
    this.commonService.uploadProfilePicture(formData).subscribe(response => {
      // @ts-ignore
      if (response.success == 1) {
        localStorage.removeItem('user');
        // @ts-ignore
        localStorage.setItem("user", JSON.stringify(response.data));
        // Image upload
        var reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]);
        reader.onload = _event => {
          this.url = reader.result;
        };
      }
    });
  }
  static #_ = this.ɵfac = function SidebarComponent_Factory(t) {
    return new (t || SidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_nav_service__WEBPACK_IMPORTED_MODULE_1__.NavService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_common_service__WEBPACK_IMPORTED_MODULE_2__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: SidebarComponent,
    selectors: [["app-sidebar"]],
    decls: 18,
    vars: 5,
    consts: [[1, "main-header-left", "d-none", "d-lg-block"], [1, "logo-wrapper"], ["href", "javascript:void(0)"], ["src", "assets/images/endless-logo.png", "alt", ""], [1, "sidebar", "custom-scrollbar"], [1, "sidebar-user", "text-center"], ["onerror", "this.src='assets/images/user/1.jpg'", "alt", "#", 1, "img-60", "rounded-circle", 3, "src"], [1, "profile-edit"], [1, "icofont", "icofont-pencil-alt-5"], ["type", "file", 1, "upload", 3, "change"], [1, "mt-3", "f-14"], [1, "sidebar-menu"], [3, "ngClass", 4, "ngFor", "ngForOf"], [3, "ngClass"], ["href", "javascript:void(0)", "class", "sidebar-header", 3, "hidden", "click", 4, "ngIf"], ["routerLinkActive", "active", "class", "sidebar-header", 3, "routerLink", "hidden", 4, "ngIf"], ["class", "sidebar-header", 3, "href", "hidden", 4, "ngIf"], ["target", "_blank", "class", "sidebar-header", 3, "href", "hidden", 4, "ngIf"], ["class", "sidebar-submenu", 3, "ngClass", "hidden", 4, "ngIf"], ["href", "javascript:void(0)", 1, "sidebar-header", 3, "hidden", "click"], [3, "icon"], [3, "class", 4, "ngIf"], ["class", "fa fa-angle-right pull-right", 4, "ngIf"], [1, "fa", "fa-angle-right", "pull-right"], ["routerLinkActive", "active", 1, "sidebar-header", 3, "routerLink", "hidden"], [1, "sidebar-header", 3, "href", "hidden"], ["target", "_blank", 1, "sidebar-header", 3, "href", "hidden"], [1, "sidebar-submenu", 3, "ngClass", "hidden"], ["href", "javascript:void(0)", 3, "hidden", "click", 4, "ngIf"], ["routerLinkActive", "active", 3, "routerLink", "hidden", "routerLinkActiveOptions", 4, "ngIf"], ["routerLinkActive", "active", 3, "href", "hidden", "routerLinkActiveOptions", 4, "ngIf"], ["target", "_blank", 3, "href", "hidden", 4, "ngIf"], ["class", "sidebar-submenu", 3, "hidden", 4, "ngIf"], ["href", "javascript:void(0)", 3, "hidden", "click"], [1, "fa", "fa-circle"], ["class", "fa fa-angle-down pull-right", 4, "ngIf"], [1, "fa", "fa-angle-down", "pull-right"], ["routerLinkActive", "active", 3, "routerLink", "hidden", "routerLinkActiveOptions"], ["routerLinkActive", "active", 3, "href", "hidden", "routerLinkActiveOptions"], ["target", "_blank", 3, "href", "hidden"], [1, "sidebar-submenu", 3, "hidden"], [4, "ngFor", "ngForOf"], ["routerLinkActive", "active", 3, "routerLink", "routerLinkActiveOptions", 4, "ngIf"], ["routerLinkActive", "active", 3, "href", "routerLinkActiveOptions", 4, "ngIf"], ["target", "_blank", 3, "href", 4, "ngIf"], ["routerLinkActive", "active", 3, "routerLink", "routerLinkActiveOptions"], ["routerLinkActive", "active", 3, "href", "routerLinkActiveOptions"], ["target", "_blank", 3, "href"]],
    template: function SidebarComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 4)(5, "div", 5)(6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 7)(9, "a")(10, "i", 8)(11, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function SidebarComponent_Template_input_change_11_listener($event) {
          return ctx.readUrl($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "h6", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "general manager.");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "ul", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](17, SidebarComponent_li_17_Template, 6, 8, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", ctx.url, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate3"]("", ctx.user.first_name, " ", ctx.user.middle_name, " ", ctx.user.last_name, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.menuItems);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkActive, _feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_3__.FeatherIconsComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslatePipe],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 43489:
/*!******************************************!*\
  !*** ./src/app/shared/data/chat/chat.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChatDB: () => (/* binding */ ChatDB)
/* harmony export */ });
class ChatDB {
  // Chat User
  static #_ = this.chatUser = [{
    id: 0,
    name: 'Elana Jecno',
    status: 'In Meeting..',
    profile: 'assets/images/user/1.jpg',
    seen: 'online',
    online: true,
    typing: false,
    authenticate: 1,
    call: {
      status: '',
      date_time: ''
    }
  }, {
    id: 1,
    name: 'Mark Jecno',
    status: 'Be the change',
    profile: 'assets/images/user/12.png',
    seen: 'online',
    online: true,
    typing: false,
    authenticate: 0,
    call: {
      status: 'incoming',
      date_time: '5 May, 4:40 PM'
    }
  }, {
    id: 2,
    name: 'Aiden Chavez',
    status: 'Out is my favorite.',
    profile: 'assets/images/user/2.png',
    seen: 'Last Seen 3:55 PM',
    online: false,
    typing: false,
    authenticate: 0,
    call: {
      status: 'incoming',
      date_time: '6 May, 1:50 PM'
    }
  }, {
    id: 3,
    name: 'Prasanth Anand',
    status: 'Change for anyone.',
    profile: 'assets/images/user/8.jpg',
    seen: 'online',
    online: true,
    typing: false,
    authenticate: 0,
    call: {
      status: 'outgoing',
      date_time: '7 May, 9:40 PM'
    }
  }, {
    id: 4,
    name: 'Venkata Satyamu',
    status: 'First bun like a sun.',
    profile: 'assets/images/user/4.jpg',
    seen: 'online',
    online: true,
    typing: false,
    authenticate: 0,
    call: {
      status: 'incoming',
      date_time: '7 May, 10:50 PM'
    }
  }, {
    id: 5,
    name: 'Ginger Johnston',
    status: 'its my life. Mind it.',
    profile: 'assets/images/user/5.jpg',
    seen: 'Last Seen 5:55 PM',
    online: false,
    typing: false,
    authenticate: 0,
    call: {
      status: 'outgoing',
      date_time: '7 May, 11:40 PM'
    }
  }, {
    id: 6,
    name: 'Kori Thomas',
    status: 'status pending...',
    profile: 'assets/images/user/9.jpg',
    seen: 'online',
    online: true,
    typing: false,
    authenticate: 0,
    call: {
      status: 'outgoing',
      date_time: '8 May, 9:15 AM'
    }
  }, {
    id: 7,
    name: 'Marked Thomas',
    status: 'away from home',
    profile: 'assets/images/user/11.png',
    seen: 'Last Seen 1:55 PM',
    online: false,
    typing: false,
    authenticate: 0,
    call: {
      status: 'incoming',
      date_time: '8 May, 10:50 Am'
    }
  }, {
    id: 8,
    name: 'Jaclin Thomas',
    status: 'Single..',
    profile: 'assets/images/user/10.jpg',
    seen: 'Last Seen 3:15 PM',
    online: false,
    typing: false,
    authenticate: 0,
    call: {
      status: 'incoming',
      date_time: '9 May, 11:50 PM'
    }
  }]; // Message
  static #_2 = this.chat = [{
    id: 1,
    message: [{
      sender: 1,
      time: '10:12 am',
      text: 'Are we meeting today? Project has been already finished and I have results to show you.'
    }, {
      sender: 0,
      time: '10:14 am',
      text: 'Well I am not sure. The rest of the team is not here yet. Maybe in an hour or so?.'
    }, {
      sender: 0,
      time: '10:14 am',
      text: 'Well I am not sure. The rest of the team.'
    }, {
      sender: 1,
      time: '10:20 am',
      text: 'Actually everything was fine. I am very excited to show this to our team.'
    }]
  }, {
    id: 2,
    message: []
  }, {
    id: 3,
    message: []
  }, {
    id: 4,
    message: []
  }, {
    id: 5,
    message: []
  }, {
    id: 6,
    message: []
  }, {
    id: 7,
    message: []
  }, {
    id: 8,
    message: []
  }];
}

/***/ }),

/***/ 89926:
/*!**********************************************!*\
  !*** ./src/app/shared/data/config/config.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConfigDB: () => (/* binding */ ConfigDB)
/* harmony export */ });
class ConfigDB {
  static #_ = this.data = {
    settings: {
      layout_type: 'ltr',
      sidebar: {
        type: 'default',
        body_type: 'default'
      },
      sidebar_setting: 'default-sidebar',
      sidebar_backround: 'dark-sidebar'
    },
    color: {
      layout_version: 'light',
      color: 'color-1',
      primary_color: '#4466f2',
      secondary_color: '#1ea6ec',
      mix_layout: 'default'
    },
    router_animation: 'fadeIn'
  };
}

/***/ }),

/***/ 34469:
/*!*********************************************************!*\
  !*** ./src/app/shared/directives/NgbdSortableHeader.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NgbdSortableHeader: () => (/* binding */ NgbdSortableHeader)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);


const rotate = {
  asc: 'desc',
  desc: '',
  '': 'asc'
};
class NgbdSortableHeader {
  constructor() {
    this.sortable = '';
    this.direction = '';
    this.sort = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  rotate() {
    console.info('clicked: ');
    this.direction = rotate[this.direction];
    this.sort.emit({
      column: this.sortable,
      direction: this.direction
    });
  }
  static #_ = this.ɵfac = function NgbdSortableHeader_Factory(t) {
    return new (t || NgbdSortableHeader)();
  };
  static #_2 = this.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: NgbdSortableHeader,
    selectors: [["th", "sortable", ""]],
    hostVars: 4,
    hostBindings: function NgbdSortableHeader_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgbdSortableHeader_click_HostBindingHandler($event) {
          return ctx.rotate($event);
        });
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("asc", ctx.direction === "asc")("desc", ctx.direction === "desc");
      }
    },
    inputs: {
      sortable: "sortable",
      direction: "direction"
    },
    outputs: {
      sort: "sort"
    }
  });
}

/***/ }),

/***/ 55103:
/*!***********************************************************!*\
  !*** ./src/app/shared/directives/fullscreen.directive.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ToggleFullscreenDirective: () => (/* binding */ ToggleFullscreenDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);

// var screenfull = require("screenfull");
class ToggleFullscreenDirective {
  onClick() {
    //  if (screenfull.enabled) {
    //    screenfull.toggle();
    //  }
  }
  static #_ = this.ɵfac = function ToggleFullscreenDirective_Factory(t) {
    return new (t || ToggleFullscreenDirective)();
  };
  static #_2 = this.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: ToggleFullscreenDirective,
    selectors: [["", "toggleFullscreen", ""]],
    hostBindings: function ToggleFullscreenDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToggleFullscreenDirective_click_HostBindingHandler() {
          return ctx.onClick();
        });
      }
    }
  });
}

/***/ }),

/***/ 18105:
/*!*********************************************!*\
  !*** ./src/app/shared/guard/admin.guard.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminGuard: () => (/* binding */ AdminGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 27947);


class AdminGuard {
  constructor(router) {
    this.router = router;
  }
  canActivate(next, state) {
    let user = JSON.parse(localStorage.getItem('user') || '{}');
    if (!user || user === null) {
      this.router.navigate(['/auth/login']);
      return true;
    } else if (user) {
      if (!Object.keys(user).length) {
        this.router.navigate(['/auth/login']);
        return true;
      }
    }
    return true;
  }
  static #_ = this.ɵfac = function AdminGuard_Factory(t) {
    return new (t || AdminGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: AdminGuard,
    factory: AdminGuard.ɵfac,
    providedIn: "root"
  });
}

/***/ }),

/***/ 78497:
/*!*************************************************!*\
  !*** ./src/app/shared/routes/content-routes.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   content: () => (/* binding */ content)
/* harmony export */ });
const content = [{
  path: 'dashboard',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_lodash-es__Stack_js-node_modules_lodash-es__cloneBuffer_js-node_modules_-344505"), __webpack_require__.e("default-node_modules_ngx-owl-carousel-o_fesm2022_ngx-owl-carousel-o_mjs"), __webpack_require__.e("default-node_modules_swimlane_ngx-charts_fesm2020_swimlane-ngx-charts_mjs-node_modules_ng-cha-71159b"), __webpack_require__.e("default-src_app_shared_data_chart_chartist_ts-node_modules_ng2-google-charts_fesm2015_ng2-goo-5e09f0"), __webpack_require__.e("src_app_components_dashboard_dashboard_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../components/dashboard/dashboard.module */ 51010)).then(m => m.DashboardModule),
  data: {
    breadcrumb: "Dashboard"
  }
}, {
  path: 'academics',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ngx-pagination_fesm2020_ngx-pagination_mjs"), __webpack_require__.e("default-src_app_services_roles-and-permission_service_ts-src_app_services_session_service_ts--b2d595"), __webpack_require__.e("default-node_modules_lodash_lodash_js"), __webpack_require__.e("default-src_app_services_member_service_ts-node_modules_angular_material_fesm2022_input_mjs"), __webpack_require__.e("src_app_components_academics_academics-routing_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../components/academics/academics-routing.module */ 88374)).then(m => m.AcademicsRoutingModule),
  data: {
    breadcrumb: "Academics"
  }
}, {
  path: 'attendance',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ngx-pagination_fesm2020_ngx-pagination_mjs"), __webpack_require__.e("src_app_components_attendance_attendance_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../components/attendance/attendance.module */ 57789)).then(m => m.AttendanceModule),
  data: {
    breadcrumb: "Attendance"
  }
}, {
  path: 'hostel',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ngx-pagination_fesm2020_ngx-pagination_mjs"), __webpack_require__.e("src_app_components_hostel_hostel_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../components/hostel/hostel.module */ 6342)).then(m => m.HostelModule),
  data: {
    breadcrumb: "Hostel"
  }
}, {
  path: 'inventory',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ngx-pagination_fesm2020_ngx-pagination_mjs"), __webpack_require__.e("src_app_components_inventory_inventory_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../components/inventory/inventory.module */ 54231)).then(m => m.InventoryModule),
  data: {
    breadcrumb: "Inventory"
  }
}, {
  path: 'internship',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ngx-pagination_fesm2020_ngx-pagination_mjs"), __webpack_require__.e("src_app_components_internship_internship_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../components/internship/internship.module */ 19892)).then(m => m.InternshipModule),
  data: {
    breadcrumb: "Internship"
  }
}, {
  path: 'student-information',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_services_roles-and-permission_service_ts-src_app_services_session_service_ts--b2d595"), __webpack_require__.e("default-src_app_services_agent_service_ts-src_app_services_member_service_ts-src_app_services-c943f6"), __webpack_require__.e("common"), __webpack_require__.e("src_app_components_student-information_student-information_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../components/student-information/student-information.module */ 84274)).then(m => m.StudentInformationModule),
  data: {
    breadcrumb: "Internship"
  }
}, {
  path: 'communication',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ngx-pagination_fesm2020_ngx-pagination_mjs"), __webpack_require__.e("default-node_modules_lodash-es__Stack_js-node_modules_lodash-es__cloneBuffer_js-node_modules_-344505"), __webpack_require__.e("default-node_modules_ckeditor_ckeditor5-build-classic_build_ckeditor_js-node_modules_ckeditor-501cfe"), __webpack_require__.e("default-node_modules_lodash_lodash_js"), __webpack_require__.e("src_app_components_communication_communication_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../components/communication/communication.module */ 87070)).then(m => m.CommunicationModule),
  data: {
    breadcrumb: "Communication"
  }
}, {
  path: 'fees-collection',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ngx-pagination_fesm2020_ngx-pagination_mjs"), __webpack_require__.e("src_app_components_fees-collection_fees-collection_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../components/fees-collection/fees-collection.module */ 9679)).then(m => m.FeesCollectionModule),
  data: {
    breadcrumb: "Fees Collection"
  }
}, {
  path: 'examination',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ngx-pagination_fesm2020_ngx-pagination_mjs"), __webpack_require__.e("default-src_app_services_roles-and-permission_service_ts-src_app_services_session_service_ts--b2d595"), __webpack_require__.e("src_app_components_examination_examination_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../components/examination/examination.module */ 74979)).then(m => m.ExaminationModule),
  data: {
    breadcrumb: "Examination"
  }
}, {
  path: 'human-resource',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ngx-pagination_fesm2020_ngx-pagination_mjs"), __webpack_require__.e("default-src_app_services_member_service_ts-node_modules_angular_material_fesm2022_input_mjs"), __webpack_require__.e("default-custom-filter_pipe_ts-src_app_services_roles-and-permission_service_ts-src_app_servic-1fa772"), __webpack_require__.e("default-node_modules_ngx-dropzone_fesm2020_ngx-dropzone_mjs"), __webpack_require__.e("common"), __webpack_require__.e("src_app_components_human-resource_human-resource_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../components/human-resource/human-resource.module */ 34030)).then(m => m.HumanResourceModule),
  data: {
    breadcrumb: "Human Resource"
  }
}, {
  path: 'library',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ngx-pagination_fesm2020_ngx-pagination_mjs"), __webpack_require__.e("src_app_components_library_library_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../components/library/library.module */ 96022)).then(m => m.LibraryModule),
  data: {
    breadcrumb: "Library"
  }
}, {
  path: 'others',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ngx-pagination_fesm2020_ngx-pagination_mjs"), __webpack_require__.e("default-custom-filter_pipe_ts-src_app_services_roles-and-permission_service_ts-src_app_servic-1fa772"), __webpack_require__.e("default-src_app_services_agent_service_ts-src_app_services_member_service_ts-src_app_services-c943f6"), __webpack_require__.e("src_app_components_others_others-routing_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../components/others/others-routing.module */ 81177)).then(m => m.OthersRoutingModule),
  data: {
    breadcrumb: "Others"
  }
}, {
  path: 'download-center',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ngx-pagination_fesm2020_ngx-pagination_mjs"), __webpack_require__.e("src_app_components_download-center_download-center_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../components/download-center/download-center.module */ 67991)).then(m => m.DownloadCenterModule),
  data: {
    breadcrumb: "Download Center"
  }
}, {
  path: 'base',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_components_base_base_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../../components/base/base.module */ 91150)).then(m => m.BaseModule),
  data: {
    breadcrumb: "Base"
  }
}, {
  path: 'advance',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ngx-owl-carousel-o_fesm2022_ngx-owl-carousel-o_mjs"), __webpack_require__.e("default-node_modules_ngx-slider-v2_fesm2022_ngx-slider-v2_mjs"), __webpack_require__.e("default-node_modules_ngx-dropzone_fesm2020_ngx-dropzone_mjs"), __webpack_require__.e("src_app_components_advance_advance_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../components/advance/advance.module */ 4176)).then(m => m.AdvanceModule),
  data: {
    breadcrumb: "Advance"
  }
}, {
  path: 'icons',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_components_icons_icons_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../../components/icons/icons.module */ 23344)).then(m => m.IconsModule),
  data: {
    breadcrumb: "Icons"
  }
}, {
  path: 'buttons',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_components_buttons_buttons_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../../components/buttons/buttons.module */ 94358)).then(m => m.ButtonsModule),
  data: {
    breadcrumb: "Buttons"
  }
}, {
  path: 'chart',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_lodash-es__Stack_js-node_modules_lodash-es__cloneBuffer_js-node_modules_-344505"), __webpack_require__.e("default-node_modules_swimlane_ngx-charts_fesm2020_swimlane-ngx-charts_mjs-node_modules_ng-cha-71159b"), __webpack_require__.e("default-src_app_shared_data_chart_chartist_ts-node_modules_ng2-google-charts_fesm2015_ng2-goo-5e09f0"), __webpack_require__.e("src_app_components_charts_charts_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../components/charts/charts.module */ 79848)).then(m => m.ChartModule),
  data: {
    breadcrumb: "Chart"
  }
}, {
  path: 'cards',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_components_cards_cards_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../../components/cards/cards.module */ 58091)).then(m => m.CardsModule),
  data: {
    breadcrumb: "Cards"
  }
}, {
  path: 'timeline',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_components_timeline_timeline_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../../components/timeline/timeline.module */ 62995)).then(m => m.TimelineModule),
  data: {
    breadcrumb: "Timeline"
  }
}, {
  path: 'form',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_components_forms_forms_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../../components/forms/forms.module */ 92463)).then(m => m.FormModule),
  data: {
    breadcrumb: "Form"
  }
}, {
  path: 'gallery',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ng-gallery_fesm2020_ng-gallery-lightbox_mjs"), __webpack_require__.e("src_app_components_gallery_gallery_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../components/gallery/gallery.module */ 44507)).then(m => m.GalleryDemoModule),
  data: {
    breadcrumb: "Gallery"
  }
}, {
  path: 'table',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_services_support-ticket_service_ts"), __webpack_require__.e("src_app_components_tables_tables_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../components/tables/tables.module */ 8160)).then(m => m.TablesModule),
  data: {
    breadcrumb: "Table"
  }
}, {
  path: 'editor',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_lodash-es__Stack_js-node_modules_lodash-es__cloneBuffer_js-node_modules_-344505"), __webpack_require__.e("default-node_modules_ckeditor_ckeditor5-build-classic_build_ckeditor_js-node_modules_ckeditor-501cfe"), __webpack_require__.e("src_app_components_editor_editor_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../components/editor/editor.module */ 77971)).then(m => m.EditorModule),
  data: {
    breadcrumb: "Editor"
  }
}, {
  path: 'users',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_components_users_users_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../../components/users/users.module */ 17653)).then(m => m.UsersModule),
  data: {
    breadcrumb: "Users"
  }
}, {
  path: 'calender',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_components_calender_calender_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../../components/calender/calender.module */ 21161)).then(m => m.CalenderModule),
  data: {
    breadcrumb: "calender"
  }
}, {
  path: 'to-do',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_components_to-do_to-do_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../../components/to-do/to-do.module */ 44219)).then(m => m.ToDoModule),
  data: {
    breadcrumb: "To-do"
  }
}, {
  path: 'email',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_lodash-es__Stack_js-node_modules_lodash-es__cloneBuffer_js-node_modules_-344505"), __webpack_require__.e("default-node_modules_ckeditor_ckeditor5-build-classic_build_ckeditor_js-node_modules_ckeditor-501cfe"), __webpack_require__.e("src_app_components_email_email_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../components/email/email.module */ 82390)).then(m => m.EmailModule),
  data: {
    breadcrumb: "Email"
  }
}, {
  path: 'blog',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_components_blog_blog_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../../components/blog/blog.module */ 12742)).then(m => m.BlogModule),
  data: {
    breadcrumb: "Blog"
  }
}, {
  path: 'social-app',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ng-gallery_fesm2020_ng-gallery-lightbox_mjs"), __webpack_require__.e("src_app_components_social-app_social-app_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../components/social-app/social-app.module */ 10714)).then(m => m.SocialAppModule),
  data: {
    breadcrumb: "Social-app"
  }
}, {
  path: 'job-search',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_components_job-search_job-search_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../../components/job-search/job-search.module */ 2223)).then(m => m.JobSearchModule),
  data: {
    breadcrumb: "Job-Search"
  }
}, {
  path: 'learning',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_components_learning_learning_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../../components/learning/learning.module */ 84172)).then(m => m.LearningModule),
  data: {
    breadcrumb: "Learning"
  }
}, {
  path: 'faq',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_components_faq_faq_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../../components/faq/faq.module */ 97261)).then(m => m.FaqModule),
  data: {
    breadcrumb: "Faq"
  }
}, {
  path: 'support-ticket',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_services_support-ticket_service_ts"), __webpack_require__.e("src_app_components_support-ticket_support-ticket_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../components/support-ticket/support-ticket.module */ 99546)).then(m => m.SupportTicketModule),
  data: {
    breadcrumb: "Support-Ticket"
  }
}, {
  path: 'pricing',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_components_pricing_pricing_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../../components/pricing/pricing.module */ 46930)).then(m => m.PricingModule),
  data: {
    breadcrumb: "Pricing"
  }
}, {
  path: 'knowledgebase',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_components_knowledge-base_knowledge-base_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../../components/knowledge-base/knowledge-base.module */ 1641)).then(m => m.KnowledgeBaseModule),
  data: {
    breadcrumb: "Knowledge-Base"
  }
}, {
  path: 'search-result',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ng-gallery_fesm2020_ng-gallery-lightbox_mjs"), __webpack_require__.e("src_app_components_search-result_search-result_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../components/search-result/search-result.module */ 73434)).then(m => m.SearchResultModule),
  data: {
    breadcrumb: "Search-Result"
  }
}, {
  path: 'sample-page',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_components_sample-page_sample-page_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../../components/sample-page/sample-page.module */ 62396)).then(m => m.SamplePageModule),
  data: {
    breadcrumb: "Sample-Page"
  }
}, {
  path: 'map',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_components_map_map_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../../components/map/map.module */ 76528)).then(m => m.MapModule),
  data: {
    breadcrumb: "Map"
  }
}, {
  path: 'ui-elements',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_components_ui-elements_ui-elements_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../../components/ui-elements/ui-elements.module */ 16378)).then(m => m.UiElementsModule),
  data: {
    breadcrumb: "UI-Elements"
  }
}, {
  path: 'widgets',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_lodash-es__Stack_js-node_modules_lodash-es__cloneBuffer_js-node_modules_-344505"), __webpack_require__.e("default-node_modules_ngx-owl-carousel-o_fesm2022_ngx-owl-carousel-o_mjs"), __webpack_require__.e("default-node_modules_swimlane_ngx-charts_fesm2020_swimlane-ngx-charts_mjs-node_modules_ng-cha-71159b"), __webpack_require__.e("src_app_components_widgets_widgets_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../components/widgets/widgets.module */ 60666)).then(m => m.WidgetsModule),
  data: {
    breadcrumb: "Widgets"
  }
}, {
  path: 'ecommerce',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ngx-owl-carousel-o_fesm2022_ngx-owl-carousel-o_mjs"), __webpack_require__.e("default-node_modules_ngx-slider-v2_fesm2022_ngx-slider-v2_mjs"), __webpack_require__.e("src_app_components_e-commerce_e-commerce_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../components/e-commerce/e-commerce.module */ 99191)).then(m => m.ECommerceModule),
  data: {
    breadcrumb: "Ecommerce"
  }
}, {
  path: 'chat',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_components_chat_chat_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../../components/chat/chat.module */ 94479)).then(m => m.ChatModule),
  data: {
    breadcrumb: "Chat"
  }
}, {
  path: 'contact',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ngx-slider-v2_fesm2022_ngx-slider-v2_mjs"), __webpack_require__.e("src_app_components_contact_contact_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../components/contact/contact.module */ 87202)).then(m => m.ContactModule),
  data: {
    breadcrumb: "Contact"
  }
}];

/***/ }),

/***/ 42348:
/*!**********************************************!*\
  !*** ./src/app/shared/routes/full.routes.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   full: () => (/* binding */ full)
/* harmony export */ });
const full = [{
  path: 'error',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_error-pages_error-pages_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../../pages/error-pages/error-pages.module */ 96232)).then(m => m.ErrorPagesModule)
}, {
  path: 'authentication',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_authentication_authentication_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../../pages/authentication/authentication.module */ 4672)).then(m => m.AuthenticationModule)
}, {
  path: 'comingsoon',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_coming-soon_coming-soon_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../../pages/coming-soon/coming-soon.module */ 14262)).then(m => m.ComingSoonModule)
}, {
  path: 'maintenance',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_maintenance_maintenance_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../../pages/maintenance/maintenance.module */ 16799)).then(m => m.MaintenanceModule)
}];

/***/ }),

/***/ 23022:
/*!*************************************************!*\
  !*** ./src/app/shared/services/chat.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChatService: () => (/* binding */ ChatService)
/* harmony export */ });
/* harmony import */ var _shared_data_chat_chat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/data/chat/chat */ 43489);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 12235);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 79736);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 61699);




var today = new Date().toLocaleString('en-US', {
  hour: 'numeric',
  minute: 'numeric',
  hour12: true
});
class ChatService {
  constructor() {
    this.chat = [];
    this.users = [];
    this.chat = _shared_data_chat_chat__WEBPACK_IMPORTED_MODULE_0__.ChatDB.chat;
    this.users = _shared_data_chat_chat__WEBPACK_IMPORTED_MODULE_0__.ChatDB.chatUser;
  }
  // Get User Data
  getUsers() {
    const users = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable(observer => {
      observer.next(this.users);
      observer.complete();
    });
    return users;
  }
  // Get cuurent user
  getCurrentUser() {
    return this.getUsers().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(users => {
      return users.find(item => {
        return item.authenticate === 1;
      });
    }));
  }
  // chat to user
  chatToUser(id) {
    return this.getUsers().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(users => {
      return users.find(item => {
        return item.id === id;
      });
    }));
  }
  // Get users chat
  getUserChat() {
    const chat = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable(observer => {
      observer.next(this.chat);
      observer.complete();
    });
    return chat;
  }
  // Get chat History
  getChatHistory(id) {
    return this.getUserChat().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(users => {
      return users.find(item => {
        return item.id === id;
      });
    }));
  }
  // Send Message to user
  sendMessage(chat) {
    this.chat.filter(chats => {
      if (chats.id == chat.receiver) {
        chats.message.push({
          sender: chat.sender,
          time: today.toLowerCase(),
          text: chat.message
        });
        setTimeout(function () {
          document.querySelector(".chat-history").scrollBy({
            top: 200,
            behavior: 'smooth'
          });
        }, 310);
        this.responseMessage(chat);
      }
    });
  }
  responseMessage(chat) {
    this.chat.filter(chats => {
      if (chats.id == chat.receiver) {
        setTimeout(() => {
          chats.message.push({
            sender: chat.receiver,
            time: today.toLowerCase(),
            text: 'Hey This is ' + chat.receiver_name + ', Sorry I busy right now, I will text you later'
          });
        }, 2000);
        setTimeout(function () {
          document.querySelector(".chat-history").scrollBy({
            top: 200,
            behavior: 'smooth'
          });
        }, 2310);
      }
    });
  }
  static #_ = this.ɵfac = function ChatService_Factory(t) {
    return new (t || ChatService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
    token: ChatService,
    factory: ChatService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 33844:
/*!*******************************************************!*\
  !*** ./src/app/shared/services/customizer.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomizerService: () => (/* binding */ CustomizerService)
/* harmony export */ });
/* harmony import */ var _shared_data_config_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/data/config/config */ 89926);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);


class CustomizerService {
  constructor() {
    // Configration Layout
    this.data = _shared_data_config_config__WEBPACK_IMPORTED_MODULE_0__.ConfigDB.data;
    document.body.className = this.data.color.mix_layout;
    document.body.setAttribute("main-theme-layout", this.data.settings.layout_type);
    document.getElementsByTagName('html')[0].setAttribute('dir', this.data.settings.layout_type);
    var color = localStorage.getItem("color") || this.data.color.color;
    var layoutVersion = localStorage.getItem("layoutVersion") || this.data.color.layout_version;
    if (color) {
      this.createStyle(color);
      if (layoutVersion) document.body.className = layoutVersion;
    }
  }
  // Set Customize layout Version
  setLayoutType(layout) {
    document.body.setAttribute("main-theme-layout", layout);
    document.getElementsByTagName('html')[0].setAttribute('dir', layout);
    this.data.settings.layout_type = layout;
  }
  // Set Customize layout Version
  setLayout(layout) {
    document.body.className = layout;
    this.data.color.mix_layout = layout;
    localStorage.setItem('layout_type', layout);
  }
  // Set Color 
  setColor(color) {
    this.createStyle(color);
    this.data.color.color = color;
    if (color == "color-1") {
      this.data.color.primary_color = '#4466f2';
      this.data.color.secondary_color = '#1ea6ec';
    } else if (color == "color-2") {
      this.data.color.primary_color = '#0288d1';
      this.data.color.secondary_color = '#26c6da';
    } else if (color == "color-3") {
      this.data.color.primary_color = '#8e24aa';
      this.data.color.secondary_color = '#ff6e40';
    } else if (color == "color-4") {
      this.data.color.primary_color = '#4c2fbf';
      this.data.color.secondary_color = '#2e9de4';
    } else if (color == "color-5") {
      this.data.color.primary_color = '#7c4dff';
      this.data.color.secondary_color = '#7b1fa2';
    } else if (color == "color-6") {
      this.data.color.primary_color = '#3949ab';
      this.data.color.secondary_color = '#4fc3f7';
    }
    localStorage.setItem('color', this.data.color.color);
    localStorage.setItem('primary_color', this.data.color.primary_color);
    localStorage.setItem('secondary_color', this.data.color.secondary_color);
    window.location.reload();
  }
  // Set Customize layout Version
  setColorLightScheme(color) {
    this.setColor(color);
    this.data.color.layout_version = 'light';
    localStorage.setItem('layoutVersion', this.data.color.layout_version);
  }
  // Set Customize layout Version
  setColorDarkScheme(color) {
    this.setColor(color);
    this.data.color.layout_version = 'dark-only';
    localStorage.setItem('layoutVersion', this.data.color.layout_version);
  }
  // Create style sheet append in head
  createStyle(color) {
    var head = document.head;
    var link = document.createElement("link");
    link.type = "text/css";
    link.rel = "stylesheet";
    link.href = window.location.origin + "/assets/css/" + color + ".css";
    head.appendChild(link);
  }
  static #_ = this.ɵfac = function CustomizerService_Factory(t) {
    return new (t || CustomizerService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: CustomizerService,
    factory: CustomizerService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 82484:
/*!************************************************!*\
  !*** ./src/app/shared/services/nav.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NavService: () => (/* binding */ NavService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 58071);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);


class NavService {
  constructor() {
    this.collapseSidebar = false;
    this.fullScreen = false;
    this.MENUITEMS = [{
      title: 'Academics',
      hidden: false,
      icon: 'home',
      type: 'sub',
      badgeType: 'primary',
      active: false,
      children: [{
        path: '/academics/subject-group',
        title: 'Subject Group',
        type: 'link',
        hidden: false
      }, {
        path: '/academics/assign-semester-teacher',
        title: 'Assign Semester Teacher',
        type: 'link',
        hidden: false
      }, {
        path: '/academics/create-semester-timeTable',
        title: 'Create Semester Timetable',
        type: 'link',
        hidden: false
      }, {
        path: '/academics/semester-timetable',
        title: 'Semester Timetable',
        type: 'link',
        hidden: false
      }, {
        path: '/academics/course',
        title: 'Course',
        type: 'link',
        hidden: false
      }, {
        path: '/academics/semester',
        title: 'Semester',
        type: 'link',
        hidden: false
      }, {
        path: '/academics/subject',
        title: 'Subject',
        type: 'link',
        hidden: false
      }, {
        path: '/academics/session',
        title: 'Session',
        type: 'link',
        hidden: false
      }, {
        path: '/academics/promote-students',
        title: 'Promote Students',
        type: 'link',
        hidden: false
      }]
    }, {
      title: 'Human Resource',
      hidden: false,
      icon: 'home',
      type: 'sub',
      badgeType: 'primary',
      active: false,
      children: [{
        path: '/human-resource/add-staff',
        title: 'Staff',
        type: 'link'
      }, {
        path: '/human-resource/staff-attendance',
        title: 'Staff Attendance',
        type: 'link'
      }, {
        path: '/human-resource/leave-type',
        title: 'Leave Type',
        type: 'link'
      }, {
        path: '/human-resource/allocate-leave',
        title: 'Allocate Leave',
        type: 'link'
      }, {
        path: '/human-resource/apply-leave',
        title: 'Apply Leave',
        type: 'link'
      }, {
        path: '/human-resource/approve-leave',
        title: 'Approve Leave',
        type: 'link'
      }, {
        path: '/human-resource/department',
        title: 'Department',
        type: 'link'
      }, {
        path: '/human-resource/designation',
        title: 'Designation',
        type: 'link'
      }, {
        path: '/human-resource/category',
        title: 'Category',
        type: 'link'
      }, {
        path: '/human-resource/holiday',
        title: 'Holiday',
        type: 'link'
      }, {
        path: '/human-resource/staff-payroll',
        title: 'Payroll',
        type: 'link'
      }]
    }, {
      title: 'Attendance',
      hidden: false,
      icon: 'home',
      type: 'sub',
      badgeType: 'primary',
      active: false,
      children: [{
        path: '/attendance/period-attendance',
        title: 'Period Attendance',
        type: 'link'
      }, {
        path: '/attendance/show-attendance',
        title: 'Show Attendance',
        type: 'link'
      }]
    }, {
      title: 'Library',
      hidden: false,
      icon: 'home',
      type: 'sub',
      badgeType: 'primary',
      active: false,
      children: [{
        path: '/library/itemStock',
        title: 'Add Item',
        type: 'link'
      }, {
        path: '/library/issueItem',
        title: 'Issue Book',
        type: 'link'
      }]
    }, {
      title: 'Hostel',
      hidden: false,
      icon: 'home',
      type: 'sub',
      badgeType: 'primary',
      active: false,
      children: [{
        path: '/hostel/hostel',
        title: 'Add Hostel',
        type: 'link'
      }, {
        path: '/hostel/roomType',
        title: 'Room Type',
        type: 'link'
      }, {
        path: '/hostel/addHostelRooms',
        title: 'Add Hostel Room',
        type: 'link'
      }]
    }, {
      title: 'Inventory',
      hidden: false,
      icon: 'home',
      type: 'sub',
      badgeType: 'primary',
      active: false,
      children: [{
        path: '/inventory/inventoryItem',
        title: 'Item Category',
        type: 'link'
      }, {
        path: '/inventory/addItem',
        title: 'Add Item',
        type: 'link'
      }]
    }, {
      title: 'Internship',
      hidden: false,
      icon: 'home',
      type: 'sub',
      badgeType: 'primary',
      active: false,
      children: [{
        path: '/internship/internshipProvider',
        title: 'Internship Provider',
        type: 'link'
      }, {
        path: '/internship/internship',
        title: 'Internship Details',
        type: 'link'
      }]
    }, {
      title: 'Student Information',
      hidden: false,
      icon: 'home',
      type: 'sub',
      badgeType: 'primary',
      active: false,
      children: [{
        path: '/student-information/studentAdmission',
        title: 'Student Admission',
        type: 'link'
      }]
    }, {
      title: 'Communication',
      hidden: false,
      icon: 'home',
      type: 'sub',
      badgeType: 'primary',
      active: false,
      children: [{
        path: '/communication/notice',
        title: 'Notice',
        type: 'link'
      }]
    }, {
      title: 'Examination',
      hidden: false,
      icon: 'home',
      type: 'sub',
      badgeType: 'primary',
      active: false,
      children: [{
        path: '/examination/subject-details',
        title: 'Subject Details',
        type: 'link'
      }, {
        path: '/examination/subject-questions',
        title: 'Subject Question',
        type: 'link'
      }, {
        path: '/examination/exam',
        title: 'Exam',
        type: 'link'
      }]
    }, {
      title: 'Fees Collection',
      hidden: false,
      icon: 'home',
      type: 'sub',
      badgeType: 'primary',
      active: false,
      children: [{
        path: '/fees-collection/fees-type',
        title: 'Fees Type',
        type: 'link'
      }, {
        path: '/fees-collection/fees-structure',
        title: 'Fees Structure',
        type: 'link'
      }, {
        path: '/fees-collection/collect-fees',
        title: 'Collect Fees',
        type: 'link'
      }, {
        path: '/fees-collection/discount',
        title: 'Discount/Scholarship',
        type: 'link'
      }]
    }, {
      title: 'Others',
      hidden: false,
      icon: 'home',
      type: 'sub',
      badgeType: 'primary',
      active: false,
      children: [{
        path: '/others/agent',
        title: 'Agent',
        type: 'link'
      }, {
        path: '/others/roles-and-permission',
        title: 'Roles And Permission',
        type: 'link'
      }, {
        path: '/others/user-types',
        title: 'Add User Type',
        type: 'link'
      }, {
        path: '/others/icard',
        title: 'Icard',
        type: 'link'
      }]
    }, {
      title: 'Download Center',
      hidden: false,
      icon: 'home',
      type: 'sub',
      badgeType: 'primary',
      active: false,
      children: [{
        path: '/download-center/upload-content',
        title: 'Upload Content',
        type: 'link'
      }, {
        path: '/download-center/assignment',
        title: 'Assignment',
        type: 'link'
      }, {
        path: '/download-center/study-material',
        title: 'Study Material',
        type: 'link'
      }]
    }
    // {
    // 	title: 'Dashboard', icon: 'home', type: 'sub', badgeType: 'primary', badgeValue: 'new', active: true, children: [
    // 		{ path: '/dashboard/default', title: 'Default', type: 'link' },
    // 		{ path: '/dashboard/e-commerce', title: 'E-Commerce', type: 'link', },
    // 		{ path: '/dashboard/university', title: 'University', type: 'link' },
    // 		{ path: '/dashboard/bitcoin', title: 'Crypto', type: 'link' },
    // 		{ path: '/dashboard/server', title: 'Server', type: 'link' },
    // 		{ path: '/dashboard/project', title: 'Project', type: 'link' }
    // 	]
    // },
    // {
    // 	title: 'Widgets', icon: 'airplay', type: 'sub', active: false, children: [
    // 		{ path: '/widgets/general', title: 'General', type: 'link' },
    // 		{ path: '/widgets/chart', title: 'Chart', type: 'link' }
    // 	]
    // },
    // {
    // 	title: 'UI-Elements', icon: 'slack', type: 'sub', active: false, children: [
    // 		{ path: '/ui-elements/avatars', title: 'Avatars', type: 'link' },
    // 		{ path: '/ui-elements/breadcrumb', title: 'Breadcrumb', type: 'link' },
    // 		{ path: '/ui-elements/grid', title: 'Grid', type: 'link' },
    // 		{ path: '/ui-elements/helper-classes', title: 'Helper-Classes', type: 'link' },
    // 		{ path: '/ui-elements/list', title: 'List', type: 'link' },
    // 		{ path: '/ui-elements/ribbons', title: 'Ribbons', type: 'link' },
    // 		{ path: '/ui-elements/shadow', title: 'Shadow', type: 'link' },
    // 		{ path: '/ui-elements/spinner', title: 'Spinner', type: 'link' },
    // 		{ path: '/ui-elements/steps', title: 'Steps', type: 'link' },
    // 		{ path: '/ui-elements/tag-n-pills', title: 'Tag and Pills', type: 'link' },
    // 		{ path: '/ui-elements/typography', title: 'Typography', type: 'link' }
    // 	]
    // },
    //
    // {
    // 	title: 'Base', icon: 'box', type: 'sub', active: false, children: [
    // 		{ path: '/base/accordion', title: 'Accordion', type: 'link' },
    // 		{ path: '/base/alert', title: 'Alert', type: 'link' },
    // 		{ path: '/base/buttons', title: 'Buttons', type: 'link' },
    // 		{ path: '/base/carousel', title: 'Carousel', type: 'link' },
    // 		{ path: '/base/collapse', title: 'Collapse', type: 'link' },
    // 		{ path: '/base/datepicker', title: 'Datepicker', type: 'link' },
    // 		{ path: '/base/dropdown', title: 'Dropdown', type: 'link' },
    // 		{ path: '/base/modal', title: 'Modal', type: 'link' },
    // 		{ path: '/base/pagination', title: 'Pagination', type: 'link' },
    // 		{ path: '/base/popover', title: 'Popover', type: 'link' },
    // 		{ path: '/base/progressbar', title: 'Progressbar', type: 'link' },
    // 		{ path: '/base/rating', title: 'Rating', type: 'link' },
    // 		{ path: '/base/tabset', title: 'Tabset', type: 'link' },
    // 		{ path: '/base/timepicker', title: 'Timepicker', type: 'link' },
    // 		{ path: '/base/tooltip', title: 'Tooltip', type: 'link' },
    // 		{ path: '/base/typeahead', title: 'Typeahead', type: 'link' }
    // 	]
    // },
    // {
    // 	title: 'Advance', icon: 'folder-plus', type: 'sub', active: false, children: [
    // 		{ path: '/advance/dropzone', title: 'Dropzone', type: 'link' },
    // 		{ path: '/advance/crop', title: 'Image Cropper', type: 'link' },
    // 		{ path: '/advance/toastr', title: 'Ngx Toastr', type: 'link' },
    // 		{ path: '/advance/owl-carousel', title: 'Owl-Carousel', type: 'link' },
    // 		{ path: '/advance/range-slider', title: 'Range Slider', type: 'link' },
    // 		{ path: '/advance/sticky', title: 'Sticky', type: 'link' },
    // 		{ path: '/advance/sweetalert', title: 'SweetAlert', type: 'link' },
    // 	]
    // },
    // {
    // 	title: 'Icons', icon: 'command', type: 'sub', active: false, children: [
    // 		{ path: '/icons/flag', title: 'Flag icon', type: 'link' },
    // 		{ path: '/icons/fontawesome', title: 'Fontawesome Icon', type: 'link' },
    // 		{ path: '/icons/ico', title: 'Ico Icon', type: 'link' },
    // 		{ path: '/icons/themify', title: 'Themify Icon', type: 'link' },
    // 		{ path: '/icons/feather', title: 'Feather Icon', type: 'link' },
    // 		{ path: '/icons/whether', title: 'Whether Icon', type: 'link' }
    // 	]
    // },
    // {
    // 	title: 'Buttons', icon: 'cloud', type: 'sub', active: false, children: [
    // 		{ path: '/buttons/default', title: 'Default Style', type: 'link' },
    // 		{ path: '/buttons/flat', title: 'Flat Style', type: 'link' },
    // 		{ path: '/buttons/edge', title: 'Edge Style', type: 'link' },
    // 		{ path: '/buttons/raised', title: 'Raised Style', type: 'link' },
    // 		{ path: '/buttons/group', title: 'Button Group', type: 'link' }
    // 	]
    // },
    // {
    // 	title: 'Gallery', icon: 'book', type: 'sub', children: [
    // 		{ path: '/gallery/gallery-grid', title: 'Gallery Grid', type: 'link' },
    // 		{ path: '/gallery/gallery-desc', title: 'Gallery Grid With Desc', type: 'link' },
    // 		{ path: '/gallery/mesonry', title: 'Masonry Gallery', type: 'link' },
    // 		{ path: '/gallery/hover-effect', title: 'Hover Effect', type: 'link' }
    // 	]
    // },
    // {
    // 	title: 'Forms', icon: 'file-text', type: 'sub', active: false, children: [
    // 		{
    // 			title: 'Form Controls', type: 'sub', children: [
    // 				{ path: '/form/validation', title: 'Form Validation', type: 'link' },
    // 				{ path: '/form/inputs', title: 'Base Inputs', type: 'link' },
    // 				{ path: '/form/checkbox-radio', title: 'Checkbox & Radio', type: 'link' },
    // 				{ path: '/form/input-groups', title: 'Input Groups', type: 'link' },
    // 				{ path: '/form/mega-options', title: 'Mega Options', type: 'link' }
    // 			]
    // 		},
    // 		{ path: '/form/form-default', title: 'Form Default', type: 'link' },
    //
    // 	]
    // },
    //
    // {
    // 	title: 'Tables', icon: 'server', type: 'sub', active: false, children: [
    // 		{
    // 			title: 'Bootstrap Tables', type: 'sub', active: false, children: [
    // 				{ path: '/table/basic', title: 'Basic Table', type: 'link' },
    // 				{ path: '/table/sizing', title: 'Sizing Table', type: 'link' },
    // 				{ path: '/table/border', title: 'Border Table', type: 'link' },
    // 				{ path: '/table/styling', title: 'Styling Table', type: 'link' }
    // 			]
    // 		},
    // 		{
    // 			title: 'Ngx-Datatables', type: 'sub', active: false, children: [
    // 				{ path: '/table/ngx-datatables/basic', title: 'Basic Table', type: 'link' },
    // 			]
    // 		}]
    // },
    // {
    // 	title: 'Cards', icon: 'book', type: 'sub', active: false, children: [
    // 		{ path: '/cards/basic', title: 'Basic Card', type: 'link' },
    // 		{ path: '/cards/creative', title: 'Creative Card', type: 'link' },
    // 		{ path: '/cards/tabbed', title: 'Tabbed Card', type: 'link' },
    // 	]
    // },
    // {
    // 	title: 'Timeline', icon: 'sliders', type: 'sub', active: false, children: [
    // 		{ path: '/timeline/timeline1', title: 'Timeline', type: 'link' }
    // 	]
    // },
    // {
    // 	title: 'Charts', icon: 'bar-chart', type: 'sub', active: false, children: [
    // 		{ path: '/chart/google', title: 'Google Chart', type: 'link' },
    // 		{ path: '/chart/chartjs', title: 'Chartjs', type: 'link' },
    // 		{ path: '/chart/chartist', title: 'Chartist', type: 'link' },
    // 		{ path: '/chart/ngx-chart', title: 'Ngx-Chart', type: 'link' }
    // 	]
    // },
    // {
    // 	title: 'Map', icon: 'map', type: 'sub', active: false, children: [
    // 		{ path: '/map/google', title: 'Google Map', type: 'link' },
    // 		{ path: '/map/leaflet', title: 'Leaflet Map', type: 'link' }
    // 	]
    // },
    // {
    // 	path: '/editor', title: 'Editor', icon: 'git-pull-request', type: 'link'
    // },
    // {
    // 	title: 'Users', icon: 'users', type: 'sub', active: false, children: [
    // 		{ path: '/users/profile', title: 'Users Profile', type: 'link' },
    // 		{ path: '/users/edit', title: 'Users Edit', type: 'link' },
    // 		{ path: '/users/cards', title: 'Users Cards', type: 'link' }
    // 	]
    // },
    // {
    // 	path: '/calender', title: 'Calender', icon: 'calendar', type: 'link', bookmark: true
    // },
    // {
    // 	title: 'Blog', icon: 'edit', type: 'sub', active: false, children: [
    // 		{ path: '/blog/details', title: 'Blog Details', type: 'link' },
    // 		{ path: '/blog/single', title: 'Blog Single', type: 'link' }
    // 	]
    // },
    // {
    // 	path: '/email', title: 'Email', icon: 'mail', type: 'link', bookmark: true
    // },
    // {
    // 	path: '/contact/contacts', title: 'contact', icon: 'user-plus', type: 'link'
    // },
    // {
    // 	path: '/chat', title: 'Chat', icon: 'message-square', type: 'link', bookmark: true
    // },
    // {
    // 	path: '/social-app', title: 'Social App', icon: 'chrome', type: 'link'
    // },
    // {
    // 	title: 'Job-Search', icon: 'user-check', type: 'sub', active: false, children: [
    // 		{ path: '/job-search/cardview', title: 'Card View', type: 'link' },
    // 		{ path: '/job-search/listview', title: 'List View', type: 'link' },
    // 		{ path: '/job-search/job-desc/1', title: 'Job Detail', type: 'link' },
    // 		{ path: '/job-search/job-apply/1', title: 'Apply', type: 'link' }
    // 	]
    // },
    // {
    // 	title: 'Learning', icon: 'layers', type: 'sub', active: false, children: [
    // 		{ path: '/learning/learninglist', title: 'Learning List', type: 'link' },
    // 		{ path: '/learning/learning-detail/1', title: 'Detail Course', type: 'link' },
    // 	]
    // },
    // {
    // 	path: '/faq', title: 'FAQ', icon: 'help-circle', type: 'link'
    // },
    // {
    // 	path: '/knowledgebase', title: 'Knowledgebase', icon: 'database', type: 'link'
    // },
    // {
    // 	path: '/support-ticket', title: 'Support Ticket', icon: 'headphones', type: 'link'
    // },
    // {
    // 	path: '/to-do', title: 'To-Do', icon: 'mic', type: 'link'
    // },
    // {
    // 	title: 'Ecommerce', icon: 'shopping-bag', type: 'sub', active: false, children: [
    // 		{ path: '/ecommerce/products', title: 'Product', type: 'link' },
    // 		{ path: '/ecommerce/product-details/1', title: 'Product page', type: 'link' },
    // 		{ path: '/ecommerce/product/list', title: 'Product list', type: 'link' },
    // 		{ path: '/ecommerce/payment/detail', title: 'Payment Details', type: 'link' },
    // 		{ path: '/ecommerce/order', title: 'Order History', type: 'link' }
    // 	]
    // },
    // {
    // 	path: '/pricing', title: 'Pricing', icon: 'dollar-sign', type: 'link'
    // },
    // {
    // 	path: '/sample-page', title: 'Sample page', icon: 'file', type: 'link'
    // },
    // {
    // 	path: '/search-result', title: 'Search Page', icon: 'search', type: 'link'
    // },
    // {
    // 	title: 'Error Page', icon: 'alert-octagon', type: 'sub', active: false, children: [
    // 		{ path: 'error/400', title: 'Error 400', type: 'extTabLink' },
    // 		{ path: 'error/401', title: 'Error 401', type: 'extTabLink' },
    // 		{ path: 'error/403', title: 'Error 403', type: 'extTabLink' },
    // 		{ path: 'error/404', title: 'Error 404', type: 'extTabLink' },
    // 		{ path: 'error/500', title: 'Error 500', type: 'extTabLink' },
    // 		{ path: 'error/503', title: 'Error 503', type: 'extTabLink' }
    // 	]
    // },
    // {
    // 	title: 'Authentication', icon: 'unlock', type: 'sub', active: false, children: [
    // 		{ path: 'authentication/login', title: 'Login Simple', type: 'extTabLink' },
    // 		{ path: 'authentication/login/image', title: 'Login with Bg Image', type: 'extTabLink' },
    // 		{ path: 'authentication/login/video', title: 'Login with Bg video', type: 'extTabLink' },
    // 		{ path: 'authentication/register', title: 'Register Simple', type: 'extTabLink' },
    // 		{ path: 'authentication/register/image', title: 'Register with Bg Image', type: 'extTabLink' },
    // 		{ path: 'authentication/register/video', title: 'Register with Bg video', type: 'extTabLink' },
    // 		{ path: 'authentication/unlockuser', title: 'Unlock User', type: 'extTabLink' },
    // 		{ path: 'authentication/forgetpassword', title: 'Forget Password', type: 'extTabLink' },
    // 		{ path: 'authentication/resetpassword', title: 'Reset Password', type: 'extTabLink' }
    // 	]
    // },
    // {
    // 	title: 'Coming Soon', icon: 'briefcase', type: 'sub', active: false, children: [
    // 		{ path: 'comingsoon/page', title: 'Coming Simple', type: 'extTabLink' },
    // 		{ path: 'comingsoon/page/image', title: 'Coming with Bg Image', type: 'extTabLink' },
    // 		{ path: 'comingsoon/page/video', title: 'Coming with Bg video', type: 'extTabLink' }
    // 	]
    // },
    // {
    // 	path: '/maintenance', title: 'Maintenance', icon: 'settings', type: 'link'
    // },
    ];
    // Array
    this.items = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(this.MENUITEMS);
    this.onResize();
    if (this.screenWidth < 991) {
      this.collapseSidebar = true;
    }
  }
  // Windows width
  onResize(event) {
    this.screenWidth = window.innerWidth;
  }
  static #_ = this.ɵfac = function NavService_Factory(t) {
    return new (t || NavService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: NavService,
    factory: NavService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 13357:
/*!**************************************************!*\
  !*** ./src/app/shared/services/table.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TableService: () => (/* binding */ TableService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 58071);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 72513);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 84980);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 13738);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 50655);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 81891);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 77592);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 26575);




const compare = (v1, v2) => v1 < v2 ? -1 : v1 > v2 ? 1 : 0;
function sort(tableItem, column, direction) {
  if (direction === '' || column === '') {
    return tableItem;
  } else {
    return [...tableItem].sort((a, b) => {
      const res = compare(a[column], b[column]);
      return direction === 'asc' ? res : -res;
    });
  }
}
function matches(country, term, pipe) {
  return country.name.toLowerCase().includes(term.toLowerCase()) || pipe.transform(country.area).includes(term) || pipe.transform(country.population).includes(term);
}
class TableService {
  constructor(pipe) {
    this.pipe = pipe;
    this._loading$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(true);
    this._search$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    this._tableItem$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject([]);
    this._total$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(0);
    this._state = {
      page: 1,
      pageSize: 10,
      searchTerm: '',
      sortColumn: '',
      sortDirection: ''
    };
    this._search$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.tap)(() => this._loading$.next(true)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.debounceTime)(200), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.switchMap)(() => this._search()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.delay)(200), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.tap)(() => this._loading$.next(false))).subscribe(result => {
      this._tableItem$.next(result.tableItem);
      this._total$.next(result.total);
    });
    this._search$.next();
  }
  get tableItem$() {
    return this._tableItem$.asObservable();
  }
  get total$() {
    return this._total$.asObservable();
  }
  get loading$() {
    return this._loading$.asObservable();
  }
  get page() {
    return this._state.page;
  }
  get pageSize() {
    return this._state.pageSize;
  }
  get searchTerm() {
    return this._state.searchTerm;
  }
  set page(page) {
    this._set({
      page
    });
  }
  set pageSize(pageSize) {
    this._set({
      pageSize
    });
  }
  set searchTerm(searchTerm) {
    this._set({
      searchTerm
    });
  }
  set sortColumn(sortColumn) {
    this._set({
      sortColumn
    });
  }
  set sortDirection(sortDirection) {
    this._set({
      sortDirection
    });
  }
  setUserData(val) {
    this.userData = val;
  }
  deleteSingleData(name) {
    const tableItem = this.userData;
    const total = tableItem.length;
    tableItem.map(item => {
      if (name === item.name) {
        this.userData.splice(name, 1);
      }
    });
    return this._tableItem$.next(tableItem), this._total$.next(total);
  }
  _set(patch) {
    Object.assign(this._state, patch);
    this._search$.next();
  }
  _search() {
    const {
      sortColumn,
      sortDirection,
      pageSize,
      page
    } = this._state;
    // 1. sort
    let tableItem = sort(this.userData, sortColumn, sortDirection);
    // 2. filter
    const total = tableItem.length;
    tableItem = tableItem.map((item, i) => ({
      id: i + 1,
      ...item
    })).slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize);
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)({
      tableItem,
      total
    });
  }
  static #_ = this.ɵfac = function TableService_Factory(t) {
    return new (t || TableService)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_8__.DecimalPipe));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({
    token: TableService,
    factory: TableService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 56208:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HttpLoaderFactory: () => (/* binding */ HttpLoaderFactory),
/* harmony export */   SharedModule: () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/loader/loader.component */ 99185);
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/header/header.component */ 10074);
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/footer/footer.component */ 68014);
/* harmony import */ var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/sidebar/sidebar.component */ 57378);
/* harmony import */ var _components_layout_content_layout_content_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/layout/content-layout/content-layout.component */ 5282);
/* harmony import */ var _components_layout_full_layout_full_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/layout/full-layout/full-layout.component */ 549);
/* harmony import */ var _components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/feather-icons/feather-icons.component */ 49177);
/* harmony import */ var _components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/breadcrumb/breadcrumb.component */ 14414);
/* harmony import */ var _components_right_sidebar_right_sidebar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/right-sidebar/right-sidebar.component */ 36809);
/* harmony import */ var _components_bookmark_bookmark_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/bookmark/bookmark.component */ 15450);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @ngx-translate/core */ 21916);
/* harmony import */ var _components_customizer_customizer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/customizer/customizer.component */ 40155);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 76101);
/* harmony import */ var _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @ks89/angular-modal-gallery */ 31841);
/* harmony import */ var _services_nav_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/nav.service */ 82484);
/* harmony import */ var _services_chat_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/chat.service */ 23022);
/* harmony import */ var _services_customizer_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/customizer.service */ 33844);
/* harmony import */ var _services_table_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/table.service */ 13357);
/* harmony import */ var _directives_fullscreen_directive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./directives/fullscreen.directive */ 55103);
/* harmony import */ var _directives_NgbdSortableHeader__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./directives/NgbdSortableHeader */ 34469);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ngx-translate/http-loader */ 26930);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ 61699);

















// services




// Directives




function HttpLoaderFactory(http) {
  return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_17__.TranslateHttpLoader(http);
}
class SharedModule {
  static #_ = this.ɵfac = function SharedModule_Factory(t) {
    return new (t || SharedModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineNgModule"]({
    type: SharedModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineInjector"]({
    providers: [_services_nav_service__WEBPACK_IMPORTED_MODULE_11__.NavService, _services_chat_service__WEBPACK_IMPORTED_MODULE_12__.ChatService, _services_customizer_service__WEBPACK_IMPORTED_MODULE_13__.CustomizerService, _services_table_service__WEBPACK_IMPORTED_MODULE_14__.TableService, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_19__.NgbModule],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_20__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_21__.RouterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_22__.FormsModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__.TranslateModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_19__.NgbModule, _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_24__.GalleryModule, _angular_forms__WEBPACK_IMPORTED_MODULE_22__.ReactiveFormsModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__.TranslateModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵsetNgModuleScope"](SharedModule, {
    declarations: [_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_0__.LoaderComponent, _components_header_header_component__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent, _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__.FooterComponent, _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__.SidebarComponent, _components_bookmark_bookmark_component__WEBPACK_IMPORTED_MODULE_9__.BookmarkComponent, _components_right_sidebar_right_sidebar_component__WEBPACK_IMPORTED_MODULE_8__.RightSidebarComponent, _components_layout_content_layout_content_layout_component__WEBPACK_IMPORTED_MODULE_4__.ContentLayoutComponent, _components_layout_full_layout_full_layout_component__WEBPACK_IMPORTED_MODULE_5__.FullLayoutComponent, _components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_6__.FeatherIconsComponent, _directives_fullscreen_directive__WEBPACK_IMPORTED_MODULE_15__.ToggleFullscreenDirective, _directives_NgbdSortableHeader__WEBPACK_IMPORTED_MODULE_16__.NgbdSortableHeader, _components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_7__.BreadcrumbComponent, _components_customizer_customizer_component__WEBPACK_IMPORTED_MODULE_10__.CustomizerComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_20__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_21__.RouterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_22__.FormsModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__.TranslateModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_19__.NgbModule, _ks89_angular_modal_gallery__WEBPACK_IMPORTED_MODULE_24__.GalleryModule, _angular_forms__WEBPACK_IMPORTED_MODULE_22__.ReactiveFormsModule],
    exports: [_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_0__.LoaderComponent, _components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_6__.FeatherIconsComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__.TranslateModule, _directives_NgbdSortableHeader__WEBPACK_IMPORTED_MODULE_16__.NgbdSortableHeader]
  });
})();

/***/ }),

/***/ 20553:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
const environment = {
  production: true,
  BASE_API_URL: 'https://rgoi.in/college_api/public/api',
  FILE_URL: 'https://rgoi.in/college_api/public/'
};

/***/ }),

/***/ 14913:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 36480);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 78629);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 20553);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(14913)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.cd91be62af4151b4.js.map