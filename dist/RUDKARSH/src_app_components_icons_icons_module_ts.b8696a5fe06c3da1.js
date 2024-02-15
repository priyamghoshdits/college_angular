"use strict";
(self["webpackChunkRUDKARSH"] = self["webpackChunkRUDKARSH"] || []).push([["src_app_components_icons_icons_module_ts"],{

/***/ 78738:
/*!*************************************************************************!*\
  !*** ./src/app/components/icons/feather-icon/feather-icon.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FeatherIconComponent: () => (/* binding */ FeatherIconComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ 57548);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/components/feather-icons/feather-icons.component */ 49177);




function FeatherIconComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FeatherIconComponent_div_9_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
      const icon_r2 = restoredCtx.$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r3.toggleWithInfo(icon_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "app-feather-icons", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 13)(4, "h6", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const icon_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", icon_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](icon_r2);
  }
}
function FeatherIconComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 15)(1, "div", 0)(2, "div", 1)(3, "div", 16)(4, "div", 17)(5, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FeatherIconComponent_div_10_Template_i_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r5.detail = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 19)(7, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Markup ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 21)(10, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FeatherIconComponent_div_10_Template_button_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r7.copyText(ctx_r7.ficon));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Copy text");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", ctx_r1.val);
  }
}
class FeatherIconComponent {
  constructor(toastrService) {
    this.toastrService = toastrService;
    this.detail = false;
    this.notification = false;
    this.feather_icons = ["activity", "airplay", "alert-circle", "alert-octagon", "alert-triangle", "align-center", "align-justify", "align-left", "align-right", "anchor", "aperture", "archive", "arrow-down-circle", "arrow-down-left", "arrow-down-right", "arrow-down", "arrow-left-circle", "arrow-left", "arrow-right-circle", "arrow-right", "arrow-up-circle", "arrow-up-left", "arrow-up-right", "arrow-up", "at-sign", "award", "bar-chart-2", "bar-chart", "battery-charging", "battery", "bell-off", "bell", "bluetooth", "bold", "book-open", "book", "bookmark", "box", "briefcase", "calendar", "camera-off", "camera", "cast", "check-circle", "check-square", "check", "chevron-down", "chevron-left", "chevron-right", "chevron-up", "chevrons-down", "chevrons-left", "chevrons-right", "chevrons-up", "chrome", "circle", "clipboard", "clock", "cloud-drizzle", "cloud-lightning", "cloud-off", "cloud-rain", "cloud-snow", "cloud", "code", "codepen", "coffee", "command", "compass", "copy", "corner-down-left", "corner-down-right", "corner-left-down", "corner-left-up", "corner-right-down", "corner-right-up", "corner-up-left", "corner-up-right", "cpu", "credit-card", "crop", "crosshair", "database", "delete", "disc", "dollar-sign", "download-cloud", "download", "droplet", "edit-2", "edit-3", "edit", "external-link", "eye-off", "eye", "facebook", "fast-forward", "feather", "file-minus", "file-plus", "file-text", "file", "film", "filter", "flag", "folder-minus", "folder-plus", "folder", "gift", "git-branch", "git-commit", "git-merge", "git-pull-request", "github", "gitlab", "globe", "grid", "hard-drive", "hash", "headphones", "heart", "help-circle", "home", "image", "inbox", "info", "instagram", "italic", "layers", "layout", "life-buoy", "link-2", "link", "linkedin", "list", "loader", "lock", "log-in", "log-out", "mail", "map-pin", "map", "maximize-2", "maximize", "menu", "message-circle", "message-square", "mic-off", "mic", "minimize-2", "minimize", "minus-circle", "minus-square", "minus", "monitor", "moon", "more-horizontal", "more-vertical", "move", "music", "navigation-2", "navigation", "octagon", "package", "paperclip", "pause-circle", "pause", "percent", "phone-call", "phone-forwarded", "phone-incoming", "phone-missed", "phone-off", "phone-outgoing", "phone", "pie-chart", "play-circle", "play", "plus-circle", "plus-square", "plus", "pocket", "power", "printer", "radio", "refresh-ccw", "refresh-cw", "repeat", "rewind", "rotate-ccw", "rotate-cw", "rss", "save", "scissors", "search", "send", "server", "settings", "share-2", "share", "shield-off", "shield", "shopping-bag", "shopping-cart", "shuffle", "sidebar", "skip-back", "skip-forward", "slack", "slash", "sliders", "smartphone", "speaker", "square", "star", "stop-circle", "sun", "sunrise", "sunset", "tablet", "tag", "target", "terminal", "thermometer", "thumbs-down", "thumbs-up", "toggle-left", "toggle-right", "trash-2", "trash", "trending-down", "trending-up", "triangle", "truck", "tv", "twitter", "type", "umbrella", "underline", "unlock", "upload-cloud", "upload", "user-check", "user-minus", "user-plus", "user-x", "user", "users", "video-off", "video", "voicemail", "volume-1", "volume-2", "volume-x", "volume", "watch", "wifi-off", "wifi", "wind", "x-circle", "x-square", "x", "youtube", "zap-off", "zap", "zoom-in", "zoom-out"];
  }
  //Display Icon detail
  toggleWithInfo(icon) {
    this.detail = true;
    this.ficon = icon;
    this.val = '<i data-feather=' + icon + '"></i>';
  }
  //Copy an icon code
  copyText(val) {
    this.notification = true;
    let selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = '' + val + '';
    selBox.value = '<i data-feather=' + val + '"></i>';
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
  static #_ = this.ɵfac = function FeatherIconComponent_Factory(t) {
    return new (t || FeatherIconComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_2__.ToastrService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: FeatherIconComponent,
    selectors: [["app-feather-icon"]],
    decls: 11,
    vars: 2,
    consts: [[1, "container-fluid"], [1, "row"], [1, "col-sm-12"], [1, "card"], [1, "card-header"], [1, "m-b-0"], [1, "card-body"], [1, "row", "icon-lists", "feather-icons"], ["class", "col-12 col-sm-6 col-xl-4", 3, "click", 4, "ngFor", "ngForOf"], ["class", "icon-hover-bottom p-fixed", 4, "ngIf"], [1, "col-12", "col-sm-6", "col-xl-4", 3, "click"], [1, "media"], [3, "icon"], [1, "media-body", "align-self-center"], [1, "mt-0"], [1, "icon-hover-bottom", "p-fixed"], [1, "icon-popup"], [1, "close-icon"], [1, "icofont", "icofont-close", 3, "click"], [1, "icon-last", "icon-last"], [1, "icon-title"], [1, "form-inline"], [1, "form-group"], ["type", "text", "readonly", "readonly", 1, "inp-val", "form-control", "m-r-10", 3, "value"], [1, "btn", "btn-primary", 3, "click"]],
    template: function FeatherIconComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Feather Icons");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 6)(8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, FeatherIconComponent_div_9_Template, 6, 2, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, FeatherIconComponent_div_10_Template, 14, 1, "div", 9);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.feather_icons);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.detail);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_0__.FeatherIconsComponent],
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"],
    encapsulation: 2
  });
}

/***/ }),

/***/ 26674:
/*!*******************************************************************!*\
  !*** ./src/app/components/icons/flag-icon/flag-icon.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FlagIconComponent: () => (/* binding */ FlagIconComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-toastr */ 57548);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 26575);



function FlagIconComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FlagIconComponent_div_9_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);
      const i_r2 = restoredCtx.$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r3.toggleWithInfo(i_r2.abbrivation));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 12)(4, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h6", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const i_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("flag-icon flag-icon-", i_r2.abbrivation, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 5, i_r2.abbrivation));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r2.name);
  }
}
function FlagIconComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14)(1, "div", 0)(2, "div", 1)(3, "div", 15)(4, "div", 16)(5, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FlagIconComponent_div_10_Template_i_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r5.detail = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 19)(9, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Class");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 22)(13, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Markup ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 23)(16, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FlagIconComponent_div_10_Template_button_click_18_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r7.copyText(ctx_r7.flag));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Copy text");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("flag-icon flag-icon-", ctx_r1.flag, " fa-2x");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx_r1.val);
  }
}
class FlagIconComponent {
  constructor(toastrService) {
    this.toastrService = toastrService;
    this.detail = false;
    this.icon = [{
      abbrivation: 'in',
      name: 'India Flag'
    }, {
      abbrivation: 'ad',
      name: 'Andorra Flag'
    }, {
      abbrivation: 'ae',
      name: 'United Arab Emirates Flag'
    }, {
      abbrivation: 'af',
      name: 'Afghanistan Flag'
    }, {
      abbrivation: 'ag',
      name: 'Antigua and Barbuda Flag'
    }, {
      abbrivation: 'ai',
      name: 'Anguilla Flag'
    }, {
      abbrivation: 'al',
      name: 'Albania Flag'
    }, {
      abbrivation: 'am',
      name: 'Armenia Flag'
    }, {
      abbrivation: 'ao',
      name: 'Angola Flag'
    }, {
      abbrivation: 'ar',
      name: 'Argentina Flag'
    }, {
      abbrivation: 'as',
      name: 'American Samoa Flag'
    }, {
      abbrivation: 'at',
      name: 'Austria Flag'
    }, {
      abbrivation: 'au',
      name: 'Australia Flag'
    }, {
      abbrivation: 'aw',
      name: 'Aruba Flag'
    }, {
      abbrivation: 'ax',
      name: 'Aland Islands Flag'
    }, {
      abbrivation: 'az',
      name: 'Azerbaijan Flag'
    }, {
      abbrivation: 'ba',
      name: 'Bosnia and Herzegovina Flag'
    }, {
      abbrivation: 'bb',
      name: 'Barbados Flag'
    }, {
      abbrivation: 'bd',
      name: 'Bangladesh Flag'
    }, {
      abbrivation: 'be',
      name: 'Belgium Flag'
    }, {
      abbrivation: 'bf',
      name: 'Burkina Faso Flag'
    }, {
      abbrivation: 'bg',
      name: 'Bulgaria Flag'
    }, {
      abbrivation: 'bh',
      name: 'Bahrain Flag'
    }, {
      abbrivation: 'bi',
      name: 'Burundi Flag'
    }, {
      abbrivation: 'bj',
      name: 'Benin Flag'
    }, {
      abbrivation: 'bl',
      name: 'Saint Barthélemy Flag'
    }, {
      abbrivation: 'bm',
      name: 'Bermuda Flag'
    }, {
      abbrivation: 'bn',
      name: 'Brunei Darussalam Flag'
    }, {
      abbrivation: 'bo',
      name: 'Bolivia (Plurinational State of) Flag'
    }, {
      abbrivation: 'bq',
      name: 'Bonaire, Sint Eustatius and Saba Flag'
    }, {
      abbrivation: 'br',
      name: 'Brazil Flag'
    }, {
      abbrivation: 'bs',
      name: 'Bahamas Flag'
    }, {
      abbrivation: 'bt',
      name: 'Bhutan Flag'
    }, {
      abbrivation: 'bw',
      name: 'Botswana Flag'
    }, {
      abbrivation: 'by',
      name: 'Belarus Flag'
    }, {
      abbrivation: 'bz',
      name: 'Belize Flag'
    }, {
      abbrivation: 'ca',
      name: 'Canada Flag'
    }, {
      abbrivation: 'cc',
      name: 'Cocos (Keeling) Islands Flag'
    }, {
      abbrivation: 'cd',
      name: 'Democratic Republic of the Congo Flag'
    }, {
      abbrivation: 'cf',
      name: 'Central African Republic Flag'
    }, {
      abbrivation: 'cg',
      name: 'Republic of the Congo Flag'
    }, {
      abbrivation: 'ch',
      name: 'Switzerland Flag'
    }, {
      abbrivation: 'ci',
      name: 'Côte d Ivoire Flag'
    }, {
      abbrivation: 'ck',
      name: 'Cook Islands Flag'
    }, {
      abbrivation: 'cl',
      name: 'Chile Flag'
    }, {
      abbrivation: 'cm',
      name: 'Cameroon Flag'
    }, {
      abbrivation: 'cn',
      name: 'China Flag'
    }, {
      abbrivation: 'co',
      name: 'Colombia Flag'
    }, {
      abbrivation: 'cr',
      name: 'Costa Rica Flag'
    }, {
      abbrivation: 'cu',
      name: 'Cuba Flag'
    }, {
      abbrivation: 'cv',
      name: 'Cabo Verde Flag'
    }, {
      abbrivation: 'cw',
      name: 'Curaçao Flag'
    }, {
      abbrivation: 'cx',
      name: 'Christmas Island Flag'
    }, {
      abbrivation: 'cy',
      name: 'Cyprus Flag'
    }, {
      abbrivation: 'cz',
      name: 'Czech Republic Flag'
    }, {
      abbrivation: 'de',
      name: 'Germany Flag'
    }, {
      abbrivation: 'dj',
      name: 'Djibouti Flag'
    }, {
      abbrivation: 'dk',
      name: 'Denmark Flag'
    }, {
      abbrivation: 'dm',
      name: 'Dominica Flag'
    }, {
      abbrivation: 'do',
      name: 'Dominican Republic Flag'
    }, {
      abbrivation: 'dz',
      name: 'Algeria Flag'
    }, {
      abbrivation: 'ec',
      name: 'Ecuador Flag'
    }, {
      abbrivation: 'ee',
      name: 'Estonia Flag'
    }, {
      abbrivation: 'eg',
      name: 'Egypt Flag'
    }, {
      abbrivation: 'eh',
      name: 'Western Sahara Flag'
    }, {
      abbrivation: 'er',
      name: 'Eritrea Flag'
    }, {
      abbrivation: 'es',
      name: 'Spain Flag'
    }, {
      abbrivation: 'et',
      name: 'Ethiopia Flag'
    }, {
      abbrivation: 'fi',
      name: 'Finland Flag'
    }, {
      abbrivation: 'fj',
      name: 'Fiji Flag'
    }, {
      abbrivation: 'fk',
      name: 'Falkland Islands Flag'
    }, {
      abbrivation: 'fm',
      name: 'Federated States of Micronesia Flag'
    }, {
      abbrivation: 'fo',
      name: 'Faroe Islands Flag'
    }, {
      abbrivation: 'fr',
      name: 'France Flag'
    }, {
      abbrivation: 'ga',
      name: 'Gabon Flag'
    }, {
      abbrivation: 'gb',
      name: 'United Kingdom Flag'
    }, {
      abbrivation: 'gd',
      name: 'Grenada Flag'
    }, {
      abbrivation: 'ge',
      name: 'Georgia Flag'
    }, {
      abbrivation: 'gf',
      name: 'French Guiana Flag'
    }, {
      abbrivation: 'gg',
      name: 'Guernsey Flag'
    }, {
      abbrivation: 'gh',
      name: 'Ghana Flag'
    }, {
      abbrivation: 'gi',
      name: 'Gibraltar Flag'
    }, {
      abbrivation: 'gl',
      name: 'Greenland Flag'
    }, {
      abbrivation: 'gm',
      name: 'Gambia Flag'
    }, {
      abbrivation: 'gn',
      name: 'Guinea Flag'
    }, {
      abbrivation: 'gp',
      name: 'Guadeloupe Flag'
    }, {
      abbrivation: 'gq',
      name: 'Equatorial Guinea Flag'
    }, {
      abbrivation: 'gr',
      name: 'Greece Flag'
    }, {
      abbrivation: 'gs',
      name: 'South Georgia and the South Sandwich Islands Flag'
    }, {
      abbrivation: 'gt',
      name: 'Guatemala Flag'
    }, {
      abbrivation: 'gu',
      name: 'Guam Flag'
    }, {
      abbrivation: 'gw',
      name: 'Guinea-Bissau Flag'
    }, {
      abbrivation: 'gy',
      name: 'Guyana Flag'
    }, {
      abbrivation: 'hk',
      name: 'Hong Kong Flag'
    }, {
      abbrivation: 'hn',
      name: 'Honduras Flag'
    }, {
      abbrivation: 'hr',
      name: 'Croatia Flag'
    }, {
      abbrivation: 'ht',
      name: 'Haiti Flag'
    }, {
      abbrivation: 'hu',
      name: 'Hungary Flag'
    }, {
      abbrivation: 'id',
      name: 'Indonesia Flag'
    }, {
      abbrivation: 'ie',
      name: 'Ireland Flag'
    }, {
      abbrivation: 'il',
      name: 'Israel Flag'
    }, {
      abbrivation: 'im',
      name: 'Isle of Man Flag'
    }, {
      abbrivation: 'io',
      name: 'British Indian Ocean Territory Flag'
    }, {
      abbrivation: 'iq',
      name: 'Iraq Flag'
    }, {
      abbrivation: 'ir',
      name: 'Iran (Islamic Republic of) Flag'
    }, {
      abbrivation: 'is',
      name: 'Iceland Flag'
    }, {
      abbrivation: 'it',
      name: 'Italy Flag'
    }, {
      abbrivation: 'je',
      name: 'Jersey Flag'
    }, {
      abbrivation: 'jm',
      name: 'Jamaica Flag'
    }, {
      abbrivation: 'jo',
      name: 'Jordan Flag'
    }, {
      abbrivation: 'jp',
      name: 'Japan Flag'
    }, {
      abbrivation: 'ke',
      name: 'Kenya Flag'
    }, {
      abbrivation: 'kg',
      name: 'Kyrgyzstan Flag'
    }, {
      abbrivation: 'kh',
      name: 'Cambodia Flag'
    }, {
      abbrivation: 'ki',
      name: 'Kiribati Flag'
    }, {
      abbrivation: 'km',
      name: 'Comoros Flag'
    }, {
      abbrivation: 'kn',
      name: 'Saint Kitts and Nevis Flag'
    }, {
      abbrivation: 'kp',
      name: 'North Korea Flag'
    }, {
      abbrivation: 'kr',
      name: 'South Korea Flag'
    }, {
      abbrivation: 'kw',
      name: 'Kuwait Flag'
    }, {
      abbrivation: 'ky',
      name: 'Cayman Islands Flag'
    }, {
      abbrivation: 'kz',
      name: 'Kazakhstan Flag'
    }, {
      abbrivation: 'la',
      name: 'Laos Flag'
    }, {
      abbrivation: 'lb',
      name: 'Lebanon Flag'
    }, {
      abbrivation: 'lc',
      name: 'Saint Lucia Flag'
    }, {
      abbrivation: 'li',
      name: 'Liechtenstein Flag'
    }, {
      abbrivation: 'lk',
      name: 'Sri Lanka Flag'
    }, {
      abbrivation: 'lr',
      name: 'Liberia Flag'
    }, {
      abbrivation: 'ls',
      name: 'Lesotho Flag'
    }, {
      abbrivation: 'lt',
      name: 'Lithuania Flag'
    }, {
      abbrivation: 'lu',
      name: 'Luxembourg Flag'
    }, {
      abbrivation: 'lv',
      name: 'Latvia Flag'
    }, {
      abbrivation: 'ly',
      name: 'Libya Flag'
    }, {
      abbrivation: 'ma',
      name: 'Morocco Flag'
    }, {
      abbrivation: 'mc',
      name: 'Monaco Flag'
    }, {
      abbrivation: 'md',
      name: 'Moldova Flag'
    }, {
      abbrivation: 'me',
      name: 'Montenegro Flag'
    }, {
      abbrivation: 'mf',
      name: 'Saint Martin Flag'
    }, {
      abbrivation: 'mg',
      name: 'Madagascar Flag'
    }, {
      abbrivation: 'mh',
      name: 'Marshall Islands Flag'
    }, {
      abbrivation: 'mk',
      name: 'Former Yugoslav Republic of Macedonia Flag'
    }, {
      abbrivation: 'ml',
      name: 'Mali Flag'
    }, {
      abbrivation: 'mm',
      name: 'Myanmar Flag'
    }, {
      abbrivation: 'mn',
      name: 'Mongolia Flag'
    }, {
      abbrivation: 'mo',
      name: 'Macau Flag'
    }, {
      abbrivation: 'mp',
      name: 'Northern Mariana Islands Flag'
    }, {
      abbrivation: 'mq',
      name: 'Martinique Flag'
    }, {
      abbrivation: 'mr',
      name: 'Mauritania Flag'
    }, {
      abbrivation: 'ms',
      name: 'Montserrat Flag'
    }, {
      abbrivation: 'mt',
      name: 'Malta Flag'
    }, {
      abbrivation: 'mu',
      name: 'Mauritius Flag'
    }, {
      abbrivation: 'mv',
      name: 'Maldives Flag'
    }, {
      abbrivation: 'mw',
      name: 'Malawi Flag'
    }, {
      abbrivation: 'mx',
      name: 'Mexico Flag'
    }, {
      abbrivation: 'my',
      name: 'Malaysia Flag'
    }, {
      abbrivation: 'mz',
      name: 'Mozambique Flag'
    }, {
      abbrivation: 'na',
      name: 'Namibia Flag'
    }, {
      abbrivation: 'nc',
      name: 'New Caledonia Flag'
    }, {
      abbrivation: 'ne',
      name: 'Niger Flag'
    }, {
      abbrivation: 'nf',
      name: 'Norfolk Island Flag'
    }, {
      abbrivation: 'ng',
      name: 'Nigeria Flag'
    }, {
      abbrivation: 'ni',
      name: 'Nicaragua Flag'
    }, {
      abbrivation: 'nl',
      name: 'Netherlands Flag'
    }, {
      abbrivation: 'no',
      name: 'Norway Flag'
    }, {
      abbrivation: 'np',
      name: 'Nepal Flag'
    }, {
      abbrivation: 'nr',
      name: 'Nauru Flag'
    }, {
      abbrivation: 'nu',
      name: 'Niue Flag'
    }, {
      abbrivation: 'nz',
      name: 'New Zealand Flag'
    }, {
      abbrivation: 'om',
      name: 'Oman Flag'
    }, {
      abbrivation: 'pa',
      name: 'Panama Flag'
    }, {
      abbrivation: 'pe',
      name: 'Peru Flag'
    }, {
      abbrivation: 'pf',
      name: 'French Polynesia Flag'
    }, {
      abbrivation: 'pg',
      name: 'Papua New Guinea Flag'
    }, {
      abbrivation: 'ph',
      name: 'Philippines Flag'
    }, {
      abbrivation: 'pk',
      name: 'Pakistan Flag'
    }, {
      abbrivation: 'pl',
      name: 'Poland Flag'
    }, {
      abbrivation: 'pm',
      name: 'Saint Pierre and Miquelon Flag'
    }, {
      abbrivation: 'pn',
      name: 'Pitcairn Flag'
    }, {
      abbrivation: 'pr',
      name: 'Puerto Rico Flag'
    }, {
      abbrivation: 'ps',
      name: 'State of Palestine Flag'
    }, {
      abbrivation: 'pt',
      name: 'Portugal Flag'
    }, {
      abbrivation: 'pw',
      name: 'Palau Flag'
    }, {
      abbrivation: 'py',
      name: 'Paraguay Flag'
    }, {
      abbrivation: 'qa',
      name: 'Qatar Flag'
    }, {
      abbrivation: 're',
      name: 'Réunion Flag'
    }, {
      abbrivation: 'ro',
      name: 'Romania Flag'
    }, {
      abbrivation: 'rs',
      name: 'Serbia Flag'
    }, {
      abbrivation: 'ru',
      name: 'Russia Flag'
    }, {
      abbrivation: 'rw',
      name: 'Rwanda Flag'
    }, {
      abbrivation: 'sa',
      name: 'Saudi Arabia Flag'
    }, {
      abbrivation: 'sb',
      name: 'Solomon Islands Flag'
    }, {
      abbrivation: 'sc',
      name: 'Seychelles Flag'
    }, {
      abbrivation: 'sd',
      name: 'Sudan Flag'
    }, {
      abbrivation: 'se',
      name: 'Sweden Flag'
    }, {
      abbrivation: 'sg',
      name: 'Singapore Flag'
    }, {
      abbrivation: 'sh',
      name: 'Saint Helena, Ascension and Tristan da Cunha Flag'
    }, {
      abbrivation: 'si',
      name: 'Slovenia Flag'
    }, {
      abbrivation: 'sj',
      name: 'Svalbard and Jan Mayen Flag'
    }, {
      abbrivation: 'sk',
      name: 'Slovakia Flag'
    }, {
      abbrivation: 'sl',
      name: 'Sierra Leone Flag'
    }, {
      abbrivation: 'sm',
      name: 'San Marino Flag'
    }, {
      abbrivation: 'sn',
      name: 'Senegal Flag'
    }, {
      abbrivation: 'so',
      name: 'Somalia Flag'
    }, {
      abbrivation: 'sr',
      name: 'Suriname Flag'
    }, {
      abbrivation: 'ss',
      name: 'South Sudan Flag'
    }, {
      abbrivation: 'st',
      name: 'Sao Tome and Principe Flag'
    }, {
      abbrivation: 'sv',
      name: 'El Salvador Flag'
    }, {
      abbrivation: 'sx',
      name: 'Sint Maarten Flag'
    }, {
      abbrivation: 'sy',
      name: 'Syrian Arab Republic Flag'
    }, {
      abbrivation: 'sz',
      name: 'Swaziland Flag'
    }, {
      abbrivation: 'tc',
      name: 'Turks and Caicos Islands Flag'
    }, {
      abbrivation: 'td',
      name: 'Chad Flag'
    }, {
      abbrivation: 'tf',
      name: 'French Southern Territories Flag'
    }, {
      abbrivation: 'tg',
      name: 'Togo Flag'
    }, {
      abbrivation: 'th',
      name: 'Thailand Flag'
    }, {
      abbrivation: 'tj',
      name: 'Tajikistan Flag'
    }, {
      abbrivation: 'tk',
      name: 'Tokelau Flag'
    }, {
      abbrivation: 'tl',
      name: 'Timor-Leste Flag'
    }, {
      abbrivation: 'tm',
      name: 'Turkmenistan Flag'
    }, {
      abbrivation: 'tn',
      name: 'Tunisia Flag'
    }, {
      abbrivation: 'to',
      name: 'Tonga Flag'
    }, {
      abbrivation: 'tr',
      name: 'Turkey Flag'
    }, {
      abbrivation: 'tt',
      name: 'Trinidad and Tobago Flag'
    }, {
      abbrivation: 'tv',
      name: 'Tuvalu Flag'
    }, {
      abbrivation: 'tw',
      name: 'Taiwan Flag'
    }, {
      abbrivation: 'tz',
      name: 'Tanzania Flag'
    }, {
      abbrivation: 'ua',
      name: 'Ukraine Flag'
    }, {
      abbrivation: 'ug',
      name: 'Uganda Flag'
    }, {
      abbrivation: 'um',
      name: 'United States Minor Outlying Islands Flag'
    }, {
      abbrivation: 'us',
      name: 'United States of America Flag'
    }, {
      abbrivation: 'uy',
      name: 'Uruguay Flag'
    }, {
      abbrivation: 'uz',
      name: 'Uzbekistan Flag'
    }, {
      abbrivation: 'va',
      name: 'Holy See Flag'
    }, {
      abbrivation: 'vc',
      name: 'Saint Vincent and the Grenadines Flag'
    }, {
      abbrivation: 've',
      name: 'Venezuela (Bolivarian Republic of) Flag'
    }, {
      abbrivation: 'vg',
      name: 'Virgin Islands (British) Flag'
    }, {
      abbrivation: 'vi',
      name: 'Virgin Islands (U.S.) Flag'
    }, {
      abbrivation: 'vn',
      name: 'Vietnam Flag'
    }, {
      abbrivation: 'vu',
      name: 'Vanuatu Flag'
    }, {
      abbrivation: 'wf',
      name: 'Wallis and Futuna Flag'
    }, {
      abbrivation: 'ws',
      name: 'Samoa Flag'
    }, {
      abbrivation: 'ye',
      name: 'Yemen Flag'
    }, {
      abbrivation: 'yt',
      name: 'Mayotte Flag'
    }, {
      abbrivation: 'za',
      name: 'South Africa Flag'
    }, {
      abbrivation: 'zm',
      name: 'Zambia Flag'
    }, {
      abbrivation: 'zw',
      name: 'Zimbabwe Flag'
    }];
  }
  //Display Icon detail
  toggleWithInfo(icon) {
    this.detail = true;
    this.flag = icon;
    this.val = '<i class="flag-icon flag-icon-' + icon + '"></i>';
  }
  //Copy an icon code
  copyText(val) {
    let selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = '<i class="flag-icon flag-icon-' + val + '"></i>';
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
  static #_ = this.ɵfac = function FlagIconComponent_Factory(t) {
    return new (t || FlagIconComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_1__.ToastrService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: FlagIconComponent,
    selectors: [["app-flag-icon"]],
    decls: 11,
    vars: 2,
    consts: [[1, "container-fluid"], [1, "row"], [1, "col-sm-12"], [1, "card"], [1, "card-header"], [1, "m-b-0"], [1, "card-body"], [1, "row", "icon-lists", "flag-icons"], ["class", "col-12 col-sm-6 col-xl-4", 3, "click", 4, "ngFor", "ngForOf"], ["class", "icon-hover-bottom p-fixed", 4, "ngIf"], [1, "col-12", "col-sm-6", "col-xl-4", 3, "click"], [1, "media"], [1, "media-body", "align-self-center"], [1, "mt-0"], [1, "icon-hover-bottom", "p-fixed"], [1, "icon-popup"], [1, "close-icon"], [1, "icofont", "icofont-close", 3, "click"], [1, "icon-first"], [1, "icon-class"], [1, "icon-title"], ["id", "fclass1"], [1, "icon-last", "icon-last"], [1, "form-inline"], [1, "form-group"], ["type", "text", "readonly", "readonly", 1, "inp-val", "form-control", "m-r-10", 3, "value"], [1, "btn", "btn-primary", "notification", 3, "click"]],
    template: function FlagIconComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Flag Icons");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6)(8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, FlagIconComponent_div_9_Template, 9, 7, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, FlagIconComponent_div_10_Template, 20, 4, "div", 9);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.icon);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.detail);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.UpperCasePipe],
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"],
    encapsulation: 2
  });
}

/***/ }),

/***/ 34913:
/*!***********************************************************************************!*\
  !*** ./src/app/components/icons/font-awesome-icon/font-awesome-icon.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FontAwesomeIconComponent: () => (/* binding */ FontAwesomeIconComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-toastr */ 57548);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 26575);



function FontAwesomeIconComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FontAwesomeIconComponent_div_11_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);
      const icon_r11 = restoredCtx.$implicit;
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r12.toggleWithInfo(icon_r11));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const icon_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("fa fa-", icon_r11, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" fa fa-", icon_r11, "");
  }
}
function FontAwesomeIconComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FontAwesomeIconComponent_div_19_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);
      const icon_r14 = restoredCtx.$implicit;
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r15.toggleWithInfo(icon_r14));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const icon_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("fa fa-", icon_r14, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" fa-", icon_r14, "");
  }
}
function FontAwesomeIconComponent_div_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FontAwesomeIconComponent_div_27_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);
      const icon_r17 = restoredCtx.$implicit;
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r18.toggleWithInfo(icon_r17));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const icon_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("fa fa-", icon_r17, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" fa-", icon_r17, "");
  }
}
function FontAwesomeIconComponent_div_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FontAwesomeIconComponent_div_35_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22);
      const icon_r20 = restoredCtx.$implicit;
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r21.toggleWithInfo(icon_r20));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const icon_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("fa fa-spin fa-", icon_r20, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" fa-", icon_r20, "");
  }
}
function FontAwesomeIconComponent_div_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FontAwesomeIconComponent_div_43_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25);
      const icon_r23 = restoredCtx.$implicit;
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r24.toggleWithInfo(icon_r23));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const icon_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("fa fa-", icon_r23, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" fa-", icon_r23, "");
  }
}
function FontAwesomeIconComponent_div_51_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FontAwesomeIconComponent_div_51_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28);
      const icon_r26 = restoredCtx.$implicit;
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r27.toggleWithInfo(icon_r26));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const icon_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("fa fa-", icon_r26, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" fa-", icon_r26, "");
  }
}
function FontAwesomeIconComponent_div_59_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FontAwesomeIconComponent_div_59_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31);
      const icon_r29 = restoredCtx.$implicit;
      const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r30.toggleWithInfo(icon_r29));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const icon_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("fa fa-", icon_r29, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" fa-", icon_r29, "");
  }
}
function FontAwesomeIconComponent_div_67_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FontAwesomeIconComponent_div_67_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34);
      const icon_r32 = restoredCtx.$implicit;
      const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r33.toggleWithInfo(icon_r32));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const icon_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("fa fa-", icon_r32, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" fa-", icon_r32, "");
  }
}
function FontAwesomeIconComponent_div_75_Template(rf, ctx) {
  if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FontAwesomeIconComponent_div_75_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37);
      const icon_r35 = restoredCtx.$implicit;
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r36.toggleWithInfo(icon_r35));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const icon_r35 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("fa fa-", icon_r35, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" fa-", icon_r35, "");
  }
}
function FontAwesomeIconComponent_div_83_Template(rf, ctx) {
  if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FontAwesomeIconComponent_div_83_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40);
      const icon_r38 = restoredCtx.$implicit;
      const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r39.toggleWithInfo(icon_r38));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const icon_r38 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("fa fa-", icon_r38, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" fa-", icon_r38, "");
  }
}
function FontAwesomeIconComponent_div_84_Template(rf, ctx) {
  if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12)(1, "div", 0)(2, "div", 1)(3, "div", 13)(4, "div", 14)(5, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FontAwesomeIconComponent_div_84_Template_i_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42);
      const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r41.detail = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 17)(9, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Class");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 20)(13, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Markup ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 21)(16, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FontAwesomeIconComponent_div_84_Template_button_click_18_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42);
      const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r43.copyText(ctx_r43.icon));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Copy text");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("fa fa-", ctx_r10.icon, " fa-2x");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx_r10.val);
  }
}
class FontAwesomeIconComponent {
  constructor(toastrService) {
    this.toastrService = toastrService;
    this.detail = false;
    this.icons20 = ["bluetooth", "bluetooth-b", "codiepie", "credit-card-alt", "edge", "fort-awesome", "hashtag", "mixcloud", "modx", "pause-circle", "pause-circle-o", "percent", "product-hunt", "reddit-alien", "scribd", "shopping-bag", "shopping-basket", "stop-circle", "stop-circle-o", "usb"];
    this.currencyicons = ["bitcoin", "btc", "cny", "dollar", "eur", "euro", "gbp", "inr", "jpy", "krw", "money", "rmb", "rouble", "rub", "ruble", "rupee", "try", "turkish-lira", "usd", "won", "yen"];
    this.webicons = ["adjust", "anchor", "archive", "arrows", "arrows-h", "arrows-v", "asterisk", "automobile", "ban", "bank", "bar-chart-o", "barcode", "bars", "beer", "bell", "bell-o", "bolt", "bomb", "book", "bookmark", "bookmark-o", "briefcase", "bug", "building", "building-o", "bullhorn", "bullseye", "cab", "calendar", "calendar-o", "camera", "camera-retro", "car", "caret-square-o-down", "caret-square-o-left", "caret-square-o-right", "caret-square-o-up", "certificate", "check", "check-circle", "check-circle-o", "check-square", "check-square-o", "child", "circle", "circle-o", "circle-o-notch", "circle-thin", "clock-o", "cloud", "cloud-download", "cloud-upload", "code", "code-fork", "coffee", "cog", "cogs", "comment", "comment-o", "comments", "comments-o", "compass", "credit-card", "crop", "crosshairs", "cube", "cubes", "cutlery", "dashboard", "database", "desktop", "dot-circle-o", "download", "edit", "ellipsis-h", "ellipsis-v", "envelope", "envelope-o", "envelope-square", "eraser", "exchange", "exclamation", "exclamation-circle", "exclamation-triangle", "external-link", "external-link-square", "eye", "eye-slash", "fax", "female", "fighter-jet", "file-archive-o", "file-audio-o", "file-code-o", "file-excel-o", "file-image-o", "file-movie-o", "file-pdf-o", "file-photo-o", "file-picture-o", "file-powerpoint-o", "file-sound-o", "file-video-o", "file-word-o", "file-zip-o", "film", "filter", "fire", "fire-extinguisher", "flag", "flag-checkered", "flag-o", "flash", "flask", "folder", "folder-o", "folder-open", "folder-open-o", "frown-o", "gamepad", "gavel", "gear", "gears", "gift", "glass", "globe", "graduation-cap", "group", "hdd-o", "headphones", "heart", "heart-o", "history", "home", "image", "inbox", "info", "info-circle", "institution", "key", "keyboard-o", "language", "laptop", "leaf", "legal", "lemon-o", "level-down", "level-up", "life-bouy", "life-ring", "life-saver", "lightbulb-o", "location-arrow", "lock", "magic", "magnet", "mail-forward", "mail-reply", "mail-reply-all", "male", "map-marker", "meh-o", "microphone", "microphone-slash", "minus", "minus-circle", "minus-square", "minus-square-o", "mobile", "mobile-phone", "money", "moon-o", "mortar-board", "music", "navicon", "paper-plane", "paper-plane-o", "paw", "pencil", "pencil-square", "pencil-square-o", "phone", "phone-square", "photo", "picture-o", "plane", "plus", "plus-circle", "plus-square", "plus-square-o", "power-off", "print", "puzzle-piece", "qrcode", "question", "question-circle", "quote-left", "quote-right", "random", "recycle", "refresh", "reorder", "reply", "reply-all", "retweet", "road", "rocket", "rss", "rss-square", "search", "search-minus", "search-plus", "send", "send-o", "share", "share-alt", "share-alt-square", "share-square", "share-square-o", "shield", "shopping-cart", "sign-in", "sign-out", "signal", "sitemap", "sliders", "smile-o", "sort", "sort-alpha-asc", "sort-alpha-desc", "sort-amount-asc", "sort-amount-desc", "sort-asc", "sort-desc", "sort-down", "sort-numeric-asc", "sort-numeric-desc", "sort-up", "space-shuttle", "spinner", "spoon", "square", "square-o", "star", "star-half", "star-half-empty", "star-half-full", "star-half-o", "star-o", "suitcase", "sun-o", "support", "tablet", "tachometer", "tag", "tags", "tasks", "taxi", "terminal", "thumb-tack", "thumbs-down", "thumbs-o-down", "thumbs-o-up", "thumbs-up", "ticket", "times", "times-circle", "times-circle-o", "tint", "toggle-down", "toggle-left", "toggle-right", "toggle-up", "trash-o", "tree", "trophy", "truck", "umbrella", "university", "unlock", "unlock-alt", "unsorted", "upload", "user", "users", "video-camera", "volume-down", "volume-off", "volume-up", "warning", "wheelchair", "wrench"];
    this.spinner = ["circle-o-notch", "cog", "gear", "refresh", "spinner"];
    this.formicons = ["check-square", "check-square-o", "circle", "circle-o", "dot-circle-o", "minus-square", "minus-square-o", "plus-square", "plus-square-o", "square", "square-o"];
    this.texteditoricons = ["align-center", "align-justify", "align-left", "align-right", "bold", "chain", "chain-broken", "clipboard", "columns", "copy", "cut", "dedent", "eraser", "file", "file-o", "file-text", "file-text-o", "files-o", "floppy-o", "font", "header", "indent", "italic", "link", "list", "list-alt", "list-ol", "list-ul", "outdent", "paperclip", "paragraph", "paste", "repeat", "rotate-left", "rotate-right", "save", "scissors", "strikethrough", "subscript", "superscript", "table", "text-height", "text-width", "th", "th-large", "th-list", "underline", "undo", "unlink"];
    this.directionalicons = ["angle-double-down", "angle-double-left", "angle-double-right", "angle-double-up", "angle-down", "angle-left", "angle-right", "angle-up", "arrow-circle-down", "arrow-circle-left", "arrow-circle-o-down", "arrow-circle-o-left", "arrow-circle-o-right", "arrow-circle-o-up", "arrow-circle-right", "arrow-circle-up", "arrow-down", "arrow-left", "arrow-right", "arrow-up", "arrows", "arrows-alt", "arrows-h", "arrows-v", "caret-down", "caret-left", "caret-right", "caret-up", "caret-square-o-left", "caret-square-o-right", "caret-square-o-up", "caret-square-o-down", "chevron-circle-down", "chevron-circle-left", "chevron-circle-right", "chevron-circle-up", "chevron-down", "chevron-left", "chevron-right", "chevron-up", "hand-o-down", "hand-o-left", "hand-o-right", "hand-o-up", "long-arrow-down", "long-arrow-left", "long-arrow-right", "long-arrow-up", "toggle-down", "toggle-left", "toggle-right", "toggle-up"];
    this.videoicons = ["arrows-alt", "backward", "compress", "eject", "expand", "fast-backward", "fast-forward", "forward", "pause", "play", "play-circle", "play-circle-o", "step-backward", "step-forward", "stop", "youtube-play"];
    this.branddicons = ["adn", "android", "apple", "behance", "behance-square", "bitbucket", "bitbucket-square", "bitcoin", "btc", "codepen", "css3", "delicious", "deviantart", "digg", "dribbble", "dropbox", "drupal", "empire", "facebook", "facebook-square", "flickr", "foursquare", "ge", "git", "git-square", "github", "github-alt", "github-square", "gittip", "google", "google-plus", "google-plus-square", "hacker-news", "html5", "instagram", "joomla", "jsfiddle", "linkedin", "linkedin-square", "linux", "maxcdn", "openid", "pagelines", "pied-piper", "pied-piper-alt", "pinterest", "pinterest-square", "qq", "ra", "rebel", "reddit", "reddit-square", "renren", "share-alt", "share-alt-square", "skype", "slack", "soundcloud", "spotify", "stack-exchange", "stack-overflow", "steam", "steam-square", "stumbleupon", "stumbleupon-circle", "tencent-weibo", "trello", "tumblr", "tumblr-square", "twitter", "twitter-square", "vimeo-square", "vine", "vk", "wechat", "weibo", "weixin", "windows", "wordpress", "xing", "xing-square", "yahoo", "youtube", "youtube-play", "youtube-square"];
    this.medicalicons = ["ambulance", "h-square", "hospital-o", "medkit", "plus-square", "stethoscope", "user-md", "wheelchair"];
  }
  //Display Icon detail
  toggleWithInfo(icon) {
    this.detail = true;
    this.icon = icon;
    this.val = '<i class="fa fa-' + icon + '"></i>';
  }
  //Copy an icon code
  copyText(val) {
    let selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = '<i class="fa fa-' + val + '"></i>';
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
  static #_ = this.ɵfac = function FontAwesomeIconComponent_Factory(t) {
    return new (t || FontAwesomeIconComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_1__.ToastrService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: FontAwesomeIconComponent,
    selectors: [["app-font-awesome-icon"]],
    decls: 85,
    vars: 11,
    consts: [[1, "container-fluid"], [1, "row"], [1, "col-sm-12"], [1, "card"], [1, "card-header"], [1, "m-b-0"], [1, "digits"], [1, "card-body"], [1, "row", "icon-lists"], ["class", "col-sm-6 col-md-4 col-xl-3", 3, "click", 4, "ngFor", "ngForOf"], ["class", "icon-hover-bottom p-fixed", 4, "ngIf"], [1, "col-sm-6", "col-md-4", "col-xl-3", 3, "click"], [1, "icon-hover-bottom", "p-fixed"], [1, "icon-popup"], [1, "close-icon"], [1, "icofont", "icofont-close", 3, "click"], [1, "icon-first"], [1, "icon-class"], [1, "icon-title"], ["id", "fclass1"], [1, "icon-last", "icon-last"], [1, "form-inline"], [1, "form-group"], ["type", "text", "readonly", "readonly", 1, "inp-val", "form-control", "m-r-10", 3, "value"], [1, "btn", "btn-primary", "notification", 3, "click"]],
    template: function FontAwesomeIconComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h5", 5)(6, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "20");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Icons");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7)(10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, FontAwesomeIconComponent_div_11_Template, 3, 4, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 2)(13, "div", 3)(14, "div", 4)(15, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Currency Icons");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 7)(18, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, FontAwesomeIconComponent_div_19_Template, 3, 4, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 2)(21, "div", 3)(22, "div", 4)(23, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Web App Icons");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 7)(26, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, FontAwesomeIconComponent_div_27_Template, 3, 4, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 2)(29, "div", 3)(30, "div", 4)(31, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Spinner Icons");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 7)(34, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, FontAwesomeIconComponent_div_35_Template, 3, 4, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 2)(37, "div", 3)(38, "div", 4)(39, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Form Control Icons");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 7)(42, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, FontAwesomeIconComponent_div_43_Template, 3, 4, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 2)(45, "div", 3)(46, "div", 4)(47, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Text Editor Icons");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 7)(50, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, FontAwesomeIconComponent_div_51_Template, 3, 4, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 2)(53, "div", 3)(54, "div", 4)(55, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Directional Icons");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 7)(58, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](59, FontAwesomeIconComponent_div_59_Template, 3, 4, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 2)(61, "div", 3)(62, "div", 4)(63, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Video Player Icons");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 7)(66, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](67, FontAwesomeIconComponent_div_67_Template, 3, 4, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 2)(69, "div", 3)(70, "div", 4)(71, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Brand Icons");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 7)(74, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](75, FontAwesomeIconComponent_div_75_Template, 3, 4, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 2)(77, "div", 3)(78, "div", 4)(79, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Medical Icons");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 7)(82, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](83, FontAwesomeIconComponent_div_83_Template, 3, 4, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](84, FontAwesomeIconComponent_div_84_Template, 20, 4, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.icons20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.currencyicons);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.webicons);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.spinner);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.formicons);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.texteditoricons);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.directionalicons);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.videoicons);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.branddicons);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.medicalicons);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.detail);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf],
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"],
    encapsulation: 2
  });
}

/***/ }),

/***/ 67837:
/*!*****************************************************************!*\
  !*** ./src/app/components/icons/ico-icon/ico-icon.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IcoIconComponent: () => (/* binding */ IcoIconComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-toastr */ 57548);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 26575);



function IcoIconComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IcoIconComponent_div_11_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32);
      const icon_r30 = restoredCtx.$implicit;
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r31.toggleWithInfo(icon_r30));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const icon_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("icofont icofont-", icon_r30, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](icon_r30);
  }
}
function IcoIconComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IcoIconComponent_div_19_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35);
      const icon_r33 = restoredCtx.$implicit;
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r34.toggleWithInfo(icon_r33));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const icon_r33 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("icofont icofont-", icon_r33, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](icon_r33);
  }
}
function IcoIconComponent_div_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IcoIconComponent_div_27_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38);
      const icon_r36 = restoredCtx.$implicit;
      const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r37.toggleWithInfo(icon_r36));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const icon_r36 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("icofont icofont-", icon_r36, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](icon_r36);
  }
}
function IcoIconComponent_div_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IcoIconComponent_div_35_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41);
      const icon_r39 = restoredCtx.$implicit;
      const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r40.toggleWithInfo(icon_r39));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const icon_r39 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("icofont icofont-", icon_r39, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](icon_r39);
  }
}
function IcoIconComponent_div_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IcoIconComponent_div_43_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r44);
      const icon_r42 = restoredCtx.$implicit;
      const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r43.toggleWithInfo(icon_r42));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const icon_r42 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("icofont icofont-", icon_r42, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](icon_r42);
  }
}
function IcoIconComponent_div_51_Template(rf, ctx) {
  if (rf & 1) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IcoIconComponent_div_51_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r47);
      const icon_r45 = restoredCtx.$implicit;
      const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r46.toggleWithInfo(icon_r45));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const icon_r45 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("icofont icofont-", icon_r45, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](icon_r45);
  }
}
function IcoIconComponent_div_59_Template(rf, ctx) {
  if (rf & 1) {
    const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IcoIconComponent_div_59_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r50);
      const icon_r48 = restoredCtx.$implicit;
      const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r49.toggleWithInfo(icon_r48));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const icon_r48 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("icofont icofont-", icon_r48, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](icon_r48);
  }
}
function IcoIconComponent_div_67_Template(rf, ctx) {
  if (rf & 1) {
    const _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IcoIconComponent_div_67_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r53);
      const icon_r51 = restoredCtx.$implicit;
      const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r52.toggleWithInfo(icon_r51));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const icon_r51 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("icofont icofont-", icon_r51, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](icon_r51);
  }
}
function IcoIconComponent_div_75_Template(rf, ctx) {
  if (rf & 1) {
    const _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IcoIconComponent_div_75_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r56);
      const icon_r54 = restoredCtx.$implicit;
      const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r55.toggleWithInfo(icon_r54));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const icon_r54 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("icofont icofont-", icon_r54, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](icon_r54);
  }
}
function IcoIconComponent_div_83_Template(rf, ctx) {
  if (rf & 1) {
    const _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IcoIconComponent_div_83_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r59);
      const icon_r57 = restoredCtx.$implicit;
      const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r58.toggleWithInfo(icon_r57));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const icon_r57 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("icofont icofont-", icon_r57, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](icon_r57);
  }
}
function IcoIconComponent_div_91_Template(rf, ctx) {
  if (rf & 1) {
    const _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IcoIconComponent_div_91_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r62);
      const icon_r60 = restoredCtx.$implicit;
      const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r61.toggleWithInfo(icon_r60));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const icon_r60 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("icofont icofont-", icon_r60, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](icon_r60);
  }
}
function IcoIconComponent_div_99_Template(rf, ctx) {
  if (rf & 1) {
    const _r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IcoIconComponent_div_99_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r65);
      const icon_r63 = restoredCtx.$implicit;
      const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r64.toggleWithInfo(icon_r63));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const icon_r63 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("icofont icofont-", icon_r63, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](icon_r63);
  }
}
function IcoIconComponent_div_107_Template(rf, ctx) {
  if (rf & 1) {
    const _r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IcoIconComponent_div_107_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r68);
      const icon_r66 = restoredCtx.$implicit;
      const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r67.toggleWithInfo(icon_r66));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const icon_r66 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("icofont icofont-", icon_r66, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](icon_r66);
  }
}
function IcoIconComponent_div_115_Template(rf, ctx) {
  if (rf & 1) {
    const _r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IcoIconComponent_div_115_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r71);
      const icon_r69 = restoredCtx.$implicit;
      const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r70.toggleWithInfo(icon_r69));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const icon_r69 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("icofont icofont-", icon_r69, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](icon_r69);
  }
}
function IcoIconComponent_div_123_Template(rf, ctx) {
  if (rf & 1) {
    const _r74 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IcoIconComponent_div_123_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r74);
      const icon_r72 = restoredCtx.$implicit;
      const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r73.toggleWithInfo(icon_r72));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const icon_r72 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("icofont icofont-", icon_r72, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](icon_r72);
  }
}
function IcoIconComponent_div_131_Template(rf, ctx) {
  if (rf & 1) {
    const _r77 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IcoIconComponent_div_131_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r77);
      const icon_r75 = restoredCtx.$implicit;
      const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r76.toggleWithInfo(icon_r75));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const icon_r75 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("icofont icofont-", icon_r75, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](icon_r75);
  }
}
function IcoIconComponent_div_139_Template(rf, ctx) {
  if (rf & 1) {
    const _r80 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IcoIconComponent_div_139_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r80);
      const icon_r78 = restoredCtx.$implicit;
      const ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r79.toggleWithInfo(icon_r78));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const icon_r78 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("icofont icofont-", icon_r78, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](icon_r78);
  }
}
function IcoIconComponent_div_147_Template(rf, ctx) {
  if (rf & 1) {
    const _r83 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IcoIconComponent_div_147_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r83);
      const icon_r81 = restoredCtx.$implicit;
      const ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r82.toggleWithInfo(icon_r81));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const icon_r81 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("icofont icofont-", icon_r81, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](icon_r81);
  }
}
function IcoIconComponent_div_155_Template(rf, ctx) {
  if (rf & 1) {
    const _r86 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IcoIconComponent_div_155_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r86);
      const icon_r84 = restoredCtx.$implicit;
      const ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r85.toggleWithInfo(icon_r84));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const icon_r84 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("icofont icofont-", icon_r84, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](icon_r84);
  }
}
function IcoIconComponent_div_163_Template(rf, ctx) {
  if (rf & 1) {
    const _r89 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IcoIconComponent_div_163_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r89);
      const icon_r87 = restoredCtx.$implicit;
      const ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r88.toggleWithInfo(icon_r87));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const icon_r87 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("icofont icofont-", icon_r87, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](icon_r87);
  }
}
function IcoIconComponent_div_171_Template(rf, ctx) {
  if (rf & 1) {
    const _r92 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IcoIconComponent_div_171_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r92);
      const icon_r90 = restoredCtx.$implicit;
      const ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r91.toggleWithInfo(icon_r90));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const icon_r90 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("icofont icofont-", icon_r90, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](icon_r90);
  }
}
function IcoIconComponent_div_179_Template(rf, ctx) {
  if (rf & 1) {
    const _r95 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IcoIconComponent_div_179_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r95);
      const icon_r93 = restoredCtx.$implicit;
      const ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r94.toggleWithInfo(icon_r93));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const icon_r93 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("icofont icofont-", icon_r93, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](icon_r93);
  }
}
function IcoIconComponent_div_187_Template(rf, ctx) {
  if (rf & 1) {
    const _r98 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IcoIconComponent_div_187_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r98);
      const icon_r96 = restoredCtx.$implicit;
      const ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r97.toggleWithInfo(icon_r96));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const icon_r96 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("icofont icofont-", icon_r96, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](icon_r96);
  }
}
function IcoIconComponent_div_195_Template(rf, ctx) {
  if (rf & 1) {
    const _r101 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IcoIconComponent_div_195_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r101);
      const icon_r99 = restoredCtx.$implicit;
      const ctx_r100 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r100.toggleWithInfo(icon_r99));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const icon_r99 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("icofont icofont-", icon_r99, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](icon_r99);
  }
}
function IcoIconComponent_div_203_Template(rf, ctx) {
  if (rf & 1) {
    const _r104 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IcoIconComponent_div_203_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r104);
      const icon_r102 = restoredCtx.$implicit;
      const ctx_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r103.toggleWithInfo(icon_r102));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const icon_r102 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("icofont icofont-", icon_r102, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](icon_r102);
  }
}
function IcoIconComponent_div_211_Template(rf, ctx) {
  if (rf & 1) {
    const _r107 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IcoIconComponent_div_211_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r107);
      const icon_r105 = restoredCtx.$implicit;
      const ctx_r106 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r106.toggleWithInfo(icon_r105));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const icon_r105 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("icofont icofont-", icon_r105, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](icon_r105);
  }
}
function IcoIconComponent_div_219_Template(rf, ctx) {
  if (rf & 1) {
    const _r110 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IcoIconComponent_div_219_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r110);
      const icon_r108 = restoredCtx.$implicit;
      const ctx_r109 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r109.toggleWithInfo(icon_r108));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const icon_r108 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("icofont icofont-", icon_r108, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](icon_r108);
  }
}
function IcoIconComponent_div_227_Template(rf, ctx) {
  if (rf & 1) {
    const _r113 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IcoIconComponent_div_227_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r113);
      const icon_r111 = restoredCtx.$implicit;
      const ctx_r112 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r112.toggleWithInfo(icon_r111));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const icon_r111 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("icofont icofont-", icon_r111, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](icon_r111);
  }
}
function IcoIconComponent_div_235_Template(rf, ctx) {
  if (rf & 1) {
    const _r116 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IcoIconComponent_div_235_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r116);
      const icon_r114 = restoredCtx.$implicit;
      const ctx_r115 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r115.toggleWithInfo(icon_r114));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const icon_r114 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("icofont icofont-", icon_r114, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](icon_r114);
  }
}
function IcoIconComponent_div_236_Template(rf, ctx) {
  if (rf & 1) {
    const _r118 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11)(1, "div", 0)(2, "div", 1)(3, "div", 12)(4, "div", 13)(5, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IcoIconComponent_div_236_Template_i_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r118);
      const ctx_r117 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r117.detail = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 16)(9, "label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Class");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 19)(13, "label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Markup ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 20)(16, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IcoIconComponent_div_236_Template_button_click_18_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r118);
      const ctx_r119 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r119.copyText(ctx_r119.icon));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Copy text");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()();
  }
  if (rf & 2) {
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("icofont icofont-", ctx_r29.icon, " fa-2x");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx_r29.val);
  }
}
class IcoIconComponent {
  constructor(toastrService) {
    this.toastrService = toastrService;
    this.detail = false;
    this.abstract = ["angry-monster", "bathtub", "bird-wings", "bow", "brain-alt", "butterfly-alt", "castle", "circuit", "dart", "dice-alt", "disability-race", "diving-goggle", "fire-alt", "flame-torch", "flora", "flora-flower", "gift-box", "halloween-pumpkin", "hand-power", "hand-thunder", "king-crown", "king-monster", "love", "magician-hat", "native-american", "open-eye", "owl-look", "phoenix", "queen-crown", "robot-face", "sand-clock", "shield-alt", "ship-wheel", "skull-danger", "skull-face", "snail", "snow-alt", "snow-flake", "snowmobile", "space-shuttle", "star-shape", "swirl", "tattoo-wing", "throne", "touch", "tree-alt", "triangle", "unity-hand", "weed", "woman-bird"];
    this.animal = ["animal-bat", "animal-bear", "animal-bear-tracks", "animal-bird", "animal-bird-alt", "animal-bone", "animal-bull", "animal-camel", "animal-camel-alt", "animal-camel-head", "animal-cat", "animal-cat-alt-1", "animal-cat-alt-2", "animal-cat-alt-3", "animal-cat-alt-4", "animal-cat-with-dog", "animal-cow", "animal-cow-head", "animal-crab", "animal-crocodile", "animal-deer-head", "animal-dog", "animal-dog-alt", "animal-dog-barking", "animal-dolphin", "animal-duck-tracks", "animal-eagle-head", "animal-eaten-fish", "animal-elephant", "animal-elephant-alt", "animal-elephant-head", "animal-elephant-head-alt", "animal-elk", "animal-fish", "animal-fish-alt-1", "animal-fish-alt-2", "animal-fish-alt-3", "animal-fish-alt-4", "animal-fox", "animal-fox-alt", "animal-frog", "animal-frog-tracks", "animal-froggy", "animal-giraffe", "animal-giraffe-alt", "animal-goat-head", "animal-goat-head-alt-1", "animal-goat-head-alt-2", "animal-gorilla", "animal-hen-tracks", "animal-horse-head", "animal-horse-head-alt-1", "animal-horse-head-alt-2", "animal-horse-tracks", "animal-jellyfish", "animal-kangaroo", "animal-lemur", "animal-lion", "animal-lion-alt", "animal-lion-head", "animal-lion-head-alt", "animal-monkey", "animal-monkey-alt-1", "animal-monkey-alt-2", "animal-monkey-alt-3", "animal-octopus", "animal-octopus-alt", "animal-owl", "animal-panda", "animal-panda-alt", "animal-panther", "animal-parrot", "animal-parrot-lip", "animal-paw", "animal-pelican", "animal-penguin", "animal-pig", "animal-pig-alt", "animal-pigeon", "animal-pigeon-alt", "animal-pigeons", "animal-rabbit-running", "animal-rat-alt", "animal-rhino", "animal-rhino-head", "animal-rooster", "animal-seahorse", "animal-seal", "animal-shrimp", "animal-snail", "animal-snail-alt-1", "animal-snail-alt-2", "animal-snake", "animal-squid", "animal-squirrel", "animal-tiger", "animal-tiger-alt", "animal-turtle", "animal-whale", "animal-woodpecker", "animal-zebra"];
    this.brand = ["brand-acer", "brand-adidas", "brand-adobe", "brand-air-new-zealand", "brand-airbnb", "brand-aircell", "brand-airtel", "brand-alcatel", "brand-alibaba", "brand-aliexpress", "brand-alipay", "brand-amazon", "brand-amd", "brand-american-airlines", "brand-android", "brand-android-robot", "brand-aol", "brand-apple", "brand-appstore", "brand-asus", "brand-ati", "brand-att", "brand-audi", "brand-axiata", "brand-bada", "brand-bbc", "brand-bing", "brand-blackberry", "brand-bmw", "brand-box", "brand-burger-king", "brand-business-insider", "brand-buzzfeed", "brand-cannon", "brand-casio", "brand-china-mobile", "brand-china-telecom", "brand-china-unicom", "brand-cisco", "brand-citibank", "brand-cnet", "brand-cnn", "brand-cocal-cola", "brand-compaq", "brand-copy", "brand-debian", "brand-delicious", "brand-dell", "brand-designbump", "brand-designfloat", "brand-disney", "brand-dodge", "brand-dove", "brand-ebay", "brand-eleven", "brand-emirates", "brand-espn", "brand-etihad-airways", "brand-etisalat", "brand-etsy", "brand-facebook", "brand-fastrack", "brand-fedex", "brand-ferrari", "brand-fitbit", "brand-flikr", "brand-forbes", "brand-foursquare", "brand-fox", "brand-foxconn", "brand-fujitsu", "brand-general-electric", "brand-gillette", "brand-gizmodo", "brand-gnome", "brand-google", "brand-gopro", "brand-gucci", "brand-hallmark", "brand-hi5", "brand-honda", "brand-hp", "brand-hsbc", "brand-htc", "brand-huawei", "brand-hulu", "brand-hyundai", "brand-ibm", "brand-icofont", "brand-icq", "brand-ikea", "brand-imdb", "brand-indiegogo", "brand-intel", "brand-ipair", "brand-jaguar", "brand-java", "brand-joomla", "brand-joomshaper", "brand-kickstarter", "brand-kik", "brand-lastfm", "brand-lego", "brand-lenovo", "brand-levis", "brand-lexus", "brand-lg", "brand-life-hacker", "brand-line-messenger", "brand-linkedin", "brand-linux", "brand-linux-mint", "brand-lionix", "brand-live-messenger", "brand-loreal", "brand-louis-vuitton", "brand-mac-os", "brand-marvel-app", "brand-mashable", "brand-mazda", "brand-mcdonals", "brand-mercedes", "brand-micromax", "brand-microsoft", "brand-mobileme", "brand-mobily", "brand-motorola", "brand-msi", "brand-mts", "brand-myspace", "brand-mytv", "brand-nasa", "brand-natgeo", "brand-nbc", "brand-nescafe", "brand-nestle", "brand-netflix", "brand-nexus", "brand-nike", "brand-nokia", "brand-nvidia", "brand-omega", "brand-opensuse", "brand-oracle", "brand-panasonic", "brand-paypal", "brand-pepsi", "brand-philips", "brand-pizza-hut", "brand-playstation", "brand-puma", "brand-qatar-air", "brand-qvc", "brand-readernaut", "brand-redbull", "brand-reebok", "brand-reuters", "brand-samsung", "brand-sap", "brand-saudia-airlines", "brand-scribd", "brand-shell", "brand-siemens", "brand-sk-telecom", "brand-slideshare", "brand-smashing-magazine", "brand-snapchat", "brand-sony", "brand-sony-ericsson", "brand-soundcloud", "brand-sprint", "brand-squidoo", "brand-starbucks", "brand-stc", "brand-steam", "brand-suzuki", "brand-symbian", "brand-t-mobile", "brand-tango", "brand-target", "brand-tata-indicom", "brand-techcrunch", "brand-telenor", "brand-teliasonera", "brand-tesla", "brand-the-verge", "brand-thenextweb", "brand-toshiba", "brand-toyota", "brand-tribenet", "brand-ubuntu", "brand-unilever", "brand-vaio", "brand-verizon", "brand-viber", "brand-vodafone", "brand-volkswagen", "brand-walmart", "brand-warnerbros", "brand-whatsapp", "brand-wikipedia", "brand-windows", "brand-wire", "brand-wordpress", "brand-xiaomi", "brand-yahoobuzz", "brand-yamaha", "brand-youtube", "brand-zain", "social-envato"];
    this.business = ["bank-alt", "barcode", "basket", "bill-alt", "billboard", "briefcase-alt-1", "briefcase-alt-2", "building-alt", "businessman", "businesswoman", "cart-alt", "chair", "clip", "coins", "company", "contact-add", "deal", "files", "growth", "id-card", "idea", "list", "meeting-add", "money-bag", "people", "pie-chart", "presentation-alt", "stamp", "stock-mobile", "support", "tasks-alt", "wheel"];
    this.chart = ["chart-arrows-axis", "chart-bar-graph", "chart-flow", "chart-flow-alt-1", "chart-flow-alt-2", "chart-histogram", "chart-histogram-alt", "chart-line", "chart-line-alt", "chart-pie", "chart-pie-alt", "chart-radar-graph"];
    this.construction = ["architecture", "architecture-alt", "barricade", "bricks", "calculations", "cement-mix", "cement-mixer", "danger-zone", "drill", "eco-energy", "eco-environmen", "energy-air", "energy-oil", "energy-savings", "energy-solar", "energy-water", "engineer", "fire-extinguisher-alt", "fix-tools", "glue-oil", "hammer-alt", "help-robot", "industries", "industries-alt-1", "industries-alt-2", "industries-alt-3", "industries-alt-4", "industries-alt-5", "labour", "mining", "paint-brush", "pollution", "power-zone", "radio-active", "recycle-alt", "recycling-man", "safety-hat", "safety-hat-light", "saw", "screw-driver", "settings-alt", "tools-alt-1", "tools-alt-2", "tools-bag", "trolley", "trowel", "under-construction", "under-construction-alt", "vehicle-cement", "vehicle-crane", "vehicle-delivery-van", "vehicle-dozer", "vehicle-excavator", "vehicle-trucktor", "vehicle-wrecking", "worker", "worker-group", "wrench"];
    this.currency = ["cur-afghani", "cur-afghani-false", "cur-afghani-minus", "cur-afghani-plus", "cur-afghani-true", "cur-baht", "cur-baht-false", "cur-baht-minus", "cur-baht-plus", "cur-baht-true", "cur-bitcoin", "cur-bitcoin-false", "cur-bitcoin-minus", "cur-bitcoin-plus", "cur-bitcoin-true", "cur-dollar", "cur-dollar-flase", "cur-dollar-minus", "cur-dollar-plus", "cur-dollar-true", "cur-dong", "cur-dong-false", "cur-dong-minus", "cur-dong-plus", "cur-dong-true", "cur-euro", "cur-euro-false", "cur-euro-minus", "cur-euro-plus", "cur-euro-true", "cur-frank", "cur-frank-false", "cur-frank-minus", "cur-frank-plus", "cur-frank-true", "cur-hryvnia", "cur-hryvnia-false", "cur-hryvnia-minus", "cur-hryvnia-plus", "cur-hryvnia-true", "cur-lira", "cur-lira-false", "cur-lira-minus", "cur-lira-plus", "cur-lira-true", "cur-peseta", "cur-peseta-false", "cur-peseta-minus", "cur-peseta-plus", "cur-peseta-true", "cur-peso", "cur-peso-false", "cur-peso-minus", "cur-peso-plus", "cur-peso-true", "cur-pound", "cur-pound-false", "cur-pound-minus", "cur-pound-plus", "cur-pound-true", "cur-renminbi", "cur-renminbi-false", "cur-renminbi-minus", "cur-renminbi-plus", "cur-renminbi-true", "cur-riyal", "cur-riyal-false", "cur-riyal-minus", "cur-riyal-plus", "cur-riyal-true", "cur-rouble", "cur-rouble-false", "cur-rouble-minus", "cur-rouble-plus", "cur-rouble-true", "cur-rupee", "cur-rupee-false", "cur-rupee-minus", "cur-rupee-plus", "cur-rupee-true", "cur-taka", "cur-taka-false", "cur-taka-minus", "cur-taka-plus", "cur-taka-true", "cur-turkish-lira", "cur-turkish-lira-false", "cur-turkish-lira-minus", "cur-turkish-lira-plus", "cur-turkish-lira-true", "cur-won", "cur-won-false", "cur-won-minus", "cur-won-plus", "cur-won-true", "cur-yen", "cur-yen-false", "cur-yen-minus", "cur-yen-plus", "cur-yen-true"];
    this.device = ["android-nexus", "android-tablet", "apple-watch", "drwaing-tablet", "earphone", "flash-drive", "game-control", "headphone-alt", "htc-one", "imac", "ipad-touch", "iphone", "ipod-nano", "ipod-touch", "keyboard-alt", "keyboard-wireless", "laptop-alt", "macbook", "magic-mouse", "microphone-alt", "monitor", "mouse", "nintendo", "playstation", "psvita", "radio-mic", "refrigerator", "samsung-galaxy", "surface-tablet", "washing-machine", "wifi-router", "wii-u", "windows-lumia", "wireless-mouse", "xbox-360"];
    this.directional = ["arrow-down", "arrow-left", "arrow-right", "arrow-up", "block-down", "block-left", "block-right", "block-up", "bubble-down", "bubble-left", "bubble-right", "bubble-up", "caret-down", "caret-left", "caret-right", "caret-up", "circled-down", "circled-left", "circled-right", "circled-up", "collapse", "cursor-drag", "curved-double-left", "curved-double-right", "curved-down", "curved-left", "curved-right", "curved-up", "dotted-down", "dotted-left", "dotted-right", "dotted-up", "double-left", "double-right", "drag", "drag1", "drag2", "drag3", "expand-alt", "hand-down", "hand-drag", "hand-drag1", "hand-drag2", "hand-drawn-alt-down", "hand-drawn-alt-left", "hand-drawn-alt-right", "hand-drawn-alt-up", "hand-drawn-down", "hand-drawn-left", "hand-drawn-right", "hand-drawn-up", "hand-left", "hand-right", "hand-up", "line-block-down", "line-block-left", "line-block-right", "line-block-up", "long-arrow-down", "long-arrow-left", "long-arrow-right", "long-arrow-up", "rounded-collapse", "rounded-double-left", "rounded-double-right", "rounded-down", "rounded-expand", "rounded-left", "rounded-left-down", "rounded-left-up", "rounded-right", "rounded-right-down", "rounded-right-up", "rounded-up", "scroll-bubble-down", "scroll-bubble-left", "scroll-bubble-right", "scroll-bubble-up", "scroll-double-down", "scroll-double-left", "scroll-double-right", "scroll-double-up", "scroll-down", "scroll-left", "scroll-long-down", "scroll-long-left", "scroll-long-right", "scroll-long-up", "scroll-right", "scroll-up", "simple-down", "simple-left", "simple-left-down", "simple-left-up", "simple-right", "simple-right-down", "simple-right-up", "simple-up", "square-down", "square-left", "square-right", "square-up", "stylish-down", "stylish-left", "stylish-right", "stylish-up", "swoosh-down", "swoosh-left", "swoosh-right", "swoosh-up", "thin-double-left", "thin-double-right", "thin-down", "thin-left", "thin-right", "thin-up"];
    this.eduction = ["atom", "award", "bell-alt", "book-alt", "brainstorming", "certificate-alt-1", "certificate-alt-2", "dna-alt-2", "education", "electron", "fountain-pen", "globe-alt", "graduate-alt", "group-students", "hat", "hat-alt", "instrument", "lamp-light", "microscope-alt", "paper", "pen-alt-4", "pen-nib", "pencil-alt-5", "quill-pen", "read-book", "read-book-alt", "school-bag", "school-bus", "student", "student-alt", "teacher", "test-bulb", "test-tube-alt", "university"];
    this.emotion = ["emo-angry", "emo-astonished", "emo-confounded", "emo-confused", "emo-crying", "emo-dizzy", "emo-expressionless", "emo-heart-eyes", "emo-laughing", "emo-nerd-smile", "emo-open-mouth", "emo-rage", "emo-rolling-eyes", "emo-sad", "emo-simple-smile", "emo-slightly-smile", "emo-smirk", "emo-stuck-out-tongue", "emo-wink-smile", "emo-worried"];
    this.file = ["file-audio", "file-avi-mp4", "file-bmp", "file-code", "file-css", "file-document", "file-eps", "file-excel", "file-exe", "file-file", "file-flv", "file-gif", "file-html5", "file-image", "file-iso", "file-java", "file-javascript", "file-jpg", "file-midi", "file-mov", "file-mp3", "file-pdf", "file-php", "file-png", "file-powerpoint", "file-presentation", "file-psb", "file-psd", "file-python", "file-ruby", "file-spreadsheet", "file-sql", "file-svg", "file-text", "file-tiff", "file-video", "file-wave", "file-wmv", "file-word", "file-zip"];
    this.food = ["apple", "arabian-coffee", "artichoke", "asparagus", "avocado", "baby-food", "banana", "bbq", "beans", "beer", "bell-pepper-capsicum", "birthday-cake", "bread", "broccoli", "burger", "cabbage", "carrot", "cauli-flower", "cheese", "chef", "cherry", "chicken", "chicken-fry", "cocktail", "coconut", "coffee-alt", "coffee-mug", "coffee-pot", "cola", "corn", "croissant", "crop-plant", "cucumber", "cup-cake", "dining-table", "donut", "egg-plant", "egg-poached", "farmer", "farmer1", "fast-food", "fish", "food-basket", "food-cart", "fork-and-knife", "french-fries", "fresh-juice", "fruits", "grapes", "honey", "hot-dog", "hotel-alt", "ice-cream", "ice-cream-alt", "ketchup", "kiwi", "layered-cake", "lemon-alt", "lobster", "mango", "milk", "mushroom", "noodles", "onion", "orange", "pear", "peas", "pepper", "pie-alt", "pineapple", "pizza", "pizza-slice", "plant", "popcorn", "potato", "pumpkin", "raddish", "restaurant", "restaurant-menu", "salt-and-pepper", "sandwich", "sausage", "shrimp", "sof-drinks", "soup-bowl", "spoon-and-fork", "steak", "strawberry", "sub-sandwich", "sushi", "taco", "tea", "tea-pot", "tomato", "waiter-alt", "watermelon", "wheat"];
    this.kids = ["abc", "baby-cloth", "baby-milk-bottle", "baby-trolley", "back-pack", "candy", "cycling", "holding-hands", "infant-nipple", "kids-scooter", "safety-pin", "teddy-bear", "toy-ball", "toy-cat", "toy-duck", "toy-elephant", "toy-hand", "toy-horse", "toy-lattu", "toy-train", "unique-idea"];
    this.law = ["bag-alt", "burglar", "cannon-firing", "cc-camera", "cop", "cop-badge", "court", "court-hammer", "finger-print", "handcuff", "handcuff-alt", "investigation", "investigator", "jail", "judge", "law", "law-alt-1", "law-alt-2", "law-alt-3", "law-book", "law-document", "lawyer", "lawyer-alt-1", "lawyer-alt-2", "order", "pistol", "police", "police-badge", "police-cap", "police-car-alt-1", "police-car-alt-2", "police-hat", "police-van", "protect", "scales", "thief", "thief-alt"];
    this.mathematical = ["abacus", "abacus-alt", "angle", "calculator-alt-1", "calculator-alt-2", "circle-ruler", "circle-ruler-alt", "compass-alt-1", "compass-alt-2", "compass-alt-3", "compass-alt-4", "degrees", "degrees-alt-1", "degrees-alt-2", "golden-ratio", "marker-alt-1", "marker-alt-2", "marker-alt-3", "mathematical", "mathematical-alt-1", "mathematical-alt-2", "pen-alt-1", "pen-alt-2", "pen-alt-3", "pen-holder", "pen-holder-alt-1", "pencil-alt-1", "pencil-alt-2", "pencil-alt-3", "pencil-alt-4", "ruler", "ruler-alt-1", "ruler-alt-2", "ruler-compass", "ruler-compass-alt", "ruler-pencil", "ruler-pencil-alt-1", "ruler-pencil-alt-2", "rulers", "rulers-alt", "square-root"];
    this.medical = ["aids", "ambulance", "autism", "bandage", "bed-patient", "blind", "blood", "blood-drop", "blood-test", "capsule", "crutches", "dna", "dna-alt-1", "doctor", "doctor-alt", "drug", "drug-pack", "eye-alt", "first-aid-alt", "garbage", "heart-alt", "heartbeat", "herbal", "hospital", "icu", "injection-syringe", "laboratory", "medical-sign", "medical-sign-alt", "nurse", "nurse-alt", "nursing-home", "operation-theater", "paralysis-disability", "pills", "prescription", "pulse", "stethoscope", "stethoscope-alt", "stretcher", "surgeon", "surgeon-alt", "tablets", "test-bottle", "test-tube", "thermometer-alt", "tooth", "xray"];
    this.mobileui = ["ui-add", "ui-alarm", "ui-battery", "ui-block", "ui-bluetooth", "ui-brightness", "ui-browser", "ui-calculator", "ui-calendar", "ui-call", "ui-camera", "ui-cart", "ui-cell-phone", "ui-chat", "ui-check", "ui-clip", "ui-clip-board", "ui-clock", "ui-close", "ui-contact-list", "ui-copy", "ui-cut", "ui-delete", "ui-dial-phone", "ui-edit", "ui-email", "ui-file", "ui-fire-wall", "ui-flash-light", "ui-flight", "ui-folder", "ui-game", "ui-handicapped", "ui-head-phone", "ui-home", "ui-image", "ui-keyboard", "ui-laoding", "ui-lock", "ui-love", "ui-love-add", "ui-love-broken", "ui-love-remove", "ui-map", "ui-message", "ui-messaging", "ui-movie", "ui-music", "ui-music-player", "ui-mute", "ui-next", "ui-note", "ui-office", "ui-password", "ui-pause", "ui-play", "ui-play-stop", "ui-pointer", "ui-power", "ui-press", "ui-previous", "ui-rate-add", "ui-rate-blank", "ui-rate-remove", "ui-rating", "ui-record", "ui-remove", "ui-reply", "ui-rotation", "ui-rss", "ui-search", "ui-settings", "ui-social-link", "ui-tag", "ui-text-chat", "ui-text-loading", "ui-theme", "ui-timer", "ui-touch-phone", "ui-travel", "ui-unlock", "ui-user", "ui-user-group", "ui-v-card", "ui-video", "ui-video-chat", "ui-video-message", "ui-video-play", "ui-volume", "ui-weather", "ui-wifi", "ui-zoom-in", "ui-zoom-out"];
    this.multimedia = ["cassette", "cassette-player", "forward", "game", "guiter", "headphone-alt-1", "headphone-alt-2", "headphone-alt-3", "listening", "megaphone", "megaphone-alt", "movie", "mp3-player", "multimedia", "music-disk", "music-note", "pause", "play-alt-1", "play-alt-2", "play-alt-3", "play-pause", "record", "retro-music-disk", "rewind", "song-notes", "sound-wave", "sound-wave-alt", "stop", "video-alt", "video-cam", "volume-bar", "volume-mute", "youtube-play"];
    this.payment = ["amazon", "amazon-alt", "american-express", "american-express-alt", "apple-pay", "apple-pay-alt", "bank-transfer", "bank-transfer-alt", "braintree", "braintree-alt", "cash-on-delivery", "cash-on-delivery-alt", "checkout", "checkout-alt", "diners-club", "diners-club-alt-1", "diners-club-alt-2", "diners-club-alt-3", "discover", "discover-alt", "eway", "eway-alt", "google-wallet", "google-wallet-alt-1", "google-wallet-alt-2", "google-wallet-alt-3", "jcb", "jcb-alt", "maestro", "maestro-alt", "mastercard", "mastercard-alt", "payoneer", "payoneer-alt", "paypal", "paypal-alt", "sage", "sage-alt", "skrill", "skrill-alt", "stripe", "stripe-alt", "visa", "visa-alt", "visa-electron", "western-union", "western-union-alt"];
    this.person = ["boy", "business-man", "business-man-alt-1", "business-man-alt-2", "business-man-alt-3", "funky-man", "girl", "girl-alt", "hotel-boy", "hotel-boy-alt", "man-in-glasses", "user", "user-alt-1", "user-alt-2", "user-alt-3", "user-alt-4", "user-alt-5", "user-alt-6", "user-alt-7", "user-female", "user-male", "user-suited", "users", "users-alt-1", "users-alt-2", "users-alt-3", "users-alt-4", "users-alt-5", "users-alt-6", "users-social", "waiter", "woman-in-glasses"];
    this.search = ["document-search", "folder-search", "home-search", "job-search", "map-search", "restaurant-search", "search", "search-alt-1", "search-alt-2", "stock-search", "user-search"];
    this.social = ["brand-drupal", "social-500px", "social-aim", "social-badoo", "social-baidu-tieba", "social-bbm-messenger", "social-bebo", "social-behance", "social-blogger", "social-bootstrap", "social-brightkite", "social-cloudapp", "social-concrete5", "social-delicious", "social-designbump", "social-designfloat", "social-deviantart", "social-digg", "social-dotcms", "social-dribbble", "social-dribble", "social-dropbox", "social-ebuddy", "social-ello", "social-ember", "social-evernote", "social-facebook", "social-facebook-messenger", "social-feedburner", "social-flikr", "social-folkd", "social-foursquare", "social-friendfeed", "social-ghost", "social-github", "social-gnome", "social-google-buzz", "social-google-hangouts", "social-google-map", "social-google-plus", "social-google-talk", "social-hype-machine", "social-instagram", "social-kakaotalk", "social-kickstarter", "social-kik", "social-kiwibox", "social-line", "social-linkedin", "social-linux-mint", "social-livejournal", "social-magento", "social-meetme", "social-meetup", "social-mixx", "social-newsvine", "social-nimbuss", "social-odnoklassniki", "social-opencart", "social-oscommerce", "social-pandora", "social-photobucket", "social-picasa", "social-pinterest", "social-prestashop", "social-qik", "social-qq", "social-readernaut", "social-reddit", "social-renren", "social-rss", "social-shopify", "social-silverstripe", "social-skype", "social-slack", "social-slashdot", "social-slidshare", "social-smugmug", "social-snapchat", "social-soundcloud", "social-spotify", "social-stack-exchange", "social-stack-overflow", "social-steam", "social-stumbleupon", "social-tagged", "social-technorati", "social-telegram", "social-tinder", "social-trello", "social-tumblr", "social-twitch", "social-twitter", "social-typo3", "social-ubercart", "social-viber", "social-viddler", "social-vimeo", "social-vine", "social-virb", "social-virtuemart", "social-vk", "social-wechat", "social-weibo", "social-whatsapp", "social-xing", "social-yahoo", "social-yelp", "social-youku", "social-youtube", "social-youtube-play", "social-zencart"];
    this.sport = ["badminton-birdie", "baseball", "baseballer", "basketball", "basketball-hoop", "billiard-ball", "boot-alt-1", "boot-alt-2", "bowling", "bowling-alt", "canoe", "cheer-leader", "climbing", "corner", "cyclist", "dumbbell", "dumbbell-alt", "field", "field-alt", "football-alt", "foul", "goal", "goal-keeper", "golf", "golf-alt", "golf-bag", "golf-field", "golfer", "gym", "gym-alt-1", "gym-alt-2", "gym-alt-3", "hand-grippers", "heart-beat-alt", "helmet", "hockey", "hockey-alt", "ice-skate", "jersey", "jersey-alt", "jumping", "kick", "leg", "match-review", "medal-alt", "muscle", "muscle-alt", "offside", "olympic", "olympic-logo", "padding", "penalty-card", "racer", "racing-car", "racing-flag", "racing-flag-alt", "racings-wheel", "referee", "refree-jersey", "result", "rugby", "rugby-ball", "rugby-player", "runner", "runner-alt-1", "runner-alt-2", "score-board", "skiing-man", "skydiving-goggles", "snow-mobile", "steering", "substitute", "swimmer", "table-tennis", "team", "team-alt", "tennis", "tennis-player", "time", "track", "tracking", "trophy", "trophy-alt", "volleyball", "volleyball-alt", "volleyball-fire", "water-bottle", "whisle", "win-trophy"];
    this.texteditor = ["align-center", "align-left", "align-right", "all-caps", "bold", "brush", "clip-board", "code-alt", "color-bucket", "color-picker", "copy-alt", "copy-black", "cut", "delete-alt", "edit-alt", "eraser-alt", "file-alt", "font", "header", "indent", "italic-alt", "justify-all", "justify-center", "justify-left", "justify-right", "line-height", "link-alt", "listine-dots", "listing-box", "listing-number", "marker", "outdent", "paper-clip", "paragraph", "pin", "printer", "redo", "rotation", "save", "small-cap", "strike-through", "sub-listing", "subscript", "superscript", "table", "text-height", "text-width", "trash", "underline", "undo", "unlink"];
    this.transport = ["air-balloon", "airplane", "airplane-alt", "ambulance-crescent", "ambulance-cross", "articulated-truck", "auto-rickshaw", "bicycle-alt-1", "bicycle-alt-2", "bull-dozer", "bus-alt-1", "bus-alt-2", "bus-alt-3", "cable-car", "car-alt-1", "car-alt-2", "car-alt-3", "car-alt-4", "concrete-mixer", "delivery-time", "excavator", "fast-delivery", "fire-truck", "fire-truck-alt", "fork-lift", "free-delivery", "golf-cart", "helicopter", "motor-bike", "motor-bike-alt", "motor-biker", "oil-truck", "police-car", "rickshaw", "rocket-alt-1", "rocket-alt-2", "sail-boat", "scooter", "sea-plane", "ship-alt", "speed-boat", "taxi", "tow-truck", "tractor", "traffic-light", "train-line", "train-steam", "tram", "truck", "truck-alt", "truck-loaded", "van", "van-alt", "yacht"];
    this.travel = ["5-star-hotel", "anchor-alt", "beach-bed", "camping-vest", "coconut-alt", "direction-sign", "hill-side", "island-alt", "long-drive", "map-pins", "plane-ticket", "sail-boat-alt-1", "sail-boat-alt-2", "sandals-female", "sandals-male", "travelling"];
    this.weather = ["breakdown", "celsius", "clouds", "cloudy", "compass-alt", "dust", "eclipse", "fahrenheit", "forest-fire", "full-night", "full-sunny", "hail", "hail-night", "hail-rainy", "hail-rainy-night", "hail-rainy-sunny", "hail-sunny", "hail-thunder", "hail-thunder-night", "hail-thunder-sunny", "hill", "hill-night", "hill-sunny", "hurricane", "island", "meteor", "night", "rainy", "rainy-night", "rainy-sunny", "rainy-thunder", "showy-night-hail", "snow", "snow-temp", "snowy", "snowy-hail", "snowy-night", "snowy-night-rainy", "snowy-rainy", "snowy-sunny", "snowy-sunny-hail", "snowy-sunny-rainy", "snowy-thunder", "snowy-thunder-night", "snowy-thunder-sunny", "snowy-windy", "snowy-windy-night", "snowy-windy-sunny", "sun-alt", "sun-rise", "sun-set", "sunny", "sunny-day-temp", "thermometer", "thinder-light", "tornado", "umbrella-alt", "volcano", "wave", "wind", "wind-scale-0", "wind-scale-1", "wind-scale-10", "wind-scale-11", "wind-scale-12", "wind-scale-2", "wind-scale-3", "wind-scale-4", "wind-scale-5", "wind-scale-6", "wind-scale-7", "wind-scale-8", "wind-scale-9", "wind-waves", "windy", "windy-hail", "windy-night", "windy-raining", "windy-sunny", "windy-thunder", "windy-thunder-raining"];
    this.webapplication = ["addons", "address-book", "adjust", "alarm", "anchor", "archive", "at", "attachment", "audio", "auto-mobile", "automation", "baby", "badge", "bag", "ban", "bank", "bar-code", "bars", "battery-empty", "battery-full", "battery-half", "battery-low", "beach", "beaker", "bear", "beard", "bed", "bell", "beverage", "bicycle", "bill", "bin", "binary", "binoculars", "bird", "birds", "black-board", "bluetooth", "bolt", "bomb", "book", "book-mark", "boot", "box", "brain", "briefcase", "broken", "bucket", "bucket1", "bucket2", "bug", "building", "bullet", "bullhorn", "bullseye", "bus", "butterfly", "cab", "calculator", "calendar", "camera", "camera-alt", "car", "card", "cart", "cc", "certificate", "charging", "chat", "check", "check-alt", "check-circled", "checked", "children-care", "clock-time", "close", "close-circled", "close-line", "close-line-circled", "close-line-squared", "close-line-squared-alt", "close-squared", "close-squared-alt", "cloud", "cloud-download", "cloud-refresh", "cloud-upload", "code", "code-not-allowed", "coffee-cup", "comment", "compass", "computer", "connection", "console", "contacts", "contrast", "copy", "copyright", "credit-card", "crop", "crown", "cube", "cubes", "culinary", "dashboard", "dashboard-web", "data", "database", "database-add", "database-locked", "database-remove", "delete", "diamond", "dice", "disabled", "disc", "diskette", "document-folder", "download", "download-alt", "downloaded", "earth", "ebook", "edit", "eject", "email", "envelope", "envelope-open", "eraser", "error", "exchange", "exclamation", "exclamation-circle", "exclamation-square", "exclamation-tringle", "exit", "expand", "external", "external-link", "eye", "eye-blocked", "eye-dropper", "favourite", "fax", "female", "file", "film", "filter", "fire", "fire-burn", "fire-extinguisher", "first-aid", "flag", "flag-alt-1", "flag-alt-2", "flash", "flash-light", "flask", "focus", "folder", "folder-open", "foot-print", "football", "football-american", "game-console", "game-pad", "gavel", "gear", "gears", "gift", "glass", "globe", "graduate", "graffiti", "grocery", "group", "hammer", "hand", "hanger", "hard-disk", "headphone", "heart", "heart-beat", "history", "home", "horn", "hotel", "hour-glass", "id", "image", "inbox", "infinite", "info", "info-circle", "info-square", "institution", "interface", "invisible", "italic", "jacket", "jar", "jewlery", "karate", "key", "key-hole", "keyboard", "kid", "label", "lamp", "laptop", "layers", "layout", "leaf", "leaflet", "learn", "legal", "lego", "lemon", "lens", "letter", "letterbox", "library", "license", "life-bouy", "life-buoy", "life-jacket", "life-ring", "light-bulb", "lighter", "lightning-ray", "like", "link", "live-support", "location-arrow", "location-pin", "lock", "login", "logout", "lollipop", "look", "loop", "luggage", "lunch", "lungs", "magic", "magic-alt", "magnet", "mail", "mail-box", "male", "map", "math", "maximize", "measure", "medal", "medical", "medicine", "mega-phone", "memorial", "memory-card", "mic", "mic-mute", "micro-chip", "microphone", "microscope", "military", "mill", "minus", "minus-circle", "minus-square", "mobile-phone", "molecule", "money", "moon", "mop", "muffin", "music", "music-alt", "music-notes", "mustache", "mute-volume", "navigation", "navigation-menu", "news", "newspaper", "no-smoking", "not-allowed", "notebook", "notepad", "notification", "numbered", "opposite", "optic", "options", "package", "page", "paint", "paper-plane", "paperclip", "papers", "paw", "pay", "pen", "pencil", "penguin-linux", "pestle", "phone", "phone-circle", "picture", "pie", "pine", "pixels", "play", "plugin", "plus", "plus-circle", "plus-square", "polygonal", "power", "presentation", "price", "print", "puzzle", "qr-code", "queen", "question", "question-circle", "question-square", "quote-left", "quote-right", "radio", "random", "recycle", "refresh", "repair", "reply", "reply-all", "resize", "responsive", "retweet", "road", "robot", "rocket", "royal", "rss-feed", "safety", "sale-discount", "satellite", "send-mail", "server", "settings", "share", "share-alt", "share-boxed", "shield", "ship", "shopping-cart", "sign-in", "sign-out", "signal", "site-map", "smart-phone", "soccer", "sort", "sort-alt", "space", "spanner", "speech-comments", "speed-meter", "spinner", "spinner-alt-1", "spinner-alt-2", "spinner-alt-3", "spinner-alt-4", "spinner-alt-5", "spinner-alt-6", "spreadsheet", "square", "ssl-security", "star", "star-alt-1", "star-alt-2", "street-view", "sun", "support-faq", "tack-pin", "tag", "tags", "tasks", "telephone", "telescope", "terminal", "thumbs-down", "thumbs-up", "tick-boxed", "tick-mark", "ticket", "tie", "toggle-off", "toggle-on", "tools", "transparent", "tree", "umbrella", "unlock", "unlocked", "upload", "upload-alt", "usb", "usb-drive", "vector-path", "verification-check", "video", "video-clapper", "volume-down", "volume-off", "volume-up", "wall", "wall-clock", "wallet", "warning", "warning-alt", "water-drop", "web", "wheelchair", "wifi", "wifi-alt", "world", "zigzag", "zipped"];
  }
  //Display Icon detail
  toggleWithInfo(icon) {
    this.detail = true;
    this.icon = icon;
    this.val = '<i class="icofont icofont-' + icon + '"></i>';
  }
  //Copy an icon code
  copyText(val) {
    let selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = '<i class="icofont icofont-' + val + '"></i>';
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
  static #_ = this.ɵfac = function IcoIconComponent_Factory(t) {
    return new (t || IcoIconComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_1__.ToastrService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: IcoIconComponent,
    selectors: [["app-ico-icon"]],
    decls: 237,
    vars: 30,
    consts: [[1, "container-fluid"], [1, "row"], [1, "col-sm-12"], [1, "card"], [1, "card-header"], [1, "m-b-0"], [1, "card-body"], [1, "row", "icon-lists"], ["class", "col-sm-6 col-md-6 col-lg-4", 3, "click", 4, "ngFor", "ngForOf"], ["class", "icon-hover-bottom p-fixed", 4, "ngIf"], [1, "col-sm-6", "col-md-6", "col-lg-4", 3, "click"], [1, "icon-hover-bottom", "p-fixed"], [1, "icon-popup"], [1, "close-icon"], [1, "icofont", "icofont-close", 3, "click"], [1, "icon-first"], [1, "icon-class"], [1, "icon-title"], ["id", "fclass1"], [1, "icon-last", "icon-last"], [1, "form-inline"], [1, "form-group"], ["type", "text", "readonly", "readonly", 1, "inp-val", "form-control", "m-r-10", 3, "value"], [1, "btn", "btn-primary", "notification", 3, "click"]],
    template: function IcoIconComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Abstract");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "New");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6)(10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, IcoIconComponent_div_11_Template, 3, 4, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 2)(13, "div", 3)(14, "div", 4)(15, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Animal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 6)(18, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, IcoIconComponent_div_19_Template, 3, 4, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 2)(21, "div", 3)(22, "div", 4)(23, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Brand");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 6)(26, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, IcoIconComponent_div_27_Template, 3, 4, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 2)(29, "div", 3)(30, "div", 4)(31, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Business");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 6)(34, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, IcoIconComponent_div_35_Template, 3, 4, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 2)(37, "div", 3)(38, "div", 4)(39, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Chart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 6)(42, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, IcoIconComponent_div_43_Template, 3, 4, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 2)(45, "div", 3)(46, "div", 4)(47, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Construction");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 6)(50, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, IcoIconComponent_div_51_Template, 3, 4, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 2)(53, "div", 3)(54, "div", 4)(55, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 6)(58, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](59, IcoIconComponent_div_59_Template, 3, 4, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 2)(61, "div", 3)(62, "div", 4)(63, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Device");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 6)(66, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](67, IcoIconComponent_div_67_Template, 3, 4, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 2)(69, "div", 3)(70, "div", 4)(71, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Directional");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 6)(74, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](75, IcoIconComponent_div_75_Template, 3, 4, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 2)(77, "div", 3)(78, "div", 4)(79, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Education");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 6)(82, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](83, IcoIconComponent_div_83_Template, 3, 4, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 2)(85, "div", 3)(86, "div", 4)(87, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Emoticon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 6)(90, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](91, IcoIconComponent_div_91_Template, 3, 4, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 2)(93, "div", 3)(94, "div", 4)(95, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "File Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 6)(98, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](99, IcoIconComponent_div_99_Template, 3, 4, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 2)(101, "div", 3)(102, "div", 4)(103, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "FOOD ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 6)(106, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](107, IcoIconComponent_div_107_Template, 3, 4, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 2)(109, "div", 3)(110, "div", 4)(111, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "Kids & Toys");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 6)(114, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](115, IcoIconComponent_div_115_Template, 3, 4, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 2)(117, "div", 3)(118, "div", 4)(119, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "Law");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 6)(122, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](123, IcoIconComponent_div_123_Template, 3, 4, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 2)(125, "div", 3)(126, "div", 4)(127, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "Mathematical");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div", 6)(130, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](131, IcoIconComponent_div_131_Template, 3, 4, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 2)(133, "div", 3)(134, "div", 4)(135, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "Medical");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "div", 6)(138, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](139, IcoIconComponent_div_139_Template, 3, 4, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "div", 2)(141, "div", 3)(142, "div", 4)(143, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "Mobile UI");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "div", 6)(146, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](147, IcoIconComponent_div_147_Template, 3, 4, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "div", 2)(149, "div", 3)(150, "div", 4)(151, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "Multimedia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "div", 6)(154, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](155, IcoIconComponent_div_155_Template, 3, 4, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "div", 2)(157, "div", 3)(158, "div", 4)(159, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, "Payment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "div", 6)(162, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](163, IcoIconComponent_div_163_Template, 3, 4, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "div", 2)(165, "div", 3)(166, "div", 4)(167, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, "Person");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "div", 6)(170, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](171, IcoIconComponent_div_171_Template, 3, 4, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "div", 2)(173, "div", 3)(174, "div", 4)(175, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "div", 6)(178, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](179, IcoIconComponent_div_179_Template, 3, 4, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "div", 2)(181, "div", 3)(182, "div", 4)(183, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](184, "Social");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "div", 6)(186, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](187, IcoIconComponent_div_187_Template, 3, 4, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "div", 2)(189, "div", 3)(190, "div", 4)(191, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](192, "Sport");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "div", 6)(194, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](195, IcoIconComponent_div_195_Template, 3, 4, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "div", 2)(197, "div", 3)(198, "div", 4)(199, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](200, "Text Editor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "div", 6)(202, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](203, IcoIconComponent_div_203_Template, 3, 4, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "div", 2)(205, "div", 3)(206, "div", 4)(207, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](208, "Transport");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "div", 6)(210, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](211, IcoIconComponent_div_211_Template, 3, 4, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "div", 2)(213, "div", 3)(214, "div", 4)(215, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](216, "Travel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "div", 6)(218, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](219, IcoIconComponent_div_219_Template, 3, 4, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "div", 2)(221, "div", 3)(222, "div", 4)(223, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](224, "Weather");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "div", 6)(226, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](227, IcoIconComponent_div_227_Template, 3, 4, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "div", 2)(229, "div", 3)(230, "div", 4)(231, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](232, "Web Application");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "div", 6)(234, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](235, IcoIconComponent_div_235_Template, 3, 4, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](236, IcoIconComponent_div_236_Template, 20, 4, "div", 9);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.abstract);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.animal);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.brand);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.business);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.chart);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.construction);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.currency);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.device);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.directional);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.eduction);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.emotion);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.file);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.food);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.kids);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.law);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.mathematical);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.medical);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.mobileui);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.multimedia);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.payment);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.person);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.search);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.social);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.sport);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.texteditor);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.transport);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.travel);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.weather);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.webapplication);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.detail);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 12477:
/*!**********************************************************!*\
  !*** ./src/app/components/icons/icons-routing.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IconsRoutingModule: () => (/* binding */ IconsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _flag_icon_flag_icon_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./flag-icon/flag-icon.component */ 26674);
/* harmony import */ var _font_awesome_icon_font_awesome_icon_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./font-awesome-icon/font-awesome-icon.component */ 34913);
/* harmony import */ var _ico_icon_ico_icon_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ico-icon/ico-icon.component */ 67837);
/* harmony import */ var _themify_icon_themify_icon_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./themify-icon/themify-icon.component */ 95151);
/* harmony import */ var _feather_icon_feather_icon_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./feather-icon/feather-icon.component */ 78738);
/* harmony import */ var _weather_icon_weather_icon_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./weather-icon/weather-icon.component */ 74892);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 61699);









const routes = [{
  path: '',
  children: [{
    path: 'flag',
    component: _flag_icon_flag_icon_component__WEBPACK_IMPORTED_MODULE_0__.FlagIconComponent,
    data: {
      title: "Flag",
      breadcrumb: "Flag"
    }
  }, {
    path: 'fontawesome',
    component: _font_awesome_icon_font_awesome_icon_component__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIconComponent,
    data: {
      title: "FontAwesome",
      breadcrumb: "FontAwesome"
    }
  }, {
    path: 'ico',
    component: _ico_icon_ico_icon_component__WEBPACK_IMPORTED_MODULE_2__.IcoIconComponent,
    data: {
      title: "Ico",
      breadcrumb: "Ico"
    }
  }, {
    path: 'themify',
    component: _themify_icon_themify_icon_component__WEBPACK_IMPORTED_MODULE_3__.ThemifyIconComponent,
    data: {
      title: "Themify",
      breadcrumb: "Themify"
    }
  }, {
    path: 'feather',
    component: _feather_icon_feather_icon_component__WEBPACK_IMPORTED_MODULE_4__.FeatherIconComponent,
    data: {
      title: "Feather",
      breadcrumb: "Feather"
    }
  }, {
    path: 'whether',
    component: _weather_icon_weather_icon_component__WEBPACK_IMPORTED_MODULE_5__.WeatherIconComponent,
    data: {
      title: "Whether",
      breadcrumb: "Whether"
    }
  }]
}];
class IconsRoutingModule {
  static #_ = this.ɵfac = function IconsRoutingModule_Factory(t) {
    return new (t || IconsRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
    type: IconsRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](IconsRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule]
  });
})();

/***/ }),

/***/ 23344:
/*!**************************************************!*\
  !*** ./src/app/components/icons/icons.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IconsModule: () => (/* binding */ IconsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 76101);
/* harmony import */ var _icons_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icons-routing.module */ 12477);
/* harmony import */ var _flag_icon_flag_icon_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./flag-icon/flag-icon.component */ 26674);
/* harmony import */ var _font_awesome_icon_font_awesome_icon_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./font-awesome-icon/font-awesome-icon.component */ 34913);
/* harmony import */ var _ico_icon_ico_icon_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ico-icon/ico-icon.component */ 67837);
/* harmony import */ var _themify_icon_themify_icon_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./themify-icon/themify-icon.component */ 95151);
/* harmony import */ var _feather_icon_feather_icon_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./feather-icon/feather-icon.component */ 78738);
/* harmony import */ var _weather_icon_weather_icon_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./weather-icon/weather-icon.component */ 74892);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/shared.module */ 56208);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 61699);











class IconsModule {
  static #_ = this.ɵfac = function IconsModule_Factory(t) {
    return new (t || IconsModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
    type: IconsModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _icons_routing_module__WEBPACK_IMPORTED_MODULE_0__.IconsRoutingModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__.SharedModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](IconsModule, {
    declarations: [_flag_icon_flag_icon_component__WEBPACK_IMPORTED_MODULE_1__.FlagIconComponent, _font_awesome_icon_font_awesome_icon_component__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIconComponent, _ico_icon_ico_icon_component__WEBPACK_IMPORTED_MODULE_3__.IcoIconComponent, _themify_icon_themify_icon_component__WEBPACK_IMPORTED_MODULE_4__.ThemifyIconComponent, _feather_icon_feather_icon_component__WEBPACK_IMPORTED_MODULE_5__.FeatherIconComponent, _weather_icon_weather_icon_component__WEBPACK_IMPORTED_MODULE_6__.WeatherIconComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _icons_routing_module__WEBPACK_IMPORTED_MODULE_0__.IconsRoutingModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__.SharedModule]
  });
})();

/***/ }),

/***/ 95151:
/*!*************************************************************************!*\
  !*** ./src/app/components/icons/themify-icon/themify-icon.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ThemifyIconComponent: () => (/* binding */ ThemifyIconComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-toastr */ 57548);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 26575);



function ThemifyIconComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ThemifyIconComponent_div_9_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);
      const icon_r6 = restoredCtx.$implicit;
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r7.toggleWithInfo(icon_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const icon_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](icon_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](icon_r6);
  }
}
function ThemifyIconComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ThemifyIconComponent_div_17_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);
      const icon_r9 = restoredCtx.$implicit;
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r10.toggleWithInfo(icon_r9));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const icon_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](icon_r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", icon_r9, "");
  }
}
function ThemifyIconComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ThemifyIconComponent_div_25_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);
      const icon_r12 = restoredCtx.$implicit;
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r13.toggleWithInfo(icon_r12));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const icon_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](icon_r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", icon_r12, "");
  }
}
function ThemifyIconComponent_div_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ThemifyIconComponent_div_33_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);
      const icon_r15 = restoredCtx.$implicit;
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r16.toggleWithInfo(icon_r15));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const icon_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](icon_r15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", icon_r15, "");
  }
}
function ThemifyIconComponent_div_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ThemifyIconComponent_div_41_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);
      const icon_r18 = restoredCtx.$implicit;
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r19.toggleWithInfo(icon_r18));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const icon_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](icon_r18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", icon_r18, "");
  }
}
function ThemifyIconComponent_div_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11)(1, "div", 0)(2, "div", 1)(3, "div", 12)(4, "div", 13)(5, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ThemifyIconComponent_div_42_Template_i_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r21.detail = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 16)(9, "label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Class");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 19)(13, "label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Markup ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 20)(16, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ThemifyIconComponent_div_42_Template_button_click_18_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r23.copyText(ctx_r23.icon));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Copy text");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("", ctx_r5.icon, " fa-2x");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx_r5.val);
  }
}
class ThemifyIconComponent {
  constructor(toastrService) {
    this.toastrService = toastrService;
    this.detail = false;
    this.directional = ["icon-arrow-up", "icon-arrow-right", "icon-arrow-left", "icon-arrow-down", "icon-arrows-vertical", "icon-arrows-horizontal", "icon-angle-up", "icon-angle-right", "icon-angle-left", "icon-angle-down", "icon-angle-double-up", "icon-angle-double-right", "icon-angle-double-left", "icon-angle-double-down", "icon-move", "icon-fullscreen", "icon-arrow-top-right", "icon-arrow-top-left", "icon-arrow-circle-up", "icon-arrow-circle-right", "icon-arrow-circle-left", "icon-arrow-circle-down", "icon-arrows-corner", "icon-split-v", "icon-split-v-alt", "icon-split-h", "icon-hand-point-up", "icon-hand-point-right", "icon-hand-point-left", "icon-hand-point-down", "icon-back-right", "icon-back-left", "icon-exchange-vertical"];
    this.webapp = ["icon-wand", "icon-save", "icon-save-alt", "icon-direction", "icon-direction-alt", "icon-user", "icon-link", "icon-unlink", "icon-trash", "icon-target", "icon-tag", "icon-desktop", "icon-tablet", "icon-mobile", "icon-email", "icon-star", "icon-spray", "icon-signal", "icon-shopping-cart", "icon-shopping-cart-full", "icon-settings", "icon-search", "icon-zoom-in", "icon-zoom-out", "icon-cut", "icon-ruler", "icon-ruler-alt-2", "icon-ruler-pencil", "icon-ruler-alt", "icon-bookmark", "icon-bookmark-alt", "icon-reload", "icon-plus", "icon-minus", "icon-close", "icon-pin", "icon-pencil", "icon-pencil-alt", "icon-paint-roller", "icon-paint-bucket", "icon-na", "icon-medall", "icon-medall-alt", "icon-marker", "icon-marker-alt", "icon-lock", "icon-unlock", "icon-location-arrow", "icon-layout", "icon-layers", "icon-layers-alt", "icon-key", "icon-image", "icon-heart", "icon-heart-broken", "icon-hand-stop", "icon-hand-open", "icon-hand-drag", "icon-flag", "icon-flag-alt", "icon-flag-alt-2", "icon-eye", "icon-import", "icon-export", "icon-cup", "icon-crown", "icon-comments", "icon-comment", "icon-comment-alt", "icon-thought", "icon-clip", "icon-check", "icon-check-box", "icon-camera", "icon-announcement", "icon-brush", "icon-brush-alt", "icon-palette", "icon-briefcase", "icon-bolt", "icon-bolt-alt", "icon-blackboard", "icon-bag", "icon-world", "icon-wheelchair", "icon-car", "icon-truck", "icon-timer", "icon-ticket", "icon-thumb-up", "icon-thumb-down", "icon-stats-up", "icon-stats-down", "icon-shine", "icon-shift-right", "icon-shift-left", "icon-shift-right-alt", "icon-shift-left-alt", "icon-shield", "icon-notepad", "icon-server", "icon-pulse", "icon-printer", "icon-power-off", "icon-plug", "icon-pie-chart", "icon-panel", "icon-package", "icon-music", "icon-music-alt", "icon-mouse", "icon-mouse-alt", "icon-money", "icon-microphone", "icon-menu", "icon-menu-alt", "icon-map", "icon-map-alt", "icon-location-pin", "icon-light-bulb", "icon-info", "icon-infinite", "icon-id-badge", "icon-hummer", "icon-home", "icon-help", "icon-headphone", "icon-harddrives", "icon-harddrive", "icon-gift", "icon-game", "icon-filter", "icon-files", "icon-file", "icon-zip", "icon-folder", "icon-envelope", "icon-dashboard", "icon-cloud", "icon-cloud-up", "icon-cloud-down", "icon-clipboard", "icon-calendar", "icon-book", "icon-bell", "icon-basketball", "icon-bar-chart", "icon-bar-chart-alt", "icon-archive", "icon-anchor", "icon-alert", "icon-alarm-clock", "icon-agenda", "icon-write", "icon-wallet", "icon-video-clapper", "icon-video-camera", "icon-vector", "icon-support", "icon-stamp", "icon-slice", "icon-shortcode", "icon-receipt", "icon-pin2", "icon-pin-alt", "icon-pencil-alt2", "icon-eraser", "icon-more", "icon-more-alt", "icon-microphone-alt", "icon-magnet", "icon-line-double", "icon-line-dotted", "icon-line-dashed", "icon-ink-pen", "icon-info-alt", "icon-help-alt", "icon-headphone-alt", "icon-gallery", "icon-face-smile", "icon-face-sad", "icon-credit-card", "icon-comments-smiley", "icon-time", "icon-share", "icon-share-alt", "icon-rocket", "icon-new-window", "icon-rss", "icon-rss-alt"];
    this.control = ["icon-control-stop", "icon-control-shuffle", "icon-control-play", "icon-control-pause", "icon-control-forward", "icon-control-backward", "icon-volume", "icon-control-skip-forward", "icon-control-skip-backward", "icon-control-record", "icon-control-eject"];
    this.texteditor = ["icon-paragraph", "icon-uppercase", "icon-underline", "icon-text", "icon-Italic", "icon-smallcap", "icon-list", "icon-list-ol", "icon-align-right", "icon-align-left", "icon-align-justify", "icon-align-center", "icon-quote-right", "icon-quote-left"];
    this.brand = ["icon-flickr", "icon-flickr-alt", "icon-instagram", "icon-google", "icon-github", "icon-facebook", "icon-dropbox", "icon-dropbox-alt", "icon-dribbble", "icon-apple", "icon-android", "icon-yahoo", "icon-trello", "icon-stack-overflow", "icon-soundcloud", "icon-sharethis", "icon-sharethis-alt", "icon-reddit", "icon-microsoft", "icon-microsoft-alt", "icon-linux", "icon-jsfiddle", "icon-joomla", "icon-html5", "icon-css3", "icon-drupal", "icon-wordpress", "icon-tumblr", "icon-tumblr-alt", "icon-skype", "icon-youtube", "icon-vimeo", "icon-vimeo-alt", "icon-twitter", "icon-twitter-alt", "icon-linkedin", "icon-pinterest", "icon-pinterest-alt", "icon-themify-logo", "icon-themify-favicon", "icon-themify-favicon-alt"];
  }
  //Display Icon detail
  toggleWithInfo(icon) {
    this.detail = true;
    this.icon = icon;
    this.val = '<i class="' + icon + '"></i>';
  }
  //Copy an icon code
  copyText(val) {
    let selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = '<i class="' + val + '"></i>';
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
  static #_ = this.ɵfac = function ThemifyIconComponent_Factory(t) {
    return new (t || ThemifyIconComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_1__.ToastrService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ThemifyIconComponent,
    selectors: [["app-themify-icon"]],
    decls: 43,
    vars: 6,
    consts: [[1, "container-fluid"], [1, "row"], [1, "col-sm-12"], [1, "card"], [1, "card-header"], [1, "m-b-0"], [1, "card-body"], [1, "row", "icon-lists"], ["class", "col-sm-6 col-md-6 col-lg-4", 3, "click", 4, "ngFor", "ngForOf"], ["class", "icon-hover-bottom p-fixed", 4, "ngIf"], [1, "col-sm-6", "col-md-6", "col-lg-4", 3, "click"], [1, "icon-hover-bottom", "p-fixed"], [1, "icon-popup"], [1, "close-icon"], [1, "icofont", "icofont-close", 3, "click"], [1, "icon-first"], [1, "icon-class"], [1, "icon-title"], ["id", "fclass1"], [1, "icon-last", "icon-last"], [1, "form-inline"], [1, "form-group"], ["type", "text", "readonly", "readonly", 1, "inp-val", "form-control", "m-r-10", 3, "value"], [1, "btn", "btn-primary", "notification", 3, "click"]],
    template: function ThemifyIconComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Arrows & Direction Icons");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6)(8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ThemifyIconComponent_div_9_Template, 3, 4, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 2)(11, "div", 3)(12, "div", 4)(13, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Web App Icons");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6)(16, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ThemifyIconComponent_div_17_Template, 3, 4, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 2)(19, "div", 3)(20, "div", 4)(21, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Control Icons");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 6)(24, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, ThemifyIconComponent_div_25_Template, 3, 4, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 2)(27, "div", 3)(28, "div", 4)(29, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Text Editor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 6)(32, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, ThemifyIconComponent_div_33_Template, 3, 4, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 2)(35, "div", 3)(36, "div", 4)(37, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Brand Icons");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 6)(40, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, ThemifyIconComponent_div_41_Template, 3, 4, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, ThemifyIconComponent_div_42_Template, 20, 4, "div", 9);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.directional);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.webapp);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.control);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.texteditor);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.brand);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.detail);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 74892:
/*!*************************************************************************!*\
  !*** ./src/app/components/icons/weather-icon/weather-icon.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WeatherIconComponent: () => (/* binding */ WeatherIconComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);

class WeatherIconComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function WeatherIconComponent_Factory(t) {
    return new (t || WeatherIconComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: WeatherIconComponent,
    selectors: [["app-weather-icon"]],
    decls: 1385,
    vars: 0,
    consts: [[1, "container-fluid"], [1, "row"], [1, "col-sm-12"], [1, "card"], [1, "card-header"], [1, "m-b-0"], [1, "card-body"], [1, "row", "icon-lists", "whether-icon"], [1, "col-lg-2", "col-3"], ["id", "sun", "version", "1.1", "viewBox", "15 15 70 70", 1, "climacon", "climacon_sun"], ["id", "sunFillClip"], ["d", "M0,0v100h100V0H0z M50.001,57.999c-4.417,0-8-3.582-8-7.999c0-4.418,3.582-7.999,8-7.999s7.998,3.581,7.998,7.999C57.999,54.417,54.418,57.999,50.001,57.999z"], [1, "climacon_iconWrap", "climacon_iconWrap-sun"], [1, "climacon_componentWrap", "climacon_componentWrap-sun"], [1, "climacon_componentWrap", "climacon_componentWrap-sunSpoke"], ["d", "M72.03,51.999h-3.998c-1.105,0-2-0.896-2-1.999s0.895-2,2-2h3.998c1.104,0,2,0.896,2,2S73.136,51.999,72.03,51.999z", 1, "climacon_component", "climacon_component-stroke", "climacon_component-stroke_sunSpoke", "climacon_component-stroke_sunSpoke-east"], ["d", "M64.175,38.688c-0.781,0.781-2.049,0.781-2.828,0c-0.781-0.781-0.781-2.047,0-2.828l2.828-2.828c0.779-0.781,2.047-0.781,2.828,0c0.779,0.781,0.779,2.047,0,2.828L64.175,38.688z", 1, "climacon_component", "climacon_component-stroke", "climacon_component-stroke_sunSpoke", "climacon_component-stroke_sunSpoke-northEast"], ["d", "M50.034,34.002c-1.105,0-2-0.896-2-2v-3.999c0-1.104,0.895-2,2-2c1.104,0,2,0.896,2,2v3.999C52.034,33.106,51.136,34.002,50.034,34.002z", 1, "climacon_component", "climacon_component-stroke", "climacon_component-stroke_sunSpoke", "climacon_component-stroke_sunSpoke-north"], ["d", "M35.893,38.688l-2.827-2.828c-0.781-0.781-0.781-2.047,0-2.828c0.78-0.781,2.047-0.781,2.827,0l2.827,2.828c0.781,0.781,0.781,2.047,0,2.828C37.94,39.469,36.674,39.469,35.893,38.688z", 1, "climacon_component", "climacon_component-stroke", "climacon_component-stroke_sunSpoke", "climacon_component-stroke_sunSpoke-northWest"], ["d", "M34.034,50c0,1.104-0.896,1.999-2,1.999h-4c-1.104,0-1.998-0.896-1.998-1.999s0.896-2,1.998-2h4C33.14,48,34.034,48.896,34.034,50z", 1, "climacon_component", "climacon_component-stroke", "climacon_component-stroke_sunSpoke", "climacon_component-stroke_sunSpoke-west"], ["d", "M35.893,61.312c0.781-0.78,2.048-0.78,2.827,0c0.781,0.78,0.781,2.047,0,2.828l-2.827,2.827c-0.78,0.781-2.047,0.781-2.827,0c-0.781-0.78-0.781-2.047,0-2.827L35.893,61.312z", 1, "climacon_component", "climacon_component-stroke", "climacon_component-stroke_sunSpoke", "climacon_component-stroke_sunSpoke-southWest"], ["d", "M50.034,65.998c1.104,0,2,0.895,2,1.999v4c0,1.104-0.896,2-2,2c-1.105,0-2-0.896-2-2v-4C48.034,66.893,48.929,65.998,50.034,65.998z", 1, "climacon_component", "climacon_component-stroke", "climacon_component-stroke_sunSpoke", "climacon_component-stroke_sunSpoke-south"], ["d", "M64.175,61.312l2.828,2.828c0.779,0.78,0.779,2.047,0,2.827c-0.781,0.781-2.049,0.781-2.828,0l-2.828-2.827c-0.781-0.781-0.781-2.048,0-2.828C62.126,60.531,63.392,60.531,64.175,61.312z", 1, "climacon_component", "climacon_component-stroke", "climacon_component-stroke_sunSpoke", "climacon_component-stroke_sunSpoke-southEast"], ["clip-path", "url(#sunFillClip)", 1, "climacon_componentWrap", "climacon_componentWrap_sunBody"], ["cx", "50.034", "cy", "50", "r", "11.999", 1, "climacon_component", "climacon_component-stroke", "climacon_component-stroke_sunBody"], ["id", "sunFill", "version", "1.1", "viewBox", "15 15 70 70", 1, "climacon", "climacon_sunFill"], [1, "climacon_iconWrap", "climacon_iconWrap-sunFill"], [1, "climacon_componentWrap", "climacon_componentWrap_sunBody"], ["fill", "#FFFFFF", "cx", "50.034", "cy", "50", "r", "7.999", 1, "climacon_component", "climacon_component-fill", "climacon_component-fill_sunBody"], ["id", "moon", "version", "1.1", "viewBox", "15 15 70 70", 1, "climacon", "climacon_moon"], ["id", "moonFillClip"], ["d", "M15,15v70h70V15H15z M50,57.999c-4.418,0-7.999-3.582-7.999-7.999c0-3.803,2.655-6.979,6.211-7.792c0.903,4.854,4.726,8.676,9.579,9.58C56.979,55.344,53.802,57.999,50,57.999z"], [1, "climacon_iconWrap", "climacon_iconWrap-moon"], ["clip-path", "url(#moonFillClip)", 1, "climacon_componentWrap", "climacon_componentWrap-moon"], ["d", "M50,61.998c-6.627,0-11.999-5.372-11.999-11.998c0-6.627,5.372-11.999,11.999-11.999c0.755,0,1.491,0.078,2.207,0.212c-0.132,0.576-0.208,1.173-0.208,1.788c0,4.418,3.582,7.999,8,7.999c0.614,0,1.212-0.076,1.788-0.208c0.133,0.717,0.211,1.452,0.211,2.208C61.998,56.626,56.626,61.998,50,61.998z", 1, "climacon_component", "climacon_component-stroke", "climacon_component-stroke_moon"], ["id", "moonfill", "version", "1.1", "viewBox", "15 15 70 70", 1, "climacon", "climacon_moonFill"], [1, "climacon_iconWrap", "climacon_iconWrap-moonFill"], [1, "climacon_componentWrap", "climacon_componentWrap-moon"], ["fill", "#FFFFFF", "d", "M48.212,42.208c-3.556,0.813-6.211,3.989-6.211,7.792c0,4.417,3.581,7.999,7.999,7.999c3.802,0,6.979-2.655,7.791-6.211C52.938,50.884,49.115,47.062,48.212,42.208z", 1, "climacon_component", "climacon_component-fill", "climacon_component-fill_moon"], ["id", "sunsetAlt", "version", "1.1", "viewBox", "15 15 70 70", 1, "climacon", "climacon_snowflake"], ["id", "snowflakeFillClip"], ["d", "M15,15v70h70V15H15z M50,54c-2.209,0-4-1.791-4-4c0-2.208,1.791-3.999,4-3.999s3.999,1.791,3.999,3.999C53.999,52.209,52.209,54,50,54z"], [1, "climacon_iconWrap", "climacon_iconWrap-snowflake"], ["clip-path", "url(#snowflakeFillClip)", 1, "climacon_componentWrap", "climacon_componentWrap-snowflake"], ["d", "M59.659,46.733l-1.958,1.13c0.188,0.682,0.298,1.396,0.298,2.137c0,0.742-0.108,1.456-0.298,2.139l1.958,1.129c0.956,0.553,1.284,1.775,0.731,2.732c-0.553,0.956-1.774,1.284-2.731,0.73l-1.954-1.127c-1.003,1.02-2.277,1.766-3.705,2.133v2.263c0,1.104-0.896,2-2,2c-1.104,0-2-0.896-2-2v-2.263c-1.428-0.367-2.703-1.113-3.705-2.133l-1.954,1.127c-0.957,0.554-2.18,0.226-2.731-0.73c-0.553-0.957-0.225-2.18,0.731-2.732l1.958-1.129c-0.189-0.683-0.298-1.396-0.298-2.139c0-0.741,0.108-1.455,0.298-2.137l-1.958-1.13c-0.956-0.553-1.284-1.775-0.731-2.732c0.552-0.956,1.774-1.284,2.731-0.731l1.954,1.128c1.002-1.02,2.277-1.766,3.705-2.134v-2.262c0-1.104,0.896-2,2-2c1.104,0,2,0.896,2,2v2.262c1.428,0.368,2.702,1.114,3.705,2.134l1.954-1.128c0.957-0.553,2.18-0.225,2.731,0.731C60.943,44.958,60.615,46.181,59.659,46.733z", 1, "climacon_component", "climacon_component-stroke", "climacon_component-stroke_snowflake"], ["id", "snowflakeFill", "version", "1.1", "viewBox", "15 15 70 70", 1, "climacon", "climacon_snowflakeFill"], [1, "climacon_iconWrap", "climacon_iconWrap-snowflakeFill"], [1, "climacon_componentWrap", "climacon_componentWrap-snowflake"], ["fill", "#FFFFFF", "cx", "50", "cy", "50", "r", "4", 1, "climacon_component", "climacon_component-fill", "climacon_component-fill_snowflake"], ["id", "wind", "version", "1.1", "viewBox", "15 15 70 70", 1, "climacon", "climacon_wind"], [1, "climacon_iconWrap", "climacon_iconWrap-wind"], [1, "climacon_wrapperComponent", "climacon_componentWrap-wind"], ["d", "M65.999,52L65.999,52h-3c-1.104,0-2-0.895-2-1.999c0-1.104,0.896-2,2-2h3c1.104,0,2-0.896,2-1.999c0-1.105-0.896-2-2-2s-2-0.896-2-2s0.896-2,2-2c0.138,0,0.271,0.014,0.401,0.041c3.121,0.211,5.597,2.783,5.597,5.959C71.997,49.314,69.312,52,65.999,52z", 1, "climacon_component", "climacon_component-stroke", "climacon_component-wind", "climacon_component-wind_curl"], ["d", "M55.999,48.001h-2h-6.998H34.002c-1.104,0-1.999,0.896-1.999,2c0,1.104,0.895,1.999,1.999,1.999h2h3.999h3h4h3h3.998h2c3.313,0,6,2.688,6,6c0,3.176-2.476,5.748-5.597,5.959C56.271,63.986,56.139,64,55.999,64c-1.104,0-2-0.896-2-2c0-1.105,0.896-2,2-2s2-0.896,2-2s-0.896-2-2-2h-2h-3.998h-3h-4h-3h-3.999h-2c-3.313,0-5.999-2.686-5.999-5.999c0-3.175,2.475-5.747,5.596-5.959c0.131-0.026,0.266-0.04,0.403-0.04l0,0h12.999h6.998h2c1.104,0,2-0.896,2-2s-0.896-2-2-2s-2-0.895-2-2c0-1.104,0.896-2,2-2c0.14,0,0.272,0.015,0.403,0.041c3.121,0.211,5.597,2.783,5.597,5.959C61.999,45.314,59.312,48.001,55.999,48.001z", 1, "climacon_component", "climacon_component-stroke", "climacon_component-wind"], ["id", "tornado", "version", "1.1", "viewBox", "15 15 70 70", 1, "climacon", "climacon_tornado"], [1, "climacon_iconWrap", "climacon_iconWrap-tornado"], [1, "climacon_componentWrap", "climacon_componentWrap-tornado"], ["d", "M68.997,36.459H31.002c-1.104,0-2-0.896-2-1.999c0-1.104,0.896-2,2-2h37.995c1.104,0,2,0.896,2,2C70.997,35.563,70.102,36.459,68.997,36.459z", 1, "climacon_component", "climacon_component-stroke", "climacon_component-stroke_tornadoLine"], ["d", "M35.002,40.459h29.996c1.104,0,2,0.896,2,2s-0.896,1.999-2,1.999H35.002c-1.104,0-2-0.896-2-1.999C33.002,41.354,33.898,40.459,35.002,40.459z", 1, "climacon_component", "climacon_component-stroke", "climacon_component-stroke_tornadoLine"], ["d", "M39.001,48.458h21.998c1.104,0,1.999,0.896,1.999,1.999c0,1.104-0.896,2-1.999,2H39.001c-1.104,0-1.999-0.896-1.999-2C37.002,49.354,37.897,48.458,39.001,48.458z", 1, "climacon_component", "climacon_component-stroke", "climacon_component-stroke_tornadoLine"], ["d", "M47,64.456h5.999c1.104,0,2,0.896,2,1.999s-0.896,2-2,2H47c-1.104,0-2-0.896-2-2S45.896,64.456,47,64.456z", 1, "climacon_component", "climacon_component-stroke", "climacon_component-stroke_tornadoLine"], ["d", "M40.869,58.456c0-1.104,0.896-1.999,2-1.999h13.998c1.104,0,2,0.896,2,1.999c0,1.104-0.896,2-2,2H42.869C41.765,60.456,40.869,59.561,40.869,58.456z", 1, "climacon_component", "climacon_component-stroke", "climacon_component-stroke_tornadoLine"], ["id", "cloud", "version", "1.1", "viewBox", "15 15 70 70", 1, "climacon", "climacon_cloud"], ["id", "cloudFillClip"], ["d", "M15,15v70h70V15H15z M59.943,61.639c-3.02,0-12.381,0-15.999,0c-6.626,0-11.998-5.371-11.998-11.998c0-6.627,5.372-11.999,11.998-11.999c5.691,0,10.434,3.974,11.665,9.29c1.252-0.81,2.733-1.291,4.334-1.291c4.418,0,8,3.582,8,8C67.943,58.057,64.361,61.639,59.943,61.639z"], [1, "climacon_iconWrap", "climacon_iconWrap-cloud"], ["clip-path", "url(#cloudFillClip)", 1, "climacon_componentWrap", "climacon_componentWrap_cloud"], ["d", "M43.945,65.639c-8.835,0-15.998-7.162-15.998-15.998c0-8.836,7.163-15.998,15.998-15.998c6.004,0,11.229,3.312,13.965,8.203c0.664-0.113,1.338-0.205,2.033-0.205c6.627,0,11.998,5.373,11.998,12c0,6.625-5.371,11.998-11.998,11.998C57.168,65.639,47.143,65.639,43.945,65.639z", 1, "climacon_component", "climacon_component-stroke", "climacon_component-stroke_cloud"], ["id", "cloudFill", "version", "1.1", "viewBox", "15 15 70 70", 1, "climacon", "climacon_cloudFill"], [1, "climacon_componentWrap", "climacon_componentWrap_cloud"], ["fill", "#FFFFFF", "d", "M59.943,61.639c4.418,0,8-3.582,8-7.998c0-4.417-3.582-8-8-8c-1.601,0-3.082,0.481-4.334,1.291c-1.23-5.316-5.973-9.29-11.665-9.29c-6.626,0-11.998,5.372-11.998,11.999c0,6.626,5.372,11.998,11.998,11.998C47.562,61.639,56.924,61.639,59.943,61.639z", 1, "climacon_component", "climacon_component-fill", "climacon_component-fill_cloud"], ["id", "cloudSun", "version", "1.1", "viewBox", "15 15 70 70", 1, "climacon", "climacon_cloudSun"], ["id", "cloudFillClipfill"], ["id", "sunCloudFillClip"], ["d", "M15,15v70h70V15H15z M57.945,49.641c-4.417,0-8-3.582-8-7.999c0-4.418,3.582-7.999,8-7.999s7.998,3.581,7.998,7.999C65.943,46.059,62.362,49.641,57.945,49.641z"], [1, "climacon_iconWrap", "climacon_cloudSun-iconWrap"], ["clip-path", "url(#cloudFillClip)"], [1, "climacon_componentWrap", "climacon_componentWrap-sun", "climacon_componentWrap-sun_cloud"], [1, "climacon_componentWrap", "climacon_componentWrap_sunSpoke"], ["d", "M80.029,43.611h-3.998c-1.105,0-2-0.896-2-1.999s0.895-2,2-2h3.998c1.104,0,2,0.896,2,2S81.135,43.611,80.029,43.611z", 1, "climacon_component", "climacon_component-stroke", "climacon_component-stroke_sunSpoke", "climacon_component-stroke_sunSpoke-orth"], ["d", "M72.174,30.3c-0.781,0.781-2.049,0.781-2.828,0c-0.781-0.781-0.781-2.047,0-2.828l2.828-2.828c0.779-0.781,2.047-0.781,2.828,0c0.779,0.781,0.779,2.047,0,2.828L72.174,30.3z", 1, "climacon_component", "climacon_component-stroke", "climacon_component-stroke_sunSpoke", "climacon_component-stroke_sunSpoke-north"], ["d", "M58.033,25.614c-1.105,0-2-0.896-2-2v-3.999c0-1.104,0.895-2,2-2c1.104,0,2,0.896,2,2v3.999C60.033,24.718,59.135,25.614,58.033,25.614z", 1, "climacon_component", "climacon_component-stroke", "climacon_component-stroke_sunSpoke", "climacon_component-stroke_sunSpoke-north"], ["d", "M43.892,30.3l-2.827-2.828c-0.781-0.781-0.781-2.047,0-2.828c0.78-0.781,2.047-0.781,2.827,0l2.827,2.828c0.781,0.781,0.781,2.047,0,2.828C45.939,31.081,44.673,31.081,43.892,30.3z", 1, "climacon_component", "climacon_component-stroke", "climacon_component-stroke_sunSpoke", "climacon_component-stroke_sunSpoke-north"], ["d", "M42.033,41.612c0,1.104-0.896,1.999-2,1.999h-4c-1.104,0-1.998-0.896-1.998-1.999s0.896-2,1.998-2h4C41.139,39.612,42.033,40.509,42.033,41.612z", 1, "climacon_component", "climacon_component-stroke", "climacon_component-stroke_sunSpoke", "climacon_component-stroke_sunSpoke-north"], ["d", "M43.892,52.925c0.781-0.78,2.048-0.78,2.827,0c0.781,0.78,0.781,2.047,0,2.828l-2.827,2.827c-0.78,0.781-2.047,0.781-2.827,0c-0.781-0.78-0.781-2.047,0-2.827L43.892,52.925z", 1, "climacon_component", "climacon_component-stroke", "climacon_component-stroke_sunSpoke", "climacon_component-stroke_sunSpoke-north"], ["d", "M58.033,57.61c1.104,0,2,0.895,2,1.999v4c0,1.104-0.896,2-2,2c-1.105,0-2-0.896-2-2v-4C56.033,58.505,56.928,57.61,58.033,57.61z", 1, "climacon_component", "climacon_component-stroke", "climacon_component-stroke_sunSpoke", "climacon_component-stroke_sunSpoke-north"], ["d", "M72.174,52.925l2.828,2.828c0.779,0.78,0.779,2.047,0,2.827c-0.781,0.781-2.049,0.781-2.828,0l-2.828-2.827c-0.781-0.781-0.781-2.048,0-2.828C70.125,52.144,71.391,52.144,72.174,52.925z", 1, "climacon_component", "climacon_component-stroke", "climacon_component-stroke_sunSpoke", "climacon_component-stroke_sunSpoke-north"], ["clip-path", "url(#sunCloudFillClip)", 1, "climacon_wrapperComponent", "climacon_wrapperComponent-sunBody"], ["cx", "58.033", "cy", "41.612", "r", "11.999", 1, "climacon_component", "climacon_component-stroke", "climacon_component-stroke_sunBody"], ["clip-path", "url(#cloudFillClip)", 1, "climacon_wrapperComponent", "climacon_wrapperComponent-cloud"], ["d", "M44.033,65.641c-8.836,0-15.999-7.162-15.999-15.998c0-8.835,7.163-15.998,15.999-15.998c6.006,0,11.233,3.312,13.969,8.203c0.664-0.113,1.338-0.205,2.033-0.205c6.627,0,11.998,5.373,11.998,12c0,6.625-5.371,11.998-11.998,11.998C57.26,65.641,47.23,65.641,44.033,65.641z", 1, "climacon_component", "climacon_component-stroke", "climacon_component-stroke_cloud"], ["id", "cloudSunFill", "version", "1.1", "viewBox", "15 15 70 70", 1, "climacon", "climacon_cloudSunFill"], [1, "climacon_iconWrap", "climacon_cloudSunFill-iconWrap"], ["d", "M80.029,43.611h-3.998c-1.105,0-2-0.896-2-1.999s0.895-2,2-2h3.998c1.104,0,2,0.896,2,2S81.135,43.611,80.029,43.611z", 1, "climacon_component", "climacon_component-stroke", "climacon_component-stroke_sunSpoke", "climacon_component-stroke_sunSpoke-north"], [1, "climacon_wrapperComponent", "climacon_wrapperComponent-sunBody"], ["fill", "#FFFFFF", "cx", "58.033", "cy", "41.612", "r", "7.999", 1, "climacon_component", "climacon_component-fill", "climacon_component-fill_sunBody"], [1, "climacon_wrapperComponent", "climacon_wrapperComponent-cloud"], ["fill", "#FFFFFF", "d", "M60.035,61.641c4.418,0,8-3.582,8-7.998c0-4.418-3.582-8-8-8c-1.6,0-3.082,0.481-4.334,1.291c-1.23-5.316-5.976-9.29-11.668-9.29c-6.627,0-11.999,5.372-11.999,11.999c0,6.627,5.372,11.998,11.999,11.998C47.65,61.641,57.016,61.641,60.035,61.641z", 1, "climacon_component", "climacon_component-fill", "climacon_component-fill_cloud"], ["id", "cloudMoon", "version", "1.1", "viewBox", "15 15 70 70", 1, "climacon", "climacon_cloudMoon"], ["id", "cloudFillClipfill1"], ["id", "moonCloudFillClipfill"], ["d", "M0,0v100h100V0H0z M60.943,46.641c-4.418,0-7.999-3.582-7.999-7.999c0-3.803,2.655-6.979,6.211-7.792c0.903,4.854,4.726,8.676,9.579,9.58C67.922,43.986,64.745,46.641,60.943,46.641z"], [1, "climacon_iconWrap", "climacon_iconWrap-cloudMoon"], ["clip-path", "url(#moonCloudFillClip)", 1, "climacon_wrapperComponent", "climacon_wrapperComponent-moon", "climacon_componentWrap-moon_cloud"], ["d", "M61.023,50.641c-6.627,0-11.999-5.372-11.999-11.998c0-6.627,5.372-11.999,11.999-11.999c0.755,0,1.491,0.078,2.207,0.212c-0.132,0.576-0.208,1.173-0.208,1.788c0,4.418,3.582,7.999,8,7.999c0.614,0,1.212-0.076,1.788-0.208c0.133,0.717,0.211,1.452,0.211,2.208C73.021,45.269,67.649,50.641,61.023,50.641z", 1, "climacon_component", "climacon_component-stroke", "climacon_component-stroke_moon"], ["id", "cloudMoonFill", "version", "1.1", "viewBox", "15 15 70 70", 1, "climacon", "climacon_cloudMoonFill"], [1, "climacon_iconWrap", "climacon_iconWrap-cloudMoonFill"], [1, "climacon_wrapperComponent", "climacon_wrapperComponent-moon", "climacon_componentWrap-moon_cloud"], ["fill", "#FFFFFF", "d", "M59.235,30.851c-3.556,0.813-6.211,3.989-6.211,7.792c0,4.417,3.581,7.999,7.999,7.999c3.802,0,6.979-2.655,7.791-6.211C63.961,39.527,60.139,35.705,59.235,30.851z", 1, "climacon_component", "climacon_component-fill", "climacon_component-fill_moon"], ["id", "cloudDrizzle", "version", "1.1", "viewBox", "15 15 70 70", 1, "climacon", "climacon_cloudDrizzle"], [1, "climacon_iconWrap", "climacon_iconWrap-cloudDrizzle"], [1, "climacon_wrapperComponent", "climacon_wrapperComponent-drizzle"], ["d", "M42.001,53.644c1.104,0,2,0.896,2,2v3.998c0,1.105-0.896,2-2,2c-1.105,0-2.001-0.895-2.001-2v-3.998C40,54.538,40.896,53.644,42.001,53.644z", 1, "climacon_component", "climacon_component-stroke", "climacon_component-stroke_drizzle", "climacon_component-stroke_drizzle-left"], ["d", "M49.999,53.644c1.104,0,2,0.896,2,2v4c0,1.104-0.896,2-2,2s-1.998-0.896-1.998-2v-4C48.001,54.54,48.896,53.644,49.999,53.644z", 1, "climacon_component", "climacon_component-stroke", "climacon_component-stroke_drizzle", "climacon_component-stroke_drizzle-middle"], ["d", "M57.999,53.644c1.104,0,2,0.896,2,2v3.998c0,1.105-0.896,2-2,2c-1.105,0-2-0.895-2-2v-3.998C55.999,54.538,56.894,53.644,57.999,53.644z", 1, "climacon_component", "climacon_component-stroke", "climacon_component-stroke_drizzle", "climacon_component-stroke_drizzle-right"], ["d", "M63.999,64.944v-4.381c2.387-1.386,3.998-3.961,3.998-6.92c0-4.418-3.58-8-7.998-8c-1.603,0-3.084,0.481-4.334,1.291c-1.232-5.316-5.973-9.29-11.664-9.29c-6.628,0-11.999,5.372-11.999,12c0,3.549,1.55,6.729,3.998,8.926v4.914c-4.776-2.769-7.998-7.922-7.998-13.84c0-8.836,7.162-15.999,15.999-15.999c6.004,0,11.229,3.312,13.965,8.203c0.664-0.113,1.336-0.205,2.033-0.205c6.627,0,11.998,5.373,11.998,12C71.997,58.864,68.655,63.296,63.999,64.944z", 1, "climacon_component", "climacon_component-stroke", "climacon_component-stroke_cloud"], ["id", "cloudDrizzleFill", "version", "1.1", "viewBox", "15 15 70 70", 1, "climacon", "climacon_cloudDrizzleFill"], [1, "climacon_iconWrap", "climacon_iconWrap-cloudDrizzleFill"], ["id", "cloudDrizzleSun", "version", "1.1", "viewBox", "15 15 70 70", 1, "climacon", "climacon_cloudDrizzleSun"], ["id", "cloudFillClipfill2_2"], ["id", "sunCloudFillClipfill4"], ["id", "cloudSunFillClip"], ["d", "M15,15v70h20.947V63.481c-4.778-2.767-8-7.922-8-13.84c0-8.836,7.163-15.998,15.998-15.998c6.004,0,11.229,3.312,13.965,8.203c0.664-0.113,1.338-0.205,2.033-0.205c6.627,0,11.998,5.373,11.998,12c0,5.262-3.394,9.723-8.107,11.341V85H85V15H15z"], [1, "climacon_iconWrap", "climacon_iconWrap-cloudDrizzleSun"], ["clip-path", "url(#cloudSunFillClip)"], ["id", "cloudDrizzleSunFill", "version", "1.1", "viewBox", "15 15 70 70", 1, "climacon", "climacon_cloudDrizzleSunFill"], [1, "climacon_iconWrap", "climacon_iconWrap-cloudDrizzleSunFill"], ["id", "cloudDrizzleMoon", "version", "1.1", "viewBox", "15 15 70 70", 1, "climacon", "climacon_cloudDrizzleMoon"], ["id", "moonCloudFillClipfill1"], ["id", "cloudFillClipfill11"], [1, "climacon_iconWrap", "climacon_iconWrap-cloudDrizzleMoon"], ["id", "cloudDrizzleMoonFill", "version", "1.1", "viewBox", "15 15 70 70", 1, "climacon", "climacon_cloudDrizzleMoonFill"], [1, "climacon_iconWrap", "climacon_iconWrap-cloudDrizzleMoonFill"], ["id", "cloudDrizzleAlt", "version", "1.1", "viewBox", "15 15 70 70", 1, "climacon", "climacon_cloudDrizzleAlt"], [1, "climacon_iconWrap", "climacon_iconWrap-cloudDrizzleAlt"], ["id", "Drizzle-Left_1_", "d", "M56.969,57.672l-2.121,2.121c-1.172,1.172-1.172,3.072,0,4.242c1.17,1.172,3.07,1.172,4.24,0c1.172-1.17,1.172-3.07,0-4.242L56.969,57.672z", 1, "climacon_component", "climacon_component-stroke", "climacon_component-stroke_drizzle", "climacon_component-stroke_drizzle-left"], ["d", "M50.088,57.672l-2.119,2.121c-1.174,1.172-1.174,3.07,0,4.242c1.17,1.172,3.068,1.172,4.24,0s1.172-3.07,0-4.242L50.088,57.672z", 1, "climacon_component", "climacon_component-stroke", "climacon_component-stroke_drizzle", "climacon_component-stroke_drizzle-middle"], ["d", "M43.033,57.672l-2.121,2.121c-1.172,1.172-1.172,3.07,0,4.242s3.07,1.172,4.244,0c1.172-1.172,1.172-3.07,0-4.242L43.033,57.672z", 1, "climacon_component", "climacon_component-stroke", "climacon_component-stroke_drizzle", "climacon_component-stroke_drizzle-right"], ["d", "M59.943,41.642c-0.696,0-1.369,0.092-2.033,0.205c-2.736-4.892-7.961-8.203-13.965-8.203c-8.835,0-15.998,7.162-15.998,15.997c0,5.992,3.3,11.207,8.177,13.947c0.276-1.262,0.892-2.465,1.873-3.445l0.057-0.057c-3.644-2.061-6.106-5.963-6.106-10.445c0-6.626,5.372-11.998,11.998-11.998c5.691,0,10.433,3.974,11.666,9.29c1.25-0.81,2.732-1.291,4.332-1.291c4.418,0,8,3.581,8,7.999c0,3.443-2.182,6.371-5.235,7.498c0.788,1.146,1.194,2.471,1.222,3.807c4.666-1.645,8.014-6.077,8.014-11.305C71.941,47.014,66.57,41.642,59.943,41.642z", 1, "climacon_component", "climacon_component-stroke", "climacon_component-stroke_cloud"], ["id", "cloudDrizzleAltfill1", "version", "1.1", "viewBox", "15 15 70 70", 1, "climacon", "climacon_cloudDrizzleFillAlt"], [1, "climacon_iconWrap", "climacon_iconWrap-cloudDrizzleFillAlt"], ["id", "Drizzle-Left_1_1", "d", "M56.969,57.672l-2.121,2.121c-1.172,1.172-1.172,3.072,0,4.242c1.17,1.172,3.07,1.172,4.24,0c1.172-1.17,1.172-3.07,0-4.242L56.969,57.672z", 1, "climacon_component", "climacon_component-stroke", "climacon_component-stroke_drizzle", "climacon_component-stroke_drizzle-left"], ["id", "cloudDrizzleSunAlt", "version", "1.1", "viewBox", "15 15 70 70", 1, "climacon", "climacon_cloudDrizzleSunAlt"], ["id", "sunCloudFillClipfill1"], ["id", "cloudSunFillClipfill"], [1, "climacon_iconWrap", "climacon_iconWrap-cloudDrizzleSunAlt"], ["id", "Drizzle-Left_1_2", "d", "M56.969,57.672l-2.121,2.121c-1.172,1.172-1.172,3.072,0,4.242c1.17,1.172,3.07,1.172,4.24,0c1.172-1.17,1.172-3.07,0-4.242L56.969,57.672z", 1, "climacon_component", "climacon_component-stroke", "climacon_component-stroke_drizzle", "climacon_component-stroke_drizzle-left"], ["id", "cloudDrizzleSunFillAlt", "version", "1.1", "viewBox", "15 15 70 70", 1, "climacon", "climacon_cloudDrizzleSunFillAlt"], [1, "climacon_iconWrap", "climacon_iconWrap-cloudDrizzleSunFillAlt"], ["id", "Drizzle-Left_1_3", "d", "M56.969,57.672l-2.121,2.121c-1.172,1.172-1.172,3.072,0,4.242c1.17,1.172,3.07,1.172,4.24,0c1.172-1.17,1.172-3.07,0-4.242L56.969,57.672z", 1, "climacon_component", "climacon_component-stroke", "climacon_component-stroke_drizzle", "climacon_component-stroke_drizzle-left"], ["id", "cloudDrizzleMoonAlt", "version", "1.1", "viewBox", "15 15 70 70", 1, "climacon", "climacon_cloudDrizzleMoonAlt"], ["id", "cloudFillClipfill22"], ["id", "moonCloudFillClipfill2"], [1, "climacon_iconWrap", "climacon_iconWrap-cloudDrizzleMoonAlt"], ["d", "M61.023,50.641c-6.627,0-11.999-5.372-11.999-11.998c0-6.627,5.372-11.999,11.999-11.999c0.755,0,1.491,0.078,2.207,0.212c-0.132,0.576-0.208,1.173-0.208,1.788c0,4.418,3.582,7.999,8,7.999c0.614,0,1.212-0.076,1.788-0.208c0.133,0.717,0.211,1.452,0.211,2.208C73.021,45.269,67.649,50.641,61.023,50.641z", 1, "climacon_component", "climacon_component-stroke", "climacon_component-stroke_sunBody"], ["id", "Drizzle-Left_1_4", "d", "M56.969,57.672l-2.121,2.121c-1.172,1.172-1.172,3.072,0,4.242c1.17,1.172,3.07,1.172,4.24,0c1.172-1.17,1.172-3.07,0-4.242L56.969,57.672z", 1, "climacon_component", "climacon_component-stroke", "climacon_component-stroke_drizzle", "climacon_component-stroke_drizzle-left"], ["id", "cloudDrizzleMoonFillAlt", "version", "1.1", "viewBox", "15 15 70 70", 1, "climacon", "climacon_cloudDrizzleMoonFillAlt"], [1, "climacon_iconWrap", "climacon_iconWrap-cloudDrizzleMoonFillAlt"], ["id", "Drizzle-Left_1_6", "d", "M56.969,57.672l-2.121,2.121c-1.172,1.172-1.172,3.072,0,4.242c1.17,1.172,3.07,1.172,4.24,0c1.172-1.17,1.172-3.07,0-4.242L56.969,57.672z", 1, "climacon_component", "climacon_component-stroke", "climacon_component-stroke_drizzle", "climacon_component-stroke_drizzle-left"], ["id", "cloudRain", "version", "1.1", "viewBox", "15 15 70 70", 1, "climacon", "climacon_cloudRain"], ["id", "cloudFillClipfill3"], [1, "climacon_iconWrap", "climacon_iconWrap-cloudRain"], [1, "climacon_wrapperComponent", "climacon_wrapperComponent-rain"], ["d", "M41.946,53.641c1.104,0,1.999,0.896,1.999,2v15.998c0,1.105-0.895,2-1.999,2s-2-0.895-2-2V55.641C39.946,54.537,40.842,53.641,41.946,53.641z", 1, "climacon_component", "climacon_component-stroke", "climacon_component-stroke_rain", "climacon_component-stroke_rain-", "left"], ["d", "M49.945,57.641c1.104,0,2,0.896,2,2v15.998c0,1.104-0.896,2-2,2s-2-0.896-2-2V59.641C47.945,58.535,48.841,57.641,49.945,57.641z", 1, "climacon_component", "climacon_component-stroke", "climacon_component-stroke_rain", "climacon_component-stroke_rain-", "middle"], ["d", "M57.943,53.641c1.104,0,2,0.896,2,2v15.998c0,1.105-0.896,2-2,2c-1.104,0-2-0.895-2-2V55.641C55.943,54.537,56.84,53.641,57.943,53.641z", 1, "climacon_component", "climacon_component-stroke", "climacon_component-stroke_rain", "climacon_component-stroke_rain-", "right"], ["clip-path", "url(#cloudFillClip)", 1, "climacon_wrapperComponent", "climacon_wrapperComponent_cloud"], ["d", "M63.943,64.941v-4.381c2.389-1.384,4-3.961,4-6.92c0-4.417-3.582-8-8-8c-1.601,0-3.082,0.48-4.334,1.291c-1.23-5.317-5.973-9.29-11.665-9.29c-6.626,0-11.998,5.372-11.998,11.998c0,3.549,1.551,6.728,4,8.924v4.916c-4.777-2.768-8-7.922-8-13.84c0-8.835,7.163-15.997,15.998-15.997c6.004,0,11.229,3.311,13.965,8.203c0.664-0.113,1.338-0.205,2.033-0.205c6.627,0,11.998,5.372,11.998,12C71.941,58.863,68.602,63.293,63.943,64.941z", 1, "climacon_component", "climacon_component-stroke", "climacon_component-stroke_cloud"], ["id", "cloudRainFill", "version", "1.1", "viewBox", "15 15 70 70", 1, "climacon", "climacon_cloudRainFill"], [1, "climacon_iconWrap", "climacon_iconWrap-cloudRainFill"], ["id", "cloudRainSun", "version", "1.1", "viewBox", "15 15 70 70", 1, "climacon", "climacon_cloudRainSun"], ["id", "cloudFillClipfill2"], ["id", "sunCloudFillClipfill6"], ["id", "cloudSunFillClipfill2"], [1, "climacon_iconWrap", "climacon_iconWrap-cloudRainSun"], ["id", "cloudRainSunFill", "version", "1.1", "viewBox", "15 15 70 70", 1, "climacon", "climacon_cloudRainSunFill"], [1, "climacon_iconWrap", "climacon_iconWrap-cloudRainSunFill"], ["id", "cloudRainMoon", "version", "1.1", "viewBox", "15 15 70 70", 1, "climacon", "climacon_cloudRainMoon"], ["id", "cloudFillClipfill4"], ["id", "moonCloudFillClipfill3"], [1, "climacon_iconWrap", "climacon_iconWrap-cloudRainMoon"], ["id", "cloudRainMoonFill", "version", "1.1", "viewBox", "15 15 70 70", 1, "climacon", "climacon_cloudRainMoonFill"], [1, "climacon_iconWrap", "climacon_iconWrap-cloudRainMoonFill"], ["id", "cloudRainAlt", "version", "1.1", "viewBox", "15 15 70 70", 1, "climacon", "climacon_cloudRainAlt"], ["id", "cloudFillClipfill5"], [1, "climacon_iconWrap", "climacon_iconWrap-cloudRainAlt"], [1, "climacon_wrapperComponent", "climacon_wrapperComponent-rain", "climacon_wrapperComponent-rain_alt"], ["d", "M50.001,58.568l3.535,3.535c1.95,1.953,1.95,5.119,0,7.07c-1.953,1.953-5.119,1.953-7.07,0c-1.953-1.951-1.953-5.117,0-7.07L50.001,58.568z", 1, "climacon_component", "climacon_component-stroke", "climacon_component-stroke_rain", "climacon_component-stroke_rain-", "alt"], ["d", "M59.999,65.641c-0.267,0-0.614,0-1,0c0-1.373-0.319-2.742-0.942-4c0.776,0,1.45,0,1.942,0c4.418,0,7.999-3.58,7.999-7.998c0-4.418-3.581-8-7.999-8c-1.601,0-3.083,0.481-4.334,1.29c-1.231-5.316-5.973-9.289-11.664-9.289c-6.627,0-11.998,5.372-11.998,11.998c0,5.953,4.339,10.879,10.023,11.822c-0.637,1.218-0.969,2.55-1.012,3.888c-7.406-1.399-13.012-7.896-13.012-15.709c0-8.835,7.162-15.998,15.998-15.998c6.004,0,11.229,3.312,13.965,8.204c0.664-0.114,1.337-0.205,2.033-0.205c6.627,0,11.998,5.372,11.998,12C71.996,60.27,66.626,65.641,59.999,65.641z", 1, "climacon_component", "climacon_component-stroke", "climacon_component-stroke_cloud"], ["id", "cloudRainAltFill", "version", "1.1", "viewBox", "15 15 70 70", 1, "climacon", "climacon_cloudRainAltFill"], [1, "climacon_iconWrap", "climacon_iconWrap-cloudRainAltFill"], ["id", "cloudRainSunAlt", "version", "1.1", "viewBox", "15 15 70 70", 1, "climacon", "climacon_cloudSunRainAlt"], ["id", "cloudFillClipfill6"], ["id", "sunCloudFillClipfill5"], ["id", "cloudSunFillClipfill3"], [1, "climacon_iconWrap", "climacon_iconWrap-cloudRainSunAlt"], ["id", "cloudRainSunAltFill", "version", "1.1", "viewBox", "15 15 70 70", 1, "climacon", "climacon_cloudSunRainAltFill"], [1, "climacon_iconWrap", "climacon_iconWrap-cloudRainSunAltFill"], ["id", "cloudRainMoonAlt", "version", "1.1", "viewBox", "15 15 70 70", 1, "climacon", "climacon_cloudMoonRainAlt"], ["id", "cloudFillClipfill7"], ["id", "moonCloudFillClipfill4"], [1, "climacon_iconWrap", "climacon_iconWrap-cloudRainMoonAlt"], ["id", "cloudRainMoonAltFill", "version", "1.1", "viewBox", "15 15 70 70", 1, "climacon", "climacon_cloudMoonRainAltFill"], ["id", "cloudHailAlt", "version", "1.1", "viewBox", "15 15 70 70", 1, "climacon", "climacon_cloudHailAlt"], [1, "climacon_iconWrap", "climacon_iconWrap-cloudHailAlt"], [1, "climacon_wrapperComponent", "climacon_wrapperComponent-hailAlt"], [1, "climacon_component", "climacon_component-stroke", "climacon_component-stroke_hailAlt", "climacon_component-stroke_hailAlt-left"], ["cx", "42", "cy", "65.498", "r", "2"], [1, "climacon_component", "climacon_component-stroke", "climacon_component-stroke_hailAlt", "climacon_component-stroke_hailAlt-middle"], ["cx", "49.999", "cy", "65.498", "r", "2"], [1, "climacon_component", "climacon_component-stroke", "climacon_component-stroke_hailAlt", "climacon_component-stroke_hailAlt-right"], ["cx", "57.998", "cy", "65.498", "r", "2"], ["d", "M63.999,64.941v-4.381c2.39-1.384,3.999-3.961,3.999-6.92c0-4.417-3.581-8-7.998-8c-1.602,0-3.084,0.48-4.334,1.291c-1.23-5.317-5.974-9.29-11.665-9.29c-6.626,0-11.998,5.372-11.998,11.998c0,3.549,1.55,6.728,3.999,8.924v4.916c-4.776-2.768-7.998-7.922-7.998-13.84c0-8.835,7.162-15.997,15.997-15.997c6.004,0,11.229,3.311,13.966,8.203c0.663-0.113,1.336-0.205,2.033-0.205c6.626,0,11.998,5.372,11.998,12C71.998,58.863,68.656,63.293,63.999,64.941z", 1, "climacon_component", "climacon_component-stroke", "climacon_component-stroke_cloud"], ["id", "cloudHailAltFill", "version", "1.1", "viewBox", "15 15 70 70", 1, "climacon", "climacon_cloudHailAltFill"], [1, "climacon_iconWrap", "climacon_iconWrap-cloudHailAltFill"], ["id", "cloudHailAltSun", "version", "1.1", "viewBox", "15 15 70 70", 1, "climacon", "climacon_cloudHailAltSun"], ["id", "cloudFillClipfill8"], ["id", "sunCloudFillClipfill1_1"], ["id", "cloudSunFillClipfill4"], [1, "climacon_iconWrap", "climacon_iconWrap-cloudHailAltSun"], ["id", "cloudHailAltSunalt", "version", "1.1", "viewBox", "15 15 70 70", 1, "climacon", "climacon_cloudHailAltSun"], ["id", "cloudHailAltMoon", "version", "1.1", "viewBox", "15 15 70 70", 1, "climacon", "climacon_cloudHailAltMoon"], ["id", "cloudFillClipfill9"], ["id", "moonCloudFillClipfill5"], [1, "climacon_iconWrap", "climacon_iconWrap-cloudHailAltMoon"], ["id", "cloudHailAltMoonFill", "version", "1.1", "viewBox", "15 15 70 70", 1, "climacon", "climacon_cloudHailAltMoonFill"], ["id", "cloudSnow", "version", "1.1", "viewBox", "15 15 70 70", 1, "climacon", "climacon_cloudSnow"], [1, "climacon_iconWrap", "climacon_iconWrap-cloudSnow"], ["clip-path", "url(#snowFillClip)", 1, "climacon_wrapperComponent", "climacon_wrapperComponent-snow"], ["cx", "42.001", "cy", "59.641", "r", "2", 1, "climacon_component", "climacon_component-stroke", "climacon_component-stroke_snow", "climacon_component-stroke_snow-left"], ["cx", "50.001", "cy", "59.641", "r", "2", 1, "climacon_component", "climacon_component-stroke", "climacon_component-stroke_snow", "climacon_component-stroke_snow-middle"], ["cx", "57.999", "cy", "59.641", "r", "2", 1, "climacon_component", "climacon_component-stroke", "climacon_component-stroke_snow", "climacon_component-stroke_snow-right"], ["d", "M63.999,64.943v-4.381c2.39-1.386,3.999-3.963,3.999-6.922c0-4.417-3.581-7.999-7.999-7.999c-1.601,0-3.083,0.48-4.333,1.291c-1.23-5.317-5.974-9.291-11.665-9.291c-6.627,0-11.998,5.373-11.998,12c0,3.549,1.55,6.729,4,8.924v4.916c-4.777-2.769-8-7.922-8-13.84c0-8.836,7.163-15.999,15.998-15.999c6.004,0,11.229,3.312,13.965,8.204c0.664-0.113,1.337-0.205,2.033-0.205c6.627,0,11.999,5.373,11.999,11.999C71.998,58.863,68.654,63.293,63.999,64.943z", 1, "climacon_component", "climacon_component-stroke", "climacon_component-stroke_cloud"], ["id", "cloudSnowFill", "version", "1.1", "viewBox", "15 15 70 70", 1, "climacon", "climacon_cloudSnowFill"], [1, "climacon_iconWrap", "climacon_iconWrap-cloudSnowFill"], [1, "climacon_wrapperComponent", "climacon_wrapperComponent-snow"], ["id", "cloudSnowSun", "version", "1.1", "viewBox", "15 15 70 70", 1, "climacon", "climacon_cloudSnowSun"], ["id", "cloudFillClipfill10"], ["id", "sunCloudFillClipfill2"], ["id", "cloudSunFillClipfill5"], [1, "climacon_iconWrap", "climacon_iconWrap-cloudSnowSun"], ["id", "cloudSnowSunFill", "version", "1.1", "viewBox", "15 15 70 70", 1, "climacon", "climacon_cloudSnowSunFill"], [1, "climacon_iconWrap", "climacon_iconWrap-cloudSnowSunFill"], ["id", "cloudSnowMoon", "version", "1.1", "viewBox", "15 15 70 70", 1, "climacon", "climacon_cloudSnowMoon"], ["id", "moonCloudFillClipfill6"], ["id", "cloudFillClipfill11_1"], [1, "climacon_iconWrap", "climacon_iconWrap-cloudSnowMoon"], ["id", "cloudSnowMoonFill", "version", "1.1", "viewBox", "15 15 70 70", 1, "climacon", "climacon_cloudSnowMoonFill"], [1, "climacon_iconWrap", "climacon_iconWrap-cloudSnowMoonFill"], ["id", "cloudSnowAltfill2", "version", "1.1", "viewBox", "15 15 70 70", 1, "climacon", "climacon_cloudSnowAlt"], ["id", "snowFillClip"], ["d", "M15,15v70h70V15H15z M50,65.641c-1.104,0-2-0.896-2-2c0-1.104,0.896-2,2-2c1.104,0,2,0.896,2,2S51.104,65.641,50,65.641z"], [1, "climacon_iconWrap", "climacon_iconWrap-cloudSnowAlt"], [1, "climacon_wrapperComponent", "climacon_wrapperComponent-snowAlt"], ["clip-path", "url(#snowFillClip)", 1, "climacon_component", "climacon_component", "climacon_component-snowAlt"], ["d", "M43.072,59.641c0.553-0.957,1.775-1.283,2.732-0.731L48,60.176v-2.535c0-1.104,0.896-2,2-2c1.104,0,2,0.896,2,2v2.535l2.195-1.268c0.957-0.551,2.18-0.225,2.73,0.732c0.553,0.957,0.225,2.18-0.73,2.731l-2.196,1.269l2.196,1.268c0.955,0.553,1.283,1.775,0.73,2.732c-0.552,0.954-1.773,1.282-2.73,0.729L52,67.104v2.535c0,1.105-0.896,2-2,2c-1.104,0-2-0.895-2-2v-2.535l-2.195,1.269c-0.957,0.553-2.18,0.226-2.732-0.729c-0.552-0.957-0.225-2.181,0.732-2.732L46,63.641l-2.195-1.268C42.848,61.82,42.521,60.598,43.072,59.641z", 1, "climacon_component", "climacon_component-stroke", "climacon_component-stroke_snowAlt"], ["d", "M61.998,65.461v-4.082c3.447-0.891,6-4.012,6-7.738c0-4.417-3.582-7.999-7.999-7.999c-1.601,0-3.084,0.48-4.334,1.291c-1.231-5.317-5.973-9.291-11.664-9.291c-6.627,0-11.999,5.373-11.999,12c0,4.438,2.417,8.305,5.999,10.379v4.444c-5.86-2.375-9.998-8.112-9.998-14.825c0-8.835,7.162-15.999,15.998-15.999c6.004,0,11.229,3.312,13.965,8.204c0.664-0.113,1.336-0.205,2.033-0.205c6.626,0,11.998,5.373,11.998,11.998C71.997,59.586,67.671,64.506,61.998,65.461z", 1, "climacon_component", "climacon_component-stroke", "climacon_component-stroke_cloud"], ["id", "cloudSnowAltFill", "version", "1.1", "viewBox", "15 15 70 70", 1, "climacon", "climacon_cloudSnowAltFill"], [1, "climacon_iconWrap", "climacon_iconWrap-cloudSnowAltFill"], [1, "climacon_component", "climacon_component", "climacon_component-snowAlt"], ["fill", "#FFFFFF", "cx", "50", "cy", "63.641", "r", "2", 1, "climacon_component", "climacon_component-fill", "climacon_component-fill_snowAlt"], ["id", "cloudSnowSunAlt", "version", "1.1", "viewBox", "15 15 70 70", 1, "climacon", "climacon_cloudSnowSunAlt"], ["id", "cloudFillClipfill12"], ["id", "sunCloudFillClipfill3"], ["id", "cloudSunFillClipfill6"], ["id", "snowFillClipfill1"], [1, "climacon_iconWrap", "climacon_iconWrap-cloudSnowSunAlt"], ["id", "cloudSnowSunAltFill", "version", "1.1", "viewBox", "15 15 70 70", 1, "climacon", "climacon_cloudSnowSunAltFill"], [1, "climacon_iconWrap", "climacon_iconWrap-cloudSnowSunAltFill"], ["id", "cloudSnowAlt", "version", "1.1", "viewBox", "15 15 70 70", 1, "climacon", "climacon_cloudSnowAlt"], ["id", "moonCloudFillClipfill7"], ["id", "cloudFillClipfill13"], ["id", "snowFillClipfill2"], ["id", "cloudSnowAltFill1", "version", "1.1", "viewBox", "15 15 70 70", 1, "climacon", "climacon_cloudSnowAltFill"], ["id", "cloudFog", "version", "1.1", "viewBox", "15 15 70 70", 1, "climacon", "climacon_cloudFog"], [1, "climacon_iconWrap", "climacon_iconWrap-cloudFog"], [1, "climacon_wrapperComponent", "climacon_wrapperComponent-Fog"], ["d", "M69.998,57.641H30.003c-1.104,0-2-0.895-2-2c0-1.104,0.896-2,2-2h39.995c1.104,0,2,0.896,2,2C71.998,56.746,71.104,57.641,69.998,57.641z", 1, "climacon_component", "climacon_component-stroke", "climacon_component-stroke_fogLine", "climacon_component-stroke_fogLine-top"], ["d", "M69.998,65.641H30.003c-1.104,0-2-0.896-2-2s0.896-2,2-2h39.995c1.104,0,2,0.896,2,2C71.998,64.744,71.104,65.641,69.998,65.641z", 1, "climacon_component", "climacon_component-stroke", "climacon_component-stroke_fogLine", "climacon_component-stroke_fogLine-middle"], ["d", "M30.003,69.639h39.995c1.104,0,2,0.896,2,2c0,1.105-0.896,2-2,2H30.003c-1.104,0-2-0.895-2-2C28.003,70.535,28.898,69.639,30.003,69.639z", 1, "climacon_component", "climacon_component-stroke", "climacon_component-stroke_fogLine", "climacon_component-stroke_fogLine-bottom"], ["d", "M59.999,45.643c-1.601,0-3.083,0.48-4.333,1.291c-1.232-5.317-5.974-9.291-11.665-9.291c-6.626,0-11.998,5.373-11.998,12h-4c0-8.835,7.163-15.999,15.998-15.999c6.004,0,11.229,3.312,13.965,8.204c0.664-0.113,1.337-0.205,2.033-0.205c5.222,0,9.651,3.342,11.301,8h-4.381C65.535,47.253,62.958,45.643,59.999,45.643z", 1, "climacon_component", "climacon_component-stroke", "climacon_component-stroke_cloud"], ["id", "cloudFogFill", "version", "1.1", "viewBox", "15 15 70 70", 1, "climacon", "climacon_cloudFogFill"], ["d", "M71.287,49.355c-1.659-4.632-6.08-7.954-11.289-7.954c-0.695,0-1.369,0.091-2.033,0.205C55.229,36.72,50.004,33.413,44,33.413c-8.824,0-15.977,7.134-15.996,15.942H71.287z", 1, "climacon_component", "climacon_component-stroke", "climacon_component-stroke_cloud"], ["fill", "#FFFFFF", "d", "M66.897,49.376c-1.389-2.369-3.955-3.965-6.899-3.965c-1.602,0-3.082,0.48-4.334,1.291c-1.23-5.316-5.973-9.291-11.664-9.291c-6.615,0-11.977,5.354-11.996,11.965H66.897z", 1, "climacon_component", "climacon_component-fill", "climacon_component-fill_cloud"], ["id", "cloudFogSun", "version", "1.1", "viewBox", "15 15 70 70", 1, "climacon", "climacon_cloudFogSun"], ["id", "cloudFillClipfill14"], ["id", "sunCloudFillClipfill"], ["id", "cloudSunFillClipfill7"], [1, "climacon_iconWrap", "climacon_iconWrap-cloudFogSun"], ["id", "cloudFogSunFill", "version", "1.1", "viewBox", "15 15 70 70", 1, "climacon", "climacon_cloudFogSunFill"], ["id", "cloudFillClipfill15"], ["id", "sunCloudFillClipfills1"], ["id", "cloudSunFillClipfill8"], [1, "climacon_iconWrap", "climacon_iconWrap-cloudFogSunFill"], ["id", "cloudFogMoon", "version", "1.1", "viewBox", "15 15 70 70", 1, "climacon", "climacon_cloudFogMoon"], ["id", "moonCloudFillClipfill8"], ["id", "cloudFillClipfill16"], [1, "climacon_iconWrap", "climacon_iconWrap-cloudFogMoon"], ["id", "cloudFogMoonFill", "version", "1.1", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "15 15 70 70", 1, "climacon", "climacon_cloudFogMoonFill"], ["id", "moonCloudFillClipfill9"], [1, "climacon_iconWrap", "climacon_iconWrap-cloudFogMoonFill"], ["id", "cloudFogAlt", "version", "1.1", "viewBox", "15 15 70 70", 1, "climacon", "climacon_cloudFogAlt"], [1, "climacon_iconWrap", "climacon_iconWrap-cloudFogAlt"], ["d", "M29.177,55.641c-0.262-0.646-0.473-1.314-0.648-2h43.47c0,0.685-0.069,1.349-0.181,2H29.177z", 1, "climacon_component", "climacon_component-stroke", "climacon_component-stroke_fogLine"], ["d", "M36.263,35.643c2.294-1.271,4.93-1.999,7.738-1.999c2.806,0,5.436,0.73,7.728,1.999H36.263z", 1, "climacon_component", "climacon_component-stroke", "climacon_component-stroke_fogLine"], ["d", "M28.142,47.642c0.085-0.682,0.218-1.347,0.387-1.999h40.396c0.552,0.613,1.039,1.281,1.455,1.999H28.142z", 1, "climacon_component", "climacon_component-stroke", "climacon_component-stroke_fogLine"], ["d", "M29.177,43.643c0.281-0.693,0.613-1.359,0.984-2h27.682c0.04,0.068,0.084,0.135,0.123,0.205c0.664-0.114,1.339-0.205,2.033-0.205c2.451,0,4.729,0.738,6.627,2H29.177z", 1, "climacon_component", "climacon_component-stroke", "climacon_component-stroke_fogLine"], ["d", "M31.524,39.643c0.58-0.723,1.225-1.388,1.92-2h21.123c0.689,0.61,1.326,1.28,1.902,2H31.524z", 1, "climacon_component", "climacon_component-stroke", "climacon_component-stroke_fogLine"], ["d", "M71.816,51.641H28.142c-0.082-0.656-0.139-1.32-0.139-1.999h43.298C71.527,50.285,71.702,50.953,71.816,51.641z", 1, "climacon_component", "climacon_component-stroke", "climacon_component-stroke_fogLine"], ["d", "M71.301,57.641c-0.246,0.699-0.555,1.367-0.921,2H31.524c-0.505-0.629-0.957-1.299-1.363-2H71.301z", 1, "climacon_component", "climacon_component-stroke", "climacon_component-stroke_fogLine"], ["d", "M33.444,61.641h35.48c-0.68,0.758-1.447,1.435-2.299,2H36.263C35.247,63.078,34.309,62.4,33.444,61.641z", 1, "climacon_component", "climacon_component-stroke", "climacon_component-stroke_fogLine"], ["id", "cloudFogAltFill", "version", "1.1", "viewBox", "15 15 70 70", 1, "climacon", "climacon_cloudFogAltFill"], [1, "climacon_iconWrap", "climacon_iconWrap-cloudFogAltFill"], ["fill", "#FFFFFF", "d", "M43.945,65.639c-8.835,0-15.998-7.162-15.998-15.998c0-8.836,7.163-15.998,15.998-15.998c6.004,0,11.229,3.312,13.965,8.203c0.664-0.113,1.338-0.205,2.033-0.205c6.627,0,11.998,5.373,11.998,12c0,6.625-5.371,11.998-11.998,11.998C57.168,65.639,47.143,65.639,43.945,65.639z", 1, "climacon_component", "climacon_component-fill", "climacon_component-fill_cloud"], ["id", "cloudFogSunAlt", "version", "1.1", "viewBox", "15 15 70 70", 1, "climacon", "climacon_cloudFogSunAlt"], ["id", "cloudFillClipfill17"], ["id", "sunCloudFillClipfills2"], ["id", "cloudSunFillClipfill9"], [1, "climacon_iconWrap", "climacon_iconWrap-cloudFogSunAlt"], ["id", "cloudFogSunAltFill", "version", "1.1", "viewBox", "15 15 70 70", 1, "climacon", "climacon_cloudFogSunAltFill"], ["id", "cloudSunFillClipfill10"], ["id", "cloudFogMoonAlt", "version", "1.1", "viewBox", "15 15 70 70", 1, "climacon", "climacon_cloudFogMoonAlt"], ["id", "moonCloudFillClipfill10"], ["id", "newMoonCloudFillClip"], ["d", "M15,15v70h70V15H15z M59.943,65.638c-2.775,0-12.801,0-15.998,0c-8.836,0-15.998-7.162-15.998-15.998c0-8.835,7.162-15.998,15.998-15.998c6.004,0,11.229,3.312,13.965,8.203c0.664-0.113,1.338-0.205,2.033-0.205c6.627,0,11.998,5.373,11.998,12C71.941,60.265,66.57,65.638,59.943,65.638z"], ["clip-path", "url(#newMoonCloudFillClip)"], ["id", "cloudFogMoonAltFill", "version", "1.1", "viewBox", "15 15 70 70", 1, "climacon", "climacon_cloudFogMoonAltFill"], ["id", "newMoonCloudFillClipfill1"], [1, "climacon_iconWrap", "climacon_iconWrap-cloudFogMoonAltFill"], ["d", "M61.023,50.641c-6.627,0-11.999-5.372-11.999-11.998c0-6.627,5.372-11.999,11.999-11.999c0.755,0,1.491,0.078,2.207,0.212c-0.132,0.576-0.208,1.173-0.208,1.788c0,4.418,3.582,7.999,8,7.999c0.614,0,1.212-0.076,1.788-0.208c0.133,0.717,0.211,1.452,0.211,2.208C73.021,45.269,67.649,50.641,61.023,50.641z", 1, "climacon_component", "climacon_component-stroke", "climacon_component-stroke_moonBody"], ["id", "cloudLightningfill2", "version", "1.1", "viewBox", "15 15 70 70", 1, "climacon", "climacon_cloudLightning"], [1, "climacon_iconWrap", "climacon_iconWrap-cloudLightning"], [1, "climacon_wrapperComponent", "climacon_wrapperComponent-lightning"], ["points", "48.001,51.641 57.999,51.641 52,61.641 58.999,61.641 46.001,77.639 49.601,65.641 43.001,65.641 ", 1, "climacon_component", "climacon_component-stroke", "climacon_component-stroke_lightning"], ["d", "M59.999,65.641c-0.28,0-0.649,0-1.062,0l3.584-4.412c3.182-1.057,5.478-4.053,5.478-7.588c0-4.417-3.581-7.998-7.999-7.998c-1.602,0-3.083,0.48-4.333,1.29c-1.231-5.316-5.974-9.29-11.665-9.29c-6.626,0-11.998,5.372-11.998,12c0,5.446,3.632,10.039,8.604,11.503l-1.349,3.777c-6.52-2.021-11.255-8.098-11.255-15.282c0-8.835,7.163-15.999,15.998-15.999c6.004,0,11.229,3.312,13.965,8.204c0.664-0.114,1.338-0.205,2.033-0.205c6.627,0,11.999,5.371,11.999,11.999C71.999,60.268,66.626,65.641,59.999,65.641z", 1, "climacon_component", "climacon_component-stroke", "climacon_component-stroke_cloud"], ["id", "cloudLightningFill", "version", "1.1", "viewBox", "15 15 70 70", 1, "climacon", "climacon_cloudLightningFill"], [1, "climacon_iconWrap", "climacon_iconWrap-cloudLightningFill"], ["id", "cloudLightningfill1", "version", "1.1", "viewBox", "15 15 70 70", 1, "climacon", "climacon_cloudLightningSun"], ["id", "cloudFillClipfill18"], ["id", "sunCloudFillClipfills3"], ["id", "cloudSunFillClipfill11"], ["id", "cloudLightningSunFill", "version", "1.1", "viewBox", "15 15 70 70", 1, "climacon", "climacon_cloudLightningSunFill"], ["clip-path", "url(#clip)"], ["id", "cloudLightningMoon", "version", "1.1", "viewBox", "15 15 70 70", 1, "climacon", "climacon_cloudLightningMoon"], ["id", "moonCloudFillClipfill11"], ["id", "cloudFillClipfill19"], [1, "climacon_iconWrap", "climacon_iconWrap-cloudLightningMoon"], ["id", "cloudLightningMoonFill", "version", "1.1", "viewBox", "15 15 70 70", 1, "climacon", "climacon_cloudLightningMoonFill"], [1, "climacon_iconWrap", "climacon_iconWrap-cloudLightningMoonFill"], ["id", "sunrise", "version", "1.1", "viewBox", "15 15 70 70", 1, "climacon", "climacon_sunrise"], [1, "climacon_iconWrap", "climacon_iconWrap-sunrise"], [1, "climacon_componentWrap", "climacon_componentWrap-sunrise"], ["d", "M32.003,54h-4c-1.104,0-2,0.896-2,2s0.896,2,2,2h4c1.104,0,2-0.896,2-2S33.106,54,32.003,54z", 1, "climacon_component", "climacon_component-stroke", "climacon_component-stroke_sunSpoke", "climacon_component-stroke_sunSpoke-east"], ["d", "M38.688,41.859l-2.828-2.828c-0.781-0.78-2.047-0.78-2.828,0c-0.781,0.781-0.781,2.047,0,2.828l2.828,2.828c0.781,0.781,2.047,0.781,2.828,0C39.469,43.906,39.469,42.641,38.688,41.859z", 1, "climacon_component", "climacon_component-stroke", "climacon_component-stroke_sunSpoke", "climacon_component-stroke_sunSpoke-northEast"], ["d", "M50.001,40.002c1.104,0,1.999-0.896,1.999-2v-3.999c0-1.104-0.896-2-1.999-2c-1.105,0-2,0.896-2,2v3.999C48.001,39.106,48.896,40.002,50.001,40.002z", 1, "climacon_component", "climacon_component-stroke", "climacon_component-stroke_sunSpoke", "climacon_component-stroke_sunSpoke-north"], ["d", "M66.969,39.031c-0.779-0.78-2.048-0.78-2.828,0l-2.828,2.828c-0.779,0.781-0.779,2.047,0,2.828c0.781,0.781,2.049,0.781,2.828,0l2.828-2.828C67.749,41.078,67.749,39.812,66.969,39.031z", 1, "climacon_component", "climacon_component-stroke", "climacon_component-stroke_sunSpoke", "climacon_component-stroke_sunSpoke-northWest"], ["d", "M71.997,54h-3.999c-1.104,0-1.999,0.896-1.999,2s0.896,2,1.999,2h3.999c1.104,0,2-0.896,2-2S73.104,54,71.997,54z", 1, "climacon_component", "climacon_component-stroke", "climacon_component-stroke_sunSpoke", "climacon_component-stroke_sunSpoke-west"], ["d", "M50.001,44.002c-6.627,0-11.999,5.371-11.999,11.998c0,1.404,0.254,2.747,0.697,3.999h4.381c-0.683-1.177-1.079-2.54-1.079-3.999c0-4.418,3.582-7.999,8-7.999c4.417,0,7.998,3.581,7.998,7.999c0,1.459-0.396,2.822-1.078,3.999h4.381c0.443-1.252,0.697-2.595,0.697-3.999C61.999,49.373,56.627,44.002,50.001,44.002z", 1, "climacon_component", "climacon_component-stroke", "climacon_component-stroke_sunBody"], [1, "climacon_wrapperComponent", "climacon_wrapperComponent-arrow"], ["d", "M50.001,63.046c0.552,0,0.999-0.447,0.999-1v-3.827l2.536,2.535c0.39,0.391,1.022,0.391,1.414,0c0.39-0.391,0.39-1.023,0-1.414l-4.242-4.242c-0.391-0.391-1.024-0.391-1.414,0l-4.242,4.242c-0.391,0.391-0.391,1.023,0,1.414c0.391,0.391,1.023,0.391,1.414,0l2.535-2.535v3.827C49.001,62.599,49.448,63.046,50.001,63.046z", 1, "climacon_component", "climacon_component-stroke", "climacon_component-stroke_arrow", "climacon_component-stroke_arrow-up"], [1, "climacon_wrapperComponent", "climacon_wrapperComponent-horizonLine"], ["d", "M59.999,63.999H40.001c-1.104,0-1.999,0.896-1.999,2s0.896,1.999,1.999,1.999h19.998c1.104,0,2-0.895,2-1.999S61.104,63.999,59.999,63.999z", 1, "climacon_component", "climacon_component-stroke", "climacon_component-stroke_horizonLine"], ["id", "sunriseFill", "version", "1.1", "viewBox", "15 15 70 70", 1, "climacon", "climacon_sunriseFill"], [1, "climacon_iconWrap", "climacon_iconWrap-sunriseFill"], ["d", "M71.997,57.999h-3.998c-1.104,0-2-0.896-2-1.999s0.896-2,2-2h3.998c1.104,0,2,0.896,2,2S73.104,57.999,71.997,57.999z", 1, "climacon_component", "climacon_component-stroke", "climacon_component-stroke_sunSpoke", "climacon_component-stroke_sunSpoke-east"], ["d", "M64.143,44.688c-0.781,0.781-2.05,0.781-2.828,0c-0.781-0.781-0.781-2.047,0-2.828l2.828-2.828c0.778-0.781,2.047-0.781,2.828,0c0.778,0.781,0.778,2.047,0,2.828L64.143,44.688z", 1, "climacon_component", "climacon_component-stroke", "climacon_component-stroke_sunSpoke", "climacon_component-stroke_sunSpoke-east"], ["d", "M50.001,40.002c-1.105,0-2-0.896-2-2v-3.999c0-1.104,0.895-2,2-2c1.104,0,2,0.896,2,2v3.999C52.001,39.106,51.104,40.002,50.001,40.002z", 1, "climacon_component", "climacon_component-stroke", "climacon_component-stroke_sunSpoke", "climacon_component-stroke_sunSpoke-east"], ["d", "M35.86,44.688l-2.828-2.828c-0.781-0.781-0.781-2.047,0-2.828c0.781-0.781,2.047-0.781,2.828,0l2.828,2.828c0.781,0.781,0.781,2.047,0,2.828C37.907,45.469,36.641,45.469,35.86,44.688z", 1, "climacon_component", "climacon_component-stroke", "climacon_component-stroke_sunSpoke", "climacon_component-stroke_sunSpoke-east"], ["d", "M34.002,56c0,1.104-0.896,1.999-2,1.999h-4c-1.104,0-1.999-0.896-1.999-1.999s0.896-2,1.999-2h4C33.107,54,34.002,54.896,34.002,56z", 1, "climacon_component", "climacon_component-stroke", "climacon_component-stroke_sunSpoke", "climacon_component-stroke_sunSpoke-east"], ["cx", "50.001", "cy", "56", "r", "11.999", 1, "climacon_component", "climacon_component-stroke", "climacon_component-stroke_sunBody"], ["fill", "#FFFFFF", "cx", "50.001", "cy", "56", "r", "7.999", 1, "climacon_component", "climacon_component-fill", "climacon_component-fill_sunBody"], ["id", "sunset", "version", "1.1", "viewBox", "15 15 70 70", 1, "climacon", "climacon_sunset"], [1, "climacon_iconWrap", "climacon_iconWrap-sunset"], [1, "climacon_componentWrap", "climacon_componentWrap-sunset"], ["d", "M50,49.107c0.552,0,1,0.448,1,1.002v3.83l2.535-2.535c0.391-0.391,1.022-0.391,1.414,0c0.391,0.391,0.391,1.023,0,1.414l-4.242,4.242c-0.392,0.391-1.022,0.391-1.414,0l-4.242-4.242c-0.391-0.391-0.391-1.023,0-1.414c0.392-0.391,1.023-0.391,1.414,0L49,53.939v-3.83C49,49.555,49.447,49.107,50,49.107z", 1, "climacon_component", "climacon_component-stroke", "climacon_component-stroke_arrow", "climacon_component-stroke_arrow-down"], ["id", "sunsetFill", "version", "1.1", "viewBox", "15 15 70 70", 1, "climacon", "climacon_sunsetFill"], [1, "climacon_iconWrap", "climacon_iconWrap-sunsetFill"], [1, "climacon_componentWrap", "climacon_componentWrap-sunsetFill"], ["d", "M71.997,57.999h-3.998c-1.104,0-2-0.896-2-1.999s0.896-2,2-2h3.998c1.104,0,2,0.896,2,2S73.104,57.999,71.997,57.999z", 1, "climacon_component", "climacon_component-stroke", "climacon_component-stroke_sunSpoke", "climacon_component-stroke_sunSpoke-west"], ["d", "M64.143,44.688c-0.781,0.781-2.05,0.781-2.828,0c-0.781-0.781-0.781-2.047,0-2.828l2.828-2.828c0.778-0.781,2.047-0.781,2.828,0c0.778,0.781,0.778,2.047,0,2.828L64.143,44.688z", 1, "climacon_component", "climacon_component-stroke", "climacon_component-stroke_sunSpoke", "climacon_component-stroke_sunSpoke-northWest"], ["d", "M50.001,40.002c-1.105,0-2-0.896-2-2v-3.999c0-1.104,0.895-2,2-2c1.104,0,2,0.896,2,2v3.999C52.001,39.106,51.104,40.002,50.001,40.002z", 1, "climacon_component", "climacon_component-stroke", "climacon_component-stroke_sunSpoke", "climacon_component-stroke_sunSpoke-north"], ["d", "M35.86,44.688l-2.828-2.828c-0.781-0.781-0.781-2.047,0-2.828c0.781-0.781,2.047-0.781,2.828,0l2.828,2.828c0.781,0.781,0.781,2.047,0,2.828C37.907,45.469,36.641,45.469,35.86,44.688z", 1, "climacon_component", "climacon_component-stroke", "climacon_component-stroke_sunSpoke", "climacon_component-stroke_sunSpoke-northEast"], ["id", "sunriseAlt", "version", "1.1", "viewBox", "15 15 70 70", 1, "climacon", "climacon_sunriseAlt"], ["id", "sunriseClip"], ["x", "15", "y", "15", "width", "70", "height", "45"], [1, "climacon_iconWrap", "climacon_iconWrap-sunriseAlt"], ["clip-path", "url(#sunriseClip)"], [1, "climacon_componentWrap", "climacon_componentWrap-sunriseAlt"], ["d", "M71.997,74.002h-3.999c-1.104,0-2-0.896-2-2c0-1.105,0.896-2,2-2h3.999c1.104,0,2,0.895,2,2C73.997,73.105,73.104,74.002,71.997,74.002z", 1, "climacon_component", "climacon_component-stroke", "climacon_component-stroke_sunSpoke", "climacon_component-stroke_sunSpoke-east"], ["d", "M64.141,60.689c-0.781,0.78-2.048,0.78-2.828,0c-0.779-0.781-0.779-2.047,0-2.828l2.828-2.828c0.78-0.78,2.047-0.78,2.828,0c0.78,0.781,0.78,2.047,0,2.828L64.141,60.689z", 1, "climacon_component", "climacon_component-stroke", "climacon_component-stroke_sunSpoke", "climacon_component-stroke_sunSpoke-east"], ["d", "M50,56.003c-1.104,0-1.999-0.896-1.999-2v-3.999c0-1.104,0.896-2,1.999-2s2,0.896,2,2v3.999C52,55.107,51.104,56.003,50,56.003z", 1, "climacon_component", "climacon_component-stroke", "climacon_component-stroke_sunSpoke", "climacon_component-stroke_sunSpoke-east"], ["d", "M35.86,60.689l-2.828-2.828c-0.781-0.781-0.781-2.047,0-2.828c0.78-0.78,2.047-0.78,2.828,0l2.828,2.828c0.78,0.781,0.78,2.047,0,2.828C37.907,61.47,36.641,61.47,35.86,60.689z", 1, "climacon_component", "climacon_component-stroke", "climacon_component-stroke_sunSpoke", "climacon_component-stroke_sunSpoke-east"], ["d", "M34.002,72.002c0,1.104-0.896,2-1.999,2h-4c-1.104,0-2-0.896-2-2c0-1.105,0.896-2,2-2h4C33.106,70.002,34.002,70.896,34.002,72.002z", 1, "climacon_component", "climacon_component-stroke", "climacon_component-stroke_sunSpoke", "climacon_component-stroke_sunSpoke-east"], ["d", "M61.302,76h-4.381c0.683-1.176,1.078-2.539,1.078-3.998c0-4.418-3.581-8-7.999-8c-4.417,0-7.999,3.582-7.999,8c0,1.459,0.396,2.822,1.079,3.998h-4.381c-0.444-1.252-0.698-2.594-0.698-3.998c0-6.627,5.373-11.999,11.999-11.999c6.627,0,11.999,5.371,11.999,11.999C61.999,73.406,61.745,74.748,61.302,76z", 1, "climacon_component", "climacon_component-stroke", "climacon_component-stroke_sunBody"], ["d", "M40.001,63.998h19.998c1.104,0,2,0.896,2,2c0,1.105-0.896,2-2,2H40.001c-1.104,0-2-0.895-2-2C38.001,64.895,38.897,63.998,40.001,63.998z", 1, "climacon_component", "climacon_component-stroke", "climacon_component-stroke_horizonLine"], ["id", "sunriseAltFill", "version", "1.1", "viewBox", "15 15 70 70", 1, "climacon", "climacon_sunriseAltFill"], ["id", "sunriseFillClip"], ["x", "15", "y", "15", "width", "70", "height", "48.999"], [1, "climacon_iconWrap", "climacon_iconWrap-sunriseAltFill"], ["clip-path", "url(#sunriseFillClip)"], ["d", "M72.31,77.999h-3.998c-1.104,0-2-0.896-2-1.999s0.896-2,2-2h3.998c1.104,0,2,0.896,2,2S73.416,77.999,72.31,77.999z", 1, "climacon_component", "climacon_component-stroke", "climacon_component-stroke_sunSpoke", "climacon_component-stroke_sunSpoke-east"], ["d", "M64.455,64.688c-0.781,0.781-2.05,0.781-2.828,0c-0.781-0.78-0.781-2.047,0-2.828l2.828-2.827c0.778-0.781,2.047-0.781,2.828,0c0.778,0.78,0.778,2.047,0,2.827L64.455,64.688z", 1, "climacon_component", "climacon_component-stroke", "climacon_component-stroke_sunSpoke", "climacon_component-stroke_sunSpoke-east"], ["d", "M50.313,60.002c-1.104,0-2-0.896-2-2v-3.999c0-1.104,0.896-2,2-2s2,0.896,2,2v3.999C52.313,59.105,51.416,60.002,50.313,60.002z", 1, "climacon_component", "climacon_component-stroke", "climacon_component-stroke_sunSpoke", "climacon_component-stroke_sunSpoke-east"], ["d", "M36.172,64.688l-2.828-2.828c-0.781-0.78-0.781-2.047,0-2.827c0.781-0.781,2.047-0.781,2.828,0L39,61.859c0.781,0.781,0.781,2.048,0,2.828C38.22,65.469,36.954,65.469,36.172,64.688z", 1, "climacon_component", "climacon_component-stroke", "climacon_component-stroke_sunSpoke", "climacon_component-stroke_sunSpoke-east"], ["d", "M34.314,76c0,1.104-0.896,1.999-2,1.999h-4c-1.104,0-1.999-0.896-1.999-1.999s0.896-2,1.999-2h4C33.419,74,34.314,74.896,34.314,76z", 1, "climacon_component", "climacon_component-stroke", "climacon_component-stroke_sunSpoke", "climacon_component-stroke_sunSpoke-east"], ["cx", "50.313", "cy", "76", "r", "11.999", 1, "climacon_component", "climacon_component-stroke", "climacon_component-stroke_sunBody"], ["fill", "#FFFFFF", "cx", "50.001", "cy", "76", "r", "7.999", 1, "climacon_component", "climacon_component-fill", "climacon_component-fill_sunBody"], ["id", "sunsetAltfill", "version", "1.1", "viewBox", "15 15 70 70", 1, "climacon", "climacon_sunsetAlt"], ["id", "sunriseClipfill"], [1, "climacon_iconWrap", "climacon_iconWrap-sunsetAlt"], [1, "climacon_componentWrap", "climacon_componentWrap-sunsetAlt"], ["id", "sunsetAltFill", "version", "1.1", "viewBox", "15 15 70 70", 1, "climacon", "climacon_sunsetAltFill"], ["id", "sunriseFillClipfill"], [1, "climacon_iconWrap", "climacon_iconWrap-sunsetAltFill"], [1, "climacon_componentWrap", "climacon_componentWrap-sunset", "climacon_componentWrap-sunsetAlt"], ["d", "M64.455,64.688c-0.781,0.781-2.05,0.781-2.828,0c-0.781-0.78-0.781-2.047,0-2.828l2.828-2.827c0.778-0.781,2.047-0.781,2.828,0c0.778,0.78,0.778,2.047,0,2.827L64.455,64.688z", 1, "climacon_component", "climacon_component-stroke", "climacon_component-stroke_sunSpoke", "climacon_component-stroke_sunSpoke-northEast"], ["d", "M50.313,60.002c-1.104,0-2-0.896-2-2v-3.999c0-1.104,0.896-2,2-2s2,0.896,2,2v3.999C52.313,59.105,51.416,60.002,50.313,60.002z", 1, "climacon_component", "climacon_component-stroke", "climacon_component-stroke_sunSpoke", "climacon_component-stroke_sunSpoke-north"], ["d", "M36.172,64.688l-2.828-2.828c-0.781-0.78-0.781-2.047,0-2.827c0.781-0.781,2.047-0.781,2.828,0L39,61.859c0.781,0.781,0.781,2.048,0,2.828C38.22,65.469,36.954,65.469,36.172,64.688z", 1, "climacon_component", "climacon_component-stroke", "climacon_component-stroke_sunSpoke", "climacon_component-stroke_sunSpoke-northWest"], ["d", "M34.314,76c0,1.104-0.896,1.999-2,1.999h-4c-1.104,0-1.999-0.896-1.999-1.999s0.896-2,1.999-2h4C33.419,74,34.314,74.896,34.314,76z", 1, "climacon_component", "climacon_component-stroke", "climacon_component-stroke_sunSpoke", "climacon_component-stroke_sunSpoke-west"]],
    template: function WeatherIconComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Whether Icons With Animations");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6)(8, "div", 7)(9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "svg", 9)(11, "clippath", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "path", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "g", 12)(14, "g", 13)(15, "g", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "path", 15)(17, "path", 16)(18, "path", 17)(19, "path", 18)(20, "path", 19)(21, "path", 20)(22, "path", 21)(23, "path", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "g", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "circle", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "svg", 25)(28, "g", 26)(29, "g", 13)(30, "g", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "path", 15)(32, "path", 16)(33, "path", 17)(34, "path", 18)(35, "path", 19)(36, "path", 20)(37, "path", 21)(38, "path", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "g", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "circle", 24)(41, "circle", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "svg", 29)(44, "clippath", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "path", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "g", 32)(47, "g", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "path", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "svg", 35)(51, "g", 36)(52, "g", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "path", 34)(54, "path", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "svg", 39)(57, "clippath", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "path", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "g", 42)(60, "g", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "path", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "svg", 45)(64, "g", 46)(65, "g", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "path", 44)(67, "circle", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "svg", 49)(70, "g", 50)(71, "g", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "path", 52)(73, "path", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "svg", 54)(76, "g", 55)(77, "g", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "path", 57)(79, "path", 58)(80, "path", 59)(81, "path", 60)(82, "path", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "svg", 62)(85, "clippath", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "path", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "g", 65)(88, "g", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "path", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "svg", 68)(92, "g", 65)(93, "g", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "path", 67)(95, "path", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "svg", 71)(98, "clippath", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "path", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "clippath", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "path", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "g", 75)(103, "g", 76)(104, "g", 77)(105, "g", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "path", 79)(107, "path", 80)(108, "path", 81)(109, "path", 82)(110, "path", 83)(111, "path", 84)(112, "path", 85)(113, "path", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "g", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](115, "circle", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "g", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](117, "path", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "svg", 91)(120, "g", 92)(121, "g", 77)(122, "g", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](123, "path", 93)(124, "path", 80)(125, "path", 81)(126, "path", 82)(127, "path", 83)(128, "path", 84)(129, "path", 85)(130, "path", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "g", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](132, "circle", 88)(133, "circle", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "g", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](135, "path", 90)(136, "path", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "svg", 98)(139, "clippath", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](140, "path", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "clippath", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](142, "path", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "g", 102)(144, "g", 76)(145, "g", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](146, "path", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "g", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](148, "path", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "svg", 105)(151, "g", 106)(152, "g", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](153, "path", 104)(154, "path", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "g", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](156, "path", 90)(157, "path", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "svg", 109)(160, "g", 110)(161, "g", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](162, "path", 112)(163, "path", 113)(164, "path", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "g", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](166, "path", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "svg", 116)(169, "g", 117)(170, "g", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](171, "path", 112)(172, "path", 113)(173, "path", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "g", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](175, "path", 67)(176, "path", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "svg", 118)(179, "clippath", 119);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](180, "path", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "clippath", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](182, "path", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "clippath", 121);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](184, "path", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "g", 123)(186, "g", 124)(187, "g", 77)(188, "g", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](189, "path", 93)(190, "path", 80)(191, "path", 81)(192, "path", 82)(193, "path", 83)(194, "path", 84)(195, "path", 85)(196, "path", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "g", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](198, "circle", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "g", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](200, "path", 112)(201, "path", 113)(202, "path", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "g", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](204, "path", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "svg", 125)(207, "g", 126)(208, "g", 77)(209, "g", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](210, "path", 93)(211, "path", 80)(212, "path", 81)(213, "path", 82)(214, "path", 83)(215, "path", 84)(216, "path", 85)(217, "path", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "g", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](219, "circle", 88)(220, "circle", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "g", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](222, "path", 112)(223, "path", 113)(224, "path", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "g", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](226, "path", 67)(227, "path", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "svg", 127)(230, "clippath", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](231, "path", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "clippath", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](233, "path", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "g", 130)(235, "g", 76)(236, "g", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](237, "path", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "g", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](239, "path", 112)(240, "path", 113)(241, "path", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "g", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](243, "path", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "svg", 131)(246, "g", 132)(247, "g", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](248, "path", 104)(249, "path", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "g", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](251, "path", 112)(252, "path", 113)(253, "path", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "g", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](255, "path", 67)(256, "path", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](257, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "svg", 133)(259, "g", 134)(260, "g", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](261, "path", 135)(262, "path", 136)(263, "path", 137);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](264, "g", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](265, "path", 138);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](266, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](267, "svg", 139)(268, "g", 140)(269, "g", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](270, "path", 141)(271, "path", 136)(272, "path", 137);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](273, "g", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](274, "path", 67)(275, "path", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](276, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](277, "svg", 142)(278, "clippath", 143);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](279, "path", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](280, "clippath", 144);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](281, "path", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](282, "g", 145)(283, "g", 124)(284, "g", 77)(285, "g", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](286, "path", 93)(287, "path", 80)(288, "path", 81)(289, "path", 82)(290, "path", 83)(291, "path", 84)(292, "path", 85)(293, "path", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](294, "g", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](295, "circle", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](296, "g", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](297, "path", 146)(298, "path", 136)(299, "path", 137);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](300, "g", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](301, "path", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](302, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](303, "svg", 147)(304, "g", 148)(305, "g", 77)(306, "g", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](307, "path", 93)(308, "path", 80)(309, "path", 81)(310, "path", 82)(311, "path", 83)(312, "path", 84)(313, "path", 85)(314, "path", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](315, "g", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](316, "circle", 88)(317, "circle", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](318, "g", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](319, "path", 149)(320, "path", 136)(321, "path", 137);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](322, "g", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](323, "path", 67)(324, "path", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](325, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](326, "svg", 150)(327, "clippath", 151);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](328, "path", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](329, "clippath", 152);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](330, "path", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](331, "g", 153)(332, "g", 76)(333, "g", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](334, "path", 154);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](335, "g", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](336, "path", 155)(337, "path", 136)(338, "path", 137);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](339, "g", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](340, "path", 138);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](341, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](342, "svg", 156)(343, "g", 157)(344, "g", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](345, "path", 154)(346, "path", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](347, "g", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](348, "path", 158)(349, "path", 136)(350, "path", 137);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](351, "g", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](352, "path", 67)(353, "path", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](354, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](355, "svg", 159)(356, "clippath", 160);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](357, "path", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](358, "g", 161)(359, "g", 162);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](360, "path", 163)(361, "path", 164)(362, "path", 165)(363, "path", 163)(364, "path", 164)(365, "path", 165);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](366, "g", 166);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](367, "path", 167);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](368, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](369, "svg", 168)(370, "g", 169)(371, "g", 162);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](372, "path", 163)(373, "path", 164)(374, "path", 165)(375, "path", 163)(376, "path", 164)(377, "path", 165);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](378, "g", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](379, "path", 67)(380, "path", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](381, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](382, "svg", 170)(383, "clippath", 171);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](384, "path", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](385, "clippath", 172);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](386, "path", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](387, "clippath", 173);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](388, "path", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](389, "g", 174)(390, "g", 124)(391, "g", 77)(392, "g", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](393, "path", 93)(394, "path", 80)(395, "path", 81)(396, "path", 82)(397, "path", 83)(398, "path", 84)(399, "path", 85)(400, "path", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](401, "g", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](402, "circle", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](403, "g", 162);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](404, "path", 163)(405, "path", 164)(406, "path", 165)(407, "path", 163)(408, "path", 164)(409, "path", 165);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](410, "g", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](411, "path", 167);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](412, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](413, "svg", 175)(414, "g", 176)(415, "g", 77)(416, "g", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](417, "path", 93)(418, "path", 80)(419, "path", 81)(420, "path", 82)(421, "path", 83)(422, "path", 84)(423, "path", 85)(424, "path", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](425, "g", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](426, "circle", 88)(427, "circle", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](428, "g", 162);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](429, "path", 163)(430, "path", 164)(431, "path", 165)(432, "path", 163)(433, "path", 164)(434, "path", 165);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](435, "g", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](436, "path", 67)(437, "path", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](438, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](439, "svg", 177)(440, "clippath", 178);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](441, "path", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](442, "clippath", 179);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](443, "path", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](444, "g", 180)(445, "g", 76)(446, "g", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](447, "path", 154);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](448, "g", 162);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](449, "path", 163)(450, "path", 164)(451, "path", 165)(452, "path", 163)(453, "path", 164)(454, "path", 165);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](455, "g", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](456, "path", 138);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](457, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](458, "svg", 181)(459, "g", 182)(460, "g", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](461, "path", 154)(462, "path", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](463, "g", 162);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](464, "path", 163)(465, "path", 164)(466, "path", 165)(467, "path", 163)(468, "path", 164)(469, "path", 165);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](470, "g", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](471, "path", 67)(472, "path", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](473, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](474, "svg", 183)(475, "clippath", 184);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](476, "path", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](477, "g", 185)(478, "g", 186);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](479, "path", 187)(480, "path", 187);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](481, "g", 166);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](482, "path", 188);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](483, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](484, "svg", 189)(485, "g", 190)(486, "g", 186);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](487, "path", 187)(488, "path", 187);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](489, "g", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](490, "path", 67)(491, "path", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](492, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](493, "svg", 191)(494, "clippath", 192);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](495, "path", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](496, "clippath", 193);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](497, "path", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](498, "clippath", 194);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](499, "path", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](500, "g", 195)(501, "g", 124)(502, "g", 77)(503, "g", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](504, "path", 93)(505, "path", 80)(506, "path", 81)(507, "path", 82)(508, "path", 83)(509, "path", 84)(510, "path", 85)(511, "path", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](512, "g", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](513, "circle", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](514, "g", 186);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](515, "path", 187)(516, "path", 187);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](517, "g", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](518, "path", 188);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](519, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](520, "svg", 196)(521, "g", 197)(522, "g", 77)(523, "g", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](524, "path", 93)(525, "path", 80)(526, "path", 81)(527, "path", 82)(528, "path", 83)(529, "path", 84)(530, "path", 85)(531, "path", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](532, "g", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](533, "circle", 88)(534, "circle", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](535, "g", 186);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](536, "path", 187)(537, "path", 187);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](538, "g", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](539, "path", 67)(540, "path", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](541, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](542, "svg", 198)(543, "clippath", 199);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](544, "path", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](545, "clippath", 200);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](546, "path", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](547, "g", 201)(548, "g", 76)(549, "g", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](550, "path", 154);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](551, "g", 186);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](552, "path", 187)(553, "path", 187);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](554, "g", 166);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](555, "path", 188);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](556, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](557, "svg", 202)(558, "g", 195)(559, "g", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](560, "path", 154)(561, "path", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](562, "g", 186);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](563, "path", 187)(564, "path", 187);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](565, "g", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](566, "path", 67)(567, "path", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](568, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](569, "svg", 203)(570, "g", 204)(571, "g", 205)(572, "g", 206);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](573, "circle", 207);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](574, "g", 208);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](575, "circle", 209);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](576, "g", 210);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](577, "circle", 211);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](578, "g", 206);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](579, "circle", 207);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](580, "g", 208);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](581, "circle", 209);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](582, "g", 210);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](583, "circle", 211);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](584, "g", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](585, "path", 212);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](586, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](587, "svg", 213)(588, "g", 214)(589, "g", 205)(590, "g", 206);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](591, "circle", 207);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](592, "g", 208);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](593, "circle", 209);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](594, "g", 210);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](595, "circle", 211);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](596, "g", 206);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](597, "circle", 207);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](598, "g", 208);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](599, "circle", 209);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](600, "g", 210);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](601, "circle", 211);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](602, "g", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](603, "path", 67)(604, "path", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](605, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](606, "svg", 215)(607, "clippath", 216);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](608, "path", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](609, "clippath", 217);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](610, "path", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](611, "clippath", 218);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](612, "path", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](613, "g", 219)(614, "g", 124)(615, "g", 77)(616, "g", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](617, "path", 93)(618, "path", 80)(619, "path", 81)(620, "path", 82)(621, "path", 83)(622, "path", 84)(623, "path", 85)(624, "path", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](625, "g", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](626, "circle", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](627, "g", 205)(628, "g", 206);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](629, "circle", 207);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](630, "g", 208);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](631, "circle", 209);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](632, "g", 210);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](633, "circle", 211);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](634, "g", 206);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](635, "circle", 207);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](636, "g", 208);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](637, "circle", 209);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](638, "g", 210);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](639, "circle", 211);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](640, "g", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](641, "path", 212);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](642, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](643, "svg", 220)(644, "g", 219)(645, "g", 77)(646, "g", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](647, "path", 93)(648, "path", 80)(649, "path", 81)(650, "path", 82)(651, "path", 83)(652, "path", 84)(653, "path", 85)(654, "path", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](655, "g", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](656, "circle", 88)(657, "circle", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](658, "g", 205)(659, "g", 206);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](660, "circle", 207);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](661, "g", 208);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](662, "circle", 209);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](663, "g", 210);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](664, "circle", 211);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](665, "g", 206);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](666, "circle", 207);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](667, "g", 208);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](668, "circle", 209);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](669, "g", 210);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](670, "circle", 211);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](671, "g", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](672, "path", 67)(673, "path", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](674, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](675, "svg", 221)(676, "clippath", 222);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](677, "path", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](678, "clippath", 223);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](679, "path", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](680, "g", 224)(681, "g", 76)(682, "g", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](683, "path", 154)(684, "path", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](685, "g", 205)(686, "g", 206);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](687, "circle", 207);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](688, "g", 208);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](689, "circle", 209);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](690, "g", 210);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](691, "circle", 211);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](692, "g", 206);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](693, "circle", 207);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](694, "g", 208);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](695, "circle", 209);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](696, "g", 210);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](697, "circle", 211);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](698, "g", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](699, "path", 212);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](700, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](701, "svg", 225)(702, "g", 224)(703, "g", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](704, "path", 154)(705, "path", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](706, "g", 205)(707, "g", 206);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](708, "circle", 207);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](709, "g", 208);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](710, "circle", 209);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](711, "g", 210);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](712, "circle", 211);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](713, "g", 206);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](714, "circle", 207);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](715, "g", 208);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](716, "circle", 209);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](717, "g", 210);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](718, "circle", 211);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](719, "g", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](720, "path", 67)(721, "path", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](722, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](723, "svg", 226)(724, "g", 227)(725, "g", 228);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](726, "circle", 229)(727, "circle", 230)(728, "circle", 231);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](729, "g", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](730, "path", 232);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](731, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](732, "svg", 233)(733, "g", 234)(734, "g", 235);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](735, "circle", 229)(736, "circle", 230)(737, "circle", 231);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](738, "g", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](739, "path", 67)(740, "path", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](741, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](742, "svg", 236)(743, "clippath", 237);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](744, "path", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](745, "clippath", 238);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](746, "path", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](747, "clippath", 239);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](748, "path", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](749, "g", 240)(750, "g", 124)(751, "g", 77)(752, "g", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](753, "path", 93)(754, "path", 80)(755, "path", 81)(756, "path", 82)(757, "path", 83)(758, "path", 84)(759, "path", 85)(760, "path", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](761, "g", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](762, "circle", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](763, "g", 235);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](764, "circle", 229)(765, "circle", 230)(766, "circle", 231);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](767, "g", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](768, "path", 232);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](769, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](770, "svg", 241)(771, "g", 242)(772, "g", 77)(773, "g", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](774, "path", 93)(775, "path", 80)(776, "path", 81)(777, "path", 82)(778, "path", 83)(779, "path", 84)(780, "path", 85)(781, "path", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](782, "g", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](783, "circle", 88)(784, "circle", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](785, "g", 235);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](786, "circle", 229)(787, "circle", 230)(788, "circle", 231);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](789, "g", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](790, "path", 67)(791, "path", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](792, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](793, "svg", 243)(794, "clippath", 244);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](795, "path", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](796, "clippath", 245);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](797, "path", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](798, "g", 246)(799, "g", 76)(800, "g", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](801, "path", 154);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](802, "g", 235);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](803, "circle", 229)(804, "circle", 230)(805, "circle", 231);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](806, "g", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](807, "path", 232);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](808, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](809, "svg", 247)(810, "g", 248)(811, "g", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](812, "path", 154)(813, "path", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](814, "g", 235);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](815, "circle", 229)(816, "circle", 230)(817, "circle", 231);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](818, "g", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](819, "path", 67)(820, "path", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](821, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](822, "svg", 249)(823, "clippath", 250);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](824, "path", 251);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](825, "g", 252)(826, "g", 253)(827, "g", 254);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](828, "path", 255);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](829, "g", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](830, "path", 256);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](831, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](832, "svg", 257)(833, "g", 258)(834, "g", 253)(835, "g", 259);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](836, "path", 255)(837, "circle", 260);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](838, "g", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](839, "path", 67)(840, "path", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](841, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](842, "svg", 261)(843, "clippath", 262);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](844, "path", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](845, "clippath", 263);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](846, "path", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](847, "clippath", 264);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](848, "path", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](849, "clippath", 265);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](850, "path", 251);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](851, "g", 266)(852, "g", 124)(853, "g", 77)(854, "g", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](855, "path", 93)(856, "path", 80)(857, "path", 81)(858, "path", 82)(859, "path", 83)(860, "path", 84)(861, "path", 85)(862, "path", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](863, "g", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](864, "circle", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](865, "g", 253)(866, "g", 254);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](867, "path", 255);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](868, "g", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](869, "path", 256);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](870, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](871, "svg", 267)(872, "g", 268)(873, "g", 77)(874, "g", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](875, "path", 93)(876, "path", 80)(877, "path", 81)(878, "path", 82)(879, "path", 83)(880, "path", 84)(881, "path", 85)(882, "path", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](883, "g", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](884, "circle", 88)(885, "circle", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](886, "g", 253)(887, "g", 259);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](888, "path", 255)(889, "circle", 260);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](890, "g", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](891, "path", 67)(892, "path", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](893, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](894, "svg", 269)(895, "clippath", 270);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](896, "path", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](897, "clippath", 271);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](898, "path", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](899, "clippath", 272);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](900, "path", 251);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](901, "g", 252)(902, "g", 76)(903, "g", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](904, "path", 154);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](905, "g", 253)(906, "g", 254);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](907, "path", 255);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](908, "g", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](909, "path", 256);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](910, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](911, "svg", 273)(912, "g", 258)(913, "g", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](914, "path", 154)(915, "path", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](916, "g", 253)(917, "g", 259);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](918, "path", 255)(919, "circle", 260);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](920, "g", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](921, "path", 67)(922, "path", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](923, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](924, "svg", 274)(925, "g", 275)(926, "g", 276);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](927, "path", 277)(928, "path", 278)(929, "path", 279);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](930, "g", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](931, "path", 280);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](932, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](933, "svg", 281)(934, "g", 275)(935, "g", 276);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](936, "path", 277)(937, "path", 278)(938, "path", 279);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](939, "g", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](940, "path", 280)(941, "path", 282)(942, "path", 283);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](943, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](944, "svg", 284)(945, "clippath", 285);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](946, "path", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](947, "clippath", 286);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](948, "path", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](949, "clippath", 287);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](950, "path", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](951, "g", 288)(952, "g", 124)(953, "g", 77)(954, "g", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](955, "path", 93)(956, "path", 80)(957, "path", 81)(958, "path", 82)(959, "path", 83)(960, "path", 84)(961, "path", 85)(962, "path", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](963, "g", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](964, "circle", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](965, "g", 276);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](966, "path", 277)(967, "path", 278)(968, "path", 279);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](969, "g", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](970, "path", 280);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](971, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](972, "svg", 289)(973, "clippath", 290);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](974, "path", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](975, "clippath", 291);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](976, "path", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](977, "clippath", 292);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](978, "path", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](979, "g", 293)(980, "g", 124)(981, "g", 77)(982, "g", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](983, "path", 93)(984, "path", 80)(985, "path", 81)(986, "path", 82)(987, "path", 83)(988, "path", 84)(989, "path", 85)(990, "path", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](991, "g", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](992, "circle", 88)(993, "circle", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](994, "g", 276);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](995, "path", 277)(996, "path", 278)(997, "path", 279);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](998, "g", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](999, "path", 280)(1000, "path", 282)(1001, "path", 283);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1002, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1003, "svg", 294)(1004, "clippath", 295);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1005, "path", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1006, "clippath", 296);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1007, "path", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1008, "g", 297)(1009, "g", 76)(1010, "g", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1011, "path", 154);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1012, "g", 276);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1013, "path", 277)(1014, "path", 278)(1015, "path", 279);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1016, "g", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1017, "path", 280);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1018, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1019, "svg", 298)(1020, "clippath", 299);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1021, "path", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1022, "g", 300)(1023, "g", 76)(1024, "g", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1025, "path", 154)(1026, "path", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1027, "g", 276);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1028, "path", 277)(1029, "path", 278)(1030, "path", 279);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1031, "g", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1032, "path", 280)(1033, "path", 282)(1034, "path", 283);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1035, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1036, "svg", 301)(1037, "g", 302)(1038, "g", 276);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1039, "path", 303)(1040, "path", 304)(1041, "path", 305)(1042, "path", 306)(1043, "path", 307)(1044, "path", 308)(1045, "path", 309)(1046, "path", 310);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1047, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1048, "svg", 311)(1049, "g", 312)(1050, "g", 276)(1051, "g", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1052, "path", 313);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1053, "path", 303)(1054, "path", 304)(1055, "path", 305)(1056, "path", 306)(1057, "path", 307)(1058, "path", 308)(1059, "path", 309)(1060, "path", 310);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1061, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1062, "svg", 314)(1063, "clippath", 315);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1064, "path", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1065, "clippath", 316);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1066, "path", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1067, "clippath", 317);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1068, "path", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1069, "g", 318)(1070, "g", 124)(1071, "g", 77)(1072, "g", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1073, "path", 93)(1074, "path", 80)(1075, "path", 81)(1076, "path", 82)(1077, "path", 83)(1078, "path", 84)(1079, "path", 85)(1080, "path", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1081, "g", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1082, "circle", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1083, "g", 276);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1084, "path", 303)(1085, "path", 304)(1086, "path", 305)(1087, "path", 306)(1088, "path", 307)(1089, "path", 308)(1090, "path", 309)(1091, "path", 310);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1092, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1093, "svg", 319)(1094, "clippath", 320);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1095, "path", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1096, "g", 318)(1097, "g", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1098, "path", 313);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1099, "g", 124)(1100, "g", 77)(1101, "g", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1102, "path", 93)(1103, "path", 80)(1104, "path", 81)(1105, "path", 82)(1106, "path", 83)(1107, "path", 84)(1108, "path", 85)(1109, "path", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1110, "g", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1111, "circle", 88)(1112, "circle", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1113, "g", 276);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1114, "path", 303)(1115, "path", 304)(1116, "path", 305)(1117, "path", 306)(1118, "path", 307)(1119, "path", 308)(1120, "path", 309)(1121, "path", 310);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1122, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1123, "svg", 321)(1124, "clippath", 322);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1125, "path", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1126, "clippath", 323);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1127, "path", 324);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1128, "g", 297)(1129, "g", 325)(1130, "g", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1131, "path", 154);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1132, "g", 276);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1133, "path", 303)(1134, "path", 304)(1135, "path", 305)(1136, "path", 306)(1137, "path", 307)(1138, "path", 308)(1139, "path", 309)(1140, "path", 310);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1141, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1142, "svg", 326)(1143, "clippath", 327);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1144, "path", 324);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1145, "g", 328)(1146, "g", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1147, "path", 313);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1148, "g", 276);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1149, "path", 303)(1150, "path", 304)(1151, "path", 305)(1152, "path", 306)(1153, "path", 307)(1154, "path", 308)(1155, "path", 309)(1156, "path", 310);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1157, "g", 325)(1158, "g", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1159, "path", 329)(1160, "path", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1161, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1162, "svg", 330)(1163, "g", 331)(1164, "g", 332);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1165, "polygon", 333);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1166, "g", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1167, "path", 334);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1168, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1169, "svg", 335)(1170, "g", 336)(1171, "g", 332);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1172, "polygon", 333);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1173, "g", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1174, "path", 67)(1175, "path", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1176, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1177, "svg", 337)(1178, "clippath", 338);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1179, "path", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1180, "clippath", 339);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1181, "path", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1182, "clippath", 340);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1183, "path", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1184, "g", 331)(1185, "g", 124)(1186, "g", 77)(1187, "g", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1188, "path", 93)(1189, "path", 80)(1190, "path", 81)(1191, "path", 82)(1192, "path", 83)(1193, "path", 84)(1194, "path", 85)(1195, "path", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1196, "g", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1197, "circle", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1198, "g", 332);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1199, "polygon", 333);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1200, "g", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1201, "path", 334);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1202, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1203, "svg", 341)(1204, "g", 331)(1205, "g", 342)(1206, "g", 77)(1207, "g", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1208, "path", 93)(1209, "path", 80)(1210, "path", 81)(1211, "path", 82)(1212, "path", 83)(1213, "path", 84)(1214, "path", 85)(1215, "path", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1216, "g", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1217, "circle", 88)(1218, "circle", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1219, "g", 332);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1220, "polygon", 333);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1221, "g", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1222, "path", 67)(1223, "path", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1224, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1225, "svg", 343)(1226, "clippath", 344);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1227, "path", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1228, "clippath", 345);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1229, "path", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1230, "g", 346)(1231, "g", 76)(1232, "g", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1233, "path", 154);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1234, "g", 332);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1235, "polygon", 333);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1236, "g", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1237, "path", 334);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1238, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1239, "svg", 347)(1240, "g", 348)(1241, "g", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1242, "path", 154)(1243, "path", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1244, "g", 332);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1245, "polygon", 333);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1246, "g", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1247, "path", 67)(1248, "path", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1249, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1250, "svg", 349)(1251, "g", 350)(1252, "g", 351)(1253, "g", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1254, "path", 352)(1255, "path", 353)(1256, "path", 354)(1257, "path", 355)(1258, "path", 356);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1259, "g", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1260, "path", 357);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1261, "g", 358);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1262, "path", 359);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1263, "g", 360);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1264, "path", 361);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1265, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1266, "svg", 362)(1267, "g", 363)(1268, "g", 351)(1269, "g", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1270, "path", 364)(1271, "path", 365)(1272, "path", 366)(1273, "path", 367)(1274, "path", 368);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1275, "g", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1276, "circle", 369)(1277, "circle", 370);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1278, "g", 358);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1279, "path", 359);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1280, "g", 360);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1281, "path", 361);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1282, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1283, "svg", 371)(1284, "g", 372)(1285, "g", 373)(1286, "g", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1287, "path", 352)(1288, "path", 353)(1289, "path", 354)(1290, "path", 355)(1291, "path", 356);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1292, "g", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1293, "path", 357);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1294, "g", 358);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1295, "path", 374);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1296, "g", 360);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1297, "path", 361);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1298, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1299, "svg", 375)(1300, "g", 376)(1301, "g", 377)(1302, "g", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1303, "path", 378)(1304, "path", 379)(1305, "path", 380)(1306, "path", 381)(1307, "path", 368);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1308, "g", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1309, "circle", 369)(1310, "circle", 370);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1311, "g", 358);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1312, "path", 374);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1313, "g", 360);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1314, "path", 361);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1315, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1316, "svg", 382)(1317, "clippath", 383);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1318, "rect", 384);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1319, "g", 385)(1320, "g", 386)(1321, "g", 387)(1322, "g", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1323, "path", 388)(1324, "path", 389)(1325, "path", 390)(1326, "path", 391)(1327, "path", 392);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1328, "g", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1329, "path", 393);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1330, "g", 360);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1331, "path", 394);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1332, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1333, "svg", 395)(1334, "clippath", 396);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1335, "rect", 397);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1336, "g", 398)(1337, "g", 399)(1338, "g", 387)(1339, "g", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1340, "path", 400)(1341, "path", 401)(1342, "path", 402)(1343, "path", 403)(1344, "path", 404);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1345, "g", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1346, "circle", 405)(1347, "circle", 406);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1348, "g", 360);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1349, "path", 394);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1350, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1351, "svg", 407)(1352, "clippath", 408);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1353, "rect", 384);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1354, "g", 409)(1355, "g", 386)(1356, "g", 410)(1357, "g", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1358, "path", 388)(1359, "path", 389)(1360, "path", 390)(1361, "path", 391)(1362, "path", 392);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1363, "g", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1364, "path", 393);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1365, "g", 360);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1366, "path", 394);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1367, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1368, "svg", 411)(1369, "clippath", 412);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1370, "rect", 397);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1371, "g", 413)(1372, "g", 399)(1373, "g", 414)(1374, "g", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1375, "path", 400)(1376, "path", 415)(1377, "path", 416)(1378, "path", 417)(1379, "path", 418);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1380, "g", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1381, "circle", 405)(1382, "circle", 406);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1383, "g", 360);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1384, "path", 394);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()()();
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ })

}]);
//# sourceMappingURL=src_app_components_icons_icons_module_ts.b8696a5fe06c3da1.js.map