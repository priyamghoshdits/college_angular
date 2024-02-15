"use strict";
(self["webpackChunkRUDKARSH"] = self["webpackChunkRUDKARSH"] || []).push([["src_app_components_social-app_social-app_module_ts"],{

/***/ 62259:
/*!********************************************************************************!*\
  !*** ./src/app/components/social-app/image-gallery/image-gallery.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ImageGalleryComponent: () => (/* binding */ ImageGalleryComponent)
/* harmony export */ });
/* harmony import */ var ng_gallery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-gallery */ 60977);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var ng_gallery_lightbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-gallery/lightbox */ 23050);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 26575);





function ImageGalleryComponent_figure_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "figure", 4)(1, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7)(4, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Portfolio Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const img_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", img_r1.srcUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
  }
}
class ImageGalleryComponent {
  constructor(gallery, lightbox) {
    this.gallery = gallery;
    this.lightbox = lightbox;
    this.imageData = data;
  }
  ngOnInit() {
    /** Basic Gallery Example */
    // Creat gallery items
    this.items = this.imageData.map(item => new ng_gallery__WEBPACK_IMPORTED_MODULE_1__.ImageItem({
      src: item.srcUrl,
      thumb: item.previewUrl
    }));
    /** Lightbox Example */
    // Get a lightbox gallery ref
    const lightboxRef = this.gallery.ref('lightbox');
    // Add custom gallery config to the lightbox (optional)
    lightboxRef.setConfig({
      imageSize: ng_gallery__WEBPACK_IMPORTED_MODULE_1__.ImageSize.Cover,
      thumbPosition: ng_gallery__WEBPACK_IMPORTED_MODULE_1__.ThumbnailsPosition.Top
    });
    // Load items into the lightbox gallery ref
    lightboxRef.load(this.items);
  }
  static #_ = this.ɵfac = function ImageGalleryComponent_Factory(t) {
    return new (t || ImageGalleryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_gallery__WEBPACK_IMPORTED_MODULE_1__.Gallery), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_gallery_lightbox__WEBPACK_IMPORTED_MODULE_2__.Lightbox));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ImageGalleryComponent,
    selectors: [["app-image-gallery"]],
    decls: 4,
    vars: 1,
    consts: [["id", "aniimated-thumbnials", 1, "my-gallery", "row", "gallery-with-description"], [1, "my-app-custom-plain-container-with-desc", "row"], ["itemscope", "", "gallerize", "", 1, "my-gallery", "card-body", "row", "gallery-with-description"], ["class", "col-xl-3 col-sm-6", "itemprop", "associatedMedia", 4, "ngFor", "ngForOf"], ["itemprop", "associatedMedia", 1, "col-xl-3", "col-sm-6"], ["href", "javascript:void(0)", "itemprop", "contentUrl"], [1, "img-fluid", 3, "src"], [1, "caption"]],
    template: function ImageGalleryComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ImageGalleryComponent_figure_3_Template, 8, 1, "figure", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.imageData);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, ng_gallery_lightbox__WEBPACK_IMPORTED_MODULE_2__.GallerizeDirective],
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"],
    encapsulation: 2
  });
}
const data = [{
  srcUrl: 'assets/images/lightgallry/01.jpg',
  previewUrl: 'assets/images/lightgallry/01.jpg'
}, {
  srcUrl: 'assets/images/lightgallry/02.jpg',
  previewUrl: 'assets/images/lightgallry/02.jpg'
}, {
  srcUrl: 'assets/images/lightgallry/03.jpg',
  previewUrl: 'assets/images/lightgallry/03.jpg'
}, {
  srcUrl: 'assets/images/lightgallry/04.jpg',
  previewUrl: 'assets/images/lightgallry/04.jpg'
}, {
  srcUrl: 'assets/images/lightgallry/05.jpg',
  previewUrl: 'assets/images/lightgallry/05.jpg'
}, {
  srcUrl: 'assets/images/lightgallry/06.jpg',
  previewUrl: 'assets/images/lightgallry/06.jpg'
}, {
  srcUrl: 'assets/images/lightgallry/07.jpg',
  previewUrl: 'assets/images/lightgallry/07.jpg'
}, {
  srcUrl: 'assets/images/lightgallry/08.jpg',
  previewUrl: 'assets/images/lightgallry/08.jpg'
}, {
  srcUrl: 'assets/images/lightgallry/09.jpg',
  previewUrl: 'assets/images/lightgallry/09.jpg'
}, {
  srcUrl: 'assets/images/lightgallry/010.jpg',
  previewUrl: 'assets/images/lightgallry/010.jpg'
}, {
  srcUrl: 'assets/images/lightgallry/011.jpg',
  previewUrl: 'assets/images/lightgallry/011.jpg'
}, {
  srcUrl: 'assets/images/lightgallry/012.jpg',
  previewUrl: 'assets/images/lightgallry/012.jpg'
}];

/***/ }),

/***/ 92038:
/*!********************************************************************!*\
  !*** ./src/app/components/social-app/social-app-routing.module.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SocialAppRoutingModule: () => (/* binding */ SocialAppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _social_app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./social-app.component */ 32893);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);




const routes = [{
  path: '',
  children: [{
    path: '',
    component: _social_app_component__WEBPACK_IMPORTED_MODULE_0__.SocialAppComponent,
    data: {
      title: "Social App",
      breadcrumb: ""
    }
  }]
}];
class SocialAppRoutingModule {
  static #_ = this.ɵfac = function SocialAppRoutingModule_Factory(t) {
    return new (t || SocialAppRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: SocialAppRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SocialAppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 32893:
/*!***************************************************************!*\
  !*** ./src/app/components/social-app/social-app.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SocialAppComponent: () => (/* binding */ SocialAppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 76101);
/* harmony import */ var _image_gallery_image_gallery_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./image-gallery/image-gallery.component */ 62259);




function SocialAppComponent_ng_template_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 34)(1, "div", 2)(2, "div", 35)(3, "div", 36)(4, "div", 2)(5, "div", 37)(6, "div", 38)(7, "div", 39)(8, "div", 40)(9, "h5", 41)(10, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "My Profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 43)(13, "div", 44)(14, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "img", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 47)(17, "h6", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "My Page");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "span", 49)(20, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "i", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Messages");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "9");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "span", 49)(27, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "i", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Notification");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "9");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 54)(34, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Likes");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "View");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 57)(39, "h5")(40, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "i", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, " 884");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "35 New Likes This Week");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 60)(46, "ul")(47, "li", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](48, "img", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "li", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](50, "img", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "li", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](52, "img", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "li", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](54, "img", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "li", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](56, "img", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "li", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](58, "img", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div", 37)(60, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](61, "img", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "div", 37)(63, "div", 38)(64, "div", 39)(65, "div", 40)(66, "h5", 41)(67, "button", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "Mutual Friends");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "div", 71)(70, "div", 72)(71, "form")(72, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](73, "input", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](75, "img", 74)(76, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "div", 47)(78, "span", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](79, "Bucky Barnes");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81, "winter@gmail.com");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](83, "img", 77)(84, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "div", 47)(86, "span", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](87, "Sarah Loren");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](89, "barnes@gmail.com");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](91, "img", 79)(92, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "div", 47)(94, "span", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](95, "Jason Borne");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](97, "jasonb@gmail.com");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](99, "img", 81)(100, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "div", 47)(102, "span", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](103, "Comeren Diaz");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](105, "comere@gmail.com");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](107, "img", 82)(108, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "div", 47)(110, "span", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](111, "Andew Jon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](113, "andrewj@gmail.com");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](115, "img", 83)(116, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](117, "div", 47)(118, "span", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](119, "Johny Waston");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](120, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](121, "johny@gmail.com");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](123, "img", 84)(124, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "div", 47)(126, "span", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](127, "Johny William");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](128, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](129, "johnyw@gmail.com");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](130, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](131, "img", 74)(132, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](133, "div", 47)(134, "span", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](135, "Bucky Barnes");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](136, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](137, "winter@gmail.com");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](138, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](139, "img", 77)(140, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](141, "div", 47)(142, "span", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](143, "Sarah Loren");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](144, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](145, "barnes@gmail.com");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](146, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](147, "img", 79)(148, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](149, "div", 47)(150, "span", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](151, "Jason Borne");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](152, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](153, "jasonb@gmail.com");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](154, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](155, "img", 81)(156, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](157, "div", 47)(158, "span", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](159, "Comeren Diaz");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](160, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](161, "comere@gmail.com");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](162, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](163, "img", 82)(164, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](165, "div", 47)(166, "span", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](167, "Andew Jon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](168, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](169, "andrewj@gmail.com");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](170, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](171, "img", 83)(172, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](173, "div", 47)(174, "span", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](175, "Johny Waston");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](176, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](177, "johny@gmail.com");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](178, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](179, "img", 84)(180, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](181, "div", 47)(182, "span", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](183, "Johny William");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](184, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](185, "johnyw@gmail.com");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](186, "div", 37)(187, "div", 38)(188, "div", 39)(189, "div", 40)(190, "h5", 41)(191, "button", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](192, "Activity Feed");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](193, "div", 86)(194, "div", 72)(195, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](196, "img", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](197, "div", 47)(198, "span", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](199, "Andew Jon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](200, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](201, "Commented on Shaun Park's ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](202, "a", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](203, "Photo");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](204, "span", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](205, "20 min Ago");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](206, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](207, "img", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](208, "div", 47)(209, "span", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](210, "Johny Waston");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](211, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](212, "Commented on Shaun Park's ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](213, "a", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](214, "Photo");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](215, "span", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](216, "1 hour Ago");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](217, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](218, "img", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](219, "div", 47)(220, "span", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](221, "Comeren Diaz");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](222, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](223, "Commented on Shaun Park's ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](224, "a", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](225, "Photo");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](226, "span", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](227, "1 days Ago");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](228, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](229, "img", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](230, "div", 47)(231, "span", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](232, "Sarah Loren");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](233, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](234, "Commented on Shaun Park's ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](235, "a", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](236, "Photo");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](237, "span", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](238, "2 days Ago");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](239, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](240, "img", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](241, "div", 47)(242, "span", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](243, "Johny Waston");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](244, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](245, "Commented on Shaun Park's ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](246, "a", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](247, "Photo");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](248, "span", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](249, "5 days Ago");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](250, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](251, "img", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](252, "div", 47)(253, "span", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](254, "Comeren Diaz");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](255, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](256, "Commented on Shaun Park's ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](257, "a", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](258, "Photo");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](259, "span", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](260, "6 days Ago");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](261, "div", 91)(262, "div", 2)(263, "div", 92)(264, "div", 68)(265, "div", 93)(266, "div", 94)(267, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](268, "img", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](269, "div", 97)(270, "h6", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](271, "ELANA");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](272, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](273, "January, 12,2019");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](274, "span", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](275, "i", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](276, "img", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](277, "div", 102)(278, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](279, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed urna in justo euismod condimentum. Fusce placerat enim et odio molestie sagittis. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](280, "div", 103)(281, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](282, "i", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](283, "span", 104)(284, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](285, "20 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](286, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](287, "i", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](288, "span", 104)(289, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](290, "10 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](291, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](292, "i", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](293, "div", 106)(294, "div", 107)(295, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](296, "img", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](297, "div", 47)(298, "span", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](299, "Jason Borne ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](300, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](301, "1 Year Ago ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](302, "i", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](303, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](304, "we are doing dance and singing songs, please vote our post which is very good for all young peoples");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](305, "div", 111)(306, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](307, "img", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](308, "div", 47)(309, "span", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](310, "Alexendra Dhadio ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](311, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](312, "1 Month Ago ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](313, "i", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](314, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](315, "ohh yeah very good car and its features i will surely vote for it ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](316, "div", 111)(317, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](318, "img", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](319, "div", 47)(320, "span", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](321, "Olivia Jon ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](322, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](323, "15 Days Ago ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](324, "i", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](325, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](326, "ohh yeah very good car and its features i will surely vote for it ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](327, "div", 107)(328, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](329, "img", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](330, "div", 47)(331, "span", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](332, "Issa Bell ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](333, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](334, "1 Year Ago ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](335, "i", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](336, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](337, "we are doing dance and singing songs, please vote our post which is very good for all young peoples");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](338, "div", 59)(339, "a", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](340, "More Commnets");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](341, "div", 114)(342, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](343, "img", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](344, "div", 115)(345, "div", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](346, "input", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](347, "div", 118)(348, "button", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](349, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](350, "div", 92)(351, "div", 68)(352, "div", 93)(353, "div", 94)(354, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](355, "img", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](356, "div", 97)(357, "h6", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](358, "ELANA");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](359, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](360, "January, 12,2019");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](361, "span", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](362, "i", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](363, "img", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](364, "div", 102)(365, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](366, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed urna in justo euismod condimentum. Fusce placerat enim et odio molestie sagittis. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](367, "div", 103)(368, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](369, "i", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](370, "span", 104)(371, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](372, "20 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](373, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](374, "i", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](375, "span", 104)(376, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](377, "10 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](378, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](379, "i", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](380, "div", 106)(381, "div", 107)(382, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](383, "img", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](384, "div", 47)(385, "span", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](386, "Jason Borne ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](387, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](388, "1 Year Ago ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](389, "i", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](390, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](391, "we are doing dance and singing songs, please vote our post which is very good for all young peoples");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](392, "div", 107)(393, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](394, "img", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](395, "div", 47)(396, "span", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](397, "Issa Bell ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](398, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](399, "1 Year Ago ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](400, "i", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](401, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](402, "we are doing dance and singing songs, please vote our post which is very good for all young peoples");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](403, "div", 59)(404, "a", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](405, "More Commnets");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](406, "div", 114)(407, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](408, "img", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](409, "div", 115)(410, "div", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](411, "input", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](412, "div", 118)(413, "button", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](414, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](415, "div", 121)(416, "div", 122)(417, "div", 2)(418, "div", 123)(419, "div", 38)(420, "div", 39)(421, "div", 40)(422, "h5", 41)(423, "button", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](424, "Profile Intro");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](425, "div", 125)(426, "div", 126)(427, "span", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](428, "About Me :");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](429, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](430, " Hi, I\u2019m elana, I\u2019m 30 and I work as a web Designer for the \u201CDaydreams\u201D Agency in Pier 56. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](431, "span", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](432, "Favourite TV shows :");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](433, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](434, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim modi dolor ut maiores recusandae voluptas quod ea error cupiditate libero.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](435, "span", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](436, "Favourite Music Bands :");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](437, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](438, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim modi dolor ut maiores recusandae voluptas quod ea error cupiditate libero.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](439, "div", 127)(440, "span", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](441, "Social Networks");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](442, "button", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](443, "i", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](444, "Facebook");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](445, "button", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](446, "i", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](447, "Twitter");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](448, "button", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](449, "i", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](450, "Dribbble");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](451, "div", 123)(452, "div", 38)(453, "div", 39)(454, "div", 40)(455, "h5", 41)(456, "button", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](457, "Followers");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](458, "div", 135)(459, "div", 136)(460, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](461, "img", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](462, "div", 47)(463, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](464, "Bucky Barnes");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](465, "a", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](466, "Add Friend");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](467, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](468, "img", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](469, "div", 47)(470, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](471, "Sarah Loren");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](472, "a", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](473, "Add Friend");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](474, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](475, "img", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](476, "div", 47)(477, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](478, "Jason Borne");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](479, "a", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](480, "Add Friend");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](481, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](482, "img", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](483, "div", 47)(484, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](485, "Comeren Diaz");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](486, "a", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](487, "Add Friend");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](488, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](489, "img", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](490, "div", 47)(491, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](492, "Andew Jon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](493, "a", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](494, "Add Friend");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](495, "div", 123)(496, "div", 38)(497, "div", 39)(498, "div", 40)(499, "h5", 41)(500, "button", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](501, "Followings");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](502, "div", 141)(503, "div", 136)(504, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](505, "img", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](506, "div", 47)(507, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](508, "Sarah Loren");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](509, "a", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](510, "Add Friend");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](511, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](512, "img", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](513, "div", 47)(514, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](515, "Bucky Barnes");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](516, "a", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](517, "Add Friend");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](518, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](519, "img", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](520, "div", 47)(521, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](522, "Comeren Diaz");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](523, "a", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](524, "Add Friend");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](525, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](526, "img", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](527, "div", 47)(528, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](529, "Jason Borne");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](530, "a", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](531, "Add Friend");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](532, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](533, "img", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](534, "div", 47)(535, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](536, "Andew Jon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](537, "a", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](538, "Add Friend");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](539, "div", 123)(540, "div", 38)(541, "div", 39)(542, "div", 40)(543, "h5", 41)(544, "button", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](545, "Latest Photos");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](546, "div", 143)(547, "div", 144)(548, "ul", 59)(549, "li")(550, "div", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](551, "img", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](552, "li")(553, "div", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](554, "img", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](555, "li")(556, "div", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](557, "img", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](558, "li")(559, "div", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](560, "img", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](561, "li")(562, "div", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](563, "img", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](564, "li")(565, "div", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](566, "img", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](567, "li")(568, "div", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](569, "img", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](570, "li")(571, "div", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](572, "img", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](573, "li")(574, "div", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](575, "img", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](576, "div", 123)(577, "div", 38)(578, "div", 39)(579, "div", 40)(580, "h5", 41)(581, "button", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](582, "Friends");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](583, "div", 156)(584, "div", 157)(585, "div", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](586, "img", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](587, "div", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](588, "img", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](589, "div", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](590, "img", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](591, "div", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](592, "img", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](593, "div", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](594, "img", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](595, "div", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](596, "img", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](597, "div", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](598, "img", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](599, "div", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](600, "img", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](601, "div", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](602, "img", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](603, "div", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](604, "img", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](605, "div", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](606, "img", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](607, "div", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](608, "img", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](609, "div", 123)(610, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](611, "img", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("closeOthers", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("collapsed", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("closeOthers", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("collapsed", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](123);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("closeOthers", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("collapsed", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](231);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("closeOthers", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("collapsed", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("closeOthers", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("collapsed", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("closeOthers", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("collapsed", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("closeOthers", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("collapsed", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("closeOthers", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("collapsed", false);
  }
}
function SocialAppComponent_ng_template_32_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 47)(3, "h6", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "My Page");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 49)(6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "i", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Messages");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "9");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span", 49)(13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "i", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Notification");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "9");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 54)(20, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Likes");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "View");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 57)(25, "h5")(26, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "i", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, " 884");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "35 New Likes This Week");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 60)(32, "ul")(33, "li", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "img", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "li", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "img", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "li", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "img", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "li", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "img", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "li", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "img", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "li", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](44, "img", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
}
function SocialAppComponent_ng_template_32_ng_template_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form")(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "input", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 74)(5, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 47)(7, "span", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Bucky Barnes");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "winter@gmail.com");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "img", 77)(13, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 47)(15, "span", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Sarah Loren");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "barnes@gmail.com");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "img", 79)(21, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 47)(23, "span", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Jason Borne");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "jasonb@gmail.com");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "img", 81)(29, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 47)(31, "span", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Comeren Diaz");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "comere@gmail.com");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "img", 82)(37, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 47)(39, "span", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Andew Jon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "andrewj@gmail.com");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](44, "img", 83)(45, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 47)(47, "span", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Johny Waston");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "johny@gmail.com");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](52, "img", 84)(53, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 47)(55, "span", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "Johny William");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "johnyw@gmail.com");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](60, "img", 74)(61, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "div", 47)(63, "span", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, "Bucky Barnes");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, "winter@gmail.com");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](68, "img", 77)(69, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "div", 47)(71, "span", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, "Sarah Loren");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, "barnes@gmail.com");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](76, "img", 79)(77, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "div", 47)(79, "span", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80, "Jason Borne");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82, "jasonb@gmail.com");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](84, "img", 81)(85, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "div", 47)(87, "span", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](88, "Comeren Diaz");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](90, "comere@gmail.com");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](92, "img", 82)(93, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "div", 47)(95, "span", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](96, "Andew Jon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](98, "andrewj@gmail.com");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](100, "img", 83)(101, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "div", 47)(103, "span", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](104, "Johny Waston");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](106, "johny@gmail.com");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](108, "img", 84)(109, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "div", 47)(111, "span", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](112, "Johny William");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](113, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](114, "johnyw@gmail.com");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
}
function SocialAppComponent_ng_template_32_ng_template_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 47)(3, "span", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Andew Jon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Commented on Shaun Park's ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "a", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Photo");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "20 min Ago");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "img", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 47)(14, "span", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Johny Waston");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Commented on Shaun Park's ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "a", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Photo");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "span", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "1 hour Ago");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "img", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 47)(25, "span", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Comeren Diaz");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Commented on Shaun Park's ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "a", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Photo");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "span", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "1 days Ago");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "img", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 47)(36, "span", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Sarah Loren");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Commented on Shaun Park's ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "a", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Photo");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "span", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "2 days Ago");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](45, "img", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 47)(47, "span", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Johny Waston");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Commented on Shaun Park's ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "a", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "Photo");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "span", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "5 days Ago");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](56, "img", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 47)(58, "span", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "Comeren Diaz");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "Commented on Shaun Park's ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "a", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "Photo");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "span", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "6 days Ago");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
}
function SocialAppComponent_ng_template_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 171)(1, "div", 2)(2, "div", 35)(3, "div", 172)(4, "div", 2)(5, "div", 37)(6, "div", 38)(7, "div", 39)(8, "div", 40)(9, "h5", 41)(10, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "My Profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 43)(13, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, SocialAppComponent_ng_template_32_ng_template_14_Template, 45, 0, "ng-template");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 37)(16, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "img", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 37)(19, "div", 38)(20, "div", 39)(21, "div", 40)(22, "h5", 41)(23, "button", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Mutual Friends");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 71)(26, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, SocialAppComponent_ng_template_32_ng_template_27_Template, 115, 0, "ng-template");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 37)(29, "div", 38)(30, "div", 39)(31, "div", 40)(32, "h5", 41)(33, "button", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Activity Feed");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 86)(36, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](37, SocialAppComponent_ng_template_32_ng_template_37_Template, 66, 0, "ng-template");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 91)(39, "div", 2)(40, "div", 92)(41, "div", 68)(42, "div", 173)(43, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Pepole You May Know");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 174)(46, "div", 175)(47, "ul")(48, "li")(49, "div", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](50, "img", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "span", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "Jason Borne");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "button", 179);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "Add Friend");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "li")(56, "div", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](57, "img", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "span", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "Anna Mull");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "button", 179);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "Add Friend");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "li")(63, "div", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](64, "img", 181);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "span", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, "Dion Cast");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "button", 179);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "Add Friend");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "li")(70, "div", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](71, "img", 182);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "span", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "Karlene Lex");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "button", 179);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, "Add Friend");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "li")(77, "div", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](78, "img", 183);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "span", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80, "Vella Chism");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "button", 179);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82, "Add Friend");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "li")(84, "div", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](85, "img", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "span", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](87, "Wai Schalk");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "button", 179);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](89, "Add Friend");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "li")(91, "div", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](92, "img", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "span", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](94, "Karlene Lex");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "button", 179);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](96, "Add Friend");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "div", 92)(98, "div", 68)(99, "div", 186)(100, "h5")(101, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](102, "Hobbies and Interests");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "span", 187);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](104, "i", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "div", 93)(106, "div", 188)(107, "div", 189)(108, "div", 190)(109, "span", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](110, "Hobbies:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](112, "I like to ride the bike to work, swimming, and working out. I also like reading design magazines, go to museums, and binge watching a good tv show while it\u2019s raining outside.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](113, "div", 189)(114, "div", 191)(115, "span", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](116, "Favourite Music Bands / Artists:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](117, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](118, "Iron Maid, DC/AC, Megablow, The Ill, Kung Fighters, System of a Revenge.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](119, "div", 188)(120, "div", 189)(121, "div", 190)(122, "span", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](123, "Favourite TV Shows:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](124, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](125, "Breaking Good, RedDevil, People of Interest, The Running Dead, Found, American Guy.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](126, "div", 189)(127, "div", 191)(128, "span", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](129, "Favourite Books:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](130, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](131, "The Crime of the Century, Egiptian Mythology 101, The Scarred Wizard, Lord of the Wings, Amongst Gods, The Oracle, A Tale of Air and Water.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](132, "div", 188)(133, "div", 189)(134, "div", 190)(135, "span", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](136, "Favourite Movies:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](137, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](138, "Idiocratic, The Scarred Wizard and the Fire Crown, Crime Squad Ferrum Man.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](139, "div", 189)(140, "div", 191)(141, "span", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](142, "Favourite Writers:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](143, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](144, "Martin T. Georgeston, Jhonathan R. Token, Ivana Rowle, Alexandr Platt, Marcus Roth.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](145, "div", 188)(146, "div", 189)(147, "div", 190)(148, "span", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](149, "Favourite Games:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](150, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](151, "The First of Us, Assassin\u2019s Squad, Dark Assylum, NMAK16, Last Cause 4, Grand Snatch Auto.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](152, "div", 189)(153, "div", 191)(154, "span", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](155, "Other Interests:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](156, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](157, "Swimming, Surfing, Scuba Diving, Anime, Photography, Tattoos, Street Art.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](158, "div", 92)(159, "div", 68)(160, "div", 186)(161, "h5")(162, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](163, "Education and Employement");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](164, "span", 187);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](165, "i", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](166, "div", 93)(167, "div", 188)(168, "div", 189)(169, "div", 190)(170, "span", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](171, "The New College of Design");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](172, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](173, "2001 - 2006");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](174, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](175, "Breaking Good, RedDevil, People of Interest, The Running Dead, Found, American Guy.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](176, "div", 189)(177, "div", 191)(178, "span", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](179, "Digital Design Intern");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](180, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](181, "2006-2008");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](182, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](183, "Digital Design Intern for the \u201CMultimedz\u201D agency. Was in charge of the communication with the clients.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](184, "div", 188)(185, "div", 189)(186, "div", 190)(187, "span", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](188, "Rembrandt Institute");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](189, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](190, "2008");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](191, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](192, "Five months Digital Illustration course. Professor: Leonardo Stagg.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](193, "div", 189)(194, "div", 191)(195, "span", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](196, "UI/UX Designer");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](197, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](198, "2001 - 2006");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](199, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](200, "Breaking Good, RedDevil, People of Interest, The Running Dead, Found, American Guy.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](201, "div", 188)(202, "div", 189)(203, "div", 190)(204, "span", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](205, "The Digital College");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](206, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](207, "2010");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](208, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](209, "6 months intensive Motion Graphics course. After Effects and Premire. Professor: Donatello Urtle.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](210, "div", 189)(211, "div", 191)(212, "span", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](213, "The New College of Design");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](214, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](215, "2008 - 2013");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](216, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](217, "UI/UX Designer for the \u201CDaydreams\u201D agency.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](218, "div", 92)(219, "div", 68)(220, "div", 173)(221, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](222, "Viewed Your Profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](223, "div", 174)(224, "div", 175)(225, "ul")(226, "li")(227, "div", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](228, "img", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](229, "span", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](230, "Jason Borne");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](231, "button", 179);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](232, "Add Friend");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](233, "li")(234, "div", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](235, "img", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](236, "span", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](237, "Anna Mull");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](238, "button", 179);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](239, "Add Friend");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](240, "li")(241, "div", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](242, "img", 181);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](243, "span", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](244, "Dion Cast");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](245, "button", 179);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](246, "Add Friend");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](247, "li")(248, "div", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](249, "img", 182);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](250, "span", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](251, "Karlene Lex");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](252, "button", 179);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](253, "Add Friend");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](254, "li")(255, "div", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](256, "img", 183);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](257, "span", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](258, "Vella Chism");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](259, "button", 179);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](260, "Add Friend");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](261, "li")(262, "div", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](263, "img", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](264, "span", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](265, "Wai Schalk");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](266, "button", 179);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](267, "Add Friend");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](268, "li")(269, "div", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](270, "img", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](271, "span", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](272, "Karlene Lex");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](273, "button", 179);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](274, "Add Friend");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](275, "div", 92)(276, "div", 68)(277, "div", 173)(278, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](279, "Activity Log");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](280, "div", 93)(281, "div", 192)(282, "div", 193)(283, "h6", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](284, "Today");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](285, "p")(286, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](287, "i", 194);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](288, "Comeren Diaz likes your photos.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](289, "p")(290, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](291, "i", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](292, "Karlene Lex and Comeren Diaz now friends.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](293, "p")(294, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](295, "i", 196);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](296, "Sarah Loren wrote on your timeline");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](297, "p")(298, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](299, "i", 194);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](300, "Johny Waston likes your post's.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](301, "p")(302, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](303, "i", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](304, "Andew Jon became friends with Comeren Diaz.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](305, "p")(306, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](307, "i", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](308, "Johny Waston became friends with Bucky Barnes.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](309, "div", 193)(310, "h6", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](311, "25 December");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](312, "p")(313, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](314, "i", 194);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](315, "Comeren Diaz likes your photos.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](316, "p")(317, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](318, "i", 194);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](319, "Johny Waston likes your post's.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](320, "p")(321, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](322, "i", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](323, "Karlene Lex and Comeren Diaz now friends.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](324, "p")(325, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](326, "i", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](327, "Johny Waston became friends with Bucky Barnes.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](328, "p")(329, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](330, "i", 196);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](331, "Sarah Loren wrote on your timeline");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](332, "p")(333, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](334, "i", 196);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](335, "Comeren Diaz wrote on your timeline");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](336, "div", 193)(337, "h6", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](338, "8 september");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](339, "p")(340, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](341, "i", 194);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](342, "Comeren Diaz likes your photos.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](343, "p")(344, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](345, "i", 194);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](346, "Johny Waston likes your post's.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](347, "p")(348, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](349, "i", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](350, "Karlene Lex and Comeren Diaz now friends.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](351, "p")(352, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](353, "i", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](354, "Johny Waston became friends with Bucky Barnes.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](355, "p")(356, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](357, "i", 196);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](358, "Sarah Loren wrote on your timeline");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](359, "p")(360, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](361, "i", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](362, "Andew Jon became friends with Comeren Diaz.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](363, "div", 193)(364, "h6", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](365, "6 June");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](366, "p")(367, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](368, "i", 194);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](369, "Comeren Diaz likes your photos.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](370, "p")(371, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](372, "i", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](373, "Karlene Lex and Comeren Diaz now friends.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](374, "p")(375, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](376, "i", 196);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](377, "Sarah Loren wrote on your timeline");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](378, "p")(379, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](380, "i", 194);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](381, "Johny Waston likes your post's.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](382, "p")(383, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](384, "i", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](385, "Andew Jon became friends with Comeren Diaz.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](386, "p")(387, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](388, "i", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](389, "Johny Waston became friends with Bucky Barnes.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](390, "div", 121)(391, "div", 197)(392, "div", 2)(393, "div", 123)(394, "div", 38)(395, "div", 39)(396, "div", 40)(397, "h5", 41)(398, "button", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](399, "Profile Intro");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](400, "div", 125)(401, "div", 126)(402, "span", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](403, "About Me :");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](404, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](405, " Hi, I\u2019m elana, I\u2019m 30 and I work as a web Designer for the \u201CDaydreams\u201D Agency in Pier 56. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](406, "span", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](407, "Favourite TV shows :");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](408, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](409, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim modi dolor ut maiores recusandae voluptas quod ea error cupiditate libero.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](410, "span", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](411, "Favourite Music Bands :");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](412, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](413, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim modi dolor ut maiores recusandae voluptas quod ea error cupiditate libero.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](414, "div", 127)(415, "span", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](416, "Social Networks");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](417, "button", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](418, "i", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](419, "Facebook");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](420, "button", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](421, "i", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](422, "Twitter");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](423, "button", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](424, "i", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](425, "Dribbble");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](426, "div", 123)(427, "div", 38)(428, "div", 39)(429, "div", 40)(430, "h5", 41)(431, "button", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](432, "Followers");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](433, "div", 135)(434, "div", 136)(435, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](436, "img", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](437, "div", 47)(438, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](439, "Bucky Barnes");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](440, "a", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](441, "Add Friend");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](442, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](443, "img", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](444, "div", 47)(445, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](446, "Sarah Loren");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](447, "a", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](448, "Add Friend");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](449, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](450, "img", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](451, "div", 47)(452, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](453, "Jason Borne");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](454, "a", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](455, "Add Friend");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](456, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](457, "img", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](458, "div", 47)(459, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](460, "Comeren Diaz");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](461, "a", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](462, "Add Friend");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](463, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](464, "img", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](465, "div", 47)(466, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](467, "Andew Jon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](468, "a", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](469, "Add Friend");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](470, "div", 123)(471, "div", 38)(472, "div", 39)(473, "div", 40)(474, "h5", 41)(475, "button", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](476, "Followings");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](477, "div", 141)(478, "div", 136)(479, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](480, "img", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](481, "div", 47)(482, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](483, "Sarah Loren");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](484, "a", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](485, "Add Friend");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](486, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](487, "img", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](488, "div", 47)(489, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](490, "Bucky Barnes");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](491, "a", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](492, "Add Friend");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](493, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](494, "img", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](495, "div", 47)(496, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](497, "Comeren Diaz");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](498, "a", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](499, "Add Friend");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](500, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](501, "img", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](502, "div", 47)(503, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](504, "Jason Borne");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](505, "a", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](506, "Add Friend");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](507, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](508, "img", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](509, "div", 47)(510, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](511, "Andew Jon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](512, "a", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](513, "Add Friend");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](514, "div", 123)(515, "div", 38)(516, "div", 39)(517, "div", 40)(518, "h5", 41)(519, "button", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](520, "Latest Photos");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](521, "div", 143)(522, "div", 144)(523, "ul", 59)(524, "li")(525, "div", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](526, "img", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](527, "li")(528, "div", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](529, "img", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](530, "li")(531, "div", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](532, "img", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](533, "li")(534, "div", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](535, "img", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](536, "li")(537, "div", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](538, "img", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](539, "li")(540, "div", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](541, "img", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](542, "li")(543, "div", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](544, "img", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](545, "li")(546, "div", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](547, "img", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](548, "li")(549, "div", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](550, "img", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](551, "div", 123)(552, "div", 38)(553, "div", 39)(554, "div", 40)(555, "h5", 41)(556, "button", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](557, "Friends");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](558, "div", 156)(559, "div", 157)(560, "div", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](561, "img", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](562, "div", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](563, "img", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](564, "div", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](565, "img", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](566, "div", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](567, "img", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](568, "div", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](569, "img", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](570, "div", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](571, "img", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](572, "div", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](573, "img", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](574, "div", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](575, "img", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](576, "div", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](577, "img", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](578, "div", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](579, "img", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](580, "div", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](581, "img", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](582, "div", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](583, "img", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](584, "div", 123)(585, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](586, "img", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("closeOthers", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("collapsed", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("closeOthers", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("collapsed", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("closeOthers", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("collapsed", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](364);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("closeOthers", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("collapsed", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("closeOthers", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("collapsed", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("closeOthers", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("collapsed", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("closeOthers", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("collapsed", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("closeOthers", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("collapsed", false);
  }
}
function SocialAppComponent_ng_template_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 198)(1, "div", 2)(2, "div", 199)(3, "div", 200)(4, "div", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "img", 201);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 202);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "img", 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ul", 204)(9, "li")(10, "a", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "i", 205);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "li")(13, "a", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "i", 206);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "li")(16, "a", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "i", 207);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "li")(19, "a", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "i", 208);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "li")(22, "a", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "i", 209);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 210)(25, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Mark Jecno");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Manager");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 211)(30, "div", 212)(31, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Follower");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "h3", 213);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "9564");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 212)(36, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Following");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "h3")(39, "span", 213);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "49");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "K");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 212)(43, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Total Post");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "h3")(46, "span", 213);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "96");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "M");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 199)(50, "div", 200)(51, "div", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](52, "img", 214);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 202);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](54, "img", 215);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "ul", 204)(56, "li")(57, "a", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](58, "i", 205);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "li")(60, "a", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](61, "i", 206);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "li")(63, "a", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](64, "i", 207);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "li")(66, "a", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](67, "i", 208);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "li")(69, "a", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](70, "i", 209);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "div", 210)(72, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "Johan Deo");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, "Designer");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "div", 211)(77, "div", 212)(78, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](79, "Follower");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "h3", 213);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81, "2578");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "div", 212)(83, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](84, "Following");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "h3")(86, "span", 213);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](87, "26");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](88, "K");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "div", 212)(90, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](91, "Total Post");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "h3")(93, "span", 213);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](94, "96");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](95, "M");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "div", 199)(97, "div", 200)(98, "div", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](99, "img", 216);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "div", 202);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](101, "img", 217);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "ul", 204)(103, "li")(104, "a", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](105, "i", 205);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "li")(107, "a", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](108, "i", 206);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "li")(110, "a", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](111, "i", 207);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "li")(113, "a", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](114, "i", 208);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "li")(116, "a", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](117, "i", 209);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](118, "div", 210)(119, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](120, "Dev John");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](121, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](122, "Devloper");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](123, "div", 211)(124, "div", 212)(125, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](126, "Follower");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](127, "h3", 213);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](128, "6545");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](129, "div", 212)(130, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](131, "Following");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](132, "h3")(133, "span", 213);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](134, "91");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](135, "K");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](136, "div", 212)(137, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](138, "Total Post");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](139, "h3")(140, "span", 213);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](141, "21");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](142, "M");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](143, "div", 199)(144, "div", 200)(145, "div", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](146, "img", 218);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](147, "div", 202);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](148, "img", 215);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](149, "ul", 204)(150, "li")(151, "a", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](152, "i", 205);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](153, "li")(154, "a", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](155, "i", 206);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](156, "li")(157, "a", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](158, "i", 207);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](159, "li")(160, "a", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](161, "i", 208);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](162, "li")(163, "a", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](164, "i", 209);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](165, "div", 210)(166, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](167, "Johan Deo");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](168, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](169, "Designer");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](170, "div", 211)(171, "div", 212)(172, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](173, "Follower");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](174, "h3", 213);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](175, "2578");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](176, "div", 212)(177, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](178, "Following");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](179, "h3")(180, "span", 213);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](181, "26");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](182, "K");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](183, "div", 212)(184, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](185, "Total Post");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](186, "h3")(187, "span", 213);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](188, "96");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](189, "M");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](190, "div", 199)(191, "div", 200)(192, "div", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](193, "img", 219);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](194, "div", 202);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](195, "img", 217);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](196, "ul", 204)(197, "li")(198, "a", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](199, "i", 205);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](200, "li")(201, "a", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](202, "i", 206);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](203, "li")(204, "a", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](205, "i", 207);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](206, "li")(207, "a", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](208, "i", 208);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](209, "li")(210, "a", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](211, "i", 209);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](212, "div", 210)(213, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](214, "Dev John");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](215, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](216, "Devloper");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](217, "div", 211)(218, "div", 212)(219, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](220, "Follower");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](221, "h3", 213);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](222, "6545");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](223, "div", 212)(224, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](225, "Following");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](226, "h3")(227, "span", 213);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](228, "91");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](229, "K");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](230, "div", 212)(231, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](232, "Total Post");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](233, "h3")(234, "span", 213);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](235, "21");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](236, "M");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](237, "div", 199)(238, "div", 200)(239, "div", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](240, "img", 220);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](241, "div", 202);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](242, "img", 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](243, "ul", 204)(244, "li")(245, "a", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](246, "i", 205);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](247, "li")(248, "a", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](249, "i", 206);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](250, "li")(251, "a", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](252, "i", 207);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](253, "li")(254, "a", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](255, "i", 208);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](256, "li")(257, "a", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](258, "i", 209);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](259, "div", 210)(260, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](261, "Mark Jecno");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](262, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](263, "Manager");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](264, "div", 211)(265, "div", 212)(266, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](267, "Follower");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](268, "h3", 213);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](269, "9564");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](270, "div", 212)(271, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](272, "Following");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](273, "h3")(274, "span", 213);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](275, "49");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](276, "K");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](277, "div", 212)(278, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](279, "Total Post");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](280, "h3")(281, "span", 213);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](282, "96");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](283, "M");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
  }
}
function SocialAppComponent_ng_template_47_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 221)(1, "div", 2)(2, "div", 92)(3, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "app-image-gallery");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
}
class SocialAppComponent {
  constructor() {
    this.active = 1;
  }
  readUrl(event) {
    if (event.target.files.length === 0) return;
    //Image upload validation
    var mimeType = event.target.files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }
    // Image upload
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = _event => {
      this.url = reader.result;
    };
  }
  ngOnInit() {}
  static #_ = this.ɵfac = function SocialAppComponent_Factory(t) {
    return new (t || SocialAppComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: SocialAppComponent,
    selectors: [["app-social-app"]],
    decls: 49,
    vars: 7,
    consts: [[1, "container-fluid"], [1, "user-profile", "social-app-profile"], [1, "row"], [1, "col-sm-12", "social-app-tab"], [1, "card", "hovercard", "mb-0"], [1, "cardheader", "socialheader"], [1, "user-image"], [1, "avatar"], ["alt", "", 3, "src"], [1, "icon-wrapper"], [1, "icofont", "icofont-pencil-alt-5"], ["type", "file", 1, "upload", 3, "change"], [1, "share-icons"], ["href", "javascript:void(0)", 1, "social-icon", "bg-primary"], [1, "fa", "fa-smile-o"], ["href", "javascript:void(0)", 1, "social-icon", "bg-secondary"], [1, "fa", "fa-wechat"], ["href", "javascript:void(0)", 1, "social-icon", "bg-warning"], [1, "fa", "fa-share-alt"], [1, "info", "market-tabs", "p-0"], ["id", "top-tab", "role", "tablist", "ngbNav", "", 1, "nav", "nav-tabs", "border-tab", "tabs-scoial", 3, "activeId", "activeIdChange"], ["nav", "ngbNav"], [1, "nav-item", 3, "ngbNavItem"], ["id", "top-timeline", "data-bs-toggle", "tab", "ngbNavLink", "", 1, "nav-link"], ["ngbNavContent", ""], ["id", "top-about", "data-bs-toggle", "tab", "ngbNavLink", "", 1, "nav-link"], [1, "nav-item"], [1, "user-designation"], [1, "title"], ["target", "_blank", "href", ""], [1, "desc", "mt-2"], ["id", "top-friends", "data-bs-toggle", "tab", "ngbNavLink", "", 1, "nav-link"], ["id", "top-photos", "data-bs-toggle", "tab", "ngbNavLink", "", 1, "nav-link"], [1, "mt-2", 3, "ngbNavOutlet"], ["id", "timeline", "role", "tabpanel", "aria-labelledby", "timeline", 1, "tab-pane", "fade", "show"], [1, "col-xl-3", "xl-40", "col-lg-12", "col-md-5"], ["id", "accordionoc4", "ngbAccordion", "", 1, "default-according", "style-1", "faq-accordion", "job-accordion", "accordion"], [1, "col-xl-12"], ["ngbAccordion", "", 1, "card", 3, "closeOthers"], ["ngbAccordionItem", "", 3, "collapsed"], ["ngbAccordionHeader", "", 1, "card-header"], [1, "mb-0"], ["ngbAccordionButton", "", 1, "btn", "btn-link", "ps-0"], ["id", "collapseicon", "ngbAccordionCollapse", "", 1, "collapse", "show"], ["ngbAccordionBody", "", 1, "card-body", "socialprofile", "filter-cards-view"], [1, "media"], ["src", "assets/images/user/1.jpg", "alt", "", 1, "img-50", "img-fluid", "m-r-20", "rounded-circle"], [1, "media-body"], [1, "font-primary", "f-w-600"], [1, "d-block"], [1, "fa", "fa-comments-o"], [1, "px-2"], [1, "badge", "rounded-pill", "badge-light"], [1, "fa", "fa-bell-o"], [1, "social-btngroup", "d-flex", "gap-2"], ["type", "button", 1, "btn", "btn-primary", "text-center"], ["type", "button", 1, "btn", "btn-light", "text-center"], [1, "likes-profile", "text-center"], [1, "fa", "fa-heart", "font-danger"], [1, "text-center"], [1, "customers", "text-center", "social-group"], [1, "d-inline-block"], ["src", "assets/images/user/3.jpg", "alt", "", "data-container", "body", "data-bs-toggle", "popover", "data-placement", "top", "title", "", "data-original-title", "Johny Waston", 1, "img-40", "rounded-circle"], ["src", "assets/images/user/5.jpg", "alt", "", "data-container", "body", "data-bs-toggle", "popover", "data-placement", "top", "title", "", "data-original-title", "Andew Jon", 1, "img-40", "rounded-circle"], ["src", "assets/images/user/1.jpg", "alt", "", "data-container", "body", "data-bs-toggle", "popover", "data-placement", "top", "title", "", "data-original-title", "Comeren Diaz", 1, "img-40", "rounded-circle"], ["src", "assets/images/user/2.png", "alt", "", "data-container", "body", "data-bs-toggle", "popover", "data-placement", "top", "title", "", "data-original-title", "Bucky Barnes", 1, "img-40", "rounded-circle"], ["src", "assets/images/user/8.jpg", "alt", "", "data-container", "body", "data-bs-toggle", "popover", "data-placement", "top", "title", "", "data-original-title", "Jason Borne", 1, "img-40", "rounded-circle"], ["src", "assets/images/user/11.png", "alt", "", "data-container", "body", "data-bs-toggle", "popover", "data-placement", "top", "title", "", "data-original-title", "Comeren Diaz", 1, "img-40", "rounded-circle"], [1, "card"], ["alt", "", "src", "assets/images/social-app/timeline-3.png", 1, "img-fluid"], ["data-bs-toggle", "collapse", "ngbAccordionButton", "", 1, "btn", "btn-link", "ps-0"], ["id", "collapseicon1", "ngbAccordionCollapse", "", 1, "collapse", "show"], ["ngbAccordionBody", "", 1, "card-body", "social-status", "filter-cards-view"], ["type", "search", "placeholder", "Search Contacts..", 1, "form-control"], ["src", "assets/images/user/2.png", "alt", "", 1, "img-50", "rounded-circle", "m-r-15"], [1, "social-status", "social-online"], [1, "f-w-600", "d-block"], ["src", "assets/images/user/10.jpg", "alt", "", 1, "img-50", "rounded-circle", "m-r-15"], [1, "social-status", "social-busy"], ["src", "assets/images/user/6.jpg", "alt", "", 1, "img-50", "rounded-circle", "m-r-15"], [1, "social-status", "social-offline"], ["src", "assets/images/user/8.jpg", "alt", "", 1, "img-50", "rounded-circle", "m-r-15"], ["src", "assets/images/user/14.png", "alt", "", 1, "img-50", "rounded-circle", "m-r-15"], ["src", "assets/images/user/4.jpg", "alt", "", 1, "img-50", "rounded-circle", "m-r-15"], ["src", "assets/images/user/3.png", "alt", "", 1, "img-50", "rounded-circle", "m-r-15"], ["data-bs-toggle", "collapse", "data-bs-target", "#collapseicon12", "aria-expanded", "true", "aria-controls", "collapseicon12", "ngbAccordionButton", "", 1, "btn", "btn-link", "ps-0"], ["id", "collapseicon12", "aria-labelledby", "collapseicon12", "data-bs-parent", "#accordion", "ngbAccordionCollapse", "", 1, "collapse", "show"], ["href", "#"], [1, "light-span"], ["src", "assets/images/user/3.jpg", "alt", "", 1, "img-50", "rounded-circle", "m-r-15"], ["src", "assets/images/user/5.jpg", "alt", "", 1, "img-50", "rounded-circle", "m-r-15"], [1, "col-xl-6", "xl-60", "col-lg-12", "col-md-7"], [1, "col-sm-12"], [1, "card-body"], [1, "new-users-social"], [1, "media", "align-items-center"], ["src", "assets/images/user/1.jpg", "alt", "", 1, "rounded-circle", "image-radius", "m-r-15"], [1, "flex-grow-1"], [1, "mb-0", "f-w-700"], [1, "pull-right", "mt-0"], ["data-feather", "more-vertical"], ["alt", "", "src", "assets/images/social-app/timeline-1.png", 1, "img-fluid"], [1, "timeline-content"], [1, "like-content"], [1, "pull-right", "comment-number"], [1, "fa", "fa-share-alt", "me-0"], [1, "social-chat"], [1, "your-msg"], ["alt", "", "src", "assets/images/user/1.jpg", 1, "img-50", "img-fluid", "m-r-20", "rounded-circle"], [1, "f-w-600"], [1, "fa", "fa-reply", "font-primary"], [1, "other-msg"], ["alt", "", "src", "assets/images/user/2.png", 1, "img-50", "img-fluid", "m-r-20", "rounded-circle"], ["alt", "", "src", "assets/images/user/3.png", 1, "img-50", "img-fluid", "m-r-20", "rounded-circle"], [1, "comments-box"], [1, "media-body", 2, "width", "100%"], [1, "input-group", "text-box"], ["type", "text", "name", "message-to-send", "placeholder", "Post Your commnets", 1, "form-control", "input-txt-bx"], [1, "input-group-append", 2, "width", "75px", "height", "34px"], ["type", "button", 1, "btn", "btn-transparent"], ["alt", "", "src", "assets/images/social-app/timeline-2.png", 1, "img-fluid"], [1, "col-xl-3", "xl-100"], ["id", "accordionoc1", 1, "default-according", "style-1", "faq-accordion", "job-accordion", "accordion"], [1, "col-xl-12", "xl-50"], ["data-bs-toggle", "collapse", "data-bs-target", "#collapseicon2", "aria-expanded", "true", "aria-controls", "collapseicon2", "ngbAccordionButton", "", 1, "btn", "btn-link", "ps-0"], ["ngbAccordionCollapse", "", 1, "collapse", "show"], ["ngbAccordionBody", "", 1, "card-body", "filter-cards-view"], [1, "social-network", "theme-form"], [1, "btn", "social-btn", "btn-fb", "mb-2", "text-center"], [1, "fa", "fa-facebook", "m-r-5"], [1, "btn", "social-btn", "btn-twitter", "mb-2", "text-center"], [1, "fa", "fa-twitter", "m-r-5"], [1, "btn", "social-btn", "btn-google", "text-center"], [1, "fa", "fa-dribbble", "m-r-5"], ["data-bs-toggle", "collapse", "data-bs-target", "#collapseicon3", "aria-expanded", "true", "aria-controls", "collapseicon3", "ngbAccordionButton", "", 1, "btn", "btn-link", "ps-0"], ["id", "collapseicon3", "aria-labelledby", "collapseicon3", "data-bs-parent", "#accordion", "ngbAccordionCollapse", "", 1, "collapse", "show"], ["ngbAccordionBody", "", 1, "card-body", "social-list", "filter-cards-view"], ["alt", "", "src", "assets/images/user/3.jpg", 1, "img-50", "img-fluid", "m-r-20", "rounded-circle"], ["alt", "", "src", "assets/images/user/10.jpg", 1, "img-50", "img-fluid", "m-r-20", "rounded-circle"], ["alt", "", "src", "assets/images/user/11.png", 1, "img-50", "img-fluid", "m-r-20", "rounded-circle"], ["data-bs-toggle", "collapse", "data-bs-target", "#collapseicon11", "aria-expanded", "true", "aria-controls", "collapseicon11", "ngbAccordionButton", "", 1, "btn", "btn-link", "ps-0"], ["id", "collapseicon11", "aria-labelledby", "collapseicon11", "data-bs-parent", "#accordion", "ngbAccordionCollapse", "", 1, "collapse", "show"], ["data-bs-toggle", "collapse", "data-bs-target", "#collapseicon4", "aria-expanded", "true", "aria-controls", "collapseicon4", "ngbAccordionButton", "", 1, "btn", "btn-link", "ps-0"], ["id", "collapseicon4", "data-bs-parent", "#accordion", "aria-labelledby", "collapseicon4", "ngbAccordionCollapse", "", 1, "collapse", "show"], ["ngbAccordionBody", "", 1, "card-body", "photos", "filter-cards-view"], [1, "latest-post"], ["alt", "", "src", "assets/images/social-app/post-1.png", 1, "img-fluid"], ["alt", "", "src", "assets/images/social-app/post-2.png", 1, "img-fluid"], ["alt", "", "src", "assets/images/social-app/post-3.png", 1, "img-fluid"], ["alt", "", "src", "assets/images/social-app/post-4.png", 1, "img-fluid"], ["alt", "", "src", "assets/images/social-app/post-5.png", 1, "img-fluid"], ["alt", "", "src", "assets/images/social-app/post-6.png", 1, "img-fluid"], ["alt", "", "src", "assets/images/social-app/post-7.png", 1, "img-fluid"], ["alt", "", "src", "assets/images/social-app/post-8.png", 1, "img-fluid"], ["alt", "", "src", "assets/images/social-app/post-9.png", 1, "img-fluid"], ["data-bs-toggle", "collapse", "data-bs-target", "#collapseicon15", "aria-expanded", "true", "aria-controls", "collapseicon15", "ngbAccordionButton", "", 1, "btn", "btn-link", "ps-0"], ["id", "collapseicon15", "data-bs-parent", "#accordion", "aria-labelledby", "collapseicon15", "ngbAccordionCollapse", "", 1, "collapse", "show"], ["ngbAccordionBody", "", 1, "card-body", "avatar-showcase", "filter-cards-view"], [1, "d-inline-block", "friend-pic"], ["src", "assets/images/user/3.jpg", "alt", "#", 1, "img-50", "rounded-circle"], ["src", "assets/images/user/5.jpg", "alt", "#", 1, "img-50", "rounded-circle"], ["src", "assets/images/user/1.jpg", "alt", "#", 1, "img-50", "rounded-circle"], ["src", "assets/images/user/2.png", "alt", "#", 1, "img-50", "rounded-circle"], ["src", "assets/images/user/3.png", "alt", "#", 1, "img-50", "rounded-circle"], ["src", "assets/images/user/6.jpg", "alt", "#", 1, "img-50", "rounded-circle"], ["src", "assets/images/user/10.jpg", "alt", "#", 1, "img-50", "rounded-circle"], ["src", "assets/images/user/14.png", "alt", "#", 1, "img-50", "rounded-circle"], ["src", "assets/images/user/4.jpg", "alt", "#", 1, "img-50", "rounded-circle"], ["src", "assets/images/user/11.png", "alt", "#", 1, "img-50", "rounded-circle"], ["src", "assets/images/user/8.jpg", "alt", "#", 1, "img-50", "rounded-circle"], ["src", "assets/images/social-app/timeline-4.png", "alt", "", 1, "img-fluid"], ["id", "about", "role", "tabpanel", "aria-labelledby", "about", 1, "tab-pane", "fade", "show"], ["id", "accordionoc2", 1, "default-according", "style-1", "faq-accordion", "job-accordion", "accordion"], [1, "card-header"], [1, "card-body", "avatar-showcase"], [1, "pepole-knows"], [1, "add-friend", "text-center"], ["alt", "", "src", "assets/images/user/2.png", 1, "img-60", "img-fluid", "rounded-circle"], [1, "d-block", "f-w-600"], [1, "btn", "btn-primary", "btn-xs"], ["alt", "", "src", "assets/images/user/3.png", 1, "img-60", "img-fluid", "rounded-circle"], ["alt", "", "src", "assets/images/user/3.jpg", 1, "img-60", "img-fluid", "rounded-circle"], ["alt", "", "src", "assets/images/user/4.jpg", 1, "img-60", "img-fluid", "rounded-circle"], ["alt", "", "src", "assets/images/user/8.jpg", 1, "img-60", "img-fluid", "rounded-circle"], ["alt", "", "src", "assets/images/user/10.jpg", 1, "img-60", "img-fluid", "rounded-circle"], ["alt", "", "src", "assets/images/user/14.png", 1, "img-60", "img-fluid", "rounded-circle"], [1, "card-header", "social-header"], [1, "pull-right"], [1, "row", "details-about"], [1, "col-sm-6"], [1, "your-details"], [1, "your-details", "your-details-xs"], [1, "activity-log"], [1, "my-activity"], ["data-feather", "thumbs-up", 1, "m-r-20"], ["data-feather", "user-plus", 1, "m-r-20"], ["data-feather", "message-square", 1, "m-r-20"], ["id", "accordionoc3", 1, "default-according", "style-1", "faq-accordion", "job-accordion", "accordion"], ["id", "friends", "role", "tabpanel", "aria-labelledby", "friends", 1, "tab-pane", "fade", "show"], [1, "col-md-6", "col-lg-6", "col-xl-4"], [1, "card", "custom-card"], ["src", "assets/images/user-card/1.jpg", "alt", "", 1, "img-fluid"], [1, "card-profile"], ["src", "assets/images/avtar/3.jpg", "alt", "", 1, "rounded-circle"], [1, "card-social"], [1, "fa", "fa-facebook"], [1, "fa", "fa-google-plus"], [1, "fa", "fa-twitter"], [1, "fa", "fa-instagram"], [1, "fa", "fa-rss"], [1, "text-center", "profile-details"], [1, "card-footer", "row"], [1, "col-4", "col-sm-4"], [1, "counter"], ["src", "assets/images/user-card/2.jpg", "alt", "", 1, "img-fluid"], ["src", "assets/images/avtar/16.jpg", "alt", "", 1, "rounded-circle"], ["src", "assets/images/user-card/3.jpg", "alt", "", 1, "img-fluid"], ["src", "assets/images/avtar/11.jpg", "alt", "", 1, "rounded-circle"], ["src", "assets/images/user-card/7.jpg", "alt", "", 1, "img-fluid"], ["src", "assets/images/user-card/5.jpg", "alt", "", 1, "img-fluid"], ["src", "assets/images/user-card/6.jpg", "alt", "", 1, "img-fluid"], ["id", "photos", "role", "tabpanel", "aria-labelledby", "photos", 1, "tab-pane", "fade", "show"]],
    template: function SocialAppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6)(7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 9)(10, "i", 10)(11, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function SocialAppComponent_Template_input_change_11_listener($event) {
          return ctx.readUrl($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ul", 12)(13, "li")(14, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "li")(17, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "li")(20, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 19)(23, "ul", 20, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("activeIdChange", function SocialAppComponent_Template_ul_activeIdChange_23_listener($event) {
          return ctx.active = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "li", 22)(26, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Timline");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, SocialAppComponent_ng_template_28_Template, 612, 16, "ng-template", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "li", 22)(30, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, SocialAppComponent_ng_template_32_Template, 587, 16, "ng-template", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "li", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 28)(36, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "ElANA");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "general manager");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "li", 22)(41, "a", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Friends");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](43, SocialAppComponent_ng_template_43_Template, 284, 0, "ng-template", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "li", 22)(45, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Photos");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](47, SocialAppComponent_ng_template_47_Template, 5, 0, "ng-template", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](48, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
      }
      if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.url ? ctx.url : "assets/images/user/7.jpg", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("activeId", ctx.active);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngbNavItem", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngbNavItem", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngbNavItem", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngbNavItem", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngbNavOutlet", _r0);
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgForm, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbAccordionButton, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbAccordionDirective, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbAccordionItem, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbAccordionHeader, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbAccordionBody, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbAccordionCollapse, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbNavContent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbNav, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbNavItem, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbNavItemRole, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbNavLink, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbNavLinkBase, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbNavOutlet, _image_gallery_image_gallery_component__WEBPACK_IMPORTED_MODULE_0__.ImageGalleryComponent],
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"],
    encapsulation: 2
  });
}

/***/ }),

/***/ 10714:
/*!************************************************************!*\
  !*** ./src/app/components/social-app/social-app.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SocialAppModule: () => (/* binding */ SocialAppModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 76101);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/shared.module */ 56208);
/* harmony import */ var _social_app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./social-app-routing.module */ 92038);
/* harmony import */ var _social_app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./social-app.component */ 32893);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! hammerjs */ 4700);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var mousetrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mousetrap */ 83929);
/* harmony import */ var mousetrap__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(mousetrap__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _image_gallery_image_gallery_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./image-gallery/image-gallery.component */ 62259);
/* harmony import */ var ng_gallery__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-gallery */ 60977);
/* harmony import */ var ng_gallery_lightbox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-gallery/lightbox */ 23050);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 61699);












class SocialAppModule {
  static #_ = this.ɵfac = function SocialAppModule_Factory(t) {
    return new (t || SocialAppModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
    type: SocialAppModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _social_app_routing_module__WEBPACK_IMPORTED_MODULE_1__.SocialAppRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, ng_gallery__WEBPACK_IMPORTED_MODULE_10__.GalleryModule, ng_gallery_lightbox__WEBPACK_IMPORTED_MODULE_11__.LightboxModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](SocialAppModule, {
    declarations: [_social_app_component__WEBPACK_IMPORTED_MODULE_2__.SocialAppComponent, _image_gallery_image_gallery_component__WEBPACK_IMPORTED_MODULE_5__.ImageGalleryComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _social_app_routing_module__WEBPACK_IMPORTED_MODULE_1__.SocialAppRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, ng_gallery__WEBPACK_IMPORTED_MODULE_10__.GalleryModule, ng_gallery_lightbox__WEBPACK_IMPORTED_MODULE_11__.LightboxModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_components_social-app_social-app_module_ts.6e5c08f53f04f8a8.js.map