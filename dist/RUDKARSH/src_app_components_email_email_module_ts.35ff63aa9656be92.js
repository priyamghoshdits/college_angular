"use strict";
(self["webpackChunkRUDKARSH"] = self["webpackChunkRUDKARSH"] || []).push([["src_app_components_email_email_module_ts"],{

/***/ 26643:
/*!**********************************************************!*\
  !*** ./src/app/components/email/email-routing.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EmailRoutingModule: () => (/* binding */ EmailRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _email_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./email.component */ 63166);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);




const routes = [{
  path: '',
  children: [{
    path: '',
    component: _email_component__WEBPACK_IMPORTED_MODULE_0__.EmailComponent,
    data: {
      title: "Email",
      breadcrumb: ""
    }
  }]
}];
class EmailRoutingModule {
  static #_ = this.ɵfac = function EmailRoutingModule_Factory(t) {
    return new (t || EmailRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: EmailRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](EmailRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 63166:
/*!*****************************************************!*\
  !*** ./src/app/components/email/email.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EmailComponent: () => (/* binding */ EmailComponent)
/* harmony export */ });
/* harmony import */ var _shared_data_email_email__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/data/email/email */ 88638);
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ckeditor/ckeditor5-build-classic */ 37914);
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 76101);
/* harmony import */ var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ckeditor/ckeditor5-angular */ 18301);







function EmailComponent_a_116_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 22)(1, "div", 8)(2, "label", 98)(3, "input", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function EmailComponent_a_116_Template_input_change_3_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);
      const userEmail_r2 = restoredCtx.$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.selectedmail($event, userEmail_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EmailComponent_a_116_Template_div_click_4_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);
      const userEmail_r2 = restoredCtx.$implicit;
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r5.selectedUserEmail(userEmail_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "img", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EmailComponent_a_116_Template_div_click_6_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);
      const userEmail_r2 = restoredCtx.$implicit;
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r6.selectedUserEmail(userEmail_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "(");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "span", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const userEmail_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", userEmail_r2.image, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", userEmail_r2.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](userEmail_r2.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](userEmail_r2.cc);
  }
}
function EmailComponent_ng_container_118_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 103)(2, "div", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "No mail found");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
}
const _c0 = a0 => ({
  "active show": a0
});
class EmailComponent {
  constructor() {
    this.compose = true;
    this.allEmails = _shared_data_email_email__WEBPACK_IMPORTED_MODULE_0__.Mail.Emails;
    this.selectedEmails = [];
    this.ClassicEditor = _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_1__;
  }
  getUserEmail(type) {
    let emails = [];
    return this.allEmails.filter(email => {
      if (type == 'allmail') {
        return emails.push(email);
      } else if (type == 'favourite') {
        if (email.favourite) {
          return emails.push(email);
        }
      } else if (email.type === type) {
        return emails.push(email);
      }
      return;
    });
  }
  selectedUserEmail(email) {
    this.selectEmail = email;
    this.compose = false;
  }
  selectedmail($event, email) {
    var index = this.selectedEmails.indexOf(email);
    if ($event.target.checked === true && index === -1) {
      // val not found, pushing onto array
      this.selectedEmails.push(email);
    } else {
      // val is found, removing from array
      this.selectedEmails.splice(index, 1);
    }
  }
  moveEmails(val) {
    if (!val) return;
    this.selectedEmails.filter(email => {
      return email.type = val;
    });
  }
  addFavourite(email) {
    email.favourite = !email.favourite;
  }
  ngOnInit() {}
  static #_ = this.ɵfac = function EmailComponent_Factory(t) {
    return new (t || EmailComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: EmailComponent,
    selectors: [["app-email"]],
    decls: 206,
    vars: 28,
    consts: [[1, "container-fluid"], [1, "email-wrap"], [1, "row"], [1, "col-xl-3", "col-md-6"], [1, "email-left-aside"], [1, "card"], [1, "card-body"], [1, "email-app-sidebar"], [1, "d-flex", "mediaClass"], [1, "media-size-email"], ["src", "assets/images/user/1.jpg", "alt", "", 1, "me-3", "rounded-circle", "img-60"], ["m-l-15", "", 1, "flex-grow-1", "mediaBodyClass"], [1, "f-w-600"], ["role", "tablist", 1, "nav", "main-menu"], [1, "nav-item"], ["href", "javascript:void(0)", "id", "pills-darkhome-tab", "data-bs-toggle", "pill", "role", "tab", "aria-controls", "pills-darkhome", "aria-selected", "true", 1, "btn-primary", "btn-block", "btn-mail", 3, "click"], [1, "icofont", "icofont-envelope", "me-2"], [1, "nav-item", 3, "click"], ["href", "javascript:void(0)", "id", "pills-darkprofile-tab", "data-bs-toggle", "pill", "role", "tab", "aria-controls", "pills-darkprofile", "aria-selected", "false", 1, "show"], [1, "title"], [1, "icon-import"], [3, "click"], ["href", "javascript:void(0)"], [1, "icon-folder"], [1, "icon-new-window"], [1, "icon-pencil-alt"], [1, "icon-trash"], [1, "icon-info-alt"], [1, "icon-star"], [1, "icon-email"], [1, "icon-export"], [1, "icon-share"], [1, "icon-file"], [1, "icon-bell"], [1, "icon-notepad"], [1, "badge", "pull-right", "digits"], [1, "email-right-aside"], [1, "card", "email-body"], [1, "pe-0", "b-r-light"], [1, "email-top"], [1, "col"], [1, "col", "text-end"], ["ngbDropdown", "", 1, "dropdown"], ["id", "dropdownMenuButton", "ngbDropdownToggle", "", 1, "btn", "bg-transparent", "dropdown-toggle", "p-0", "text-muted"], ["ngbDropdownMenu", "", "aria-labelledby", "dropdownMenuButton", 1, "email-option-position"], ["href", "javascript:void(0)", 1, "dropdown-item", 3, "click"], [1, "inbox"], ["href", "javascript:void(0)", 4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "col-xl-6", "col-md-12"], [1, "card", "email-body", "radius-left"], [1, "ps-0"], [1, "tab-content"], ["id", "pills-darkhome", "role", "tabpanel", "aria-labelledby", "pills-darkhome-tab", 1, "tab-pane", "fade", 3, "ngClass"], [1, "email-compose"], [1, "email-top", "compose-border"], [1, "col-sm-8", "xl-50"], [1, "mb-0"], [1, "col-sm-4", "btn-middle", "xl-50"], ["type", "button", 1, "btn", "btn-primary", "btn-block", "btn-mail", "text-center", "mb-0", "mt-0"], [1, "fa", "fa-paper-plane", "me-2"], [1, "email-wrapper"], [1, "theme-form"], [1, "form-group"], ["for", "exampleInputEmail1", 1, "col-form-label", "pt-0"], ["id", "exampleInputEmail1", "type", "email", 1, "form-control"], ["for", "exampleInputPassword1"], ["id", "exampleInputPassword1", "type", "text", 1, "form-control"], [1, "form-group", "mb-0"], [1, "text-muted"], ["data", "<p>Hello, world!</p>", 3, "editor"], ["id", "pills-darkprofile", "role", "tabpanel", "aria-labelledby", "pills-darkprofile-tab", 1, "tab-pane", "fade", 3, "ngClass"], [1, "email-content"], [1, "col-md-6", "xl-100", "col-sm-12"], ["alt", "image", 1, "me-3", "rounded-circle", "img-50", 3, "src"], [1, "digits"], [1, "col-md-6", "col-sm-12"], [1, "float-end", "d-flex", "mediaClass"], [1, "user-emailid"], [1, "fa", "fa-star-o", "f-18", "mt-1", 3, "click"], [3, "innerHTML"], [1, "d-inline-block"], [1, "icofont", "icofont-clip"], ["href", "javascript:void(0)", 1, "text-muted", "text-end", "right-download"], [1, "fa", "fa-long-arrow-down", "me-2"], [1, "clearfix"], [1, "attachment"], [1, "list-inline"], [1, "list-inline-item"], ["src", "assets/images/email/1.jpg", "alt", "", 1, "img-fluid"], ["src", "assets/images/email/2.jpg", "alt", "", 1, "img-fluid"], ["src", "assets/images/email/3.jpg", "alt", "", 1, "img-fluid"], [1, "action-wrapper"], [1, "actions"], ["href", "javascript:void(0)", 1, "text-muted"], [1, "fa", "fa-reply", "me-2"], [1, "fa", "fa-reply-all", "me-2"], [1, "fa", "fa-share", "me-2"], ["for", "chk-ani", 1, "d-block"], ["id", "chk-ani", "name", "chk-ani", "type", "checkbox", 1, "checkbox_animated", 3, "change"], [1, "media-size-email", 3, "click"], ["alt", "", 1, "me-3", "rounded-circle", "img-50", 3, "src"], [1, "flex-grow-1", "mediaBodyClass", "m-l-15", 3, "click"], [1, "search-not-found", "text-center"], [1, ""], ["src", "assets/images/search-not-found.png", "alt", "", 1, "second-search"]],
    template: function EmailComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "div", 8)(9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 11)(12, "h6", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "MARKJENCO");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Markjecno@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "ul", 13)(17, "li", 14)(18, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EmailComponent_Template_a_click_18_listener() {
          return ctx.compose = true;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, " NEW MAIL ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "li", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EmailComponent_Template_li_click_21_listener() {
          return ctx.getUserEmail(ctx.type = "inbox");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "a", 18)(23, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, " Inbox");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "li", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EmailComponent_Template_li_click_27_listener() {
          return ctx.getUserEmail(ctx.type = "allmail");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "a", 22)(29, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](30, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, " All mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "li", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EmailComponent_Template_li_click_32_listener() {
          return ctx.getUserEmail(ctx.type = "sent");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "a", 22)(34, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](35, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, " Sent");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "li", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EmailComponent_Template_li_click_38_listener() {
          return ctx.getUserEmail(ctx.type = "draft");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "a", 22)(40, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](41, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, " DRAFT");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "li", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EmailComponent_Template_li_click_44_listener() {
          return ctx.getUserEmail(ctx.type = "trash");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "a", 22)(46, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](47, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, " TRASH");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "li")(51, "a", 22)(52, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](53, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](54, " IMPORTANT");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "li", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EmailComponent_Template_li_click_55_listener() {
          return ctx.getUserEmail(ctx.type = "favourite");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "a", 22)(57, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](58, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59, " Starred");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](61, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "li", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EmailComponent_Template_li_click_62_listener() {
          return ctx.getUserEmail(ctx.type = "unread");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "a", 22)(64, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](65, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](66, " UNREAD");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "li", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EmailComponent_Template_li_click_67_listener() {
          return ctx.getUserEmail(ctx.type = "spam");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "a", 22)(69, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](70, "i", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](71, " SPAM");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "li", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EmailComponent_Template_li_click_72_listener() {
          return ctx.getUserEmail(ctx.type = "outbox");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "a", 22)(74, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](75, "i", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](76, " OUTBOX");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](77, "li")(78, "a", 22)(79, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](80, "i", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](81, " UPDATE");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](82, "li")(83, "a", 22)(84, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](85, "i", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](86, " ALERT");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](87, "li")(88, "a", 22)(89, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](90, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](91, " NOTES");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](92, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](93, "(20)");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](94, "div", 3)(95, "div", 36)(96, "div", 37)(97, "div", 38)(98, "div", 39)(99, "div", 2)(100, "div", 40)(101, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](102);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](103, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](104, "div", 41)(105, "div", 42)(106, "button", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](107, "More");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](108, "div", 44)(109, "a", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EmailComponent_Template_a_click_109_listener() {
          return ctx.moveEmails("draft");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](110, "Move to Draft");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](111, "a", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EmailComponent_Template_a_click_111_listener() {
          return ctx.moveEmails("trash");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](112, "Move to Trash");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](113, "a", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EmailComponent_Template_a_click_113_listener() {
          return ctx.moveEmails("spam");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](114, "Move to Spam");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](115, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](116, EmailComponent_a_116_Template, 16, 4, "a", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](117, "slice");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](118, EmailComponent_ng_container_118_Template, 6, 0, "ng-container", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](119, "div", 49)(120, "div", 36)(121, "div", 50)(122, "div", 51)(123, "div", 52)(124, "div", 53)(125, "div", 54)(126, "div", 55)(127, "div", 2)(128, "div", 56)(129, "h4", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](130, "New Message");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](131, "div", 58)(132, "button", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](133, "i", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](134, " SEND");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](135, "div", 61)(136, "form", 62)(137, "div", 63)(138, "label", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](139, "To");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](140, "input", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](141, "div", 63)(142, "label", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](143, "Subject");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](144, "input", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](145, "div", 68)(146, "label", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](147, "Message");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](148, "ckeditor", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](149, "div", 71)(150, "div", 72)(151, "div", 39)(152, "div", 2)(153, "div", 73)(154, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](155, "img", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](156, "div", 11)(157, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](158);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](159, "small")(160, "span", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](161);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](162, "span", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](163, " 6:00");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](164, " AM");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](165, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](166);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](167, "div", 76)(168, "div", 77)(169, "p", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](170);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](171, "i", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EmailComponent_Template_i_click_171_listener() {
          return ctx.addFavourite(ctx.selectEmail);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](172, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](173, "span", 80)(174, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](175, "div", 81)(176, "h6", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](177, "i", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](178, " ATTACHMENTS");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](179, "a", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](180, "i", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](181, "Download All");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](182, "div", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](183, "div", 86)(184, "ul", 87)(185, "li", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](186, "img", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](187, "li", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](188, "img", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](189, "li", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](190, "img", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](191, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](192, "div", 92)(193, "ul", 93)(194, "li")(195, "a", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](196, "i", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](197, "Reply");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](198, "li")(199, "a", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](200, "i", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](201, "Reply All");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](202, "li")(203, "a", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](204, "i", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](205, "Forward");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" (", ctx.getUserEmail("inbox").length, ") ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" (", ctx.getUserEmail("sent").length, ") ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" (", ctx.getUserEmail("draft").length, ") ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" (", ctx.getUserEmail("trash").length, ") ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](53);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.type ? _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](103, 18, ctx.type) : "Inbox");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind3"](117, 20, ctx.getUserEmail(ctx.type ? ctx.type : "inbox"), 0, 7));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.getUserEmail(ctx.type ? ctx.type : "inbox").length);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](24, _c0, ctx.compose));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("editor", ctx.ClassicEditor);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](26, _c0, !ctx.compose));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", ctx.selectEmail == null ? null : ctx.selectEmail.image, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx.selectEmail == null ? null : ctx.selectEmail.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("(", ctx.selectEmail == null ? null : ctx.selectEmail.date, ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.selectEmail == null ? null : ctx.selectEmail.cc);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.selectEmail == null ? null : ctx.selectEmail.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("starred", ctx.selectEmail == null ? null : ctx.selectEmail.favourite);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", ctx.selectEmail == null ? null : ctx.selectEmail.text, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbDropdownMenu, _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_6__.CKEditorComponent, _angular_common__WEBPACK_IMPORTED_MODULE_3__.SlicePipe, _angular_common__WEBPACK_IMPORTED_MODULE_3__.TitleCasePipe],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 82390:
/*!**************************************************!*\
  !*** ./src/app/components/email/email.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EmailModule: () => (/* binding */ EmailModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 76101);
/* harmony import */ var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ckeditor/ckeditor5-angular */ 18301);
/* harmony import */ var _email_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./email-routing.module */ 26643);
/* harmony import */ var _email_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./email.component */ 63166);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);







class EmailModule {
  static #_ = this.ɵfac = function EmailModule_Factory(t) {
    return new (t || EmailModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: EmailModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbModule, _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_6__.CKEditorModule, _email_routing_module__WEBPACK_IMPORTED_MODULE_0__.EmailRoutingModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](EmailModule, {
    declarations: [_email_component__WEBPACK_IMPORTED_MODULE_1__.EmailComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbModule, _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_6__.CKEditorModule, _email_routing_module__WEBPACK_IMPORTED_MODULE_0__.EmailRoutingModule]
  });
})();

/***/ }),

/***/ 88638:
/*!********************************************!*\
  !*** ./src/app/shared/data/email/email.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Mail: () => (/* binding */ Mail)
/* harmony export */ });
class Mail {
  static #_ = this.Emails = [{
    id: 1,
    image: "assets/images/user/9.jpg",
    name: "Hileri makr",
    email: "pork@company.com",
    date: "15 Feb 2019",
    cc: "Mattis luctus. Donec nisi diam,",
    type: "inbox",
    text: "<p>Hello</p><p>Dear Sir Good Morning,</p><h5>Elementum varius nisi vel tempus. Donec eleifend egestas viverra.</h5><p class='m-b-20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non diam facilisis, commodo libero et, commodo sapien. Pellentesque sollicitudin massa sagittis dolor facilisis, sit amet vulputate nunc molestie. Pellentesque maximus nibh id luctus porta. Ut consectetur dui nec nulla mattis luctus. Donec nisi diam, congue vitae felis at, ullamcorper bibendum tortor. Vestibulum pellentesque felis felis. Etiam ac tortor felis. Ut elit arcu, rhoncus in laoreet vel, gravida sed tortor.</p><p>In elementum varius nisi vel tempus. Donec eleifend egestas viverra. Donec dapibus sollicitudin blandit. Donec scelerisque purus sit amet feugiat efficitur. Quisque feugiat semper sapien vel hendrerit. Mauris lacus felis, consequat nec pellentesque viverra, venenatis a lorem. Sed urna lectus.Quisque feugiat semper sapien vel hendrerit</p>",
    favourite: false
  }, {
    id: 2,
    image: "assets/images/user/2.png",
    name: "Lorm lpsa",
    email: "lpsa@company.com",
    date: "16 Feb 2019",
    cc: "Mattis luctus. Donec nisi diam,",
    type: "inbox",
    text: "<p>Hello</p><p>Dear Sir Good Morning,</p><h5>Elementum varius nisi vel tempus. Donec eleifend egestas viverra.</h5><p class='m-b-20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non diam facilisis, commodo libero et, commodo sapien. Pellentesque sollicitudin massa sagittis dolor facilisis, sit amet vulputate nunc molestie. Pellentesque maximus nibh id luctus porta. Ut consectetur dui nec nulla mattis luctus. Donec nisi diam, congue vitae felis at, ullamcorper bibendum tortor. Vestibulum pellentesque felis felis. Etiam ac tortor felis. Ut elit arcu, rhoncus in laoreet vel, gravida sed tortor.</p><p>In elementum varius nisi vel tempus. Donec eleifend egestas viverra. Donec dapibus sollicitudin blandit. Donec scelerisque purus sit amet feugiat efficitur. Quisque feugiat semper sapien vel hendrerit. Mauris lacus felis, consequat nec pellentesque viverra, venenatis a lorem. Sed urna lectus.Quisque feugiat semper sapien vel hendrerit</p>",
    favourite: true
  }, {
    id: 3,
    image: "assets/images/user/3.jpg",
    name: "Vincent Porter",
    email: "vincent@company.com",
    date: "17 Feb 2019",
    cc: "Mattis luctus. Donec nisi diam,",
    type: "inbox",
    text: "<p>Hello</p><p>Dear Sir Good Morning,</p><h5>Elementum varius nisi vel tempus. Donec eleifend egestas viverra.</h5><p class='m-b-20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non diam facilisis, commodo libero et, commodo sapien. Pellentesque sollicitudin massa sagittis dolor facilisis, sit amet vulputate nunc molestie. Pellentesque maximus nibh id luctus porta. Ut consectetur dui nec nulla mattis luctus. Donec nisi diam, congue vitae felis at, ullamcorper bibendum tortor. Vestibulum pellentesque felis felis. Etiam ac tortor felis. Ut elit arcu, rhoncus in laoreet vel, gravida sed tortor.</p><p>In elementum varius nisi vel tempus. Donec eleifend egestas viverra. Donec dapibus sollicitudin blandit. Donec scelerisque purus sit amet feugiat efficitur. Quisque feugiat semper sapien vel hendrerit. Mauris lacus felis, consequat nec pellentesque viverra, venenatis a lorem. Sed urna lectus.Quisque feugiat semper sapien vel hendrerit</p>",
    favourite: false
  }, {
    id: 4,
    image: "assets/images/user/9.jpg",
    name: "Hileri makr",
    email: "vincent@company.com",
    date: "18 Feb 2019",
    cc: "Mattis luctus. Donec nisi diam,",
    type: "sent",
    text: "<p>Hello</p><p>Dear Sir Good Morning,</p><h5>Elementum varius nisi vel tempus. Donec eleifend egestas viverra.</h5><p class='m-b-20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non diam facilisis, commodo libero et, commodo sapien. Pellentesque sollicitudin massa sagittis dolor facilisis, sit amet vulputate nunc molestie. Pellentesque maximus nibh id luctus porta. Ut consectetur dui nec nulla mattis luctus. Donec nisi diam, congue vitae felis at, ullamcorper bibendum tortor. Vestibulum pellentesque felis felis. Etiam ac tortor felis. Ut elit arcu, rhoncus in laoreet vel, gravida sed tortor.</p><p>In elementum varius nisi vel tempus. Donec eleifend egestas viverra. Donec dapibus sollicitudin blandit. Donec scelerisque purus sit amet feugiat efficitur. Quisque feugiat semper sapien vel hendrerit. Mauris lacus felis, consequat nec pellentesque viverra, venenatis a lorem. Sed urna lectus.Quisque feugiat semper sapien vel hendrerit</p>",
    favourite: false
  }, {
    id: 5,
    image: "assets/images/user/2.png",
    name: "Lorm lpsa",
    email: "Lion@company.com",
    date: "19 Feb 2019",
    cc: "Mattis luctus. Donec nisi diam,",
    type: "sent",
    text: "<p>Hello</p><p>Dear Sir Good Morning,</p><h5>Elementum varius nisi vel tempus. Donec eleifend egestas viverra.</h5><p class='m-b-20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non diam facilisis, commodo libero et, commodo sapien. Pellentesque sollicitudin massa sagittis dolor facilisis, sit amet vulputate nunc molestie. Pellentesque maximus nibh id luctus porta. Ut consectetur dui nec nulla mattis luctus. Donec nisi diam, congue vitae felis at, ullamcorper bibendum tortor. Vestibulum pellentesque felis felis. Etiam ac tortor felis. Ut elit arcu, rhoncus in laoreet vel, gravida sed tortor.</p><p>In elementum varius nisi vel tempus. Donec eleifend egestas viverra. Donec dapibus sollicitudin blandit. Donec scelerisque purus sit amet feugiat efficitur. Quisque feugiat semper sapien vel hendrerit. Mauris lacus felis, consequat nec pellentesque viverra, venenatis a lorem. Sed urna lectus.Quisque feugiat semper sapien vel hendrerit</p>",
    favourite: false
  }, {
    id: 6,
    image: "assets/images/user/3.jpg",
    name: "Vincent Porter",
    email: "solvn@company.com",
    date: "20 Feb 2019",
    cc: "Mattis luctus. Donec nisi diam,",
    type: "sent",
    text: "<p>Hello</p><p>Dear Sir Good Morning,</p><h5>Elementum varius nisi vel tempus. Donec eleifend egestas viverra.</h5><p class='m-b-20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non diam facilisis, commodo libero et, commodo sapien. Pellentesque sollicitudin massa sagittis dolor facilisis, sit amet vulputate nunc molestie. Pellentesque maximus nibh id luctus porta. Ut consectetur dui nec nulla mattis luctus. Donec nisi diam, congue vitae felis at, ullamcorper bibendum tortor. Vestibulum pellentesque felis felis. Etiam ac tortor felis. Ut elit arcu, rhoncus in laoreet vel, gravida sed tortor.</p><p>In elementum varius nisi vel tempus. Donec eleifend egestas viverra. Donec dapibus sollicitudin blandit. Donec scelerisque purus sit amet feugiat efficitur. Quisque feugiat semper sapien vel hendrerit. Mauris lacus felis, consequat nec pellentesque viverra, venenatis a lorem. Sed urna lectus.Quisque feugiat semper sapien vel hendrerit</p>",
    favourite: true
  }, {
    id: 7,
    image: "assets/images/user/9.jpg",
    name: "Hileri makr",
    email: "soft@company.com",
    date: "21 Feb 2019",
    cc: "Mattis luctus. Donec nisi diam,",
    type: "trash",
    text: "<p>Hello</p><p>Dear Sir Good Morning,</p><h5>Elementum varius nisi vel tempus. Donec eleifend egestas viverra.</h5><p class='m-b-20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non diam facilisis, commodo libero et, commodo sapien. Pellentesque sollicitudin massa sagittis dolor facilisis, sit amet vulputate nunc molestie. Pellentesque maximus nibh id luctus porta. Ut consectetur dui nec nulla mattis luctus. Donec nisi diam, congue vitae felis at, ullamcorper bibendum tortor. Vestibulum pellentesque felis felis. Etiam ac tortor felis. Ut elit arcu, rhoncus in laoreet vel, gravida sed tortor.</p><p>In elementum varius nisi vel tempus. Donec eleifend egestas viverra. Donec dapibus sollicitudin blandit. Donec scelerisque purus sit amet feugiat efficitur. Quisque feugiat semper sapien vel hendrerit. Mauris lacus felis, consequat nec pellentesque viverra, venenatis a lorem. Sed urna lectus.Quisque feugiat semper sapien vel hendrerit</p>",
    favourite: false
  }, {
    id: 8,
    image: "assets/images/user/2.png",
    name: "Lorm lpsa",
    email: "lorapasoft23@company.com",
    date: "1 March 2019",
    cc: "Mattis luctus. Donec nisi diam,",
    type: "trash",
    text: "<p>Hello</p><p>Dear Sir Good Morning,</p><h5>Elementum varius nisi vel tempus. Donec eleifend egestas viverra.</h5><p class='m-b-20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non diam facilisis, commodo libero et, commodo sapien. Pellentesque sollicitudin massa sagittis dolor facilisis, sit amet vulputate nunc molestie. Pellentesque maximus nibh id luctus porta. Ut consectetur dui nec nulla mattis luctus. Donec nisi diam, congue vitae felis at, ullamcorper bibendum tortor. Vestibulum pellentesque felis felis. Etiam ac tortor felis. Ut elit arcu, rhoncus in laoreet vel, gravida sed tortor.</p><p>In elementum varius nisi vel tempus. Donec eleifend egestas viverra. Donec dapibus sollicitudin blandit. Donec scelerisque purus sit amet feugiat efficitur. Quisque feugiat semper sapien vel hendrerit. Mauris lacus felis, consequat nec pellentesque viverra, venenatis a lorem. Sed urna lectus.Quisque feugiat semper sapien vel hendrerit</p>",
    favourite: false
  }, {
    id: 9,
    image: "assets/images/user/3.jpg",
    name: "Vincent Porter",
    email: "vincent@company.com",
    date: "2 March 2019",
    cc: "Mattis luctus. Donec nisi diam,",
    type: "trash",
    text: "<p>Hello</p><p>Dear Sir Good Morning,</p><h5>Elementum varius nisi vel tempus. Donec eleifend egestas viverra.</h5><p class='m-b-20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non diam facilisis, commodo libero et, commodo sapien. Pellentesque sollicitudin massa sagittis dolor facilisis, sit amet vulputate nunc molestie. Pellentesque maximus nibh id luctus porta. Ut consectetur dui nec nulla mattis luctus. Donec nisi diam, congue vitae felis at, ullamcorper bibendum tortor. Vestibulum pellentesque felis felis. Etiam ac tortor felis. Ut elit arcu, rhoncus in laoreet vel, gravida sed tortor.</p><p>In elementum varius nisi vel tempus. Donec eleifend egestas viverra. Donec dapibus sollicitudin blandit. Donec scelerisque purus sit amet feugiat efficitur. Quisque feugiat semper sapien vel hendrerit. Mauris lacus felis, consequat nec pellentesque viverra, venenatis a lorem. Sed urna lectus.Quisque feugiat semper sapien vel hendrerit</p>",
    favourite: false
  }, {
    id: 10,
    image: "assets/images/user/9.jpg",
    name: "Hileri makr",
    email: "vincent@company.com",
    date: "15 March 2019",
    cc: "Mattis luctus. Donec nisi diam,",
    type: "draft",
    text: "<p>Hello</p><p>Dear Sir Good Morning,</p><h5>Elementum varius nisi vel tempus. Donec eleifend egestas viverra.</h5><p class='m-b-20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non diam facilisis, commodo libero et, commodo sapien. Pellentesque sollicitudin massa sagittis dolor facilisis, sit amet vulputate nunc molestie. Pellentesque maximus nibh id luctus porta. Ut consectetur dui nec nulla mattis luctus. Donec nisi diam, congue vitae felis at, ullamcorper bibendum tortor. Vestibulum pellentesque felis felis. Etiam ac tortor felis. Ut elit arcu, rhoncus in laoreet vel, gravida sed tortor.</p><p>In elementum varius nisi vel tempus. Donec eleifend egestas viverra. Donec dapibus sollicitudin blandit. Donec scelerisque purus sit amet feugiat efficitur. Quisque feugiat semper sapien vel hendrerit. Mauris lacus felis, consequat nec pellentesque viverra, venenatis a lorem. Sed urna lectus.Quisque feugiat semper sapien vel hendrerit</p>",
    favourite: false
  }, {
    id: 11,
    image: "assets/images/user/2.png",
    name: "Lorm lpsa",
    email: "herry@company.com",
    date: "16 March 2019",
    cc: "Mattis luctus. Donec nisi diam,",
    type: "draft",
    text: "<p>Hello</p><p>Dear Sir Good Morning,</p><h5>Elementum varius nisi vel tempus. Donec eleifend egestas viverra.</h5><p class='m-b-20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non diam facilisis, commodo libero et, commodo sapien. Pellentesque sollicitudin massa sagittis dolor facilisis, sit amet vulputate nunc molestie. Pellentesque maximus nibh id luctus porta. Ut consectetur dui nec nulla mattis luctus. Donec nisi diam, congue vitae felis at, ullamcorper bibendum tortor. Vestibulum pellentesque felis felis. Etiam ac tortor felis. Ut elit arcu, rhoncus in laoreet vel, gravida sed tortor.</p><p>In elementum varius nisi vel tempus. Donec eleifend egestas viverra. Donec dapibus sollicitudin blandit. Donec scelerisque purus sit amet feugiat efficitur. Quisque feugiat semper sapien vel hendrerit. Mauris lacus felis, consequat nec pellentesque viverra, venenatis a lorem. Sed urna lectus.Quisque feugiat semper sapien vel hendrerit</p>",
    favourite: false
  }, {
    id: 12,
    image: "assets/images/user/9.jpg",
    name: "Hileri makr",
    email: "john@company.com",
    date: "21 Apr 2019",
    cc: "Mattis luctus. Donec nisi diam,",
    type: "outbox",
    text: "<p>Hello</p><p>Dear Sir Good Morning,</p><h5>Elementum varius nisi vel tempus. Donec eleifend egestas viverra.</h5><p class='m-b-20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non diam facilisis, commodo libero et, commodo sapien. Pellentesque sollicitudin massa sagittis dolor facilisis, sit amet vulputate nunc molestie. Pellentesque maximus nibh id luctus porta. Ut consectetur dui nec nulla mattis luctus. Donec nisi diam, congue vitae felis at, ullamcorper bibendum tortor. Vestibulum pellentesque felis felis. Etiam ac tortor felis. Ut elit arcu, rhoncus in laoreet vel, gravida sed tortor.</p><p>In elementum varius nisi vel tempus. Donec eleifend egestas viverra. Donec dapibus sollicitudin blandit. Donec scelerisque purus sit amet feugiat efficitur. Quisque feugiat semper sapien vel hendrerit. Mauris lacus felis, consequat nec pellentesque viverra, venenatis a lorem. Sed urna lectus.Quisque feugiat semper sapien vel hendrerit</p>",
    favourite: true
  }, {
    id: 13,
    image: "assets/images/user/2.png",
    name: "Lorm lpsa",
    email: "deojoseph@company.com",
    date: "22 Apr 2019",
    cc: "Mattis luctus. Donec nisi diam,",
    type: "outbox",
    text: "<p>Hello</p><p>Dear Sir Good Morning,</p><h5>Elementum varius nisi vel tempus. Donec eleifend egestas viverra.</h5><p class='m-b-20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non diam facilisis, commodo libero et, commodo sapien. Pellentesque sollicitudin massa sagittis dolor facilisis, sit amet vulputate nunc molestie. Pellentesque maximus nibh id luctus porta. Ut consectetur dui nec nulla mattis luctus. Donec nisi diam, congue vitae felis at, ullamcorper bibendum tortor. Vestibulum pellentesque felis felis. Etiam ac tortor felis. Ut elit arcu, rhoncus in laoreet vel, gravida sed tortor.</p><p>In elementum varius nisi vel tempus. Donec eleifend egestas viverra. Donec dapibus sollicitudin blandit. Donec scelerisque purus sit amet feugiat efficitur. Quisque feugiat semper sapien vel hendrerit. Mauris lacus felis, consequat nec pellentesque viverra, venenatis a lorem. Sed urna lectus.Quisque feugiat semper sapien vel hendrerit</p>",
    favourite: false
  }, {
    id: 14,
    image: "assets/images/user/6.jpg",
    name: "Charlie Porter",
    email: "charle21@company.com",
    date: "23 Apr 2019",
    cc: "Mattis luctus. Donec nisi diam,",
    type: "unread",
    text: "<p>Hello</p><p>Dear Sir Good Morning,</p><h5>Elementum varius nisi vel tempus. Donec eleifend egestas viverra.</h5><p class='m-b-20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non diam facilisis, commodo libero et, commodo sapien. Pellentesque sollicitudin massa sagittis dolor facilisis, sit amet vulputate nunc molestie. Pellentesque maximus nibh id luctus porta. Ut consectetur dui nec nulla mattis luctus. Donec nisi diam, congue vitae felis at, ullamcorper bibendum tortor. Vestibulum pellentesque felis felis. Etiam ac tortor felis. Ut elit arcu, rhoncus in laoreet vel, gravida sed tortor.</p><p>In elementum varius nisi vel tempus. Donec eleifend egestas viverra. Donec dapibus sollicitudin blandit. Donec scelerisque purus sit amet feugiat efficitur. Quisque feugiat semper sapien vel hendrerit. Mauris lacus felis, consequat nec pellentesque viverra, venenatis a lorem. Sed urna lectus.Quisque feugiat semper sapien vel hendrerit</p>",
    favourite: false
  }, {
    id: 15,
    image: "assets/images/user/9.jpg",
    name: "Hileri makr",
    email: "sam1254@company.com",
    date: "30 Apr 2019",
    cc: "Mattis luctus. Donec nisi diam,",
    type: "inbox",
    text: "<p>Hello</p><p>Dear Sir Good Morning,</p><h5>Elementum varius nisi vel tempus. Donec eleifend egestas viverra.</h5><p class='m-b-20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non diam facilisis, commodo libero et, commodo sapien. Pellentesque sollicitudin massa sagittis dolor facilisis, sit amet vulputate nunc molestie. Pellentesque maximus nibh id luctus porta. Ut consectetur dui nec nulla mattis luctus. Donec nisi diam, congue vitae felis at, ullamcorper bibendum tortor. Vestibulum pellentesque felis felis. Etiam ac tortor felis. Ut elit arcu, rhoncus in laoreet vel, gravida sed tortor.</p><p>In elementum varius nisi vel tempus. Donec eleifend egestas viverra. Donec dapibus sollicitudin blandit. Donec scelerisque purus sit amet feugiat efficitur. Quisque feugiat semper sapien vel hendrerit. Mauris lacus felis, consequat nec pellentesque viverra, venenatis a lorem. Sed urna lectus.Quisque feugiat semper sapien vel hendrerit</p>",
    favourite: false
  }, {
    id: 16,
    image: "assets/images/user/8.jpg",
    name: "Ross Singh",
    email: "sam1254@company.com",
    date: "30 Apr 2019",
    cc: "Mattis luctus. Donec nisi diam,",
    type: "inbox",
    text: "<p>Hello</p><p>Dear Sir Good Morning,</p><h5>Elementum varius nisi vel tempus. Donec eleifend egestas viverra.</h5><p class='m-b-20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non diam facilisis, commodo libero et, commodo sapien. Pellentesque sollicitudin massa sagittis dolor facilisis, sit amet vulputate nunc molestie. Pellentesque maximus nibh id luctus porta. Ut consectetur dui nec nulla mattis luctus. Donec nisi diam, congue vitae felis at, ullamcorper bibendum tortor. Vestibulum pellentesque felis felis. Etiam ac tortor felis. Ut elit arcu, rhoncus in laoreet vel, gravida sed tortor.</p><p>In elementum varius nisi vel tempus. Donec eleifend egestas viverra. Donec dapibus sollicitudin blandit. Donec scelerisque purus sit amet feugiat efficitur. Quisque feugiat semper sapien vel hendrerit. Mauris lacus felis, consequat nec pellentesque viverra, venenatis a lorem. Sed urna lectus.Quisque feugiat semper sapien vel hendrerit</p>",
    favourite: true
  }, {
    id: 17,
    image: "assets/images/user/14.png",
    name: "Sam Porter",
    email: "sam1254@company.com",
    date: "30 Apr 2019",
    cc: "Mattis luctus. Donec nisi diam,",
    type: "inbox",
    text: "<p>Hello</p><p>Dear Sir Good Morning,</p><h5>Elementum varius nisi vel tempus. Donec eleifend egestas viverra.</h5><p class='m-b-20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non diam facilisis, commodo libero et, commodo sapien. Pellentesque sollicitudin massa sagittis dolor facilisis, sit amet vulputate nunc molestie. Pellentesque maximus nibh id luctus porta. Ut consectetur dui nec nulla mattis luctus. Donec nisi diam, congue vitae felis at, ullamcorper bibendum tortor. Vestibulum pellentesque felis felis. Etiam ac tortor felis. Ut elit arcu, rhoncus in laoreet vel, gravida sed tortor.</p><p>In elementum varius nisi vel tempus. Donec eleifend egestas viverra. Donec dapibus sollicitudin blandit. Donec scelerisque purus sit amet feugiat efficitur. Quisque feugiat semper sapien vel hendrerit. Mauris lacus felis, consequat nec pellentesque viverra, venenatis a lorem. Sed urna lectus.Quisque feugiat semper sapien vel hendrerit</p>",
    favourite: true
  }, {
    id: 18,
    image: "assets/images/user/7.jpg",
    name: "Jenisha Trivedi",
    email: "sam1254@company.com",
    date: "30 Apr 2019",
    cc: "Mattis luctus. Donec nisi diam,",
    type: "inbox",
    text: "<p>Hello</p><p>Dear Sir Good Morning,</p><h5>Elementum varius nisi vel tempus. Donec eleifend egestas viverra.</h5><p class='m-b-20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non diam facilisis, commodo libero et, commodo sapien. Pellentesque sollicitudin massa sagittis dolor facilisis, sit amet vulputate nunc molestie. Pellentesque maximus nibh id luctus porta. Ut consectetur dui nec nulla mattis luctus. Donec nisi diam, congue vitae felis at, ullamcorper bibendum tortor. Vestibulum pellentesque felis felis. Etiam ac tortor felis. Ut elit arcu, rhoncus in laoreet vel, gravida sed tortor.</p><p>In elementum varius nisi vel tempus. Donec eleifend egestas viverra. Donec dapibus sollicitudin blandit. Donec scelerisque purus sit amet feugiat efficitur. Quisque feugiat semper sapien vel hendrerit. Mauris lacus felis, consequat nec pellentesque viverra, venenatis a lorem. Sed urna lectus.Quisque feugiat semper sapien vel hendrerit</p>",
    favourite: false
  }, {
    id: 19,
    image: "assets/images/user/8.jpg",
    name: "Ross Singh",
    email: "sam1254@company.com",
    date: "30 Apr 2019",
    cc: "Mattis luctus. Donec nisi diam,",
    type: "inbox",
    text: "<p>Hello</p><p>Dear Sir Good Morning,</p><h5>Elementum varius nisi vel tempus. Donec eleifend egestas viverra.</h5><p class='m-b-20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non diam facilisis, commodo libero et, commodo sapien. Pellentesque sollicitudin massa sagittis dolor facilisis, sit amet vulputate nunc molestie. Pellentesque maximus nibh id luctus porta. Ut consectetur dui nec nulla mattis luctus. Donec nisi diam, congue vitae felis at, ullamcorper bibendum tortor. Vestibulum pellentesque felis felis. Etiam ac tortor felis. Ut elit arcu, rhoncus in laoreet vel, gravida sed tortor.</p><p>In elementum varius nisi vel tempus. Donec eleifend egestas viverra. Donec dapibus sollicitudin blandit. Donec scelerisque purus sit amet feugiat efficitur. Quisque feugiat semper sapien vel hendrerit. Mauris lacus felis, consequat nec pellentesque viverra, venenatis a lorem. Sed urna lectus.Quisque feugiat semper sapien vel hendrerit</p>",
    favourite: false
  }, {
    id: 20,
    image: "assets/images/user/9.jpg",
    name: "Hileri makr",
    email: "sam1254@company.com",
    date: "30 Apr 2019",
    cc: "Mattis luctus. Donec nisi diam,",
    type: "inbox",
    text: "<p>Hello</p><p>Dear Sir Good Morning,</p><h5>Elementum varius nisi vel tempus. Donec eleifend egestas viverra.</h5><p class='m-b-20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non diam facilisis, commodo libero et, commodo sapien. Pellentesque sollicitudin massa sagittis dolor facilisis, sit amet vulputate nunc molestie. Pellentesque maximus nibh id luctus porta. Ut consectetur dui nec nulla mattis luctus. Donec nisi diam, congue vitae felis at, ullamcorper bibendum tortor. Vestibulum pellentesque felis felis. Etiam ac tortor felis. Ut elit arcu, rhoncus in laoreet vel, gravida sed tortor.</p><p>In elementum varius nisi vel tempus. Donec eleifend egestas viverra. Donec dapibus sollicitudin blandit. Donec scelerisque purus sit amet feugiat efficitur. Quisque feugiat semper sapien vel hendrerit. Mauris lacus felis, consequat nec pellentesque viverra, venenatis a lorem. Sed urna lectus.Quisque feugiat semper sapien vel hendrerit</p>",
    favourite: false
  }, {
    id: 21,
    image: "assets/images/user/14.png",
    name: "Sam Porter",
    email: "sam1254@company.com",
    date: "30 Apr 2019",
    cc: "Mattis luctus. Donec nisi diam,",
    type: "inbox",
    text: "<p>Hello</p><p>Dear Sir Good Morning,</p><h5>Elementum varius nisi vel tempus. Donec eleifend egestas viverra.</h5><p class='m-b-20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non diam facilisis, commodo libero et, commodo sapien. Pellentesque sollicitudin massa sagittis dolor facilisis, sit amet vulputate nunc molestie. Pellentesque maximus nibh id luctus porta. Ut consectetur dui nec nulla mattis luctus. Donec nisi diam, congue vitae felis at, ullamcorper bibendum tortor. Vestibulum pellentesque felis felis. Etiam ac tortor felis. Ut elit arcu, rhoncus in laoreet vel, gravida sed tortor.</p><p>In elementum varius nisi vel tempus. Donec eleifend egestas viverra. Donec dapibus sollicitudin blandit. Donec scelerisque purus sit amet feugiat efficitur. Quisque feugiat semper sapien vel hendrerit. Mauris lacus felis, consequat nec pellentesque viverra, venenatis a lorem. Sed urna lectus.Quisque feugiat semper sapien vel hendrerit</p>",
    favourite: false
  }, {
    id: 22,
    image: "assets/images/user/5.jpg",
    name: "Ashiyana Oza",
    email: "sam1254@company.com",
    date: "30 Apr 2019",
    cc: "Mattis luctus. Donec nisi diam,",
    type: "sent",
    text: "<p>Hello</p><p>Dear Sir Good Morning,</p><h5>Elementum varius nisi vel tempus. Donec eleifend egestas viverra.</h5><p class='m-b-20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non diam facilisis, commodo libero et, commodo sapien. Pellentesque sollicitudin massa sagittis dolor facilisis, sit amet vulputate nunc molestie. Pellentesque maximus nibh id luctus porta. Ut consectetur dui nec nulla mattis luctus. Donec nisi diam, congue vitae felis at, ullamcorper bibendum tortor. Vestibulum pellentesque felis felis. Etiam ac tortor felis. Ut elit arcu, rhoncus in laoreet vel, gravida sed tortor.</p><p>In elementum varius nisi vel tempus. Donec eleifend egestas viverra. Donec dapibus sollicitudin blandit. Donec scelerisque purus sit amet feugiat efficitur. Quisque feugiat semper sapien vel hendrerit. Mauris lacus felis, consequat nec pellentesque viverra, venenatis a lorem. Sed urna lectus.Quisque feugiat semper sapien vel hendrerit</p>",
    favourite: false
  }, {
    id: 23,
    image: "assets/images/user/6.jpg",
    name: "Charlie Porter",
    email: "sam1254@company.com",
    date: "30 Apr 2019",
    cc: "Mattis luctus. Donec nisi diam,",
    type: "sent",
    text: "<p>Hello</p><p>Dear Sir Good Morning,</p><h5>Elementum varius nisi vel tempus. Donec eleifend egestas viverra.</h5><p class='m-b-20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non diam facilisis, commodo libero et, commodo sapien. Pellentesque sollicitudin massa sagittis dolor facilisis, sit amet vulputate nunc molestie. Pellentesque maximus nibh id luctus porta. Ut consectetur dui nec nulla mattis luctus. Donec nisi diam, congue vitae felis at, ullamcorper bibendum tortor. Vestibulum pellentesque felis felis. Etiam ac tortor felis. Ut elit arcu, rhoncus in laoreet vel, gravida sed tortor.</p><p>In elementum varius nisi vel tempus. Donec eleifend egestas viverra. Donec dapibus sollicitudin blandit. Donec scelerisque purus sit amet feugiat efficitur. Quisque feugiat semper sapien vel hendrerit. Mauris lacus felis, consequat nec pellentesque viverra, venenatis a lorem. Sed urna lectus.Quisque feugiat semper sapien vel hendrerit</p>",
    favourite: false
  }, {
    id: 24,
    image: "assets/images/user/7.jpg",
    name: "Jenisha Trivedi",
    email: "sam1254@company.com",
    date: "30 Apr 2019",
    cc: "Mattis luctus. Donec nisi diam,",
    type: "draft",
    text: "<p>Hello</p><p>Dear Sir Good Morning,</p><h5>Elementum varius nisi vel tempus. Donec eleifend egestas viverra.</h5><p class='m-b-20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non diam facilisis, commodo libero et, commodo sapien. Pellentesque sollicitudin massa sagittis dolor facilisis, sit amet vulputate nunc molestie. Pellentesque maximus nibh id luctus porta. Ut consectetur dui nec nulla mattis luctus. Donec nisi diam, congue vitae felis at, ullamcorper bibendum tortor. Vestibulum pellentesque felis felis. Etiam ac tortor felis. Ut elit arcu, rhoncus in laoreet vel, gravida sed tortor.</p><p>In elementum varius nisi vel tempus. Donec eleifend egestas viverra. Donec dapibus sollicitudin blandit. Donec scelerisque purus sit amet feugiat efficitur. Quisque feugiat semper sapien vel hendrerit. Mauris lacus felis, consequat nec pellentesque viverra, venenatis a lorem. Sed urna lectus.Quisque feugiat semper sapien vel hendrerit</p>",
    favourite: false
  }, {
    id: 25,
    image: "assets/images/user/8.jpg",
    name: "Ross Singh",
    email: "sam1254@company.com",
    date: "30 Apr 2019",
    cc: "Mattis luctus. Donec nisi diam,",
    type: "draft",
    text: "<p>Hello</p><p>Dear Sir Good Morning,</p><h5>Elementum varius nisi vel tempus. Donec eleifend egestas viverra.</h5><p class='m-b-20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non diam facilisis, commodo libero et, commodo sapien. Pellentesque sollicitudin massa sagittis dolor facilisis, sit amet vulputate nunc molestie. Pellentesque maximus nibh id luctus porta. Ut consectetur dui nec nulla mattis luctus. Donec nisi diam, congue vitae felis at, ullamcorper bibendum tortor. Vestibulum pellentesque felis felis. Etiam ac tortor felis. Ut elit arcu, rhoncus in laoreet vel, gravida sed tortor.</p><p>In elementum varius nisi vel tempus. Donec eleifend egestas viverra. Donec dapibus sollicitudin blandit. Donec scelerisque purus sit amet feugiat efficitur. Quisque feugiat semper sapien vel hendrerit. Mauris lacus felis, consequat nec pellentesque viverra, venenatis a lorem. Sed urna lectus.Quisque feugiat semper sapien vel hendrerit</p>",
    favourite: false
  }, {
    id: 26,
    image: "assets/images/user/9.jpg",
    name: "Hileri makr",
    email: "sam1254@company.com",
    date: "30 Apr 2019",
    cc: "Mattis luctus. Donec nisi diam,",
    type: "sent",
    text: "<p>Hello</p><p>Dear Sir Good Morning,</p><h5>Elementum varius nisi vel tempus. Donec eleifend egestas viverra.</h5><p class='m-b-20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non diam facilisis, commodo libero et, commodo sapien. Pellentesque sollicitudin massa sagittis dolor facilisis, sit amet vulputate nunc molestie. Pellentesque maximus nibh id luctus porta. Ut consectetur dui nec nulla mattis luctus. Donec nisi diam, congue vitae felis at, ullamcorper bibendum tortor. Vestibulum pellentesque felis felis. Etiam ac tortor felis. Ut elit arcu, rhoncus in laoreet vel, gravida sed tortor.</p><p>In elementum varius nisi vel tempus. Donec eleifend egestas viverra. Donec dapibus sollicitudin blandit. Donec scelerisque purus sit amet feugiat efficitur. Quisque feugiat semper sapien vel hendrerit. Mauris lacus felis, consequat nec pellentesque viverra, venenatis a lorem. Sed urna lectus.Quisque feugiat semper sapien vel hendrerit</p>",
    favourite: false
  }, {
    id: 27,
    image: "assets/images/user/14.png",
    name: "Sam Porter",
    email: "sam1254@company.com",
    date: "30 Apr 2019",
    cc: "Mattis luctus. Donec nisi diam,",
    type: "spam",
    text: "<p>Hello</p><p>Dear Sir Good Morning,</p><h5>Elementum varius nisi vel tempus. Donec eleifend egestas viverra.</h5><p class='m-b-20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non diam facilisis, commodo libero et, commodo sapien. Pellentesque sollicitudin massa sagittis dolor facilisis, sit amet vulputate nunc molestie. Pellentesque maximus nibh id luctus porta. Ut consectetur dui nec nulla mattis luctus. Donec nisi diam, congue vitae felis at, ullamcorper bibendum tortor. Vestibulum pellentesque felis felis. Etiam ac tortor felis. Ut elit arcu, rhoncus in laoreet vel, gravida sed tortor.</p><p>In elementum varius nisi vel tempus. Donec eleifend egestas viverra. Donec dapibus sollicitudin blandit. Donec scelerisque purus sit amet feugiat efficitur. Quisque feugiat semper sapien vel hendrerit. Mauris lacus felis, consequat nec pellentesque viverra, venenatis a lorem. Sed urna lectus.Quisque feugiat semper sapien vel hendrerit</p>",
    favourite: false
  }, {
    id: 28,
    image: "assets/images/user/8.jpg",
    name: "Ross Singh",
    email: "sam1254@company.com",
    date: "30 Apr 2019",
    cc: "Mattis luctus. Donec nisi diam,",
    type: "spam",
    text: "<p>Hello</p><p>Dear Sir Good Morning,</p><h5>Elementum varius nisi vel tempus. Donec eleifend egestas viverra.</h5><p class='m-b-20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non diam facilisis, commodo libero et, commodo sapien. Pellentesque sollicitudin massa sagittis dolor facilisis, sit amet vulputate nunc molestie. Pellentesque maximus nibh id luctus porta. Ut consectetur dui nec nulla mattis luctus. Donec nisi diam, congue vitae felis at, ullamcorper bibendum tortor. Vestibulum pellentesque felis felis. Etiam ac tortor felis. Ut elit arcu, rhoncus in laoreet vel, gravida sed tortor.</p><p>In elementum varius nisi vel tempus. Donec eleifend egestas viverra. Donec dapibus sollicitudin blandit. Donec scelerisque purus sit amet feugiat efficitur. Quisque feugiat semper sapien vel hendrerit. Mauris lacus felis, consequat nec pellentesque viverra, venenatis a lorem. Sed urna lectus.Quisque feugiat semper sapien vel hendrerit</p>",
    favourite: false
  }, {
    id: 29,
    image: "assets/images/user/9.jpg",
    name: "Hileri makr",
    email: "sam1254@company.com",
    date: "30 Apr 2019",
    cc: "Mattis luctus. Donec nisi diam,",
    type: "spam",
    text: "<p>Hello</p><p>Dear Sir Good Morning,</p><h5>Elementum varius nisi vel tempus. Donec eleifend egestas viverra.</h5><p class='m-b-20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non diam facilisis, commodo libero et, commodo sapien. Pellentesque sollicitudin massa sagittis dolor facilisis, sit amet vulputate nunc molestie. Pellentesque maximus nibh id luctus porta. Ut consectetur dui nec nulla mattis luctus. Donec nisi diam, congue vitae felis at, ullamcorper bibendum tortor. Vestibulum pellentesque felis felis. Etiam ac tortor felis. Ut elit arcu, rhoncus in laoreet vel, gravida sed tortor.</p><p>In elementum varius nisi vel tempus. Donec eleifend egestas viverra. Donec dapibus sollicitudin blandit. Donec scelerisque purus sit amet feugiat efficitur. Quisque feugiat semper sapien vel hendrerit. Mauris lacus felis, consequat nec pellentesque viverra, venenatis a lorem. Sed urna lectus.Quisque feugiat semper sapien vel hendrerit</p>",
    favourite: false
  }, {
    id: 30,
    image: "assets/images/user/14.png",
    name: "Sam Porter",
    email: "sam1254@company.com",
    date: "30 Apr 2019",
    cc: "Mattis luctus. Donec nisi diam,",
    type: "spam",
    text: "<p>Hello</p><p>Dear Sir Good Morning,</p><h5>Elementum varius nisi vel tempus. Donec eleifend egestas viverra.</h5><p class='m-b-20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non diam facilisis, commodo libero et, commodo sapien. Pellentesque sollicitudin massa sagittis dolor facilisis, sit amet vulputate nunc molestie. Pellentesque maximus nibh id luctus porta. Ut consectetur dui nec nulla mattis luctus. Donec nisi diam, congue vitae felis at, ullamcorper bibendum tortor. Vestibulum pellentesque felis felis. Etiam ac tortor felis. Ut elit arcu, rhoncus in laoreet vel, gravida sed tortor.</p><p>In elementum varius nisi vel tempus. Donec eleifend egestas viverra. Donec dapibus sollicitudin blandit. Donec scelerisque purus sit amet feugiat efficitur. Quisque feugiat semper sapien vel hendrerit. Mauris lacus felis, consequat nec pellentesque viverra, venenatis a lorem. Sed urna lectus.Quisque feugiat semper sapien vel hendrerit</p>",
    favourite: false
  }, {
    id: 32,
    image: "assets/images/user/5.jpg",
    name: "Ashiyana Oza",
    email: "sam1254@company.com",
    date: "30 Apr 2019",
    cc: "Mattis luctus. Donec nisi diam,",
    type: "spam",
    text: "<p>Hello</p><p>Dear Sir Good Morning,</p><h5>Elementum varius nisi vel tempus. Donec eleifend egestas viverra.</h5><p class='m-b-20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non diam facilisis, commodo libero et, commodo sapien. Pellentesque sollicitudin massa sagittis dolor facilisis, sit amet vulputate nunc molestie. Pellentesque maximus nibh id luctus porta. Ut consectetur dui nec nulla mattis luctus. Donec nisi diam, congue vitae felis at, ullamcorper bibendum tortor. Vestibulum pellentesque felis felis. Etiam ac tortor felis. Ut elit arcu, rhoncus in laoreet vel, gravida sed tortor.</p><p>In elementum varius nisi vel tempus. Donec eleifend egestas viverra. Donec dapibus sollicitudin blandit. Donec scelerisque purus sit amet feugiat efficitur. Quisque feugiat semper sapien vel hendrerit. Mauris lacus felis, consequat nec pellentesque viverra, venenatis a lorem. Sed urna lectus.Quisque feugiat semper sapien vel hendrerit</p>",
    favourite: false
  }];
}

/***/ })

}]);
//# sourceMappingURL=src_app_components_email_email_module_ts.35ff63aa9656be92.js.map