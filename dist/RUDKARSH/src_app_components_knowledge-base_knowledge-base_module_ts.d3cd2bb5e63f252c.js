"use strict";
(self["webpackChunkRUDKARSH"] = self["webpackChunkRUDKARSH"] || []).push([["src_app_components_knowledge-base_knowledge-base_module_ts"],{

/***/ 47556:
/*!****************************************************************************!*\
  !*** ./src/app/components/knowledge-base/knowledge-base-routing.module.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KnowledgeBaseRoutingModule: () => (/* binding */ KnowledgeBaseRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _knowledge_base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./knowledge-base.component */ 9945);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);




const routes = [{
  path: '',
  children: [{
    path: '',
    component: _knowledge_base_component__WEBPACK_IMPORTED_MODULE_0__.KnowledgeBaseComponent,
    data: {
      title: "Knowledge Base",
      breadcrumb: ""
    }
  }]
}];
class KnowledgeBaseRoutingModule {
  static #_ = this.ɵfac = function KnowledgeBaseRoutingModule_Factory(t) {
    return new (t || KnowledgeBaseRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: KnowledgeBaseRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](KnowledgeBaseRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 9945:
/*!***********************************************************************!*\
  !*** ./src/app/components/knowledge-base/knowledge-base.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KnowledgeBaseComponent: () => (/* binding */ KnowledgeBaseComponent)
/* harmony export */ });
/* harmony import */ var _shared_data_knowledge_base_knowledge_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/data/knowledge-base/knowledge-base */ 9791);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 36480);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/components/feather-icons/feather-icons.component */ 49177);






function KnowledgeBaseComponent_div_49_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 44)(1, "div", 45)(2, "h6")(3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "app-feather-icons", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "ul", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const kb_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", "archive");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](kb_r2.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", kb_r2.desc, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
  }
}
function KnowledgeBaseComponent_div_51_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "div", 47)(2, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Sorry, We didn't find any articles matching this search");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
}
class KnowledgeBaseComponent {
  constructor(_sanitizer) {
    this._sanitizer = _sanitizer;
    this.Kb = _shared_data_knowledge_base_knowledge_base__WEBPACK_IMPORTED_MODULE_0__.KB_DB.Kb_Category;
  }
  ngOnInit() {}
  static #_ = this.ɵfac = function KnowledgeBaseComponent_Factory(t) {
    return new (t || KnowledgeBaseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.DomSanitizer));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: KnowledgeBaseComponent,
    selectors: [["app-knowledge-base"]],
    decls: 254,
    vars: 15,
    consts: [[1, "container-fluid"], [1, "row"], [1, "col-xl-4", "xl-50", "col-sm-6"], [1, "card", "bg-primary"], [1, "card-body"], [1, "d-flex", "faq-widgets"], [1, "flex-grow-1"], [3, "icon"], [1, "col-xl-4", "xl-100"], [1, "col-sm-12"], [1, "col-sm-6"], [1, "header-faq"], [1, "mb-0"], [1, "form-inline", "search-form", "pull-right", "search-knowledge"], [1, "form-group", "me-0"], ["name", "search", "type", "text", "placeholder", "Search..", 1, "form-control-plaintext", 3, "ngModel", "ngModelChange"], [1, "card"], [1, "card-header"], [1, "row", "browse"], ["class", "col-xl-4 xl-50", 4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "col-lg-12"], [1, "col-xl-3", "xl-50"], [1, "card", "features-faq", "product-box"], [1, "faq-image", "product-img"], ["src", "assets/images/faq/1.jpg", "alt", "", 1, "img-fluid"], [1, "product-hover"], [1, "icon-link"], [1, "icon-import"], [1, "card-footer"], [1, "pull-right"], [1, "fa", "fa-star", "font-primary"], ["src", "assets/images/faq/2.jpg", "alt", "", 1, "img-fluid"], [1, "fa", "fa-star-o", "font-primary"], ["src", "assets/images/faq/3.jpg", "alt", "", 1, "img-fluid"], ["src", "assets/images/faq/4.jpg", "alt", "", 1, "img-fluid"], [1, "fa", "fa-star-half-o", "font-primary"], [1, "col-xl-4", "col-md-6"], [1, "d-flex"], [1, "m-r-30", 3, "icon"], [1, "f-w-600"], [1, "col-xl-4"], [1, "col-xl-12", "col-md-6"], [1, "col-xl-12"], [1, "col-xl-4", "xl-50"], [1, "browse-articles", "browse-bottom"], [3, "innerHTML"], [1, "search-not-found", "knowledge-search-height", "text-center"], [1, ""], ["src", "assets/images/search-not-found.png", 1, "second-search"]],
    template: function KnowledgeBaseComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Knowledge Base");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Ouch found swore much dear conductively hid submissively hatchet vexed far inanimately alongside candidly");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "app-feather-icons", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 2)(13, "div", 3)(14, "div", 4)(15, "div", 5)(16, "div", 6)(17, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Support center");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Dear spryly growled much far jeepers vigilantly less and far hideous and some mannishly less jeepers less and and crud");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "app-feather-icons", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 8)(23, "div", 3)(24, "div", 4)(25, "div", 5)(26, "div", 6)(27, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Articles and news");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "Diabolically somberly astride crass one endearingly blatant depending peculiar antelope piquantly popularly adept");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](31, "app-feather-icons", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 9)(33, "div", 1)(34, "div", 10)(35, "div", 11)(36, "h5", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "Browse articles by category");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "div", 10)(39, "form", 13)(40, "div", 14)(41, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function KnowledgeBaseComponent_Template_input_ngModelChange_41_listener($event) {
          return ctx.term = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "div", 9)(43, "div", 16)(44, "div", 17)(45, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46, "Browse Articles");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "div", 4)(48, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](49, KnowledgeBaseComponent_div_49_Template, 7, 3, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](51, KnowledgeBaseComponent_div_51_Template, 6, 0, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "div", 21)(53, "div", 11)(54, "h5", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55, "Featured articles and tutorials");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "div", 1)(57, "div", 22)(58, "div", 23)(59, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](60, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "div", 26)(62, "ul")(63, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](64, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](66, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "div", 4)(68, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](69, "For ostrich much");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](71, "Some various less crept gecko the jeepers dear forewent far the ouch far a incompetent saucy wherever towards");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "div", 29)(73, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](74, "Dec 15, 2018");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](75, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](76, "i", 31)(77, "i", 31)(78, "i", 31)(79, "i", 31)(80, "i", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](81, "div", 22)(82, "div", 23)(83, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](84, "img", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](85, "div", 26)(86, "ul")(87, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](88, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](89, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](90, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](91, "div", 4)(92, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](93, "Considering far");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](94, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](95, "Kookaburra so hey a less tritely far congratulated this winked some under had unblushing beyond sympathetic");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](96, "div", 29)(97, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](98, "Dec 15, 2018");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](99, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](100, "i", 31)(101, "i", 31)(102, "i", 31)(103, "i", 31)(104, "i", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](105, "div", 22)(106, "div", 23)(107, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](108, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](109, "div", 26)(110, "ul")(111, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](112, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](113, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](114, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](115, "div", 4)(116, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](117, "Despite perversely");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](118, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](119, "Coming merits and was talent enough far. Sir joy northward sportsmen education. Put still any about manor heard");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](120, "div", 29)(121, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](122, "Dec 15, 2018");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](123, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](124, "i", 31)(125, "i", 31)(126, "i", 31)(127, "i", 31)(128, "i", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](129, "div", 22)(130, "div", 23)(131, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](132, "img", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](133, "div", 26)(134, "ul")(135, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](136, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](137, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](138, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](139, "div", 4)(140, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](141, "Helpfully stolidly");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](142, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](143, "Hippopotamus aside while a shrewdly this after kookaburra wow in haphazardly much salmon buoyantly sullen gosh");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](144, "div", 29)(145, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](146, "Dec 15, 2018");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](147, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](148, "i", 31)(149, "i", 31)(150, "i", 31)(151, "i", 31)(152, "i", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](153, "div", 21)(154, "div", 11)(155, "h5", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](156, "Latest articles and videos");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](157, "div", 1)(158, "div", 37)(159, "div", 1)(160, "div", 9)(161, "div", 16)(162, "div", 4)(163, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](164, "app-feather-icons", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](165, "div", 6)(166, "h6", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](167, "Contemptibly bleakly");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](168, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](169, "Speechless far goodness bent as boa crud because vague far koala the that lantern alas sold");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](170, "div", 9)(171, "div", 16)(172, "div", 4)(173, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](174, "app-feather-icons", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](175, "div", 6)(176, "h6", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](177, "Stretched flamboyant");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](178, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](179, "Some when foolhardy dangerous so less less aimlessly along hazardously oversaw much");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](180, "div", 9)(181, "div", 16)(182, "div", 4)(183, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](184, "app-feather-icons", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](185, "div", 6)(186, "h6", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](187, "Bound befell well");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](188, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](189, "Since left before understandably much groomed along burped through dear");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](190, "div", 37)(191, "div", 1)(192, "div", 9)(193, "div", 16)(194, "div", 4)(195, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](196, "app-feather-icons", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](197, "div", 6)(198, "h6", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](199, "Blamelessly wow hence");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](200, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](201, "A without walking some objective hiccupped some this overlay immorally crud and gosh");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](202, "div", 9)(203, "div", 16)(204, "div", 4)(205, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](206, "app-feather-icons", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](207, "div", 6)(208, "h6", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](209, "Walking away fallaciously");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](210, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](211, "Ouch licentiously lackadaisical crud together began gregarious below near darn goodness");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](212, "div", 9)(213, "div", 16)(214, "div", 4)(215, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](216, "app-feather-icons", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](217, "div", 6)(218, "h6", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](219, "Porcupine strict nodded");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](220, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](221, "Left extravagant leered crab repaid outgrew said knelt hello astride within oh disbanded");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](222, "div", 41)(223, "div", 1)(224, "div", 42)(225, "div", 16)(226, "div", 4)(227, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](228, "app-feather-icons", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](229, "div", 6)(230, "h6", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](231, "Manatee broadcast");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](232, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](233, "Some where indecently manta floated raptly youthful unlike swept dragonfly pulled moth");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](234, "div", 42)(235, "div", 16)(236, "div", 4)(237, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](238, "app-feather-icons", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](239, "div", 6)(240, "h6", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](241, "Ducked ravenously dear");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](242, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](243, "Reran sincere said monkey one slapped jeepers rubbed fleetly incongruously due yet llama");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](244, "div", 43)(245, "div", 16)(246, "div", 4)(247, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](248, "app-feather-icons", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](249, "div", 6)(250, "h6", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](251, "Porcupine strict nodded");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](252, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](253, "Left extravagant leered crab repaid outgrew said knelt hello astride within oh disbanded");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", "book-open");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", "aperture");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", "file-text");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.term);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.Kb);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.Kb.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](113);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", "codepen");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", "codepen");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", "codepen");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", "file-text");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", "file-text");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", "file-text");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", "youtube");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", "youtube");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", "youtube");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgForm, _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_1__.FeatherIconsComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 1641:
/*!********************************************************************!*\
  !*** ./src/app/components/knowledge-base/knowledge-base.module.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KnowledgeBaseModule: () => (/* binding */ KnowledgeBaseModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/shared.module */ 56208);
/* harmony import */ var _knowledge_base_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./knowledge-base-routing.module */ 47556);
/* harmony import */ var _knowledge_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./knowledge-base.component */ 9945);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 61699);






class KnowledgeBaseModule {
  static #_ = this.ɵfac = function KnowledgeBaseModule_Factory(t) {
    return new (t || KnowledgeBaseModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
    type: KnowledgeBaseModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _knowledge_base_routing_module__WEBPACK_IMPORTED_MODULE_1__.KnowledgeBaseRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](KnowledgeBaseModule, {
    declarations: [_knowledge_base_component__WEBPACK_IMPORTED_MODULE_2__.KnowledgeBaseComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _knowledge_base_routing_module__WEBPACK_IMPORTED_MODULE_1__.KnowledgeBaseRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule]
  });
})();

/***/ }),

/***/ 9791:
/*!**************************************************************!*\
  !*** ./src/app/shared/data/knowledge-base/knowledge-base.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KB_DB: () => (/* binding */ KB_DB)
/* harmony export */ });
class KB_DB {
  constructor(_sanitizer) {
    this._sanitizer = _sanitizer;
  }
  static #_ = this.Kb_Category = [{
    title: 'Quick Questions are answered',
    desc: `
                <li><a  href="javascript:void(0)"><span><i class="icon-file"></i></span><span>Lorem Ipsum is simply dummy text of the printing</span></a></li>
                <li><a  href="javascript:void(0)"><span><i class="icon-file"></i></span><span>Lorem Ipsum has been the industry's standard dummy </span><span class="badge badge-primary pull-right">New</span></a></li>
                <li><a  href="javascript:void(0)"><span><i class="icon-file"></i></span><span>When an unknown printer took a galley </span></a></li>
                <li><a  href="javascript:void(0)"><span><i class="icon-file"></i></span><span>But also the leap into electronic typesetting, </span></a></li>
                <li><a  href="javascript:void(0)"><span><i class="icon-arrow-right"></i></span><span>See More (40)</span></a></li>`
  }, {
    title: 'Integrating WordPress with Your Website',
    desc: `
                <li><a  href="javascript:void(0)"><span><i class="icon-file"></i></span><span>It was popularised in the 1960s with the release</span><span class="badge badge-primary pull-right">Review</span></a></li>
                <li><a  href="javascript:void(0)"><span><i class="icon-file"></i></span><span>Etraset sheets containing Lorem Ipsum passages</span></a></li>
                <li><a  href="javascript:void(0)"><span><i class="icon-file"></i></span><span>Desktop publishing software like Aldus PageMaker </span><span class="badge badge-primary pull-right">Articles</span></a></li>
                <li><a  href="javascript:void(0)"><span><i class="icon-file"></i></span><span>Making this the first true generator on the Internet.</span></a></li>
                <li><a  href="javascript:void(0)"><span><i class="icon-arrow-right"></i></span><span>See More (90)</span></a></li>`
  }, {
    title: 'WordPress Site Maintenance',
    desc: `
                <li><a  href="javascript:void(0)"><span><i class="icon-file"></i></span><span>The point of using Lorem Ipsum is that it has a more-or-less </span></a></li>
                <li><a  href="javascript:void(0)"><span><i class="icon-file"></i></span><span>Normal distribution of letters, as opposed to using </span><span class="badge badge-primary pull-right">Closed</span></a></li>
                <li><a  href="javascript:void(0)"><span><i class="icon-file"></i></span><span>Lorem Ipsum, you need to be sure there isn't anything  </span></a></li>
                <li><a  href="javascript:void(0)"><span><i class="icon-file"></i></span><span>Repetition, injected humour, or non-characteristic words etc</span></a></li>
                <li><a  href="javascript:void(0)"><span><i class="icon-arrow-right"></i></span><span>See More (50)</span></a></li>`
  }, {
    title: ' Meta Tags in WordPress',
    desc: `
                <li><a  href="javascript:void(0)"><span><i class="icon-file"></i></span><span>Nemo enim ipsam voluptatem quia voluptas sit  </span><span class="badge badge-primary pull-right">Popular</span></a></li>
                <li><a  href="javascript:void(0)"><span><i class="icon-file"></i></span><span>Ipsum quia dolor sit amet, consectetur</span></a></li>
                <li><a  href="javascript:void(0)"><span><i class="icon-file"></i></span><span>Sed quia non numquam eius modi tempora incidunt</span></a></li>
                <li><a  href="javascript:void(0)"><span><i class="icon-file"></i></span><span>Lorem eum fugiat quo voluptas nulla pariatu</span></a></li>
                <li><a  href="javascript:void(0)"><span><i class="icon-arrow-right"></i></span><span>See More (90)</span></a></li>`
  }, {
    title: 'WordPress in Your Language',
    desc: `
                <li><a  href="javascript:void(0)"><span><i class="icon-file"></i></span><span>Desktop publishing software like Aldus PageMaker</span></a></li>
                <li><a  href="javascript:void(0)"><span><i class="icon-file"></i></span><span>Etraset sheets containing Lorem Ipsum passages</span></a></li>
                <li><a  href="javascript:void(0)"><span><i class="icon-file"></i></span><span>It was popularised in the 1960s with the release</span></a></li>
                <li><a  href="javascript:void(0)"><span><i class="icon-file"></i></span><span>Making this the first true generator on the Internet</span><span class="badge badge-primary pull-right">Closed</span></a></li>
                <li><a  href="javascript:void(0)"><span><i class="icon-arrow-right"></i></span><span>See More (50)</span></a></li>`
  }, {
    title: 'Know Your Sources',
    desc: `
                <li><a  href="javascript:void(0)"><span><i class="icon-file"></i></span><span>The point of using Lorem Ipsum </span></a></li>
                <li><a  href="javascript:void(0)"><span><i class="icon-file"></i></span><span>It has a more-or-less normal distribution of letters</span></a></li>
                <li><a  href="javascript:void(0)"><span><i class="icon-file"></i></span><span>Et harum quidem rerum facilis est et expedita</span><span class="badge badge-primary pull-right">Article</span></a></li>
                <li><a  href="javascript:void(0)"><span><i class="icon-file"></i></span><span>Nam libero tempore, cum soluta nobis est eligendi </span></a></li>
                <li><a  href="javascript:void(0)"><span><i class="icon-arrow-right"></i></span><span>See More (26)</span></a></li>`
  }, {
    title: 'Validating a Website',
    desc: `
                <li><a  href="javascript:void(0)"><span><i class="icon-file"></i></span><span>When our power of choice is untrammelled </span><span class="badge badge-primary pull-right">Review</span></a></li>
                <li><a  href="javascript:void(0)"><span><i class="icon-file"></i></span><span>It will frequently occur that pleasures  </span></a></li>
                <li><a  href="javascript:void(0)"><span><i class="icon-file"></i></span><span>who fail in their duty through weakness </span><span class="badge badge-primary pull-right">Closed</span></a></li>
                <li><a  href="javascript:void(0)"><span><i class="icon-file"></i></span><span> At vero eos et accusamus et iusto </span></a></li>
                <li><a  href="javascript:void(0)"><span><i class="icon-arrow-right"></i></span><span>See More (10)</span></a></li>`
  }, {
    title: 'Quick Questions are answered',
    desc: `
                <li><a  href="javascript:void(0)"><span><i class="icon-file"></i></span><span>Quis autem vel eum iure reprehenderit  </span></a></li>
                <li><a  href="javascript:void(0)"><span><i class="icon-file"></i></span><span>Ducimus  blanditiis praesentium voluptatum</span><span class="badge badge-primary pull-right">Popular</span></a></li>
                <li><a  href="javascript:void(0)"><span><i class="icon-file"></i></span><span>Omnis voluptas assumenda est</span><span class="badge badge-primary pull-right">Review</span></a></li>
                <li><a  href="javascript:void(0)"><span><i class="icon-file"></i></span><span>Produces no resultant pleasure</span></a></li>
                <li><a  href="javascript:void(0)"><span><i class="icon-arrow-right"></i></span><span>See More (21)</span></a></li>`
  }, {
    title: 'Integrating WordPress with Your Website',
    desc: `
                <li><a  href="javascript:void(0)"><span><i class="icon-file"></i></span><span>Lorem Ipsum passage, and going through</span></a></li>
                <li><a  href="javascript:void(0)"><span><i class="icon-file"></i></span><span>The first line of Lorem Ipsum,  Lorem ipsum </span></a></li>
                <li><a  href="javascript:void(0)"><span><i class="icon-file"></i></span><span>Thus comes from a line in section</span></a></li>
                <li><a  href="javascript:void(0)"><span><i class="icon-file"></i></span><span>First true generator on the Internet</span><span class="badge badge-primary pull-right">On hold</span></a></li>
                <li><a  href="javascript:void(0)"><span><i class="icon-arrow-right"></i></span><span>See More (34)</span></a></li>`
  }];
}

/***/ })

}]);
//# sourceMappingURL=src_app_components_knowledge-base_knowledge-base_module_ts.d3cd2bb5e63f252c.js.map