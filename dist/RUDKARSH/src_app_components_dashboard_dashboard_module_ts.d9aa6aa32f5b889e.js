"use strict";
(self["webpackChunkRUDKARSH"] = self["webpackChunkRUDKARSH"] || []).push([["src_app_components_dashboard_dashboard_module_ts"],{

/***/ 13618:
/*!*******************************************************************!*\
  !*** ./src/app/components/dashboard/bitcoin/bitcoin.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BitcoinComponent: () => (/* binding */ BitcoinComponent)
/* harmony export */ });
/* harmony import */ var _shared_data_dashboard_crypto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../shared/data/dashboard/crypto */ 83634);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 76101);
/* harmony import */ var ng_chartist__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-chartist */ 83568);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-charts */ 46673);
/* harmony import */ var _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/feather-icons/feather-icons.component */ 49177);






function BitcoinComponent_ng_template_513_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 154)(1, "table", 155)(2, "thead")(3, "tr")(4, "th", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Market");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "th", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "th", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Change");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "tbody")(11, "tr")(12, "td")(13, "p", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "BTC - 13458");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "td")(16, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "0.002548248");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "td")(19, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "+16.23%");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "app-feather-icons", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "tr")(24, "td")(25, "p", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "BTC - 022157");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "td")(28, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "0.025486854");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "td")(31, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "-05.15%");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](34, "app-feather-icons", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "tr")(36, "td")(37, "p", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "BTC - 11458");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "td")(40, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, "0.002548548");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "td")(43, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, "+16.23%");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "div", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](46, "app-feather-icons", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "tr")(48, "td")(49, "p", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50, "BTC - 12458");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "td")(52, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53, "0.002548548");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "td")(55, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](56, "-18.23%");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "div", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](58, "app-feather-icons", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", "arrow-up");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", "arrow-down");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", "arrow-up");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", "arrow-down");
  }
}
function BitcoinComponent_ng_template_517_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 154)(1, "table", 155)(2, "thead")(3, "tr")(4, "th", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Market");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "th", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "th", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Change");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "tbody")(11, "tr")(12, "td")(13, "p", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "BTC - 12458");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "td")(16, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "0.002548548");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "td")(19, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "+16.23%");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "app-feather-icons", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "tr")(24, "td")(25, "p", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "BTC - 02357");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "td")(28, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "0.025486854");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "td")(31, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "-05.15%");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](34, "app-feather-icons", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "tr")(36, "td")(37, "p", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "BTC - 15458");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "td")(40, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, "0.002548548");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "td")(43, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, "+16.23%");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "div", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](46, "app-feather-icons", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "tr")(48, "td")(49, "p", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50, "BTC - 12468");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "td")(52, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53, "0.002548548");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "td")(55, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](56, "-18.23%");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "div", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](58, "app-feather-icons", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", "arrow-up");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", "arrow-down");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", "arrow-up");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", "arrow-down");
  }
}
function BitcoinComponent_ng_template_521_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 154)(1, "table", 155)(2, "thead")(3, "tr")(4, "th", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Market");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "th", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "th", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Change");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "tbody")(11, "tr")(12, "td")(13, "p", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "BTC - 10458");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "td")(16, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "0.0025453248");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "td")(19, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "+16.23%");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "app-feather-icons", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "tr")(24, "td")(25, "p", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "BTC - 02157");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "td")(28, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "0.025486854");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "td")(31, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "-05.25%");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](34, "app-feather-icons", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "tr")(36, "td")(37, "p", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "BTC - 12458");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "td")(40, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, "0.002548548");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "td")(43, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, "+16.93%");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "div", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](46, "app-feather-icons", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "tr")(48, "td")(49, "p", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50, "BTC - 12498");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "td")(52, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53, "0.002548548");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "td")(55, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](56, "-18.23%");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "div", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](58, "app-feather-icons", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", "arrow-up");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", "arrow-down");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", "arrow-up");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", "arrow-down");
  }
}
function BitcoinComponent_ng_template_525_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 154)(1, "table", 155)(2, "thead")(3, "tr")(4, "th", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Market");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "th", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "th", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Change");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "tbody")(11, "tr")(12, "td")(13, "p", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "BTC - 12458");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "td")(16, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "0.002548548");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "td")(19, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "+16.23%");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "app-feather-icons", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "tr")(24, "td")(25, "p", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "BTC - 02157");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "td")(28, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "0.025486854");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "td")(31, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "-05.15%");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](34, "app-feather-icons", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "tr")(36, "td")(37, "p", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "BTC - 12458");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "td")(40, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, "0.002548548");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "td")(43, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, "+16.23%");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "div", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](46, "app-feather-icons", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "tr")(48, "td")(49, "p", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50, "BTC - 12458");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "td")(52, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53, "0.002548548");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "td")(55, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](56, "-18.23%");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "div", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](58, "app-feather-icons", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", "arrow-up");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", "arrow-down");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", "arrow-up");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", "arrow-down");
  }
}
function BitcoinComponent_ng_template_529_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 154)(1, "table", 155)(2, "thead")(3, "tr")(4, "th", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Market");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "th", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "th", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Change");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "tbody")(11, "tr")(12, "td")(13, "p", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "BTC - 12458");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "td")(16, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "0.002548548");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "td")(19, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "+16.23%");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "app-feather-icons", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "tr")(24, "td")(25, "p", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "BTC - 02157");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "td")(28, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "0.025486854");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "td")(31, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "-05.15%");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](34, "app-feather-icons", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "tr")(36, "td")(37, "p", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "BTC - 12458");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "td")(40, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, "0.002548548");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "td")(43, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, "+16.23%");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "div", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](46, "app-feather-icons", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "tr")(48, "td")(49, "p", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50, "BTC - 12458");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "td")(52, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53, "0.002548548");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "td")(55, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](56, "-18.23%");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "div", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](58, "app-feather-icons", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", "arrow-up");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", "arrow-down");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", "arrow-up");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", "arrow-down");
  }
}
function BitcoinComponent_ng_template_622_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 158)(1, "div")(2, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "BTC/USD");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "24h Change");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "24h Volume");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 159)(9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "11916.9");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "p", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "283.1 USD (+2.33%)");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "p", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "1029.1906 BTC");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 158)(16, "div")(17, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "BTC/EUR");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "24h Change");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "24h Volume");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 159)(24, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "9213.9");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "p", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "200.1 EUR (+2.33%)");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "p", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "1599.1906 BTC");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 158)(31, "div")(32, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "BTC/GBP");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "24h Change");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "24h Volume");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "div", 159)(39, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "1459.9");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "p", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "-283.1 USD (-2.33%)");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "p", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, "350.1906 BTC");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
}
function BitcoinComponent_ng_template_629_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 158)(1, "div")(2, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "BTC/USD");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "24h Change");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "24h Volume");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 159)(9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "11916.9");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "p", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "283.1 USD (+2.33%)");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "p", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "1029.1906 BTC");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 158)(16, "div")(17, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "BTC/EUR");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "24h Change");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "24h Volume");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 159)(24, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "9213.9");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "p", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "200.1 EUR (+2.33%)");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "p", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "1599.1906 BTC");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 158)(31, "div")(32, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "BTC/GBP");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "24h Change");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "24h Volume");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "div", 159)(39, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "1459.9");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "p", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "-283.1 USD (-2.33%)");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "p", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, "350.1906 BTC");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
}
function BitcoinComponent_ng_template_636_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 158)(1, "div")(2, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "BTC/USD");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "24h Change");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "24h Volume");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 159)(9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "11916.9");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "p", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "283.1 USD (+2.33%)");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "p", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "1029.1906 BTC");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 158)(16, "div")(17, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "BTC/EUR");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "24h Change");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "24h Volume");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 159)(24, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "9213.9");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "p", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "200.1 EUR (+2.33%)");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "p", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "1599.1906 BTC");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 158)(31, "div")(32, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "BTC/GBP");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "24h Change");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "24h Volume");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "div", 159)(39, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "1459.9");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "p", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "-283.1 USD (-2.33%)");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "p", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, "350.1906 BTC");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
}
class BitcoinComponent {
  constructor() {
    this.isBTC = false;
    this.isETH = false;
    this.isDASH = false;
    this.active1 = 1;
    this.chart1 = _shared_data_dashboard_crypto__WEBPACK_IMPORTED_MODULE_0__.chart1;
    this.chart2 = _shared_data_dashboard_crypto__WEBPACK_IMPORTED_MODULE_0__.chart2;
    this.chart3 = _shared_data_dashboard_crypto__WEBPACK_IMPORTED_MODULE_0__.chart3;
    this.chart4 = _shared_data_dashboard_crypto__WEBPACK_IMPORTED_MODULE_0__.chart4;
    this.saleChartType = _shared_data_dashboard_crypto__WEBPACK_IMPORTED_MODULE_0__.saleChartType;
    this.saleChartLable = _shared_data_dashboard_crypto__WEBPACK_IMPORTED_MODULE_0__.saleChartLabels;
    this.saleChartData = _shared_data_dashboard_crypto__WEBPACK_IMPORTED_MODULE_0__.saleChartData;
    this.saleChartOption = _shared_data_dashboard_crypto__WEBPACK_IMPORTED_MODULE_0__.saleChartOptions;
    this.saleChartLegend = _shared_data_dashboard_crypto__WEBPACK_IMPORTED_MODULE_0__.saleChartLegend;
    //Invest Chart data and options
    this.doughnutChartLabels = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
    this.doughnutChartDatasets = [{
      data: [40, 8, 10],
      label: 'Series A'
    }];
    this.doughnutChartOptions = {
      responsive: false,
      backgroundColor: ["#4466f2", "#f6f6f6", "#1ea6ec"]
    };
    this.dailyChartLabels = _shared_data_dashboard_crypto__WEBPACK_IMPORTED_MODULE_0__.dailyChartLabels;
    this.dailyChartData = _shared_data_dashboard_crypto__WEBPACK_IMPORTED_MODULE_0__.dailyChartData;
    this.dailyChartColors = _shared_data_dashboard_crypto__WEBPACK_IMPORTED_MODULE_0__.dailyChartColors;
    this.dailyChartType = _shared_data_dashboard_crypto__WEBPACK_IMPORTED_MODULE_0__.dailyChartType;
    this.dailyChartLegend = _shared_data_dashboard_crypto__WEBPACK_IMPORTED_MODULE_0__.dailyChartLegend;
    this.dailyChartOptions = _shared_data_dashboard_crypto__WEBPACK_IMPORTED_MODULE_0__.dailyChartOptions;
  }
  ngOnInit() {}
  static #_ = this.ɵfac = function BitcoinComponent_Factory(t) {
    return new (t || BitcoinComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: BitcoinComponent,
    selectors: [["app-bitcoin"]],
    decls: 672,
    vars: 38,
    consts: [[1, "container-fluid"], [1, "row"], [1, "col-xl-4"], [1, "card"], [1, "card-body"], [1, "d-flex", "bitcoin-graph"], ["src", "assets/images/bitcoin/graph-icon-1.png", "alt", ""], [1, "top-bitcoin"], [1, "flex-grow-1"], [1, "bitcoin-content", "text-end"], [1, "bitcoin-numbers", "d-inline-block"], [1, "mb-0"], [1, "mb-0", "font-primary"], [1, "arrow-down", 3, "icon"], [1, "font-primary", 3, "icon"], [1, "dashboard-chart-container"], [1, "bitcoinchart-1", 3, "configuration"], ["src", "assets/images/bitcoin/graph-icon-2.png", "alt", ""], [1, "bitcoinchart-2", 3, "configuration"], ["src", "assets/images/bitcoin/graph-icon-3.png", "alt", ""], [1, "bitcoinchart-3", 3, "configuration"], [1, "col-xl-4", "xl-100"], [1, "card-header", "b-l-primary"], [1, "market-chart", 3, "configuration"], [1, "col-xl-4", "xl-50"], [1, "col-sm-6"], [1, "bitcoin-header"], [1, "text-end", "right-header-color"], [1, "bitcoin-form"], [1, "col-xl-4", "mb-3", "col-sm-3"], ["for", "validationCustom01", 1, "f-w-600"], [1, "bitcoin-form-dropdown"], ["id", "validationCustom01", 1, "onhover-dropdown"], ["type", "button", 1, "btn", "f-12"], [1, "pe-0"], [1, "fa", "fa-angle-down"], [1, "onhover-show-div"], ["href", "javascript:void(0)", 1, "d-block"], [1, "col-xl-8", "mb-3", "col-sm-9"], ["for", "validationCustomUsername", 1, "f-w-600"], [1, "input-group"], [1, "input-group-prepend"], ["id", "inputGroupPrepend", 1, "input-group-text"], [1, "fa", "fa-btc", "font-primary"], ["id", "validationCustomUsername", "type", "text", "aria-describedby", "inputGroupPrepend", "required", "", 1, "form-control"], [1, "invalid-feedback"], ["for", "validationCustom02", 1, "f-w-600"], ["id", "validationCustom02", 1, "onhover-dropdown"], ["id", "inputGroupPrepend1", 1, "input-group-text"], ["id", "validationCustomUsername1", "type", "text", "aria-describedby", "inputGroupPrepend", "required", "", 1, "form-control"], [1, "col-md-12", "mb-3"], ["id", "inputGroupPrepend2", 1, "input-group-text"], ["id", "validationCustomUsername2", "type", "text", "aria-describedby", "inputGroupPrepend", "required", "", 1, "form-control"], [1, "col-md-12"], [1, "btn-bottom"], ["type", "button", 1, "btn", "btn-primary"], ["for", "validationCustom03", 1, "f-w-600"], ["id", "validationCustom03", 1, "onhover-dropdown"], ["id", "inputGroupPrepend3", 1, "input-group-text"], ["id", "validationCustomUsername3", "type", "text", "aria-describedby", "inputGroupPrepend", "required", "", 1, "form-control"], ["for", "validationCustom04", 1, "f-w-600"], ["id", "validationCustom04", 1, "onhover-dropdown"], ["id", "inputGroupPrepend5", 1, "input-group-text"], ["id", "validationCustomUsername5", "type", "text", "aria-describedby", "inputGroupPrepend", "required", "", 1, "form-control"], ["id", "inputGroupPrepend6", 1, "input-group-text"], ["id", "validationCustomUsername6", "type", "text", "aria-describedby", "inputGroupPrepend", "required", "", 1, "form-control"], [1, "col-xl-8", "xl-50"], [1, "table-responsive", "active-order-table"], [1, "table", "table-bordernone"], ["scope", "col"], ["type", "button", 1, "btn", "btn-primary", "btn-pill"], [1, "customers"], [1, "d-inline-block"], ["src", "assets/images/user/3.jpg", "alt", "", 1, "img-40", "rounded-circle"], ["src", "assets/images/user/5.jpg", "alt", "", 1, "img-40", "rounded-circle"], ["src", "assets/images/user/1.jpg", "alt", "", 1, "img-40", "rounded-circle"], [1, "f-12"], ["type", "button", 1, "btn", "btn-secondary", "btn-pill"], [1, "d-flex", "markets"], ["src", "assets/images/bitcoin/market-1.jpg"], [1, "flex-grow-1", "m-l-20"], [1, "font-primary"], ["src", "assets/images/bitcoin/market-2.jpg"], ["src", "assets/images/bitcoin/market-3.jpg"], [1, "d-flex", "markets", "mb-0"], ["src", "assets/images/bitcoin/market-4.jpg"], [1, "col-xl-6"], [1, "show-value-top", "d-flex", "pull-right"], [1, "value-left", "d-inline-block"], [1, "circle-graph", "bg-primary", "d-inline-block", "m-r-5"], [1, "value-right", "d-inline-block"], [1, "circle-graph", "d-inline-block", "bg-secondary", "m-r-5"], [1, "chart-block"], ["baseChart", "", "id", "linecharts-bitcoin", 1, "chart", "flot-chart-placeholder", 3, "legend", "datasets", "labels", "options", "type"], [1, "row", "chart-bottom"], [1, "col", "text-center"], [1, "font-primary", "counter"], [1, "card-body", "tab-content", "market-tabs"], [1, "mt-2", 3, "ngbNavOutlet"], ["ngbNav", "", 1, "nav-tabs", 3, "activeId", "activeIdChange"], ["nav", "ngbNav"], [3, "ngbNavItem"], ["ngbNavLink", ""], ["ngbNavContent", ""], [1, "col-md-12", "xl-100"], [1, "col-sm-4"], [1, "card-body", "bg-primary"], [1, "icons-section", "text-center"], ["src", "assets/images/bitcoin/1.png", "alt", ""], [3, "icon"], [1, "card-body", "bg-secondary"], ["src", "assets/images/bitcoin/2.png", "alt", ""], ["src", "assets/images/bitcoin/3.png", "alt", ""], [1, "card-body", "chat-box"], [1, "chat-right-aside", "bitcoin-chat"], [1, "chat"], [1, "chat-history", "chat-msg-box", "custom-scrollbar"], [1, "message", "my-message"], ["src", "assets/images/bitcoin/chat-1.jpg", "alt", "", 1, "rounded-circle", "float-start", "chat-user-img"], [1, "message-data", "text-end"], [1, "message-data-time"], [1, "clearfix"], [1, "message", "other-message", "pull-right"], ["src", "assets/images/bitcoin/chat-2.jpg", "alt", "", 1, "rounded-circle", "float-end", "chat-user-img"], [1, "message-data"], [1, "message", "my-message", "mb-0"], [1, "bitcoin-message", "clearfix"], [1, "col-xl-12", "d-flex"], [1, "smiley-box", "bg-primary"], [1, "picker"], ["src", "assets/images/smiley.png", "alt", ""], [1, "input-group", "text-box"], ["id", "message-to-send", "type", "text", "name", "message-to-send", "placeholder", "Type a message......", 1, "form-control", "input-txt-bx"], [1, "input-group-append"], ["ngbAccordion", "", 1, "default-according", "bitcoin-accordion", 3, "closeOthers"], ["ngbAccordionItem", "", 1, "mb-2", 3, "collapsed"], ["ngbAccordionHeader", "", 1, "card-header", "bg-primary"], ["ngbAccordionButton", "", 1, "btn", "btn-link", "txt-white", "text-decoration-none", "p-0"], ["ngbAccordionCollapse", ""], ["ngbAccordionBody", "", 1, "media-accordion", "p-0"], ["id", "accordionoc", "ngbAccordionItem", "", 1, "default-according", "bitcoin-accordion", "mb-2"], ["ngbAccordionButton", "", 1, "btn", "btn-link", "text-decoration-none", "txt-white", "p-0"], ["id", "accordionoc", "ngbAccordionItem", "", "ngbAccordionItem", "", 1, "default-according", "bitcoin-accordion"], [1, "card-body", "chart-block"], [1, "pull-right", "right-header", "invest-dropdown"], [1, "onhover-dropdown"], ["type", "button", 1, "btn"], [1, "onhover-show-div", "right-header-dropdown"], [1, "flot-chart-container"], ["id", "bitcoin-morris", 1, "flot-chart-placeholder"], ["baseChart", "", 3, "labels", "datasets", "options", "legend", "type"], [1, "show-value-top", "d-flex", "mb-0", "bottom-morris-chart"], [1, "value-third", "d-inline-block"], [1, "circle-graph", "d-inline-block", "bg-light", "m-r-5"], ["id", "htc", 1, "market-table", "table-responsive", "tab-pane", "active"], [1, "table"], [1, "text-center"], [1, "font-secondary", 3, "icon"], [1, "media"], [1, "flex-grow-1", "text-end"], [1, "font-secondary"]],
    template: function BitcoinComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 7)(8, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "BTC");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Bitcoin");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 8)(13, "div", 9)(14, "div", 10)(15, "h6", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "% 1h");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "h6", 12)(18, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "app-feather-icons", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, " 0.12 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 10)(22, "h6", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "% 24h");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "h6", 12)(25, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "app-feather-icons", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, " +0.30 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 10)(29, "h6", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "% 7d");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "h6", 12)(32, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](33, "app-feather-icons", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, " -0.20");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](36, "x-chartist", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div", 2)(38, "div", 3)(39, "div", 4)(40, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](41, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "div", 7)(43, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, "DASH");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46, "Tranding");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "div", 8)(48, "div", 9)(49, "div", 10)(50, "h6", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51, "% 1h");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "h6", 12)(53, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](54, "app-feather-icons", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55, " 0.12 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "div", 10)(57, "h6", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](58, "% 24h");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "h6", 12)(60, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](61, "app-feather-icons", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](62, " +0.30 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "div", 10)(64, "h6", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](65, "% 7d");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "h6", 12)(67, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](68, "app-feather-icons", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](69, " -0.20");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](71, "x-chartist", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "div", 2)(73, "div", 3)(74, "div", 4)(75, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](76, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](77, "div", 7)(78, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](79, "ETH");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](80, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](81, "Ethereum");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](82, "div", 8)(83, "div", 9)(84, "div", 10)(85, "h6", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](86, "% 1h");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](87, "h6", 12)(88, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](89, "app-feather-icons", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](90, " 0.12 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](91, "div", 10)(92, "h6", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](93, "% 24h");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](94, "h6", 12)(95, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](96, "app-feather-icons", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](97, " +0.30 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](98, "div", 10)(99, "h6", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](100, "% 7d");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](101, "h6", 12)(102, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](103, "app-feather-icons", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](104, " -0.20");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](105, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](106, "x-chartist", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](107, "div", 21)(108, "div", 3)(109, "div", 22)(110, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](111, "Market Value");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](112, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](113, "x-chartist", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](114, "div", 24)(115, "div", 3)(116, "div", 22)(117, "div", 1)(118, "div", 25)(119, "h5", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](120, "Buy");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](121, "div", 25)(122, "div", 27)(123, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](124, "USD Balance: $ 5000.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](125, "div", 4)(126, "div", 28)(127, "div", 1)(128, "div", 29)(129, "label", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](130, "Parchase");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](131, "div", 31)(132, "div", 32)(133, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](134, "Amount ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](135, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](136, "i", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](137, "div", 36)(138, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](139, "Link 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](140, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](141, "Link 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](142, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](143, "Link 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](144, "div", 38)(145, "label", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](146, "Units");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](147, "div", 40)(148, "div", 41)(149, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](150, "i", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](151, "input", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](152, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](153, "Please choose a username.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](154, "div", 29)(155, "label", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](156, "Bid");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](157, "div", 31)(158, "div", 47)(159, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](160, "Limit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](161, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](162, "i", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](163, "div", 36)(164, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](165, "Link 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](166, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](167, "Link 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](168, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](169, "Link 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](170, "div", 38)(171, "label", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](172, "Bid");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](173, "div", 40)(174, "div", 41)(175, "span", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](176, "i", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](177, "input", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](178, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](179, "Please choose a username.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](180, "div", 50)(181, "label", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](182, "Total");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](183, "div", 40)(184, "div", 41)(185, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](186, "i", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](187, "input", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](188, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](189, "Please choose a username.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](190, "div", 53)(191, "div", 54)(192, "button", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](193, "Buy Now!");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](194, "div", 24)(195, "div", 3)(196, "div", 22)(197, "div", 1)(198, "div", 25)(199, "h5", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](200, "Sell");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](201, "div", 25)(202, "div", 27)(203, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](204, "BTC Balance: $ 5000.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](205, "div", 4)(206, "div", 28)(207, "div", 1)(208, "div", 29)(209, "label", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](210, "Sell");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](211, "div", 31)(212, "div", 57)(213, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](214, "Amount ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](215, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](216, "i", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](217, "div", 36)(218, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](219, "Link 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](220, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](221, "Link 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](222, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](223, "Link 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](224, "div", 38)(225, "label", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](226, "Units");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](227, "div", 40)(228, "div", 41)(229, "span", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](230, "i", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](231, "input", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](232, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](233, "Please choose a username.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](234, "div", 29)(235, "label", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](236, "Bid");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](237, "div", 31)(238, "div", 61)(239, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](240, "Limit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](241, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](242, "i", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](243, "div", 36)(244, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](245, "Link 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](246, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](247, "Link 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](248, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](249, "Link 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](250, "div", 38)(251, "label", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](252, "Bid");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](253, "div", 40)(254, "div", 41)(255, "span", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](256, "i", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](257, "input", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](258, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](259, "Please choose a username.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](260, "div", 50)(261, "label", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](262, "Total");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](263, "div", 40)(264, "div", 41)(265, "span", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](266, "i", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](267, "input", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](268, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](269, "Please choose a username.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](270, "div", 53)(271, "div", 54)(272, "button", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](273, "Sell Now!");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](274, "div", 66)(275, "div", 3)(276, "div", 22)(277, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](278, "Active Order");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](279, "div", 4)(280, "div", 67)(281, "table", 68)(282, "thead")(283, "tr")(284, "th", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](285, "Data");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](286, "th", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](287, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](288, "th", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](289, "Customer");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](290, "th", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](291, "Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](292, "th", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](293, "USD");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](294, "th", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](295, "Fee(%)");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](296, "th", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](297, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](298, "tbody")(299, "tr")(300, "td")(301, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](302, "2018-01-31");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](303, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](304, "6:51:51");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](305, "td")(306, "button", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](307, "Buy");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](308, "td")(309, "div", 71)(310, "ul")(311, "li", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](312, "img", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](313, "li", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](314, "img", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](315, "li", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](316, "img", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](317, "li", 72)(318, "p", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](319, "+10 More");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](320, "td")(321, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](322, "11900.12");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](323, "td")(324, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](325, "$ 6979.78");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](326, "td")(327, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](328, "0.2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](329, "td")(330, "button", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](331, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](332, "tr")(333, "td")(334, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](335, "2018-01-31");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](336, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](337, "06:50:50");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](338, "td")(339, "button", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](340, "Sell");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](341, "td")(342, "div", 71)(343, "ul")(344, "li", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](345, "img", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](346, "li", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](347, "img", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](348, "li", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](349, "img", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](350, "li", 72)(351, "p", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](352, "+10 More");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](353, "td")(354, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](355, "11900.12");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](356, "td")(357, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](358, "$ 6979.78");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](359, "td")(360, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](361, "0.2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](362, "td")(363, "button", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](364, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](365, "tr")(366, "td")(367, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](368, "2018-01-31");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](369, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](370, "06:49:51");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](371, "td")(372, "button", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](373, "Buy");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](374, "td")(375, "div", 71)(376, "ul")(377, "li", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](378, "img", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](379, "li", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](380, "img", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](381, "li", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](382, "img", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](383, "li", 72)(384, "p", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](385, "+10 More");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](386, "td")(387, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](388, "11900.12");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](389, "td")(390, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](391, "$ 6979.78");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](392, "td")(393, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](394, "0.2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](395, "td")(396, "button", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](397, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](398, "tr")(399, "td")(400, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](401, "2018-01-31");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](402, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](403, "06:50:50");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](404, "td")(405, "button", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](406, "Sell");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](407, "td")(408, "div", 71)(409, "ul")(410, "li", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](411, "img", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](412, "li", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](413, "img", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](414, "li", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](415, "img", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](416, "li", 72)(417, "p", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](418, "+10 More");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](419, "td")(420, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](421, "11900.12");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](422, "td")(423, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](424, "$ 6979.78");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](425, "td")(426, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](427, "0.2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](428, "td")(429, "button", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](430, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](431, "div", 24)(432, "div", 3)(433, "div", 22)(434, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](435, "Market News");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](436, "div", 4)(437, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](438, "img", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](439, "div", 80)(440, "h5", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](441, "03 Jan");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](442, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](443, " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](444, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](445, "img", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](446, "div", 80)(447, "h5", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](448, "03 Jan");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](449, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](450, " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](451, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](452, "img", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](453, "div", 80)(454, "h5", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](455, "03 Jan");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](456, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](457, " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](458, "div", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](459, "img", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](460, "div", 80)(461, "h5", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](462, "03 Jan");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](463, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](464, " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](465, "div", 86)(466, "div", 3)(467, "div", 22)(468, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](469, "Sales Statistics");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](470, "div", 4)(471, "div", 87)(472, "div", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](473, "div", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](474, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](475, "Total Earning");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](476, "div", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](477, "div", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](478, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](479, "Total Tax");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](480, "div", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](481, "canvas", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](482, "div", 94)(483, "div", 95)(484, "div", 72)(485, "h5", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](486, "75000");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](487, "h6", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](488, "Total Sale");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](489, "div", 95)(490, "div", 72)(491, "h5", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](492, "40000");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](493, "h6", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](494, "Bitcoin Sale");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](495, "div", 95)(496, "div", 72)(497, "h5", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](498, "35000");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](499, "h6", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](500, "Ethereum Sale");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](501, "div", 86)(502, "div", 3)(503, "div", 22)(504, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](505, "Datatables Market");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](506, "div", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](507, "div", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](508, "ul", 99, 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("activeIdChange", function BitcoinComponent_Template_ul_activeIdChange_508_listener($event) {
          return ctx.active1 = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](510, "li", 101)(511, "a", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](512, "Users");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](513, BitcoinComponent_ng_template_513_Template, 59, 4, "ng-template", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](514, "li", 101)(515, "a", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](516, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](517, BitcoinComponent_ng_template_517_Template, 59, 4, "ng-template", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](518, "li", 101)(519, "a", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](520, "Blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](521, BitcoinComponent_ng_template_521_Template, 59, 4, "ng-template", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](522, "li", 101)(523, "a", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](524, "Chat");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](525, BitcoinComponent_ng_template_525_Template, 59, 4, "ng-template", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](526, "li", 101)(527, "a", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](528, "Ecommerc");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](529, BitcoinComponent_ng_template_529_Template, 59, 4, "ng-template", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](530, "div", 104)(531, "div", 1)(532, "div", 105)(533, "div", 3)(534, "div", 106)(535, "div", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](536, "img", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](537, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](538, "Bitcoin");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](539, "h5")(540, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](541, "app-feather-icons", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](542, "760.03 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](543, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](544, "app-feather-icons", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](545, "div", 105)(546, "div", 3)(547, "div", 110)(548, "div", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](549, "img", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](550, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](551, "Ethereum");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](552, "h5")(553, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](554, "app-feather-icons", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](555, "750.03 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](556, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](557, "app-feather-icons", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](558, "div", 105)(559, "div", 3)(560, "div", 106)(561, "div", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](562, "img", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](563, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](564, "Balance");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](565, "h5")(566, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](567, "app-feather-icons", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](568, "9,980 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](569, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](570, "app-feather-icons", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](571, "div", 24)(572, "div", 3)(573, "div", 22)(574, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](575, "Chat");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](576, "div", 113)(577, "div", 114)(578, "div", 115)(579, "div", 116)(580, "ul")(581, "li")(582, "div", 117);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](583, "img", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](584, "div", 119)(585, "span", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](586, "1:00 pm");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](587, " Project has been already finished and I have results to show you. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](588, "li", 121)(589, "div", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](590, "img", 123);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](591, "div", 124)(592, "span", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](593, "1:08 pm");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](594, " Well I am not sure. The rest of the team is not here yet. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](595, "li")(596, "div", 125);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](597, "img", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](598, "div", 119)(599, "span", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](600, "1:12 pm");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](601, " Actually everything was fine. I'm very excited to show this to our team. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](602, "div", 126)(603, "div", 1)(604, "div", 127)(605, "div", 128)(606, "div", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](607, "img", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](608, "div", 131);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](609, "input", 132);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](610, "div", 133)(611, "button", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](612, "SEND");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](613, "div", 24)(614, "div", 3)(615, "div", 134)(616, "div", 135)(617, "h5", 136)(618, "button", 137);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](619, "BTC");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](620, "div", 138)(621, "div", 139);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](622, BitcoinComponent_ng_template_622_Template, 45, 0, "ng-template");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](623, "div", 140)(624, "h5", 136)(625, "button", 141);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](626, "ETH");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](627, "div", 138)(628, "div", 139);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](629, BitcoinComponent_ng_template_629_Template, 45, 0, "ng-template");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](630, "div", 142)(631, "h5", 136)(632, "button", 141);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](633, "DASH");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](634, "div", 138)(635, "div", 139);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](636, BitcoinComponent_ng_template_636_Template, 45, 0, "ng-template");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](637, "div", 21)(638, "div", 3)(639, "div", 22)(640, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](641, "Invest");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](642, "div", 143)(643, "div", 144)(644, "div", 145)(645, "button", 146);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](646, "Today ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](647, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](648, "i", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](649, "div", 147)(650, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](651, "Link 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](652, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](653, "Link 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](654, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](655, "Link 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](656, "div", 148)(657, "div", 149);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](658, "canvas", 150);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](659, "div", 151)(660, "div", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](661, "div", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](662, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](663, "Bitcoin");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](664, "div", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](665, "div", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](666, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](667, "Ripple");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](668, "div", 152);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](669, "div", 153);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](670, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](671, "Invest");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()();
      }
      if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](509);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", "arrow-down");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", "arrow-up");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", "arrow-down");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("configuration", ctx.chart1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", "arrow-down");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", "arrow-up");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", "arrow-down");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("configuration", ctx.chart2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", "arrow-down");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", "arrow-up");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", "arrow-down");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("configuration", ctx.chart3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("configuration", ctx.chart4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](368);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("legend", ctx.saleChartLegend)("datasets", ctx.saleChartData)("labels", ctx.saleChartLable)("options", ctx.saleChartOption)("type", ctx.saleChartType);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngbNavOutlet", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("activeId", ctx.active1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngbNavItem", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngbNavItem", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngbNavItem", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngbNavItem", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngbNavItem", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", "dollar-sign");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", "arrow-down");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", "dollar-sign");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", "arrow-up");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", "dollar-sign");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", "arrow-down");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("closeOthers", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("collapsed", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("labels", ctx.doughnutChartLabels)("datasets", ctx.doughnutChartDatasets)("options", ctx.doughnutChartOptions)("legend", true)("type", "doughnut");
      }
    },
    dependencies: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbAccordionButton, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbAccordionDirective, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbAccordionItem, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbAccordionHeader, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbAccordionBody, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbAccordionCollapse, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbNavContent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbNav, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbNavItem, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbNavItemRole, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbNavLink, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbNavLinkBase, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbNavOutlet, ng_chartist__WEBPACK_IMPORTED_MODULE_4__.ChartistComponent, ng2_charts__WEBPACK_IMPORTED_MODULE_5__.BaseChartDirective, _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_1__.FeatherIconsComponent],
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"],
    encapsulation: 2
  });
}

/***/ }),

/***/ 40509:
/*!******************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard-routing.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashboardRoutingModule: () => (/* binding */ DashboardRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _default_default_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./default/default.component */ 19090);
/* harmony import */ var _e_commerce_e_commerce_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./e-commerce/e-commerce.component */ 54690);
/* harmony import */ var _university_university_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./university/university.component */ 6606);
/* harmony import */ var _bitcoin_bitcoin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bitcoin/bitcoin.component */ 13618);
/* harmony import */ var _server_server_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./server/server.component */ 43576);
/* harmony import */ var _project_project_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./project/project.component */ 19994);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 61699);









const routes = [{
  path: '',
  children: [{
    path: 'default',
    component: _default_default_component__WEBPACK_IMPORTED_MODULE_0__.DefaultComponent,
    data: {
      title: "Default",
      breadcrumb: "Default"
    }
  }, {
    path: 'e-commerce',
    component: _e_commerce_e_commerce_component__WEBPACK_IMPORTED_MODULE_1__.ECommerceComponent,
    data: {
      title: "E-commerce",
      breadcrumb: "E-commerce"
    }
  }, {
    path: 'university',
    component: _university_university_component__WEBPACK_IMPORTED_MODULE_2__.UniversityComponent,
    data: {
      title: "University",
      breadcrumb: "University"
    }
  }, {
    path: 'bitcoin',
    component: _bitcoin_bitcoin_component__WEBPACK_IMPORTED_MODULE_3__.BitcoinComponent,
    data: {
      title: "Crypto",
      breadcrumb: "Crypto"
    }
  }, {
    path: 'server',
    component: _server_server_component__WEBPACK_IMPORTED_MODULE_4__.ServerComponent,
    data: {
      title: "Server",
      breadcrumb: "Server"
    }
  }, {
    path: 'project',
    component: _project_project_component__WEBPACK_IMPORTED_MODULE_5__.ProjectComponent,
    data: {
      title: "Project",
      breadcrumb: "Project"
    }
  }]
}];
class DashboardRoutingModule {
  static #_ = this.ɵfac = function DashboardRoutingModule_Factory(t) {
    return new (t || DashboardRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
    type: DashboardRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](DashboardRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule]
  });
})();

/***/ }),

/***/ 51010:
/*!**********************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashboardModule: () => (/* binding */ DashboardModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-owl-carousel-o */ 99436);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 76101);
/* harmony import */ var ng_chartist__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-chartist */ 83568);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng2-charts */ 46673);
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @swimlane/ngx-charts */ 48278);
/* harmony import */ var ng2_google_charts__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng2-google-charts */ 62741);
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @swimlane/ngx-datatable */ 32282);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/shared.module */ 56208);
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard-routing.module */ 40509);
/* harmony import */ var _default_default_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./default/default.component */ 19090);
/* harmony import */ var _e_commerce_e_commerce_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./e-commerce/e-commerce.component */ 54690);
/* harmony import */ var _university_university_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./university/university.component */ 6606);
/* harmony import */ var _bitcoin_bitcoin_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bitcoin/bitcoin.component */ 13618);
/* harmony import */ var _server_server_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./server/server.component */ 43576);
/* harmony import */ var _project_project_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./project/project.component */ 19994);
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-apexcharts */ 57854);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 61699);



















class DashboardModule {
  static #_ = this.ɵfac = function DashboardModule_Factory(t) {
    return new (t || DashboardModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
    type: DashboardModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_11__.CarouselModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbModule, ng_chartist__WEBPACK_IMPORTED_MODULE_13__.ChartistModule, ng2_charts__WEBPACK_IMPORTED_MODULE_14__.NgChartsModule, _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_1__.DashboardRoutingModule, _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_15__.NgxChartsModule, ng2_google_charts__WEBPACK_IMPORTED_MODULE_16__.Ng2GoogleChartsModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, ng_apexcharts__WEBPACK_IMPORTED_MODULE_17__.NgApexchartsModule, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_18__.NgxDatatableModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](DashboardModule, {
    declarations: [_default_default_component__WEBPACK_IMPORTED_MODULE_2__.DefaultComponent, _e_commerce_e_commerce_component__WEBPACK_IMPORTED_MODULE_3__.ECommerceComponent, _university_university_component__WEBPACK_IMPORTED_MODULE_4__.UniversityComponent, _bitcoin_bitcoin_component__WEBPACK_IMPORTED_MODULE_5__.BitcoinComponent, _server_server_component__WEBPACK_IMPORTED_MODULE_6__.ServerComponent, _project_project_component__WEBPACK_IMPORTED_MODULE_7__.ProjectComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_11__.CarouselModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbModule, ng_chartist__WEBPACK_IMPORTED_MODULE_13__.ChartistModule, ng2_charts__WEBPACK_IMPORTED_MODULE_14__.NgChartsModule, _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_1__.DashboardRoutingModule, _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_15__.NgxChartsModule, ng2_google_charts__WEBPACK_IMPORTED_MODULE_16__.Ng2GoogleChartsModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, ng_apexcharts__WEBPACK_IMPORTED_MODULE_17__.NgApexchartsModule, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_18__.NgxDatatableModule]
  });
})();

/***/ }),

/***/ 19090:
/*!*******************************************************************!*\
  !*** ./src/app/components/dashboard/default/default.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DefaultComponent: () => (/* binding */ DefaultComponent)
/* harmony export */ });
/* harmony import */ var _shared_data_dashboard_default__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../shared/data/dashboard/default */ 37248);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _services_roles_and_permission_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/roles-and-permission.service */ 5730);
/* harmony import */ var ng_chartist__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-chartist */ 83568);
/* harmony import */ var _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/components/feather-icons/feather-icons.component */ 49177);
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-apexcharts */ 57854);






// var Knob = require('knob')// browserify require
var primary = localStorage.getItem("primary_color") || "#4466f2";
var secondary = localStorage.getItem("secondary_color") || "#1ea6ec";
class DefaultComponent {
  constructor(roleAndPermission) {
    this.roleAndPermission = roleAndPermission;
    // Chart Data
    this.chart1 = _shared_data_dashboard_default__WEBPACK_IMPORTED_MODULE_0__.chartBox1;
    this.chart2 = _shared_data_dashboard_default__WEBPACK_IMPORTED_MODULE_0__.chartBox2;
    this.chart3 = _shared_data_dashboard_default__WEBPACK_IMPORTED_MODULE_0__.chartBox3;
    this.chart4 = _shared_data_dashboard_default__WEBPACK_IMPORTED_MODULE_0__.chartProduction;
    this.chart5 = _shared_data_dashboard_default__WEBPACK_IMPORTED_MODULE_0__.chartCalculation;
    this.TotalProfit = {
      series: [70],
      chart: {
        height: 350,
        type: "radialBar"
      },
      plotOptions: {
        radialBar: {
          hollow: {
            size: "60%"
          }
        }
      },
      stroke: {
        lineCap: 'round'
      },
      colors: ['#4466f2'],
      labels: ["TOTAL PROFIT"]
    };
  }
  ngOnInit() {}
  static #_ = this.ɵfac = function DefaultComponent_Factory(t) {
    return new (t || DefaultComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_roles_and_permission_service__WEBPACK_IMPORTED_MODULE_1__.RolesAndPermissionService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: DefaultComponent,
    selectors: [["app-default"]],
    decls: 473,
    vars: 38,
    consts: [[1, "container-fluid"], [1, "row"], [1, "col-xl-8", "xl-100"], [1, "col-sm-4"], [1, "card"], [1, "card-body"], [1, "chart-widget-dashboard"], [1, "d-flex"], [1, "flex-grow-1"], [1, "mt-0", "mb-0", "f-w-600"], [3, "icon"], [1, "counter"], [1, "dashboard-chart-container"], [1, "small-chart-gradient-1", 3, "configuration"], [1, "small-chart-gradient-2", 3, "configuration"], [1, "small-chart-gradient-3", 3, "configuration"], [1, "col-lg-12"], [1, "card-header"], [1, "show-value-top", "d-flex"], [1, "value-left", "d-inline-block"], [1, "square", "bg-primary", "d-inline-block"], [1, "value-right", "d-inline-block"], [1, "square", "d-inline-block", "bg-secondary"], [1, "smooth-chart", "flot-chart-container", 3, "configuration"], [1, "col-xl-4", "xl-100"], [1, "card-body", "activity-scroll"], [1, "activity"], [1, "d-flex", "mediaClass"], [1, "gradient-round", "m-r-30", "gradient-line-1"], [1, "pull-right", "f-14"], [1, "gradient-round", "m-r-30", "small-line"], [1, "gradient-round", "m-r-30", "medium-line"], [1, "col-xl-4", "xl-50", "col-md-6"], [1, "d-block", "fonts-dashboard"], [1, "knob-block", "text-center"], [3, "series", "chart", "plotOptions", "labels", "stroke", "colors"], [1, "show-value", "d-flex"], [1, "value-left"], [1, "value-right"], [1, "square", "bg-light", "d-inline-block"], [1, "col-md-12"], [1, "card-body", "progress-media"], [1, "mb-0", "d-block"], [1, "progress-bar-showcase"], [1, "progress", "sm-progress-bar"], ["role", "progressbar", "aria-valuenow", "25", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-primary", 2, "width", "90%"], [1, "progress-change"], [1, "pull-right"], ["role", "progressbar", "aria-valuenow", "25", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-primary", 2, "width", "85%"], [1, "card", "user-card"], [1, "online-user"], [1, "font-primary", "f-18", "mb-0"], [1, "user-card-image"], ["src", "assets/images/dashboard/designer.jpg", "alt", "", 1, "img-fluid", "rounded-circle", "image-radius"], [1, "user-deatils", "text-center"], [1, "mb-0"], [1, "user-badge", "text-center"], ["href", "javascript:void(0)", 1, "badge", "rounded-pill", "badge-light"], ["href", "javascript:void(0)"], [1, "badge", "rounded-pill", "badge-light", "active"], [1, "card-footer", "row", "pb-0", "text-center"], [1, "col-6"], [1, "d-flex", "user-footer"], [1, "m-r-10", 3, "icon"], [1, "f-18", "mb-0"], [1, "col-xl-6"], [1, "card-header", "card-header-border"], [1, "col-sm-6"], [1, "pull-right", "right-header"], [1, "btn", "btn-primary", "btn-pill"], [1, "new-users"], ["src", "assets/images/user/2.png", "alt", "", 1, "rounded-circle", "image-radius", "m-r-15"], [1, "mb-0", "f-w-700"], [1, "btn", "btn-pill", "btn-outline-light"], ["src", "assets/images/user/5.jpg", "alt", "", 1, "rounded-circle", "image-radius", "m-r-15"], ["src", "assets/images/user/3.jpg", "alt", "", 1, "rounded-circle", "image-radius", "m-r-15"], ["src", "assets/images/user/4.jpg", "alt", "", 1, "rounded-circle", "image-radius", "m-r-15"], [1, "onhover-dropdown"], ["type", "button", 1, "btn", "btn-primary", "btn-pill"], [1, "pe-0"], [1, "fa", "fa-angle-down"], [1, "onhover-show-div", "right-header-dropdown"], ["href", "javascript:void(0)", 1, "d-block"], [1, "card-body", "recent-notification"], [1, "f-12"], [1, "col-sm-12"], [1, "square", "d-inline-block", "bg-smooth-chart"], [1, "ct-svg", "flot-chart-container", 3, "configuration", "events"], [1, "col-xl-7", "xl-100"], [1, "right-header", "pull-right", "m-t-5"], [1, "onhover-show-div", "right-header-dropdown", "more-dropdown"], [1, "card-body", "chat-box", "dashboard-chat"], [1, "chat"], [1, "media", "left-side-chat"], ["src", "assets/images/user/4.jpg", "alt", "", 1, "rounded-circle", "chat-user-img", "img-60", "m-r-20"], [1, "message-main"], [1, "media", "right-side-chat"], [1, "media-body", "text-end"], [1, "clearfix"], [1, "sub-message", "message-main"], [1, "pull-right", "mb-0"], ["src", "assets/images/user/5.jpg", "alt", "", 1, "rounded-circle", "chat-user-img", "img-60", "m-l-20"], [1, "sub-message", "message-main", "smiley-bg"], ["src", "assets/images/dashboard/smily.png", "alt", ""], [1, "media", "chat-footer", "bg-primary"], [1, "icon-face-smile"], ["type", "text", "placeholder", "Type your message", "required", "", 1, "form-control"], [1, "col-xl-5", "xl-100"], [1, "selling-update", "text-center"], [1, "mb-0", "f-18"], [1, "selling-update", "text-center", "mb-0", "xs-mb-selling"], [1, "selling-update", "text-center", "mb-0"]],
    template: function DefaultComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 1)(4, "div", 3)(5, "div", 4)(6, "div", 5)(7, "div", 6)(8, "div", 7)(9, "div", 8)(10, "h5", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "app-feather-icons", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "5789");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Total Visits");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "app-feather-icons", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "x-chartist", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 3)(20, "div", 4)(21, "div", 5)(22, "div", 6)(23, "div", 7)(24, "div", 8)(25, "h5", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](26, "app-feather-icons", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "4986");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "Total Sale");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](31, "app-feather-icons", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](33, "x-chartist", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "div", 3)(35, "div", 4)(36, "div", 5)(37, "div", 6)(38, "div", 7)(39, "div", 8)(40, "h5", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](41, "app-feather-icons", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43, "8568");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](45, "Total Value");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](46, "app-feather-icons", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](48, "x-chartist", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "div", 16)(50, "div", 4)(51, "div", 17)(52, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](53, "Production Valuation");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "div", 5)(55, "div", 18)(56, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](57, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](59, "Total Earning");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](61, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](62, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](63, "Total Tax");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](64, "x-chartist", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](65, "div", 24)(66, "div", 4)(67, "div", 17)(68, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](69, "Activity");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](70, "div", 25)(71, "div", 26)(72, "div", 27)(73, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](74, "app-feather-icons", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](75, "div", 8)(76, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](77, "New Sale ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](78, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](79, "New");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](80, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](81, "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](82, "div", 27)(83, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](84, "app-feather-icons", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](85, "div", 8)(86, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](87, "New Message ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](88, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](89, "14m Ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](90, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](91, "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](92, "div", 27)(93, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](94, "app-feather-icons", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](95, "div", 8)(96, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](97, "New Report ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](98, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](99, "14m Ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](100, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](101, "Lorem Ipsum is simply dummy text.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](102, "div", 27)(103, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](104, "app-feather-icons", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](105, "div", 8)(106, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](107, "New Sale ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](108, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](109, "14m Ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](110, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](111, "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](112, "div", 27)(113, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](114, "app-feather-icons", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](115, "div", 8)(116, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](117, "New Visits ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](118, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](119, "14m Ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](120, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](121, "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](122, "div", 32)(123, "div", 4)(124, "div", 17)(125, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](126, "Total Profit");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](127, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](128, "All Custom Income");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](129, "div", 5)(130, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](131, "apx-chart", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](132, "div", 36)(133, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](134, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](135, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](136, "Total Profit");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](137, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](138, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](139, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](140, "Total Investment");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](141, "div", 32)(142, "div", 1)(143, "div", 40)(144, "div", 4)(145, "div", 41)(146, "div", 7)(147, "div", 8)(148, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](149, "Total Review");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](150, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](151, "Customer Review");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](152, "app-feather-icons", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](153, "div", 43)(154, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](155, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](156, "div", 46)(157, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](158, "Change");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](159, "span", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](160, "95%");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](161, "div", 40)(162, "div", 4)(163, "div", 41)(164, "div", 7)(165, "div", 8)(166, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](167, "Total Feedback");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](168, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](169, "Feedback");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](170, "app-feather-icons", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](171, "div", 43)(172, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](173, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](174, "div", 46)(175, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](176, "Change");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](177, "span", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](178, "85%");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](179, "div", 24)(180, "div", 49)(181, "div", 5)(182, "div", 50)(183, "h5", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](184, "Online");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](185, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](186, "img", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](187, "div", 54)(188, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](189, "Marshi Kisteen");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](190, "h6", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](191, "marshikisteen@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](192, "div", 56)(193, "a", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](194, "Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](195, "a", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](196, "Ui");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](197, "a", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](198, "Xi");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](199, "a", 58)(200, "span", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](201, "2+");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](202, "div", 60)(203, "div", 61)(204, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](205, "app-feather-icons", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](206, "h6", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](207, "Message");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](208, "div", 61)(209, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](210, "app-feather-icons", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](211, "h6", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](212, "Portfolio");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](213, "div", 65)(214, "div", 4)(215, "div", 66)(216, "div", 1)(217, "div", 67)(218, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](219, "New User");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](220, "div", 67)(221, "div", 68)(222, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](223, "Month");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](224, "span")(225, "button", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](226, "Today");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](227, "div", 5)(228, "div", 70)(229, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](230, "img", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](231, "div", 8)(232, "h6", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](233, "Nick Stone");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](234, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](235, "Visual Designer, Github Inc");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](236, "span", 47)(237, "button", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](238, "Follow");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](239, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](240, "img", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](241, "div", 8)(242, "h6", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](243, "Milano Esco");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](244, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](245, "Visual Designer, Github Inc");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](246, "span", 47)(247, "button", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](248, "Follow");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](249, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](250, "img", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](251, "div", 8)(252, "h6", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](253, "Wiltor Noice");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](254, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](255, "Visual Designer, Github Inc");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](256, "span", 47)(257, "button", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](258, "Follow");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](259, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](260, "img", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](261, "div", 8)(262, "h6", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](263, "Anna Strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](264, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](265, "Visual Designer, Github Inc");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](266, "span", 47)(267, "button", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](268, "Follow");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](269, "div", 65)(270, "div", 4)(271, "div", 66)(272, "div", 1)(273, "div", 67)(274, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](275, "Recent Notification");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](276, "div", 67)(277, "div", 68)(278, "div", 77)(279, "button", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](280, " All ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](281, "span", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](282, "i", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](283, "div", 81)(284, "a", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](285, "Order");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](286, "a", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](287, "Download");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](288, "a", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](289, "Trash");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](290, "div", 83)(291, "div", 7)(292, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](293, "09:00");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](294, "div", 8)(295, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](296, "Lorem ipsum dolor sit amit,consectetur eiusmdd.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](297, "p", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](298, "By Kan");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](299, "div", 7)(300, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](301, "10:50");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](302, "div", 8)(303, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](304, "Lorem ipsum.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](305, "p", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](306, "By Tailer");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](307, "div", 7)(308, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](309, "01:00");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](310, "div", 8)(311, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](312, "Lorem ipsum dolor sit amit,consectetur eiusmdd.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](313, "p", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](314, "By Kaint");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](315, "div", 7)(316, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](317, "05:00");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](318, "div", 8)(319, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](320, "Lorem ipsum dolor sit amit.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](321, "p", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](322, "By call");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](323, "div", 7)(324, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](325, "12:00");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](326, "div", 8)(327, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](328, "Lorem ipsum dolor sit.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](329, "p", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](330, "By Waiter");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](331, "div", 7)(332, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](333, "08:20");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](334, "div", 8)(335, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](336, "Lorem ipsum dolor sit amit,consectetur eiusmdd dolor sit amit.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](337, "p", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](338, "By Comman");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](339, "div", 85)(340, "div", 4)(341, "div", 17)(342, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](343, "Calculation");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](344, "div", 5)(345, "div", 18)(346, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](347, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](348, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](349, "Total Income");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](350, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](351, "div", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](352, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](353, "Total Loss");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](354, "x-chartist", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](355, "div", 88)(356, "div", 4)(357, "div", 66)(358, "div", 1)(359, "div", 67)(360, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](361, "Conversations");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](362, "div", 67)(363, "div", 89)(364, "div", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](365, "app-feather-icons", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](366, "div", 90)(367, "a", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](368, "View");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](369, "a", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](370, "Media");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](371, "a", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](372, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](373, "div", 91)(374, "div", 92)(375, "div", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](376, "img", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](377, "div", 8)(378, "div", 95)(379, "p", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](380, "Lorem Ipsum is simply dummy text of the");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](381, "div", 96)(382, "div", 97)(383, "div", 95)(384, "p", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](385, "Lorem Ipsum is simply dummy text of the printing and Lorem Ipsum has been the industry's");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](386, "div", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](387, "div", 99)(388, "p", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](389, "Lorem Ipsum is simply dummy text of the");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](390, "div", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](391, "img", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](392, "div", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](393, "img", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](394, "div", 8)(395, "div", 95)(396, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](397, "Lorem Ipsum is simply dummy text of the printing");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](398, "div", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](399, "img", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](400, "div", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](401, "i", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](402, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](403, "input", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](404, "app-feather-icons", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](405, "div", 107)(406, "div", 4)(407, "div", 66)(408, "div", 1)(409, "div", 67)(410, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](411, "Selling Update");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](412, "div", 67)(413, "div", 68)(414, "div", 77)(415, "button", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](416, " All ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](417, "span", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](418, "i", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](419, "div", 81)(420, "a", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](421, "shipping");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](422, "a", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](423, "Purchase");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](424, "a", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](425, "Total Sell");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](426, "div", 5)(427, "div", 1)(428, "div", 3)(429, "div", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](430, "app-feather-icons", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](431, "h5", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](432, "+500");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](433, "div", 3)(434, "div", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](435, "app-feather-icons", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](436, "h5", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](437, "+120");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](438, "div", 3)(439, "div", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](440, "app-feather-icons", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](441, "h5", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](442, "-410");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](443, "div", 3)(444, "div", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](445, "app-feather-icons", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](446, "h5", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](447, "-155");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](448, "div", 3)(449, "div", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](450, "app-feather-icons", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](451, "h5", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](452, "+920");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](453, "div", 3)(454, "div", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](455, "app-feather-icons", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](456, "h5", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](457, "+500");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](458, "div", 3)(459, "div", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](460, "app-feather-icons", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](461, "h5", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](462, "+500");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](463, "div", 3)(464, "div", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](465, "app-feather-icons", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](466, "h5", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](467, "+120");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](468, "div", 3)(469, "div", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](470, "app-feather-icons", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](471, "h5", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](472, "-410");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", "dollar-sign");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", "tag");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("configuration", ctx.chart1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", "dollar-sign");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", "shopping-cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("configuration", ctx.chart2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", "dollar-sign");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", "sun");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("configuration", ctx.chart3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("configuration", ctx.chart4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", "shopping-cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", "message-circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", "minus-circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", "shopping-bag");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", "tag");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("series", ctx.TotalProfit.series)("chart", ctx.TotalProfit.chart)("plotOptions", ctx.TotalProfit.plotOptions)("labels", ctx.TotalProfit.labels)("stroke", ctx.TotalProfit.stroke)("colors", ctx.TotalProfit.colors);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", "thumbs-up");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", "message-circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", "message-square");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", "briefcase");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](144);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("configuration", ctx.chart5)("events", ctx.chart5.events);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", "more-horizontal");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", "send");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", "activity");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", "anchor");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", "box");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", "book");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", "compass");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", "cpu");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", "dollar-sign");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", "slack");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", "umbrella");
      }
    },
    dependencies: [ng_chartist__WEBPACK_IMPORTED_MODULE_4__.ChartistComponent, _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_2__.FeatherIconsComponent, ng_apexcharts__WEBPACK_IMPORTED_MODULE_5__.ChartComponent],
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"],
    encapsulation: 2
  });
}

/***/ }),

/***/ 54690:
/*!*************************************************************************!*\
  !*** ./src/app/components/dashboard/e-commerce/e-commerce.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ECommerceComponent: () => (/* binding */ ECommerceComponent)
/* harmony export */ });
/* harmony import */ var _shared_data_dashboard_e_commerce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../shared/data/dashboard/e-commerce */ 62047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-owl-carousel-o */ 99436);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-charts */ 46673);
/* harmony import */ var _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/feather-icons/feather-icons.component */ 49177);
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-apexcharts */ 57854);







function ECommerceComponent_6_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 74)(1, "div", 7)(2, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "app-feather-icons", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div")(5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "h4", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const slide_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", slide_r1.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](slide_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](slide_r1.number);
  }
}
function ECommerceComponent_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, ECommerceComponent_6_ng_template_0_Template, 9, 3, "ng-template", 73);
  }
}
// var Knob = require('knob') // browserify require
var primary = localStorage.getItem('primary_color') || '#4466f2';
var secondary = localStorage.getItem('secondary_color') || '#1ea6ec';
class ECommerceComponent {
  constructor() {
    this.slidesStore = [{
      id: 1,
      icon: 'dollar-sign',
      title: 'Total Earning',
      number: 72
    }, {
      id: 2,
      icon: 'map-pin',
      title: 'Total Web Visitor',
      number: 65
    }, {
      id: 3,
      icon: 'shopping-cart',
      title: 'Total Sale Product',
      number: 96
    }, {
      id: 4,
      icon: 'trending-down',
      title: 'Company Loss',
      number: 89
    }, {
      id: 5,
      icon: 'dollar-sign',
      title: 'Total Earning',
      number: 72
    }];
    this.customOptions = {
      margin: 10,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
      loop: true,
      dots: false,
      nav: false,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
          nav: false
        },
        420: {
          items: 2,
          nav: false
        },
        600: {
          items: 3,
          nav: false
        },
        932: {
          items: 4,
          nav: false
        }
      }
    };
    // Charts1
    this.saleChartType = _shared_data_dashboard_e_commerce__WEBPACK_IMPORTED_MODULE_0__.saleChartType;
    this.saleChartLable = _shared_data_dashboard_e_commerce__WEBPACK_IMPORTED_MODULE_0__.saleChartLabels;
    this.saleChartData = _shared_data_dashboard_e_commerce__WEBPACK_IMPORTED_MODULE_0__.saleChartData;
    this.saleChartOption = _shared_data_dashboard_e_commerce__WEBPACK_IMPORTED_MODULE_0__.saleChartOptions;
    this.saleChartLegend = _shared_data_dashboard_e_commerce__WEBPACK_IMPORTED_MODULE_0__.saleChartLegend;
    // Charts1
    this.chartType1 = _shared_data_dashboard_e_commerce__WEBPACK_IMPORTED_MODULE_0__.lineChartType1;
    this.chartLable1 = _shared_data_dashboard_e_commerce__WEBPACK_IMPORTED_MODULE_0__.lineChartLabels1;
    this.chartData1 = _shared_data_dashboard_e_commerce__WEBPACK_IMPORTED_MODULE_0__.lineChartData1;
    this.chartOption1 = _shared_data_dashboard_e_commerce__WEBPACK_IMPORTED_MODULE_0__.lineChartOptions1;
    // public chartColor1 = data.lineChartColors1;
    this.chartLegend1 = _shared_data_dashboard_e_commerce__WEBPACK_IMPORTED_MODULE_0__.lineChartLegend1;
    // Chart2
    this.chartType2 = _shared_data_dashboard_e_commerce__WEBPACK_IMPORTED_MODULE_0__.lineChartType2;
    this.chartLable2 = _shared_data_dashboard_e_commerce__WEBPACK_IMPORTED_MODULE_0__.lineChartLabels2;
    this.chartData2 = _shared_data_dashboard_e_commerce__WEBPACK_IMPORTED_MODULE_0__.lineChartData2;
    this.chartOption2 = _shared_data_dashboard_e_commerce__WEBPACK_IMPORTED_MODULE_0__.lineChartOptions2;
    this.chartColor2 = _shared_data_dashboard_e_commerce__WEBPACK_IMPORTED_MODULE_0__.lineChartColors2;
    this.chartLegend2 = _shared_data_dashboard_e_commerce__WEBPACK_IMPORTED_MODULE_0__.lineChartLegend2;
    //Static chart
    this.staticChartType = _shared_data_dashboard_e_commerce__WEBPACK_IMPORTED_MODULE_0__.staticChartType;
    this.staticChartLable = _shared_data_dashboard_e_commerce__WEBPACK_IMPORTED_MODULE_0__.staticChartLabels;
    this.staticChartData = _shared_data_dashboard_e_commerce__WEBPACK_IMPORTED_MODULE_0__.staticChartData;
    this.staticChartOption = _shared_data_dashboard_e_commerce__WEBPACK_IMPORTED_MODULE_0__.staticChartOptions;
    this.staticChartColor = _shared_data_dashboard_e_commerce__WEBPACK_IMPORTED_MODULE_0__.staticChartColors;
    this.staticChartLegend = _shared_data_dashboard_e_commerce__WEBPACK_IMPORTED_MODULE_0__.staticChartLegend;
    this.TotalReview = {
      series: [35],
      chart: {
        height: 320,
        type: "radialBar"
      },
      plotOptions: {
        radialBar: {
          hollow: {
            size: "80%"
          }
        }
      },
      colors: ['#4466F2'],
      labels: ["REVIEW"]
    };
    this.Totalreview = {
      series: [85],
      chart: {
        height: 300,
        type: "radialBar"
      },
      plotOptions: {
        radialBar: {
          hollow: {
            size: "80%"
          },
          track: {
            background: "#4466F2"
          }
        }
      },
      stroke: {
        lineCap: "round"
      },
      fill: {
        colors: ["#fff"]
      },
      dataLabels: {
        name: {
          show: true,
          color: "#fff",
          offsetY: -10
        }
      },
      labels: ["REVIEW"]
    };
  }
  ngOnInit() {
    // var review = Knob({
    //   value: 35,
    //   angleOffset: 180,
    //   className: "review",
    //   thickness: 0.1,
    //   width: 290,
    //   height: 290,
    //   fgColor: primary
    // })
    // document.getElementById('review').append(review)
  }
  chartClicked({
    event: any,
    active
  }) {}
  chartHovered({
    event,
    active
  }) {}
  static #_ = this.ɵfac = function ECommerceComponent_Factory(t) {
    return new (t || ECommerceComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: ECommerceComponent,
    selectors: [["app-e-commerce"]],
    decls: 395,
    vars: 32,
    consts: [[1, "container-fluid"], [1, "row"], [1, "col-xl-7", "xl-100"], ["id", "owl-carousel-14", 1, "owl-carousel", "owl-theme", "owl-loaded", "owl-drag"], [3, "options"], [4, "ngFor", "ngForOf"], [1, "col-md-12"], [1, "card"], [1, "card-header"], [1, "card-body", "charts-box"], [1, "flot-chart-container"], ["baseChart", "", 1, "chart", 3, "datasets", "labels", "options", "legend", "type"], [1, "col-xl-5", "xl-100"], [1, "card-body"], [1, "table-responsive", "sellers"], [1, "table", "table-bordernone"], ["scope", "col"], [1, "d-inline-block", "align-middle"], ["src", "assets/images/user/6.jpg", "alt", "", 1, "img-radius", "img-30", "align-top", "m-r-15", "rounded-circle"], [1, "d-inline-block"], ["src", "assets/images/user/2.png", "alt", "", 1, "img-radius", "img-30", "align-top", "m-r-15", "rounded-circle"], ["src", "assets/images/user/3.jpg", "alt", "", 1, "img-radius", "img-30", "align-top", "m-r-15", "rounded-circle"], ["src", "assets/images/user/4.jpg", "alt", "", 1, "img-radius", "img-30", "align-top", "m-r-15", "rounded-circle"], ["src", "assets/images/user/5.jpg", "alt", "", 1, "img-radius", "img-30", "align-top", "m-r-15", "rounded-circle"], ["src", "assets/images/user/15.png", "alt", "", 1, "img-radius", "img-30", "align-top", "m-r-15", "rounded-circle"], [1, "col-xl-3", "xl-50", "col-sm-6"], [1, "number-widgets"], [1, "d-flex"], [1, "flex-grow-1", "align-self-center"], [1, "mb-0"], ["data-label", "95%", 1, "radial-bar", "radial-bar-95", "radial-bar-primary"], ["data-label", "75%", 1, "radial-bar", "radial-bar-75", "radial-bar-primary"], ["data-label", "90%", 1, "radial-bar", "radial-bar-90", "radial-bar-primary"], ["data-label", "80%", 1, "radial-bar", "radial-bar-80", "radial-bar-primary"], [1, "col-md-6"], [1, "card-body", "chart-block"], ["baseChart", "", "id", "profitchart", 1, "chart", 3, "legend", "datasets", "labels", "options", "type"], [1, "col-xl-4", "xl-50", "col-md-6"], [1, "card-body", "height-equal"], [1, "progress-block"], [1, "progress-title"], [1, "pull-right"], [1, "progress", 2, "height", "3px"], ["role", "progressbar", "aria-valuenow", "90", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-primary", 2, "width", "90%"], ["role", "progressbar", "aria-valuenow", "85", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-primary", 2, "width", "85%"], ["role", "progressbar", "aria-valuenow", "80", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-primary", 2, "width", "80%"], ["role", "progressbar", "aria-valuenow", "95", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-primary", 2, "width", "95%"], ["role", "progressbar", "aria-valuenow", "75", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-primary", 2, "width", "75%"], [1, "progress-block", "mb-0"], [1, "card-body", "height-equal", "log-content"], [1, "logs-element"], [1, "circle-double-odd"], [1, "circle-double-even"], [1, "logs-element", "mb-0"], [1, "col-xl-4", "xl-100"], [1, "card-body", "updating-chart", "height-equal"], [1, "upadates", "text-center"], [1, "font-primary"], [3, "icon"], [1, "counter"], ["id", "updating-data-morris-chart", 1, "flot-chart-placeholder"], ["baseChart", "", "id", "graph123", 1, "chart", "flot-chart-placeholder", 3, "legend", "datasets", "labels", "options", "type"], [1, "col-xl-8", "xl-100"], [1, "table-responsive", "shopping-table", "text-center"], [1, "btn", "btn-primary", "btn-pill"], ["data-feather", "x"], [1, "col-xl-4", "xl-50"], [1, "card", "card-gradient", 2, "height", "436px"], [1, "card-body", "text-center", "o-hidden"], [1, "knob-header"], [1, "knob-block", "text-center", "knob-center", "university-knob"], [3, "series", "chart", "plotOptions", "labels", "stroke", "fill"], ["src", "assets/images/university/round.png", "alt", "", 1, "round-image"], ["carouselSlide", "", "id", "slide.id"], [1, "item"], [1, "card-body", "ecommerce-icons", "text-center"], [1, "font-primary", "mb-0", "counter"]],
    template: function ECommerceComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 1)(4, "div", 3)(5, "owl-carousel-o", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, ECommerceComponent_6_Template, 1, 0, null, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 6)(8, "div", 7)(9, "div", 8)(10, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Total Sale");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 9)(13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "canvas", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 12)(16, "div", 7)(17, "div", 8)(18, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Best Sellers");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 13)(21, "div", 14)(22, "table", 15)(23, "thead")(24, "tr")(25, "th", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "th", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Sale");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "th", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "Stock");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "th", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "Categories");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "tbody")(34, "tr")(35, "td")(36, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](37, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "div", 19)(39, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "Alana Slacker");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "td")(42, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, "8956");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "td")(45, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46, "54");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "td")(48, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49, "Product No: 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "tr")(51, "td")(52, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](53, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "div", 19)(55, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](56, "Alana Slacker");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "td")(58, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59, "8956");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "td")(61, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](62, "54");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "td")(64, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](65, "Product No: 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "tr")(67, "td")(68, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](69, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "div", 19)(71, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](72, "Alana Slacker");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "td")(74, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](75, "8956");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "td")(77, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](78, "54");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](79, "td")(80, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](81, "Product No: 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](82, "tr")(83, "td")(84, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](85, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](86, "div", 19)(87, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](88, "Alana Slacker");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](89, "td")(90, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](91, "8956");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](92, "td")(93, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](94, "54");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](95, "td")(96, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](97, "Product No: 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](98, "tr")(99, "td")(100, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](101, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](102, "div", 19)(103, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](104, "Alana Slacker");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](105, "td")(106, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](107, "8956");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](108, "td")(109, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](110, "54");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](111, "td")(112, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](113, "Product No: 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](114, "tr")(115, "td")(116, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](117, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](118, "div", 19)(119, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](120, "Alana Slacker");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](121, "td")(122, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](123, "8956");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](124, "td")(125, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](126, "54");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](127, "td")(128, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](129, "Product No: 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](130, "div", 25)(131, "div", 7)(132, "div", 13)(133, "div", 26)(134, "div", 27)(135, "div", 28)(136, "h6", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](137, "Payment Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](138, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](139, "div", 25)(140, "div", 7)(141, "div", 13)(142, "div", 26)(143, "div", 27)(144, "div", 28)(145, "h6", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](146, "Work Process");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](147, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](148, "div", 25)(149, "div", 7)(150, "div", 13)(151, "div", 26)(152, "div", 27)(153, "div", 28)(154, "h6", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](155, "Sale Completed");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](156, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](157, "div", 25)(158, "div", 7)(159, "div", 13)(160, "div", 26)(161, "div", 27)(162, "div", 28)(163, "h6", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](164, "Payment Done");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](165, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](166, "div", 34)(167, "div", 7)(168, "div", 8)(169, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](170, "Total Income");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](171, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](172, "canvas", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](173, "div", 34)(174, "div", 7)(175, "div", 8)(176, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](177, "Total Profit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](178, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](179, "canvas", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](180, "div", 37)(181, "div", 7)(182, "div", 8)(183, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](184, "Profile Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](185, "div", 38)(186, "div", 39)(187, "div", 40)(188, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](189, "Basic Information");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](190, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](191, "15/18");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](192, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](193, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](194, "div", 39)(195, "div", 40)(196, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](197, "Portfolio");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](198, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](199, "5/6");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](200, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](201, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](202, "div", 39)(203, "div", 40)(204, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](205, "Legal Document");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](206, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](207, "12/20");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](208, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](209, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](210, "div", 39)(211, "div", 40)(212, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](213, "Interest");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](214, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](215, "5/10");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](216, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](217, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](218, "div", 39)(219, "div", 40)(220, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](221, "Product Info");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](222, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](223, "15/17");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](224, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](225, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](226, "div", 48)(227, "div", 40)(228, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](229, "Billing Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](230, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](231, "2/5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](232, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](233, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](234, "div", 37)(235, "div", 7)(236, "div", 8)(237, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](238, "Logs");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](239, "div", 49)(240, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](241, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](242, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](243, "New User Registration");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](244, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](245, "14:12");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](246, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](247, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](248, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](249, "New sale: souffle.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](250, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](251, "19:00");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](252, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](253, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](254, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](255, "14 products added.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](256, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](257, "05:22");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](258, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](259, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](260, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](261, "New sale: Napole.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](262, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](263, "08:45");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](264, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](265, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](266, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](267, "New User Registration");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](268, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](269, "06:51");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](270, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](271, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](272, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](273, "New User Registration");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](274, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](275, "09:42");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](276, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](277, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](278, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](279, "New User Registration");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](280, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](281, "10:45");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](282, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](283, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](284, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](285, "New User Registration");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](286, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](287, "02:05");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](288, "div", 54)(289, "div", 7)(290, "div", 8)(291, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](292, "statics");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](293, "div", 55)(294, "div", 56)(295, "h2", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](296, "app-feather-icons", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](297, "span", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](298, " 89.68");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](299, "app-feather-icons", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](300, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](301, "Week2 +");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](302, "span", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](303, "15.44");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](304, "div", 10)(305, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](306, "canvas", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](307, "div", 62)(308, "div", 7)(309, "div", 8)(310, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](311, "Shopping Cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](312, "div", 13)(313, "div", 63)(314, "table", 15)(315, "thead")(316, "tr")(317, "th", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](318, "No");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](319, "th", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](320, "Product");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](321, "th", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](322, "Quantity");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](323, "th", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](324, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](325, "th", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](326, "Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](327, "th", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](328, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](329, "tbody")(330, "tr")(331, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](332, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](333, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](334, "Computer");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](335, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](336, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](337, "td")(338, "button", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](339, "Active");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](340, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](341, "15000");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](342, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](343, "app-feather-icons", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](344, "tr")(345, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](346, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](347, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](348, "Headphone");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](349, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](350, "8");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](351, "td")(352, "button", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](353, "Disable");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](354, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](355, "8000");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](356, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](357, "app-feather-icons", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](358, "tr")(359, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](360, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](361, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](362, "Furniture");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](363, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](364, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](365, "td")(366, "button", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](367, "Paused");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](368, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](369, "12000");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](370, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](371, "i", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](372, "tr")(373, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](374, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](375, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](376, "shoes");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](377, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](378, "9");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](379, "td")(380, "button", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](381, "On Way");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](382, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](383, "5500");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](384, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](385, "i", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](386, "div", 66)(387, "div", 67)(388, "div", 68)(389, "div", 69)(390, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](391, "REVIEW");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](392, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](393, "apx-chart", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](394, "img", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", ctx.customOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.slidesStore);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("datasets", ctx.saleChartData)("labels", ctx.saleChartLable)("options", ctx.saleChartOption)("legend", ctx.saleChartLegend)("type", ctx.saleChartType);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](158);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("datasets", ctx.chartData1)("labels", ctx.chartLable1)("options", ctx.chartOption1)("legend", ctx.chartLegend1)("type", ctx.chartType1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("legend", ctx.chartLegend2)("datasets", ctx.chartData2)("labels", ctx.chartLable2)("options", ctx.chartOption2)("type", ctx.chartType2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](117);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", "dollar-sign");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", "arrow-up");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("legend", ctx.staticChartLegend)("datasets", ctx.staticChartData)("labels", ctx.staticChartLable)("options", ctx.staticChartOption)("type", ctx.staticChartType);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", "x");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", "x");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("series", ctx.TotalReview.series)("chart", ctx.TotalReview.chart)("plotOptions", ctx.TotalReview.plotOptions)("labels", ctx.TotalReview.labels)("stroke", ctx.TotalReview.stroke)("fill", ctx.TotalReview.fill);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_4__.CarouselComponent, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_4__.CarouselSlideDirective, ng2_charts__WEBPACK_IMPORTED_MODULE_5__.BaseChartDirective, _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_1__.FeatherIconsComponent, ng_apexcharts__WEBPACK_IMPORTED_MODULE_6__.ChartComponent],
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"],
    encapsulation: 2
  });
}

/***/ }),

/***/ 19994:
/*!*******************************************************************!*\
  !*** ./src/app/components/dashboard/project/project.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProjectComponent: () => (/* binding */ ProjectComponent)
/* harmony export */ });
/* harmony import */ var _shared_data_dashboard_project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/data/dashboard/project */ 7514);
/* harmony import */ var _shared_data_chart_chartist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/data/chart/chartist */ 65871);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 76101);
/* harmony import */ var ng_chartist__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-chartist */ 83568);
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swimlane/ngx-charts */ 48278);
/* harmony import */ var ng2_google_charts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-google-charts */ 62741);
/* harmony import */ var _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/components/feather-icons/feather-icons.component */ 49177);










function ProjectComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 9)(1, "div", 10)(2, "div", 11)(3, "div", 12)(4, "div", 13)(5, "div", 14)(6, "div", 15)(7, "select", 16)(8, "option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Today");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Yesterday");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Tomorrow");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Monthly");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "Weekly");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 22)(19, "h1", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "45");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "h6", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "Due Tasks");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 25)(24, "h6", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, "Completed: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "14");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 11)(29, "div", 12)(30, "div", 13)(31, "div", 14)(32, "h5", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33, "Features");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "div", 22)(35, "h1", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36, "80");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "h6", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38, "Proposals");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "div", 25)(40, "h6", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](41, "Implemented: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43, "14");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "div", 11)(45, "div", 12)(46, "div", 13)(47, "div", 14)(48, "h5", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](49, "Issues");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "div", 22)(51, "h1", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](52, "34");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "h6", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](54, "Open");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "div", 25)(56, "h6", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](57, "Closed today: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](59, "10");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "div", 11)(61, "div", 12)(62, "div", 13)(63, "div", 14)(64, "h5", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](65, "Overdue");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](66, "div", 22)(67, "h1", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](68, "4");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](69, "h6", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](70, "Tasks");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](71, "div", 25)(72, "h6", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](73, "Task Solved: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](74, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](75, "7");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](76, "div", 27)(77, "div", 12)(78, "div", 28)(79, "div", 10)(80, "div", 29)(81, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](82, "Task Distribution");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](83, "div", 30)(84, "div", 15)(85, "select", 16)(86, "option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](87, "Today");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](88, "option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](89, "Yesterday");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](90, "option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](91, "Tomorrow");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](92, "option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](93, "Monthly");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](94, "option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](95, "Weekly");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](96, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](97, "ngx-charts-pie-chart", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](98, "div", 27)(99, "div", 12)(100, "div", 28)(101, "div", 10)(102, "div", 29)(103, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](104, "Schedule");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](105, "div", 30)(106, "div", 15)(107, "select", 16)(108, "option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](109, "Today");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](110, "option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](111, "Yesterday");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](112, "option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](113, "Tomorrow");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](114, "option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](115, "Monthly");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](116, "option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](117, "Weekly");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](118, "div", 13)(119, "div", 33)(120, "div", 14)(121, "div", 34)(122, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](123, "Group Meeting");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](124, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](125, "30 minutes");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](126, "div", 35)(127, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](128, "app-feather-icons", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](129, "div", 38)(130, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](131, "Project");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](132, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](133, "Requirements");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](134, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](135, "Discussion");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](136, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](137, "Planning");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](138, "div", 14)(139, "div", 34)(140, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](141, "Public Beta Release");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](142, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](143, "10:00 PM");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](144, "app-feather-icons", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](145, "div", 14)(146, "div", 34)(147, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](148, "Lunch");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](149, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](150, "12:30 PM");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](151, "app-feather-icons", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](152, "div", 14)(153, "div", 34)(154, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](155, "Clients Timing");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](156, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](157, "2:00 PM to 6:00 PM");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](158, "app-feather-icons", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](159, "div", 2)(160, "div", 12)(161, "div", 40)(162, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](163, "Github Issues");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](164, "div", 13)(165, "div", 10)(166, "div", 41)(167, "div", 42)(168, "div", 43)(169, "div", 44)(170, "div", 45)(171, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](172, "Created");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](173, "h5", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](174, "27");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](175, "x-chartist", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](176, "div", 43)(177, "div", 44)(178, "div", 45)(179, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](180, "Fixed");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](181, "h5", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](182, "8");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](183, "x-chartist", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](184, "div", 43)(185, "div", 44)(186, "div", 45)(187, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](188, "Re-opened");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](189, "h5", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](190, "2");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](191, "x-chartist", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](192, "div", 43)(193, "div", 44)(194, "div", 45)(195, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](196, "Closed");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](197, "h5", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](198, "10");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](199, "x-chartist", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](200, "div", 43)(201, "div", 44)(202, "div", 45)(203, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](204, "Wont'fix");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](205, "h5", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](206, "25");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](207, "x-chartist", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](208, "div", 43)(209, "div", 44)(210, "div", 45)(211, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](212, "Need's test");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](213, "h5", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](214, "5");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](215, "x-chartist", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](216, "div", 53)(217, "div", 54)(218, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](219, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](220, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](221, "Closed Issues");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](222, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](223, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](224, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](225, "Issues");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](226, "div", 59)(227, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](228, "x-chartist", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](97);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("view", ctx_r1.view)("scheme", ctx_r1.doughnutChartColorScheme)("results", ctx_r1.doughnutData)("explodeSlices", true)("labels", ctx_r1.doughnutChartShowLabels)("arcWidth", 0.5)("doughnut", true)("gradient", ctx_r1.doughnutChartGradient);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", "more-horizontal");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", "more-horizontal");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", "more-horizontal");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", "more-horizontal");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("configuration", ctx_r1.chart1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("configuration", ctx_r1.chart2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("configuration", ctx_r1.chart3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("configuration", ctx_r1.chart4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("configuration", ctx_r1.chart5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("configuration", ctx_r1.chart1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("configuration", ctx_r1.chart7);
  }
}
function ProjectComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 62)(1, "div", 10)(2, "div", 2)(3, "div", 12)(4, "div", 40)(5, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Current Progress");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 13)(8, "div", 63)(9, "table", 64)(10, "tbody")(11, "tr")(12, "td")(13, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "img", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 67)(16, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "Web application");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "Design & development");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "td")(21, "div", 65)(22, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "Latest Updated Today at 1:30 PM");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "span", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](25, "i", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "10:32");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "span", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](28, "i", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "540");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "td")(31, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](32, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "tr")(34, "td")(35, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](36, "img", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "div", 67)(38, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39, "Login module");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](41, "Development");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "td")(43, "div", 65)(44, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](45, "Latest Updated Today at 4:00 PM");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "span", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](47, "i", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](48, "1:32");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "span", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](50, "i", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](51, "700");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "td")(53, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](54, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "tr")(56, "td")(57, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](58, "img", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "div", 67)(60, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](61, "Module testing");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](62, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](63, "Testing");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](64, "td")(65, "div", 65)(66, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](67, "Latest Updated Today at 5:45 PM");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](68, "span", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](69, "i", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](70, "11:40");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](71, "span", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](72, "i", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](73, "425");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](74, "td")(75, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](76, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](77, "div", 41)(78, "div", 12)(79, "div", 40)(80, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](81, "Budget Distribution");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](82, "div", 77)(83, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](84, "google-chart", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](85, "div", 41)(86, "div", 12)(87, "div", 28)(88, "div", 10)(89, "div", 29)(90, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](91, "Spent");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](92, "div", 30)(93, "div", 15)(94, "select", 16)(95, "option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](96, "Today");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](97, "option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](98, "Yesterday");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](99, "option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](100, "Tomorrow");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](101, "option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](102, "Monthly");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](103, "option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](104, "Weekly");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](105, "div", 80)(106, "div", 81)(107, "div", 82)(108, "div", 83)(109, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](110, "Weekly spent");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](111, "h2", 24)(112, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](113, "i", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](114, "12,5000");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](115, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](116, "x-chartist", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](117, "div", 80)(118, "div", 81)(119, "div", 82)(120, "div", 83)(121, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](122, "Total spent");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](123, "h2", 24)(124, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](125, "i", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](126, "15,7452");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](127, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](128, "x-chartist", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](129, "div", 80)(130, "div", 81)(131, "div", 82)(132, "div", 83)(133, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](134, "Remaining");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](135, "h2", 24)(136, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](137, "i", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](138, "18,5438");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](139, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](140, "x-chartist", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](141, "div", 86)(142, "div", 81)(143, "div", 82)(144, "div", 87)(145, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](146, "Total Budget");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](147, "h2", 24)(148, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](149, "i", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](150, "34,5812");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](84);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("data", ctx_r2.pieChart1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("configuration", ctx_r2.barChartSingle1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("configuration", ctx_r2.barChartSingle2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("configuration", ctx_r2.barChartSingle3);
  }
}
function ProjectComponent_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 88)(1, "div", 10)(2, "div", 2)(3, "div", 12)(4, "div", 40)(5, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Team Members");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 13)(8, "div", 89)(9, "table", 64)(10, "thead")(11, "tr")(12, "th", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "th", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Position");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "th", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "Office");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "th", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "E-Mail");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "th", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "Phone");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "tbody")(23, "tr")(24, "td")(25, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](26, "img", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 67)(28, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "Jerry Patterson");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "td")(31, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, "Design Manager");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "td")(34, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35, "Integer");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "td")(37, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38, "jerry13@gmail.com");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "td")(40, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](41, "+91 264 570 4611");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "tr")(43, "td")(44, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](45, "img", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "div", 67)(47, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](48, "Rosa Matthews");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "td")(50, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](51, "Director of Sales");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "td")(53, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](54, "Ipsum");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "td")(56, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](57, "ros456@gmail.com");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "td")(59, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](60, "+01 967 487 1873");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "tr")(62, "td")(63, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](64, "img", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](65, "div", 67)(66, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](67, "Alvaro Aguirre");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](68, "td")(69, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](70, "Office Assistant");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](71, "td")(72, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](73, "Praesent");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](74, "td")(75, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](76, "alvar76@gmail.com");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](77, "td")(78, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](79, "+48 724 585 0012");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](80, "tr")(81, "td")(82, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](83, "img", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](84, "div", 67)(85, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](86, "Jerry Patterson");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](87, "td")(88, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](89, "Programmer Analyst");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](90, "td")(91, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](92, "Ipsum");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](93, "td")(94, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](95, "jerry13@gmail.com");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](96, "td")(97, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](98, "+91 264 570 4611");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](99, "tr")(100, "td")(101, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](102, "img", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](103, "div", 67)(104, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](105, "Anne Snyder");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](106, "td")(107, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](108, "Social Worker");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](109, "td")(110, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](111, "Donec");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](112, "td")(113, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](114, "annsny@gmail.com");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](115, "td")(116, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](117, "+61 480 087 1175");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](118, "tr")(119, "td")(120, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](121, "img", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](122, "div", 67)(123, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](124, "Alana Slacker");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](125, "td")(126, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](127, "Systems Engineer");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](128, "td")(129, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](130, "Etiam");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](131, "td")(132, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](133, "alana82@gmail.com");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](134, "td")(135, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](136, "+75 483 761 4680");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()()()()();
  }
}
class ProjectComponent {
  constructor() {
    this.doughnutData = _shared_data_dashboard_project__WEBPACK_IMPORTED_MODULE_0__.doughnutData;
    this.active1 = 1;
    this.vertical_stack_chart = _shared_data_dashboard_project__WEBPACK_IMPORTED_MODULE_0__.vertical_stack_chart;
    this.chart7 = _shared_data_chart_chartist__WEBPACK_IMPORTED_MODULE_1__.chart7;
    // doughnut
    this.view = _shared_data_dashboard_project__WEBPACK_IMPORTED_MODULE_0__.view;
    this.doughnutChartColorScheme = _shared_data_dashboard_project__WEBPACK_IMPORTED_MODULE_0__.doughnutChartcolorScheme;
    this.doughnutChartShowLabels = _shared_data_dashboard_project__WEBPACK_IMPORTED_MODULE_0__.doughnutChartShowLabels;
    this.doughnutChartGradient = _shared_data_dashboard_project__WEBPACK_IMPORTED_MODULE_0__.doughnutChartGradient;
    //vertical_stack_chart
    this.verticalStackChartColorScheme = _shared_data_dashboard_project__WEBPACK_IMPORTED_MODULE_0__.colorScheme;
    this.verticalStackChartshowXAxis = _shared_data_dashboard_project__WEBPACK_IMPORTED_MODULE_0__.showXAxis;
    this.verticalStackChartshowYAxis = _shared_data_dashboard_project__WEBPACK_IMPORTED_MODULE_0__.showYAxis;
    this.verticalStackChartgradient = _shared_data_dashboard_project__WEBPACK_IMPORTED_MODULE_0__.gradient;
    this.verticalStackChartshowLegend = _shared_data_dashboard_project__WEBPACK_IMPORTED_MODULE_0__.showLegend;
    this.verticalStackChartshowXAxisLabel = _shared_data_dashboard_project__WEBPACK_IMPORTED_MODULE_0__.showXAxisLabel;
    this.verticalStackChartshowYAxisLabel = _shared_data_dashboard_project__WEBPACK_IMPORTED_MODULE_0__.showYAxisLabel;
    this.chart1 = _shared_data_dashboard_project__WEBPACK_IMPORTED_MODULE_0__.chart1;
    this.chart2 = _shared_data_dashboard_project__WEBPACK_IMPORTED_MODULE_0__.chart2;
    this.chart3 = _shared_data_dashboard_project__WEBPACK_IMPORTED_MODULE_0__.chart3;
    this.chart4 = _shared_data_dashboard_project__WEBPACK_IMPORTED_MODULE_0__.chart4;
    this.chart5 = _shared_data_dashboard_project__WEBPACK_IMPORTED_MODULE_0__.chart5;
    this.chart6 = _shared_data_dashboard_project__WEBPACK_IMPORTED_MODULE_0__.chart6;
    this.pieChart1 = _shared_data_dashboard_project__WEBPACK_IMPORTED_MODULE_0__.pieChart1;
    this.barChartSingle1 = _shared_data_dashboard_project__WEBPACK_IMPORTED_MODULE_0__.barChartSingle1;
    this.barChartSingle2 = _shared_data_dashboard_project__WEBPACK_IMPORTED_MODULE_0__.barChartSingle2;
    this.barChartSingle3 = _shared_data_dashboard_project__WEBPACK_IMPORTED_MODULE_0__.barChartSingle3;
    Object.assign(this, {
      doughnutData: _shared_data_dashboard_project__WEBPACK_IMPORTED_MODULE_0__.doughnutData,
      vertical_stack_chart: _shared_data_dashboard_project__WEBPACK_IMPORTED_MODULE_0__.vertical_stack_chart,
      multiData: _shared_data_dashboard_project__WEBPACK_IMPORTED_MODULE_0__.multiData
    });
  }
  ngOnInit() {}
  static #_ = this.ɵfac = function ProjectComponent_Factory(t) {
    return new (t || ProjectComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: ProjectComponent,
    selectors: [["app-project"]],
    decls: 18,
    vars: 5,
    consts: [[1, "container-fluid"], ["id", "project", 1, "row"], [1, "col-sm-12"], ["ngbNav", "", 1, "nav-tabs", 3, "activeId", "activeIdChange"], ["nav", "ngbNav"], [3, "ngbNavItem"], ["ngbNavLink", ""], ["ngbNavContent", ""], [1, "mt-2", 3, "ngbNavOutlet"], ["id", "home", "role", "tabpanel", "aria-labelledby", "home", 1, "tab-pane", "fade", "show"], [1, "row"], [1, "col-xl-3", "col-sm-6"], [1, "card"], [1, "card-body"], [1, "media"], [1, "select2-drpdwn-project", "select-options"], ["name", "select", 1, "form-control", "form-control-primary", "btn-square"], ["value", "opt1"], ["value", "opt2"], ["value", "opt3"], ["value", "opt4"], ["value", "opt5"], [1, "project-widgets", "text-center"], [1, "font-primary", "counter"], [1, "mb-0"], [1, "card-footer", "project-footer"], [1, "counter"], [1, "col-xl-6"], [1, "card-header", "project-header"], [1, "col-sm-8"], [1, "col-sm-4"], [1, "card-body", "chart-block", "chart-vertical-center", "project-charts"], [3, "view", "scheme", "results", "explodeSlices", "labels", "arcWidth", "doughnut", "gradient"], [1, "schedule"], [1, "flex-grow-1"], ["ngbDropdown", "", 1, "dropdown", "schedule-dropdown", "d-inline-block"], ["id", "dropdownMenuButton", "ngbDropdownToggle", "", 1, "btn"], [3, "icon"], ["ngbDropdownMenu", "", "aria-labelledby", "dropdownBasic1"], [1, "dropdown-item"], [1, "card-header"], [1, "col-xl-6", "xl-100"], [1, "row", "more-projects"], [1, "col-sm-6", "xl-4"], [1, "projects-main"], [1, "project-content"], [1, "counter", "mb-0"], [1, "project-small-chart-1", "project-small", 3, "configuration"], [1, "project-small-chart-2", "project-small", 3, "configuration"], [1, "project-small-chart-3", "project-small", 3, "configuration"], [1, "project-small-chart-4", "project-small", 3, "configuration"], [1, "project-small-chart-5", "project-small", 3, "configuration"], [1, "project-small-chart-6", "project-small", 3, "configuration"], [1, "col-xl-6", "xl-100", "github-lg"], [1, "show-value-top", "d-flex"], [1, "value-left", "d-inline-block"], [1, "square", "bg-primary", "d-inline-block"], [1, "value-right", "d-inline-block"], [1, "square", "d-inline-block", "bg-secondary"], [1, "flot-chart-container"], ["id", "github-issues", 1, "flot-chart-placeholder"], [3, "configuration"], ["id", "budget", "role", "tabpanel", "aria-labelledby", "budget", 1, "tab-pane", "fade", "show"], [1, "table-responsive", "current-progress"], [1, "table", "table-bordernone"], [1, "d-inline-block", "align-middle"], ["src", "assets/images/user/1.jpg", "alt", "", 1, "img-radius", "img-50", "align-top", "m-r-15", "rounded-circle"], [1, "d-inline-block"], [1, "me-current"], [1, "fa", "fa-clock-o"], [1, "fa", "fa-comment"], [1, "progress", "sm-progress-bar"], ["role", "progressbar", "aria-valuenow", "60", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-primary", 2, "width", "60%"], ["src", "assets/images/user/4.jpg", "alt", "", 1, "img-radius", "img-50", "align-top", "m-r-15", "rounded-circle"], ["role", "progressbar", "aria-valuenow", "50", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-primary", 2, "width", "50%"], ["src", "assets/images/user/7.jpg", "alt", "", 1, "img-radius", "img-50", "align-top", "m-r-15", "rounded-circle"], ["role", "progressbar", "aria-valuenow", "90", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-primary", 2, "width", "90%"], [1, "card-body", "chart-block"], [1, "flot-chart-container", "budget-chart"], [3, "data"], [1, "card-body", "spent"], [1, "spent-graph"], [1, "d-flex"], [1, "project-budget"], ["data-feather", "dollar-sign"], [1, "projects-main", "mb-0"], [1, "card-footer", "spent"], [1, "project-budget", "m-0"], ["id", "team-members", "role", "tabpanel", "aria-labelledby", "team-members", 1, "tab-pane", "fade", "show"], [1, "table-responsive", "sellers", "team-members"], ["scope", "col"], ["src", "assets/images/user/6.jpg", "alt", "", 1, "img-radius", "img-50", "align-top", "m-r-15", "rounded-circle"], ["src", "assets/images/user/2.png", "alt", "", 1, "img-radius", "img-50", "align-top", "m-r-15", "rounded-circle"], ["src", "assets/images/user/3.jpg", "alt", "", 1, "img-radius", "img-50", "align-top", "m-r-15", "rounded-circle"], ["src", "assets/images/user/15.png", "alt", "", 1, "img-radius", "img-50", "align-top", "m-r-15", "rounded-circle"], ["src", "assets/images/user/5.jpg", "alt", "", 1, "img-radius", "img-50", "align-top", "m-r-15", "rounded-circle"]],
    template: function ProjectComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "ul", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("activeIdChange", function ProjectComponent_Template_ul_activeIdChange_3_listener($event) {
          return ctx.active1 = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "li", 5)(6, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, ProjectComponent_ng_template_8_Template, 229, 19, "ng-template", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "li", 5)(10, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Budget Summery");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, ProjectComponent_ng_template_12_Template, 151, 4, "ng-template", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "li", 5)(14, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Team Members");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, ProjectComponent_ng_template_16_Template, 137, 0, "ng-template", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("activeId", ctx.active1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngbNavItem", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngbNavItem", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngbNavItem", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngbNavOutlet", _r0);
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgSelectMultipleOption"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbDropdownMenu, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbNavContent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbNav, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbNavItem, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbNavItemRole, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbNavLink, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbNavLinkBase, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbNavOutlet, ng_chartist__WEBPACK_IMPORTED_MODULE_6__.ChartistComponent, _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_7__.PieChartComponent, ng2_google_charts__WEBPACK_IMPORTED_MODULE_8__.GoogleChartComponent, _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_2__.FeatherIconsComponent],
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"],
    encapsulation: 2
  });
}

/***/ }),

/***/ 43576:
/*!*****************************************************************!*\
  !*** ./src/app/components/dashboard/server/server.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ServerComponent: () => (/* binding */ ServerComponent)
/* harmony export */ });
/* harmony import */ var _shared_data_dashboard_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../shared/data/dashboard/server */ 92558);
/* harmony import */ var _shared_data_tables_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/data/tables/server */ 6264);
/* harmony import */ var src_app_shared_directives_NgbdSortableHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/directives/NgbdSortableHeader */ 34469);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var src_app_shared_services_table_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/table.service */ 13357);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 76101);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-charts */ 46673);
/* harmony import */ var _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/components/feather-icons/feather-icons.component */ 49177);










function ServerComponent_tr_94_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr")(1, "td", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "td")(4, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", item_r1.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", item_r1.badge);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r1.user);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r1.IO);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r1.cpu);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r1.mem);
  }
}
class ServerComponent {
  constructor(service) {
    this.service = service;
    this.explorer = [];
    this.selected = [];
    this.settings = {
      columns: {
        name: {
          title: 'Name'
        },
        user: {
          title: 'User Name',
          type: 'html'
        },
        IO: {
          title: 'IO'
        },
        cpu: {
          title: 'CPU'
        },
        mem: {
          title: 'MEM'
        }
      }
    };
    this.memoryChartType = _shared_data_dashboard_server__WEBPACK_IMPORTED_MODULE_0__.memoryChartType;
    this.memoryChartLabels = _shared_data_dashboard_server__WEBPACK_IMPORTED_MODULE_0__.memoryChartLabels;
    this.memoryChartData = _shared_data_dashboard_server__WEBPACK_IMPORTED_MODULE_0__.memoryChartData;
    this.memoryChartOptions = _shared_data_dashboard_server__WEBPACK_IMPORTED_MODULE_0__.memoryChartOptions;
    this.memoryChartColors = _shared_data_dashboard_server__WEBPACK_IMPORTED_MODULE_0__.memoryChartColors;
    this.memoryChartLegend = _shared_data_dashboard_server__WEBPACK_IMPORTED_MODULE_0__.memoryChartLegend;
    this.cpuChartType = _shared_data_dashboard_server__WEBPACK_IMPORTED_MODULE_0__.cpuChartType;
    this.cpuChartLabels = _shared_data_dashboard_server__WEBPACK_IMPORTED_MODULE_0__.cpuChartLabels;
    this.cpuChartData = _shared_data_dashboard_server__WEBPACK_IMPORTED_MODULE_0__.cpuChartData;
    this.cpuChartOptions = _shared_data_dashboard_server__WEBPACK_IMPORTED_MODULE_0__.cpuChartOptions;
    this.cpuChartColors = _shared_data_dashboard_server__WEBPACK_IMPORTED_MODULE_0__.cpuChartColors;
    this.cpuChartLegend = _shared_data_dashboard_server__WEBPACK_IMPORTED_MODULE_0__.cpuChartLegend;
    this.tableItem$ = service.tableItem$;
    this.total$ = service.total$;
    this.service.setUserData(_shared_data_tables_server__WEBPACK_IMPORTED_MODULE_1__.SERVERDB);
  }
  onSort({
    column,
    direction
  }) {
    // resetting other headers
    this.headers.forEach(header => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });
    this.service.sortColumn = column;
    this.service.sortDirection = direction;
  }
  onSelect(selected) {
    this.service.deleteSingleData(selected);
  }
  ngOnInit() {}
  fetch(cb) {
    const req = new XMLHttpRequest();
    req.open('GET', 'assets/data/tables/explorer.json');
    req.onload = () => {
      cb(JSON.parse(req.response));
    };
    req.send();
  }
  ngAfterViewChecked() {}
  static #_ = this.ɵfac = function ServerComponent_Factory(t) {
    return new (t || ServerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_services_table_service__WEBPACK_IMPORTED_MODULE_3__.TableService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: ServerComponent,
    selectors: [["app-server"]],
    viewQuery: function ServerComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](src_app_shared_directives_NgbdSortableHeader__WEBPACK_IMPORTED_MODULE_2__.NgbdSortableHeader, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.headers = _t);
      }
    },
    decls: 171,
    vars: 27,
    consts: [[1, "container-fluid"], [1, "row"], [1, "col-xl-3", "xl-50", "col-sm-6"], [1, "card", "server-card-bg"], [1, "card-body", "server-widgets"], [1, "d-flex"], [3, "icon"], [1, "top-server", "m-l-10"], [1, "mb-0"], [1, "bottom-server"], [1, "progress"], ["role", "progressbar", "aria-valuenow", "85", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar-animated", "bg-primary", "progress-bar-striped", 2, "width", "25%"], [1, "second-color", "counter", "mb-0"], ["role", "progressbar", "aria-valuenow", "85", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar-animated", "bg-primary", "progress-bar-striped", 2, "width", "85%"], ["role", "progressbar", "aria-valuenow", "75", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar-animated", "bg-primary", "progress-bar-striped", 2, "width", "75%"], ["role", "progressbar", "aria-valuenow", "85", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar-animated", "bg-primary", "progress-bar-striped", 2, "width", "50%"], [1, "col-sm-12"], [1, "card"], [1, "card-header"], [1, "card-body", "server-canvas"], ["baseChart", "", "id", "myGraph", 1, "chart", 3, "legend", "datasets", "labels", "options", "type"], [1, "col-xl-8", "xl-100"], [1, "card-header", "server-header"], [1, "d-inline-block"], [1, "badge", "badge-primary", "m-l-10", "d-inline-block", "mt-0"], [1, "card-body", "server-datatable"], [1, "table-responsive"], [1, "custom-datatable"], [1, "table"], ["scope", "col", "sortable", "name", 3, "sort"], ["scope", "col", "sortable", "user", 3, "sort"], ["scope", "col", "sortable", "IO", 3, "sort"], ["scope", "col", "sortable", "cpu", 3, "sort"], ["scope", "col", "sortable", "mem", 3, "sort"], [4, "ngFor", "ngForOf"], [1, "d-flex", "justify-content-between", "p-2"], [3, "collectionSize", "page", "pageSize", "pageChange"], [1, "col-xl-4", "xl-100"], [1, "card-body"], [1, "server-activity"], [1, "d-flex", "m-b-30"], [1, "font-primary", "m-r-10", 3, "icon"], [1, "media-body", "text-end"], [1, "font-secondary", "m-r-10", 3, "icon"], ["scope", "row"], [3, "ngClass"]],
    template: function ServerComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "app-feather-icons", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 7)(8, "h6", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Storage");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 9)(11, "h5", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "85GB / ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "100Gb");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 2)(18, "div", 3)(19, "div", 4)(20, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](21, "app-feather-icons", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "div", 7)(23, "h6", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24, "Latency");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "div", 9)(26, "h5")(27, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28, "40");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](30, "/ms");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](32, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "div", 2)(34, "div", 3)(35, "div", 4)(36, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](37, "app-feather-icons", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "div", 7)(39, "h6", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](40, "Bandwidth");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "div", 9)(42, "h5", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](43, "75GB / ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](45, "100Gb");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](47, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](48, "div", 2)(49, "div", 3)(50, "div", 4)(51, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](52, "app-feather-icons", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](53, "div", 7)(54, "h6", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](55, "Cluster Load");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](56, "div", 9)(57, "h5", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](58, "70% ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](59, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](60, "app-feather-icons", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](61, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](62, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](63, "div", 16)(64, "div", 17)(65, "div", 18)(66, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](67, "Memory Usage");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](68, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](69, "canvas", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](70, "div", 21)(71, "div", 17)(72, "div", 22)(73, "h5", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](74, "Process Explorer");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](75, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](76, "57 Process");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](77, "div", 25)(78, "div", 26)(79, "div", 27)(80, "table", 28)(81, "thead")(82, "tr")(83, "th", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("sort", function ServerComponent_Template_th_sort_83_listener($event) {
          return ctx.onSort($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](84, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](85, "th", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("sort", function ServerComponent_Template_th_sort_85_listener($event) {
          return ctx.onSort($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](86, "User");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](87, "th", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("sort", function ServerComponent_Template_th_sort_87_listener($event) {
          return ctx.onSort($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](88, "IO");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](89, "th", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("sort", function ServerComponent_Template_th_sort_89_listener($event) {
          return ctx.onSort($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](90, "CPU");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](91, "th", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("sort", function ServerComponent_Template_th_sort_91_listener($event) {
          return ctx.onSort($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](92, "Mem");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](93, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](94, ServerComponent_tr_94_Template, 12, 6, "tr", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](95, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](96, "div", 35)(97, "ngb-pagination", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("pageChange", function ServerComponent_Template_ngb_pagination_pageChange_97_listener($event) {
          return ctx.service.page = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](98, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](99, "div", 37)(100, "div", 17)(101, "div", 22)(102, "h5", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](103, "I/O Activity");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](104, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](105, "Last 10 Activity");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](106, "div", 38)(107, "div", 39)(108, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](109, "app-feather-icons", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](110, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](111, "Brandley");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](112, "div", 42)(113, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](114, "14 KB");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](115, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](116, "app-feather-icons", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](117, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](118, "Cara");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](119, "div", 42)(120, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](121, "5 KB");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](122, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](123, "app-feather-icons", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](124, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](125, "Airi");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](126, "div", 42)(127, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](128, "15 MB");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](129, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](130, "app-feather-icons", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](131, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](132, "Cedric");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](133, "div", 42)(134, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](135, "4 KB");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](136, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](137, "app-feather-icons", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](138, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](139, "Cara");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](140, "div", 42)(141, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](142, "20 KB");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](143, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](144, "app-feather-icons", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](145, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](146, "Airi");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](147, "div", 42)(148, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](149, "25 MB");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](150, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](151, "app-feather-icons", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](152, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](153, "Brandley");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](154, "div", 42)(155, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](156, "14 KB");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](157, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](158, "app-feather-icons", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](159, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](160, "Cara");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](161, "div", 42)(162, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](163, "5 KB");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](164, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](165, "app-feather-icons", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](166, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](167, "Cara");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](168, "div", 42)(169, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](170, "20 KB");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("icon", "codepen");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("icon", "clock");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("icon", "server");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("icon", "anchor");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("icon", "trending-down");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("legend", ctx.memoryChartLegend)("datasets", ctx.memoryChartData)("labels", ctx.memoryChartLabels)("options", ctx.memoryChartOptions)("type", ctx.memoryChartType);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](95, 23, ctx.tableItem$));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("collectionSize", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](98, 25, ctx.total$))("page", ctx.service.page)("pageSize", ctx.service.pageSize);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("icon", "arrow-down");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("icon", "arrow-down");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("icon", "arrow-up");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("icon", "arrow-up");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("icon", "arrow-down");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("icon", "arrow-up");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("icon", "arrow-down");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("icon", "arrow-down");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("icon", "arrow-down");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbPagination, ng2_charts__WEBPACK_IMPORTED_MODULE_8__.BaseChartDirective, _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_4__.FeatherIconsComponent, src_app_shared_directives_NgbdSortableHeader__WEBPACK_IMPORTED_MODULE_2__.NgbdSortableHeader, _angular_common__WEBPACK_IMPORTED_MODULE_6__.AsyncPipe],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 6606:
/*!*************************************************************************!*\
  !*** ./src/app/components/dashboard/university/university.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UniversityComponent: () => (/* binding */ UniversityComponent)
/* harmony export */ });
/* harmony import */ var _shared_data_dashboard_university__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../shared/data/dashboard/university */ 3653);
/* harmony import */ var _shared_data_chart_chartist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/data/chart/chartist */ 65871);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 76101);
/* harmony import */ var ng_chartist__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-chartist */ 83568);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-charts */ 46673);
/* harmony import */ var _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/components/feather-icons/feather-icons.component */ 49177);
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-apexcharts */ 57854);








// var Knob = require('knob') // browserify require
var primary = localStorage.getItem("primary_color") || "#4466f2";
var secondary = localStorage.getItem("secondary_color") || "#1ea6ec";
class UniversityComponent {
  constructor() {
    this.chart1 = _shared_data_dashboard_university__WEBPACK_IMPORTED_MODULE_0__.chart1;
    this.chart2 = _shared_data_dashboard_university__WEBPACK_IMPORTED_MODULE_0__.chart2;
    this.chart3 = _shared_data_dashboard_university__WEBPACK_IMPORTED_MODULE_0__.chart3;
    this.chart4 = _shared_data_dashboard_university__WEBPACK_IMPORTED_MODULE_0__.chart4;
    this.chart5 = _shared_data_dashboard_university__WEBPACK_IMPORTED_MODULE_0__.chart5;
    this.admissionChartType = _shared_data_dashboard_university__WEBPACK_IMPORTED_MODULE_0__.admissionChartType;
    this.admissionChartLabels = _shared_data_dashboard_university__WEBPACK_IMPORTED_MODULE_0__.admissionChartLabels;
    this.admissionChartData = _shared_data_dashboard_university__WEBPACK_IMPORTED_MODULE_0__.admissionChartData;
    this.admissionChartOptions = _shared_data_dashboard_university__WEBPACK_IMPORTED_MODULE_0__.admissionChartOptions;
    this.admissionChartColors = _shared_data_dashboard_university__WEBPACK_IMPORTED_MODULE_0__.admissionChartColors;
    this.admissionChartLegend = _shared_data_dashboard_university__WEBPACK_IMPORTED_MODULE_0__.admissionChartLegend;
    this.smallColumnChart1 = _shared_data_chart_chartist__WEBPACK_IMPORTED_MODULE_1__.smallColumnChart1;
    this.RankerRatio = {
      series: [25],
      chart: {
        type: "radialBar",
        offsetY: -20,
        sparkline: {
          enabled: true
        }
      },
      plotOptions: {
        radialBar: {
          startAngle: -135,
          endAngle: 135,
          track: {
            background: "#e7e7e7",
            // strokeWidth: "60%",
            margin: 5 // margin is in pixels
          },

          hollow: {
            margin: 15,
            size: "60%"
          },
          dataLabels: {
            name: {
              show: false
            },
            value: {
              offsetY: 64,
              fontSize: "22px"
            }
          }
        }
      },
      grid: {
        padding: {
          top: -10
        }
      },
      stroke: {
        lineCap: "round"
      },
      labels: ["Average Results"]
    };
    this.TotalProfit = {
      series: [85],
      chart: {
        height: 300,
        type: "radialBar"
      },
      plotOptions: {
        radialBar: {
          hollow: {
            size: "80%"
          },
          track: {
            background: "#4466F2"
          }
        }
      },
      stroke: {
        lineCap: "round"
      },
      fill: {
        colors: ["#fff"]
      },
      dataLabels: {
        name: {
          show: true,
          color: "#fff",
          offsetY: -10
        }
      },
      labels: ["TOTAL Student"]
    };
  }
  ngOnInit() {}
  static #_ = this.ɵfac = function UniversityComponent_Factory(t) {
    return new (t || UniversityComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: UniversityComponent,
    selectors: [["app-university"]],
    decls: 473,
    vars: 28,
    consts: [[1, "container-fluid"], [1, "row"], [1, "col-xl-6", "xl-100"], ["data-intro", "This is University Earning Chart", 1, "card"], [1, "card-header", "university-header"], [1, "col-sm-6"], [1, "pull-right", "d-flex", "buttons-right"], [1, "right-header"], [1, "onhover-dropdown"], ["type", "button", 1, "btn", "btn-primary"], [1, "pe-0"], [1, "fa", "fa-angle-down"], [1, "onhover-show-div", "right-header-dropdown"], ["href", "javascript:void(0)", 1, "d-block"], ["type", "button", 1, "btn", "btn-light"], [1, "card-body", "height-curves"], [1, "curves-2"], [1, "animate-curve", "ct-golden-section", 3, "configuration"], [1, "col-md-6"], [1, "card"], [1, "card-body"], [1, "d-flex", "feather-main"], [1, "feather-icon-block"], [3, "icon"], [1, "media-body", "align-self-center"], [1, "media", "chart-university"], [1, "media-body"], [1, "mb-0"], [1, "counter"], [1, "small-bar"], [1, "ct-small-left", "flot-chart-container"], [1, "d-flex", "chart-university"], [1, "flex-grow-1"], [1, "ct-small-right", "flot-chart-container", 3, "configuration"], [1, "card-header"], [1, "table-responsive", "professor-table"], [1, "table", "table-bordernone"], ["src", "assets/images/university/math-1.jpg", "alt", "", 1, "img-radius", "img-35", "align-top", "m-r-15", "rounded-circle"], [1, "professor-block", "d-inline-block"], ["for", "edo-ani", 1, "pull-right", "mb-0"], ["id", "edo-ani", "type", "radio", "name", "rdo-ani", 1, "radio_animated"], ["src", "assets/images/university/math-2.jpg", "alt", "", 1, "img-radius", "img-25", "align-top", "m-r-15", "rounded-circle"], ["for", "edo-ani1", 1, "pull-right", "mb-0"], ["id", "edo-ani1", "type", "radio", "name", "rdo-ani", "checked", "", 1, "radio_animated"], ["src", "assets/images/university/bio-1.jpg", "alt", "", 1, "img-radius", "img-25", "align-top", "m-r-15", "rounded-circle"], ["for", "edo-ani2", 1, "pull-right", "mb-0"], ["id", "edo-ani2", "type", "radio", "name", "rdo-ani", "checked", "", 1, "radio_animated"], ["src", "assets/images/university/bio-2.jpg", "alt", "", 1, "img-radius", "img-35", "align-top", "m-r-15", "rounded-circle"], ["for", "edo-ani3", 1, "pull-right", "mb-0"], ["id", "edo-ani3", "type", "radio", "name", "rdo-ani", 1, "radio_animated"], [1, "col-xl-4", "xl-50"], [1, "card", "height-equal"], [1, "upcoming-event"], [1, "upcoming-innner", "d-flex"], [1, "bg-primary", "left", "m-r-20"], [1, "pull-right"], [1, "f-w-600"], ["data-intro", "This is Ranker Ratio", 1, "card", "height-equal"], [1, "knob-block", "text-center", "knob-sm"], [3, "series", "chart", "plotOptions", "grid", "labels", "stroke"], [1, "ranker", "text-center"], [1, "col-xl-4", "xl-100"], [1, "notifiaction-media"], [1, "media"], [1, "circle-left"], [1, "pull-right", "f-12"], [1, "card-footer", "btn-more", "text-center"], ["href", "javascript:void(0)"], [1, "col-xl-6"], [1, "btn", "btn-primary", "btn-sm", "header-btn", "btn-pill"], [1, "pull-right", "statistics"], [1, "f-12", "mb-0"], [1, "font-primary", "font-weight-bold", "d-flex", "f-11", "pull-right"], [1, "fa", "fa-sort-up", "me-2"], [1, "number"], [1, "animate-curve2", "ct-golden-section", 3, "configuration"], [1, "f-12", "header-small", "mb-0"], [1, "board-chart", "ct-golden-section", 3, "configuration"], [1, "col-xl-8", "xl-50"], ["data-intro", "This is Our Topper List", 1, "card"], [1, "table-responsive", "topper-lists"], [1, "d-inline-block", "align-self-center"], [1, "form-group", "d-inline-block"], [1, "checkbox"], ["id", "checkbox1", "type", "checkbox"], ["for", "checkbox1"], ["src", "assets/images/user/4.jpg", "alt", "", 1, "img-radius", "img-40", "align-top", "m-r-15", "rounded-circle"], [1, "d-inline-block"], [1, "d-inline-block", "text-center"], ["src", "assets/images/university/chart-1.png", "alt", "", 1, "align-top"], ["id", "checkbox2", "type", "checkbox", "checked", ""], ["for", "checkbox2"], ["src", "assets/images/university/math-1.jpg", "alt", "", 1, "img-radius", "img-40", "align-top", "m-r-15", "rounded-circle"], [1, "check-dot", "d-inline-block"], ["src", "assets/images/university/chart-2.png", "alt", "", 1, "align-top"], ["id", "checkbox3", "type", "checkbox"], ["for", "checkbox3"], ["src", "assets/images/user/2.png", "alt", "", 1, "img-radius", "img-40", "align-top", "m-r-15", "rounded-circle"], ["src", "assets/images/university/chart-3.png", "alt", "", 1, "align-top"], ["id", "checkbox4", "type", "checkbox"], ["for", "checkbox4"], ["src", "assets/images/user/5.jpg", "alt", "", 1, "img-radius", "img-40", "align-top", "m-r-15", "rounded-circle"], ["src", "assets/images/university/chart-4.png", "alt", "", 1, "align-top"], [1, "card", "card-gradient"], [1, "card-body", "text-center", "o-hidden"], [1, "knob-header"], [1, "d-inline-block", "pull-right", "f-16"], [1, "knob-block", "text-center", "knob-center", "university-knob"], [3, "series", "chart", "plotOptions", "labels", "stroke", "fill"], ["src", "assets/images/university/round.png", "alt", "", 1, "round-image"], [1, "custom-datepicker", "university-datepicker", 3, "navigate"], ["dp", ""], [1, "card-body", "chart-block", "admission-chart"], ["baseChart", "", "id", "myLineCharts", 1, "chart", "flot-chart-placeholder", 3, "legend", "datasets", "labels", "options", "type"]],
    template: function UniversityComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 1)(6, "div", 5)(7, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "University Earning");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 5)(10, "div", 6)(11, "div", 7)(12, "div", 8)(13, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, " Monthly ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 12)(18, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "Average");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "Maximum");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "Minimum");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 7)(25, "div", 8)(26, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, " yearly ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](29, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div", 12)(31, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, "Average");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, "Maximum");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36, "Minimum");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "div", 15)(38, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](39, "x-chartist", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "div", 2)(41, "div", 1)(42, "div", 18)(43, "div", 19)(44, "div", 20)(45, "div", 21)(46, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](47, "app-feather-icons", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "div", 24)(49, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](50, "Total Admission");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](52, "5678");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "div", 18)(54, "div", 19)(55, "div", 20)(56, "div", 21)(57, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](58, "app-feather-icons", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "div", 24)(60, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](61, "Total University Visit");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](62, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](63, "8569");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](64, "div", 5)(65, "div", 19)(66, "div", 20)(67, "div", 25)(68, "div", 26)(69, "h3", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](70, "app-feather-icons", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](71, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](72, "5683");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](73, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](74, "Html Course");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](75, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](76, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](77, "div", 5)(78, "div", 19)(79, "div", 20)(80, "div", 31)(81, "div", 32)(82, "h3", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](83, "app-feather-icons", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](84, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](85, "7243");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](86, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](87, "PHP Course");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](88, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](89, "x-chartist", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](90, "div", 18)(91, "div", 19)(92, "div", 34)(93, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](94, "Math Professors");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](95, "div", 20)(96, "div", 35)(97, "table", 36)(98, "tbody")(99, "tr")(100, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](101, "img", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](102, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](103, " luson keter ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](104, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](105, "Math Professors");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](106, "td")(107, "label", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](108, "input", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](109, "tr")(110, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](111, "img", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](112, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](113, " Elan hormas ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](114, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](115, "Bio Professors");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](116, "td")(117, "label", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](118, "input", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](119, "div", 18)(120, "div", 19)(121, "div", 34)(122, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](123, "Bio Professors");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](124, "div", 20)(125, "div", 35)(126, "table", 36)(127, "tbody")(128, "tr")(129, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](130, "img", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](131, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](132, " Erana siddy ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](133, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](134, "Director");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](135, "td")(136, "label", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](137, "input", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](138, "tr")(139, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](140, "img", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](141, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](142, " Tom kerrly ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](143, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](144, "Director");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](145, "td")(146, "label", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](147, "input", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](148, "div", 50)(149, "div", 51)(150, "div", 34)(151, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](152, "Upcoming Event");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](153, "div", 20)(154, "div", 52)(155, "div", 53)(156, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](157, "app-feather-icons", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](158, "div", 32)(159, "p", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](160, "Demo Content ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](161, "span", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](162, "Mar 18");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](163, "h6", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](164, "Quiz Compition");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](165, "p", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](166, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. lorem ipsum ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](167, "div", 53)(168, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](169, "app-feather-icons", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](170, "div", 32)(171, "p", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](172, "Demo Content ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](173, "span", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](174, "Sep 18");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](175, "h6", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](176, "Singing Compition");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](177, "p", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](178, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. lorem ipsum ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](179, "div", 53)(180, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](181, "app-feather-icons", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](182, "div", 32)(183, "p", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](184, "Demo Content ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](185, "span", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](186, "Dec 18");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](187, "h6", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](188, "Diwali Celebration");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](189, "p", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](190, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. lorem ipsum ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](191, "div", 50)(192, "div", 57)(193, "div", 34)(194, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](195, "Ranker Ratio");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](196, "div", 20)(197, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](198, "apx-chart", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](199, "div", 60)(200, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](201, "Student");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](202, "h5", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](203, "New Ranker 2018");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](204, "div", 61)(205, "div", 51)(206, "div", 34)(207, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](208, "Notification");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](209, "div", 20)(210, "div", 62)(211, "div", 63)(212, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](213, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](214, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](215, "You are confirmation visit..");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](216, "span", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](217, "1 Day Ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](218, "div", 63)(219, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](220, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](221, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](222, "Lorem Ipsum has been the..");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](223, "span", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](224, "5 Day Ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](225, "div", 63)(226, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](227, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](228, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](229, "Standard dummy text ever..");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](230, "span", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](231, "7 Day Ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](232, "div", 63)(233, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](234, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](235, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](236, "When an unknown printer..");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](237, "span", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](238, "9 Day Ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](239, "div", 63)(240, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](241, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](242, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](243, "Took a gallery of type..");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](244, "span", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](245, "6 Day Ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](246, "div", 66)(247, "a", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](248, "MORE...");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](249, "div", 68)(250, "div", 19)(251, "div", 34)(252, "div", 1)(253, "div", 5)(254, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](255, "Statistics");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](256, "button", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](257, "2017");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](258, "div", 5)(259, "div", 70)(260, "h5", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](261, "85");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](262, "p", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](263, "Statistics 2017");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](264, "div", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](265, "i", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](266, "span", 74)(267, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](268, "100");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](269, "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](270, "div", 20)(271, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](272, "x-chartist", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](273, "div", 68)(274, "div", 19)(275, "div", 34)(276, "div", 1)(277, "div", 5)(278, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](279, "Last 5 Year Board");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](280, "p", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](281, "18 september, 2018");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](282, "div", 5)(283, "div", 70)(284, "h5", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](285, "50");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](286, "p", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](287, "Board 2018");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](288, "div", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](289, "i", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](290, "span", 74)(291, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](292, "78");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](293, "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](294, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](295, "x-chartist", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](296, "div", 78)(297, "div", 79)(298, "div", 34)(299, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](300, "Our Topper List");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](301, "div", 20)(302, "div", 80)(303, "table", 36)(304, "tbody")(305, "tr")(306, "td")(307, "div", 81)(308, "div", 82)(309, "div", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](310, "input", 84)(311, "label", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](312, "img", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](313, "div", 87)(314, "span", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](315, "Ossim Keter");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](316, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](317, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](318, "sup");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](319, "st");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](320, " year");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](321, "td")(322, "div", 88)(323, "span", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](324, "+48 605 562 215");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](325, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](326, "Phone Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](327, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](328, "img", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](329, "td")(330, "div", 88)(331, "span", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](332, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](333, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](334, "Rank");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](335, "td")(336, "div", 88)(337, "span", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](338, "590/600");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](339, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](340, "Total marks");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](341, "tr")(342, "td")(343, "div", 81)(344, "div", 82)(345, "div", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](346, "input", 90)(347, "label", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](348, "img", 92)(349, "div", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](350, "div", 87)(351, "span", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](352, "Venter Loren");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](353, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](354, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](355, "sup");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](356, "st");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](357, " year");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](358, "td")(359, "div", 88)(360, "span", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](361, "+25 598 559 368");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](362, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](363, "Phone Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](364, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](365, "img", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](366, "td")(367, "div", 88)(368, "span", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](369, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](370, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](371, "Rank");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](372, "td")(373, "div", 88)(374, "span", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](375, "570/600");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](376, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](377, "Total marks");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](378, "tr")(379, "td")(380, "div", 81)(381, "div", 82)(382, "div", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](383, "input", 95)(384, "label", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](385, "img", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](386, "div", 87)(387, "span", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](388, "Fran Loain");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](389, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](390, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](391, "sup");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](392, "st");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](393, " year");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](394, "td")(395, "div", 88)(396, "span", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](397, "+65 659 145 235");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](398, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](399, "Phone Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](400, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](401, "img", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](402, "td")(403, "div", 88)(404, "span", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](405, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](406, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](407, "Rank");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](408, "td")(409, "div", 88)(410, "span", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](411, "565/600");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](412, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](413, "Total marks");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](414, "tr")(415, "td")(416, "div", 81)(417, "div", 82)(418, "div", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](419, "input", 99)(420, "label", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](421, "img", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](422, "div", 87)(423, "span", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](424, "Loften Horen");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](425, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](426, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](427, "sup");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](428, "st");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](429, " year");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](430, "td")(431, "div", 88)(432, "span", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](433, "+37 595 367 368");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](434, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](435, "Phone Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](436, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](437, "img", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](438, "td")(439, "div", 88)(440, "span", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](441, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](442, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](443, "Rank");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](444, "td")(445, "div", 88)(446, "span", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](447, "540/600");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](448, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](449, "Total marks");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](450, "div", 50)(451, "div", 103)(452, "div", 104)(453, "div", 105)(454, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](455, "Total Student");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](456, "div", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](457, "120 / ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](458, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](459, "130");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](460, "div", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](461, "apx-chart", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](462, "img", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](463, "div", 50)(464, "ngb-datepicker", 110, 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("navigate", function UniversityComponent_Template_ngb_datepicker_navigate_464_listener($event) {
          return ctx.date = $event.next;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](466, "div", 78)(467, "div", 19)(468, "div", 34)(469, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](470, "Admission Ratio");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](471, "div", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](472, "canvas", 113);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("configuration", ctx.chart1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", "command");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", "navigation");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", "dollar-sign");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", "dollar-sign");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("configuration", ctx.chart5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](68);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", "help-circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", "mic");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", "zap");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("series", ctx.RankerRatio.series)("chart", ctx.RankerRatio.chart)("plotOptions", ctx.RankerRatio.plotOptions)("grid", ctx.RankerRatio.grid)("labels", ctx.RankerRatio.labels)("stroke", ctx.RankerRatio.stroke);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](74);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("configuration", ctx.chart2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("configuration", ctx.chart3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](166);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("series", ctx.TotalProfit.series)("chart", ctx.TotalProfit.chart)("plotOptions", ctx.TotalProfit.plotOptions)("labels", ctx.TotalProfit.labels)("stroke", ctx.TotalProfit.stroke)("fill", ctx.TotalProfit.fill);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("legend", ctx.admissionChartLegend)("datasets", ctx.admissionChartData)("labels", ctx.admissionChartLabels)("options", ctx.admissionChartOptions)("type", ctx.admissionChartType);
      }
    },
    dependencies: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbDatepicker, ng_chartist__WEBPACK_IMPORTED_MODULE_5__.ChartistComponent, ng2_charts__WEBPACK_IMPORTED_MODULE_6__.BaseChartDirective, _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_2__.FeatherIconsComponent, ng_apexcharts__WEBPACK_IMPORTED_MODULE_7__.ChartComponent],
    styles: ["div.review canvas {\n  position: relative !important;\n}\n\n:focus {\n  outline-color: transparent !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvdW5pdmVyc2l0eS91bml2ZXJzaXR5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNkJBQUE7QUFDRjs7QUFFQTtFQUNFLHFDQUFBO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYucmV2aWV3IGNhbnZhcyB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjpmb2N1cyB7XHJcbiAgb3V0bGluZS1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
    encapsulation: 2
  });
}

/***/ }),

/***/ 5730:
/*!**********************************************************!*\
  !*** ./src/app/services/roles-and-permission.service.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RolesAndPermissionService: () => (/* binding */ RolesAndPermissionService)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 20553);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 72513);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 2389);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 13738);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 54860);
/* harmony import */ var _error_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./error.service */ 68027);






class RolesAndPermissionService {
  getRolesAndPermissionListener() {
    return this.rolesAndPermissionSubject.asObservable();
  }
  getRolesAndPermissionAdminListener() {
    return this.rolesAndPermissionAdminSubject.asObservable();
  }
  getMenuManagementListener() {
    return this.menuManagementSubject.asObservable();
  }
  constructor(http, errorService) {
    this.http = http;
    this.errorService = errorService;
    this.BASE_API_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.BASE_API_URL;
    this.rolesAndPermission = [];
    this.rolesAndPermissionAdmin = [];
    this.menuManagement = [];
    this.rolesAndPermissionSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    this.rolesAndPermissionAdminSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    this.menuManagementSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    this.http.get(this.BASE_API_URL + '/getRolesAndPermission').subscribe(response => {
      this.rolesAndPermission = response.data;
      this.rolesAndPermissionSubject.next([...this.rolesAndPermission]);
    });
    this.http.get(this.BASE_API_URL + '/getMenuForUpdate').subscribe(response => {
      this.menuManagement = response.data;
      this.menuManagementSubject.next([...this.menuManagement]);
    });
    this.http.get(this.BASE_API_URL + '/getRolesAndPermissionForUpdate').subscribe(response => {
      this.rolesAndPermissionAdmin = response.data;
      this.rolesAndPermissionAdminSubject.next([...this.rolesAndPermissionAdmin]);
    });
  }
  getRolesAndPermission() {
    return [...this.rolesAndPermission];
  }
  getRolesAndPermissionAdmin() {
    return [...this.rolesAndPermissionAdmin];
  }
  updateRoleAndPermissions(id) {
    return this.http.get(this.BASE_API_URL + '/updateRoleAndPermissions/' + id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.errorService.serverError), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(response => {}));
  }
  getMenuManagement() {
    return [...this.menuManagement];
  }
  updatePermissions(id) {
    return this.http.get(this.BASE_API_URL + '/updateMenuManagement/' + id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.errorService.serverError), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(response => {}));
  }
  static #_ = this.ɵfac = function RolesAndPermissionService_Factory(t) {
    return new (t || RolesAndPermissionService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_error_service__WEBPACK_IMPORTED_MODULE_1__.ErrorService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
    token: RolesAndPermissionService,
    factory: RolesAndPermissionService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 83634:
/*!*************************************************!*\
  !*** ./src/app/shared/data/dashboard/crypto.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   chart1: () => (/* binding */ chart1),
/* harmony export */   chart2: () => (/* binding */ chart2),
/* harmony export */   chart3: () => (/* binding */ chart3),
/* harmony export */   chart4: () => (/* binding */ chart4),
/* harmony export */   dailyChartColors: () => (/* binding */ dailyChartColors),
/* harmony export */   dailyChartData: () => (/* binding */ dailyChartData),
/* harmony export */   dailyChartLabels: () => (/* binding */ dailyChartLabels),
/* harmony export */   dailyChartLegend: () => (/* binding */ dailyChartLegend),
/* harmony export */   dailyChartOptions: () => (/* binding */ dailyChartOptions),
/* harmony export */   dailyChartType: () => (/* binding */ dailyChartType),
/* harmony export */   saleChartData: () => (/* binding */ saleChartData),
/* harmony export */   saleChartLabels: () => (/* binding */ saleChartLabels),
/* harmony export */   saleChartLegend: () => (/* binding */ saleChartLegend),
/* harmony export */   saleChartOptions: () => (/* binding */ saleChartOptions),
/* harmony export */   saleChartType: () => (/* binding */ saleChartType)
/* harmony export */ });
/* harmony import */ var chartist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chartist */ 65061);

var primary = localStorage.getItem('primary_color') || '#4466f2';
var secondary = localStorage.getItem('secondary_color') || '#1ea6ec';
// Chart 1
var chart1 = {
  type: 'Line',
  data: {
    labels: ['01', '02', '03', '04', '05', '06'],
    series: [[8, 3, 7.5, 4, 7, 4]]
  },
  options: {
    lineSmooth: chartist__WEBPACK_IMPORTED_MODULE_0__.Interpolation.simple({
      divisor: 3
    }),
    fullWidth: !0,
    showArea: !0,
    chartPadding: {
      right: 0,
      left: 0,
      top: 0,
      bottom: 0
    },
    axisY: {
      low: 0,
      showGrid: false,
      showLabel: false,
      offset: 0
    },
    axisX: {
      showGrid: false,
      showLabel: false,
      offset: 0
    }
  },
  events: {
    created: data => {}
  }
};
// Chart 2
var chart2 = {
  type: 'Line',
  data: {
    labels: ['01', '02', '03', '04', '05', '06'],
    series: [[8, 3, 7.5, 4, 7, 4]]
  },
  options: {
    lineSmooth: chartist__WEBPACK_IMPORTED_MODULE_0__.Interpolation.simple({
      divisor: 3
    }),
    fullWidth: !0,
    showArea: !0,
    chartPadding: {
      right: 0,
      left: 0,
      top: 0,
      bottom: 0
    },
    axisY: {
      low: 0,
      showGrid: false,
      showLabel: false,
      offset: 0
    },
    axisX: {
      showGrid: false,
      showLabel: false,
      offset: 0
    }
  },
  events: {
    created: data => {}
  }
};
// Chart 3
var chart3 = {
  type: 'Line',
  data: {
    labels: ['01', '02', '03', '04', '05', '06'],
    series: [[8, 3, 7.5, 4, 7, 4]]
  },
  options: {
    lineSmooth: chartist__WEBPACK_IMPORTED_MODULE_0__.Interpolation.simple({
      divisor: 3
    }),
    fullWidth: !0,
    showArea: !0,
    chartPadding: {
      right: 0,
      left: 0,
      top: 0,
      bottom: 0
    },
    axisY: {
      low: 0,
      showGrid: false,
      showLabel: false,
      offset: 0
    },
    axisX: {
      showGrid: false,
      showLabel: false,
      offset: 0
    }
  },
  events: {
    created: data => {}
  }
};
// Chart 4
var chart4 = {
  type: 'Bar',
  data: {
    labels: ['100', '200', '300', '400', '500', '600', '700', '800'],
    series: [[2.5, 3, 3, 0.9, 1.3, 1.8, 3.8, 1.5], [3.8, 1.8, 4.3, 2.3, 3.6, 2.8, 2.8, 2.8]]
  },
  options: {
    seriesBarDistance: 12,
    chartPadding: {
      left: 0,
      right: 0,
      bottom: 0
    },
    axisX: {
      showGrid: false,
      labelInterpolationFnc: function (value) {
        return value[0];
      }
    }
  },
  events: {
    created: data => {}
  }
};
//Sale chart
var saleChartType = 'line';
var saleChartLabels = ["2010", "2011", "2012", "2013", "2014", "2015", "2016"];
var saleChartData = [{
  data: [1, 2.5, 1.5, 3, 1.3, 2, 4, 4.5]
}, {
  data: [0, 1, 0.5, 1, 0.3, 1.6, 1.4, 2]
}];
var saleChartOptions = {
  responsive: true,
  animation: false,
  maintainAspectRatio: false,
  borderColor: [primary, secondary],
  scales: {
    xAxes: [{
      display: true,
      gridLines: {
        color: "#fff",
        drawTicks: true
      }
    }],
    yAxes: [{
      display: true,
      ticks: {
        beginAtZero: true,
        precision: 0
      }
    }]
  }
};
// export var saleChartColors: Array<any> = [
//   {
//     fill: false,
//     borderColor: primary,
//     borderWidth: 2.5,
//     pointBackgroundColor: primary,
//     pointBorderColor: primary,
//     lineTension: 0
//   },
//   {
//     fill: false,
//     borderColor: secondary,
//     borderWidth: 2.5,
//     pointBackgroundColor: secondary,
//     pointBorderColor: secondary,
//     lineTension: 0
//   },
// ];
var saleChartLegend = false;
//Invest Chart data and options
var dailyChartLabels = ['Bitcoin', 'Ripple', 'Invest'];
var dailyChartData = [40, 8, 10];
var dailyChartColors = [{
  backgroundColor: [primary, "#f6f6f6", secondary],
  borderAlign: 'center',
  borderColor: primary,
  weight: 1,
  borderWidth: 2
}];
var dailyChartType = 'doughnut';
var dailyChartLegend = true;
var dailyChartOptions = {
  responsive: true,
  animation: false,
  maintainAspectRatio: false,
  borderColor: [primary, secondary]
};
// export var dailyChartOptions: ChartConfiguration<'doughnut'>['options'] = {
//   animation: {
//     easing: 'easeOutBounce',
//   },
//   // cutoutPercentage: 70,
//   // tooltips: {
//   //   mode: 'index',
//   //   intersect: true,
//   // },
//   responsive: true,
//   // height: 500,
//   maintainAspectRatio: false,
//   // legend: {
//   //   display: false,
//   //   fullWidth: true,
//   //   onClick: true,
//   //   position: 'center'
//   // }
// };

/***/ }),

/***/ 37248:
/*!**************************************************!*\
  !*** ./src/app/shared/data/dashboard/default.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   chartBox1: () => (/* binding */ chartBox1),
/* harmony export */   chartBox2: () => (/* binding */ chartBox2),
/* harmony export */   chartBox3: () => (/* binding */ chartBox3),
/* harmony export */   chartCalculation: () => (/* binding */ chartCalculation),
/* harmony export */   chartProduction: () => (/* binding */ chartProduction)
/* harmony export */ });
/* harmony import */ var chartist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chartist */ 65061);

var primary = localStorage.getItem("primary_color") || "#4466f2";
var secondary = localStorage.getItem("secondary_color") || "#1ea6ec";
// Chart 1
var chartBox1 = {
  type: "Line",
  data: {
    labels: ["01", "02", "03", "04", "05", "06", "07"],
    series: [[0, 2, 1.2, 4, 2, 3, 1.5, 0]]
  },
  options: {
    lineSmooth: chartist__WEBPACK_IMPORTED_MODULE_0__.Interpolation.simple({
      divisor: 2
    }),
    fullWidth: !0,
    showArea: !0,
    chartPadding: {
      right: 0,
      left: 0,
      bottom: 0
    },
    colors: [primary],
    axisY: {
      low: 0,
      showGrid: false,
      showLabel: false,
      offset: 0
    },
    axisX: {
      showGrid: false,
      showLabel: false,
      offset: 0
    }
    // events: {
    //   created: (data) => {
    //     var defs = data.svg.elem('defs');
    //     defs.elem('linearGradient', {
    //       id: 'gradient2',
    //       x1: 1,
    //       y1: 1,
    //       x2: 0,
    //       y2: 0
    //     }).elem('stop', {
    //       offset: 0,
    //       'stop-color': primary
    //     }).parent().elem('stop', {
    //       offset: 1,
    //       'stop-color': secondary
    //     });
    //   }
    // }
  }
};
// Chart 2
var chartBox2 = {
  type: "Line",
  data: {
    labels: ["01", "02", "03", "04", "05", "06"],
    series: [[0, 2, 1.2, 4, 2, 3, 0]]
  },
  options: {
    lineSmooth: chartist__WEBPACK_IMPORTED_MODULE_0__.Interpolation.simple({
      divisor: 2
    }),
    fullWidth: !0,
    showArea: !0,
    chartPadding: {
      right: 0,
      left: 0,
      bottom: 0
    },
    axisY: {
      low: 0,
      showGrid: false,
      showLabel: false,
      offset: 0
    },
    axisX: {
      showGrid: false,
      showLabel: false,
      offset: 0
    }
  },
  events: {
    created: data => {
      var defs = data.svg.elem('defs');
      defs.elem('linearGradient', {
        id: 'gradient3',
        x1: 1,
        y1: 1,
        x2: 0,
        y2: 0
      }).elem('stop', {
        offset: 0,
        'stop-color': primary
      }).parent().elem('stop', {
        offset: 1,
        'stop-color': secondary
      });
    }
  }
};
// Chart 3
var chartBox3 = {
  type: "Line",
  data: {
    labels: ["01", "02", "03", "04", "05", "06", "07"],
    series: [[0, 2, 1.2, 4, 2, 3, 1.5, 2, 0]]
  },
  options: {
    lineSmooth: chartist__WEBPACK_IMPORTED_MODULE_0__.Interpolation.simple({
      divisor: 2
    }),
    fullWidth: !0,
    showArea: !0,
    chartPadding: {
      right: 0,
      left: 0,
      bottom: 0
    },
    axisY: {
      low: 0,
      showGrid: false,
      showLabel: false,
      offset: 0
    },
    axisX: {
      showGrid: false,
      showLabel: false,
      offset: 0
    }
  },
  events: {
    created: data => {
      var defs = data.svg.elem('defs');
      defs.elem('linearGradient', {
        id: 'gradient4',
        x1: 1,
        y1: 1,
        x2: 0,
        y2: 0
      }).elem('stop', {
        offset: 0,
        'stop-color': primary
      }).parent().elem('stop', {
        offset: 1,
        'stop-color': secondary
      });
    }
  }
};
// Chart 4
var chartCalculation = {
  type: "Line",
  data: {
    labels: ["01", "02", "03", "04", "05", "06", "07", "08"],
    series: [[0, 2, 1.2, 4, 2, 3, 1.5, 0], [0, 1, 2.2, 1.5, 3, 1.5, 2.25, 0]]
  },
  options: {
    low: 0,
    showArea: true,
    fullWidth: true,
    onlyInteger: true,
    chartPadding: {
      left: 0,
      right: 0
    },
    axisY: {
      low: 0,
      scaleMinSpace: 50
    },
    axisX: {
      showGrid: false
    }
  },
  events: {
    created: data => {
      var defs = data.svg.elem("defs");
      defs.elem("linearGradient", {
        id: "gradient1",
        x1: 0,
        y1: 0,
        x2: 1,
        y2: 1
      }).elem("stop", {
        offset: 0,
        "stop-color": primary
      }).parent().elem("stop", {
        offset: 1,
        "stop-color": secondary
      });
    }
  }
};
// Chart 5
var chartProduction = {
  type: "Line",
  data: {
    labels: ["2009", "2010", "2011", "2012"],
    series: [[0, 6, 2, 6], [0, 7, 1, 8]]
  },
  options: {
    fullWidth: true,
    chartPadding: {
      right: 40
    }
  },
  events: {
    created: data => {}
  }
};

/***/ }),

/***/ 62047:
/*!*****************************************************!*\
  !*** ./src/app/shared/data/dashboard/e-commerce.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   lineChartColors1: () => (/* binding */ lineChartColors1),
/* harmony export */   lineChartColors2: () => (/* binding */ lineChartColors2),
/* harmony export */   lineChartData1: () => (/* binding */ lineChartData1),
/* harmony export */   lineChartData2: () => (/* binding */ lineChartData2),
/* harmony export */   lineChartLabels1: () => (/* binding */ lineChartLabels1),
/* harmony export */   lineChartLabels2: () => (/* binding */ lineChartLabels2),
/* harmony export */   lineChartLegend1: () => (/* binding */ lineChartLegend1),
/* harmony export */   lineChartLegend2: () => (/* binding */ lineChartLegend2),
/* harmony export */   lineChartOptions1: () => (/* binding */ lineChartOptions1),
/* harmony export */   lineChartOptions2: () => (/* binding */ lineChartOptions2),
/* harmony export */   lineChartType1: () => (/* binding */ lineChartType1),
/* harmony export */   lineChartType2: () => (/* binding */ lineChartType2),
/* harmony export */   saleChartColors: () => (/* binding */ saleChartColors),
/* harmony export */   saleChartData: () => (/* binding */ saleChartData),
/* harmony export */   saleChartLabels: () => (/* binding */ saleChartLabels),
/* harmony export */   saleChartLegend: () => (/* binding */ saleChartLegend),
/* harmony export */   saleChartOptions: () => (/* binding */ saleChartOptions),
/* harmony export */   saleChartType: () => (/* binding */ saleChartType),
/* harmony export */   staticChartColors: () => (/* binding */ staticChartColors),
/* harmony export */   staticChartData: () => (/* binding */ staticChartData),
/* harmony export */   staticChartLabels: () => (/* binding */ staticChartLabels),
/* harmony export */   staticChartLegend: () => (/* binding */ staticChartLegend),
/* harmony export */   staticChartOptions: () => (/* binding */ staticChartOptions),
/* harmony export */   staticChartType: () => (/* binding */ staticChartType)
/* harmony export */ });
var primary = localStorage.getItem('primary_color') || '#4466f2';
var secondary = localStorage.getItem('secondary_color') || '#1ea6ec';
//Sale chart
var saleChartType = 'line';
var saleChartLabels = ["2009", "2010", "2011", "2012", "2013", "2014", "2015"];
var saleChartData = [{
  data: [0, 2.25, 1.25, 3, 1.25, 2.25, 0]
}];
var saleChartOptions = {
  responsive: true,
  animation: false,
  tension: 0.5,
  borderColor: primary,
  backgroundColor: [primary],
  maintainAspectRatio: false,
  scales: {
    xAxes: [{
      display: true,
      gridLines: {
        color: "#fff",
        drawTicks: true
      }
    }],
    yAxes: [{
      display: true,
      ticks: {
        beginAtZero: true
      }
    }]
  }
};
var saleChartColors = [{
  fill: false,
  borderColor: primary,
  borderWidth: 2.5,
  pointBackgroundColor: primary,
  pointBorderColor: primary
}];
var saleChartLegend = false;
//Line chart
var lineChartType1 = 'line';
var lineChartLabels1 = ["", "2009", "2010", "2011", "2012", "2013", "2014"];
var lineChartData1 = [{
  data: [20, 33, 20, 50, 20, 33, 20, 0]
}];
var lineChartOptions1 = {
  responsive: true,
  maintainAspectRatio: false,
  borderColor: primary,
  scales: {
    xAxes: [{
      display: true,
      gridLines: {
        color: "#fff",
        drawTicks: true
      }
    }],
    yAxes: [{
      display: true
    }]
  }
};
var lineChartColors1 = [{
  fill: false,
  borderColor: primary,
  borderWidth: 2.5,
  pointBackgroundColor: primary,
  pointBorderColor: primary,
  lineTension: 0
}];
var lineChartLegend1 = false;
//Line chart 2
var lineChartType2 = 'line';
var lineChartLabels2 = ["", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016"];
var lineChartData2 = [{
  data: [5, 0, 5, 0, 15, 0, 5, 0, 5]
}];
var lineChartOptions2 = {
  responsive: true,
  maintainAspectRatio: false,
  borderColor: primary,
  scales: {
    xAxes: [{
      display: true,
      gridLines: {
        color: "#fff",
        drawTicks: true
      }
    }],
    yAxes: [{
      display: true,
      ticks: {
        beginAtZero: true,
        fixedStepSize: 5,
        precision: 0
      }
    }]
  }
};
var lineChartColors2 = [{
  fill: false,
  borderColor: primary,
  borderWidth: 2.5,
  pointBackgroundColor: primary,
  pointBordereWidth: 5,
  pointBorderColor: primary,
  lineTension: 0
}];
var lineChartLegend2 = false;
var staticChartType = 'line';
var staticChartLabels = ["0", "50", "100", "150", "200", "250", "300", "350"];
var staticChartData = [{
  data: [1.000000000, 0.642787610, -0.173648178, -0.866025404, -0.939692621, -0.342020143, 0.500000000, 0.984807753]
}];
var staticChartOptions = {
  responsive: true,
  tension: 0.5,
  borderColor: primary,
  scaleShowVerticalLines: false,
  maintainAspectRatio: false,
  animation: false,
  scales: {
    xAxes: [{
      display: true,
      gridLines: {
        color: "#fff",
        drawTicks: true
      }
    }],
    yAxes: [{
      display: true,
      ticks: {
        beginAtZero: true
      }
    }]
  }
};
var staticChartColors = [{
  fill: false,
  borderColor: primary,
  borderWidth: 2.5,
  pointBackgroundColor: primary,
  pointBorderColor: primary
}];
var staticChartLegend = false;

/***/ }),

/***/ 7514:
/*!**************************************************!*\
  !*** ./src/app/shared/data/dashboard/project.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   barChartSingle1: () => (/* binding */ barChartSingle1),
/* harmony export */   barChartSingle2: () => (/* binding */ barChartSingle2),
/* harmony export */   barChartSingle3: () => (/* binding */ barChartSingle3),
/* harmony export */   chart1: () => (/* binding */ chart1),
/* harmony export */   chart2: () => (/* binding */ chart2),
/* harmony export */   chart3: () => (/* binding */ chart3),
/* harmony export */   chart4: () => (/* binding */ chart4),
/* harmony export */   chart5: () => (/* binding */ chart5),
/* harmony export */   chart6: () => (/* binding */ chart6),
/* harmony export */   colorScheme: () => (/* binding */ colorScheme),
/* harmony export */   doughnutChartGradient: () => (/* binding */ doughnutChartGradient),
/* harmony export */   doughnutChartShowLabels: () => (/* binding */ doughnutChartShowLabels),
/* harmony export */   doughnutChartcolorScheme: () => (/* binding */ doughnutChartcolorScheme),
/* harmony export */   doughnutData: () => (/* binding */ doughnutData),
/* harmony export */   gradient: () => (/* binding */ gradient),
/* harmony export */   multiData: () => (/* binding */ multiData),
/* harmony export */   pieChart1: () => (/* binding */ pieChart1),
/* harmony export */   showLegend: () => (/* binding */ showLegend),
/* harmony export */   showXAxis: () => (/* binding */ showXAxis),
/* harmony export */   showXAxisLabel: () => (/* binding */ showXAxisLabel),
/* harmony export */   showYAxis: () => (/* binding */ showYAxis),
/* harmony export */   showYAxisLabel: () => (/* binding */ showYAxisLabel),
/* harmony export */   vertical_stack_chart: () => (/* binding */ vertical_stack_chart),
/* harmony export */   view: () => (/* binding */ view)
/* harmony export */ });
/* harmony import */ var chartist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chartist */ 65061);

var primary = localStorage.getItem('primary_color') || '#4466f2';
var secondary = localStorage.getItem('secondary_color') || '#1ea6ec';
var doughnutData = [{
  value: 300,
  name: "Frontend"
}, {
  value: 50,
  name: "Backend"
}, {
  value: 30,
  name: "Api"
}, {
  value: 100,
  name: "Issues"
}];
//doughnut-Chart
var view = [285, 285];
//Options
var doughnutChartShowLabels = false;
var doughnutChartGradient = true;
var doughnutChartcolorScheme = {
  domain: [primary, secondary, secondary, secondary]
};
var multiData = [{
  "name": "Mon",
  "series": [{
    "name": "y",
    "value": 3
  }, {
    "name": "z",
    "value": 2
  }]
}, {
  "name": "Tue",
  "series": [{
    "name": "y",
    "value": 3
  }, {
    "name": "z",
    "value": 0
  }]
}, {
  "name": "Wen",
  "series": [{
    "name": "y",
    "value": 0
  }, {
    "name": "z",
    "value": 1.5
  }]
}, {
  "name": "Thu",
  "series": [{
    "name": "y",
    "value": 2
  }, {
    "name": "z",
    "value": 0
  }]
}, {
  "name": "Fri",
  "series": [{
    "name": "y",
    "value": 0
  }, {
    "name": "z",
    "value": 3.5
  }]
}, {
  "name": "Sat",
  "series": [{
    "name": "y",
    "value": 3
  }, {
    "name": "z",
    "value": 2
  }]
}, {
  "name": "sun",
  "series": [{
    "name": "y",
    "value": 0
  }, {
    "name": "z",
    "value": 2
  }]
}];
//vertical-stack chart
var vertical_stack_chart = [{
  x: "Mon",
  y: 3,
  z: 2
}, {
  x: "Tue",
  y: 3,
  z: null
}, {
  x: "Wed",
  y: 0,
  z: 1.5
}, {
  x: "Thu",
  y: 2,
  z: null
}, {
  x: "Fri",
  y: 0,
  z: 3.5
}, {
  x: "Sat",
  y: 3,
  z: 2
}, {
  x: "Sun",
  y: 0,
  z: 2
}];
//Vertical stacked chart option
var showXAxis = true;
var showYAxis = true;
var gradient = false;
var showLegend = false;
var showXAxisLabel = true;
var showYAxisLabel = true;
var colorScheme = {
  domain: [primary, secondary, primary, secondary]
};
var chart1 = {
  type: 'Line',
  data: {
    labels: ['01', '02', '03', '04', '05', '06'],
    series: [[1, 5, 2, 5, 4, 3]]
  },
  options: {
    lineSmooth: chartist__WEBPACK_IMPORTED_MODULE_0__.Interpolation.simple({
      divisor: 2
    }),
    showArea: true,
    showPoint: false,
    fullWidth: true,
    chartpadding: {
      bottom: 0,
      left: 0,
      right: 0
    },
    axisY: {
      low: 0,
      showGrid: false,
      showLabel: false,
      offset: 0
    },
    axisX: {
      showGrid: false,
      showLabel: false,
      offset: 0
    }
  },
  events: {
    created: data => {
      var defs = data.svg.elem('defs');
      defs.elem('linearGradient', {
        id: 'gradient5',
        x1: 1,
        y1: 0,
        x2: 0,
        y2: 1
      }).elem('stop', {
        offset: 0,
        'stop-color': primary
      }).parent().elem('stop', {
        offset: 1,
        'stop-color': secondary
      });
    }
  }
};
var chart2 = {
  type: 'Line',
  data: {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    series: [[5, 2, 3, 1, 3, 2]]
  },
  options: {
    showArea: true,
    showPoint: false,
    fullWidth: true,
    chartpadding: {
      bottom: 0,
      left: 0,
      right: 0
    },
    axisX: {
      low: 0,
      offset: -5,
      showLabel: false,
      showGrid: false
    },
    axisY: {
      low: 0,
      offset: -5,
      showLabel: false,
      showGrid: false
    },
    events: {
      created: data => {
        var defs = data.svg.elem('defs');
        defs.elem('linearGradient', {
          id: 'gradient6',
          x1: 1,
          y1: 0,
          x2: 0,
          y2: 1
        }).elem('stop', {
          offset: 0,
          'stop-color': primary
        }).parent().elem('stop', {
          offset: 1,
          'stop-color': secondary
        });
      }
    }
  }
};
var chart3 = {
  type: 'Line',
  data: {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    series: [[1, 2, 5, 1, 4, 3]]
  },
  options: {
    low: 0,
    showArea: true,
    showPoint: false,
    fullWidth: true,
    chartpadding: {
      bottom: 0,
      left: 0,
      right: 0
    },
    axisX: {
      low: 0,
      offset: -5,
      showLabel: false,
      showGrid: false
    },
    axisY: {
      low: 0,
      offset: -5,
      showLabel: false,
      showGrid: false
    }
  },
  events: {
    created: data => {
      var defs = data.svg.elem('defs');
      defs.elem('linearGradient', {
        id: 'gradient7',
        x1: 1,
        y1: 0,
        x2: 0,
        y2: 1
      }).elem('stop', {
        offset: 0,
        'stop-color': primary
      }).parent().elem('stop', {
        offset: 1,
        'stop-color': secondary
      });
    }
  }
};
var chart4 = {
  type: 'Line',
  data: {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    series: [[1, 2, 4, 3, 2, 3]]
  },
  options: {
    low: 0,
    showArea: true,
    showPoint: false,
    fullWidth: true,
    chartpadding: {
      bottom: 0,
      left: 0,
      right: 0
    },
    axisX: {
      low: 0,
      offset: -5,
      showLabel: false,
      showGrid: false
    },
    axisY: {
      low: 0,
      offset: -5,
      showLabel: false,
      showGrid: false
    }
  },
  events: {
    created: data => {
      var defs = data.svg.elem('defs');
      defs.elem('linearGradient', {
        id: 'gradient8',
        x1: 1,
        y1: 0,
        x2: 0,
        y2: 1
      }).elem('stop', {
        offset: 0,
        'stop-color': primary
      }).parent().elem('stop', {
        offset: 1,
        'stop-color': secondary
      });
    }
  }
};
var chart5 = {
  type: 'Line',
  data: {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    series: [[0, 5, 2, 3, 1, 3]]
  },
  options: {
    low: 0,
    showArea: true,
    showPoint: false,
    fullWidth: true,
    chartpadding: {
      bottom: 0,
      left: 0,
      right: 0
    },
    axisX: {
      low: 0,
      offset: -5,
      showLabel: false,
      showGrid: false
    },
    axisY: {
      low: 0,
      offset: -5,
      showLabel: false,
      showGrid: false
    }
  },
  events: {
    created: data => {
      var defs = data.svg.elem('defs');
      defs.elem('linearGradient', {
        id: 'gradient9',
        x1: 1,
        y1: 0,
        x2: 0,
        y2: 1
      }).elem('stop', {
        offset: 0,
        'stop-color': primary
      }).parent().elem('stop', {
        offset: 1,
        'stop-color': secondary
      });
    }
  }
};
var chart6 = {
  type: 'Line',
  data: {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    series: [[1, 2, 3, 1, 2, 3]]
  },
  options: {
    low: 0,
    showArea: true,
    showPoint: false,
    fullWidth: true,
    chartpadding: {
      bottom: 0,
      left: 0,
      right: 0
    },
    axisX: {
      low: 0,
      offset: -5,
      showLabel: false,
      showGrid: false
    },
    axisY: {
      low: 0,
      offset: -5,
      showLabel: false,
      showGrid: false
    }
  },
  events: {
    created: data => {
      var defs = data.svg.elem('defs');
      defs.elem('linearGradient', {
        id: 'gradient10',
        x1: 1,
        y1: 0,
        x2: 0,
        y2: 1
      }).elem('stop', {
        offset: 0,
        'stop-color': primary
      }).parent().elem('stop', {
        offset: 1,
        'stop-color': secondary
      });
    }
  }
};
var pieChart1 = {
  chartType: 'PieChart',
  dataTable: [['Week', 'Day in week'], ['Mon', 15], ['Tue', 10], ['Wed', 15], ['Thu', 20], ['Fri', 25], ['sat', 20], ['Sun', 10]],
  options: {
    title: 'My Daily Activities',
    height: 400,
    colors: [primary, secondary, "#22af47", "#007bff", "#FF5370", "#22af47", "#ff9f40"],
    labels: false,
    backgroundColor: 'transparent'
  }
};
var barChartSingle1 = {
  type: 'Bar',
  data: {
    series: [[5, 7, 3, 5, 2, 3, 9, 6, 5, 9], [5, 3, 5, 2, 5, 3, 3, 9, 6, 5], [9, 2, 9, 6, 5, 9, 7, 3, 5, 2]]
  },
  options: {
    axisX: {
      showGrid: false,
      offset: 0
    },
    axisY: {
      showGrid: false,
      offset: 0
    },
    responsive: true,
    height: 70,
    width: 450,
    fill: [primary, secondary, "#22af47"]
  }
};
var barChartSingle2 = {
  type: 'Bar',
  data: {
    series: [[5, 7, 3, 5, 2, 3, 9, 6, 5, 9], [5, 3, 5, 2, 5, 3, 3, 9, 6, 5], [9, 7, 9, 6, 5, 9, 7, 3, 5, 2]]
  },
  options: {
    axisX: {
      showGrid: false,
      offset: 0
    },
    axisY: {
      showGrid: false,
      offset: 0
    },
    responsive: true,
    height: 70,
    width: 450,
    fill: [primary, secondary, "#22af47"]
  }
};
var barChartSingle3 = {
  type: 'Bar',
  data: {
    series: [[9, 7, 3, 5, 2, 5, 3, 5, 3, 9], [6, 5, 9, 3, 5, 2, 5, 3, 6, 5], [9, 7, 9, 2, 5, 3, 7, 9, 5, 6]]
  },
  options: {
    axisX: {
      showGrid: false,
      offset: 0
    },
    axisY: {
      showGrid: false,
      offset: 0
    },
    responsive: true,
    height: 70,
    width: 450,
    fill: [primary, secondary, "#22af47"]
  }
};

/***/ }),

/***/ 92558:
/*!*************************************************!*\
  !*** ./src/app/shared/data/dashboard/server.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cpuChartColors: () => (/* binding */ cpuChartColors),
/* harmony export */   cpuChartData: () => (/* binding */ cpuChartData),
/* harmony export */   cpuChartLabels: () => (/* binding */ cpuChartLabels),
/* harmony export */   cpuChartLegend: () => (/* binding */ cpuChartLegend),
/* harmony export */   cpuChartOptions: () => (/* binding */ cpuChartOptions),
/* harmony export */   cpuChartType: () => (/* binding */ cpuChartType),
/* harmony export */   latencyChartColors: () => (/* binding */ latencyChartColors),
/* harmony export */   latencyChartData: () => (/* binding */ latencyChartData),
/* harmony export */   latencyChartLabels: () => (/* binding */ latencyChartLabels),
/* harmony export */   latencyChartLegend: () => (/* binding */ latencyChartLegend),
/* harmony export */   latencyChartOptions: () => (/* binding */ latencyChartOptions),
/* harmony export */   latencyChartType: () => (/* binding */ latencyChartType),
/* harmony export */   memoryChartColors: () => (/* binding */ memoryChartColors),
/* harmony export */   memoryChartData: () => (/* binding */ memoryChartData),
/* harmony export */   memoryChartLabels: () => (/* binding */ memoryChartLabels),
/* harmony export */   memoryChartLegend: () => (/* binding */ memoryChartLegend),
/* harmony export */   memoryChartOptions: () => (/* binding */ memoryChartOptions),
/* harmony export */   memoryChartType: () => (/* binding */ memoryChartType)
/* harmony export */ });
// const moment = require('moment');
// moment.suppressDeprecationWarnings = true;
var primary = localStorage.getItem('primary_color') || '#4466f2';
var secondary = localStorage.getItem('secondary_color') || '#1ea6ec';
//Sale chart
var memoryChartType = 'line';
var memoryChartLabels = ["1 min.", "10 min.", "20 min.", "30 min.", "40 min.", "50 min.", "60 min.", "70 min.", "80 min.", "90 min.", "100 min"];
var memoryChartData = [{
  data: [0, 59, 80, 40, 100, 60, 95, 20, 70, 40, 70]
}, {
  data: [0, 48, 30, 19, 86, 27, 90, 60, 30, 70, 40]
}, {
  data: [0, 30, 40, 10, 60, 40, 70, 30, 20, 80, 50]
}];
var memoryChartOptions = {
  responsive: true,
  animation: false,
  tension: 0.5,
  borderColor: [primary, secondary, "#22af47"],
  maintainAspectRatio: false,
  scales: {
    xAxes: [{
      display: true
    }],
    yAxes: [{
      display: true,
      ticks: {
        beginAtZero: true,
        precision: 0
      }
    }]
  }
};
var memoryChartColors = [{
  fill: false,
  borderColor: primary,
  borderWidth: 2.5,
  pointBackgroundColor: primary,
  pointBorderColor: primary
}, {
  fill: false,
  borderColor: secondary,
  borderWidth: 2.5,
  pointBackgroundColor: secondary,
  pointBorderColor: secondary
}, {
  fill: false,
  borderColor: "#22af47",
  borderWidth: 2.5,
  pointBackgroundColor: '#22af47',
  pointBorderColor: "#22af47"
}];
var memoryChartLegend = false;
// Line chart
var latencyChartType = 'line';
var latencyChartLabels = ["", "2009", "2010", "2011", "2012", "2013", "2014"];
var latencyChartData = [{
  data: []
}, {
  data: []
}];
var latencyChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  elements: {
    point: {
      radius: 0
    }
  },
  scales: {
    xAxes: [{
      display: false,
      type: 'realtime',
      realtime: {
        onRefresh: function (chart) {
          chart.data.datasets.forEach(function (dataset) {
            dataset.data.push({
              x: Date.now(),
              y: (Math.random() > 0.1 ? 1.0 : 1.0) * Math.round(Math.random() * 100)
            });
          });
        },
        delay: 1000,
        duration: 50000,
        refresh: 1000
      }
    }],
    yAxes: [{
      display: false,
      ticks: {
        beginAtZero: true,
        fixedStepSize: 10,
        precision: 0
      }
    }]
  }
};
var latencyChartColors = [{
  fill: true,
  backgroundColor: "rgb(183, 196, 246)",
  borderColor: "#4466f2",
  borderWidth: 1.5,
  pointBackgroundColor: '#4466f2',
  pointBorderColor: "#4466f2",
  pointBorderWidth: 0,
  lineTension: 0
}];
var latencyChartLegend = false;
// Line chart
var cpuChartType = 'line';
var cpuChartLabels = ["", "2009", "2010", "2011", "2012", "2013", "2014"];
var cpuChartData = [{
  data: []
}, {
  data: []
}];
var cpuChartOptions = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: 'Chart.js'
    }
  },
  scales: {
    x: {
      display: true
    },
    y: {
      display: true
    }
  }
};
var cpuChartColors = [{
  fill: true,
  backgroundColor: "rgb(183, 196, 246)",
  borderColor: primary,
  borderWidth: 1.5,
  pointBackgroundColor: primary,
  pointBorderColor: primary,
  pointBorderWidth: 0,
  lineTension: 0
}];
var cpuChartLegend = false;

/***/ }),

/***/ 3653:
/*!*****************************************************!*\
  !*** ./src/app/shared/data/dashboard/university.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   admissionChartColors: () => (/* binding */ admissionChartColors),
/* harmony export */   admissionChartData: () => (/* binding */ admissionChartData),
/* harmony export */   admissionChartLabels: () => (/* binding */ admissionChartLabels),
/* harmony export */   admissionChartLegend: () => (/* binding */ admissionChartLegend),
/* harmony export */   admissionChartOptions: () => (/* binding */ admissionChartOptions),
/* harmony export */   admissionChartType: () => (/* binding */ admissionChartType),
/* harmony export */   chart1: () => (/* binding */ chart1),
/* harmony export */   chart2: () => (/* binding */ chart2),
/* harmony export */   chart3: () => (/* binding */ chart3),
/* harmony export */   chart4: () => (/* binding */ chart4),
/* harmony export */   chart5: () => (/* binding */ chart5)
/* harmony export */ });
var primary = localStorage.getItem("primary_color") || "#4466f2";
var secondary = localStorage.getItem("secondary_color") || "#1ea6ec";
// Chart 1
var chart1 = {
  type: "Line",
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
    series: [[2, 3, 2.5, 5, 1.5, 4.5, 3, 3.1], [3, 3.5, 6, 1.1, 5, 2.5, 3.2, 2]]
  },
  options: {
    low: 0,
    showPoint: false,
    chartPadding: {
      left: 0,
      right: 0
    },
    axisY: {
      scaleMinSpace: 40
    }
  },
  events: {
    created: data => {}
  }
};
// Chart 2
var chart2 = {
  type: "Line",
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
    series: [[1.5, 3, 2, 1, 4, 1, 4, 2, 3, 2.5], [5, 4.7, 4, 3, 3.3, 3.7, 3, 3.8, 3, 2]]
  },
  options: {
    low: 0,
    showPoint: false,
    chartPadding: {
      left: 0,
      right: 0
    },
    axisY: {
      scaleMinSpace: 40
    }
  },
  events: {
    created: data => {}
  }
};
// Chart 3
var chart3 = {
  type: "Bar",
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
    series: [[1, 2, 1.5, 3, 1.5, 0.8, 1.5, 2], [6, 4, 5, 6.5, 3, 2, 5.5, 7]]
  },
  options: {
    seriesBarDistance: 12,
    chartPadding: {
      left: 0,
      right: 0
    },
    axisX: {
      showGrid: false,
      labelInterpolationFnc: function (value) {
        return value[0];
      }
    }
  },
  events: {
    created: data => {}
  }
};
// Chart 4
var chart4 = {
  type: "Bar",
  data: {
    labels: ["Q1", "Q2", "Q3", "Q4", "Q5", "Q6"],
    series: [[50, 200, 150, 400, 300, 600, 700]],
    barThickness: 1
  },
  options: {
    stackBars: true,
    axisY: {
      low: 0,
      showGrid: false,
      showLabel: false,
      offset: 0
    },
    axisX: {
      showGrid: false,
      showLabel: false,
      offset: 0,
      width: 20,
      height: 20
    }
  },
  events: {
    draw: data => {
      if (data.type === "bar") {
        data.element.attr({
          style: "stroke-width: 2px"
        });
      }
    }
  }
};
// Chart 5
var chart5 = {
  type: "Bar",
  data: {
    labels: ["Q1", "Q2", "Q3", "Q4", "Q5", "Q6"],
    series: [[50, 200, 150, 400, 300, 600, 700]]
  },
  options: {
    stackBars: true,
    axisY: {
      low: 0,
      showGrid: false,
      showLabel: false,
      offset: 0
    },
    axisX: {
      showGrid: false,
      showLabel: false,
      offset: 0
    }
  },
  events: {
    draw: data => {
      if (data.type === "bar") {
        data.element.attr({
          style: "stroke-width: 2px"
        });
      }
    }
  }
};
//Admission chart
var admissionChartType = "line";
var admissionChartLabels = ["", "1000", "2000", "3000", "4000", "5000", "6000"];
var admissionChartData = [{
  data: [20, 25, 22, 25, 35, 30, 38, 35, 20]
}];
var admissionChartOptions = {
  responsive: true,
  animation: false,
  borderColor: primary,
  fill: true,
  backgroundColor: "#b3caed52",
  maintainAspectRatio: false,
  scales: {
    xAxes: [{
      display: true,
      gridLines: {
        color: "#fff",
        drawTicks: true
      }
    }],
    yAxes: [{
      display: true
    }]
  }
};
var admissionChartColors = [{
  fill: true,
  backgroundColor: "rgba(68, 102, 242,0.1)",
  borderColor: primary,
  borderWidth: 2.5,
  pointBackgroundColor: primary,
  pointBorderColor: primary,
  lineTension: 0
}];
var admissionChartLegend = false;

/***/ }),

/***/ 6264:
/*!**********************************************!*\
  !*** ./src/app/shared/data/tables/server.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SERVERDB: () => (/* binding */ SERVERDB)
/* harmony export */ });
const SERVERDB = [{
  name: "Tiger",
  user: "Tig",
  badge: "badge badge-primary",
  IO: "0 KB/s",
  cpu: "0 %",
  mem: "50 MB"
}, {
  name: "Garrett",
  user: "Grean",
  badge: "badge badge-primary",
  IO: "0.54 KB/s",
  cpu: "0.20 %",
  mem: "1 MB"
}, {
  name: "Ashton",
  user: "Rooan",
  badge: "badge badge-primary",
  IO: "20 KB/s",
  cpu: "0.50 %",
  mem: "13 MB"
}, {
  name: "Cedric",
  user: "Ced",
  badge: "badge badge-primary",
  IO: "50 KB/s",
  cpu: "0.40 %",
  mem: "25 MB"
}, {
  name: "Airi",
  user: "Airi",
  badge: "badge badge-secondary",
  IO: "0.40 KB/s",
  cpu: "0 %",
  mem: "13 MB"
}, {
  name: "Brielle",
  user: "Brie",
  badge: "badge badge-secondary",
  IO: "25 KB/s",
  cpu: "0.60 %",
  mem: "25 MB"
}, {
  name: "Herrod",
  user: "Heran",
  badge: "badge badge-primary",
  IO: "57 KB/s",
  cpu: "0 %",
  mem: "1 MB"
}, {
  name: "Rhona",
  user: "Rho",
  badge: "badge badge-primary",
  IO: "24 KB/s",
  cpu: "0 %",
  mem: "1 MB"
}, {
  name: "Colleen",
  user: "Coll",
  badge: "badge badge-primary",
  IO: "0 KB/s",
  cpu: "0 %",
  mem: "14 MB"
}, {
  name: "Sonya",
  user: "Sonan",
  badge: "badge badge-primary",
  IO: "0 KB/s",
  cpu: "0 %",
  mem: "13 MB"
}, {
  name: "Jena",
  user: "Jen",
  badge: "badge badge-secondary",
  IO: "0 KB/s",
  cpu: "0 %",
  mem: "1 MB"
}, {
  name: "Quinn",
  user: "Quian",
  badge: "badge badge-primary",
  IO: "75 KB/s",
  cpu: "0.50 %",
  mem: "42 MB"
}, {
  name: "Charde",
  user: "Char",
  badge: "badge badge-secondary",
  IO: "30 KB/s",
  cpu: "0.20 %",
  mem: "10 MB"
}, {
  name: "Haley",
  user: "Hal",
  badge: "badge badge-secondary",
  IO: "56 KB/s",
  cpu: "0.10 %",
  mem: "20 MB"
}, {
  name: "Tatyana",
  user: "Tatan",
  badge: "badge badge-primary",
  IO: "20 KB/s",
  cpu: "0.80 %",
  mem: "77 MB"
}, {
  name: "Michael",
  user: "Micha",
  badge: "badge badge-secondary",
  IO: "0 KB/s",
  cpu: "0.70 %",
  mem: "30 MB"
}, {
  name: "Paul",
  user: "Pauan",
  badge: "badge badge-primary",
  IO: "0 KB/s",
  cpu: "0.50 %",
  mem: "11 MB"
}, {
  name: "Gloria",
  user: "Gloan",
  badge: "badge badge-primary",
  IO: "65 KB/s",
  cpu: "0.20 %",
  mem: "1 MB"
}, {
  name: "Bradley",
  user: "Bradl",
  badge: "badge badge-secondary",
  IO: "40 KB/s",
  cpu: "0 %",
  mem: "15 MB"
}, {
  name: "Dai",
  user: "Dav",
  badge: "badge badge-primary",
  IO: "10 KB/s",
  cpu: "0 %",
  mem: "15 MB"
}, {
  name: "Jenette",
  user: "Jenantte",
  badge: "badge badge-primary",
  IO: "37 KB/s",
  cpu: "0.30 %",
  mem: "20 MB"
}, {
  name: "Yuri",
  user: "Yuri",
  badge: "badge badge-primary",
  IO: "0 KB/s",
  cpu: "0 %",
  mem: "25 MB"
}, {
  name: "Caesar",
  user: "Caes",
  badge: "badge badge-secondary",
  IO: "0 KB/s",
  cpu: "0 %",
  mem: "20 MB"
}, {
  name: "Doris",
  user: "Dori",
  badge: "badge badge-secondary",
  IO: "38 KB/s",
  cpu: "0.10 %",
  mem: "14 MB"
}, {
  name: "Angelica",
  user: "Angalica",
  badge: "badge badge-primary",
  IO: "40 KB/s",
  cpu: "0.50 %",
  mem: "1 MB"
}, {
  name: "Gavin",
  user: "Gavan",
  badge: "badge badge-primary",
  IO: "0 KB/s",
  cpu: "0.20 %",
  mem: "1 MB"
}, {
  name: "Jennifer",
  user: "Jenni",
  badge: "badge badge-primary",
  IO: "0 KB/s",
  cpu: "0 %",
  mem: "20 MB"
}, {
  name: "Brenden",
  user: "Bren",
  badge: "badge badge-secondary",
  IO: "16 KB/s",
  cpu: "0 %",
  mem: "23 MB"
}, {
  name: "Fiona",
  user: "Fio",
  badge: "badge badge-secondary",
  IO: "50 KB/s",
  cpu: "0.30 %",
  mem: "75 MB"
}, {
  name: "Shou",
  user: "Sho",
  badge: "badge badge-primary",
  IO: "37 KB/s",
  cpu: "0.20 %",
  mem: "22 MB"
}, {
  name: "Michelle",
  user: "Mican",
  badge: "badge badge-primary",
  IO: "0 KB/s",
  cpu: "0.50 %",
  mem: "16 MB"
}, {
  name: "Suki",
  user: "Suk",
  badge: "badge badge-secondary",
  IO: "0 KB/s",
  cpu: "0 %",
  mem: "42 MB"
}, {
  name: "Prescott",
  user: "Prean",
  badge: "badge badge-primary",
  IO: "56 KB/s",
  cpu: "0.27 %",
  mem: "1 MB"
}, {
  name: "Gavin",
  user: "Gavan",
  badge: "badge badge-primary",
  IO: "0 KB/s",
  cpu: "0.22 %",
  mem: "70 MB"
}, {
  name: "Martena",
  user: "Maran",
  badge: "badge badge-primary",
  IO: "0 KB/s",
  cpu: "0 %",
  mem: "20 MB"
}, {
  name: "Unity",
  user: "Unian",
  badge: "badge badge-primary",
  IO: "0 KB/s",
  cpu: "0 %",
  mem: "1 MB"
}, {
  name: "Howard",
  user: "Howan",
  badge: "badge badge-primary",
  IO: "65 KB/s",
  cpu: "0.20 %",
  mem: "1 MB"
}, {
  name: "Hope",
  user: "Hop",
  badge: "badge badge-secondary",
  IO: "5 KB/s",
  cpu: "0.04 %",
  mem: "145 MB"
}, {
  name: "Vivian",
  user: "Vivi",
  badge: "badge badge-secondary",
  IO: "80 KB/s",
  cpu: "0.50 %",
  mem: "25 MB"
}, {
  name: "Timothy",
  user: "Timan",
  badge: "badge badge-primary",
  IO: "50 KB/s",
  cpu: "0.30 %",
  mem: "13 MB"
}, {
  name: "Jackson",
  user: "Jack",
  badge: "badge badge-secondary",
  IO: "37 KB/s",
  cpu: "0.10 %",
  mem: "10 MB"
}, {
  name: "Olivia",
  user: "Olian",
  badge: "badge badge-primary",
  IO: "0 KB/s",
  cpu: "0 %",
  mem: "7"
}, {
  name: "Bruno",
  user: "Brun",
  badge: "badge badge-secondary",
  IO: "37 KB/s",
  cpu: "0.15 %",
  mem: "5 MB"
}, {
  name: "Sakura",
  user: "Sakan",
  badge: "badge badge-primary",
  IO: "50 KB/s",
  cpu: "0.50 %",
  mem: "15 MB"
}, {
  name: "Thor",
  user: "Tho",
  badge: "badge badge-primary",
  IO: "25 KB/s",
  cpu: "0.10 %",
  mem: "80 MB"
}, {
  name: "Finn",
  user: "Fin",
  badge: "badge badge-primary",
  IO: "40 KB/s",
  cpu: "0.30 %",
  mem: "7 MB"
}, {
  name: "Serge",
  user: "Ser",
  badge: "badge badge-primary",
  IO: "60 KB/s",
  cpu: "0.10 %",
  mem: "45 MB"
}, {
  name: "Zenaida",
  user: "Zen",
  badge: "badge badge-primary",
  IO: "37 KB/s",
  cpu: "0.50 %",
  mem: "60 MB"
}, {
  name: "Zorita",
  user: "Zor",
  badge: "badge badge-primary",
  IO: "0 KB/s",
  cpu: "0 %",
  mem: "57 MB"
}, {
  name: "Jennifer",
  user: "Jenan",
  badge: "badge badge-primary",
  IO: "0 KB/s",
  cpu: "0 %",
  mem: "180 MB"
}, {
  name: "Cara",
  user: "Car",
  badge: "badge badge-primary",
  IO: "50 KB/s",
  cpu: "0.30 %",
  mem: "20 MB"
}, {
  name: "Hermione",
  user: "Hermi",
  badge: "badge badge-secondary",
  IO: "37 KB/s",
  cpu: "0.20 %",
  mem: "1 MB"
}, {
  name: "Lael",
  user: "Lae",
  badge: "badge badge-primary",
  IO: "0 KB/s",
  cpu: "0.10 %",
  mem: "50 MB"
}, {
  name: "Jonas",
  user: "Jon",
  badge: "badge badge-primary",
  IO: "12 KB/s",
  cpu: "0.05 %",
  mem: "2 MB"
}, {
  name: "Shad",
  user: "Sha",
  badge: "badge badge-primary",
  IO: "42 KB/s",
  cpu: "020 %",
  mem: "40 MB"
}, {
  name: "Michael",
  user: "Mican",
  badge: "badge badge-primary",
  IO: "0 KB/s",
  cpu: "0 %",
  mem: "25 MB"
}, {
  name: "Donna",
  user: "Donan",
  badge: "badge badge-primary",
  IO: "37 KB/s",
  cpu: "0.10 %",
  mem: "13 MB"
}];

/***/ }),

/***/ 32282:
/*!**********************************************************************************!*\
  !*** ./node_modules/@swimlane/ngx-datatable/fesm2020/swimlane-ngx-datatable.mjs ***!
  \**********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ClickType: () => (/* binding */ ClickType),
/* harmony export */   ColumnChangesService: () => (/* binding */ ColumnChangesService),
/* harmony export */   ColumnMode: () => (/* binding */ ColumnMode),
/* harmony export */   ContextmenuType: () => (/* binding */ ContextmenuType),
/* harmony export */   DataTableBodyCellComponent: () => (/* binding */ DataTableBodyCellComponent),
/* harmony export */   DataTableBodyComponent: () => (/* binding */ DataTableBodyComponent),
/* harmony export */   DataTableBodyRowComponent: () => (/* binding */ DataTableBodyRowComponent),
/* harmony export */   DataTableColumnCellDirective: () => (/* binding */ DataTableColumnCellDirective),
/* harmony export */   DataTableColumnCellTreeToggle: () => (/* binding */ DataTableColumnCellTreeToggle),
/* harmony export */   DataTableColumnDirective: () => (/* binding */ DataTableColumnDirective),
/* harmony export */   DataTableColumnHeaderDirective: () => (/* binding */ DataTableColumnHeaderDirective),
/* harmony export */   DataTableFooterComponent: () => (/* binding */ DataTableFooterComponent),
/* harmony export */   DataTableFooterTemplateDirective: () => (/* binding */ DataTableFooterTemplateDirective),
/* harmony export */   DataTableHeaderCellComponent: () => (/* binding */ DataTableHeaderCellComponent),
/* harmony export */   DataTableHeaderComponent: () => (/* binding */ DataTableHeaderComponent),
/* harmony export */   DataTablePagerComponent: () => (/* binding */ DataTablePagerComponent),
/* harmony export */   DataTableRowWrapperComponent: () => (/* binding */ DataTableRowWrapperComponent),
/* harmony export */   DataTableSelectionComponent: () => (/* binding */ DataTableSelectionComponent),
/* harmony export */   DataTableSummaryRowComponent: () => (/* binding */ DataTableSummaryRowComponent),
/* harmony export */   DatatableComponent: () => (/* binding */ DatatableComponent),
/* harmony export */   DatatableFooterDirective: () => (/* binding */ DatatableFooterDirective),
/* harmony export */   DatatableGroupHeaderDirective: () => (/* binding */ DatatableGroupHeaderDirective),
/* harmony export */   DatatableGroupHeaderTemplateDirective: () => (/* binding */ DatatableGroupHeaderTemplateDirective),
/* harmony export */   DatatableRowDetailDirective: () => (/* binding */ DatatableRowDetailDirective),
/* harmony export */   DatatableRowDetailTemplateDirective: () => (/* binding */ DatatableRowDetailTemplateDirective),
/* harmony export */   DimensionsHelper: () => (/* binding */ DimensionsHelper),
/* harmony export */   DraggableDirective: () => (/* binding */ DraggableDirective),
/* harmony export */   Keys: () => (/* binding */ Keys),
/* harmony export */   LongPressDirective: () => (/* binding */ LongPressDirective),
/* harmony export */   NgxDatatableModule: () => (/* binding */ NgxDatatableModule),
/* harmony export */   OrderableDirective: () => (/* binding */ OrderableDirective),
/* harmony export */   ProgressBarComponent: () => (/* binding */ ProgressBarComponent),
/* harmony export */   ResizeableDirective: () => (/* binding */ ResizeableDirective),
/* harmony export */   RowHeightCache: () => (/* binding */ RowHeightCache),
/* harmony export */   ScrollbarHelper: () => (/* binding */ ScrollbarHelper),
/* harmony export */   ScrollerComponent: () => (/* binding */ ScrollerComponent),
/* harmony export */   SelectionType: () => (/* binding */ SelectionType),
/* harmony export */   SortDirection: () => (/* binding */ SortDirection),
/* harmony export */   SortType: () => (/* binding */ SortType),
/* harmony export */   VisibilityDirective: () => (/* binding */ VisibilityDirective),
/* harmony export */   adjustColumnWidths: () => (/* binding */ adjustColumnWidths),
/* harmony export */   camelCase: () => (/* binding */ camelCase),
/* harmony export */   columnGroupWidths: () => (/* binding */ columnGroupWidths),
/* harmony export */   columnTotalWidth: () => (/* binding */ columnTotalWidth),
/* harmony export */   columnsByPin: () => (/* binding */ columnsByPin),
/* harmony export */   columnsByPinArr: () => (/* binding */ columnsByPinArr),
/* harmony export */   columnsTotalWidth: () => (/* binding */ columnsTotalWidth),
/* harmony export */   deCamelCase: () => (/* binding */ deCamelCase),
/* harmony export */   deepValueGetter: () => (/* binding */ deepValueGetter),
/* harmony export */   elementsFromPoint: () => (/* binding */ elementsFromPoint),
/* harmony export */   emptyStringGetter: () => (/* binding */ emptyStringGetter),
/* harmony export */   forceFillColumnWidths: () => (/* binding */ forceFillColumnWidths),
/* harmony export */   getTotalFlexGrow: () => (/* binding */ getTotalFlexGrow),
/* harmony export */   getVendorPrefixedName: () => (/* binding */ getVendorPrefixedName),
/* harmony export */   getterForProp: () => (/* binding */ getterForProp),
/* harmony export */   groupRowsByParents: () => (/* binding */ groupRowsByParents),
/* harmony export */   id: () => (/* binding */ id),
/* harmony export */   isNullOrUndefined: () => (/* binding */ isNullOrUndefined),
/* harmony export */   nextSortDir: () => (/* binding */ nextSortDir),
/* harmony export */   numericIndexGetter: () => (/* binding */ numericIndexGetter),
/* harmony export */   optionalGetterForProp: () => (/* binding */ optionalGetterForProp),
/* harmony export */   orderByComparator: () => (/* binding */ orderByComparator),
/* harmony export */   selectRows: () => (/* binding */ selectRows),
/* harmony export */   selectRowsBetween: () => (/* binding */ selectRowsBetween),
/* harmony export */   setColumnDefaults: () => (/* binding */ setColumnDefaults),
/* harmony export */   shallowValueGetter: () => (/* binding */ shallowValueGetter),
/* harmony export */   sortRows: () => (/* binding */ sortRows),
/* harmony export */   throttle: () => (/* binding */ throttle),
/* harmony export */   throttleable: () => (/* binding */ throttleable),
/* harmony export */   translateTemplates: () => (/* binding */ translateTemplates),
/* harmony export */   translateXY: () => (/* binding */ translateXY)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 72513);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 59016);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 58071);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 20274);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 42321);








/**
 * Gets the width of the scrollbar.  Nesc for windows
 * http://stackoverflow.com/a/13382873/888165
 */
const _c0 = ["*"];
const _c1 = ["cellTemplate"];
function DataTableBodyCellComponent_label_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 4)(1, "input", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataTableBodyCellComponent_label_1_Template_input_click_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r4.onCheckboxChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r0.isSelected);
  }
}
function DataTableBodyCellComponent_ng_container_2_button_1_i_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 11);
  }
}
function DataTableBodyCellComponent_ng_container_2_button_1_i_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 12);
  }
}
function DataTableBodyCellComponent_ng_container_2_button_1_i_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 13);
  }
}
function DataTableBodyCellComponent_ng_container_2_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataTableBodyCellComponent_ng_container_2_button_1_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r11.onTreeAction());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DataTableBodyCellComponent_ng_container_2_button_1_i_2_Template, 1, 0, "i", 8)(3, DataTableBodyCellComponent_ng_container_2_button_1_i_3_Template, 1, 0, "i", 9)(4, DataTableBodyCellComponent_ng_container_2_button_1_i_4_Template, 1, 0, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r6.treeStatus === "disabled");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.treeStatus === "loading");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.treeStatus === "collapsed");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.treeStatus === "expanded" || ctx_r6.treeStatus === "disabled");
  }
}
function DataTableBodyCellComponent_ng_container_2_2_ng_template_0_Template(rf, ctx) {}
const _c2 = a0 => ({
  cellContext: a0
});
function DataTableBodyCellComponent_ng_container_2_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DataTableBodyCellComponent_ng_container_2_2_ng_template_0_Template, 0, 0, "ng-template", 14);
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r7.column.treeToggleTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c2, ctx_r7.cellContext));
  }
}
function DataTableBodyCellComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DataTableBodyCellComponent_ng_container_2_button_1_Template, 5, 4, "button", 6)(2, DataTableBodyCellComponent_ng_container_2_2_Template, 1, 4, null, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.column.treeToggleTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.column.treeToggleTemplate);
  }
}
function DataTableBodyCellComponent_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 15);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx_r2.sanitizedValue)("innerHTML", ctx_r2.value, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
  }
}
function DataTableBodyCellComponent_4_ng_template_0_Template(rf, ctx) {}
function DataTableBodyCellComponent_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DataTableBodyCellComponent_4_ng_template_0_Template, 0, 0, "ng-template", 14, 16, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r3.column.cellTemplate)("ngTemplateOutletContext", ctx_r3.cellContext);
  }
}
function DataTableBodyRowComponent_div_0_datatable_body_cell_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "datatable-body-cell", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("activate", function DataTableBodyRowComponent_div_0_datatable_body_cell_1_Template_datatable_body_cell_activate_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);
      const ii_r5 = restoredCtx.index;
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r6.onActivate($event, ii_r5));
    })("treeAction", function DataTableBodyRowComponent_div_0_datatable_body_cell_1_Template_datatable_body_cell_treeAction_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r8.onTreeAction());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const column_r4 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("row", ctx_r3.row)("group", ctx_r3.group)("expanded", ctx_r3.expanded)("isSelected", ctx_r3.isSelected)("rowIndex", ctx_r3.rowIndex)("column", column_r4)("rowHeight", ctx_r3.rowHeight)("displayCheck", ctx_r3.displayCheck)("treeStatus", ctx_r3.treeStatus);
  }
}
function DataTableBodyRowComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DataTableBodyRowComponent_div_0_datatable_body_cell_1_Template, 1, 9, "datatable-body-cell", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const colGroup_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("datatable-row-", colGroup_r1.type, " datatable-row-group");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r0._groupStyles[colGroup_r1.type]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", colGroup_r1.columns)("ngForTrackBy", ctx_r0.columnTrackingFn);
  }
}
function DataTableSummaryRowComponent_datatable_body_row_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "datatable-body-row", 1);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerWidth", ctx_r0.innerWidth)("offsetX", ctx_r0.offsetX)("columns", ctx_r0._internalColumns)("rowHeight", ctx_r0.rowHeight)("row", ctx_r0.summaryRow)("rowIndex", -1);
  }
}
function DataTableRowWrapperComponent_div_0_1_ng_template_0_Template(rf, ctx) {}
function DataTableRowWrapperComponent_div_0_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DataTableRowWrapperComponent_div_0_1_ng_template_0_Template, 0, 0, "ng-template", 4);
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r3.groupHeader.template)("ngTemplateOutletContext", ctx_r3.groupContext);
  }
}
function DataTableRowWrapperComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DataTableRowWrapperComponent_div_0_1_Template, 1, 2, null, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r0.getGroupHeaderStyle());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.groupHeader && ctx_r0.groupHeader.template);
  }
}
function DataTableRowWrapperComponent_ng_content_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0, 0, ["*ngIf", "(groupHeader && groupHeader.template && expanded) || !groupHeader || !groupHeader.template"]);
  }
}
function DataTableRowWrapperComponent_div_2_1_ng_template_0_Template(rf, ctx) {}
function DataTableRowWrapperComponent_div_2_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DataTableRowWrapperComponent_div_2_1_ng_template_0_Template, 0, 0, "ng-template", 4);
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r5.rowDetail.template)("ngTemplateOutletContext", ctx_r5.rowContext);
  }
}
function DataTableRowWrapperComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DataTableRowWrapperComponent_div_2_1_Template, 1, 2, null, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", ctx_r2.detailRowHeight, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.rowDetail && ctx_r2.rowDetail.template);
  }
}
function DataTableBodyComponent_datatable_progress_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "datatable-progress");
  }
}
function DataTableBodyComponent_datatable_scroller_3_datatable_summary_row_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "datatable-summary-row", 9);
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rowHeight", ctx_r4.summaryHeight)("offsetX", ctx_r4.offsetX)("innerWidth", ctx_r4.innerWidth)("rows", ctx_r4.rows)("columns", ctx_r4.columns);
  }
}
function DataTableBodyComponent_datatable_scroller_3_datatable_row_wrapper_2_datatable_body_row_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "datatable-body-row", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("treeAction", function DataTableBodyComponent_datatable_scroller_3_datatable_row_wrapper_2_datatable_body_row_1_Template_datatable_body_row_treeAction_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);
      const group_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r12.onTreeAction(group_r7));
    })("activate", function DataTableBodyComponent_datatable_scroller_3_datatable_row_wrapper_2_datatable_body_row_1_Template_datatable_body_row_activate_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);
      const i_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](_r1.onActivate($event, ctx_r15.indexes.first + i_r8));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const group_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isSelected", _r1.getRowSelected(group_r7))("innerWidth", ctx_r9.innerWidth)("offsetX", ctx_r9.offsetX)("columns", ctx_r9.columns)("rowHeight", ctx_r9.getRowHeight(group_r7))("row", group_r7)("rowIndex", ctx_r9.getRowIndex(group_r7))("expanded", ctx_r9.getRowExpanded(group_r7))("rowClass", ctx_r9.rowClass)("displayCheck", ctx_r9.displayCheck)("treeStatus", group_r7 && group_r7.treeStatus);
  }
}
function DataTableBodyComponent_datatable_scroller_3_datatable_row_wrapper_2_ng_template_2_datatable_body_row_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "datatable-body-row", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("activate", function DataTableBodyComponent_datatable_scroller_3_datatable_row_wrapper_2_ng_template_2_datatable_body_row_0_Template_datatable_body_row_activate_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22);
      const i_r20 = restoredCtx.index;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](_r1.onActivate($event, i_r20));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r19 = ctx.$implicit;
    const group_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isSelected", _r1.getRowSelected(row_r19))("innerWidth", ctx_r18.innerWidth)("offsetX", ctx_r18.offsetX)("columns", ctx_r18.columns)("rowHeight", ctx_r18.getRowHeight(row_r19))("row", row_r19)("group", group_r7.value)("rowIndex", ctx_r18.getRowIndex(row_r19))("expanded", ctx_r18.getRowExpanded(row_r19))("rowClass", ctx_r18.rowClass);
  }
}
function DataTableBodyComponent_datatable_scroller_3_datatable_row_wrapper_2_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DataTableBodyComponent_datatable_scroller_3_datatable_row_wrapper_2_ng_template_2_datatable_body_row_0_Template, 1, 10, "datatable-body-row", 14);
  }
  if (rf & 2) {
    const group_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", group_r7.value)("ngForTrackBy", ctx_r10.rowTrackingFn);
  }
}
function DataTableBodyComponent_datatable_scroller_3_datatable_row_wrapper_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "datatable-row-wrapper", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("rowContextmenu", function DataTableBodyComponent_datatable_scroller_3_datatable_row_wrapper_2_Template_datatable_row_wrapper_rowContextmenu_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26);
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r25.rowContextmenu.emit($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DataTableBodyComponent_datatable_scroller_3_datatable_row_wrapper_2_datatable_body_row_1_Template, 1, 11, "datatable-body-row", 11)(2, DataTableBodyComponent_datatable_scroller_3_datatable_row_wrapper_2_ng_template_2_Template, 1, 2, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const group_r7 = ctx.$implicit;
    const i_r8 = ctx.index;
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("groupedRows", ctx_r5.groupedRows)("innerWidth", ctx_r5.innerWidth)("ngStyle", ctx_r5.getRowsStyles(group_r7))("rowDetail", ctx_r5.rowDetail)("groupHeader", ctx_r5.groupHeader)("offsetX", ctx_r5.offsetX)("detailRowHeight", ctx_r5.getDetailRowHeight(group_r7 && group_r7[i_r8], i_r8))("row", group_r7)("expanded", ctx_r5.getRowExpanded(group_r7))("rowIndex", ctx_r5.getRowIndex(group_r7 && group_r7[i_r8]));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r5.groupedRows)("ngIfElse", _r11);
  }
}
function DataTableBodyComponent_datatable_scroller_3_datatable_summary_row_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "datatable-summary-row", 16);
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r6.getBottomSummaryRowStyles())("rowHeight", ctx_r6.summaryHeight)("offsetX", ctx_r6.offsetX)("innerWidth", ctx_r6.innerWidth)("rows", ctx_r6.rows)("columns", ctx_r6.columns);
  }
}
function DataTableBodyComponent_datatable_scroller_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "datatable-scroller", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function DataTableBodyComponent_datatable_scroller_3_Template_datatable_scroller_scroll_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28);
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r27.onBodyScroll($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DataTableBodyComponent_datatable_scroller_3_datatable_summary_row_1_Template, 1, 5, "datatable-summary-row", 6)(2, DataTableBodyComponent_datatable_scroller_3_datatable_row_wrapper_2_Template, 4, 12, "datatable-row-wrapper", 7)(3, DataTableBodyComponent_datatable_scroller_3_datatable_summary_row_3_Template, 1, 6, "datatable-summary-row", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("scrollbarV", ctx_r2.scrollbarV)("scrollbarH", ctx_r2.scrollbarH)("scrollHeight", ctx_r2.scrollHeight)("scrollWidth", ctx_r2.columnGroupWidths == null ? null : ctx_r2.columnGroupWidths.total);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.summaryRow && ctx_r2.summaryPosition === "top");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.temp)("ngForTrackBy", ctx_r2.rowTrackingFn);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.summaryRow && ctx_r2.summaryPosition === "bottom");
  }
}
function DataTableBodyComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 17);
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r3.emptyMessage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
  }
}
function DataTableHeaderCellComponent_1_ng_template_0_Template(rf, ctx) {}
function DataTableHeaderCellComponent_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DataTableHeaderCellComponent_1_ng_template_0_Template, 0, 0, "ng-template", 5);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.targetMarkerTemplate)("ngTemplateOutletContext", ctx_r0.targetMarkerContext);
  }
}
function DataTableHeaderCellComponent_label_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 6)(1, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function DataTableHeaderCellComponent_label_2_Template_input_change_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r5.select.emit(!ctx_r5.allRowsSelected));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r1.allRowsSelected);
  }
}
function DataTableHeaderCellComponent_span_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 8)(1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataTableHeaderCellComponent_span_3_Template_span_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r7.onSort());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r2.name, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
  }
}
function DataTableHeaderCellComponent_4_ng_template_0_Template(rf, ctx) {}
function DataTableHeaderCellComponent_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DataTableHeaderCellComponent_4_ng_template_0_Template, 0, 0, "ng-template", 5);
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r3.column.headerTemplate)("ngTemplateOutletContext", ctx_r3.cellContext);
  }
}
function DataTableHeaderComponent_div_1_datatable_header_cell_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "datatable-header-cell", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function DataTableHeaderComponent_div_1_datatable_header_cell_1_Template_datatable_header_cell_resize_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const column_r3 = restoredCtx.$implicit;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r4.onColumnResized($event, column_r3));
    })("longPressStart", function DataTableHeaderComponent_div_1_datatable_header_cell_1_Template_datatable_header_cell_longPressStart_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r6.onLongPressStart($event));
    })("longPressEnd", function DataTableHeaderComponent_div_1_datatable_header_cell_1_Template_datatable_header_cell_longPressEnd_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r7.onLongPressEnd($event));
    })("sort", function DataTableHeaderComponent_div_1_datatable_header_cell_1_Template_datatable_header_cell_sort_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r8.onSort($event));
    })("select", function DataTableHeaderComponent_div_1_datatable_header_cell_1_Template_datatable_header_cell_select_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r9.select.emit($event));
    })("columnContextmenu", function DataTableHeaderComponent_div_1_datatable_header_cell_1_Template_datatable_header_cell_columnContextmenu_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r10.columnContextmenu.emit($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const column_r3 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("resizeEnabled", column_r3.resizeable)("pressModel", column_r3)("pressEnabled", ctx_r2.reorderable && column_r3.draggable)("dragX", ctx_r2.reorderable && column_r3.draggable && column_r3.dragging)("dragY", false)("dragModel", column_r3)("dragEventTarget", ctx_r2.dragEventTarget)("headerHeight", ctx_r2.headerHeight)("isTarget", column_r3.isTarget)("targetMarkerTemplate", ctx_r2.targetMarkerTemplate)("targetMarkerContext", column_r3.targetMarkerContext)("column", column_r3)("sortType", ctx_r2.sortType)("sorts", ctx_r2.sorts)("selectionType", ctx_r2.selectionType)("sortAscendingIcon", ctx_r2.sortAscendingIcon)("sortDescendingIcon", ctx_r2.sortDescendingIcon)("sortUnsetIcon", ctx_r2.sortUnsetIcon)("allRowsSelected", ctx_r2.allRowsSelected);
  }
}
function DataTableHeaderComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DataTableHeaderComponent_div_1_datatable_header_cell_1_Template, 1, 19, "datatable-header-cell", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const colGroup_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("datatable-row-" + colGroup_r1.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r0._styleByGroup[colGroup_r1.type]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", colGroup_r1.columns)("ngForTrackBy", ctx_r0.columnTrackingFn);
  }
}
function DataTablePagerComponent_li_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 6)(1, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataTablePagerComponent_li_7_Template_a_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const pg_r1 = restoredCtx.$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.selectPage(pg_r1.number));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const pg_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", pg_r1.number === ctx_r0.page);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", "page " + pg_r1.number);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", pg_r1.text, " ");
  }
}
function DataTableFooterComponent_1_ng_template_0_Template(rf, ctx) {}
const _c3 = (a0, a1, a2, a3, a4) => ({
  rowCount: a0,
  pageSize: a1,
  selectedCount: a2,
  curPage: a3,
  offset: a4
});
function DataTableFooterComponent_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DataTableFooterComponent_1_ng_template_0_Template, 0, 0, "ng-template", 4);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.footerTemplate.template)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction5"](2, _c3, ctx_r0.rowCount, ctx_r0.pageSize, ctx_r0.selectedCount, ctx_r0.curPage, ctx_r0.offset));
  }
}
function DataTableFooterComponent_div_2_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx_r4.selectedCount == null ? null : ctx_r4.selectedCount.toLocaleString(), " ", ctx_r4.selectedMessage, " / ");
  }
}
function DataTableFooterComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DataTableFooterComponent_div_2_span_1_Template, 2, 2, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.selectedMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx_r1.rowCount == null ? null : ctx_r1.rowCount.toLocaleString(), " ", ctx_r1.totalMessage, " ");
  }
}
function DataTableFooterComponent_datatable_pager_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "datatable-pager", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function DataTableFooterComponent_datatable_pager_3_Template_datatable_pager_change_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r5.page.emit($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pagerLeftArrowIcon", ctx_r2.pagerLeftArrowIcon)("pagerRightArrowIcon", ctx_r2.pagerRightArrowIcon)("pagerPreviousIcon", ctx_r2.pagerPreviousIcon)("pagerNextIcon", ctx_r2.pagerNextIcon)("page", ctx_r2.curPage)("size", ctx_r2.pageSize)("count", ctx_r2.rowCount)("hidden", !ctx_r2.isVisible);
  }
}
const _c4 = a0 => ({
  "selected-count": a0
});
function DatatableComponent_datatable_header_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "datatable-header", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("sort", function DatatableComponent_datatable_header_1_Template_datatable_header_sort_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.onColumnSort($event));
    })("resize", function DatatableComponent_datatable_header_1_Template_datatable_header_resize_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r4.onColumnResize($event));
    })("reorder", function DatatableComponent_datatable_header_1_Template_datatable_header_reorder_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r5.onColumnReorder($event));
    })("select", function DatatableComponent_datatable_header_1_Template_datatable_header_select_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r6.onHeaderSelect($event));
    })("columnContextmenu", function DatatableComponent_datatable_header_1_Template_datatable_header_columnContextmenu_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r7.onColumnContextmenu($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("sorts", ctx_r0.sorts)("sortType", ctx_r0.sortType)("scrollbarH", ctx_r0.scrollbarH)("innerWidth", ctx_r0._innerWidth)("offsetX", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 15, ctx_r0._offsetX))("dealsWithGroup", ctx_r0.groupedRows !== undefined)("columns", ctx_r0._internalColumns)("headerHeight", ctx_r0.headerHeight)("reorderable", ctx_r0.reorderable)("targetMarkerTemplate", ctx_r0.targetMarkerTemplate)("sortAscendingIcon", ctx_r0.cssClasses.sortAscending)("sortDescendingIcon", ctx_r0.cssClasses.sortDescending)("sortUnsetIcon", ctx_r0.cssClasses.sortUnset)("allRowsSelected", ctx_r0.allRowsSelected)("selectionType", ctx_r0.selectionType);
  }
}
function DatatableComponent_datatable_footer_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "datatable-footer", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("page", function DatatableComponent_datatable_footer_4_Template_datatable_footer_page_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r8.onFooterPage($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rowCount", ctx_r1.rowCount)("pageSize", ctx_r1.pageSize)("offset", ctx_r1.offset)("footerHeight", ctx_r1.footerHeight)("footerTemplate", ctx_r1.footer)("totalMessage", ctx_r1.messages.totalMessage)("pagerLeftArrowIcon", ctx_r1.cssClasses.pagerLeftArrow)("pagerRightArrowIcon", ctx_r1.cssClasses.pagerRightArrow)("pagerPreviousIcon", ctx_r1.cssClasses.pagerPrevious)("selectedCount", ctx_r1.selected.length)("selectedMessage", !!ctx_r1.selectionType && ctx_r1.messages.selectedMessage)("pagerNextIcon", ctx_r1.cssClasses.pagerNext);
  }
}
class ScrollbarHelper {
  constructor(document) {
    this.document = document;
    this.width = this.getWidth();
  }
  getWidth() {
    const outer = this.document.createElement('div');
    outer.style.visibility = 'hidden';
    outer.style.width = '100px';
    outer.style.msOverflowStyle = 'scrollbar';
    this.document.body.appendChild(outer);
    const widthNoScroll = outer.offsetWidth;
    outer.style.overflow = 'scroll';
    const inner = this.document.createElement('div');
    inner.style.width = '100%';
    outer.appendChild(inner);
    const widthWithScroll = inner.offsetWidth;
    outer.parentNode.removeChild(outer);
    return widthNoScroll - widthWithScroll;
  }
}
ScrollbarHelper.ɵfac = function ScrollbarHelper_Factory(t) {
  return new (t || ScrollbarHelper)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT));
};
ScrollbarHelper.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: ScrollbarHelper,
  factory: ScrollbarHelper.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ScrollbarHelper, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT]
      }]
    }];
  }, null);
})();

/**
 * Gets the width of the scrollbar.  Nesc for windows
 * http://stackoverflow.com/a/13382873/888165
 */
class DimensionsHelper {
  getDimensions(element) {
    return element.getBoundingClientRect();
  }
}
DimensionsHelper.ɵfac = function DimensionsHelper_Factory(t) {
  return new (t || DimensionsHelper)();
};
DimensionsHelper.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: DimensionsHelper,
  factory: DimensionsHelper.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DimensionsHelper, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
  }], null, null);
})();

/**
 * service to make DatatableComponent aware of changes to
 * input bindings of DataTableColumnDirective
 */
class ColumnChangesService {
  constructor() {
    this.columnInputChanges = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
  }
  get columnInputChanges$() {
    return this.columnInputChanges.asObservable();
  }
  onInputChange() {
    this.columnInputChanges.next();
  }
}
ColumnChangesService.ɵfac = function ColumnChangesService_Factory(t) {
  return new (t || ColumnChangesService)();
};
ColumnChangesService.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: ColumnChangesService,
  factory: ColumnChangesService.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ColumnChangesService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
  }], null, null);
})();
class DataTableFooterTemplateDirective {
  constructor(template) {
    this.template = template;
  }
}
DataTableFooterTemplateDirective.ɵfac = function DataTableFooterTemplateDirective_Factory(t) {
  return new (t || DataTableFooterTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef));
};
DataTableFooterTemplateDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: DataTableFooterTemplateDirective,
  selectors: [["", "ngx-datatable-footer-template", ""]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataTableFooterTemplateDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[ngx-datatable-footer-template]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
    }];
  }, null);
})();

/**
 * Visibility Observer Directive
 *
 * Usage:
 *
 * 		<div
 * 			visibilityObserver
 * 			(visible)="onVisible($event)">
 * 		</div>
 *
 */
class VisibilityDirective {
  constructor(element, zone) {
    this.element = element;
    this.zone = zone;
    this.isVisible = false;
    this.visible = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  ngOnInit() {
    this.runCheck();
  }
  ngOnDestroy() {
    clearTimeout(this.timeout);
  }
  onVisibilityChange() {
    // trigger zone recalc for columns
    this.zone.run(() => {
      this.isVisible = true;
      this.visible.emit(true);
    });
  }
  runCheck() {
    const check = () => {
      // https://davidwalsh.name/offsetheight-visibility
      const {
        offsetHeight,
        offsetWidth
      } = this.element.nativeElement;
      if (offsetHeight && offsetWidth) {
        clearTimeout(this.timeout);
        this.onVisibilityChange();
      } else {
        clearTimeout(this.timeout);
        this.zone.runOutsideAngular(() => {
          this.timeout = setTimeout(() => check(), 50);
        });
      }
    };
    this.timeout = setTimeout(() => check());
  }
}
VisibilityDirective.ɵfac = function VisibilityDirective_Factory(t) {
  return new (t || VisibilityDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
};
VisibilityDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: VisibilityDirective,
  selectors: [["", "visibilityObserver", ""]],
  hostVars: 2,
  hostBindings: function VisibilityDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("visible", ctx.isVisible);
    }
  },
  outputs: {
    visible: "visible"
  }
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VisibilityDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[visibilityObserver]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }];
  }, {
    isVisible: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['class.visible']
    }],
    visible: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }]
  });
})();

/**
 * Draggable Directive for Angular2
 *
 * Inspiration:
 *   https://github.com/AngularClass/angular2-examples/blob/master/rx-draggable/directives/draggable.ts
 *   http://stackoverflow.com/questions/35662530/how-to-implement-drag-and-drop-in-angular2
 *
 */
class DraggableDirective {
  constructor(element) {
    this.dragX = true;
    this.dragY = true;
    this.dragStart = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.dragging = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.dragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.isDragging = false;
    this.element = element.nativeElement;
  }
  ngOnChanges(changes) {
    if (changes['dragEventTarget'] && changes['dragEventTarget'].currentValue && this.dragModel.dragging) {
      this.onMousedown(changes['dragEventTarget'].currentValue);
    }
  }
  ngOnDestroy() {
    this._destroySubscription();
  }
  onMouseup(event) {
    if (!this.isDragging) return;
    this.isDragging = false;
    this.element.classList.remove('dragging');
    if (this.subscription) {
      this._destroySubscription();
      this.dragEnd.emit({
        event,
        element: this.element,
        model: this.dragModel
      });
    }
  }
  onMousedown(event) {
    // we only want to drag the inner header text
    const isDragElm = event.target.classList.contains('draggable');
    if (isDragElm && (this.dragX || this.dragY)) {
      event.preventDefault();
      this.isDragging = true;
      const mouseDownPos = {
        x: event.clientX,
        y: event.clientY
      };
      const mouseup = (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.fromEvent)(document, 'mouseup');
      this.subscription = mouseup.subscribe(ev => this.onMouseup(ev));
      const mouseMoveSub = (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.fromEvent)(document, 'mousemove').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(mouseup)).subscribe(ev => this.move(ev, mouseDownPos));
      this.subscription.add(mouseMoveSub);
      this.dragStart.emit({
        event,
        element: this.element,
        model: this.dragModel
      });
    }
  }
  move(event, mouseDownPos) {
    if (!this.isDragging) return;
    const x = event.clientX - mouseDownPos.x;
    const y = event.clientY - mouseDownPos.y;
    if (this.dragX) this.element.style.left = `${x}px`;
    if (this.dragY) this.element.style.top = `${y}px`;
    this.element.classList.add('dragging');
    this.dragging.emit({
      event,
      element: this.element,
      model: this.dragModel
    });
  }
  _destroySubscription() {
    if (this.subscription) {
      this.subscription.unsubscribe();
      this.subscription = undefined;
    }
  }
}
DraggableDirective.ɵfac = function DraggableDirective_Factory(t) {
  return new (t || DraggableDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
};
DraggableDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: DraggableDirective,
  selectors: [["", "draggable", ""]],
  inputs: {
    dragEventTarget: "dragEventTarget",
    dragModel: "dragModel",
    dragX: "dragX",
    dragY: "dragY"
  },
  outputs: {
    dragStart: "dragStart",
    dragging: "dragging",
    dragEnd: "dragEnd"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DraggableDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[draggable]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }];
  }, {
    dragEventTarget: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    dragModel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    dragX: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    dragY: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    dragStart: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    dragging: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    dragEnd: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }]
  });
})();
class ResizeableDirective {
  constructor(element, renderer) {
    this.renderer = renderer;
    this.resizeEnabled = true;
    this.resize = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.resizing = false;
    this.element = element.nativeElement;
  }
  ngAfterViewInit() {
    const renderer2 = this.renderer;
    this.resizeHandle = renderer2.createElement('span');
    if (this.resizeEnabled) {
      renderer2.addClass(this.resizeHandle, 'resize-handle');
    } else {
      renderer2.addClass(this.resizeHandle, 'resize-handle--not-resizable');
    }
    renderer2.appendChild(this.element, this.resizeHandle);
  }
  ngOnDestroy() {
    this._destroySubscription();
    if (this.renderer.destroyNode) {
      this.renderer.destroyNode(this.resizeHandle);
    } else if (this.resizeHandle) {
      this.renderer.removeChild(this.renderer.parentNode(this.resizeHandle), this.resizeHandle);
    }
  }
  onMouseup() {
    this.resizing = false;
    if (this.subscription && !this.subscription.closed) {
      this._destroySubscription();
      this.resize.emit(this.element.clientWidth);
    }
  }
  onMousedown(event) {
    const isHandle = event.target.classList.contains('resize-handle');
    const initialWidth = this.element.clientWidth;
    const mouseDownScreenX = event.screenX;
    if (isHandle) {
      event.stopPropagation();
      this.resizing = true;
      const mouseup = (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.fromEvent)(document, 'mouseup');
      this.subscription = mouseup.subscribe(ev => this.onMouseup());
      const mouseMoveSub = (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.fromEvent)(document, 'mousemove').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(mouseup)).subscribe(e => this.move(e, initialWidth, mouseDownScreenX));
      this.subscription.add(mouseMoveSub);
    }
  }
  move(event, initialWidth, mouseDownScreenX) {
    const movementX = event.screenX - mouseDownScreenX;
    const newWidth = initialWidth + movementX;
    const overMinWidth = !this.minWidth || newWidth >= this.minWidth;
    const underMaxWidth = !this.maxWidth || newWidth <= this.maxWidth;
    if (overMinWidth && underMaxWidth) {
      this.element.style.width = `${newWidth}px`;
    }
  }
  _destroySubscription() {
    if (this.subscription) {
      this.subscription.unsubscribe();
      this.subscription = undefined;
    }
  }
}
ResizeableDirective.ɵfac = function ResizeableDirective_Factory(t) {
  return new (t || ResizeableDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2));
};
ResizeableDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: ResizeableDirective,
  selectors: [["", "resizeable", ""]],
  hostVars: 2,
  hostBindings: function ResizeableDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function ResizeableDirective_mousedown_HostBindingHandler($event) {
        return ctx.onMousedown($event);
      });
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("resizeable", ctx.resizeEnabled);
    }
  },
  inputs: {
    resizeEnabled: "resizeEnabled",
    minWidth: "minWidth",
    maxWidth: "maxWidth"
  },
  outputs: {
    resize: "resize"
  }
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResizeableDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[resizeable]',
      host: {
        '[class.resizeable]': 'resizeEnabled'
      }
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2
    }];
  }, {
    resizeEnabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    minWidth: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    maxWidth: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    resize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onMousedown: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['mousedown', ['$event']]
    }]
  });
})();
class OrderableDirective {
  constructor(differs, document) {
    this.document = document;
    this.reorder = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.targetChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.differ = differs.find({}).create();
  }
  ngAfterContentInit() {
    // HACK: Investigate Better Way
    this.updateSubscriptions();
    this.draggables.changes.subscribe(this.updateSubscriptions.bind(this));
  }
  ngOnDestroy() {
    this.draggables.forEach(d => {
      d.dragStart.unsubscribe();
      d.dragging.unsubscribe();
      d.dragEnd.unsubscribe();
    });
  }
  updateSubscriptions() {
    const diffs = this.differ.diff(this.createMapDiffs());
    if (diffs) {
      const subscribe = ({
        currentValue,
        previousValue
      }) => {
        unsubscribe({
          previousValue
        });
        if (currentValue) {
          currentValue.dragStart.subscribe(this.onDragStart.bind(this));
          currentValue.dragging.subscribe(this.onDragging.bind(this));
          currentValue.dragEnd.subscribe(this.onDragEnd.bind(this));
        }
      };
      const unsubscribe = ({
        previousValue
      }) => {
        if (previousValue) {
          previousValue.dragStart.unsubscribe();
          previousValue.dragging.unsubscribe();
          previousValue.dragEnd.unsubscribe();
        }
      };
      diffs.forEachAddedItem(subscribe);
      // diffs.forEachChangedItem(subscribe.bind(this));
      diffs.forEachRemovedItem(unsubscribe);
    }
  }
  onDragStart() {
    this.positions = {};
    let i = 0;
    for (const dragger of this.draggables.toArray()) {
      const elm = dragger.element;
      const left = parseInt(elm.offsetLeft.toString(), 0);
      this.positions[dragger.dragModel.prop] = {
        left,
        right: left + parseInt(elm.offsetWidth.toString(), 0),
        index: i++,
        element: elm
      };
    }
  }
  onDragging({
    element,
    model,
    event
  }) {
    const prevPos = this.positions[model.prop];
    const target = this.isTarget(model, event);
    if (target) {
      if (this.lastDraggingIndex !== target.i) {
        this.targetChanged.emit({
          prevIndex: this.lastDraggingIndex,
          newIndex: target.i,
          initialIndex: prevPos.index
        });
        this.lastDraggingIndex = target.i;
      }
    } else if (this.lastDraggingIndex !== prevPos.index) {
      this.targetChanged.emit({
        prevIndex: this.lastDraggingIndex,
        initialIndex: prevPos.index
      });
      this.lastDraggingIndex = prevPos.index;
    }
  }
  onDragEnd({
    element,
    model,
    event
  }) {
    const prevPos = this.positions[model.prop];
    const target = this.isTarget(model, event);
    if (target) {
      this.reorder.emit({
        prevIndex: prevPos.index,
        newIndex: target.i,
        model
      });
    }
    this.lastDraggingIndex = undefined;
    element.style.left = 'auto';
  }
  isTarget(model, event) {
    let i = 0;
    const x = event.x || event.clientX;
    const y = event.y || event.clientY;
    const targets = this.document.elementsFromPoint(x, y);
    for (const prop in this.positions) {
      // current column position which throws event.
      const pos = this.positions[prop];
      // since we drag the inner span, we need to find it in the elements at the cursor
      if (model.prop !== prop && targets.find(el => el === pos.element)) {
        return {
          pos,
          i
        };
      }
      i++;
    }
  }
  createMapDiffs() {
    return this.draggables.toArray().reduce((acc, curr) => {
      acc[curr.dragModel.$$id] = curr;
      return acc;
    }, {});
  }
}
OrderableDirective.ɵfac = function OrderableDirective_Factory(t) {
  return new (t || OrderableDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.KeyValueDiffers), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT));
};
OrderableDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: OrderableDirective,
  selectors: [["", "orderable", ""]],
  contentQueries: function OrderableDirective_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, DraggableDirective, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.draggables = _t);
    }
  },
  outputs: {
    reorder: "reorder",
    targetChanged: "targetChanged"
  }
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrderableDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[orderable]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.KeyValueDiffers
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT]
      }]
    }];
  }, {
    reorder: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    targetChanged: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    draggables: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
      args: [DraggableDirective, {
        descendants: true
      }]
    }]
  });
})();
class LongPressDirective {
  constructor() {
    this.pressEnabled = true;
    this.duration = 500;
    this.longPressStart = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.longPressing = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.longPressEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.mouseX = 0;
    this.mouseY = 0;
  }
  get press() {
    return this.pressing;
  }
  get isLongPress() {
    return this.isLongPressing;
  }
  onMouseDown(event) {
    // don't do right/middle clicks
    if (event.which !== 1 || !this.pressEnabled) return;
    // don't start drag if its on resize handle
    const target = event.target;
    if (target.classList.contains('resize-handle')) return;
    this.mouseX = event.clientX;
    this.mouseY = event.clientY;
    this.pressing = true;
    this.isLongPressing = false;
    const mouseup = (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.fromEvent)(document, 'mouseup');
    this.subscription = mouseup.subscribe(ev => this.onMouseup());
    this.timeout = setTimeout(() => {
      this.isLongPressing = true;
      this.longPressStart.emit({
        event,
        model: this.pressModel
      });
      this.subscription.add((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.fromEvent)(document, 'mousemove').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(mouseup)).subscribe(mouseEvent => this.onMouseMove(mouseEvent)));
      this.loop(event);
    }, this.duration);
    this.loop(event);
  }
  onMouseMove(event) {
    if (this.pressing && !this.isLongPressing) {
      const xThres = Math.abs(event.clientX - this.mouseX) > 10;
      const yThres = Math.abs(event.clientY - this.mouseY) > 10;
      if (xThres || yThres) {
        this.endPress();
      }
    }
  }
  loop(event) {
    if (this.isLongPressing) {
      this.timeout = setTimeout(() => {
        this.longPressing.emit({
          event,
          model: this.pressModel
        });
        this.loop(event);
      }, 50);
    }
  }
  endPress() {
    clearTimeout(this.timeout);
    this.isLongPressing = false;
    this.pressing = false;
    this._destroySubscription();
    this.longPressEnd.emit({
      model: this.pressModel
    });
  }
  onMouseup() {
    this.endPress();
  }
  ngOnDestroy() {
    this._destroySubscription();
  }
  _destroySubscription() {
    if (this.subscription) {
      this.subscription.unsubscribe();
      this.subscription = undefined;
    }
  }
}
LongPressDirective.ɵfac = function LongPressDirective_Factory(t) {
  return new (t || LongPressDirective)();
};
LongPressDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: LongPressDirective,
  selectors: [["", "long-press", ""]],
  hostVars: 4,
  hostBindings: function LongPressDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function LongPressDirective_mousedown_HostBindingHandler($event) {
        return ctx.onMouseDown($event);
      });
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("press", ctx.press)("longpress", ctx.isLongPress);
    }
  },
  inputs: {
    pressEnabled: "pressEnabled",
    pressModel: "pressModel",
    duration: "duration"
  },
  outputs: {
    longPressStart: "longPressStart",
    longPressing: "longPressing",
    longPressEnd: "longPressEnd"
  }
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LongPressDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[long-press]'
    }]
  }], null, {
    pressEnabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    pressModel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    duration: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    longPressStart: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    longPressing: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    longPressEnd: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    press: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['class.press']
    }],
    isLongPress: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['class.longpress']
    }],
    onMouseDown: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['mousedown', ['$event']]
    }]
  });
})();
class ScrollerComponent {
  constructor(ngZone, element, renderer) {
    this.ngZone = ngZone;
    this.renderer = renderer;
    this.scrollbarV = false;
    this.scrollbarH = false;
    this.scroll = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.scrollYPos = 0;
    this.scrollXPos = 0;
    this.prevScrollYPos = 0;
    this.prevScrollXPos = 0;
    this._scrollEventListener = null;
    this.element = element.nativeElement;
  }
  ngOnInit() {
    // manual bind so we don't always listen
    if (this.scrollbarV || this.scrollbarH) {
      const renderer = this.renderer;
      this.parentElement = renderer.parentNode(renderer.parentNode(this.element));
      this._scrollEventListener = this.onScrolled.bind(this);
      this.parentElement.addEventListener('scroll', this._scrollEventListener);
    }
  }
  ngOnDestroy() {
    if (this._scrollEventListener) {
      this.parentElement.removeEventListener('scroll', this._scrollEventListener);
      this._scrollEventListener = null;
    }
  }
  setOffset(offsetY) {
    if (this.parentElement) {
      this.parentElement.scrollTop = offsetY;
    }
  }
  onScrolled(event) {
    const dom = event.currentTarget;
    requestAnimationFrame(() => {
      this.scrollYPos = dom.scrollTop;
      this.scrollXPos = dom.scrollLeft;
      this.updateOffset();
    });
  }
  updateOffset() {
    let direction;
    if (this.scrollYPos < this.prevScrollYPos) {
      direction = 'down';
    } else if (this.scrollYPos > this.prevScrollYPos) {
      direction = 'up';
    }
    this.scroll.emit({
      direction,
      scrollYPos: this.scrollYPos,
      scrollXPos: this.scrollXPos
    });
    this.prevScrollYPos = this.scrollYPos;
    this.prevScrollXPos = this.scrollXPos;
  }
}
ScrollerComponent.ɵfac = function ScrollerComponent_Factory(t) {
  return new (t || ScrollerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2));
};
ScrollerComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: ScrollerComponent,
  selectors: [["datatable-scroller"]],
  hostAttrs: [1, "datatable-scroll"],
  hostVars: 4,
  hostBindings: function ScrollerComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", ctx.scrollHeight, "px")("width", ctx.scrollWidth, "px");
    }
  },
  inputs: {
    scrollbarV: "scrollbarV",
    scrollbarH: "scrollbarH",
    scrollHeight: "scrollHeight",
    scrollWidth: "scrollWidth"
  },
  outputs: {
    scroll: "scroll"
  },
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function ScrollerComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ScrollerComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'datatable-scroller',
      template: ` <ng-content></ng-content> `,
      host: {
        class: 'datatable-scroll'
      },
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2
    }];
  }, {
    scrollbarV: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    scrollbarH: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    scrollHeight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['style.height.px']
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    scrollWidth: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['style.width.px']
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    scroll: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }]
  });
})();
class DatatableGroupHeaderTemplateDirective {
  constructor(template) {
    this.template = template;
  }
}
DatatableGroupHeaderTemplateDirective.ɵfac = function DatatableGroupHeaderTemplateDirective_Factory(t) {
  return new (t || DatatableGroupHeaderTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef));
};
DatatableGroupHeaderTemplateDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: DatatableGroupHeaderTemplateDirective,
  selectors: [["", "ngx-datatable-group-header-template", ""]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DatatableGroupHeaderTemplateDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[ngx-datatable-group-header-template]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
    }];
  }, null);
})();
class DatatableGroupHeaderDirective {
  constructor() {
    /**
     * Row height is required when virtual scroll is enabled.
     */
    this.rowHeight = 0;
    /**
     * Track toggling of group visibility
     */
    this.toggle = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  get template() {
    return this._templateInput || this._templateQuery;
  }
  /**
   * Toggle the expansion of a group
   */
  toggleExpandGroup(group) {
    this.toggle.emit({
      type: 'group',
      value: group
    });
  }
  /**
   * Expand all groups
   */
  expandAllGroups() {
    this.toggle.emit({
      type: 'all',
      value: true
    });
  }
  /**
   * Collapse all groups
   */
  collapseAllGroups() {
    this.toggle.emit({
      type: 'all',
      value: false
    });
  }
}
DatatableGroupHeaderDirective.ɵfac = function DatatableGroupHeaderDirective_Factory(t) {
  return new (t || DatatableGroupHeaderDirective)();
};
DatatableGroupHeaderDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: DatatableGroupHeaderDirective,
  selectors: [["ngx-datatable-group-header"]],
  contentQueries: function DatatableGroupHeaderDirective_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, DatatableGroupHeaderTemplateDirective, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._templateQuery = _t.first);
    }
  },
  inputs: {
    rowHeight: "rowHeight",
    _templateInput: ["template", "_templateInput"]
  },
  outputs: {
    toggle: "toggle"
  }
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DatatableGroupHeaderDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'ngx-datatable-group-header'
    }]
  }], null, {
    rowHeight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    _templateInput: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['template']
    }],
    _templateQuery: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [DatatableGroupHeaderTemplateDirective, {
        read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef,
        static: true
      }]
    }],
    toggle: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }]
  });
})();

/**
 * Always returns the empty string ''
 */
function emptyStringGetter() {
  return '';
}
/**
 * Returns the appropriate getter function for this kind of prop.
 * If prop == null, returns the emptyStringGetter.
 */
function getterForProp(prop) {
  if (prop == null) {
    return emptyStringGetter;
  }
  if (typeof prop === 'number') {
    return numericIndexGetter;
  } else {
    // deep or simple
    if (prop.indexOf('.') !== -1) {
      return deepValueGetter;
    } else {
      return shallowValueGetter;
    }
  }
}
/**
 * Returns the value at this numeric index.
 * @param row array of values
 * @param index numeric index
 * @returns any or '' if invalid index
 */
function numericIndexGetter(row, index) {
  if (row == null) {
    return '';
  }
  // mimic behavior of deepValueGetter
  if (!row || index == null) {
    return row;
  }
  const value = row[index];
  if (value == null) {
    return '';
  }
  return value;
}
/**
 * Returns the value of a field.
 * (more efficient than deepValueGetter)
 * @param obj object containing the field
 * @param fieldName field name string
 */
function shallowValueGetter(obj, fieldName) {
  if (obj == null) {
    return '';
  }
  if (!obj || !fieldName) {
    return obj;
  }
  const value = obj[fieldName];
  if (value == null) {
    return '';
  }
  return value;
}
/**
 * Returns a deep object given a string. zoo['animal.type']
 */
function deepValueGetter(obj, path) {
  if (obj == null) {
    return '';
  }
  if (!obj || !path) {
    return obj;
  }
  // check if path matches a root-level field
  // { "a.b.c": 123 }
  let current = obj[path];
  if (current !== undefined) {
    return current;
  }
  current = obj;
  const split = path.split('.');
  if (split.length) {
    for (let i = 0; i < split.length; i++) {
      current = current[split[i]];
      // if found undefined, return empty string
      if (current === undefined || current === null) {
        return '';
      }
    }
  }
  return current;
}
function optionalGetterForProp(prop) {
  return prop && (row => getterForProp(prop)(row, prop));
}
/**
 * This functions rearrange items by their parents
 * Also sets the level value to each of the items
 *
 * Note: Expecting each item has a property called parentId
 * Note: This algorithm will fail if a list has two or more items with same ID
 * NOTE: This algorithm will fail if there is a deadlock of relationship
 *
 * For example,
 *
 * Input
 *
 * id -> parent
 * 1  -> 0
 * 2  -> 0
 * 3  -> 1
 * 4  -> 1
 * 5  -> 2
 * 7  -> 8
 * 6  -> 3
 *
 *
 * Output
 * id -> level
 * 1      -> 0
 * --3    -> 1
 * ----6  -> 2
 * --4    -> 1
 * 2      -> 0
 * --5    -> 1
 * 7     -> 8
 *
 *
 * @param rows
 *
 */
function groupRowsByParents(rows, from, to) {
  if (from && to) {
    const nodeById = {};
    const l = rows.length;
    let node = null;
    nodeById[0] = new TreeNode(); // that's the root node
    const uniqIDs = rows.reduce((arr, item) => {
      const toValue = to(item);
      if (arr.indexOf(toValue) === -1) {
        arr.push(toValue);
      }
      return arr;
    }, []);
    for (let i = 0; i < l; i++) {
      // make TreeNode objects for each item
      nodeById[to(rows[i])] = new TreeNode(rows[i]);
    }
    for (let i = 0; i < l; i++) {
      // link all TreeNode objects
      node = nodeById[to(rows[i])];
      let parent = 0;
      const fromValue = from(node.row);
      if (!!fromValue && uniqIDs.indexOf(fromValue) > -1) {
        parent = fromValue;
      }
      node.parent = nodeById[parent];
      node.row['level'] = node.parent.row['level'] + 1;
      node.parent.children.push(node);
    }
    let resolvedRows = [];
    nodeById[0].flatten(function () {
      resolvedRows = [...resolvedRows, this.row];
    }, true);
    return resolvedRows;
  } else {
    return rows;
  }
}
class TreeNode {
  constructor(row = null) {
    if (!row) {
      row = {
        level: -1,
        treeStatus: 'expanded'
      };
    }
    this.row = row;
    this.parent = null;
    this.children = [];
  }
  flatten(f, recursive) {
    if (this.row['treeStatus'] === 'expanded') {
      for (let i = 0, l = this.children.length; i < l; i++) {
        const child = this.children[i];
        f.apply(child, Array.prototype.slice.call(arguments, 2));
        if (recursive) child.flatten.apply(child, arguments);
      }
    }
  }
}

/**
 * Converts strings from something to camel case
 * http://stackoverflow.com/questions/10425287/convert-dash-separated-string-to-camelcase
 */
function camelCase(str) {
  // Replace special characters with a space
  str = str.replace(/[^a-zA-Z0-9 ]/g, ' ');
  // put a space before an uppercase letter
  str = str.replace(/([a-z](?=[A-Z]))/g, '$1 ');
  // Lower case first character and some other stuff
  str = str.replace(/([^a-zA-Z0-9 ])|^[0-9]+/g, '').trim().toLowerCase();
  // uppercase characters preceded by a space or number
  str = str.replace(/([ 0-9]+)([a-zA-Z])/g, function (a, b, c) {
    return b.trim() + c.toUpperCase();
  });
  return str;
}
/**
 * Converts strings from camel case to words
 * http://stackoverflow.com/questions/7225407/convert-camelcasetext-to-camel-case-text
 */
function deCamelCase(str) {
  return str.replace(/([A-Z])/g, match => ` ${match}`).replace(/^./, match => match.toUpperCase());
}

/**
 * Creates a unique object id.
 * http://stackoverflow.com/questions/6248666/how-to-generate-short-uid-like-ax4j9z-in-js
 */
function id() {
  return ('0000' + (Math.random() * Math.pow(36, 4) << 0).toString(36)).slice(-4);
}

/**
 * Sets the column defaults
 */
function setColumnDefaults(columns) {
  if (!columns) return;
  // Only one column should hold the tree view
  // Thus if multiple columns are provided with
  // isTreeColumn as true we take only the first one
  let treeColumnFound = false;
  for (const column of columns) {
    if (!column.$$id) {
      column.$$id = id();
    }
    // prop can be numeric; zero is valid not a missing prop
    // translate name => prop
    if (isNullOrUndefined(column.prop) && column.name) {
      column.prop = camelCase(column.name);
    }
    if (!column.$$valueGetter) {
      column.$$valueGetter = getterForProp(column.prop);
    }
    // format props if no name passed
    if (!isNullOrUndefined(column.prop) && isNullOrUndefined(column.name)) {
      column.name = deCamelCase(String(column.prop));
    }
    if (isNullOrUndefined(column.prop) && isNullOrUndefined(column.name)) {
      column.name = ''; // Fixes IE and Edge displaying `null`
    }

    if (!column.hasOwnProperty('resizeable')) {
      column.resizeable = true;
    }
    if (!column.hasOwnProperty('sortable')) {
      column.sortable = true;
    }
    if (!column.hasOwnProperty('draggable')) {
      column.draggable = true;
    }
    if (!column.hasOwnProperty('canAutoResize')) {
      column.canAutoResize = true;
    }
    if (!column.hasOwnProperty('width')) {
      column.width = 150;
    }
    if (!column.hasOwnProperty('isTreeColumn')) {
      column.isTreeColumn = false;
    } else {
      if (column.isTreeColumn && !treeColumnFound) {
        // If the first column with isTreeColumn is true found
        // we mark that treeCoulmn is found
        treeColumnFound = true;
      } else {
        // After that isTreeColumn property for any other column
        // will be set as false
        column.isTreeColumn = false;
      }
    }
  }
}
function isNullOrUndefined(value) {
  return value === null || value === undefined;
}
/**
 * Translates templates definitions to objects
 */
function translateTemplates(templates) {
  const result = [];
  for (const temp of templates) {
    const col = {};
    const props = Object.getOwnPropertyNames(temp);
    for (const prop of props) {
      col[prop] = temp[prop];
    }
    if (temp.headerTemplate) {
      col.headerTemplate = temp.headerTemplate;
    }
    if (temp.cellTemplate) {
      col.cellTemplate = temp.cellTemplate;
    }
    if (temp.summaryFunc) {
      col.summaryFunc = temp.summaryFunc;
    }
    if (temp.summaryTemplate) {
      col.summaryTemplate = temp.summaryTemplate;
    }
    result.push(col);
  }
  return result;
}
var ColumnMode;
(function (ColumnMode) {
  ColumnMode["standard"] = "standard";
  ColumnMode["flex"] = "flex";
  ColumnMode["force"] = "force";
})(ColumnMode || (ColumnMode = {}));
var SelectionType;
(function (SelectionType) {
  SelectionType["single"] = "single";
  SelectionType["multi"] = "multi";
  SelectionType["multiClick"] = "multiClick";
  SelectionType["cell"] = "cell";
  SelectionType["checkbox"] = "checkbox";
})(SelectionType || (SelectionType = {}));
var SortType;
(function (SortType) {
  SortType["single"] = "single";
  SortType["multi"] = "multi";
})(SortType || (SortType = {}));
var ContextmenuType;
(function (ContextmenuType) {
  ContextmenuType["header"] = "header";
  ContextmenuType["body"] = "body";
})(ContextmenuType || (ContextmenuType = {}));
class DataTableColumnHeaderDirective {
  constructor(template) {
    this.template = template;
  }
}
DataTableColumnHeaderDirective.ɵfac = function DataTableColumnHeaderDirective_Factory(t) {
  return new (t || DataTableColumnHeaderDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef));
};
DataTableColumnHeaderDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: DataTableColumnHeaderDirective,
  selectors: [["", "ngx-datatable-header-template", ""]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataTableColumnHeaderDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[ngx-datatable-header-template]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
    }];
  }, null);
})();
class DataTableColumnCellDirective {
  constructor(template) {
    this.template = template;
  }
}
DataTableColumnCellDirective.ɵfac = function DataTableColumnCellDirective_Factory(t) {
  return new (t || DataTableColumnCellDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef));
};
DataTableColumnCellDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: DataTableColumnCellDirective,
  selectors: [["", "ngx-datatable-cell-template", ""]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataTableColumnCellDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[ngx-datatable-cell-template]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
    }];
  }, null);
})();
class DataTableColumnCellTreeToggle {
  constructor(template) {
    this.template = template;
  }
}
DataTableColumnCellTreeToggle.ɵfac = function DataTableColumnCellTreeToggle_Factory(t) {
  return new (t || DataTableColumnCellTreeToggle)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef));
};
DataTableColumnCellTreeToggle.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: DataTableColumnCellTreeToggle,
  selectors: [["", "ngx-datatable-tree-toggle", ""]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataTableColumnCellTreeToggle, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[ngx-datatable-tree-toggle]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
    }];
  }, null);
})();
class DataTableColumnDirective {
  constructor(columnChangesService) {
    this.columnChangesService = columnChangesService;
    this.isFirstChange = true;
  }
  get cellTemplate() {
    return this._cellTemplateInput || this._cellTemplateQuery;
  }
  get headerTemplate() {
    return this._headerTemplateInput || this._headerTemplateQuery;
  }
  get treeToggleTemplate() {
    return this._treeToggleTemplateInput || this._treeToggleTemplateQuery;
  }
  ngOnChanges() {
    if (this.isFirstChange) {
      this.isFirstChange = false;
    } else {
      this.columnChangesService.onInputChange();
    }
  }
}
DataTableColumnDirective.ɵfac = function DataTableColumnDirective_Factory(t) {
  return new (t || DataTableColumnDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ColumnChangesService));
};
DataTableColumnDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: DataTableColumnDirective,
  selectors: [["ngx-datatable-column"]],
  contentQueries: function DataTableColumnDirective_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, DataTableColumnCellDirective, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, DataTableColumnHeaderDirective, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, DataTableColumnCellTreeToggle, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._cellTemplateQuery = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._headerTemplateQuery = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._treeToggleTemplateQuery = _t.first);
    }
  },
  inputs: {
    name: "name",
    prop: "prop",
    frozenLeft: "frozenLeft",
    frozenRight: "frozenRight",
    flexGrow: "flexGrow",
    resizeable: "resizeable",
    comparator: "comparator",
    pipe: "pipe",
    sortable: "sortable",
    draggable: "draggable",
    canAutoResize: "canAutoResize",
    minWidth: "minWidth",
    width: "width",
    maxWidth: "maxWidth",
    checkboxable: "checkboxable",
    headerCheckboxable: "headerCheckboxable",
    headerClass: "headerClass",
    cellClass: "cellClass",
    isTreeColumn: "isTreeColumn",
    treeLevelIndent: "treeLevelIndent",
    summaryFunc: "summaryFunc",
    summaryTemplate: "summaryTemplate",
    _cellTemplateInput: ["cellTemplate", "_cellTemplateInput"],
    _headerTemplateInput: ["headerTemplate", "_headerTemplateInput"],
    _treeToggleTemplateInput: ["treeToggleTemplate", "_treeToggleTemplateInput"]
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataTableColumnDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'ngx-datatable-column'
    }]
  }], function () {
    return [{
      type: ColumnChangesService
    }];
  }, {
    name: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    prop: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    frozenLeft: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    frozenRight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    flexGrow: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    resizeable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    comparator: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    pipe: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    sortable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    draggable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    canAutoResize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    minWidth: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    width: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    maxWidth: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    checkboxable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    headerCheckboxable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    headerClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    cellClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    isTreeColumn: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    treeLevelIndent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    summaryFunc: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    summaryTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    _cellTemplateInput: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['cellTemplate']
    }],
    _cellTemplateQuery: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [DataTableColumnCellDirective, {
        read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef,
        static: true
      }]
    }],
    _headerTemplateInput: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['headerTemplate']
    }],
    _headerTemplateQuery: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [DataTableColumnHeaderDirective, {
        read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef,
        static: true
      }]
    }],
    _treeToggleTemplateInput: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['treeToggleTemplate']
    }],
    _treeToggleTemplateQuery: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [DataTableColumnCellTreeToggle, {
        read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef,
        static: true
      }]
    }]
  });
})();
class DatatableRowDetailTemplateDirective {
  constructor(template) {
    this.template = template;
  }
}
DatatableRowDetailTemplateDirective.ɵfac = function DatatableRowDetailTemplateDirective_Factory(t) {
  return new (t || DatatableRowDetailTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef));
};
DatatableRowDetailTemplateDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: DatatableRowDetailTemplateDirective,
  selectors: [["", "ngx-datatable-row-detail-template", ""]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DatatableRowDetailTemplateDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[ngx-datatable-row-detail-template]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
    }];
  }, null);
})();
class DatatableRowDetailDirective {
  constructor() {
    /**
     * The detail row height is required especially
     * when virtual scroll is enabled.
     */
    this.rowHeight = 0;
    /**
     * Row detail row visbility was toggled.
     */
    this.toggle = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  get template() {
    return this._templateInput || this._templateQuery;
  }
  /**
   * Toggle the expansion of the row
   */
  toggleExpandRow(row) {
    this.toggle.emit({
      type: 'row',
      value: row
    });
  }
  /**
   * API method to expand all the rows.
   */
  expandAllRows() {
    this.toggle.emit({
      type: 'all',
      value: true
    });
  }
  /**
   * API method to collapse all the rows.
   */
  collapseAllRows() {
    this.toggle.emit({
      type: 'all',
      value: false
    });
  }
}
DatatableRowDetailDirective.ɵfac = function DatatableRowDetailDirective_Factory(t) {
  return new (t || DatatableRowDetailDirective)();
};
DatatableRowDetailDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: DatatableRowDetailDirective,
  selectors: [["ngx-datatable-row-detail"]],
  contentQueries: function DatatableRowDetailDirective_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, DatatableRowDetailTemplateDirective, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._templateQuery = _t.first);
    }
  },
  inputs: {
    rowHeight: "rowHeight",
    _templateInput: ["template", "_templateInput"]
  },
  outputs: {
    toggle: "toggle"
  }
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DatatableRowDetailDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'ngx-datatable-row-detail'
    }]
  }], null, {
    rowHeight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    _templateInput: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['template']
    }],
    _templateQuery: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [DatatableRowDetailTemplateDirective, {
        read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef,
        static: true
      }]
    }],
    toggle: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }]
  });
})();
class DatatableFooterDirective {
  get template() {
    return this._templateInput || this._templateQuery;
  }
}
DatatableFooterDirective.ɵfac = function DatatableFooterDirective_Factory(t) {
  return new (t || DatatableFooterDirective)();
};
DatatableFooterDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: DatatableFooterDirective,
  selectors: [["ngx-datatable-footer"]],
  contentQueries: function DatatableFooterDirective_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, DataTableFooterTemplateDirective, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._templateQuery = _t.first);
    }
  },
  inputs: {
    footerHeight: "footerHeight",
    totalMessage: "totalMessage",
    selectedMessage: "selectedMessage",
    pagerLeftArrowIcon: "pagerLeftArrowIcon",
    pagerRightArrowIcon: "pagerRightArrowIcon",
    pagerPreviousIcon: "pagerPreviousIcon",
    pagerNextIcon: "pagerNextIcon",
    _templateInput: ["template", "_templateInput"]
  }
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DatatableFooterDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'ngx-datatable-footer'
    }]
  }], null, {
    footerHeight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    totalMessage: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    selectedMessage: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    pagerLeftArrowIcon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    pagerRightArrowIcon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    pagerPreviousIcon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    pagerNextIcon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    _templateInput: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['template']
    }],
    _templateQuery: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [DataTableFooterTemplateDirective, {
        read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
      }]
    }]
  });
})();

/**
 * Returns the columns by pin.
 */
function columnsByPin(cols) {
  const ret = {
    left: [],
    center: [],
    right: []
  };
  if (cols) {
    for (const col of cols) {
      if (col.frozenLeft) {
        ret.left.push(col);
      } else if (col.frozenRight) {
        ret.right.push(col);
      } else {
        ret.center.push(col);
      }
    }
  }
  return ret;
}
/**
 * Returns the widths of all group sets of a column
 */
function columnGroupWidths(groups, all) {
  return {
    left: columnTotalWidth(groups.left),
    center: columnTotalWidth(groups.center),
    right: columnTotalWidth(groups.right),
    total: Math.floor(columnTotalWidth(all))
  };
}
/**
 * Calculates the total width of all columns and their groups
 */
function columnTotalWidth(columns, prop) {
  let totalWidth = 0;
  if (columns) {
    for (const c of columns) {
      const has = prop && c[prop];
      const width = has ? c[prop] : c.width;
      totalWidth = totalWidth + parseFloat(width);
    }
  }
  return totalWidth;
}
/**
 * Calculates the total width of all columns and their groups
 */
function columnsTotalWidth(columns, prop) {
  let totalWidth = 0;
  for (const column of columns) {
    const has = prop && column[prop];
    totalWidth = totalWidth + (has ? column[prop] : column.width);
  }
  return totalWidth;
}
function columnsByPinArr(val) {
  const colsByPinArr = [];
  const colsByPin = columnsByPin(val);
  colsByPinArr.push({
    type: 'left',
    columns: colsByPin['left']
  });
  colsByPinArr.push({
    type: 'center',
    columns: colsByPin['center']
  });
  colsByPinArr.push({
    type: 'right',
    columns: colsByPin['right']
  });
  return colsByPinArr;
}

/**
 * This object contains the cache of the various row heights that are present inside
 * the data table.   Its based on Fenwick tree data structure that helps with
 * querying sums that have time complexity of log n.
 *
 * Fenwick Tree Credits: http://petr-mitrichev.blogspot.com/2013/05/fenwick-tree-range-updates.html
 * https://github.com/mikolalysenko/fenwick-tree
 *
 */
class RowHeightCache {
  constructor() {
    /**
     * Tree Array stores the cumulative information of the row heights to perform efficient
     * range queries and updates.  Currently the tree is initialized to the base row
     * height instead of the detail row height.
     */
    this.treeArray = [];
  }
  /**
   * Clear the Tree array.
   */
  clearCache() {
    this.treeArray = [];
  }
  /**
   * Initialize the Fenwick tree with row Heights.
   *
   * @param rows The array of rows which contain the expanded status.
   * @param rowHeight The row height.
   * @param detailRowHeight The detail row height.
   */
  initCache(details) {
    const {
      rows,
      rowHeight,
      detailRowHeight,
      externalVirtual,
      rowCount,
      rowIndexes,
      rowExpansions
    } = details;
    const isFn = typeof rowHeight === 'function';
    const isDetailFn = typeof detailRowHeight === 'function';
    if (!isFn && isNaN(rowHeight)) {
      throw new Error(`Row Height cache initialization failed. Please ensure that 'rowHeight' is a
        valid number or function value: (${rowHeight}) when 'scrollbarV' is enabled.`);
    }
    // Add this additional guard in case detailRowHeight is set to 'auto' as it wont work.
    if (!isDetailFn && isNaN(detailRowHeight)) {
      throw new Error(`Row Height cache initialization failed. Please ensure that 'detailRowHeight' is a
        valid number or function value: (${detailRowHeight}) when 'scrollbarV' is enabled.`);
    }
    const n = externalVirtual ? rowCount : rows.length;
    this.treeArray = new Array(n);
    for (let i = 0; i < n; ++i) {
      this.treeArray[i] = 0;
    }
    for (let i = 0; i < n; ++i) {
      const row = rows[i];
      let currentRowHeight = rowHeight;
      if (isFn) {
        currentRowHeight = rowHeight(row);
      }
      // Add the detail row height to the already expanded rows.
      // This is useful for the table that goes through a filter or sort.
      const expanded = rowExpansions.has(row);
      if (row && expanded) {
        if (isDetailFn) {
          const index = rowIndexes.get(row);
          currentRowHeight += detailRowHeight(row, index);
        } else {
          currentRowHeight += detailRowHeight;
        }
      }
      this.update(i, currentRowHeight);
    }
  }
  /**
   * Given the ScrollY position i.e. sum, provide the rowIndex
   * that is present in the current view port.  Below handles edge cases.
   */
  getRowIndex(scrollY) {
    if (scrollY === 0) return 0;
    return this.calcRowIndex(scrollY);
  }
  /**
   * When a row is expanded or rowHeight is changed, update the height.  This can
   * be utilized in future when Angular Data table supports dynamic row heights.
   */
  update(atRowIndex, byRowHeight) {
    if (!this.treeArray.length) {
      throw new Error(`Update at index ${atRowIndex} with value ${byRowHeight} failed:
        Row Height cache not initialized.`);
    }
    const n = this.treeArray.length;
    atRowIndex |= 0;
    while (atRowIndex < n) {
      this.treeArray[atRowIndex] += byRowHeight;
      atRowIndex |= atRowIndex + 1;
    }
  }
  /**
   * Range Sum query from 1 to the rowIndex
   */
  query(atIndex) {
    if (!this.treeArray.length) {
      throw new Error(`query at index ${atIndex} failed: Fenwick tree array not initialized.`);
    }
    let sum = 0;
    atIndex |= 0;
    while (atIndex >= 0) {
      sum += this.treeArray[atIndex];
      atIndex = (atIndex & atIndex + 1) - 1;
    }
    return sum;
  }
  /**
   * Find the total height between 2 row indexes
   */
  queryBetween(atIndexA, atIndexB) {
    return this.query(atIndexB) - this.query(atIndexA - 1);
  }
  /**
   * Given the ScrollY position i.e. sum, provide the rowIndex
   * that is present in the current view port.
   */
  calcRowIndex(sum) {
    if (!this.treeArray.length) return 0;
    let pos = -1;
    const dataLength = this.treeArray.length;
    // Get the highest bit for the block size.
    const highestBit = Math.pow(2, dataLength.toString(2).length - 1);
    for (let blockSize = highestBit; blockSize !== 0; blockSize >>= 1) {
      const nextPos = pos + blockSize;
      if (nextPos < dataLength && sum >= this.treeArray[nextPos]) {
        sum -= this.treeArray[nextPos];
        pos = nextPos;
      }
    }
    return pos + 1;
  }
}
const cache = {};
const testStyle = typeof document !== 'undefined' ? document.createElement('div').style : undefined;
// Get Prefix
// http://davidwalsh.name/vendor-prefix
const prefix = function () {
  const styles = typeof window !== 'undefined' ? window.getComputedStyle(document.documentElement, '') : undefined;
  const match = typeof styles !== 'undefined' ? Array.prototype.slice.call(styles).join('').match(/-(moz|webkit|ms)-/) : null;
  const pre = match !== null ? match[1] : undefined;
  // tslint:disable-next-line: tsr-detect-non-literal-regexp
  const dom = typeof pre !== 'undefined' ? 'WebKit|Moz|MS|O'.match(new RegExp('(' + pre + ')', 'i'))[1] : undefined;
  return dom ? {
    dom,
    lowercase: pre,
    css: `-${pre}-`,
    js: pre[0].toUpperCase() + pre.substr(1)
  } : undefined;
}();
function getVendorPrefixedName(property) {
  const name = camelCase(property);
  if (!cache[name]) {
    if (prefix !== undefined && testStyle[prefix.css + property] !== undefined) {
      cache[name] = prefix.css + property;
    } else if (testStyle[property] !== undefined) {
      cache[name] = property;
    }
  }
  return cache[name];
}

// browser detection and prefixing tools
const transform = typeof window !== 'undefined' ? getVendorPrefixedName('transform') : undefined;
const backfaceVisibility = typeof window !== 'undefined' ? getVendorPrefixedName('backfaceVisibility') : undefined;
const hasCSSTransforms = typeof window !== 'undefined' ? !!getVendorPrefixedName('transform') : undefined;
const hasCSS3DTransforms = typeof window !== 'undefined' ? !!getVendorPrefixedName('perspective') : undefined;
const ua = typeof window !== 'undefined' ? window.navigator.userAgent : 'Chrome';
const isSafari = /Safari\//.test(ua) && !/Chrome\//.test(ua);
function translateXY(styles, x, y) {
  if (typeof transform !== 'undefined' && hasCSSTransforms) {
    if (!isSafari && hasCSS3DTransforms) {
      styles[transform] = `translate3d(${x}px, ${y}px, 0)`;
      styles[backfaceVisibility] = 'hidden';
    } else {
      styles[camelCase(transform)] = `translate(${x}px, ${y}px)`;
    }
  } else {
    styles.top = `${y}px`;
    styles.left = `${x}px`;
  }
}
class ProgressBarComponent {}
ProgressBarComponent.ɵfac = function ProgressBarComponent_Factory(t) {
  return new (t || ProgressBarComponent)();
};
ProgressBarComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: ProgressBarComponent,
  selectors: [["datatable-progress"]],
  decls: 3,
  vars: 0,
  consts: [["role", "progressbar", 1, "progress-linear"], [1, "container"], [1, "bar"]],
  template: function ProgressBarComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProgressBarComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'datatable-progress',
      template: `
    <div class="progress-linear" role="progressbar">
      <div class="container">
        <div class="bar"></div>
      </div>
    </div>
  `,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush
    }]
  }], null, null);
})();
function selectRows(selected, row, comparefn) {
  const selectedIndex = comparefn(row, selected);
  if (selectedIndex > -1) {
    selected.splice(selectedIndex, 1);
  } else {
    selected.push(row);
  }
  return selected;
}
function selectRowsBetween(selected, rows, index, prevIndex, comparefn) {
  const reverse = index < prevIndex;
  for (let i = 0; i < rows.length; i++) {
    const row = rows[i];
    const greater = i >= prevIndex && i <= index;
    const lesser = i <= prevIndex && i >= index;
    let range = {
      start: 0,
      end: 0
    };
    if (reverse) {
      range = {
        start: index,
        end: prevIndex
      };
    } else {
      range = {
        start: prevIndex,
        end: index + 1
      };
    }
    if (reverse && lesser || !reverse && greater) {
      // if in the positive range to be added to `selected`, and
      // not already in the selected array, add it
      if (i >= range.start && i <= range.end) {
        selected.push(row);
      }
    }
  }
  return selected;
}
var Keys;
(function (Keys) {
  Keys[Keys["up"] = 38] = "up";
  Keys[Keys["down"] = 40] = "down";
  Keys[Keys["return"] = 13] = "return";
  Keys[Keys["escape"] = 27] = "escape";
  Keys[Keys["left"] = 37] = "left";
  Keys[Keys["right"] = 39] = "right";
})(Keys || (Keys = {}));
class DataTableSelectionComponent {
  constructor() {
    this.activate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.select = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  selectRow(event, index, row) {
    if (!this.selectEnabled) return;
    const chkbox = this.selectionType === SelectionType.checkbox;
    const multi = this.selectionType === SelectionType.multi;
    const multiClick = this.selectionType === SelectionType.multiClick;
    let selected = [];
    if (multi || chkbox || multiClick) {
      if (event.shiftKey) {
        selected = selectRowsBetween([], this.rows, index, this.prevIndex, this.getRowSelectedIdx.bind(this));
      } else if (event.ctrlKey || event.metaKey || multiClick || chkbox) {
        selected = selectRows([...this.selected], row, this.getRowSelectedIdx.bind(this));
      } else {
        selected = selectRows([], row, this.getRowSelectedIdx.bind(this));
      }
    } else {
      selected = selectRows([], row, this.getRowSelectedIdx.bind(this));
    }
    if (typeof this.selectCheck === 'function') {
      selected = selected.filter(this.selectCheck.bind(this));
    }
    this.selected.splice(0, this.selected.length);
    this.selected.push(...selected);
    this.prevIndex = index;
    this.select.emit({
      selected
    });
  }
  onActivate(model, index) {
    const {
      type,
      event,
      row
    } = model;
    const chkbox = this.selectionType === SelectionType.checkbox;
    const select = !chkbox && (type === 'click' || type === 'dblclick') || chkbox && type === 'checkbox';
    if (select) {
      this.selectRow(event, index, row);
    } else if (type === 'keydown') {
      if (event.keyCode === Keys.return) {
        this.selectRow(event, index, row);
      } else {
        this.onKeyboardFocus(model);
      }
    }
    this.activate.emit(model);
  }
  onKeyboardFocus(model) {
    const {
      keyCode
    } = model.event;
    const shouldFocus = keyCode === Keys.up || keyCode === Keys.down || keyCode === Keys.right || keyCode === Keys.left;
    if (shouldFocus) {
      const isCellSelection = this.selectionType === SelectionType.cell;
      if (!model.cellElement || !isCellSelection) {
        this.focusRow(model.rowElement, keyCode);
      } else if (isCellSelection) {
        this.focusCell(model.cellElement, model.rowElement, keyCode, model.cellIndex);
      }
    }
  }
  focusRow(rowElement, keyCode) {
    const nextRowElement = this.getPrevNextRow(rowElement, keyCode);
    if (nextRowElement) nextRowElement.focus();
  }
  getPrevNextRow(rowElement, keyCode) {
    const parentElement = rowElement.parentElement;
    if (parentElement) {
      let focusElement;
      if (keyCode === Keys.up) {
        focusElement = parentElement.previousElementSibling;
      } else if (keyCode === Keys.down) {
        focusElement = parentElement.nextElementSibling;
      }
      if (focusElement && focusElement.children.length) {
        return focusElement.children[0];
      }
    }
  }
  focusCell(cellElement, rowElement, keyCode, cellIndex) {
    let nextCellElement;
    if (keyCode === Keys.left) {
      nextCellElement = cellElement.previousElementSibling;
    } else if (keyCode === Keys.right) {
      nextCellElement = cellElement.nextElementSibling;
    } else if (keyCode === Keys.up || keyCode === Keys.down) {
      const nextRowElement = this.getPrevNextRow(rowElement, keyCode);
      if (nextRowElement) {
        const children = nextRowElement.getElementsByClassName('datatable-body-cell');
        if (children.length) nextCellElement = children[cellIndex];
      }
    }
    if (nextCellElement) nextCellElement.focus();
  }
  getRowSelected(row) {
    return this.getRowSelectedIdx(row, this.selected) > -1;
  }
  getRowSelectedIdx(row, selected) {
    if (!selected || !selected.length) return -1;
    const rowId = this.rowIdentity(row);
    return selected.findIndex(r => {
      const id = this.rowIdentity(r);
      return id === rowId;
    });
  }
}
DataTableSelectionComponent.ɵfac = function DataTableSelectionComponent_Factory(t) {
  return new (t || DataTableSelectionComponent)();
};
DataTableSelectionComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: DataTableSelectionComponent,
  selectors: [["datatable-selection"]],
  inputs: {
    rows: "rows",
    selected: "selected",
    selectEnabled: "selectEnabled",
    selectionType: "selectionType",
    rowIdentity: "rowIdentity",
    selectCheck: "selectCheck"
  },
  outputs: {
    activate: "activate",
    select: "select"
  },
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function DataTableSelectionComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataTableSelectionComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'datatable-selection',
      template: ` <ng-content></ng-content> `,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush
    }]
  }], null, {
    rows: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    selected: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    selectEnabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    selectionType: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    rowIdentity: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    selectCheck: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    activate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    select: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }]
  });
})();
var SortDirection;
(function (SortDirection) {
  SortDirection["asc"] = "asc";
  SortDirection["desc"] = "desc";
})(SortDirection || (SortDirection = {}));
class DataTableBodyCellComponent {
  constructor(element, cd) {
    this.cd = cd;
    this.activate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.treeAction = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.isFocused = false;
    this.onCheckboxChangeFn = this.onCheckboxChange.bind(this);
    this.activateFn = this.activate.emit.bind(this.activate);
    this.cellContext = {
      onCheckboxChangeFn: this.onCheckboxChangeFn,
      activateFn: this.activateFn,
      row: this.row,
      group: this.group,
      value: this.value,
      column: this.column,
      rowHeight: this.rowHeight,
      isSelected: this.isSelected,
      rowIndex: this.rowIndex,
      treeStatus: this.treeStatus,
      onTreeAction: this.onTreeAction.bind(this)
    };
    this._element = element.nativeElement;
  }
  set group(group) {
    this._group = group;
    this.cellContext.group = group;
    this.checkValueUpdates();
    this.cd.markForCheck();
  }
  get group() {
    return this._group;
  }
  set rowHeight(val) {
    this._rowHeight = val;
    this.cellContext.rowHeight = val;
    this.checkValueUpdates();
    this.cd.markForCheck();
  }
  get rowHeight() {
    return this._rowHeight;
  }
  set isSelected(val) {
    this._isSelected = val;
    this.cellContext.isSelected = val;
    this.cd.markForCheck();
  }
  get isSelected() {
    return this._isSelected;
  }
  set expanded(val) {
    this._expanded = val;
    this.cellContext.expanded = val;
    this.cd.markForCheck();
  }
  get expanded() {
    return this._expanded;
  }
  set rowIndex(val) {
    this._rowIndex = val;
    this.cellContext.rowIndex = val;
    this.checkValueUpdates();
    this.cd.markForCheck();
  }
  get rowIndex() {
    return this._rowIndex;
  }
  set column(column) {
    this._column = column;
    this.cellContext.column = column;
    this.checkValueUpdates();
    this.cd.markForCheck();
  }
  get column() {
    return this._column;
  }
  set row(row) {
    this._row = row;
    this.cellContext.row = row;
    this.checkValueUpdates();
    this.cd.markForCheck();
  }
  get row() {
    return this._row;
  }
  set sorts(val) {
    this._sorts = val;
    this.calcSortDir = this.calcSortDir(val);
  }
  get sorts() {
    return this._sorts;
  }
  set treeStatus(status) {
    if (status !== 'collapsed' && status !== 'expanded' && status !== 'loading' && status !== 'disabled') {
      this._treeStatus = 'collapsed';
    } else {
      this._treeStatus = status;
    }
    this.cellContext.treeStatus = this._treeStatus;
    this.checkValueUpdates();
    this.cd.markForCheck();
  }
  get treeStatus() {
    return this._treeStatus;
  }
  get columnCssClasses() {
    let cls = 'datatable-body-cell';
    if (this.column.cellClass) {
      if (typeof this.column.cellClass === 'string') {
        cls += ' ' + this.column.cellClass;
      } else if (typeof this.column.cellClass === 'function') {
        const res = this.column.cellClass({
          row: this.row,
          group: this.group,
          column: this.column,
          value: this.value,
          rowHeight: this.rowHeight
        });
        if (typeof res === 'string') {
          cls += ' ' + res;
        } else if (typeof res === 'object') {
          const keys = Object.keys(res);
          for (const k of keys) {
            if (res[k] === true) {
              cls += ` ${k}`;
            }
          }
        }
      }
    }
    if (!this.sortDir) {
      cls += ' sort-active';
    }
    if (this.isFocused) {
      cls += ' active';
    }
    if (this.sortDir === SortDirection.asc) {
      cls += ' sort-asc';
    }
    if (this.sortDir === SortDirection.desc) {
      cls += ' sort-desc';
    }
    return cls;
  }
  get width() {
    return this.column.width;
  }
  get minWidth() {
    return this.column.minWidth;
  }
  get maxWidth() {
    return this.column.maxWidth;
  }
  get height() {
    const height = this.rowHeight;
    if (isNaN(height)) {
      return height;
    }
    return height + 'px';
  }
  ngDoCheck() {
    this.checkValueUpdates();
  }
  ngOnDestroy() {
    if (this.cellTemplate) {
      this.cellTemplate.clear();
    }
  }
  checkValueUpdates() {
    let value = '';
    if (!this.row || !this.column) {
      value = '';
    } else {
      const val = this.column.$$valueGetter(this.row, this.column.prop);
      const userPipe = this.column.pipe;
      if (userPipe) {
        value = userPipe.transform(val);
      } else if (value !== undefined) {
        value = val;
      }
    }
    if (this.value !== value) {
      this.value = value;
      this.cellContext.value = value;
      this.sanitizedValue = value !== null && value !== undefined ? this.stripHtml(value) : value;
      this.cd.markForCheck();
    }
  }
  onFocus() {
    this.isFocused = true;
  }
  onBlur() {
    this.isFocused = false;
  }
  onClick(event) {
    this.activate.emit({
      type: 'click',
      event,
      row: this.row,
      group: this.group,
      rowHeight: this.rowHeight,
      column: this.column,
      value: this.value,
      cellElement: this._element
    });
  }
  onDblClick(event) {
    this.activate.emit({
      type: 'dblclick',
      event,
      row: this.row,
      group: this.group,
      rowHeight: this.rowHeight,
      column: this.column,
      value: this.value,
      cellElement: this._element
    });
  }
  onKeyDown(event) {
    const keyCode = event.keyCode;
    const isTargetCell = event.target === this._element;
    const isAction = keyCode === Keys.return || keyCode === Keys.down || keyCode === Keys.up || keyCode === Keys.left || keyCode === Keys.right;
    if (isAction && isTargetCell) {
      event.preventDefault();
      event.stopPropagation();
      this.activate.emit({
        type: 'keydown',
        event,
        row: this.row,
        group: this.group,
        rowHeight: this.rowHeight,
        column: this.column,
        value: this.value,
        cellElement: this._element
      });
    }
  }
  onCheckboxChange(event) {
    this.activate.emit({
      type: 'checkbox',
      event,
      row: this.row,
      group: this.group,
      rowHeight: this.rowHeight,
      column: this.column,
      value: this.value,
      cellElement: this._element,
      treeStatus: 'collapsed'
    });
  }
  calcSortDir(sorts) {
    if (!sorts) {
      return;
    }
    const sort = sorts.find(s => {
      return s.prop === this.column.prop;
    });
    if (sort) {
      return sort.dir;
    }
  }
  stripHtml(html) {
    if (!html.replace) {
      return html;
    }
    return html.replace(/<\/?[^>]+(>|$)/g, '');
  }
  onTreeAction() {
    this.treeAction.emit(this.row);
  }
  calcLeftMargin(column, row) {
    const levelIndent = column.treeLevelIndent != null ? column.treeLevelIndent : 50;
    return column.isTreeColumn ? row.level * levelIndent : 0;
  }
}
DataTableBodyCellComponent.ɵfac = function DataTableBodyCellComponent_Factory(t) {
  return new (t || DataTableBodyCellComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef));
};
DataTableBodyCellComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: DataTableBodyCellComponent,
  selectors: [["datatable-body-cell"]],
  viewQuery: function DataTableBodyCellComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.cellTemplate = _t.first);
    }
  },
  hostVars: 10,
  hostBindings: function DataTableBodyCellComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function DataTableBodyCellComponent_focus_HostBindingHandler() {
        return ctx.onFocus();
      })("blur", function DataTableBodyCellComponent_blur_HostBindingHandler() {
        return ctx.onBlur();
      })("click", function DataTableBodyCellComponent_click_HostBindingHandler($event) {
        return ctx.onClick($event);
      })("dblclick", function DataTableBodyCellComponent_dblclick_HostBindingHandler($event) {
        return ctx.onDblClick($event);
      })("keydown", function DataTableBodyCellComponent_keydown_HostBindingHandler($event) {
        return ctx.onKeyDown($event);
      });
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.columnCssClasses);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.width, "px")("min-width", ctx.minWidth, "px")("max-width", ctx.maxWidth, "px")("height", ctx.height);
    }
  },
  inputs: {
    displayCheck: "displayCheck",
    group: "group",
    rowHeight: "rowHeight",
    isSelected: "isSelected",
    expanded: "expanded",
    rowIndex: "rowIndex",
    column: "column",
    row: "row",
    sorts: "sorts",
    treeStatus: "treeStatus"
  },
  outputs: {
    activate: "activate",
    treeAction: "treeAction"
  },
  decls: 5,
  vars: 6,
  consts: [[1, "datatable-body-cell-label"], ["class", "datatable-checkbox", 4, "ngIf"], [4, "ngIf"], [3, "title", "innerHTML", 4, "ngIf"], [1, "datatable-checkbox"], ["type", "checkbox", 3, "checked", "click"], ["class", "datatable-tree-button", 3, "disabled", "click", 4, "ngIf"], [1, "datatable-tree-button", 3, "disabled", "click"], ["class", "icon datatable-icon-collapse", 4, "ngIf"], ["class", "icon datatable-icon-up", 4, "ngIf"], ["class", "icon datatable-icon-down", 4, "ngIf"], [1, "icon", "datatable-icon-collapse"], [1, "icon", "datatable-icon-up"], [1, "icon", "datatable-icon-down"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "title", "innerHTML"], ["cellTemplate", ""]],
  template: function DataTableBodyCellComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DataTableBodyCellComponent_label_1_Template, 2, 1, "label", 1)(2, DataTableBodyCellComponent_ng_container_2_Template, 3, 2, "ng-container", 2)(3, DataTableBodyCellComponent_span_3_Template, 1, 2, "span", 3)(4, DataTableBodyCellComponent_4_Template, 2, 2, null, 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("margin-left", ctx.calcLeftMargin(ctx.column, ctx.row), "px");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.column.checkboxable && (!ctx.displayCheck || ctx.displayCheck(ctx.row, ctx.column, ctx.value)));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.column.isTreeColumn);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.column.cellTemplate);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.column.cellTemplate);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgTemplateOutlet],
  encapsulation: 2,
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataTableBodyCellComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'datatable-body-cell',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      template: `
    <div class="datatable-body-cell-label" [style.margin-left.px]="calcLeftMargin(column, row)">
      <label
        *ngIf="column.checkboxable && (!displayCheck || displayCheck(row, column, value))"
        class="datatable-checkbox"
      >
        <input type="checkbox" [checked]="isSelected" (click)="onCheckboxChange($event)" />
      </label>
      <ng-container *ngIf="column.isTreeColumn">
        <button
          *ngIf="!column.treeToggleTemplate"
          class="datatable-tree-button"
          [disabled]="treeStatus === 'disabled'"
          (click)="onTreeAction()"
        >
          <span>
            <i *ngIf="treeStatus === 'loading'" class="icon datatable-icon-collapse"></i>
            <i *ngIf="treeStatus === 'collapsed'" class="icon datatable-icon-up"></i>
            <i *ngIf="treeStatus === 'expanded' || treeStatus === 'disabled'" class="icon datatable-icon-down"></i>
          </span>
        </button>
        <ng-template
          *ngIf="column.treeToggleTemplate"
          [ngTemplateOutlet]="column.treeToggleTemplate"
          [ngTemplateOutletContext]="{ cellContext: cellContext }"
        >
        </ng-template>
      </ng-container>

      <span *ngIf="!column.cellTemplate" [title]="sanitizedValue" [innerHTML]="value"> </span>
      <ng-template
        #cellTemplate
        *ngIf="column.cellTemplate"
        [ngTemplateOutlet]="column.cellTemplate"
        [ngTemplateOutletContext]="cellContext"
      >
      </ng-template>
    </div>
  `
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }];
  }, {
    displayCheck: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    group: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    rowHeight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    isSelected: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    expanded: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    rowIndex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    column: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    row: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    sorts: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    treeStatus: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    activate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    treeAction: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    cellTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['cellTemplate', {
        read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef,
        static: true
      }]
    }],
    columnCssClasses: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['class']
    }],
    width: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['style.width.px']
    }],
    minWidth: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['style.minWidth.px']
    }],
    maxWidth: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['style.maxWidth.px']
    }],
    height: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['style.height']
    }],
    onFocus: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['focus']
    }],
    onBlur: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['blur']
    }],
    onClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['click', ['$event']]
    }],
    onDblClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['dblclick', ['$event']]
    }],
    onKeyDown: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['keydown', ['$event']]
    }]
  });
})();
class DataTableBodyRowComponent {
  constructor(differs, scrollbarHelper, cd, element) {
    this.differs = differs;
    this.scrollbarHelper = scrollbarHelper;
    this.cd = cd;
    this.treeStatus = 'collapsed';
    this.activate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.treeAction = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this._groupStyles = {
      left: {},
      center: {},
      right: {}
    };
    this._element = element.nativeElement;
    this._rowDiffer = differs.find({}).create();
  }
  set columns(val) {
    this._columns = val;
    this.recalculateColumns(val);
    this.buildStylesByGroup();
  }
  get columns() {
    return this._columns;
  }
  set innerWidth(val) {
    if (this._columns) {
      const colByPin = columnsByPin(this._columns);
      this._columnGroupWidths = columnGroupWidths(colByPin, this._columns);
    }
    this._innerWidth = val;
    this.recalculateColumns();
    this.buildStylesByGroup();
  }
  get innerWidth() {
    return this._innerWidth;
  }
  set offsetX(val) {
    this._offsetX = val;
    this.buildStylesByGroup();
  }
  get offsetX() {
    return this._offsetX;
  }
  get cssClass() {
    let cls = 'datatable-body-row';
    if (this.isSelected) {
      cls += ' active';
    }
    if (this.rowIndex % 2 !== 0) {
      cls += ' datatable-row-odd';
    }
    if (this.rowIndex % 2 === 0) {
      cls += ' datatable-row-even';
    }
    if (this.rowClass) {
      const res = this.rowClass(this.row);
      if (typeof res === 'string') {
        cls += ` ${res}`;
      } else if (typeof res === 'object') {
        const keys = Object.keys(res);
        for (const k of keys) {
          if (res[k] === true) {
            cls += ` ${k}`;
          }
        }
      }
    }
    return cls;
  }
  get columnsTotalWidths() {
    return this._columnGroupWidths.total;
  }
  ngDoCheck() {
    if (this._rowDiffer.diff(this.row)) {
      this.cd.markForCheck();
    }
  }
  trackByGroups(index, colGroup) {
    return colGroup.type;
  }
  columnTrackingFn(index, column) {
    return column.$$id;
  }
  buildStylesByGroup() {
    this._groupStyles.left = this.calcStylesByGroup('left');
    this._groupStyles.center = this.calcStylesByGroup('center');
    this._groupStyles.right = this.calcStylesByGroup('right');
    this.cd.markForCheck();
  }
  calcStylesByGroup(group) {
    const widths = this._columnGroupWidths;
    const offsetX = this.offsetX;
    const styles = {
      width: `${widths[group]}px`
    };
    if (group === 'left') {
      translateXY(styles, offsetX, 0);
    } else if (group === 'right') {
      const bodyWidth = parseInt(this.innerWidth + '', 0);
      const totalDiff = widths.total - bodyWidth;
      const offsetDiff = totalDiff - offsetX;
      const offset = (offsetDiff + this.scrollbarHelper.width) * -1;
      translateXY(styles, offset, 0);
    }
    return styles;
  }
  onActivate(event, index) {
    event.cellIndex = index;
    event.rowElement = this._element;
    this.activate.emit(event);
  }
  onKeyDown(event) {
    const keyCode = event.keyCode;
    const isTargetRow = event.target === this._element;
    const isAction = keyCode === Keys.return || keyCode === Keys.down || keyCode === Keys.up || keyCode === Keys.left || keyCode === Keys.right;
    if (isAction && isTargetRow) {
      event.preventDefault();
      event.stopPropagation();
      this.activate.emit({
        type: 'keydown',
        event,
        row: this.row,
        rowElement: this._element
      });
    }
  }
  onMouseenter(event) {
    this.activate.emit({
      type: 'mouseenter',
      event,
      row: this.row,
      rowElement: this._element
    });
  }
  recalculateColumns(val = this.columns) {
    this._columns = val;
    const colsByPin = columnsByPin(this._columns);
    this._columnsByPin = columnsByPinArr(this._columns);
    this._columnGroupWidths = columnGroupWidths(colsByPin, this._columns);
  }
  onTreeAction() {
    this.treeAction.emit();
  }
}
DataTableBodyRowComponent.ɵfac = function DataTableBodyRowComponent_Factory(t) {
  return new (t || DataTableBodyRowComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.KeyValueDiffers), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ScrollbarHelper, 4), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
};
DataTableBodyRowComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: DataTableBodyRowComponent,
  selectors: [["datatable-body-row"]],
  hostVars: 6,
  hostBindings: function DataTableBodyRowComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function DataTableBodyRowComponent_keydown_HostBindingHandler($event) {
        return ctx.onKeyDown($event);
      })("mouseenter", function DataTableBodyRowComponent_mouseenter_HostBindingHandler($event) {
        return ctx.onMouseenter($event);
      });
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.cssClass);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", ctx.rowHeight, "px")("width", ctx.columnsTotalWidths, "px");
    }
  },
  inputs: {
    columns: "columns",
    innerWidth: "innerWidth",
    expanded: "expanded",
    rowClass: "rowClass",
    row: "row",
    group: "group",
    isSelected: "isSelected",
    rowIndex: "rowIndex",
    displayCheck: "displayCheck",
    treeStatus: "treeStatus",
    offsetX: "offsetX",
    rowHeight: "rowHeight"
  },
  outputs: {
    activate: "activate",
    treeAction: "treeAction"
  },
  decls: 1,
  vars: 2,
  consts: [[3, "class", "ngStyle", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "ngStyle"], ["role", "cell", "tabindex", "-1", 3, "row", "group", "expanded", "isSelected", "rowIndex", "column", "rowHeight", "displayCheck", "treeStatus", "activate", "treeAction", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["role", "cell", "tabindex", "-1", 3, "row", "group", "expanded", "isSelected", "rowIndex", "column", "rowHeight", "displayCheck", "treeStatus", "activate", "treeAction"]],
  template: function DataTableBodyRowComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DataTableBodyRowComponent_div_0_Template, 2, 6, "div", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx._columnsByPin)("ngForTrackBy", ctx.trackByGroups);
    }
  },
  dependencies: [DataTableBodyCellComponent, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgStyle],
  encapsulation: 2,
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataTableBodyRowComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'datatable-body-row',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      template: `
    <div
      *ngFor="let colGroup of _columnsByPin; let i = index; trackBy: trackByGroups"
      class="datatable-row-{{ colGroup.type }} datatable-row-group"
      [ngStyle]="_groupStyles[colGroup.type]"
    >
      <datatable-body-cell
        role="cell"
        *ngFor="let column of colGroup.columns; let ii = index; trackBy: columnTrackingFn"
        tabindex="-1"
        [row]="row"
        [group]="group"
        [expanded]="expanded"
        [isSelected]="isSelected"
        [rowIndex]="rowIndex"
        [column]="column"
        [rowHeight]="rowHeight"
        [displayCheck]="displayCheck"
        [treeStatus]="treeStatus"
        (activate)="onActivate($event, ii)"
        (treeAction)="onTreeAction()"
      >
      </datatable-body-cell>
    </div>
  `
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.KeyValueDiffers
    }, {
      type: ScrollbarHelper,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.SkipSelf
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }];
  }, {
    columns: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    innerWidth: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    expanded: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    rowClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    row: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    group: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    isSelected: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    rowIndex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    displayCheck: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    treeStatus: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    offsetX: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    cssClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['class']
    }],
    rowHeight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['style.height.px']
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    columnsTotalWidths: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['style.width.px']
    }],
    activate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    treeAction: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onKeyDown: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['keydown', ['$event']]
    }],
    onMouseenter: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['mouseenter', ['$event']]
    }]
  });
})();
function defaultSumFunc(cells) {
  const cellsWithValues = cells.filter(cell => !!cell);
  if (!cellsWithValues.length) {
    return null;
  }
  if (cellsWithValues.some(cell => typeof cell !== 'number')) {
    return null;
  }
  return cellsWithValues.reduce((res, cell) => res + cell);
}
function noopSumFunc(cells) {
  return null;
}
class DataTableSummaryRowComponent {
  constructor() {
    this.summaryRow = {};
  }
  ngOnChanges() {
    if (!this.columns || !this.rows) {
      return;
    }
    this.updateInternalColumns();
    this.updateValues();
  }
  updateInternalColumns() {
    this._internalColumns = this.columns.map(col => ({
      ...col,
      cellTemplate: col.summaryTemplate
    }));
  }
  updateValues() {
    this.summaryRow = {};
    this.columns.filter(col => !col.summaryTemplate).forEach(col => {
      const cellsFromSingleColumn = this.rows.map(row => row[col.prop]);
      const sumFunc = this.getSummaryFunction(col);
      this.summaryRow[col.prop] = col.pipe ? col.pipe.transform(sumFunc(cellsFromSingleColumn)) : sumFunc(cellsFromSingleColumn);
    });
  }
  getSummaryFunction(column) {
    if (column.summaryFunc === undefined) {
      return defaultSumFunc;
    } else if (column.summaryFunc === null) {
      return noopSumFunc;
    } else {
      return column.summaryFunc;
    }
  }
}
DataTableSummaryRowComponent.ɵfac = function DataTableSummaryRowComponent_Factory(t) {
  return new (t || DataTableSummaryRowComponent)();
};
DataTableSummaryRowComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: DataTableSummaryRowComponent,
  selectors: [["datatable-summary-row"]],
  hostAttrs: [1, "datatable-summary-row"],
  inputs: {
    rows: "rows",
    columns: "columns",
    rowHeight: "rowHeight",
    offsetX: "offsetX",
    innerWidth: "innerWidth"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
  decls: 1,
  vars: 1,
  consts: [["tabindex", "-1", 3, "innerWidth", "offsetX", "columns", "rowHeight", "row", "rowIndex", 4, "ngIf"], ["tabindex", "-1", 3, "innerWidth", "offsetX", "columns", "rowHeight", "row", "rowIndex"]],
  template: function DataTableSummaryRowComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DataTableSummaryRowComponent_datatable_body_row_0_Template, 1, 6, "datatable-body-row", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.summaryRow && ctx._internalColumns);
    }
  },
  dependencies: [DataTableBodyRowComponent, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataTableSummaryRowComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'datatable-summary-row',
      template: `
    <datatable-body-row
      *ngIf="summaryRow && _internalColumns"
      tabindex="-1"
      [innerWidth]="innerWidth"
      [offsetX]="offsetX"
      [columns]="_internalColumns"
      [rowHeight]="rowHeight"
      [row]="summaryRow"
      [rowIndex]="-1"
    >
    </datatable-body-row>
  `,
      host: {
        class: 'datatable-summary-row'
      }
    }]
  }], null, {
    rows: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    columns: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    rowHeight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    offsetX: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    innerWidth: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
class DataTableRowWrapperComponent {
  constructor(cd, differs) {
    this.cd = cd;
    this.differs = differs;
    this.rowContextmenu = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(false);
    this._expanded = false;
    this.groupContext = {
      group: this.row,
      expanded: this.expanded,
      rowIndex: this.rowIndex
    };
    this.rowContext = {
      row: this.row,
      expanded: this.expanded,
      rowIndex: this.rowIndex
    };
    this.rowDiffer = differs.find({}).create();
  }
  set rowIndex(val) {
    this._rowIndex = val;
    this.rowContext.rowIndex = val;
    this.groupContext.rowIndex = val;
    this.cd.markForCheck();
  }
  get rowIndex() {
    return this._rowIndex;
  }
  set expanded(val) {
    this._expanded = val;
    this.groupContext.expanded = val;
    this.rowContext.expanded = val;
    this.cd.markForCheck();
  }
  get expanded() {
    return this._expanded;
  }
  ngDoCheck() {
    if (this.rowDiffer.diff(this.row)) {
      this.rowContext.row = this.row;
      this.groupContext.group = this.row;
      this.cd.markForCheck();
    }
  }
  onContextmenu($event) {
    this.rowContextmenu.emit({
      event: $event,
      row: this.row
    });
  }
  getGroupHeaderStyle() {
    const styles = {};
    styles['transform'] = 'translate3d(' + this.offsetX + 'px, 0px, 0px)';
    styles['backface-visibility'] = 'hidden';
    styles['width'] = this.innerWidth;
    return styles;
  }
}
DataTableRowWrapperComponent.ɵfac = function DataTableRowWrapperComponent_Factory(t) {
  return new (t || DataTableRowWrapperComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.KeyValueDiffers));
};
DataTableRowWrapperComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: DataTableRowWrapperComponent,
  selectors: [["datatable-row-wrapper"]],
  hostAttrs: [1, "datatable-row-wrapper"],
  hostBindings: function DataTableRowWrapperComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("contextmenu", function DataTableRowWrapperComponent_contextmenu_HostBindingHandler($event) {
        return ctx.onContextmenu($event);
      });
    }
  },
  inputs: {
    innerWidth: "innerWidth",
    rowDetail: "rowDetail",
    groupHeader: "groupHeader",
    offsetX: "offsetX",
    detailRowHeight: "detailRowHeight",
    row: "row",
    groupedRows: "groupedRows",
    rowIndex: "rowIndex",
    expanded: "expanded"
  },
  outputs: {
    rowContextmenu: "rowContextmenu"
  },
  ngContentSelectors: _c0,
  decls: 3,
  vars: 3,
  consts: [["class", "datatable-group-header", 3, "ngStyle", 4, "ngIf"], [4, "ngIf"], ["class", "datatable-row-detail", 3, "height", 4, "ngIf"], [1, "datatable-group-header", 3, "ngStyle"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "datatable-row-detail"]],
  template: function DataTableRowWrapperComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DataTableRowWrapperComponent_div_0_Template, 2, 2, "div", 0)(1, DataTableRowWrapperComponent_ng_content_1_Template, 1, 0, "ng-content", 1)(2, DataTableRowWrapperComponent_div_2_Template, 2, 3, "div", 2);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.groupHeader && ctx.groupHeader.template);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.groupHeader && ctx.groupHeader.template && ctx.expanded || !ctx.groupHeader || !ctx.groupHeader.template);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.rowDetail && ctx.rowDetail.template && ctx.expanded);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgStyle, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgTemplateOutlet],
  encapsulation: 2,
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataTableRowWrapperComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'datatable-row-wrapper',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      template: `
    <div *ngIf="groupHeader && groupHeader.template" class="datatable-group-header" [ngStyle]="getGroupHeaderStyle()">
      <ng-template
        *ngIf="groupHeader && groupHeader.template"
        [ngTemplateOutlet]="groupHeader.template"
        [ngTemplateOutletContext]="groupContext"
      >
      </ng-template>
    </div>
    <ng-content *ngIf="(groupHeader && groupHeader.template && expanded) || !groupHeader || !groupHeader.template">
    </ng-content>
    <div
      *ngIf="rowDetail && rowDetail.template && expanded"
      [style.height.px]="detailRowHeight"
      class="datatable-row-detail"
    >
      <ng-template
        *ngIf="rowDetail && rowDetail.template"
        [ngTemplateOutlet]="rowDetail.template"
        [ngTemplateOutletContext]="rowContext"
      >
      </ng-template>
    </div>
  `,
      host: {
        class: 'datatable-row-wrapper'
      }
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.KeyValueDiffers
    }];
  }, {
    innerWidth: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    rowDetail: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    groupHeader: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    offsetX: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    detailRowHeight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    row: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    groupedRows: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    rowContextmenu: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    rowIndex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    expanded: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    onContextmenu: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['contextmenu', ['$event']]
    }]
  });
})();
class DataTableBodyComponent {
  /**
   * Creates an instance of DataTableBodyComponent.
   */
  constructor(cd) {
    this.cd = cd;
    this.selected = [];
    this.scroll = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.page = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.activate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.select = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.detailToggle = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.rowContextmenu = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(false);
    this.treeAction = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.rowHeightsCache = new RowHeightCache();
    this.temp = [];
    this.offsetY = 0;
    this.indexes = {};
    this.rowIndexes = new WeakMap();
    this.rowExpansions = [];
    /**
     * Get the height of the detail row.
     */
    this.getDetailRowHeight = (row, index) => {
      if (!this.rowDetail) {
        return 0;
      }
      const rowHeight = this.rowDetail.rowHeight;
      return typeof rowHeight === 'function' ? rowHeight(row, index) : rowHeight;
    };
    // declare fn here so we can get access to the `this` property
    this.rowTrackingFn = (index, row) => {
      const idx = this.getRowIndex(row);
      if (this.trackByProp) {
        return row[this.trackByProp];
      } else {
        return idx;
      }
    };
  }
  set pageSize(val) {
    this._pageSize = val;
    this.recalcLayout();
  }
  get pageSize() {
    return this._pageSize;
  }
  set rows(val) {
    this._rows = val;
    this.recalcLayout();
  }
  get rows() {
    return this._rows;
  }
  set columns(val) {
    this._columns = val;
    const colsByPin = columnsByPin(val);
    this.columnGroupWidths = columnGroupWidths(colsByPin, val);
  }
  get columns() {
    return this._columns;
  }
  set offset(val) {
    this._offset = val;
    if (!this.scrollbarV || this.scrollbarV && !this.virtualization) this.recalcLayout();
  }
  get offset() {
    return this._offset;
  }
  set rowCount(val) {
    this._rowCount = val;
    this.recalcLayout();
  }
  get rowCount() {
    return this._rowCount;
  }
  get bodyWidth() {
    if (this.scrollbarH) {
      return this.innerWidth + 'px';
    } else {
      return '100%';
    }
  }
  set bodyHeight(val) {
    if (this.scrollbarV) {
      this._bodyHeight = val + 'px';
    } else {
      this._bodyHeight = 'auto';
    }
    this.recalcLayout();
  }
  get bodyHeight() {
    return this._bodyHeight;
  }
  /**
   * Returns if selection is enabled.
   */
  get selectEnabled() {
    return !!this.selectionType;
  }
  /**
   * Property that would calculate the height of scroll bar
   * based on the row heights cache for virtual scroll and virtualization. Other scenarios
   * calculate scroll height automatically (as height will be undefined).
   */
  get scrollHeight() {
    if (this.scrollbarV && this.virtualization && this.rowCount) {
      return this.rowHeightsCache.query(this.rowCount - 1);
    }
    // avoid TS7030: Not all code paths return a value.
    return undefined;
  }
  /**
   * Called after the constructor, initializing input properties
   */
  ngOnInit() {
    if (this.rowDetail) {
      this.listener = this.rowDetail.toggle.subscribe(({
        type,
        value
      }) => {
        if (type === 'row') {
          this.toggleRowExpansion(value);
        }
        if (type === 'all') {
          this.toggleAllRows(value);
        }
        // Refresh rows after toggle
        // Fixes #883
        this.updateIndexes();
        this.updateRows();
        this.cd.markForCheck();
      });
    }
    if (this.groupHeader) {
      this.listener = this.groupHeader.toggle.subscribe(({
        type,
        value
      }) => {
        if (type === 'group') {
          this.toggleRowExpansion(value);
        }
        if (type === 'all') {
          this.toggleAllRows(value);
        }
        // Refresh rows after toggle
        // Fixes #883
        this.updateIndexes();
        this.updateRows();
        this.cd.markForCheck();
      });
    }
  }
  /**
   * Called once, before the instance is destroyed.
   */
  ngOnDestroy() {
    if (this.rowDetail || this.groupHeader) {
      this.listener.unsubscribe();
    }
  }
  /**
   * Updates the Y offset given a new offset.
   */
  updateOffsetY(offset) {
    // scroller is missing on empty table
    if (!this.scroller) {
      return;
    }
    if (this.scrollbarV && this.virtualization && offset) {
      // First get the row Index that we need to move to.
      const rowIndex = this.pageSize * offset;
      offset = this.rowHeightsCache.query(rowIndex - 1);
    } else if (this.scrollbarV && !this.virtualization) {
      offset = 0;
    }
    this.scroller.setOffset(offset || 0);
  }
  /**
   * Body was scrolled, this is mainly useful for
   * when a user is server-side pagination via virtual scroll.
   */
  onBodyScroll(event) {
    const scrollYPos = event.scrollYPos;
    const scrollXPos = event.scrollXPos;
    // if scroll change, trigger update
    // this is mainly used for header cell positions
    if (this.offsetY !== scrollYPos || this.offsetX !== scrollXPos) {
      this.scroll.emit({
        offsetY: scrollYPos,
        offsetX: scrollXPos
      });
    }
    this.offsetY = scrollYPos;
    this.offsetX = scrollXPos;
    this.updateIndexes();
    this.updatePage(event.direction);
    this.updateRows();
  }
  /**
   * Updates the page given a direction.
   */
  updatePage(direction) {
    let offset = this.indexes.first / this.pageSize;
    if (direction === 'up') {
      offset = Math.ceil(offset);
    } else if (direction === 'down') {
      offset = Math.floor(offset);
    }
    if (direction !== undefined && !isNaN(offset)) {
      this.page.emit({
        offset
      });
    }
  }
  /**
   * Updates the rows in the view port
   */
  updateRows() {
    const {
      first,
      last
    } = this.indexes;
    let rowIndex = first;
    let idx = 0;
    const temp = [];
    // if grouprowsby has been specified treat row paging
    // parameters as group paging parameters ie if limit 10 has been
    // specified treat it as 10 groups rather than 10 rows
    if (this.groupedRows) {
      let maxRowsPerGroup = 3;
      // if there is only one group set the maximum number of
      // rows per group the same as the total number of rows
      if (this.groupedRows.length === 1) {
        maxRowsPerGroup = this.groupedRows[0].value.length;
      }
      while (rowIndex < last && rowIndex < this.groupedRows.length) {
        // Add the groups into this page
        const group = this.groupedRows[rowIndex];
        this.rowIndexes.set(group, rowIndex);
        if (group.value) {
          // add indexes for each group item
          group.value.forEach((g, i) => {
            const _idx = `${rowIndex}-${i}`;
            this.rowIndexes.set(g, _idx);
          });
        }
        temp[idx] = group;
        idx++;
        // Group index in this context
        rowIndex++;
      }
    } else {
      while (rowIndex < last && rowIndex < this.rowCount) {
        const row = this.rows[rowIndex];
        if (row) {
          // add indexes for each row
          this.rowIndexes.set(row, rowIndex);
          temp[idx] = row;
        }
        idx++;
        rowIndex++;
      }
    }
    this.temp = temp;
  }
  /**
   * Get the row height
   */
  getRowHeight(row) {
    // if its a function return it
    if (typeof this.rowHeight === 'function') {
      return this.rowHeight(row);
    }
    return this.rowHeight;
  }
  /**
   * @param group the group with all rows
   */
  getGroupHeight(group) {
    let rowHeight = 0;
    if (group.value) {
      for (let index = 0; index < group.value.length; index++) {
        rowHeight += this.getRowAndDetailHeight(group.value[index]);
      }
    }
    return rowHeight;
  }
  /**
   * Calculate row height based on the expanded state of the row.
   */
  getRowAndDetailHeight(row) {
    let rowHeight = this.getRowHeight(row);
    const expanded = this.getRowExpanded(row);
    // Adding detail row height if its expanded.
    if (expanded) {
      rowHeight += this.getDetailRowHeight(row);
    }
    return rowHeight;
  }
  /**
   * Calculates the styles for the row so that the rows can be moved in 2D space
   * during virtual scroll inside the DOM.   In the below case the Y position is
   * manipulated.   As an example, if the height of row 0 is 30 px and row 1 is
   * 100 px then following styles are generated:
   *
   * transform: translate3d(0px, 0px, 0px);    ->  row0
   * transform: translate3d(0px, 30px, 0px);   ->  row1
   * transform: translate3d(0px, 130px, 0px);  ->  row2
   *
   * Row heights have to be calculated based on the row heights cache as we wont
   * be able to determine which row is of what height before hand.  In the above
   * case the positionY of the translate3d for row2 would be the sum of all the
   * heights of the rows before it (i.e. row0 and row1).
   *
   * @param rows the row that needs to be placed in the 2D space.
   * @returns the CSS3 style to be applied
   *
   * @memberOf DataTableBodyComponent
   */
  getRowsStyles(rows) {
    const styles = {};
    // only add styles for the group if there is a group
    if (this.groupedRows) {
      styles.width = this.columnGroupWidths.total;
    }
    if (this.scrollbarV && this.virtualization) {
      let idx = 0;
      if (this.groupedRows) {
        // Get the latest row rowindex in a group
        const row = rows[rows.length - 1];
        idx = row ? this.getRowIndex(row) : 0;
      } else {
        idx = this.getRowIndex(rows);
      }
      // const pos = idx * rowHeight;
      // The position of this row would be the sum of all row heights
      // until the previous row position.
      const pos = this.rowHeightsCache.query(idx - 1);
      translateXY(styles, 0, pos);
    }
    return styles;
  }
  /**
   * Calculate bottom summary row offset for scrollbar mode.
   * For more information about cache and offset calculation
   * see description for `getRowsStyles` method
   *
   * @returns the CSS3 style to be applied
   *
   * @memberOf DataTableBodyComponent
   */
  getBottomSummaryRowStyles() {
    if (!this.scrollbarV || !this.rows || !this.rows.length) {
      return null;
    }
    const styles = {
      position: 'absolute'
    };
    const pos = this.rowHeightsCache.query(this.rows.length - 1);
    translateXY(styles, 0, pos);
    return styles;
  }
  /**
   * Hides the loading indicator
   */
  hideIndicator() {
    setTimeout(() => this.loadingIndicator = false, 500);
  }
  /**
   * Updates the index of the rows in the viewport
   */
  updateIndexes() {
    let first = 0;
    let last = 0;
    if (this.scrollbarV) {
      if (this.virtualization) {
        // Calculation of the first and last indexes will be based on where the
        // scrollY position would be at.  The last index would be the one
        // that shows up inside the view port the last.
        const height = parseInt(this.bodyHeight, 0);
        first = this.rowHeightsCache.getRowIndex(this.offsetY);
        last = this.rowHeightsCache.getRowIndex(height + this.offsetY) + 1;
      } else {
        // If virtual rows are not needed
        // We render all in one go
        first = 0;
        last = this.rowCount;
      }
    } else {
      // The server is handling paging and will pass an array that begins with the
      // element at a specified offset.  first should always be 0 with external paging.
      if (!this.externalPaging) {
        first = Math.max(this.offset * this.pageSize, 0);
      }
      last = Math.min(first + this.pageSize, this.rowCount);
    }
    this.indexes = {
      first,
      last
    };
  }
  /**
   * Refreshes the full Row Height cache.  Should be used
   * when the entire row array state has changed.
   */
  refreshRowHeightCache() {
    if (!this.scrollbarV || this.scrollbarV && !this.virtualization) {
      return;
    }
    // clear the previous row height cache if already present.
    // this is useful during sorts, filters where the state of the
    // rows array is changed.
    this.rowHeightsCache.clearCache();
    // Initialize the tree only if there are rows inside the tree.
    if (this.rows && this.rows.length) {
      const rowExpansions = new Set();
      for (const row of this.rows) {
        if (this.getRowExpanded(row)) {
          rowExpansions.add(row);
        }
      }
      this.rowHeightsCache.initCache({
        rows: this.rows,
        rowHeight: this.rowHeight,
        detailRowHeight: this.getDetailRowHeight,
        externalVirtual: this.scrollbarV && this.externalPaging,
        rowCount: this.rowCount,
        rowIndexes: this.rowIndexes,
        rowExpansions
      });
    }
  }
  /**
   * Gets the index for the view port
   */
  getAdjustedViewPortIndex() {
    // Capture the row index of the first row that is visible on the viewport.
    // If the scroll bar is just below the row which is highlighted then make that as the
    // first index.
    const viewPortFirstRowIndex = this.indexes.first;
    if (this.scrollbarV && this.virtualization) {
      const offsetScroll = this.rowHeightsCache.query(viewPortFirstRowIndex - 1);
      return offsetScroll <= this.offsetY ? viewPortFirstRowIndex - 1 : viewPortFirstRowIndex;
    }
    return viewPortFirstRowIndex;
  }
  /**
   * Toggle the Expansion of the row i.e. if the row is expanded then it will
   * collapse and vice versa.   Note that the expanded status is stored as
   * a part of the row object itself as we have to preserve the expanded row
   * status in case of sorting and filtering of the row set.
   */
  toggleRowExpansion(row) {
    // Capture the row index of the first row that is visible on the viewport.
    const viewPortFirstRowIndex = this.getAdjustedViewPortIndex();
    const rowExpandedIdx = this.getRowExpandedIdx(row, this.rowExpansions);
    const expanded = rowExpandedIdx > -1;
    // If the detailRowHeight is auto --> only in case of non-virtualized scroll
    if (this.scrollbarV && this.virtualization) {
      const detailRowHeight = this.getDetailRowHeight(row) * (expanded ? -1 : 1);
      // const idx = this.rowIndexes.get(row) || 0;
      const idx = this.getRowIndex(row);
      this.rowHeightsCache.update(idx, detailRowHeight);
    }
    // Update the toggled row and update thive nevere heights in the cache.
    if (expanded) {
      this.rowExpansions.splice(rowExpandedIdx, 1);
    } else {
      this.rowExpansions.push(row);
    }
    this.detailToggle.emit({
      rows: [row],
      currentIndex: viewPortFirstRowIndex
    });
  }
  /**
   * Expand/Collapse all the rows no matter what their state is.
   */
  toggleAllRows(expanded) {
    // clear prev expansions
    this.rowExpansions = [];
    // Capture the row index of the first row that is visible on the viewport.
    const viewPortFirstRowIndex = this.getAdjustedViewPortIndex();
    if (expanded) {
      for (const row of this.rows) {
        this.rowExpansions.push(row);
      }
    }
    if (this.scrollbarV) {
      // Refresh the full row heights cache since every row was affected.
      this.recalcLayout();
    }
    // Emit all rows that have been expanded.
    this.detailToggle.emit({
      rows: this.rows,
      currentIndex: viewPortFirstRowIndex
    });
  }
  /**
   * Recalculates the table
   */
  recalcLayout() {
    this.refreshRowHeightCache();
    this.updateIndexes();
    this.updateRows();
  }
  /**
   * Tracks the column
   */
  columnTrackingFn(index, column) {
    return column.$$id;
  }
  /**
   * Gets the row pinning group styles
   */
  stylesByGroup(group) {
    const widths = this.columnGroupWidths;
    const offsetX = this.offsetX;
    const styles = {
      width: `${widths[group]}px`
    };
    if (group === 'left') {
      translateXY(styles, offsetX, 0);
    } else if (group === 'right') {
      const bodyWidth = parseInt(this.innerWidth + '', 0);
      const totalDiff = widths.total - bodyWidth;
      const offsetDiff = totalDiff - offsetX;
      const offset = offsetDiff * -1;
      translateXY(styles, offset, 0);
    }
    return styles;
  }
  /**
   * Returns if the row was expanded and set default row expansion when row expansion is empty
   */
  getRowExpanded(row) {
    if (this.rowExpansions.length === 0 && this.groupExpansionDefault) {
      for (const group of this.groupedRows) {
        this.rowExpansions.push(group);
      }
    }
    return this.getRowExpandedIdx(row, this.rowExpansions) > -1;
  }
  getRowExpandedIdx(row, expanded) {
    if (!expanded || !expanded.length) return -1;
    const rowId = this.rowIdentity(row);
    return expanded.findIndex(r => {
      const id = this.rowIdentity(r);
      return id === rowId;
    });
  }
  /**
   * Gets the row index given a row
   */
  getRowIndex(row) {
    return this.rowIndexes.get(row) || 0;
  }
  onTreeAction(row) {
    this.treeAction.emit({
      row
    });
  }
}
DataTableBodyComponent.ɵfac = function DataTableBodyComponent_Factory(t) {
  return new (t || DataTableBodyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef));
};
DataTableBodyComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: DataTableBodyComponent,
  selectors: [["datatable-body"]],
  viewQuery: function DataTableBodyComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](ScrollerComponent, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.scroller = _t.first);
    }
  },
  hostAttrs: [1, "datatable-body"],
  hostVars: 4,
  hostBindings: function DataTableBodyComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.bodyWidth)("height", ctx.bodyHeight);
    }
  },
  inputs: {
    scrollbarV: "scrollbarV",
    scrollbarH: "scrollbarH",
    loadingIndicator: "loadingIndicator",
    externalPaging: "externalPaging",
    rowHeight: "rowHeight",
    offsetX: "offsetX",
    emptyMessage: "emptyMessage",
    selectionType: "selectionType",
    selected: "selected",
    rowIdentity: "rowIdentity",
    rowDetail: "rowDetail",
    groupHeader: "groupHeader",
    selectCheck: "selectCheck",
    displayCheck: "displayCheck",
    trackByProp: "trackByProp",
    rowClass: "rowClass",
    groupedRows: "groupedRows",
    groupExpansionDefault: "groupExpansionDefault",
    innerWidth: "innerWidth",
    groupRowsBy: "groupRowsBy",
    virtualization: "virtualization",
    summaryRow: "summaryRow",
    summaryPosition: "summaryPosition",
    summaryHeight: "summaryHeight",
    pageSize: "pageSize",
    rows: "rows",
    columns: "columns",
    offset: "offset",
    rowCount: "rowCount",
    bodyHeight: "bodyHeight"
  },
  outputs: {
    scroll: "scroll",
    page: "page",
    activate: "activate",
    select: "select",
    detailToggle: "detailToggle",
    rowContextmenu: "rowContextmenu",
    treeAction: "treeAction"
  },
  decls: 5,
  vars: 9,
  consts: [[4, "ngIf"], [3, "selected", "rows", "selectCheck", "selectEnabled", "selectionType", "rowIdentity", "select", "activate"], ["selector", ""], [3, "scrollbarV", "scrollbarH", "scrollHeight", "scrollWidth", "scroll", 4, "ngIf"], ["class", "empty-row", 3, "innerHTML", 4, "ngIf"], [3, "scrollbarV", "scrollbarH", "scrollHeight", "scrollWidth", "scroll"], [3, "rowHeight", "offsetX", "innerWidth", "rows", "columns", 4, "ngIf"], [3, "groupedRows", "innerWidth", "ngStyle", "rowDetail", "groupHeader", "offsetX", "detailRowHeight", "row", "expanded", "rowIndex", "rowContextmenu", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["role", "row", 3, "ngStyle", "rowHeight", "offsetX", "innerWidth", "rows", "columns", 4, "ngIf"], [3, "rowHeight", "offsetX", "innerWidth", "rows", "columns"], [3, "groupedRows", "innerWidth", "ngStyle", "rowDetail", "groupHeader", "offsetX", "detailRowHeight", "row", "expanded", "rowIndex", "rowContextmenu"], ["role", "row", "tabindex", "-1", 3, "isSelected", "innerWidth", "offsetX", "columns", "rowHeight", "row", "rowIndex", "expanded", "rowClass", "displayCheck", "treeStatus", "treeAction", "activate", 4, "ngIf", "ngIfElse"], ["groupedRowsTemplate", ""], ["role", "row", "tabindex", "-1", 3, "isSelected", "innerWidth", "offsetX", "columns", "rowHeight", "row", "rowIndex", "expanded", "rowClass", "displayCheck", "treeStatus", "treeAction", "activate"], ["role", "row", "tabindex", "-1", 3, "isSelected", "innerWidth", "offsetX", "columns", "rowHeight", "row", "group", "rowIndex", "expanded", "rowClass", "activate", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["role", "row", "tabindex", "-1", 3, "isSelected", "innerWidth", "offsetX", "columns", "rowHeight", "row", "group", "rowIndex", "expanded", "rowClass", "activate"], ["role", "row", 3, "ngStyle", "rowHeight", "offsetX", "innerWidth", "rows", "columns"], [1, "empty-row", 3, "innerHTML"]],
  template: function DataTableBodyComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DataTableBodyComponent_datatable_progress_0_Template, 1, 0, "datatable-progress", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "datatable-selection", 1, 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("select", function DataTableBodyComponent_Template_datatable_selection_select_1_listener($event) {
        return ctx.select.emit($event);
      })("activate", function DataTableBodyComponent_Template_datatable_selection_activate_1_listener($event) {
        return ctx.activate.emit($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DataTableBodyComponent_datatable_scroller_3_Template, 4, 8, "datatable-scroller", 3)(4, DataTableBodyComponent_div_4_Template, 1, 1, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loadingIndicator);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selected", ctx.selected)("rows", ctx.rows)("selectCheck", ctx.selectCheck)("selectEnabled", ctx.selectEnabled)("selectionType", ctx.selectionType)("rowIdentity", ctx.rowIdentity);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.rows == null ? null : ctx.rows.length);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx.rows == null ? null : ctx.rows.length) && !ctx.loadingIndicator);
    }
  },
  dependencies: [ProgressBarComponent, DataTableSelectionComponent, ScrollerComponent, DataTableSummaryRowComponent, DataTableRowWrapperComponent, DataTableBodyRowComponent, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgStyle],
  encapsulation: 2,
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataTableBodyComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'datatable-body',
      template: `
    <datatable-progress *ngIf="loadingIndicator"> </datatable-progress>
    <datatable-selection
      #selector
      [selected]="selected"
      [rows]="rows"
      [selectCheck]="selectCheck"
      [selectEnabled]="selectEnabled"
      [selectionType]="selectionType"
      [rowIdentity]="rowIdentity"
      (select)="select.emit($event)"
      (activate)="activate.emit($event)"
    >
      <datatable-scroller
        *ngIf="rows?.length"
        [scrollbarV]="scrollbarV"
        [scrollbarH]="scrollbarH"
        [scrollHeight]="scrollHeight"
        [scrollWidth]="columnGroupWidths?.total"
        (scroll)="onBodyScroll($event)"
      >
        <datatable-summary-row
          *ngIf="summaryRow && summaryPosition === 'top'"
          [rowHeight]="summaryHeight"
          [offsetX]="offsetX"
          [innerWidth]="innerWidth"
          [rows]="rows"
          [columns]="columns"
        >
        </datatable-summary-row>
        <datatable-row-wrapper
          [groupedRows]="groupedRows"
          *ngFor="let group of temp; let i = index; trackBy: rowTrackingFn"
          [innerWidth]="innerWidth"
          [ngStyle]="getRowsStyles(group)"
          [rowDetail]="rowDetail"
          [groupHeader]="groupHeader"
          [offsetX]="offsetX"
          [detailRowHeight]="getDetailRowHeight(group && group[i], i)"
          [row]="group"
          [expanded]="getRowExpanded(group)"
          [rowIndex]="getRowIndex(group && group[i])"
          (rowContextmenu)="rowContextmenu.emit($event)"
        >
          <datatable-body-row
            role="row"
            *ngIf="!groupedRows; else groupedRowsTemplate"
            tabindex="-1"
            [isSelected]="selector.getRowSelected(group)"
            [innerWidth]="innerWidth"
            [offsetX]="offsetX"
            [columns]="columns"
            [rowHeight]="getRowHeight(group)"
            [row]="group"
            [rowIndex]="getRowIndex(group)"
            [expanded]="getRowExpanded(group)"
            [rowClass]="rowClass"
            [displayCheck]="displayCheck"
            [treeStatus]="group && group.treeStatus"
            (treeAction)="onTreeAction(group)"
            (activate)="selector.onActivate($event, indexes.first + i)"
          >
          </datatable-body-row>
          <ng-template #groupedRowsTemplate>
            <datatable-body-row
              role="row"
              *ngFor="let row of group.value; let i = index; trackBy: rowTrackingFn"
              tabindex="-1"
              [isSelected]="selector.getRowSelected(row)"
              [innerWidth]="innerWidth"
              [offsetX]="offsetX"
              [columns]="columns"
              [rowHeight]="getRowHeight(row)"
              [row]="row"
              [group]="group.value"
              [rowIndex]="getRowIndex(row)"
              [expanded]="getRowExpanded(row)"
              [rowClass]="rowClass"
              (activate)="selector.onActivate($event, i)"
            >
            </datatable-body-row>
          </ng-template>
        </datatable-row-wrapper>
        <datatable-summary-row
          role="row"
          *ngIf="summaryRow && summaryPosition === 'bottom'"
          [ngStyle]="getBottomSummaryRowStyles()"
          [rowHeight]="summaryHeight"
          [offsetX]="offsetX"
          [innerWidth]="innerWidth"
          [rows]="rows"
          [columns]="columns"
        >
        </datatable-summary-row>
      </datatable-scroller>
      <div class="empty-row" *ngIf="!rows?.length && !loadingIndicator" [innerHTML]="emptyMessage"></div>
    </datatable-selection>
  `,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      host: {
        class: 'datatable-body'
      }
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }];
  }, {
    scrollbarV: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    scrollbarH: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    loadingIndicator: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    externalPaging: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    rowHeight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    offsetX: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    emptyMessage: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    selectionType: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    selected: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    rowIdentity: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    rowDetail: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    groupHeader: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    selectCheck: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    displayCheck: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    trackByProp: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    rowClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    groupedRows: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    groupExpansionDefault: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    innerWidth: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    groupRowsBy: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    virtualization: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    summaryRow: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    summaryPosition: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    summaryHeight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    pageSize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    rows: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    columns: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    offset: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    rowCount: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    bodyWidth: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['style.width']
    }],
    bodyHeight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['style.height']
    }],
    scroll: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    page: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    activate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    select: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    detailToggle: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    rowContextmenu: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    treeAction: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    scroller: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: [ScrollerComponent]
    }]
  });
})();

/**
 * Gets the next sort direction
 */
function nextSortDir(sortType, current) {
  if (sortType === SortType.single) {
    if (current === SortDirection.asc) {
      return SortDirection.desc;
    } else {
      return SortDirection.asc;
    }
  } else {
    if (!current) {
      return SortDirection.asc;
    } else if (current === SortDirection.asc) {
      return SortDirection.desc;
    } else if (current === SortDirection.desc) {
      return undefined;
    }
    // avoid TS7030: Not all code paths return a value.
    return undefined;
  }
}
/**
 * Adapted from fueld-ui on 6/216
 * https://github.com/FuelInteractive/fuel-ui/tree/master/src/pipes/OrderBy
 */
function orderByComparator(a, b) {
  if (a === null || typeof a === 'undefined') a = 0;
  if (b === null || typeof b === 'undefined') b = 0;
  if (a instanceof Date && b instanceof Date) {
    if (a < b) return -1;
    if (a > b) return 1;
  } else if (isNaN(parseFloat(a)) || !isFinite(a) || isNaN(parseFloat(b)) || !isFinite(b)) {
    // Convert to string in case of a=0 or b=0
    a = String(a);
    b = String(b);
    // Isn't a number so lowercase the string to properly compare
    if (a.toLowerCase() < b.toLowerCase()) return -1;
    if (a.toLowerCase() > b.toLowerCase()) return 1;
  } else {
    // Parse strings as numbers to compare properly
    if (parseFloat(a) < parseFloat(b)) return -1;
    if (parseFloat(a) > parseFloat(b)) return 1;
  }
  // equal each other
  return 0;
}
/**
 * creates a shallow copy of the `rows` input and returns the sorted copy. this function
 * does not sort the `rows` argument in place
 */
function sortRows(rows, columns, dirs) {
  if (!rows) return [];
  if (!dirs || !dirs.length || !columns) return [...rows];
  /**
   * record the row ordering of results from prior sort operations (if applicable)
   * this is necessary to guarantee stable sorting behavior
   */
  const rowToIndexMap = new Map();
  rows.forEach((row, index) => rowToIndexMap.set(row, index));
  const temp = [...rows];
  const cols = columns.reduce((obj, col) => {
    if (col.comparator && typeof col.comparator === 'function') {
      obj[col.prop] = col.comparator;
    }
    return obj;
  }, {});
  // cache valueGetter and compareFn so that they
  // do not need to be looked-up in the sort function body
  const cachedDirs = dirs.map(dir => {
    const prop = dir.prop;
    return {
      prop,
      dir: dir.dir,
      valueGetter: getterForProp(prop),
      compareFn: cols[prop] || orderByComparator
    };
  });
  return temp.sort(function (rowA, rowB) {
    for (const cachedDir of cachedDirs) {
      // Get property and valuegetters for column to be sorted
      const {
        prop,
        valueGetter
      } = cachedDir;
      // Get A and B cell values from rows based on properties of the columns
      const propA = valueGetter(rowA, prop);
      const propB = valueGetter(rowB, prop);
      // Compare function gets five parameters:
      // Two cell values to be compared as propA and propB
      // Two rows corresponding to the cells as rowA and rowB
      // Direction of the sort for this column as SortDirection
      // Compare can be a standard JS comparison function (a,b) => -1|0|1
      // as additional parameters are silently ignored. The whole row and sort
      // direction enable more complex sort logic.
      const comparison = cachedDir.dir !== SortDirection.desc ? cachedDir.compareFn(propA, propB, rowA, rowB, cachedDir.dir) : -cachedDir.compareFn(propA, propB, rowA, rowB, cachedDir.dir);
      // Don't return 0 yet in case of needing to sort by next property
      if (comparison !== 0) return comparison;
    }
    if (!(rowToIndexMap.has(rowA) && rowToIndexMap.has(rowB))) return 0;
    /**
     * all else being equal, preserve original order of the rows (stable sort)
     */
    return rowToIndexMap.get(rowA) < rowToIndexMap.get(rowB) ? -1 : 1;
  });
}
class DataTableHeaderCellComponent {
  constructor(cd) {
    this.cd = cd;
    this.sort = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.select = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.columnContextmenu = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(false);
    this.sortFn = this.onSort.bind(this);
    this.selectFn = this.select.emit.bind(this.select);
    this.cellContext = {
      column: this.column,
      sortDir: this.sortDir,
      sortFn: this.sortFn,
      allRowsSelected: this.allRowsSelected,
      selectFn: this.selectFn
    };
  }
  set allRowsSelected(value) {
    this._allRowsSelected = value;
    this.cellContext.allRowsSelected = value;
  }
  get allRowsSelected() {
    return this._allRowsSelected;
  }
  set column(column) {
    this._column = column;
    this.cellContext.column = column;
    this.cd.markForCheck();
  }
  get column() {
    return this._column;
  }
  set sorts(val) {
    this._sorts = val;
    this.sortDir = this.calcSortDir(val);
    this.cellContext.sortDir = this.sortDir;
    this.sortClass = this.calcSortClass(this.sortDir);
    this.cd.markForCheck();
  }
  get sorts() {
    return this._sorts;
  }
  get columnCssClasses() {
    let cls = 'datatable-header-cell';
    if (this.column.sortable) cls += ' sortable';
    if (this.column.resizeable) cls += ' resizeable';
    if (this.column.headerClass) {
      if (typeof this.column.headerClass === 'string') {
        cls += ' ' + this.column.headerClass;
      } else if (typeof this.column.headerClass === 'function') {
        const res = this.column.headerClass({
          column: this.column
        });
        if (typeof res === 'string') {
          cls += res;
        } else if (typeof res === 'object') {
          const keys = Object.keys(res);
          for (const k of keys) {
            if (res[k] === true) cls += ` ${k}`;
          }
        }
      }
    }
    const sortDir = this.sortDir;
    if (sortDir) {
      cls += ` sort-active sort-${sortDir}`;
    }
    return cls;
  }
  get name() {
    // guaranteed to have a value by setColumnDefaults() in column-helper.ts
    return this.column.headerTemplate === undefined ? this.column.name : undefined;
  }
  get minWidth() {
    return this.column.minWidth;
  }
  get maxWidth() {
    return this.column.maxWidth;
  }
  get width() {
    return this.column.width;
  }
  get isCheckboxable() {
    return this.column.checkboxable && this.column.headerCheckboxable && this.selectionType === SelectionType.checkbox;
  }
  onContextmenu($event) {
    this.columnContextmenu.emit({
      event: $event,
      column: this.column
    });
  }
  ngOnInit() {
    this.sortClass = this.calcSortClass(this.sortDir);
  }
  calcSortDir(sorts) {
    if (sorts && this.column) {
      const sort = sorts.find(s => {
        return s.prop === this.column.prop;
      });
      if (sort) return sort.dir;
    }
  }
  onSort() {
    if (!this.column.sortable) return;
    const newValue = nextSortDir(this.sortType, this.sortDir);
    this.sort.emit({
      column: this.column,
      prevValue: this.sortDir,
      newValue
    });
  }
  calcSortClass(sortDir) {
    if (!this.cellContext.column.sortable) return;
    if (sortDir === SortDirection.asc) {
      return `sort-btn sort-asc ${this.sortAscendingIcon}`;
    } else if (sortDir === SortDirection.desc) {
      return `sort-btn sort-desc ${this.sortDescendingIcon}`;
    } else {
      return `sort-btn ${this.sortUnsetIcon}`;
    }
  }
}
DataTableHeaderCellComponent.ɵfac = function DataTableHeaderCellComponent_Factory(t) {
  return new (t || DataTableHeaderCellComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef));
};
DataTableHeaderCellComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: DataTableHeaderCellComponent,
  selectors: [["datatable-header-cell"]],
  hostAttrs: [1, "datatable-header-cell"],
  hostVars: 11,
  hostBindings: function DataTableHeaderCellComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("contextmenu", function DataTableHeaderCellComponent_contextmenu_HostBindingHandler($event) {
        return ctx.onContextmenu($event);
      });
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("title", ctx.name);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.columnCssClasses);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", ctx.headerHeight, "px")("min-width", ctx.minWidth, "px")("max-width", ctx.maxWidth, "px")("width", ctx.width, "px");
    }
  },
  inputs: {
    sortType: "sortType",
    sortAscendingIcon: "sortAscendingIcon",
    sortDescendingIcon: "sortDescendingIcon",
    sortUnsetIcon: "sortUnsetIcon",
    isTarget: "isTarget",
    targetMarkerTemplate: "targetMarkerTemplate",
    targetMarkerContext: "targetMarkerContext",
    allRowsSelected: "allRowsSelected",
    selectionType: "selectionType",
    column: "column",
    headerHeight: "headerHeight",
    sorts: "sorts"
  },
  outputs: {
    sort: "sort",
    select: "select",
    columnContextmenu: "columnContextmenu"
  },
  decls: 6,
  vars: 6,
  consts: [[1, "datatable-header-cell-template-wrap"], [4, "ngIf"], ["class", "datatable-checkbox", 4, "ngIf"], ["class", "datatable-header-cell-wrapper", 4, "ngIf"], [3, "click"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "datatable-checkbox"], ["type", "checkbox", 3, "checked", "change"], [1, "datatable-header-cell-wrapper"], [1, "datatable-header-cell-label", "draggable", 3, "innerHTML", "click"]],
  template: function DataTableHeaderCellComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DataTableHeaderCellComponent_1_Template, 1, 2, null, 1)(2, DataTableHeaderCellComponent_label_2_Template, 2, 1, "label", 2)(3, DataTableHeaderCellComponent_span_3_Template, 2, 1, "span", 3)(4, DataTableHeaderCellComponent_4_Template, 1, 2, null, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataTableHeaderCellComponent_Template_span_click_5_listener() {
        return ctx.onSort();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isTarget);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isCheckboxable);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.column.headerTemplate);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.column.headerTemplate);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.sortClass);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgTemplateOutlet],
  encapsulation: 2,
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataTableHeaderCellComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'datatable-header-cell',
      template: `
    <div class="datatable-header-cell-template-wrap">
      <ng-template
        *ngIf="isTarget"
        [ngTemplateOutlet]="targetMarkerTemplate"
        [ngTemplateOutletContext]="targetMarkerContext"
      >
      </ng-template>
      <label *ngIf="isCheckboxable" class="datatable-checkbox">
        <input type="checkbox" [checked]="allRowsSelected" (change)="select.emit(!allRowsSelected)" />
      </label>
      <span *ngIf="!column.headerTemplate" class="datatable-header-cell-wrapper">
        <span class="datatable-header-cell-label draggable" (click)="onSort()" [innerHTML]="name"> </span>
      </span>
      <ng-template
        *ngIf="column.headerTemplate"
        [ngTemplateOutlet]="column.headerTemplate"
        [ngTemplateOutletContext]="cellContext"
      >
      </ng-template>
      <span (click)="onSort()" [class]="sortClass"> </span>
    </div>
  `,
      host: {
        class: 'datatable-header-cell'
      },
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }];
  }, {
    sortType: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    sortAscendingIcon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    sortDescendingIcon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    sortUnsetIcon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    isTarget: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    targetMarkerTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    targetMarkerContext: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    allRowsSelected: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    selectionType: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    column: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    headerHeight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['style.height.px']
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    sorts: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    sort: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    select: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    columnContextmenu: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    columnCssClasses: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['class']
    }],
    name: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['attr.title']
    }],
    minWidth: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['style.minWidth.px']
    }],
    maxWidth: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['style.maxWidth.px']
    }],
    width: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['style.width.px']
    }],
    onContextmenu: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['contextmenu', ['$event']]
    }]
  });
})();
class DataTableHeaderComponent {
  constructor(cd) {
    this.cd = cd;
    this.sort = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.reorder = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.resize = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.select = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.columnContextmenu = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(false);
    this._columnGroupWidths = {
      total: 100
    };
    this._styleByGroup = {
      left: {},
      center: {},
      right: {}
    };
    this.destroyed = false;
  }
  set innerWidth(val) {
    this._innerWidth = val;
    setTimeout(() => {
      if (this._columns) {
        const colByPin = columnsByPin(this._columns);
        this._columnGroupWidths = columnGroupWidths(colByPin, this._columns);
        this.setStylesByGroup();
      }
    });
  }
  get innerWidth() {
    return this._innerWidth;
  }
  set headerHeight(val) {
    if (val !== 'auto') {
      this._headerHeight = `${val}px`;
    } else {
      this._headerHeight = val;
    }
  }
  get headerHeight() {
    return this._headerHeight;
  }
  set columns(val) {
    this._columns = val;
    const colsByPin = columnsByPin(val);
    this._columnsByPin = columnsByPinArr(val);
    setTimeout(() => {
      this._columnGroupWidths = columnGroupWidths(colsByPin, val);
      this.setStylesByGroup();
    });
  }
  get columns() {
    return this._columns;
  }
  set offsetX(val) {
    this._offsetX = val;
    this.setStylesByGroup();
  }
  get offsetX() {
    return this._offsetX;
  }
  ngOnDestroy() {
    this.destroyed = true;
  }
  onLongPressStart({
    event,
    model
  }) {
    model.dragging = true;
    this.dragEventTarget = event;
  }
  onLongPressEnd({
    event,
    model
  }) {
    this.dragEventTarget = event;
    // delay resetting so sort can be
    // prevented if we were dragging
    setTimeout(() => {
      // datatable component creates copies from columns on reorder
      // set dragging to false on new objects
      const column = this._columns.find(c => c.$$id === model.$$id);
      if (column) {
        column.dragging = false;
      }
    }, 5);
  }
  get headerWidth() {
    if (this.scrollbarH) {
      return this.innerWidth + 'px';
    }
    return '100%';
  }
  trackByGroups(index, colGroup) {
    return colGroup.type;
  }
  columnTrackingFn(index, column) {
    return column.$$id;
  }
  onColumnResized(width, column) {
    if (width <= column.minWidth) {
      width = column.minWidth;
    } else if (width >= column.maxWidth) {
      width = column.maxWidth;
    }
    this.resize.emit({
      column,
      prevValue: column.width,
      newValue: width
    });
  }
  onColumnReordered({
    prevIndex,
    newIndex,
    model
  }) {
    const column = this.getColumn(newIndex);
    column.isTarget = false;
    column.targetMarkerContext = undefined;
    this.reorder.emit({
      column: model,
      prevValue: prevIndex,
      newValue: newIndex
    });
  }
  onTargetChanged({
    prevIndex,
    newIndex,
    initialIndex
  }) {
    if (prevIndex || prevIndex === 0) {
      const oldColumn = this.getColumn(prevIndex);
      oldColumn.isTarget = false;
      oldColumn.targetMarkerContext = undefined;
    }
    if (newIndex || newIndex === 0) {
      const newColumn = this.getColumn(newIndex);
      newColumn.isTarget = true;
      if (initialIndex !== newIndex) {
        newColumn.targetMarkerContext = {
          class: 'targetMarker '.concat(initialIndex > newIndex ? 'dragFromRight' : 'dragFromLeft')
        };
      }
    }
  }
  getColumn(index) {
    const leftColumnCount = this._columnsByPin[0].columns.length;
    if (index < leftColumnCount) {
      return this._columnsByPin[0].columns[index];
    }
    const centerColumnCount = this._columnsByPin[1].columns.length;
    if (index < leftColumnCount + centerColumnCount) {
      return this._columnsByPin[1].columns[index - leftColumnCount];
    }
    return this._columnsByPin[2].columns[index - leftColumnCount - centerColumnCount];
  }
  onSort({
    column,
    prevValue,
    newValue
  }) {
    // if we are dragging don't sort!
    if (column.dragging) {
      return;
    }
    const sorts = this.calcNewSorts(column, prevValue, newValue);
    this.sort.emit({
      sorts,
      column,
      prevValue,
      newValue
    });
  }
  calcNewSorts(column, prevValue, newValue) {
    let idx = 0;
    if (!this.sorts) {
      this.sorts = [];
    }
    const sorts = this.sorts.map((s, i) => {
      s = {
        ...s
      };
      if (s.prop === column.prop) {
        idx = i;
      }
      return s;
    });
    if (newValue === undefined) {
      sorts.splice(idx, 1);
    } else if (prevValue) {
      sorts[idx].dir = newValue;
    } else {
      if (this.sortType === SortType.single) {
        sorts.splice(0, this.sorts.length);
      }
      sorts.push({
        dir: newValue,
        prop: column.prop
      });
    }
    return sorts;
  }
  setStylesByGroup() {
    this._styleByGroup.left = this.calcStylesByGroup('left');
    this._styleByGroup.center = this.calcStylesByGroup('center');
    this._styleByGroup.right = this.calcStylesByGroup('right');
    if (!this.destroyed) {
      this.cd.detectChanges();
    }
  }
  calcStylesByGroup(group) {
    const widths = this._columnGroupWidths;
    const offsetX = this.offsetX;
    const styles = {
      width: `${widths[group]}px`
    };
    if (group === 'center') {
      translateXY(styles, offsetX * -1, 0);
    } else if (group === 'right') {
      const totalDiff = widths.total - this.innerWidth;
      const offset = totalDiff * -1;
      translateXY(styles, offset, 0);
    }
    return styles;
  }
}
DataTableHeaderComponent.ɵfac = function DataTableHeaderComponent_Factory(t) {
  return new (t || DataTableHeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef));
};
DataTableHeaderComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: DataTableHeaderComponent,
  selectors: [["datatable-header"]],
  hostAttrs: [1, "datatable-header"],
  hostVars: 4,
  hostBindings: function DataTableHeaderComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", ctx.headerHeight)("width", ctx.headerWidth);
    }
  },
  inputs: {
    sortAscendingIcon: "sortAscendingIcon",
    sortDescendingIcon: "sortDescendingIcon",
    sortUnsetIcon: "sortUnsetIcon",
    scrollbarH: "scrollbarH",
    dealsWithGroup: "dealsWithGroup",
    targetMarkerTemplate: "targetMarkerTemplate",
    innerWidth: "innerWidth",
    sorts: "sorts",
    sortType: "sortType",
    allRowsSelected: "allRowsSelected",
    selectionType: "selectionType",
    reorderable: "reorderable",
    headerHeight: "headerHeight",
    columns: "columns",
    offsetX: "offsetX"
  },
  outputs: {
    sort: "sort",
    reorder: "reorder",
    resize: "resize",
    select: "select",
    columnContextmenu: "columnContextmenu"
  },
  decls: 2,
  vars: 4,
  consts: [["role", "row", "orderable", "", 1, "datatable-header-inner", 3, "reorder", "targetChanged"], [3, "class", "ngStyle", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "ngStyle"], ["role", "columnheader", "resizeable", "", "long-press", "", "draggable", "", 3, "resizeEnabled", "pressModel", "pressEnabled", "dragX", "dragY", "dragModel", "dragEventTarget", "headerHeight", "isTarget", "targetMarkerTemplate", "targetMarkerContext", "column", "sortType", "sorts", "selectionType", "sortAscendingIcon", "sortDescendingIcon", "sortUnsetIcon", "allRowsSelected", "resize", "longPressStart", "longPressEnd", "sort", "select", "columnContextmenu", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["role", "columnheader", "resizeable", "", "long-press", "", "draggable", "", 3, "resizeEnabled", "pressModel", "pressEnabled", "dragX", "dragY", "dragModel", "dragEventTarget", "headerHeight", "isTarget", "targetMarkerTemplate", "targetMarkerContext", "column", "sortType", "sorts", "selectionType", "sortAscendingIcon", "sortDescendingIcon", "sortUnsetIcon", "allRowsSelected", "resize", "longPressStart", "longPressEnd", "sort", "select", "columnContextmenu"]],
  template: function DataTableHeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("reorder", function DataTableHeaderComponent_Template_div_reorder_0_listener($event) {
        return ctx.onColumnReordered($event);
      })("targetChanged", function DataTableHeaderComponent_Template_div_targetChanged_0_listener($event) {
        return ctx.onTargetChanged($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DataTableHeaderComponent_div_1_Template, 2, 5, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx._columnGroupWidths.total, "px");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx._columnsByPin)("ngForTrackBy", ctx.trackByGroups);
    }
  },
  dependencies: [DataTableHeaderCellComponent, OrderableDirective, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgStyle, ResizeableDirective, LongPressDirective, DraggableDirective],
  encapsulation: 2,
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataTableHeaderComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'datatable-header',
      template: `
    <div
      role="row"
      orderable
      (reorder)="onColumnReordered($event)"
      (targetChanged)="onTargetChanged($event)"
      [style.width.px]="_columnGroupWidths.total"
      class="datatable-header-inner"
    >
      <div
        *ngFor="let colGroup of _columnsByPin; trackBy: trackByGroups"
        [class]="'datatable-row-' + colGroup.type"
        [ngStyle]="_styleByGroup[colGroup.type]"
      >
        <datatable-header-cell
          role="columnheader"
          *ngFor="let column of colGroup.columns; trackBy: columnTrackingFn"
          resizeable
          [resizeEnabled]="column.resizeable"
          (resize)="onColumnResized($event, column)"
          long-press
          [pressModel]="column"
          [pressEnabled]="reorderable && column.draggable"
          (longPressStart)="onLongPressStart($event)"
          (longPressEnd)="onLongPressEnd($event)"
          draggable
          [dragX]="reorderable && column.draggable && column.dragging"
          [dragY]="false"
          [dragModel]="column"
          [dragEventTarget]="dragEventTarget"
          [headerHeight]="headerHeight"
          [isTarget]="column.isTarget"
          [targetMarkerTemplate]="targetMarkerTemplate"
          [targetMarkerContext]="column.targetMarkerContext"
          [column]="column"
          [sortType]="sortType"
          [sorts]="sorts"
          [selectionType]="selectionType"
          [sortAscendingIcon]="sortAscendingIcon"
          [sortDescendingIcon]="sortDescendingIcon"
          [sortUnsetIcon]="sortUnsetIcon"
          [allRowsSelected]="allRowsSelected"
          (sort)="onSort($event)"
          (select)="select.emit($event)"
          (columnContextmenu)="columnContextmenu.emit($event)"
        >
        </datatable-header-cell>
      </div>
    </div>
  `,
      host: {
        class: 'datatable-header'
      },
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }];
  }, {
    sortAscendingIcon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    sortDescendingIcon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    sortUnsetIcon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    scrollbarH: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    dealsWithGroup: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    targetMarkerTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    innerWidth: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    sorts: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    sortType: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    allRowsSelected: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    selectionType: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    reorderable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    headerHeight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['style.height']
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    columns: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    offsetX: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    sort: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    reorder: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    resize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    select: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    columnContextmenu: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    headerWidth: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['style.width']
    }]
  });
})();

/**
 * Throttle a function
 */
function throttle(func, wait, options) {
  options = options || {};
  let context;
  let args;
  let result;
  let timeout = null;
  let previous = 0;
  function later() {
    previous = options.leading === false ? 0 : +new Date();
    timeout = null;
    result = func.apply(context, args);
  }
  return function () {
    const now = +new Date();
    if (!previous && options.leading === false) {
      previous = now;
    }
    const remaining = wait - (now - previous);
    context = this;
    args = arguments;
    if (remaining <= 0) {
      clearTimeout(timeout);
      timeout = null;
      previous = now;
      result = func.apply(context, args);
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(later, remaining);
    }
    return result;
  };
}
/**
 * Throttle decorator
 *
 *  class MyClass {
 *    throttleable(10)
 *    myFn() { ... }
 *  }
 */
function throttleable(duration, options) {
  return function innerDecorator(target, key, descriptor) {
    return {
      configurable: true,
      enumerable: descriptor.enumerable,
      get: function getter() {
        Object.defineProperty(this, key, {
          configurable: true,
          enumerable: descriptor.enumerable,
          value: throttle(descriptor.value, duration, options)
        });
        return this[key];
      }
    };
  };
}

/**
 * Calculates the Total Flex Grow
 */
function getTotalFlexGrow(columns) {
  let totalFlexGrow = 0;
  for (const c of columns) {
    totalFlexGrow += c.flexGrow || 0;
  }
  return totalFlexGrow;
}
/**
 * Adjusts the column widths.
 * Inspired by: https://github.com/facebook/fixed-data-table/blob/master/src/FixedDataTableWidthHelper.js
 */
function adjustColumnWidths(allColumns, expectedWidth) {
  const columnsWidth = columnsTotalWidth(allColumns);
  const totalFlexGrow = getTotalFlexGrow(allColumns);
  const colsByGroup = columnsByPin(allColumns);
  if (columnsWidth !== expectedWidth) {
    scaleColumns(colsByGroup, expectedWidth, totalFlexGrow);
  }
}
/**
 * Resizes columns based on the flexGrow property, while respecting manually set widths
 */
function scaleColumns(colsByGroup, maxWidth, totalFlexGrow) {
  // calculate total width and flexgrow points for coulumns that can be resized
  for (const attr in colsByGroup) {
    for (const column of colsByGroup[attr]) {
      if (!column.canAutoResize) {
        maxWidth -= column.width;
        totalFlexGrow -= column.flexGrow ? column.flexGrow : 0;
      } else {
        column.width = 0;
      }
    }
  }
  const hasMinWidth = {};
  let remainingWidth = maxWidth;
  // resize columns until no width is left to be distributed
  do {
    const widthPerFlexPoint = remainingWidth / totalFlexGrow;
    remainingWidth = 0;
    for (const attr in colsByGroup) {
      for (const column of colsByGroup[attr]) {
        // if the column can be resize and it hasn't reached its minimum width yet
        if (column.canAutoResize && !hasMinWidth[column.prop]) {
          const newWidth = column.width + column.flexGrow * widthPerFlexPoint;
          if (column.minWidth !== undefined && newWidth < column.minWidth) {
            remainingWidth += newWidth - column.minWidth;
            column.width = column.minWidth;
            hasMinWidth[column.prop] = true;
          } else {
            column.width = newWidth;
          }
        }
      }
    }
  } while (remainingWidth !== 0);
}
/**
 * Forces the width of the columns to
 * distribute equally but overflowing when necessary
 *
 * Rules:
 *
 *  - If combined withs are less than the total width of the grid,
 *    proportion the widths given the min / max / normal widths to fill the width.
 *
 *  - If the combined widths, exceed the total width of the grid,
 *    use the standard widths.
 *
 *  - If a column is resized, it should always use that width
 *
 *  - The proportional widths should never fall below min size if specified.
 *
 *  - If the grid starts off small but then becomes greater than the size ( + / - )
 *    the width should use the original width; not the newly proportioned widths.
 */
function forceFillColumnWidths(allColumns, expectedWidth, startIdx, allowBleed, defaultColWidth = 300) {
  const columnsToResize = allColumns.slice(startIdx + 1, allColumns.length).filter(c => {
    return c.canAutoResize !== false;
  });
  for (const column of columnsToResize) {
    if (!column.$$oldWidth) {
      column.$$oldWidth = column.width;
    }
  }
  let additionWidthPerColumn = 0;
  let exceedsWindow = false;
  let contentWidth = getContentWidth(allColumns, defaultColWidth);
  let remainingWidth = expectedWidth - contentWidth;
  const columnsProcessed = [];
  const remainingWidthLimit = 1; // when to stop
  // This loop takes care of the
  do {
    additionWidthPerColumn = remainingWidth / columnsToResize.length;
    exceedsWindow = contentWidth >= expectedWidth;
    for (const column of columnsToResize) {
      if (exceedsWindow && allowBleed) {
        column.width = column.$$oldWidth || column.width || defaultColWidth;
      } else {
        const newSize = (column.width || defaultColWidth) + additionWidthPerColumn;
        if (column.minWidth && newSize < column.minWidth) {
          column.width = column.minWidth;
          columnsProcessed.push(column);
        } else if (column.maxWidth && newSize > column.maxWidth) {
          column.width = column.maxWidth;
          columnsProcessed.push(column);
        } else {
          column.width = newSize;
        }
      }
      column.width = Math.max(0, column.width);
    }
    contentWidth = getContentWidth(allColumns);
    remainingWidth = expectedWidth - contentWidth;
    removeProcessedColumns(columnsToResize, columnsProcessed);
  } while (remainingWidth > remainingWidthLimit && columnsToResize.length !== 0);
}
/**
 * Remove the processed columns from the current active columns.
 */
function removeProcessedColumns(columnsToResize, columnsProcessed) {
  for (const column of columnsProcessed) {
    const index = columnsToResize.indexOf(column);
    columnsToResize.splice(index, 1);
  }
}
/**
 * Gets the width of the columns
 */
function getContentWidth(allColumns, defaultColWidth = 300) {
  let contentWidth = 0;
  for (const column of allColumns) {
    contentWidth += column.width || defaultColWidth;
  }
  return contentWidth;
}
class DataTablePagerComponent {
  constructor() {
    this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this._count = 0;
    this._page = 1;
    this._size = 0;
  }
  set size(val) {
    this._size = val;
    this.pages = this.calcPages();
  }
  get size() {
    return this._size;
  }
  set count(val) {
    this._count = val;
    this.pages = this.calcPages();
  }
  get count() {
    return this._count;
  }
  set page(val) {
    this._page = val;
    this.pages = this.calcPages();
  }
  get page() {
    return this._page;
  }
  get totalPages() {
    const count = this.size < 1 ? 1 : Math.ceil(this.count / this.size);
    return Math.max(count || 0, 1);
  }
  canPrevious() {
    return this.page > 1;
  }
  canNext() {
    return this.page < this.totalPages;
  }
  prevPage() {
    this.selectPage(this.page - 1);
  }
  nextPage() {
    this.selectPage(this.page + 1);
  }
  selectPage(page) {
    if (page > 0 && page <= this.totalPages && page !== this.page) {
      this.page = page;
      this.change.emit({
        page
      });
    }
  }
  calcPages(page) {
    const pages = [];
    let startPage = 1;
    let endPage = this.totalPages;
    const maxSize = 5;
    const isMaxSized = maxSize < this.totalPages;
    page = page || this.page;
    if (isMaxSized) {
      startPage = page - Math.floor(maxSize / 2);
      endPage = page + Math.floor(maxSize / 2);
      if (startPage < 1) {
        startPage = 1;
        endPage = Math.min(startPage + maxSize - 1, this.totalPages);
      } else if (endPage > this.totalPages) {
        startPage = Math.max(this.totalPages - maxSize + 1, 1);
        endPage = this.totalPages;
      }
    }
    for (let num = startPage; num <= endPage; num++) {
      pages.push({
        number: num,
        text: num
      });
    }
    return pages;
  }
}
DataTablePagerComponent.ɵfac = function DataTablePagerComponent_Factory(t) {
  return new (t || DataTablePagerComponent)();
};
DataTablePagerComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: DataTablePagerComponent,
  selectors: [["datatable-pager"]],
  hostAttrs: [1, "datatable-pager"],
  inputs: {
    pagerLeftArrowIcon: "pagerLeftArrowIcon",
    pagerRightArrowIcon: "pagerRightArrowIcon",
    pagerPreviousIcon: "pagerPreviousIcon",
    pagerNextIcon: "pagerNextIcon",
    size: "size",
    count: "count",
    page: "page"
  },
  outputs: {
    change: "change"
  },
  decls: 14,
  vars: 21,
  consts: [[1, "pager"], ["role", "button", "aria-label", "go to first page", "href", "javascript:void(0)", 3, "click"], ["role", "button", "aria-label", "go to previous page", "href", "javascript:void(0)", 3, "click"], ["role", "button", "class", "pages", 3, "active", 4, "ngFor", "ngForOf"], ["role", "button", "aria-label", "go to next page", "href", "javascript:void(0)", 3, "click"], ["role", "button", "aria-label", "go to last page", "href", "javascript:void(0)", 3, "click"], ["role", "button", 1, "pages"], ["href", "javascript:void(0)", 3, "click"]],
  template: function DataTablePagerComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0)(1, "li")(2, "a", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataTablePagerComponent_Template_a_click_2_listener() {
        return ctx.selectPage(1);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li")(5, "a", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataTablePagerComponent_Template_a_click_5_listener() {
        return ctx.prevPage();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, DataTablePagerComponent_li_7_Template, 3, 4, "li", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li")(9, "a", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataTablePagerComponent_Template_a_click_9_listener() {
        return ctx.nextPage();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li")(12, "a", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataTablePagerComponent_Template_a_click_12_listener() {
        return ctx.selectPage(ctx.totalPages);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", !ctx.canPrevious());
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.pagerPreviousIcon);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", !ctx.canPrevious());
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.pagerLeftArrowIcon);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.pages);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", !ctx.canNext());
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.pagerRightArrowIcon);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", !ctx.canNext());
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.pagerNextIcon);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf],
  encapsulation: 2,
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataTablePagerComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'datatable-pager',
      template: `
    <ul class="pager">
      <li [class.disabled]="!canPrevious()">
        <a role="button" aria-label="go to first page" href="javascript:void(0)" (click)="selectPage(1)">
          <i class="{{ pagerPreviousIcon }}"></i>
        </a>
      </li>
      <li [class.disabled]="!canPrevious()">
        <a role="button" aria-label="go to previous page" href="javascript:void(0)" (click)="prevPage()">
          <i class="{{ pagerLeftArrowIcon }}"></i>
        </a>
      </li>
      <li
        role="button"
        [attr.aria-label]="'page ' + pg.number"
        class="pages"
        *ngFor="let pg of pages"
        [class.active]="pg.number === page"
      >
        <a href="javascript:void(0)" (click)="selectPage(pg.number)">
          {{ pg.text }}
        </a>
      </li>
      <li [class.disabled]="!canNext()">
        <a role="button" aria-label="go to next page" href="javascript:void(0)" (click)="nextPage()">
          <i class="{{ pagerRightArrowIcon }}"></i>
        </a>
      </li>
      <li [class.disabled]="!canNext()">
        <a role="button" aria-label="go to last page" href="javascript:void(0)" (click)="selectPage(totalPages)">
          <i class="{{ pagerNextIcon }}"></i>
        </a>
      </li>
    </ul>
  `,
      host: {
        class: 'datatable-pager'
      },
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush
    }]
  }], null, {
    pagerLeftArrowIcon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    pagerRightArrowIcon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    pagerPreviousIcon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    pagerNextIcon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    size: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    count: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    page: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    change: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }]
  });
})();
class DataTableFooterComponent {
  constructor() {
    this.selectedCount = 0;
    this.page = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  get isVisible() {
    return this.rowCount / this.pageSize > 1;
  }
  get curPage() {
    return this.offset + 1;
  }
}
DataTableFooterComponent.ɵfac = function DataTableFooterComponent_Factory(t) {
  return new (t || DataTableFooterComponent)();
};
DataTableFooterComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: DataTableFooterComponent,
  selectors: [["datatable-footer"]],
  hostAttrs: [1, "datatable-footer"],
  inputs: {
    footerHeight: "footerHeight",
    rowCount: "rowCount",
    pageSize: "pageSize",
    offset: "offset",
    pagerLeftArrowIcon: "pagerLeftArrowIcon",
    pagerRightArrowIcon: "pagerRightArrowIcon",
    pagerPreviousIcon: "pagerPreviousIcon",
    pagerNextIcon: "pagerNextIcon",
    totalMessage: "totalMessage",
    footerTemplate: "footerTemplate",
    selectedCount: "selectedCount",
    selectedMessage: "selectedMessage"
  },
  outputs: {
    page: "page"
  },
  decls: 4,
  vars: 8,
  consts: [[1, "datatable-footer-inner", 3, "ngClass"], [4, "ngIf"], ["class", "page-count", 4, "ngIf"], [3, "pagerLeftArrowIcon", "pagerRightArrowIcon", "pagerPreviousIcon", "pagerNextIcon", "page", "size", "count", "hidden", "change", 4, "ngIf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "page-count"], [3, "pagerLeftArrowIcon", "pagerRightArrowIcon", "pagerPreviousIcon", "pagerNextIcon", "page", "size", "count", "hidden", "change"]],
  template: function DataTableFooterComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DataTableFooterComponent_1_Template, 1, 8, null, 1)(2, DataTableFooterComponent_div_2_Template, 3, 3, "div", 2)(3, DataTableFooterComponent_datatable_pager_3_Template, 1, 8, "datatable-pager", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", ctx.footerHeight, "px");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c4, ctx.selectedMessage));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.footerTemplate);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.footerTemplate);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.footerTemplate);
    }
  },
  dependencies: [DataTablePagerComponent, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgTemplateOutlet],
  encapsulation: 2,
  changeDetection: 0
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataTableFooterComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'datatable-footer',
      template: `
    <div
      class="datatable-footer-inner"
      [ngClass]="{ 'selected-count': selectedMessage }"
      [style.height.px]="footerHeight"
    >
      <ng-template
        *ngIf="footerTemplate"
        [ngTemplateOutlet]="footerTemplate.template"
        [ngTemplateOutletContext]="{
          rowCount: rowCount,
          pageSize: pageSize,
          selectedCount: selectedCount,
          curPage: curPage,
          offset: offset
        }"
      >
      </ng-template>
      <div class="page-count" *ngIf="!footerTemplate">
        <span *ngIf="selectedMessage"> {{ selectedCount?.toLocaleString() }} {{ selectedMessage }} / </span>
        {{ rowCount?.toLocaleString() }} {{ totalMessage }}
      </div>
      <datatable-pager
        *ngIf="!footerTemplate"
        [pagerLeftArrowIcon]="pagerLeftArrowIcon"
        [pagerRightArrowIcon]="pagerRightArrowIcon"
        [pagerPreviousIcon]="pagerPreviousIcon"
        [pagerNextIcon]="pagerNextIcon"
        [page]="curPage"
        [size]="pageSize"
        [count]="rowCount"
        [hidden]="!isVisible"
        (change)="page.emit($event)"
      >
      </datatable-pager>
    </div>
  `,
      host: {
        class: 'datatable-footer'
      },
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush
    }]
  }], null, {
    footerHeight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    rowCount: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    pageSize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    offset: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    pagerLeftArrowIcon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    pagerRightArrowIcon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    pagerPreviousIcon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    pagerNextIcon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    totalMessage: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    footerTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    selectedCount: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    selectedMessage: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    page: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }]
  });
})();
class DatatableComponent {
  constructor(scrollbarHelper, dimensionsHelper, cd, element, differs, columnChangesService, configuration) {
    this.scrollbarHelper = scrollbarHelper;
    this.dimensionsHelper = dimensionsHelper;
    this.cd = cd;
    this.columnChangesService = columnChangesService;
    this.configuration = configuration;
    /**
     * List of row objects that should be
     * represented as selected in the grid.
     * Default value: `[]`
     */
    this.selected = [];
    /**
     * Enable vertical scrollbars
     */
    this.scrollbarV = false;
    /**
     * Enable horz scrollbars
     */
    this.scrollbarH = false;
    /**
     * The row height; which is necessary
     * to calculate the height for the lazy rendering.
     */
    this.rowHeight = 30;
    /**
     * Type of column width distribution formula.
     * Example: flex, force, standard
     */
    this.columnMode = ColumnMode.standard;
    /**
     * The minimum header height in pixels.
     * Pass a falsey for no header
     */
    this.headerHeight = 30;
    /**
     * The minimum footer height in pixels.
     * Pass falsey for no footer
     */
    this.footerHeight = 0;
    /**
     * If the table should use external paging
     * otherwise its assumed that all data is preloaded.
     */
    this.externalPaging = false;
    /**
     * If the table should use external sorting or
     * the built-in basic sorting.
     */
    this.externalSorting = false;
    /**
     * Show the linear loading bar.
     * Default value: `false`
     */
    this.loadingIndicator = false;
    /**
     * Enable/Disable ability to re-order columns
     * by dragging them.
     */
    this.reorderable = true;
    /**
     * Swap columns on re-order columns or
     * move them.
     */
    this.swapColumns = true;
    /**
     * The type of sorting
     */
    this.sortType = SortType.single;
    /**
     * Array of sorted columns by property and type.
     * Default value: `[]`
     */
    this.sorts = [];
    /**
     * Css class overrides
     */
    this.cssClasses = {
      sortAscending: 'datatable-icon-up',
      sortDescending: 'datatable-icon-down',
      sortUnset: 'datatable-icon-sort-unset',
      pagerLeftArrow: 'datatable-icon-left',
      pagerRightArrow: 'datatable-icon-right',
      pagerPrevious: 'datatable-icon-prev',
      pagerNext: 'datatable-icon-skip'
    };
    /**
     * Message overrides for localization
     *
     * emptyMessage     [default] = 'No data to display'
     * totalMessage     [default] = 'total'
     * selectedMessage  [default] = 'selected'
     */
    this.messages = {
      // Message to show when array is presented
      // but contains no values
      emptyMessage: 'No data to display',
      // Footer total message
      totalMessage: 'total',
      // Footer selected message
      selectedMessage: 'selected'
    };
    /**
     * A boolean you can use to set the detault behaviour of rows and groups
     * whether they will start expanded or not. If ommited the default is NOT expanded.
     *
     */
    this.groupExpansionDefault = false;
    /**
     * Property to which you can use for determining select all
     * rows on current page or not.
     *
     * @memberOf DatatableComponent
     */
    this.selectAllRowsOnPage = false;
    /**
     * A flag for row virtualization on / off
     */
    this.virtualization = true;
    /**
     * A flag for switching summary row on / off
     */
    this.summaryRow = false;
    /**
     * A height of summary row
     */
    this.summaryHeight = 30;
    /**
     * A property holds a summary row position: top/bottom
     */
    this.summaryPosition = 'top';
    /**
     * Body was scrolled typically in a `scrollbarV:true` scenario.
     */
    this.scroll = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * A cell or row was focused via keyboard or mouse click.
     */
    this.activate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * A cell or row was selected.
     */
    this.select = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Column sort was invoked.
     */
    this.sort = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * The table was paged either triggered by the pager or the body scroll.
     */
    this.page = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Columns were re-ordered.
     */
    this.reorder = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Column was resized.
     */
    this.resize = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * The context menu was invoked on the table.
     * type indicates whether the header or the body was clicked.
     * content contains either the column or the row that was clicked.
     */
    this.tableContextmenu = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(false);
    /**
     * A row was expanded ot collapsed for tree
     */
    this.treeAction = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.rowCount = 0;
    this._offsetX = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject(0);
    this._count = 0;
    this._offset = 0;
    this._subscriptions = [];
    /**
     * This will be used when displaying or selecting rows.
     * when tracking/comparing them, we'll use the value of this fn,
     *
     * (`fn(x) === fn(y)` instead of `x === y`)
     */
    this.rowIdentity = x => {
      if (this._groupRowsBy) {
        // each group in groupedRows are stored as {key, value: [rows]},
        // where key is the groupRowsBy index
        return x.key;
      } else {
        return x;
      }
    };
    // get ref to elm for measuring
    this.element = element.nativeElement;
    this.rowDiffer = differs.find({}).create();
    // apply global settings from Module.forRoot
    if (this.configuration && this.configuration.messages) {
      this.messages = {
        ...this.configuration.messages
      };
    }
  }
  /**
   * Rows that are displayed in the table.
   */
  set rows(val) {
    this._rows = val;
    if (val) {
      this._internalRows = [...val];
    }
    // auto sort on new updates
    if (!this.externalSorting) {
      this.sortInternalRows();
    }
    // auto group by parent on new update
    this._internalRows = groupRowsByParents(this._internalRows, optionalGetterForProp(this.treeFromRelation), optionalGetterForProp(this.treeToRelation));
    // recalculate sizes/etc
    this.recalculate();
    if (this._rows && this._groupRowsBy) {
      // If a column has been specified in _groupRowsBy created a new array with the data grouped by that row
      this.groupedRows = this.groupArrayBy(this._rows, this._groupRowsBy);
    }
    this.cd.markForCheck();
  }
  /**
   * Gets the rows.
   */
  get rows() {
    return this._rows;
  }
  /**
   * This attribute allows the user to set the name of the column to group the data with
   */
  set groupRowsBy(val) {
    if (val) {
      this._groupRowsBy = val;
      if (this._rows && this._groupRowsBy) {
        // cretes a new array with the data grouped
        this.groupedRows = this.groupArrayBy(this._rows, this._groupRowsBy);
      }
    }
  }
  get groupRowsBy() {
    return this._groupRowsBy;
  }
  /**
   * Columns to be displayed.
   */
  set columns(val) {
    if (val) {
      this._internalColumns = [...val];
      setColumnDefaults(this._internalColumns);
      this.recalculateColumns();
    }
    this._columns = val;
  }
  /**
   * Get the columns.
   */
  get columns() {
    return this._columns;
  }
  /**
   * The page size to be shown.
   * Default value: `undefined`
   */
  set limit(val) {
    this._limit = val;
    // recalculate sizes/etc
    this.recalculate();
  }
  /**
   * Gets the limit.
   */
  get limit() {
    return this._limit;
  }
  /**
   * The total count of all rows.
   * Default value: `0`
   */
  set count(val) {
    this._count = val;
    // recalculate sizes/etc
    this.recalculate();
  }
  /**
   * Gets the count.
   */
  get count() {
    return this._count;
  }
  /**
   * The current offset ( page - 1 ) shown.
   * Default value: `0`
   */
  set offset(val) {
    this._offset = val;
  }
  get offset() {
    return Math.max(Math.min(this._offset, Math.ceil(this.rowCount / this.pageSize) - 1), 0);
  }
  /**
   * CSS class applied if the header height if fixed height.
   */
  get isFixedHeader() {
    const headerHeight = this.headerHeight;
    return typeof headerHeight === 'string' ? headerHeight !== 'auto' : true;
  }
  /**
   * CSS class applied to the root element if
   * the row heights are fixed heights.
   */
  get isFixedRow() {
    return this.rowHeight !== 'auto';
  }
  /**
   * CSS class applied to root element if
   * vertical scrolling is enabled.
   */
  get isVertScroll() {
    return this.scrollbarV;
  }
  /**
   * CSS class applied to root element if
   * virtualization is enabled.
   */
  get isVirtualized() {
    return this.virtualization;
  }
  /**
   * CSS class applied to the root element
   * if the horziontal scrolling is enabled.
   */
  get isHorScroll() {
    return this.scrollbarH;
  }
  /**
   * CSS class applied to root element is selectable.
   */
  get isSelectable() {
    return this.selectionType !== undefined;
  }
  /**
   * CSS class applied to root is checkbox selection.
   */
  get isCheckboxSelection() {
    return this.selectionType === SelectionType.checkbox;
  }
  /**
   * CSS class applied to root if cell selection.
   */
  get isCellSelection() {
    return this.selectionType === SelectionType.cell;
  }
  /**
   * CSS class applied to root if single select.
   */
  get isSingleSelection() {
    return this.selectionType === SelectionType.single;
  }
  /**
   * CSS class added to root element if mulit select
   */
  get isMultiSelection() {
    return this.selectionType === SelectionType.multi;
  }
  /**
   * CSS class added to root element if mulit click select
   */
  get isMultiClickSelection() {
    return this.selectionType === SelectionType.multiClick;
  }
  /**
   * Column templates gathered from `ContentChildren`
   * if described in your markup.
   */
  set columnTemplates(val) {
    this._columnTemplates = val;
    this.translateColumns(val);
  }
  /**
   * Returns the column templates.
   */
  get columnTemplates() {
    return this._columnTemplates;
  }
  /**
   * Returns if all rows are selected.
   */
  get allRowsSelected() {
    let allRowsSelected = this.rows && this.selected && this.selected.length === this.rows.length;
    if (this.bodyComponent && this.selectAllRowsOnPage) {
      const indexes = this.bodyComponent.indexes;
      const rowsOnPage = indexes.last - indexes.first;
      allRowsSelected = this.selected.length === rowsOnPage;
    }
    return this.selected && this.rows && this.rows.length !== 0 && allRowsSelected;
  }
  /**
   * Lifecycle hook that is called after data-bound
   * properties of a directive are initialized.
   */
  ngOnInit() {
    // need to call this immediatly to size
    // if the table is hidden the visibility
    // listener will invoke this itself upon show
    this.recalculate();
  }
  /**
   * Lifecycle hook that is called after a component's
   * view has been fully initialized.
   */
  ngAfterViewInit() {
    if (!this.externalSorting) {
      this.sortInternalRows();
    }
    // this has to be done to prevent the change detection
    // tree from freaking out because we are readjusting
    if (typeof requestAnimationFrame === 'undefined') {
      return;
    }
    requestAnimationFrame(() => {
      this.recalculate();
      // emit page for virtual server-side kickoff
      if (this.externalPaging && this.scrollbarV) {
        this.page.emit({
          count: this.count,
          pageSize: this.pageSize,
          limit: this.limit,
          offset: 0
        });
      }
    });
  }
  /**
   * Lifecycle hook that is called after a component's
   * content has been fully initialized.
   */
  ngAfterContentInit() {
    this.columnTemplates.changes.subscribe(v => this.translateColumns(v));
    this.listenForColumnInputChanges();
  }
  /**
   * Translates the templates to the column objects
   */
  translateColumns(val) {
    if (val) {
      const arr = val.toArray();
      if (arr.length) {
        this._internalColumns = translateTemplates(arr);
        setColumnDefaults(this._internalColumns);
        this.recalculateColumns();
        this.sortInternalRows();
        this.cd.markForCheck();
      }
    }
  }
  /**
   * Creates a map with the data grouped by the user choice of grouping index
   *
   * @param originalArray the original array passed via parameter
   * @param groupByIndex  the index of the column to group the data by
   */
  groupArrayBy(originalArray, groupBy) {
    // create a map to hold groups with their corresponding results
    const map = new Map();
    let i = 0;
    originalArray.forEach(item => {
      const key = item[groupBy];
      if (!map.has(key)) {
        map.set(key, [item]);
      } else {
        map.get(key).push(item);
      }
      i++;
    });
    const addGroup = (key, value) => {
      return {
        key,
        value
      };
    };
    // convert map back to a simple array of objects
    return Array.from(map, x => addGroup(x[0], x[1]));
  }
  /*
   * Lifecycle hook that is called when Angular dirty checks a directive.
   */
  ngDoCheck() {
    if (this.rowDiffer.diff(this.rows)) {
      if (!this.externalSorting) {
        this.sortInternalRows();
      } else {
        this._internalRows = [...this.rows];
      }
      // auto group by parent on new update
      this._internalRows = groupRowsByParents(this._internalRows, optionalGetterForProp(this.treeFromRelation), optionalGetterForProp(this.treeToRelation));
      this.recalculatePages();
      this.cd.markForCheck();
    }
  }
  /**
   * Recalc's the sizes of the grid.
   *
   * Updated automatically on changes to:
   *
   *  - Columns
   *  - Rows
   *  - Paging related
   *
   * Also can be manually invoked or upon window resize.
   */
  recalculate() {
    this.recalculateDims();
    this.recalculateColumns();
    this.cd.markForCheck();
  }
  /**
   * Window resize handler to update sizes.
   */
  onWindowResize() {
    this.recalculate();
  }
  /**
   * Recalulcates the column widths based on column width
   * distribution mode and scrollbar offsets.
   */
  recalculateColumns(columns = this._internalColumns, forceIdx = -1, allowBleed = this.scrollbarH) {
    if (!columns) return undefined;
    let width = this._innerWidth;
    if (this.scrollbarV) {
      width = width - this.scrollbarHelper.width;
    }
    if (this.columnMode === ColumnMode.force) {
      forceFillColumnWidths(columns, width, forceIdx, allowBleed);
    } else if (this.columnMode === ColumnMode.flex) {
      adjustColumnWidths(columns, width);
    }
    return columns;
  }
  /**
   * Recalculates the dimensions of the table size.
   * Internally calls the page size and row count calcs too.
   *
   */
  recalculateDims() {
    const dims = this.dimensionsHelper.getDimensions(this.element);
    this._innerWidth = Math.floor(dims.width);
    if (this.scrollbarV) {
      let height = dims.height;
      if (this.headerHeight) height = height - this.headerHeight;
      if (this.footerHeight) height = height - this.footerHeight;
      this.bodyHeight = height;
    }
    this.recalculatePages();
  }
  /**
   * Recalculates the pages after a update.
   */
  recalculatePages() {
    this.pageSize = this.calcPageSize();
    this.rowCount = this.calcRowCount();
  }
  /**
   * Body triggered a page event.
   */
  onBodyPage({
    offset
  }) {
    // Avoid pagination caming from body events like scroll when the table
    // has no virtualization and the external paging is enable.
    // This means, let's the developer handle pagination by my him(her) self
    if (this.externalPaging && !this.virtualization) {
      return;
    }
    this.offset = offset;
    this.page.emit({
      count: this.count,
      pageSize: this.pageSize,
      limit: this.limit,
      offset: this.offset
    });
  }
  /**
   * The body triggered a scroll event.
   */
  onBodyScroll(event) {
    this._offsetX.next(event.offsetX);
    this.scroll.emit(event);
    this.cd.detectChanges();
  }
  /**
   * The footer triggered a page event.
   */
  onFooterPage(event) {
    this.offset = event.page - 1;
    this.bodyComponent.updateOffsetY(this.offset);
    this.page.emit({
      count: this.count,
      pageSize: this.pageSize,
      limit: this.limit,
      offset: this.offset
    });
    if (this.selectAllRowsOnPage) {
      this.selected = [];
      this.select.emit({
        selected: this.selected
      });
    }
  }
  /**
   * Recalculates the sizes of the page
   */
  calcPageSize(val = this.rows) {
    // Keep the page size constant even if the row has been expanded.
    // This is because an expanded row is still considered to be a child of
    // the original row.  Hence calculation would use rowHeight only.
    if (this.scrollbarV && this.virtualization) {
      const size = Math.ceil(this.bodyHeight / this.rowHeight);
      return Math.max(size, 0);
    }
    // if limit is passed, we are paging
    if (this.limit !== undefined) {
      return this.limit;
    }
    // otherwise use row length
    if (val) {
      return val.length;
    }
    // other empty :(
    return 0;
  }
  /**
   * Calculates the row count.
   */
  calcRowCount(val = this.rows) {
    if (!this.externalPaging) {
      if (!val) return 0;
      if (this.groupedRows) {
        return this.groupedRows.length;
      } else if (this.treeFromRelation != null && this.treeToRelation != null) {
        return this._internalRows.length;
      } else {
        return val.length;
      }
    }
    return this.count;
  }
  /**
   * The header triggered a contextmenu event.
   */
  onColumnContextmenu({
    event,
    column
  }) {
    this.tableContextmenu.emit({
      event,
      type: ContextmenuType.header,
      content: column
    });
  }
  /**
   * The body triggered a contextmenu event.
   */
  onRowContextmenu({
    event,
    row
  }) {
    this.tableContextmenu.emit({
      event,
      type: ContextmenuType.body,
      content: row
    });
  }
  /**
   * The header triggered a column resize event.
   */
  onColumnResize({
    column,
    newValue
  }) {
    /* Safari/iOS 10.2 workaround */
    if (column === undefined) {
      return;
    }
    let idx;
    const cols = this._internalColumns.map((c, i) => {
      c = {
        ...c
      };
      if (c.$$id === column.$$id) {
        idx = i;
        c.width = newValue;
        // set this so we can force the column
        // width distribution to be to this value
        c.$$oldWidth = newValue;
      }
      return c;
    });
    this.recalculateColumns(cols, idx);
    this._internalColumns = cols;
    this.resize.emit({
      column,
      newValue
    });
  }
  /**
   * The header triggered a column re-order event.
   */
  onColumnReorder({
    column,
    newValue,
    prevValue
  }) {
    const cols = this._internalColumns.map(c => {
      return {
        ...c
      };
    });
    if (this.swapColumns) {
      const prevCol = cols[newValue];
      cols[newValue] = column;
      cols[prevValue] = prevCol;
    } else {
      if (newValue > prevValue) {
        const movedCol = cols[prevValue];
        for (let i = prevValue; i < newValue; i++) {
          cols[i] = cols[i + 1];
        }
        cols[newValue] = movedCol;
      } else {
        const movedCol = cols[prevValue];
        for (let i = prevValue; i > newValue; i--) {
          cols[i] = cols[i - 1];
        }
        cols[newValue] = movedCol;
      }
    }
    this._internalColumns = cols;
    this.reorder.emit({
      column,
      newValue,
      prevValue
    });
  }
  /**
   * The header triggered a column sort event.
   */
  onColumnSort(event) {
    // clean selected rows
    if (this.selectAllRowsOnPage) {
      this.selected = [];
      this.select.emit({
        selected: this.selected
      });
    }
    this.sorts = event.sorts;
    // this could be optimized better since it will resort
    // the rows again on the 'push' detection...
    if (this.externalSorting === false) {
      // don't use normal setter so we don't resort
      this.sortInternalRows();
    }
    // auto group by parent on new update
    this._internalRows = groupRowsByParents(this._internalRows, optionalGetterForProp(this.treeFromRelation), optionalGetterForProp(this.treeToRelation));
    // Always go to first page when sorting to see the newly sorted data
    this.offset = 0;
    this.bodyComponent.updateOffsetY(this.offset);
    this.sort.emit(event);
  }
  /**
   * Toggle all row selection
   */
  onHeaderSelect(event) {
    if (this.bodyComponent && this.selectAllRowsOnPage) {
      // before we splice, chk if we currently have all selected
      const first = this.bodyComponent.indexes.first;
      const last = this.bodyComponent.indexes.last;
      const allSelected = this.selected.length === last - first;
      // remove all existing either way
      this.selected = [];
      // do the opposite here
      if (!allSelected) {
        this.selected.push(...this._internalRows.slice(first, last));
      }
    } else {
      // before we splice, chk if we currently have all selected
      const allSelected = this.selected.length === this.rows.length;
      // remove all existing either way
      this.selected = [];
      // do the opposite here
      if (!allSelected) {
        this.selected.push(...this.rows);
      }
    }
    this.select.emit({
      selected: this.selected
    });
  }
  /**
   * A row was selected from body
   */
  onBodySelect(event) {
    this.select.emit(event);
  }
  /**
   * A row was expanded or collapsed for tree
   */
  onTreeAction(event) {
    const row = event.row;
    // TODO: For duplicated items this will not work
    const rowIndex = this._rows.findIndex(r => r[this.treeToRelation] === event.row[this.treeToRelation]);
    this.treeAction.emit({
      row,
      rowIndex
    });
  }
  ngOnDestroy() {
    this._subscriptions.forEach(subscription => subscription.unsubscribe());
  }
  /**
   * listen for changes to input bindings of all DataTableColumnDirective and
   * trigger the columnTemplates.changes observable to emit
   */
  listenForColumnInputChanges() {
    this._subscriptions.push(this.columnChangesService.columnInputChanges$.subscribe(() => {
      if (this.columnTemplates) {
        this.columnTemplates.notifyOnChanges();
      }
    }));
  }
  sortInternalRows() {
    this._internalRows = sortRows(this._internalRows, this._internalColumns, this.sorts);
  }
}
DatatableComponent.ɵfac = function DatatableComponent_Factory(t) {
  return new (t || DatatableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ScrollbarHelper, 4), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](DimensionsHelper, 4), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.KeyValueDiffers), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ColumnChangesService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"]('configuration', 8));
};
DatatableComponent.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: DatatableComponent,
  selectors: [["ngx-datatable"]],
  contentQueries: function DatatableComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, DatatableRowDetailDirective, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, DatatableGroupHeaderDirective, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, DatatableFooterDirective, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, DataTableColumnDirective, 4);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.rowDetail = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.groupHeader = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.footer = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.columnTemplates = _t);
    }
  },
  viewQuery: function DatatableComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](DataTableBodyComponent, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](DataTableHeaderComponent, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.bodyComponent = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.headerComponent = _t.first);
    }
  },
  hostAttrs: [1, "ngx-datatable"],
  hostVars: 22,
  hostBindings: function DatatableComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function DatatableComponent_resize_HostBindingHandler() {
        return ctx.onWindowResize();
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("fixed-header", ctx.isFixedHeader)("fixed-row", ctx.isFixedRow)("scroll-vertical", ctx.isVertScroll)("virtualized", ctx.isVirtualized)("scroll-horz", ctx.isHorScroll)("selectable", ctx.isSelectable)("checkbox-selection", ctx.isCheckboxSelection)("cell-selection", ctx.isCellSelection)("single-selection", ctx.isSingleSelection)("multi-selection", ctx.isMultiSelection)("multi-click-selection", ctx.isMultiClickSelection);
    }
  },
  inputs: {
    targetMarkerTemplate: "targetMarkerTemplate",
    rows: "rows",
    groupRowsBy: "groupRowsBy",
    groupedRows: "groupedRows",
    columns: "columns",
    selected: "selected",
    scrollbarV: "scrollbarV",
    scrollbarH: "scrollbarH",
    rowHeight: "rowHeight",
    columnMode: "columnMode",
    headerHeight: "headerHeight",
    footerHeight: "footerHeight",
    externalPaging: "externalPaging",
    externalSorting: "externalSorting",
    limit: "limit",
    count: "count",
    offset: "offset",
    loadingIndicator: "loadingIndicator",
    selectionType: "selectionType",
    reorderable: "reorderable",
    swapColumns: "swapColumns",
    sortType: "sortType",
    sorts: "sorts",
    cssClasses: "cssClasses",
    messages: "messages",
    rowClass: "rowClass",
    selectCheck: "selectCheck",
    displayCheck: "displayCheck",
    groupExpansionDefault: "groupExpansionDefault",
    trackByProp: "trackByProp",
    selectAllRowsOnPage: "selectAllRowsOnPage",
    virtualization: "virtualization",
    treeFromRelation: "treeFromRelation",
    treeToRelation: "treeToRelation",
    summaryRow: "summaryRow",
    summaryHeight: "summaryHeight",
    summaryPosition: "summaryPosition",
    rowIdentity: "rowIdentity"
  },
  outputs: {
    scroll: "scroll",
    activate: "activate",
    select: "select",
    sort: "sort",
    page: "page",
    reorder: "reorder",
    resize: "resize",
    tableContextmenu: "tableContextmenu",
    treeAction: "treeAction"
  },
  decls: 5,
  vars: 34,
  consts: [["role", "table", "visibilityObserver", "", 3, "visible"], ["role", "rowgroup", 3, "sorts", "sortType", "scrollbarH", "innerWidth", "offsetX", "dealsWithGroup", "columns", "headerHeight", "reorderable", "targetMarkerTemplate", "sortAscendingIcon", "sortDescendingIcon", "sortUnsetIcon", "allRowsSelected", "selectionType", "sort", "resize", "reorder", "select", "columnContextmenu", 4, "ngIf"], ["role", "rowgroup", 3, "groupRowsBy", "groupedRows", "rows", "groupExpansionDefault", "scrollbarV", "scrollbarH", "virtualization", "loadingIndicator", "externalPaging", "rowHeight", "rowCount", "offset", "trackByProp", "columns", "pageSize", "offsetX", "rowDetail", "groupHeader", "selected", "innerWidth", "bodyHeight", "selectionType", "emptyMessage", "rowIdentity", "rowClass", "selectCheck", "displayCheck", "summaryRow", "summaryHeight", "summaryPosition", "page", "activate", "rowContextmenu", "select", "scroll", "treeAction"], [3, "rowCount", "pageSize", "offset", "footerHeight", "footerTemplate", "totalMessage", "pagerLeftArrowIcon", "pagerRightArrowIcon", "pagerPreviousIcon", "selectedCount", "selectedMessage", "pagerNextIcon", "page", 4, "ngIf"], ["role", "rowgroup", 3, "sorts", "sortType", "scrollbarH", "innerWidth", "offsetX", "dealsWithGroup", "columns", "headerHeight", "reorderable", "targetMarkerTemplate", "sortAscendingIcon", "sortDescendingIcon", "sortUnsetIcon", "allRowsSelected", "selectionType", "sort", "resize", "reorder", "select", "columnContextmenu"], [3, "rowCount", "pageSize", "offset", "footerHeight", "footerTemplate", "totalMessage", "pagerLeftArrowIcon", "pagerRightArrowIcon", "pagerPreviousIcon", "selectedCount", "selectedMessage", "pagerNextIcon", "page"]],
  template: function DatatableComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("visible", function DatatableComponent_Template_div_visible_0_listener() {
        return ctx.recalculate();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DatatableComponent_datatable_header_1_Template, 2, 17, "datatable-header", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "datatable-body", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("page", function DatatableComponent_Template_datatable_body_page_2_listener($event) {
        return ctx.onBodyPage($event);
      })("activate", function DatatableComponent_Template_datatable_body_activate_2_listener($event) {
        return ctx.activate.emit($event);
      })("rowContextmenu", function DatatableComponent_Template_datatable_body_rowContextmenu_2_listener($event) {
        return ctx.onRowContextmenu($event);
      })("select", function DatatableComponent_Template_datatable_body_select_2_listener($event) {
        return ctx.onBodySelect($event);
      })("scroll", function DatatableComponent_Template_datatable_body_scroll_2_listener($event) {
        return ctx.onBodyScroll($event);
      })("treeAction", function DatatableComponent_Template_datatable_body_treeAction_2_listener($event) {
        return ctx.onTreeAction($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DatatableComponent_datatable_footer_4_Template, 1, 12, "datatable-footer", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.headerHeight);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("groupRowsBy", ctx.groupRowsBy)("groupedRows", ctx.groupedRows)("rows", ctx._internalRows)("groupExpansionDefault", ctx.groupExpansionDefault)("scrollbarV", ctx.scrollbarV)("scrollbarH", ctx.scrollbarH)("virtualization", ctx.virtualization)("loadingIndicator", ctx.loadingIndicator)("externalPaging", ctx.externalPaging)("rowHeight", ctx.rowHeight)("rowCount", ctx.rowCount)("offset", ctx.offset)("trackByProp", ctx.trackByProp)("columns", ctx._internalColumns)("pageSize", ctx.pageSize)("offsetX", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 32, ctx._offsetX))("rowDetail", ctx.rowDetail)("groupHeader", ctx.groupHeader)("selected", ctx.selected)("innerWidth", ctx._innerWidth)("bodyHeight", ctx.bodyHeight)("selectionType", ctx.selectionType)("emptyMessage", ctx.messages.emptyMessage)("rowIdentity", ctx.rowIdentity)("rowClass", ctx.rowClass)("selectCheck", ctx.selectCheck)("displayCheck", ctx.displayCheck)("summaryRow", ctx.summaryRow)("summaryHeight", ctx.summaryHeight)("summaryPosition", ctx.summaryPosition);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.footerHeight);
    }
  },
  dependencies: [DataTableHeaderComponent, DataTableBodyComponent, DataTableFooterComponent, VisibilityDirective, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.AsyncPipe],
  styles: [".ngx-datatable{display:block;overflow:hidden;justify-content:center;position:relative;transform:translate(0)}.ngx-datatable [hidden]{display:none!important}.ngx-datatable *,.ngx-datatable *:before,.ngx-datatable *:after{box-sizing:border-box}.ngx-datatable.scroll-vertical .datatable-body{overflow-y:auto}.ngx-datatable.scroll-vertical.virtualized .datatable-body .datatable-row-wrapper{position:absolute}.ngx-datatable.scroll-horz .datatable-body{overflow-x:auto;-webkit-overflow-scrolling:touch}.ngx-datatable.fixed-header .datatable-header .datatable-header-inner{white-space:nowrap}.ngx-datatable.fixed-header .datatable-header .datatable-header-inner .datatable-header-cell{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ngx-datatable.fixed-row .datatable-scroll,.ngx-datatable.fixed-row .datatable-scroll .datatable-body-row{white-space:nowrap}.ngx-datatable.fixed-row .datatable-scroll .datatable-body-row .datatable-body-cell,.ngx-datatable.fixed-row .datatable-scroll .datatable-body-row .datatable-body-group-cell{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.ngx-datatable .datatable-body-row,.ngx-datatable .datatable-row-center,.ngx-datatable .datatable-header-inner{display:flex;flex-direction:row;-o-flex-flow:row;flex-flow:row}.ngx-datatable .datatable-body-cell,.ngx-datatable .datatable-header-cell{overflow-x:hidden;vertical-align:top;display:inline-block;line-height:1.625}.ngx-datatable .datatable-body-cell:focus,.ngx-datatable .datatable-header-cell:focus{outline:none}.ngx-datatable .datatable-row-left,.ngx-datatable .datatable-row-right{z-index:9}.ngx-datatable .datatable-row-left,.ngx-datatable .datatable-row-center,.ngx-datatable .datatable-row-group,.ngx-datatable .datatable-row-right{position:relative}.ngx-datatable .datatable-header{display:block;overflow:hidden}.ngx-datatable .datatable-header .datatable-header-inner{align-items:stretch;-webkit-align-items:stretch}.ngx-datatable .datatable-header .datatable-header-cell{position:relative;display:inline-block}.ngx-datatable .datatable-header .datatable-header-cell.sortable .datatable-header-cell-wrapper{cursor:pointer}.ngx-datatable .datatable-header .datatable-header-cell.longpress .datatable-header-cell-wrapper{cursor:move}.ngx-datatable .datatable-header .datatable-header-cell .sort-btn{line-height:100%;vertical-align:middle;display:inline-block;cursor:pointer}.ngx-datatable .datatable-header .datatable-header-cell .resize-handle,.ngx-datatable .datatable-header .datatable-header-cell .resize-handle--not-resizable{display:inline-block;position:absolute;right:0;top:0;bottom:0;width:5px;padding:0 4px;visibility:hidden}.ngx-datatable .datatable-header .datatable-header-cell .resize-handle{cursor:ew-resize}.ngx-datatable .datatable-header .datatable-header-cell.resizeable:hover .resize-handle,.ngx-datatable .datatable-header .datatable-header-cell:hover .resize-handle--not-resizable{visibility:visible}.ngx-datatable .datatable-header .datatable-header-cell .targetMarker{position:absolute;top:0;bottom:0}.ngx-datatable .datatable-header .datatable-header-cell .targetMarker.dragFromLeft{right:0}.ngx-datatable .datatable-header .datatable-header-cell .targetMarker.dragFromRight{left:0}.ngx-datatable .datatable-header .datatable-header-cell .datatable-header-cell-template-wrap{height:inherit}.ngx-datatable .datatable-body{position:relative;z-index:10;display:block}.ngx-datatable .datatable-body .datatable-scroll{display:inline-block}.ngx-datatable .datatable-body .datatable-row-detail{overflow-y:hidden}.ngx-datatable .datatable-body .datatable-row-wrapper{display:flex;flex-direction:column}.ngx-datatable .datatable-body .datatable-body-row{outline:none}.ngx-datatable .datatable-body .datatable-body-row>div{display:flex}.ngx-datatable .datatable-footer{display:block;width:100%;overflow:auto}.ngx-datatable .datatable-footer .datatable-footer-inner{display:flex;align-items:center;width:100%}.ngx-datatable .datatable-footer .selected-count .page-count{flex:1 1 40%}.ngx-datatable .datatable-footer .selected-count .datatable-pager{flex:1 1 60%}.ngx-datatable .datatable-footer .page-count{flex:1 1 20%}.ngx-datatable .datatable-footer .datatable-pager{flex:1 1 80%;text-align:right}.ngx-datatable .datatable-footer .datatable-pager .pager,.ngx-datatable .datatable-footer .datatable-pager .pager li{padding:0;margin:0;display:inline-block;list-style:none}.ngx-datatable .datatable-footer .datatable-pager .pager li,.ngx-datatable .datatable-footer .datatable-pager .pager li a{outline:none}.ngx-datatable .datatable-footer .datatable-pager .pager li a{cursor:pointer;display:inline-block}.ngx-datatable .datatable-footer .datatable-pager .pager li.disabled a{cursor:not-allowed}\n"],
  encapsulation: 2,
  changeDetection: 0
});
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([throttleable(5)], DatatableComponent.prototype, "onWindowResize", null);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DatatableComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'ngx-datatable',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      host: {
        class: 'ngx-datatable'
      },
      template: "<div role=\"table\" visibilityObserver (visible)=\"recalculate()\">\n  <datatable-header\n    role=\"rowgroup\"\n    *ngIf=\"headerHeight\"\n    [sorts]=\"sorts\"\n    [sortType]=\"sortType\"\n    [scrollbarH]=\"scrollbarH\"\n    [innerWidth]=\"_innerWidth\"\n    [offsetX]=\"_offsetX | async\"\n    [dealsWithGroup]=\"groupedRows !== undefined\"\n    [columns]=\"_internalColumns\"\n    [headerHeight]=\"headerHeight\"\n    [reorderable]=\"reorderable\"\n    [targetMarkerTemplate]=\"targetMarkerTemplate\"\n    [sortAscendingIcon]=\"cssClasses.sortAscending\"\n    [sortDescendingIcon]=\"cssClasses.sortDescending\"\n    [sortUnsetIcon]=\"cssClasses.sortUnset\"\n    [allRowsSelected]=\"allRowsSelected\"\n    [selectionType]=\"selectionType\"\n    (sort)=\"onColumnSort($event)\"\n    (resize)=\"onColumnResize($event)\"\n    (reorder)=\"onColumnReorder($event)\"\n    (select)=\"onHeaderSelect($event)\"\n    (columnContextmenu)=\"onColumnContextmenu($event)\"\n  >\n  </datatable-header>\n  <datatable-body\n    role=\"rowgroup\"\n    [groupRowsBy]=\"groupRowsBy\"\n    [groupedRows]=\"groupedRows\"\n    [rows]=\"_internalRows\"\n    [groupExpansionDefault]=\"groupExpansionDefault\"\n    [scrollbarV]=\"scrollbarV\"\n    [scrollbarH]=\"scrollbarH\"\n    [virtualization]=\"virtualization\"\n    [loadingIndicator]=\"loadingIndicator\"\n    [externalPaging]=\"externalPaging\"\n    [rowHeight]=\"rowHeight\"\n    [rowCount]=\"rowCount\"\n    [offset]=\"offset\"\n    [trackByProp]=\"trackByProp\"\n    [columns]=\"_internalColumns\"\n    [pageSize]=\"pageSize\"\n    [offsetX]=\"_offsetX | async\"\n    [rowDetail]=\"rowDetail\"\n    [groupHeader]=\"groupHeader\"\n    [selected]=\"selected\"\n    [innerWidth]=\"_innerWidth\"\n    [bodyHeight]=\"bodyHeight\"\n    [selectionType]=\"selectionType\"\n    [emptyMessage]=\"messages.emptyMessage\"\n    [rowIdentity]=\"rowIdentity\"\n    [rowClass]=\"rowClass\"\n    [selectCheck]=\"selectCheck\"\n    [displayCheck]=\"displayCheck\"\n    [summaryRow]=\"summaryRow\"\n    [summaryHeight]=\"summaryHeight\"\n    [summaryPosition]=\"summaryPosition\"\n    (page)=\"onBodyPage($event)\"\n    (activate)=\"activate.emit($event)\"\n    (rowContextmenu)=\"onRowContextmenu($event)\"\n    (select)=\"onBodySelect($event)\"\n    (scroll)=\"onBodyScroll($event)\"\n    (treeAction)=\"onTreeAction($event)\"\n  >\n  </datatable-body>\n  <datatable-footer\n    *ngIf=\"footerHeight\"\n    [rowCount]=\"rowCount\"\n    [pageSize]=\"pageSize\"\n    [offset]=\"offset\"\n    [footerHeight]=\"footerHeight\"\n    [footerTemplate]=\"footer\"\n    [totalMessage]=\"messages.totalMessage\"\n    [pagerLeftArrowIcon]=\"cssClasses.pagerLeftArrow\"\n    [pagerRightArrowIcon]=\"cssClasses.pagerRightArrow\"\n    [pagerPreviousIcon]=\"cssClasses.pagerPrevious\"\n    [selectedCount]=\"selected.length\"\n    [selectedMessage]=\"!!selectionType && messages.selectedMessage\"\n    [pagerNextIcon]=\"cssClasses.pagerNext\"\n    (page)=\"onFooterPage($event)\"\n  >\n  </datatable-footer>\n</div>\n",
      styles: [".ngx-datatable{display:block;overflow:hidden;justify-content:center;position:relative;transform:translate(0)}.ngx-datatable [hidden]{display:none!important}.ngx-datatable *,.ngx-datatable *:before,.ngx-datatable *:after{box-sizing:border-box}.ngx-datatable.scroll-vertical .datatable-body{overflow-y:auto}.ngx-datatable.scroll-vertical.virtualized .datatable-body .datatable-row-wrapper{position:absolute}.ngx-datatable.scroll-horz .datatable-body{overflow-x:auto;-webkit-overflow-scrolling:touch}.ngx-datatable.fixed-header .datatable-header .datatable-header-inner{white-space:nowrap}.ngx-datatable.fixed-header .datatable-header .datatable-header-inner .datatable-header-cell{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ngx-datatable.fixed-row .datatable-scroll,.ngx-datatable.fixed-row .datatable-scroll .datatable-body-row{white-space:nowrap}.ngx-datatable.fixed-row .datatable-scroll .datatable-body-row .datatable-body-cell,.ngx-datatable.fixed-row .datatable-scroll .datatable-body-row .datatable-body-group-cell{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.ngx-datatable .datatable-body-row,.ngx-datatable .datatable-row-center,.ngx-datatable .datatable-header-inner{display:flex;flex-direction:row;-o-flex-flow:row;flex-flow:row}.ngx-datatable .datatable-body-cell,.ngx-datatable .datatable-header-cell{overflow-x:hidden;vertical-align:top;display:inline-block;line-height:1.625}.ngx-datatable .datatable-body-cell:focus,.ngx-datatable .datatable-header-cell:focus{outline:none}.ngx-datatable .datatable-row-left,.ngx-datatable .datatable-row-right{z-index:9}.ngx-datatable .datatable-row-left,.ngx-datatable .datatable-row-center,.ngx-datatable .datatable-row-group,.ngx-datatable .datatable-row-right{position:relative}.ngx-datatable .datatable-header{display:block;overflow:hidden}.ngx-datatable .datatable-header .datatable-header-inner{align-items:stretch;-webkit-align-items:stretch}.ngx-datatable .datatable-header .datatable-header-cell{position:relative;display:inline-block}.ngx-datatable .datatable-header .datatable-header-cell.sortable .datatable-header-cell-wrapper{cursor:pointer}.ngx-datatable .datatable-header .datatable-header-cell.longpress .datatable-header-cell-wrapper{cursor:move}.ngx-datatable .datatable-header .datatable-header-cell .sort-btn{line-height:100%;vertical-align:middle;display:inline-block;cursor:pointer}.ngx-datatable .datatable-header .datatable-header-cell .resize-handle,.ngx-datatable .datatable-header .datatable-header-cell .resize-handle--not-resizable{display:inline-block;position:absolute;right:0;top:0;bottom:0;width:5px;padding:0 4px;visibility:hidden}.ngx-datatable .datatable-header .datatable-header-cell .resize-handle{cursor:ew-resize}.ngx-datatable .datatable-header .datatable-header-cell.resizeable:hover .resize-handle,.ngx-datatable .datatable-header .datatable-header-cell:hover .resize-handle--not-resizable{visibility:visible}.ngx-datatable .datatable-header .datatable-header-cell .targetMarker{position:absolute;top:0;bottom:0}.ngx-datatable .datatable-header .datatable-header-cell .targetMarker.dragFromLeft{right:0}.ngx-datatable .datatable-header .datatable-header-cell .targetMarker.dragFromRight{left:0}.ngx-datatable .datatable-header .datatable-header-cell .datatable-header-cell-template-wrap{height:inherit}.ngx-datatable .datatable-body{position:relative;z-index:10;display:block}.ngx-datatable .datatable-body .datatable-scroll{display:inline-block}.ngx-datatable .datatable-body .datatable-row-detail{overflow-y:hidden}.ngx-datatable .datatable-body .datatable-row-wrapper{display:flex;flex-direction:column}.ngx-datatable .datatable-body .datatable-body-row{outline:none}.ngx-datatable .datatable-body .datatable-body-row>div{display:flex}.ngx-datatable .datatable-footer{display:block;width:100%;overflow:auto}.ngx-datatable .datatable-footer .datatable-footer-inner{display:flex;align-items:center;width:100%}.ngx-datatable .datatable-footer .selected-count .page-count{flex:1 1 40%}.ngx-datatable .datatable-footer .selected-count .datatable-pager{flex:1 1 60%}.ngx-datatable .datatable-footer .page-count{flex:1 1 20%}.ngx-datatable .datatable-footer .datatable-pager{flex:1 1 80%;text-align:right}.ngx-datatable .datatable-footer .datatable-pager .pager,.ngx-datatable .datatable-footer .datatable-pager .pager li{padding:0;margin:0;display:inline-block;list-style:none}.ngx-datatable .datatable-footer .datatable-pager .pager li,.ngx-datatable .datatable-footer .datatable-pager .pager li a{outline:none}.ngx-datatable .datatable-footer .datatable-pager .pager li a{cursor:pointer;display:inline-block}.ngx-datatable .datatable-footer .datatable-pager .pager li.disabled a{cursor:not-allowed}\n"]
    }]
  }], function () {
    return [{
      type: ScrollbarHelper,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.SkipSelf
      }]
    }, {
      type: DimensionsHelper,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.SkipSelf
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.KeyValueDiffers
    }, {
      type: ColumnChangesService
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: ['configuration']
      }]
    }];
  }, {
    targetMarkerTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    rows: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    groupRowsBy: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    groupedRows: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    columns: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    selected: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    scrollbarV: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    scrollbarH: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    rowHeight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    columnMode: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    headerHeight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    footerHeight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    externalPaging: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    externalSorting: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    limit: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    count: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    offset: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    loadingIndicator: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    selectionType: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    reorderable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    swapColumns: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    sortType: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    sorts: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    cssClasses: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    messages: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    rowClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    selectCheck: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    displayCheck: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    groupExpansionDefault: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    trackByProp: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    selectAllRowsOnPage: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    virtualization: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    treeFromRelation: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    treeToRelation: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    summaryRow: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    summaryHeight: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    summaryPosition: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    scroll: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    activate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    select: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    sort: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    page: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    reorder: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    resize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    tableContextmenu: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    treeAction: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    isFixedHeader: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['class.fixed-header']
    }],
    isFixedRow: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['class.fixed-row']
    }],
    isVertScroll: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['class.scroll-vertical']
    }],
    isVirtualized: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['class.virtualized']
    }],
    isHorScroll: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['class.scroll-horz']
    }],
    isSelectable: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['class.selectable']
    }],
    isCheckboxSelection: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['class.checkbox-selection']
    }],
    isCellSelection: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['class.cell-selection']
    }],
    isSingleSelection: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['class.single-selection']
    }],
    isMultiSelection: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['class.multi-selection']
    }],
    isMultiClickSelection: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['class.multi-click-selection']
    }],
    columnTemplates: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
      args: [DataTableColumnDirective]
    }],
    rowDetail: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [DatatableRowDetailDirective]
    }],
    groupHeader: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [DatatableGroupHeaderDirective]
    }],
    footer: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [DatatableFooterDirective]
    }],
    bodyComponent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: [DataTableBodyComponent]
    }],
    headerComponent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: [DataTableHeaderComponent]
    }],
    rowIdentity: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    onWindowResize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['window:resize']
    }]
  });
})();
class NgxDatatableModule {
  /**
   * Configure global configuration via INgxDatatableConfig
   * @param configuration
   */
  static forRoot(configuration) {
    return {
      ngModule: NgxDatatableModule,
      providers: [{
        provide: 'configuration',
        useValue: configuration
      }]
    };
  }
}
NgxDatatableModule.ɵfac = function NgxDatatableModule_Factory(t) {
  return new (t || NgxDatatableModule)();
};
NgxDatatableModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: NgxDatatableModule
});
NgxDatatableModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  providers: [ScrollbarHelper, DimensionsHelper, ColumnChangesService],
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxDatatableModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule],
      providers: [ScrollbarHelper, DimensionsHelper, ColumnChangesService],
      declarations: [DataTableFooterTemplateDirective, VisibilityDirective, DraggableDirective, ResizeableDirective, OrderableDirective, LongPressDirective, ScrollerComponent, DatatableComponent, DataTableColumnDirective, DataTableHeaderComponent, DataTableHeaderCellComponent, DataTableBodyComponent, DataTableFooterComponent, DataTablePagerComponent, ProgressBarComponent, DataTableBodyRowComponent, DataTableRowWrapperComponent, DatatableRowDetailDirective, DatatableGroupHeaderDirective, DatatableRowDetailTemplateDirective, DataTableBodyCellComponent, DataTableSelectionComponent, DataTableColumnHeaderDirective, DataTableColumnCellDirective, DataTableColumnCellTreeToggle, DatatableFooterDirective, DatatableGroupHeaderTemplateDirective, DataTableSummaryRowComponent],
      exports: [DatatableComponent, DatatableRowDetailDirective, DatatableGroupHeaderDirective, DatatableRowDetailTemplateDirective, DataTableColumnDirective, DataTableColumnHeaderDirective, DataTableColumnCellDirective, DataTableColumnCellTreeToggle, DataTableFooterTemplateDirective, DatatableFooterDirective, DataTablePagerComponent, DatatableGroupHeaderTemplateDirective]
    }]
  }], null, null);
})();
var ClickType;
(function (ClickType) {
  ClickType["single"] = "single";
  ClickType["double"] = "double";
})(ClickType || (ClickType = {}));
if (typeof document !== 'undefined' && !document.elementsFromPoint) {
  document.elementsFromPoint = elementsFromPoint;
}
/*tslint:disable*/
/**
 * Polyfill for `elementsFromPoint`
 *
 * https://developer.mozilla.org/en-US/docs/Web/API/Document/elementsFromPoint
 * https://gist.github.com/iddan/54d5d9e58311b0495a91bf06de661380
 * https://gist.github.com/oslego/7265412
 */
function elementsFromPoint(x, y) {
  const elements = [];
  const previousPointerEvents = [];
  let current; // TODO: window.getComputedStyle should be used with inferred type (Element)
  let i;
  let d;
  //if (document === undefined) return elements;
  // get all elements via elementFromPoint, and remove them from hit-testing in order
  while ((current = document.elementFromPoint(x, y)) && elements.indexOf(current) === -1 && current != null) {
    // push the element and its current style
    elements.push(current);
    previousPointerEvents.push({
      value: current.style.getPropertyValue('pointer-events'),
      priority: current.style.getPropertyPriority('pointer-events')
    });
    // add "pointer-events: none", to get to the underlying element
    current.style.setProperty('pointer-events', 'none', 'important');
  }
  // restore the previous pointer-events values
  for (i = previousPointerEvents.length; d = previousPointerEvents[--i];) {
    elements[i].style.setProperty('pointer-events', d.value ? d.value : '', d.priority);
  }
  // return our results
  return elements;
}
/*tslint:enable*/

/*
 * Public API Surface of ngx-datatable
 */

/**
 * Generated bundle index. Do not edit.
 */



/***/ })

}]);
//# sourceMappingURL=src_app_components_dashboard_dashboard_module_ts.d9aa6aa32f5b889e.js.map