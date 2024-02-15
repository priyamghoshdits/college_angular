"use strict";
(self["webpackChunkRUDKARSH"] = self["webpackChunkRUDKARSH"] || []).push([["src_app_components_job-search_job-search_module_ts"],{

/***/ 14121:
/*!************************************************************************!*\
  !*** ./src/app/components/job-search/job-apply/job-apply.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JobApplyComponent: () => (/* binding */ JobApplyComponent)
/* harmony export */ });
/* harmony import */ var _shared_data_job_search_job_search__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/data/job-search/job-search */ 66379);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 76101);
/* harmony import */ var _job_filter_job_filter_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../job-filter/job-filter.component */ 61106);








function JobApplyComponent_div_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Your full name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function JobApplyComponent_div_50_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Invalid Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function JobApplyComponent_div_59_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Invalid Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function JobApplyComponent_div_68_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Invalid Repeat Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function JobApplyComponent_div_86_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Phone is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function JobApplyComponent_div_98_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "collegename is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function JobApplyComponent_div_143_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "specialization is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function JobApplyComponent_div_155_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "location is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function JobApplyComponent_div_202_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "company_name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
const _c0 = () => ({
  standalone: true
});
class JobApplyComponent {
  constructor(route, router, fb) {
    this.route = route;
    this.router = router;
    this.fb = fb;
    this.jobForm = this.fb.group({
      name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.email],
      password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      rpassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      collegename: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      specialization: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      location: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      company_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]
    });
    this.jobs = _shared_data_job_search_job_search__WEBPACK_IMPORTED_MODULE_0__.JobDB.Job_Category;
    this.route.params.subscribe(params => {
      const id = +params['id'];
      this.jobs.filter(items => {
        if (items.Id === id) {
          this.arr = items;
        }
      });
    });
  }
  ngOnInit() {
    this.dropdownList = [{
      "id": 1,
      "itemName": "India"
    }, {
      "id": 2,
      "itemName": "Singapore"
    }, {
      "id": 3,
      "itemName": "Australia"
    }, {
      "id": 4,
      "itemName": "Canada"
    }, {
      "id": 5,
      "itemName": "South Korea"
    }, {
      "id": 6,
      "itemName": "Germany"
    }, {
      "id": 7,
      "itemName": "France"
    }, {
      "id": 8,
      "itemName": "Russia"
    }, {
      "id": 9,
      "itemName": "Italy"
    }, {
      "id": 10,
      "itemName": "Sweden"
    }];
    this.selectedItems = [{
      "id": 2,
      "itemName": "Singapore"
    }, {
      "id": 3,
      "itemName": "Australia"
    }, {
      "id": 4,
      "itemName": "Canada"
    }, {
      "id": 5,
      "itemName": "South Korea"
    }];
    this.dropdownSettings = {
      singleSelection: false,
      text: "Select Countries",
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      enableSearchFilter: true,
      classes: "myclass custom-class"
    };
  }
  static #_ = this.ɵfac = function JobApplyComponent_Factory(t) {
    return new (t || JobApplyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: JobApplyComponent,
    selectors: [["app-job-apply"]],
    decls: 232,
    vars: 30,
    consts: [[1, "container-fluid"], [1, "row"], [1, "col-xl-3", "xl-40"], [1, "col-xl-9", "xl-60"], [1, "card"], [1, "job-search"], [1, "card-body", "pb-0"], [1, "media"], ["alt", "", 1, "img-40", "img-fluid", "m-r-20", 3, "src"], [1, "flex-grow-1"], [1, "f-w-600"], ["href", "javascript:void(0)"], [1, "pull-right"], ["type", "button", 1, "btn", "btn-primary"], [1, "fa", "fa-check", "text-white"], [1, "fa", "fa-star", "font-warning"], [1, "job-description"], [1, "mb-0"], [1, "form", "theme-form", 3, "formGroup"], [1, "col"], [1, "form-group"], ["for", "exampleFormControlInput1"], [1, "font-danger"], ["name", "name", "formControlName", "name", "autocomplete", "off", "id", "name", "type", "text", "placeholder", "Enter first name", "required", "required", 1, "form-control"], ["class", "text text-danger", 4, "ngIf"], ["for", "exampleFormControlInput3"], ["name", "email", "formControlName", "email", "autocomplete", "off", "id", "email", "type", "email", "placeholder", "Enter email", "required", "required", 1, "form-control"], ["for", "exampleFormControlpassword"], ["name", "password", "formControlName", "password", "autocomplete", "off", "id", "password", "type", "password", "placeholder", "Enter password", "required", "required", 1, "form-control"], ["for", "exampleFormControlpassword1"], ["id", "rpassword", "name", "rpassword", "formControlName", "rpassword", "autocomplete", "off", "type", "password", "placeholder", "Repeat password", "required", "required", 1, "form-control"], [1, "col-form-label", "pt-0"], [1, "input-group", "custom-datepicker", "job-input-datepicker"], ["placeholder", "yyyy-mm-dd", "name", "dp", "ngbDatepicker", "", 1, "form-control", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["d", "ngbDatepicker"], [1, "input-group-append"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "fa", "fa-calendar"], ["for", "exampleFormControlInput4"], ["id", "phone", "name", "phone", "formControlName", "phone", "autocomplete", "off", "type", "email", "placeholder", "Enter Phone no.", "required", "required", 1, "form-control"], [1, "form", "theme-form"], [1, "col-xl-6", "xl-100"], ["for", "exampleFormControlInput5"], ["id", "collegename", "name", "collegename", "formControlName", "collegename", "autocomplete", "off", "type", "email", "placeholder", "Enter college name", "required", "required", 1, "form-control"], [1, "col-xl-6", "xl-100", "xl-mt-job"], [1, "col-form-label", "text-end", "pt-0"], [1, "col-sm-6"], ["sd", "ngbDatepicker"], ["ed", "ngbDatepicker"], [1, "col-lg-6"], [1, "js-example-basic-single", "col-sm-12", "job-select2", "form-group"], ["label", "Choose a Option"], ["value", "student"], ["value", "Bachelor"], ["value", "Master"], ["value", "Associate"], ["for", "exampleFormControlInput6"], ["id", "specialization", "name", "specialization", "formControlName", "specialization", "autocomplete", "off", "type", "email", "placeholder", "Enter specialization", 1, "form-control"], ["for", "exampleFormControlInput7"], ["id", "location", "name", "location", "formControlName", "location", "autocomplete", "off", "type", "email", "placeholder", "Enter Location", 1, "form-control"], ["psd", "ngbDatepicker"], ["ped", "ngbDatepicker"], ["label", "Enter Position"], ["value", "position"], ["value", "Web designer"], ["value", "Graphic designer"], ["value", "UI designer"], ["value", "UI/UX designer"], ["for", "exampleFormControlInput8"], ["id", "company_name", "name", "company_name", "formControlName", "company_name", "autocomplete", "off", "type", "email", "type", "email", "placeholder", "Enter Company Name", 1, "form-control"], ["type", "file", 1, "form-control"], [1, "form-group", "mb-0"], [1, "card-footer"], ["type", "submit", 1, "btn", "btn-primary", "me-1", 3, "disabled"], ["type", "reset", "value", "Cancel", 1, "btn", "btn-light"], [1, "text", "text-danger"]],
    template: function JobApplyComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "app-job-filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3)(5, "div", 4)(6, "div", 5)(7, "div", 6)(8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 9)(11, "h6", 10)(12, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "span", 12)(15, "button", 13)(16, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, " Save this job");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "i", 15)(25, "i", 15)(26, "i", 15)(27, "i", 15)(28, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 16)(30, "h6", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "Personal Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "form", 18)(33, "div", 1)(34, "div", 19)(35, "div", 20)(36, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "Full Name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](40, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](41, JobApplyComponent_div_41_Template, 2, 0, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "div", 1)(43, "div", 19)(44, "div", 20)(45, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46, "Email:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](49, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](50, JobApplyComponent_div_50_Template, 2, 0, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "div", 1)(52, "div", 19)(53, "div", 20)(54, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55, "Password:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](58, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](59, JobApplyComponent_div_59_Template, 2, 0, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "div", 1)(61, "div", 19)(62, "div", 20)(63, "label", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](64, "Repeat Password:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](66, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](67, "input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](68, JobApplyComponent_div_68_Template, 2, 0, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "div", 1)(70, "div", 19)(71, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](72, "Birth Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "div", 20)(74, "div", 32)(75, "input", 33, 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function JobApplyComponent_Template_input_ngModelChange_75_listener($event) {
          return ctx.model1 = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](77, "div", 35)(78, "button", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function JobApplyComponent_Template_button_click_78_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r14);
          const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](76);
          return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](_r4.toggle());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](79, "i", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](80, "div", 1)(81, "div", 19)(82, "div", 20)(83, "label", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](84, "Phone Number:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](85, "input", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](86, JobApplyComponent_div_86_Template, 2, 0, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](87, "h6", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](88, "Your Education");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](89, "form", 40)(90, "div", 1)(91, "div", 41)(92, "div", 20)(93, "label", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](94, "College Name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](95, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](96, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](97, "input", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](98, JobApplyComponent_div_98_Template, 2, 0, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](99, "div", 44)(100, "label", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](101, "Period:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](102, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](103, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](104, "div", 1)(105, "div", 46)(106, "div", 20)(107, "div", 32)(108, "input", 33, 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function JobApplyComponent_Template_input_ngModelChange_108_listener($event) {
          return ctx.model2 = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](110, "div", 35)(111, "button", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function JobApplyComponent_Template_button_click_111_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r14);
          const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](109);
          return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](_r7.toggle());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](112, "i", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](113, "div", 46)(114, "div", 20)(115, "div", 32)(116, "input", 33, 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function JobApplyComponent_Template_input_ngModelChange_116_listener($event) {
          return ctx.model3 = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](118, "div", 35)(119, "button", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function JobApplyComponent_Template_button_click_119_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r14);
          const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](117);
          return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](_r8.toggle());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](120, "i", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](121, "div", 49)(122, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](123, "Degree Level:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](124, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](125, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](126, "select", 50)(127, "optgroup", 51)(128, "option", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](129, "Student");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](130, "option", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](131, "Bachelor");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](132, "option", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](133, "Master");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](134, "option", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](135, "Associate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](136, "div", 49)(137, "div", 20)(138, "label", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](139, "Specialization:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](140, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](141, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](142, "input", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](143, JobApplyComponent_div_143_Template, 2, 0, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](144, "h6", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](145, "Your Experience");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](146, "form", 40)(147, "div", 1)(148, "div", 41)(149, "div", 20)(150, "label", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](151, "Location:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](152, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](153, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](154, "input", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](155, JobApplyComponent_div_155_Template, 2, 0, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](156, "div", 41)(157, "label", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](158, "Period:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](159, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](160, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](161, "div", 1)(162, "div", 46)(163, "div", 20)(164, "div", 32)(165, "input", 33, 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function JobApplyComponent_Template_input_ngModelChange_165_listener($event) {
          return ctx.model4 = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](167, "div", 35)(168, "button", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function JobApplyComponent_Template_button_click_168_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r14);
          const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](166);
          return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](_r11.toggle());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](169, "i", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](170, "div", 46)(171, "div", 20)(172, "div", 32)(173, "input", 33, 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function JobApplyComponent_Template_input_ngModelChange_173_listener($event) {
          return ctx.model5 = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](175, "div", 35)(176, "button", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function JobApplyComponent_Template_button_click_176_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r14);
          const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](174);
          return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](_r12.toggle());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](177, "i", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](178, "div", 41)(179, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](180, "Position:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](181, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](182, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](183, "select", 50)(184, "optgroup", 62)(185, "option", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](186, "Choose a option");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](187, "option", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](188, "Web Designer");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](189, "option", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](190, "Graphic Designer");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](191, "option", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](192, "UI Designer");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](193, "option", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](194, "UI/UX Designer");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](195, "div", 41)(196, "div", 20)(197, "label", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](198, "Company Name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](199, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](200, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](201, "input", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](202, JobApplyComponent_div_202_Template, 2, 0, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](203, "h6", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](204, "Upload Your Files");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](205, "form", 40)(206, "div", 1)(207, "div", 19)(208, "div", 20)(209, "label", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](210, "Upload Your CV:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](211, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](212, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](213, "input", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](214, "div", 1)(215, "div", 19)(216, "div", 20)(217, "label", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](218, "Upload Cover Letter:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](219, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](220, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](221, "input", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](222, "div", 1)(223, "div", 19)(224, "div", 71)(225, "label", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](226, "Upload Recommendations:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](227, "input", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](228, "div", 72)(229, "button", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](230, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](231, "input", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx.arr.logo, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.arr.job_name);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx.arr.job_area, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx.arr.job_city, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.jobForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.jobForm.controls["name"].touched && (ctx.jobForm.controls["name"].errors == null ? null : ctx.jobForm.controls["name"].errors["required"]));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.jobForm.controls["email"].touched && (ctx.jobForm.controls["email"].errors == null ? null : ctx.jobForm.controls["email"].errors["email"]));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.jobForm.controls["password"].touched && (ctx.jobForm.controls["password"].errors == null ? null : ctx.jobForm.controls["password"].errors["required"]));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.jobForm.controls["rpassword"].touched && (ctx.jobForm.controls["rpassword"].errors == null ? null : ctx.jobForm.controls["rpassword"].errors["required"]));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.model1)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](25, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.jobForm.controls["phone"].touched && (ctx.jobForm.controls["phone"].errors == null ? null : ctx.jobForm.controls["phone"].errors["required"]));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.jobForm.controls["collegename"].touched && (ctx.jobForm.controls["collegename"].errors == null ? null : ctx.jobForm.controls["collegename"].errors["required"]));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.model2)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](26, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.model3)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](27, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.jobForm.controls["specialization"].touched && (ctx.jobForm.controls["specialization"].errors == null ? null : ctx.jobForm.controls["specialization"].errors["required"]));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.jobForm.controls["location"].touched && (ctx.jobForm.controls["location"].errors == null ? null : ctx.jobForm.controls["location"].errors["required"]));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.model4)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](28, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.model5)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](29, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.jobForm.controls["company_name"].touched && (ctx.jobForm.controls["company_name"].errors == null ? null : ctx.jobForm.controls["company_name"].errors["required"]));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx.jobForm.valid);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbInputDatepicker, _job_filter_job_filter_component__WEBPACK_IMPORTED_MODULE_1__.JobFilterComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 62030:
/*!**********************************************************************!*\
  !*** ./src/app/components/job-search/job-card/job-card.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JobCardComponent: () => (/* binding */ JobCardComponent)
/* harmony export */ });
/* harmony import */ var _shared_data_job_search_job_search__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/data/job-search/job-search */ 66379);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _job_filter_job_filter_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../job-filter/job-filter.component */ 61106);





function JobCardComponent_div_6_span_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "New");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
const _c0 = a1 => ["/job-search/job-desc", a1];
function JobCardComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 5)(1, "div", 6)(2, "div", 7)(3, "div", 8)(4, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 11)(7, "h6", 12)(8, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, JobCardComponent_div_6_span_10_Template, 2, 0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "i", 15)(17, "i", 15)(18, "i", 15)(19, "i", 15)(20, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const job_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", job_r1.logo, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](7, _c0, job_r1.Id));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](job_r1.job_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", job_r1.type == "new");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", job_r1.job_area, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", job_r1.job_city, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](job_r1.Job_description);
  }
}
class JobCardComponent {
  constructor() {
    this.jobs = _shared_data_job_search_job_search__WEBPACK_IMPORTED_MODULE_0__.JobDB.Job_Category;
  }
  ngOnInit() {}
  static #_ = this.ɵfac = function JobCardComponent_Factory(t) {
    return new (t || JobCardComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: JobCardComponent,
    selectors: [["app-job-card"]],
    decls: 7,
    vars: 1,
    consts: [[1, "container-fluid"], [1, "row"], [1, "col-xl-3", "xl-40"], [1, "col-xl-9", "xl-60"], ["class", "col-xl-6 xl-100", 4, "ngFor", "ngForOf"], [1, "col-xl-6", "xl-100"], [1, "card"], [1, "job-search"], [1, "card-body"], [1, "media"], ["alt", "", 1, "img-40", "img-fluid", "m-r-20", 3, "src"], [1, "flex-grow-1"], [1, "f-w-600"], [3, "routerLink"], ["class", "badge badge-primary pull-right", 4, "ngIf"], [1, "fa", "fa-star", "font-warning"], [1, "fa", "fa-star", "font-warning-o"], [1, "badge", "badge-primary", "pull-right"]],
    template: function JobCardComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "app-job-filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3)(5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, JobCardComponent_div_6_Template, 23, 9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.jobs);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _job_filter_job_filter_component__WEBPACK_IMPORTED_MODULE_1__.JobFilterComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 83693:
/*!**********************************************************************!*\
  !*** ./src/app/components/job-search/job-desc/job-desc.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JobDescComponent: () => (/* binding */ JobDescComponent)
/* harmony export */ });
/* harmony import */ var _shared_data_job_search_job_search__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/data/job-search/job-search */ 66379);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _job_filter_job_filter_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../job-filter/job-filter.component */ 61106);





function JobDescComponent_div_57_span_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "New");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
const _c0 = a1 => ["/job-search/job-apply", a1];
function JobDescComponent_div_57_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 24)(1, "div", 4)(2, "div", 5)(3, "div", 6)(4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 9)(7, "h6", 10)(8, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, JobDescComponent_div_57_span_10_Template, 2, 0, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "i", 14)(17, "i", 14)(18, "i", 14)(19, "i", 14)(20, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const job_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", job_r1.logo, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](7, _c0, job_r1.Id));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](job_r1.job_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", job_r1.type == "new");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", job_r1.job_area, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", job_r1.job_city, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](job_r1.Job_description);
  }
}
class JobDescComponent {
  constructor(route, router) {
    this.route = route;
    this.router = router;
    this.jobs = _shared_data_job_search_job_search__WEBPACK_IMPORTED_MODULE_0__.JobDB.Job_Category;
    this.route.params.subscribe(params => {
      const id = +params['id'];
      this.jobs.filter(items => {
        if (items.Id === id) {
          this.arr = items;
        }
      });
    });
  }
  applyClick(arr) {
    this.router.navigate(['/job-search/job-apply', arr.Id]);
  }
  ngOnInit() {}
  static #_ = this.ɵfac = function JobDescComponent_Factory(t) {
    return new (t || JobDescComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: JobDescComponent,
    selectors: [["app-job-desc"]],
    decls: 58,
    vars: 12,
    consts: [[1, "container-fluid"], [1, "row"], [1, "col-xl-3", "xl-40"], [1, "col-xl-9", "xl-60"], [1, "card"], [1, "job-search"], [1, "card-body"], [1, "media"], ["alt", "", 1, "img-40", "img-fluid", "m-r-20", 3, "src"], [1, "flex-grow-1"], [1, "f-w-600"], ["href", "javascript:void(0)"], [1, "pull-right"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "fa", "fa-star", "font-warning"], [1, "job-description"], [3, "innerHTML"], ["type", "button", 1, "btn", "btn-primary", "me-1"], [1, "fa", "fa-check"], ["type", "button", 1, "btn", "btn-primary"], [1, "fa", "fa-share-alt"], [1, "header-faq"], [1, "mb-0", "f-w-600"], ["class", "col-xl-6 xl-100", 4, "ngFor", "ngForOf"], [1, "col-xl-6", "xl-100"], [3, "routerLink"], ["class", "badge badge-primary pull-right", 4, "ngIf"], [1, "fa", "fa-star", "font-warning-o"], [1, "badge", "badge-primary", "pull-right"]],
    template: function JobDescComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "app-job-filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3)(5, "div", 4)(6, "div", 5)(7, "div", 6)(8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 9)(11, "h6", 10)(12, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "span", 12)(15, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function JobDescComponent_Template_button_click_15_listener() {
          return ctx.applyClick(ctx.arr);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Apply for this job");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "i", 14)(23, "i", 14)(24, "i", 14)(25, "i", 14)(26, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 15)(28, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Job Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 15)(33, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](35, "ul", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "div", 15)(37, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](39, "ul", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 15)(41, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](43, "ul", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "div", 15)(45, "button", 17)(46, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](47, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, " Save this job");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "button", 19)(50, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](51, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52, " Share");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "div", 21)(54, "h6", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55, "Similar Jobs");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](57, JobDescComponent_div_57_Template, 23, 9, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx.arr.logo, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.arr.job_name);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx.arr.job_area, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.arr.job_city);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.arr.Job_description);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.arr.Qualifications == null ? null : ctx.arr.Qualifications.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", ctx.arr.Qualifications == null ? null : ctx.arr.Qualifications.desc, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.arr.Agency_experience == null ? null : ctx.arr.Agency_experience.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", ctx.arr.Agency_experience == null ? null : ctx.arr.Agency_experience.desc, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.arr.Perks == null ? null : ctx.arr.Perks.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", ctx.arr.Perks == null ? null : ctx.arr.Perks.desc, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.jobs);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _job_filter_job_filter_component__WEBPACK_IMPORTED_MODULE_1__.JobFilterComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 61106:
/*!**************************************************************************!*\
  !*** ./src/app/components/job-search/job-filter/job-filter.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JobFilterComponent: () => (/* binding */ JobFilterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 76101);
/* harmony import */ var _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/components/feather-icons/feather-icons.component */ 49177);



class JobFilterComponent {
  constructor() {
    this.isFilter = false;
    this.isLocation = false;
    this.isJob_Title = false;
    this.isIndustry = false;
    this.isSpecific_skills = false;
  }
  ngOnInit() {}
  static #_ = this.ɵfac = function JobFilterComponent_Factory(t) {
    return new (t || JobFilterComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: JobFilterComponent,
    selectors: [["app-job-filter"]],
    decls: 150,
    vars: 12,
    consts: [["id", "accordionoc", 1, "default-according", "style-1", "faq-accordion", "job-accordion"], [1, "row"], [1, "col-xl-12"], [1, "card"], [1, "card-header"], [1, "mb-0"], ["aria-controls", "collapse", 1, "btn", "btn-link", "ps-0", 3, "click"], ["id", "collapseicon", 1, "collapse", "show", 3, "ngbCollapse"], [1, "card-body", "filter-cards-view", "animate-chk"], [1, "job-filter"], [1, "faq-form"], ["type", "text", "placeholder", "Search..", 1, "form-control"], [1, "search-icon", 3, "icon"], ["type", "text", "placeholder", "location..", 1, "form-control"], [1, "checkbox-animated"], ["for", "chk-ani", 1, "d-block"], ["id", "chk-ani", "type", "checkbox", 1, "checkbox_animated"], ["for", "chk-ani1", 1, "d-block"], ["id", "chk-ani1", "type", "checkbox", 1, "checkbox_animated"], ["for", "chk-ani2", 1, "d-block"], ["id", "chk-ani2", "type", "checkbox", 1, "checkbox_animated"], ["for", "chk-ani3", 1, "d-block"], ["id", "chk-ani3", "type", "checkbox", 1, "checkbox_animated"], ["for", "chk-ani4", 1, "d-block"], ["id", "chk-ani4", "type", "checkbox", 1, "checkbox_animated"], ["for", "chk-ani5", 1, "d-block"], ["id", "chk-ani5", "type", "checkbox", 1, "checkbox_animated"], ["type", "button", 1, "btn", "btn-primary", "text-center"], ["id", "collapseicon1", 1, "collapse", "show", 3, "ngbCollapse"], [1, "card-body", "animate-chk"], [1, "location-checkbox"], ["for", "chk-ani6", 1, "d-block"], ["id", "chk-ani6", "type", "checkbox", 1, "checkbox_animated"], [1, "d-block"], ["for", "chk-ani7", 1, "d-block"], ["id", "chk-ani7", "type", "checkbox", 1, "checkbox_animated"], ["for", "chk-ani8", 1, "d-block"], ["id", "chk-ani8", "type", "checkbox", 1, "checkbox_animated"], ["for", "chk-ani9", 1, "d-block"], ["id", "chk-ani9", "type", "checkbox", 1, "checkbox_animated"], ["for", "chk-ani10", 1, "d-block", "mb-0"], ["id", "chk-ani10", "type", "checkbox", 1, "checkbox_animated"], ["type", "button", 1, "btn", "btn-block", "btn-primary", "text-center"], ["id", "collapseicon2", 1, "collapse", "show", 3, "ngbCollapse"], ["for", "chk-ani11", 1, "d-block"], ["id", "chk-ani11", "type", "checkbox", 1, "checkbox_animated"], ["for", "chk-ani12", 1, "d-block"], ["id", "chk-ani12", "type", "checkbox", 1, "checkbox_animated"], ["for", "chk-ani13", 1, "d-block"], ["id", "chk-ani13", "type", "checkbox", 1, "checkbox_animated"], ["for", "chk-ani14", 1, "d-block"], ["id", "chk-ani14", "type", "checkbox", 1, "checkbox_animated"], ["for", "chk-ani15", 1, "d-block", "mb-0"], ["id", "chk-ani15", "type", "checkbox", 1, "checkbox_animated"], ["id", "collapseicon3", 1, "collapse", "show", 3, "ngbCollapse"], ["for", "chk-ani16", 1, "d-block"], ["id", "chk-ani16", "type", "checkbox", 1, "checkbox_animated"], ["for", "chk-ani17", 1, "d-block"], ["id", "chk-ani17", "type", "checkbox", 1, "checkbox_animated"], ["for", "chk-ani18", 1, "d-block"], ["id", "chk-ani18", "type", "checkbox", 1, "checkbox_animated"], ["for", "chk-ani19", 1, "d-block"], ["id", "chk-ani19", "type", "checkbox", 1, "checkbox_animated"], ["for", "chk-ani20", 1, "d-block", "mb-0"], ["id", "chk-ani20", "type", "checkbox", 1, "checkbox_animated"], ["id", "collapseicon4", 1, "collapse", "show", 3, "ngbCollapse"], ["for", "chk-ani21", 1, "d-block"], ["id", "chk-ani21", "type", "checkbox", 1, "checkbox_animated"], ["for", "chk-ani22", 1, "d-block"], ["id", "chk-ani22", "type", "checkbox", 1, "checkbox_animated"], ["for", "chk-ani23", 1, "d-block"], ["id", "chk-ani23", "type", "checkbox", 1, "checkbox_animated"], ["for", "chk-ani24", 1, "d-block"], ["id", "chk-ani24", "type", "checkbox", 1, "checkbox_animated"], ["for", "chk-ani25", 1, "d-block", "mb-0"], ["id", "chk-ani25", "type", "checkbox", 1, "checkbox_animated"]],
    template: function JobFilterComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h5", 5)(6, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function JobFilterComponent_Template_button_click_6_listener() {
          return ctx.isFilter = !ctx.isFilter;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 7)(9, "div", 8)(10, "div", 9)(11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "input", 11)(13, "app-feather-icons", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 9)(15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "input", 13)(17, "app-feather-icons", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 14)(19, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, " Full-time (8688) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, " Contract (503) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, " Part-time (288) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, " Internship (236) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, " Temporary (146) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, " Commission (25) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Find jobs");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 2)(40, "div", 3)(41, "div", 4)(42, "h5", 5)(43, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function JobFilterComponent_Template_button_click_43_listener() {
          return ctx.isLocation = !ctx.isLocation;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Location");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 28)(46, "div", 29)(47, "div", 30)(48, "label", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](49, "input", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, " New York");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, " NY (399)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "label", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](54, "input", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, " San Francisco");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "CA (252)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "label", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](59, "input", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, " Washington");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "DC (226)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "label", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](64, "input", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, " Seattle");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, "WA (242)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "label", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](69, "input", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, " Chicago");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, "IL (187)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "button", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, "All Locations");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "div", 2)(76, "div", 3)(77, "div", 4)(78, "h5", 5)(79, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function JobFilterComponent_Template_button_click_79_listener() {
          return ctx.isJob_Title = !ctx.isJob_Title;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80, "Job Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "div", 43)(82, "div", 29)(83, "label", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](84, "input", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](85, " UI/Ux designer(25) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "label", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](87, "input", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](88, " Graphic designer(10) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "label", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](90, "input", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](91, " Front end designer(15) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "label", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](93, "input", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](94, " PHP developer(42) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "label", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](96, "input", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](97, " React Developer(5) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "button", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](99, "All Job Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "div", 2)(101, "div", 3)(102, "div", 4)(103, "h5", 5)(104, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function JobFilterComponent_Template_button_click_104_listener() {
          return ctx.isIndustry = !ctx.isIndustry;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](105, "Industry");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "div", 54)(107, "div", 29)(108, "label", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](109, "input", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](110, " Computer Software(14) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "label", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](112, "input", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](113, " IT Engineer(10) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "label", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](115, "input", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](116, " Service industry(20) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](117, "label", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](118, "input", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](119, " Accounting(34) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](120, "label", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](121, "input", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](122, " Financial Services(5) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](123, "button", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](124, "All Industries");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "div", 2)(126, "div", 3)(127, "div", 4)(128, "h5", 5)(129, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function JobFilterComponent_Template_button_click_129_listener() {
          return ctx.isSpecific_skills = !ctx.isSpecific_skills;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](130, "Specific skills");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](131, "div", 65)(132, "div", 29)(133, "label", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](134, "input", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](135, " HTML,scss & sass ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](136, "label", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](137, "input", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](138, " Javascript ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](139, "label", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](140, "input", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](141, " Node.js ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](142, "label", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](143, "input", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](144, " Gulp & Pug ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](145, "label", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](146, "input", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](147, " Angular.js ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](148, "button", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](149, "All Skills");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-expanded", !ctx.isFilter);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngbCollapse", ctx.isFilter);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", "map-pin");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-expanded", !ctx.isLocation);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngbCollapse", ctx.isLocation);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-expanded", !ctx.isJob_Title);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngbCollapse", ctx.isJob_Title);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-expanded", !ctx.isIndustry);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngbCollapse", ctx.isIndustry);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-expanded", !ctx.isSpecific_skills);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngbCollapse", ctx.isSpecific_skills);
      }
    },
    dependencies: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbCollapse, _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_0__.FeatherIconsComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 98209:
/*!**********************************************************************!*\
  !*** ./src/app/components/job-search/job-list/job-list.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JobListComponent: () => (/* binding */ JobListComponent)
/* harmony export */ });
/* harmony import */ var _shared_data_job_search_job_search__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/data/job-search/job-search */ 66379);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _job_filter_job_filter_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../job-filter/job-filter.component */ 61106);





function JobListComponent_div_5_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function JobListComponent_div_5_span_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "New");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function JobListComponent_div_5_span_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const job_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](job_r1.type);
  }
}
const _c0 = a1 => ["/job-search/job-desc", a1];
function JobListComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, JobListComponent_div_5_div_1_Template, 2, 0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 7)(3, "div", 8)(4, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 11)(7, "h6", 12)(8, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, JobListComponent_div_5_span_10_Template, 2, 0, "span", 14)(11, JobListComponent_div_5_span_11_Template, 2, 1, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "i", 17)(18, "i", 17)(19, "i", 17)(20, "i", 17)(21, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const job_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", job_r1.ribbion == "true" ? "ribbon-vertical-left-wrapper" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", job_r1.ribbion == "true");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", job_r1.logo, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](10, _c0, job_r1.Id));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](job_r1.job_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", job_r1.type == "new");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", job_r1.type != "new");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", job_r1.job_area, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", job_r1.job_city, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](job_r1 == null ? null : job_r1.Job_description);
  }
}
class JobListComponent {
  constructor() {
    this.jobs = _shared_data_job_search_job_search__WEBPACK_IMPORTED_MODULE_0__.JobDB.Job_Category;
  }
  ngOnInit() {}
  static #_ = this.ɵfac = function JobListComponent_Factory(t) {
    return new (t || JobListComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: JobListComponent,
    selectors: [["app-job-list"]],
    decls: 6,
    vars: 1,
    consts: [[1, "container-fluid"], [1, "row"], [1, "col-xl-3", "xl-40"], [1, "col-xl-9", "xl-60"], ["class", "card", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "card", 3, "ngClass"], ["class", "ribbon ribbon-bookmark ribbon-vertical-left ribbon-secondary", 4, "ngIf"], [1, "job-search"], [1, "card-body"], [1, "media"], ["alt", "", 1, "img-40", "img-fluid", "m-r-20", 3, "src"], [1, "flex-grow-1"], [1, "f-w-600"], [3, "routerLink"], ["class", "badge badge-primary pull-right", 4, "ngIf"], ["class", "pull-right text-muted f-12 f-w-300", 4, "ngIf"], [1, "me-2"], [1, "fa", "fa-star", "font-warning"], [1, "ribbon", "ribbon-bookmark", "ribbon-vertical-left", "ribbon-secondary"], [1, "icofont", "icofont-love"], [1, "badge", "badge-primary", "pull-right"], [1, "pull-right", "text-muted", "f-12", "f-w-300"]],
    template: function JobListComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "app-job-filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, JobListComponent_div_5_Template, 24, 12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.jobs);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _job_filter_job_filter_component__WEBPACK_IMPORTED_MODULE_1__.JobFilterComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 60758:
/*!********************************************************************!*\
  !*** ./src/app/components/job-search/job-search-routing.module.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JobSearchRoutingModule: () => (/* binding */ JobSearchRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _job_list_job_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./job-list/job-list.component */ 98209);
/* harmony import */ var _job_apply_job_apply_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./job-apply/job-apply.component */ 14121);
/* harmony import */ var _job_desc_job_desc_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./job-desc/job-desc.component */ 83693);
/* harmony import */ var _job_card_job_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./job-card/job-card.component */ 62030);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 61699);







const routes = [{
  path: '',
  children: [{
    path: 'cardview',
    component: _job_card_job_card_component__WEBPACK_IMPORTED_MODULE_3__.JobCardComponent,
    data: {
      title: "Card View",
      breadcrumb: "Card View"
    }
  }, {
    path: 'listview',
    component: _job_list_job_list_component__WEBPACK_IMPORTED_MODULE_0__.JobListComponent,
    data: {
      title: "List View",
      breadcrumb: "List View"
    }
  }, {
    path: 'job-desc/:id',
    component: _job_desc_job_desc_component__WEBPACK_IMPORTED_MODULE_2__.JobDescComponent,
    data: {
      title: "Job Details",
      breadcrumb: "Job Details"
    }
  }, {
    path: 'job-apply/:id',
    component: _job_apply_job_apply_component__WEBPACK_IMPORTED_MODULE_1__.JobApplyComponent,
    data: {
      title: "Apply",
      breadcrumb: "Apply"
    }
  }]
}];
class JobSearchRoutingModule {
  static #_ = this.ɵfac = function JobSearchRoutingModule_Factory(t) {
    return new (t || JobSearchRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
    type: JobSearchRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](JobSearchRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
  });
})();

/***/ }),

/***/ 2223:
/*!************************************************************!*\
  !*** ./src/app/components/job-search/job-search.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JobSearchModule: () => (/* binding */ JobSearchModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 76101);
/* harmony import */ var _job_search_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./job-search-routing.module */ 60758);
/* harmony import */ var _job_list_job_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./job-list/job-list.component */ 98209);
/* harmony import */ var _job_apply_job_apply_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./job-apply/job-apply.component */ 14121);
/* harmony import */ var _job_desc_job_desc_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./job-desc/job-desc.component */ 83693);
/* harmony import */ var _job_card_job_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./job-card/job-card.component */ 62030);
/* harmony import */ var _job_filter_job_filter_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./job-filter/job-filter.component */ 61106);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/shared.module */ 56208);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 61699);











class JobSearchModule {
  static #_ = this.ɵfac = function JobSearchModule_Factory(t) {
    return new (t || JobSearchModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
    type: JobSearchModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _job_search_routing_module__WEBPACK_IMPORTED_MODULE_0__.JobSearchRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__.SharedModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](JobSearchModule, {
    declarations: [_job_list_job_list_component__WEBPACK_IMPORTED_MODULE_1__.JobListComponent, _job_apply_job_apply_component__WEBPACK_IMPORTED_MODULE_2__.JobApplyComponent, _job_desc_job_desc_component__WEBPACK_IMPORTED_MODULE_3__.JobDescComponent, _job_filter_job_filter_component__WEBPACK_IMPORTED_MODULE_5__.JobFilterComponent, _job_card_job_card_component__WEBPACK_IMPORTED_MODULE_4__.JobCardComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _job_search_routing_module__WEBPACK_IMPORTED_MODULE_0__.JobSearchRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__.SharedModule]
  });
})();

/***/ }),

/***/ 66379:
/*!******************************************************!*\
  !*** ./src/app/shared/data/job-search/job-search.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JobDB: () => (/* binding */ JobDB)
/* harmony export */ });
class JobDB {
  static #_ = this.Job_Category = [{
    Id: 1,
    logo: 'assets/images/job-search/1.jpg',
    job_name: 'UI/UX IT Frontend Developer',
    badgeType: 'primary',
    badgeValue: 'New',
    job_area: '(L6) Salt Lake City,',
    job_city: 'UT',
    Job_description: 'RUDRAKASH is looking for a UI/UX Designer to join our team. The world is seeing an explosion in the amount and variety of location-baWe are looking for a versatile UX/UI Designer to join our growing design team. React Native and other front end frameworks. Transform product wireframes into responsive, mobile user interface components and',
    Qualifications: {
      title: 'Qualifications',
      desc: `
                <li>Have shipped multiple iOS, Android, and/or web products </li>
                <li>5+ years UI/UX experience</li>
                <li>Portfolio demonstrating mastery of native iOS, Android, and/or responsive web design principles</li>
                <li>Ability to autonomously pursue elegant solutions to open-ended problems</li>
                <li>Comfort with ambiguity</li>
                <li>Proven ability to create interactive prototypes</li>
                <li>Strong verbal communication skills with ability to clearly communicate complex ideas and champion a design vision across all levels of an organization</li>
                <li>Strong written communication skills with ability to make transparent design documentation and client-facing presentations</li>
                <li>Ability to create and maintain flow charts, wire frames, prototypes, and mockups.</li>
                <li>Ability to effectively work on more than one project at a time</li>
                <li>Experience conducting user research and stakeholder interviews</li>
                <li>Solid grasp of standard design tools, ex: Sketch, Omnigraffle, the Adobe Suite, Zeplin, etc.</li>
                <li>Bonus Considerations </li>`
    },
    Agency_experience: {
      title: 'Agency experience',
      desc: `
                <li>Experience working with Agile development teams</li>
                <li>Experience with RITE method usability testing</li>
                <li>Experience in visual and motion design; ability to translate UX design into high quality visuals</li>
                <li>Mastery of Sketch & InVision</li>
                <li>Knowledge of mobile or front-end web programming</li>`
    },
    Perks: {
      title: 'Perks',
      desc: `
                <li>Competitive pay</li>
                <li>Competitive medical, dental, and vision insurance plans</li>
                <li>Company-provided 401(k) plan</li>
                <li>Paid vacation and sick time</li>
                <li>Free snacks and beverages</li>`
    },
    type: 'new',
    ribbion: 'false'
  }, {
    Id: 2,
    logo: 'assets/images/job-search/2.jpg',
    job_name: 'React/React Native Developer',
    job_area: 'San Diego,',
    job_city: 'CA',
    Job_description: 'Ideally 2+ years experience with React. Bonus points if you have React Native experience. This is an incredibly exciting opportunity to gain commercial , Professional experience of React Native and other front end frameworks. Transform product wireframes into responsive, mobile user interface components and',
    Qualifications: {
      title: 'Qualifications',
      desc: `
                <li>Have shipped multiple iOS, Android, and/or web products </li>
                <li>5+ years UI/UX experience</li>
                <li>Portfolio demonstrating mastery of native iOS, Android, and/or responsive web design principles</li>
                <li>Ability to autonomously pursue elegant solutions to open-ended problems</li>
                <li>Comfort with ambiguity</li>
                <li>Proven ability to create interactive prototypes</li>
                <li>Strong verbal communication skills with ability to clearly communicate complex ideas and champion a design vision across all levels of an organization</li>
                <li>Strong written communication skills with ability to make transparent design documentation and client-facing presentations</li>
                <li>Ability to create and maintain flow charts, wire frames, prototypes, and mockups.</li>
                <li>Ability to effectively work on more than one project at a time</li>
                <li>Experience conducting user research and stakeholder interviews</li>
                <li>Solid grasp of standard design tools, ex: Sketch, Omnigraffle, the Adobe Suite, Zeplin, etc.</li>
                <li>Bonus Considerations </li>`
    },
    Agency_experience: {
      title: 'Agency experience',
      desc: `
                <li>Experience working with Agile development teams</li>
                <li>Experience with RITE method usability testing</li>
                <li>Experience in visual and motion design; ability to translate UX design into high quality visuals</li>
                <li>Mastery of Sketch & InVision</li>
                <li>Knowledge of mobile or front-end web programming</li>`
    },
    Perks: {
      title: 'Perks',
      desc: `
                <li>Competitive pay</li>
                <li>Competitive medical, dental, and vision insurance plans</li>
                <li>Company-provided 401(k) plan</li>
                <li>Paid vacation and sick time</li>
                <li>Free snacks and beverages</li>`
    },
    type: 'new',
    ribbion: 'false'
  }, {
    Id: 3,
    logo: 'assets/images/job-search/3.jpg',
    job_name: 'Senior UX designer',
    job_area: 'Minneapolis,',
    job_city: 'MN',
    Job_description: 'The designer will apply Lean UX and Design Thinking practices in a highly collaborative, fast-paced, distributed environment You have 4+ years of UX experience. You support UX leadership by providing continuous feedback regarding the evolution of team process standards.',
    Qualifications: {
      title: 'Qualifications',
      desc: `
                <li>Have shipped multiple iOS, Android, and/or web products </li>
                <li>5+ years UI/UX experience</li>
                <li>Portfolio demonstrating mastery of native iOS, Android, and/or responsive web design principles</li>
                <li>Ability to autonomously pursue elegant solutions to open-ended problems</li>
                <li>Comfort with ambiguity</li>
                <li>Proven ability to create interactive prototypes</li>
                <li>Strong verbal communication skills with ability to clearly communicate complex ideas and champion a design vision across all levels of an organization</li>
                <li>Strong written communication skills with ability to make transparent design documentation and client-facing presentations</li>
                <li>Ability to create and maintain flow charts, wire frames, prototypes, and mockups.</li>
                <li>Ability to effectively work on more than one project at a time</li>
                <li>Experience conducting user research and stakeholder interviews</li>
                <li>Solid grasp of standard design tools, ex: Sketch, Omnigraffle, the Adobe Suite, Zeplin, etc.</li>
                <li>Bonus Considerations </li>`
    },
    Agency_experience: {
      title: 'Agency experience',
      desc: `
                <li>Experience working with Agile development teams</li>
                <li>Experience with RITE method usability testing</li>
                <li>Experience in visual and motion design; ability to translate UX design into high quality visuals</li>
                <li>Mastery of Sketch & InVision</li>
                <li>Knowledge of mobile or front-end web programming</li>`
    },
    Perks: {
      title: 'Perks',
      desc: `
                <li>Competitive pay</li>
                <li>Competitive medical, dental, and vision insurance plans</li>
                <li>Company-provided 401(k) plan</li>
                <li>Paid vacation and sick time</li>
                <li>Free snacks and beverages</li>`
    },
    type: '3 days to go',
    ribbion: 'true'
  }, {
    Id: 4,
    logo: 'assets/images/job-search/4.jpg',
    job_name: 'Front end web developer',
    job_area: 'Cisco',
    job_city: 'Lelystad, Netherlands',
    Job_description: 'Insipidity the sufficient discretion imprudence resolution sir him decisively. Proceed how any engaged visitor. Explained propriety off out perpetual his you. Feel sold off felt nay rose met you. We so entreaties cultivated astonished is. Was sister for few longer mrs sudden talent become.',
    Qualifications: {
      title: 'Qualifications',
      desc: `
                <li>Have shipped multiple iOS, Android, and/or web products </li>
                <li>5+ years UI/UX experience</li>
                <li>Portfolio demonstrating mastery of native iOS, Android, and/or responsive web design principles</li>
                <li>Ability to autonomously pursue elegant solutions to open-ended problems</li>
                <li>Comfort with ambiguity</li>
                <li>Proven ability to create interactive prototypes</li>
                <li>Strong verbal communication skills with ability to clearly communicate complex ideas and champion a design vision across all levels of an organization</li>
                <li>Strong written communication skills with ability to make transparent design documentation and client-facing presentations</li>
                <li>Ability to create and maintain flow charts, wire frames, prototypes, and mockups.</li>
                <li>Ability to effectively work on more than one project at a time</li>
                <li>Experience conducting user research and stakeholder interviews</li>
                <li>Solid grasp of standard design tools, ex: Sketch, Omnigraffle, the Adobe Suite, Zeplin, etc.</li>
                <li>Bonus Considerations </li>`
    },
    Agency_experience: {
      title: 'Agency experience',
      desc: `
                <li>Experience working with Agile development teams</li>
                <li>Experience with RITE method usability testing</li>
                <li>Experience in visual and motion design; ability to translate UX design into high quality visuals</li>
                <li>Mastery of Sketch & InVision</li>
                <li>Knowledge of mobile or front-end web programming</li>`
    },
    Perks: {
      title: 'Perks',
      desc: `
                <li>Competitive pay</li>
                <li>Competitive medical, dental, and vision insurance plans</li>
                <li>Company-provided 401(k) plan</li>
                <li>Paid vacation and sick time</li>
                <li>Free snacks and beverages</li>`
    },
    type: '2 days to go',
    ribbion: 'false'
  }, {
    Id: 5,
    logo: 'assets/images/job-search/5.jpg',
    job_name: 'Graphic designer',
    job_area: 'Infosys',
    job_city: 'Lelystad, Netherlands',
    Job_description: 'Contented get distrusts certainty nay are frankness concealed ham. On unaffected resolution on considered of. No thought me husband or colonel forming effects. End sitting shewing who saw besides son musical adapted. Contrasted interested eat alteration pianoforte sympathize was.',
    Qualifications: {
      title: 'Qualifications',
      desc: `
                <li>Have shipped multiple iOS, Android, and/or web products </li>
                <li>5+ years UI/UX experience</li>
                <li>Portfolio demonstrating mastery of native iOS, Android, and/or responsive web design principles</li>
                <li>Ability to autonomously pursue elegant solutions to open-ended problems</li>
                <li>Comfort with ambiguity</li>
                <li>Proven ability to create interactive prototypes</li>
                <li>Strong verbal communication skills with ability to clearly communicate complex ideas and champion a design vision across all levels of an organization</li>
                <li>Strong written communication skills with ability to make transparent design documentation and client-facing presentations</li>
                <li>Ability to create and maintain flow charts, wire frames, prototypes, and mockups.</li>
                <li>Ability to effectively work on more than one project at a time</li>
                <li>Experience conducting user research and stakeholder interviews</li>
                <li>Solid grasp of standard design tools, ex: Sketch, Omnigraffle, the Adobe Suite, Zeplin, etc.</li>
                <li>Bonus Considerations </li>`
    },
    Agency_experience: {
      title: 'Agency experience',
      desc: `
                <li>Experience working with Agile development teams</li>
                <li>Experience with RITE method usability testing</li>
                <li>Experience in visual and motion design; ability to translate UX design into high quality visuals</li>
                <li>Mastery of Sketch & InVision</li>
                <li>Knowledge of mobile or front-end web programming</li>`
    },
    Perks: {
      title: 'Perks',
      desc: `
                <li>Competitive pay</li>
                <li>Competitive medical, dental, and vision insurance plans</li>
                <li>Company-provided 401(k) plan</li>
                <li>Paid vacation and sick time</li>
                <li>Free snacks and beverages</li>`
    },
    type: '3 days to go',
    ribbion: 'false'
  }, {
    Id: 6,
    logo: 'assets/images/job-search/6.jpg',
    job_name: 'Designer, CRM',
    job_area: 'Citrix',
    job_city: 'Lelystad, Netherlands',
    Job_description: 'Situation admitting promotion at or to perceived be. Mr acuteness we as estimable enjoyment up. An held late as felt know. Learn do allow solid to grave. Middleton suspicion age her attention. Chiefly several bed its wishing. Is so moments on chamber pressed to. Doubtful yet way properly answered.',
    Qualifications: {
      title: 'Qualifications',
      desc: `
                <li>Have shipped multiple iOS, Android, and/or web products </li>
                <li>5+ years UI/UX experience</li>
                <li>Portfolio demonstrating mastery of native iOS, Android, and/or responsive web design principles</li>
                <li>Ability to autonomously pursue elegant solutions to open-ended problems</li>
                <li>Comfort with ambiguity</li>
                <li>Proven ability to create interactive prototypes</li>
                <li>Strong verbal communication skills with ability to clearly communicate complex ideas and champion a design vision across all levels of an organization</li>
                <li>Strong written communication skills with ability to make transparent design documentation and client-facing presentations</li>
                <li>Ability to create and maintain flow charts, wire frames, prototypes, and mockups.</li>
                <li>Ability to effectively work on more than one project at a time</li>
                <li>Experience conducting user research and stakeholder interviews</li>
                <li>Solid grasp of standard design tools, ex: Sketch, Omnigraffle, the Adobe Suite, Zeplin, etc.</li>
                <li>Bonus Considerations </li>`
    },
    Agency_experience: {
      title: 'Agency experience',
      desc: `
                <li>Experience working with Agile development teams</li>
                <li>Experience with RITE method usability testing</li>
                <li>Experience in visual and motion design; ability to translate UX design into high quality visuals</li>
                <li>Mastery of Sketch & InVision</li>
                <li>Knowledge of mobile or front-end web programming</li>`
    },
    Perks: {
      title: 'Perks',
      desc: `
                <li>Competitive pay</li>
                <li>Competitive medical, dental, and vision insurance plans</li>
                <li>Company-provided 401(k) plan</li>
                <li>Paid vacation and sick time</li>
                <li>Free snacks and beverages</li>`
    },
    type: '5 days to go',
    ribbion: 'false'
  }, {
    Id: 7,
    logo: 'assets/images/job-search/2.jpg',
    job_name: 'UI designer E-commerce',
    job_area: 'Ericsson',
    job_city: 'Lelystad, Netherlands',
    Job_description: 'Situation admitting promotion at or to perceived be. Mr acuteness we as estimable enjoyment up. An held late as felt know. Learn do allow solid to grave. Middleton suspicion age her attention. Chiefly several bed its wishing. Is so moments on chamber pressed to. Doubtful yet way properly answered.',
    Qualifications: {
      title: 'Qualifications',
      desc: `
                <li>Have shipped multiple iOS, Android, and/or web products </li>
                <li>5+ years UI/UX experience</li>
                <li>Portfolio demonstrating mastery of native iOS, Android, and/or responsive web design principles</li>
                <li>Ability to autonomously pursue elegant solutions to open-ended problems</li>
                <li>Comfort with ambiguity</li>
                <li>Proven ability to create interactive prototypes</li>
                <li>Strong verbal communication skills with ability to clearly communicate complex ideas and champion a design vision across all levels of an organization</li>
                <li>Strong written communication skills with ability to make transparent design documentation and client-facing presentations</li>
                <li>Ability to create and maintain flow charts, wire frames, prototypes, and mockups.</li>
                <li>Ability to effectively work on more than one project at a time</li>
                <li>Experience conducting user research and stakeholder interviews</li>
                <li>Solid grasp of standard design tools, ex: Sketch, Omnigraffle, the Adobe Suite, Zeplin, etc.</li>
                <li>Bonus Considerations </li>`
    },
    Agency_experience: {
      title: 'Agency experience',
      desc: `
                <li>Experience working with Agile development teams</li>
                <li>Experience with RITE method usability testing</li>
                <li>Experience in visual and motion design; ability to translate UX design into high quality visuals</li>
                <li>Mastery of Sketch & InVision</li>
                <li>Knowledge of mobile or front-end web programming</li>`
    },
    Perks: {
      title: 'Perks',
      desc: `
                <li>Competitive pay</li>
                <li>Competitive medical, dental, and vision insurance plans</li>
                <li>Company-provided 401(k) plan</li>
                <li>Paid vacation and sick time</li>
                <li>Free snacks and beverages</li>`
    },
    type: '3 days to go',
    ribbion: 'true'
  }, {
    Id: 8,
    logo: 'assets/images/job-search/3.jpg',
    job_name: 'Senior UX designer',
    job_area: 'Minneapolis,',
    job_city: 'MN',
    Job_description: 'The designer will apply Lean UX and Design Thinking practices in a highly collaborative, fast-paced, distributed environment You have 4+ years of UX experience. You support UX leadership by providing continuous feedback regarding the evolution of team process standards.',
    Qualifications: {
      title: 'Qualifications',
      desc: `
                <li>Have shipped multiple iOS, Android, and/or web products </li>
                <li>5+ years UI/UX experience</li>
                <li>Portfolio demonstrating mastery of native iOS, Android, and/or responsive web design principles</li>
                <li>Ability to autonomously pursue elegant solutions to open-ended problems</li>
                <li>Comfort with ambiguity</li>
                <li>Proven ability to create interactive prototypes</li>
                <li>Strong verbal communication skills with ability to clearly communicate complex ideas and champion a design vision across all levels of an organization</li>
                <li>Strong written communication skills with ability to make transparent design documentation and client-facing presentations</li>
                <li>Ability to create and maintain flow charts, wire frames, prototypes, and mockups.</li>
                <li>Ability to effectively work on more than one project at a time</li>
                <li>Experience conducting user research and stakeholder interviews</li>
                <li>Solid grasp of standard design tools, ex: Sketch, Omnigraffle, the Adobe Suite, Zeplin, etc.</li>
                <li>Bonus Considerations </li>`
    },
    Agency_experience: {
      title: 'Agency experience',
      desc: `
                <li>Experience working with Agile development teams</li>
                <li>Experience with RITE method usability testing</li>
                <li>Experience in visual and motion design; ability to translate UX design into high quality visuals</li>
                <li>Mastery of Sketch & InVision</li>
                <li>Knowledge of mobile or front-end web programming</li>`
    },
    Perks: {
      title: 'Perks',
      desc: `
                <li>Competitive pay</li>
                <li>Competitive medical, dental, and vision insurance plans</li>
                <li>Company-provided 401(k) plan</li>
                <li>Paid vacation and sick time</li>
                <li>Free snacks and beverages</li>`
    },
    type: '6 days to go',
    ribbion: 'false'
  }, {
    Id: 9,
    logo: 'assets/images/job-search/1.jpg',
    job_name: 'UI/UX IT Frontend Developer',
    badgeType: 'primary',
    badgeValue: 'New',
    job_area: '(L6) Salt Lake City,',
    job_city: 'UT',
    Job_description: 'RUDRAKASH is looking for a UI/UX Designer to join our team. The world is seeing an explosion in the amount and variety of location-baWe are looking for a versatile UX/UI Designer to join our growing design team. React Native and other front end frameworks. Transform product wireframes into responsive, mobile user interface components and',
    Qualifications: {
      title: 'Qualifications',
      desc: `
                <li>Have shipped multiple iOS, Android, and/or web products </li>
                <li>5+ years UI/UX experience</li>
                <li>Portfolio demonstrating mastery of native iOS, Android, and/or responsive web design principles</li>
                <li>Ability to autonomously pursue elegant solutions to open-ended problems</li>
                <li>Comfort with ambiguity</li>
                <li>Proven ability to create interactive prototypes</li>
                <li>Strong verbal communication skills with ability to clearly communicate complex ideas and champion a design vision across all levels of an organization</li>
                <li>Strong written communication skills with ability to make transparent design documentation and client-facing presentations</li>
                <li>Ability to create and maintain flow charts, wire frames, prototypes, and mockups.</li>
                <li>Ability to effectively work on more than one project at a time</li>
                <li>Experience conducting user research and stakeholder interviews</li>
                <li>Solid grasp of standard design tools, ex: Sketch, Omnigraffle, the Adobe Suite, Zeplin, etc.</li>
                <li>Bonus Considerations </li>`
    },
    Agency_experience: {
      title: 'Agency experience',
      desc: `
                <li>Experience working with Agile development teams</li>
                <li>Experience with RITE method usability testing</li>
                <li>Experience in visual and motion design; ability to translate UX design into high quality visuals</li>
                <li>Mastery of Sketch & InVision</li>
                <li>Knowledge of mobile or front-end web programming</li>`
    },
    Perks: {
      title: 'Perks',
      desc: `
                <li>Competitive pay</li>
                <li>Competitive medical, dental, and vision insurance plans</li>
                <li>Company-provided 401(k) plan</li>
                <li>Paid vacation and sick time</li>
                <li>Free snacks and beverages</li>`
    },
    type: 'new',
    ribbion: 'false'
  }, {
    Id: 10,
    logo: 'assets/images/job-search/2.jpg',
    job_name: 'Graphic designer',
    badgeType: 'primary',
    badgeValue: 'New',
    job_area: '(L6) Salt Lake City,',
    job_city: 'UT',
    Job_description: 'RUDRAKASH is looking for a UI/UX Designer to join our team. The world is seeing an explosion in the amount and variety of location-baWe are looking for a versatile UX/UI Designer to join our growing design team. React Native and other front end frameworks. Transform product wireframes into responsive, mobile user interface components and',
    Qualifications: {
      title: 'Qualifications',
      desc: `
                <li>Have shipped multiple iOS, Android, and/or web products </li>
                <li>5+ years UI/UX experience</li>
                <li>Portfolio demonstrating mastery of native iOS, Android, and/or responsive web design principles</li>
                <li>Ability to autonomously pursue elegant solutions to open-ended problems</li>
                <li>Comfort with ambiguity</li>
                <li>Proven ability to create interactive prototypes</li>
                <li>Strong verbal communication skills with ability to clearly communicate complex ideas and champion a design vision across all levels of an organization</li>
                <li>Strong written communication skills with ability to make transparent design documentation and client-facing presentations</li>
                <li>Ability to create and maintain flow charts, wire frames, prototypes, and mockups.</li>
                <li>Ability to effectively work on more than one project at a time</li>
                <li>Experience conducting user research and stakeholder interviews</li>
                <li>Solid grasp of standard design tools, ex: Sketch, Omnigraffle, the Adobe Suite, Zeplin, etc.</li>
                <li>Bonus Considerations </li>`
    },
    Agency_experience: {
      title: 'Agency experience',
      desc: `
                <li>Experience working with Agile development teams</li>
                <li>Experience with RITE method usability testing</li>
                <li>Experience in visual and motion design; ability to translate UX design into high quality visuals</li>
                <li>Mastery of Sketch & InVision</li>
                <li>Knowledge of mobile or front-end web programming</li>`
    },
    Perks: {
      title: 'Perks',
      desc: `
                <li>Competitive pay</li>
                <li>Competitive medical, dental, and vision insurance plans</li>
                <li>Company-provided 401(k) plan</li>
                <li>Paid vacation and sick time</li>
                <li>Free snacks and beverages</li>`
    },
    type: 'new',
    ribbion: 'false'
  }, {
    Id: 11,
    logo: 'assets/images/job-search/3.jpg',
    job_name: 'Business Developer',
    badgeType: 'primary',
    badgeValue: 'New',
    job_area: '(L6) Salt Lake City,',
    job_city: 'UT',
    Job_description: 'RUDRAKASH is looking for a UI/UX Designer to join our team. The world is seeing an explosion in the amount and variety of location-baWe are looking for a versatile UX/UI Designer to join our growing design team. React Native and other front end frameworks. Transform product wireframes into responsive, mobile user interface components and',
    Qualifications: {
      title: 'Qualifications',
      desc: `
                <li>Have shipped multiple iOS, Android, and/or web products </li>
                <li>5+ years UI/UX experience</li>
                <li>Portfolio demonstrating mastery of native iOS, Android, and/or responsive web design principles</li>
                <li>Ability to autonomously pursue elegant solutions to open-ended problems</li>
                <li>Comfort with ambiguity</li>
                <li>Proven ability to create interactive prototypes</li>
                <li>Strong verbal communication skills with ability to clearly communicate complex ideas and champion a design vision across all levels of an organization</li>
                <li>Strong written communication skills with ability to make transparent design documentation and client-facing presentations</li>
                <li>Ability to create and maintain flow charts, wire frames, prototypes, and mockups.</li>
                <li>Ability to effectively work on more than one project at a time</li>
                <li>Experience conducting user research and stakeholder interviews</li>
                <li>Solid grasp of standard design tools, ex: Sketch, Omnigraffle, the Adobe Suite, Zeplin, etc.</li>
                <li>Bonus Considerations </li>`
    },
    Agency_experience: {
      title: 'Agency experience',
      desc: `
                <li>Experience working with Agile development teams</li>
                <li>Experience with RITE method usability testing</li>
                <li>Experience in visual and motion design; ability to translate UX design into high quality visuals</li>
                <li>Mastery of Sketch & InVision</li>
                <li>Knowledge of mobile or front-end web programming</li>`
    },
    Perks: {
      title: 'Perks',
      desc: `
                <li>Competitive pay</li>
                <li>Competitive medical, dental, and vision insurance plans</li>
                <li>Company-provided 401(k) plan</li>
                <li>Paid vacation and sick time</li>
                <li>Free snacks and beverages</li>`
    },
    type: 'new',
    ribbion: 'false'
  }, {
    Id: 12,
    logo: 'assets/images/job-search/6.jpg',
    job_name: 'UI/UX IT Frontend Developer',
    badgeType: 'primary',
    badgeValue: 'New',
    job_area: '(L6) Salt Lake City,',
    job_city: 'UT',
    Job_description: 'RUDRAKASH is looking for a UI/UX Designer to join our team. The world is seeing an explosion in the amount and variety of location-baWe are looking for a versatile UX/UI Designer to join our growing design team. React Native and other front end frameworks. Transform product wireframes into responsive, mobile user interface components and',
    Qualifications: {
      title: 'Qualifications',
      desc: `
                <li>Have shipped multiple iOS, Android, and/or web products </li>
                <li>5+ years UI/UX experience</li>
                <li>Portfolio demonstrating mastery of native iOS, Android, and/or responsive web design principles</li>
                <li>Ability to autonomously pursue elegant solutions to open-ended problems</li>
                <li>Comfort with ambiguity</li>
                <li>Proven ability to create interactive prototypes</li>
                <li>Strong verbal communication skills with ability to clearly communicate complex ideas and champion a design vision across all levels of an organization</li>
                <li>Strong written communication skills with ability to make transparent design documentation and client-facing presentations</li>
                <li>Ability to create and maintain flow charts, wire frames, prototypes, and mockups.</li>
                <li>Ability to effectively work on more than one project at a time</li>
                <li>Experience conducting user research and stakeholder interviews</li>
                <li>Solid grasp of standard design tools, ex: Sketch, Omnigraffle, the Adobe Suite, Zeplin, etc.</li>
                <li>Bonus Considerations </li>`
    },
    Agency_experience: {
      title: 'Agency experience',
      desc: `
                <li>Experience working with Agile development teams</li>
                <li>Experience with RITE method usability testing</li>
                <li>Experience in visual and motion design; ability to translate UX design into high quality visuals</li>
                <li>Mastery of Sketch & InVision</li>
                <li>Knowledge of mobile or front-end web programming</li>`
    },
    Perks: {
      title: 'Perks',
      desc: `
                <li>Competitive pay</li>
                <li>Competitive medical, dental, and vision insurance plans</li>
                <li>Company-provided 401(k) plan</li>
                <li>Paid vacation and sick time</li>
                <li>Free snacks and beverages</li>`
    },
    type: 'new',
    ribbion: 'false'
  }, {
    Id: 13,
    logo: 'assets/images/job-search/2.jpg',
    job_name: 'JAVA Developer',
    badgeType: 'primary',
    badgeValue: 'New',
    job_area: '(L6) Salt Lake City,',
    job_city: 'UT',
    Job_description: 'RUDRAKASH is looking for a UI/UX Designer to join our team. The world is seeing an explosion in the amount and variety of location-baWe are looking for a versatile UX/UI Designer to join our growing design team. React Native and other front end frameworks. Transform product wireframes into responsive, mobile user interface components and',
    Qualifications: {
      title: 'Qualifications',
      desc: `
                <li>Have shipped multiple iOS, Android, and/or web products </li>
                <li>5+ years UI/UX experience</li>
                <li>Portfolio demonstrating mastery of native iOS, Android, and/or responsive web design principles</li>
                <li>Ability to autonomously pursue elegant solutions to open-ended problems</li>
                <li>Comfort with ambiguity</li>
                <li>Proven ability to create interactive prototypes</li>
                <li>Strong verbal communication skills with ability to clearly communicate complex ideas and champion a design vision across all levels of an organization</li>
                <li>Strong written communication skills with ability to make transparent design documentation and client-facing presentations</li>
                <li>Ability to create and maintain flow charts, wire frames, prototypes, and mockups.</li>
                <li>Ability to effectively work on more than one project at a time</li>
                <li>Experience conducting user research and stakeholder interviews</li>
                <li>Solid grasp of standard design tools, ex: Sketch, Omnigraffle, the Adobe Suite, Zeplin, etc.</li>
                <li>Bonus Considerations </li>`
    },
    Agency_experience: {
      title: 'Agency experience',
      desc: `
                <li>Experience working with Agile development teams</li>
                <li>Experience with RITE method usability testing</li>
                <li>Experience in visual and motion design; ability to translate UX design into high quality visuals</li>
                <li>Mastery of Sketch & InVision</li>
                <li>Knowledge of mobile or front-end web programming</li>`
    },
    Perks: {
      title: 'Perks',
      desc: `
                <li>Competitive pay</li>
                <li>Competitive medical, dental, and vision insurance plans</li>
                <li>Company-provided 401(k) plan</li>
                <li>Paid vacation and sick time</li>
                <li>Free snacks and beverages</li>`
    },
    type: 'new',
    ribbion: 'false'
  }, {
    Id: 14,
    logo: 'assets/images/job-search/4.jpg',
    job_name: 'Angular Developer',
    badgeType: 'primary',
    badgeValue: 'New',
    job_area: '(L6) Salt Lake City,',
    job_city: 'UT',
    Job_description: 'RUDRAKASH is looking for a UI/UX Designer to join our team. The world is seeing an explosion in the amount and variety of location-baWe are looking for a versatile UX/UI Designer to join our growing design team. React Native and other front end frameworks. Transform product wireframes into responsive, mobile user interface components and',
    Qualifications: {
      title: 'Qualifications',
      desc: `
                <li>Have shipped multiple iOS, Android, and/or web products </li>
                <li>5+ years UI/UX experience</li>
                <li>Portfolio demonstrating mastery of native iOS, Android, and/or responsive web design principles</li>
                <li>Ability to autonomously pursue elegant solutions to open-ended problems</li>
                <li>Comfort with ambiguity</li>
                <li>Proven ability to create interactive prototypes</li>
                <li>Strong verbal communication skills with ability to clearly communicate complex ideas and champion a design vision across all levels of an organization</li>
                <li>Strong written communication skills with ability to make transparent design documentation and client-facing presentations</li>
                <li>Ability to create and maintain flow charts, wire frames, prototypes, and mockups.</li>
                <li>Ability to effectively work on more than one project at a time</li>
                <li>Experience conducting user research and stakeholder interviews</li>
                <li>Solid grasp of standard design tools, ex: Sketch, Omnigraffle, the Adobe Suite, Zeplin, etc.</li>
                <li>Bonus Considerations </li>`
    },
    Agency_experience: {
      title: 'Agency experience',
      desc: `
                <li>Experience working with Agile development teams</li>
                <li>Experience with RITE method usability testing</li>
                <li>Experience in visual and motion design; ability to translate UX design into high quality visuals</li>
                <li>Mastery of Sketch & InVision</li>
                <li>Knowledge of mobile or front-end web programming</li>`
    },
    Perks: {
      title: 'Perks',
      desc: `
                <li>Competitive pay</li>
                <li>Competitive medical, dental, and vision insurance plans</li>
                <li>Company-provided 401(k) plan</li>
                <li>Paid vacation and sick time</li>
                <li>Free snacks and beverages</li>`
    },
    type: 'new',
    ribbion: 'false'
  }];
}

/***/ })

}]);
//# sourceMappingURL=src_app_components_job-search_job-search_module_ts.5539357bc8ce7176.js.map