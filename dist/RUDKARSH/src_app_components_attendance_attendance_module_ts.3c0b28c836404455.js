"use strict";
(self["webpackChunkRUDKARSH"] = self["webpackChunkRUDKARSH"] || []).push([["src_app_components_attendance_attendance_module_ts"],{

/***/ 66175:
/*!********************************************************************!*\
  !*** ./src/app/components/attendance/attendance-routing.module.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AttendanceRoutingModule: () => (/* binding */ AttendanceRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _period_attendance_period_attendance_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./period-attendance/period-attendance.component */ 85875);
/* harmony import */ var _show_attendance_show_attendance_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./show-attendance/show-attendance.component */ 3041);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);





const routes = [{
  path: '',
  children: [{
    path: 'period-attendance',
    component: _period_attendance_period_attendance_component__WEBPACK_IMPORTED_MODULE_0__.PeriodAttendanceComponent,
    data: {
      title: "Period Attendance",
      breadcrumb: "Period Attendance"
    }
  }, {
    path: 'show-attendance',
    component: _show_attendance_show_attendance_component__WEBPACK_IMPORTED_MODULE_1__.ShowAttendanceComponent,
    data: {
      title: "Show Attendance",
      breadcrumb: "Show Attendance"
    }
  }]
}];
class AttendanceRoutingModule {
  static #_ = this.ɵfac = function AttendanceRoutingModule_Factory(t) {
    return new (t || AttendanceRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: AttendanceRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AttendanceRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
})();

/***/ }),

/***/ 57789:
/*!************************************************************!*\
  !*** ./src/app/components/attendance/attendance.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AttendanceModule: () => (/* binding */ AttendanceModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _attendance_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./attendance-routing.module */ 66175);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);



class AttendanceModule {
  static #_ = this.ɵfac = function AttendanceModule_Factory(t) {
    return new (t || AttendanceModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: AttendanceModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _attendance_routing_module__WEBPACK_IMPORTED_MODULE_0__.AttendanceRoutingModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AttendanceModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _attendance_routing_module__WEBPACK_IMPORTED_MODULE_0__.AttendanceRoutingModule]
  });
})();

/***/ }),

/***/ 85875:
/*!****************************************************************************************!*\
  !*** ./src/app/components/attendance/period-attendance/period-attendance.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PeriodAttendanceComponent: () => (/* binding */ PeriodAttendanceComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 86515);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-pagination */ 71060);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ 27889);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _services_subject_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/subject.service */ 50729);
/* harmony import */ var _services_student_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/student.service */ 36550);










function PeriodAttendanceComponent_option_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", data_r4.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", data_r4.course_name, " ");
  }
}
function PeriodAttendanceComponent_option_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", data_r5.semester_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", data_r5.name, " ");
  }
}
function PeriodAttendanceComponent_option_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", data_r6.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", data_r6.name, " ");
  }
}
function PeriodAttendanceComponent_tr_51_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "td")(6, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function PeriodAttendanceComponent_tr_51_Template_input_ngModelChange_6_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10);
      const record_r7 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](record_r7.attendance = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Present");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function PeriodAttendanceComponent_tr_51_Template_input_ngModelChange_9_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10);
      const record_r7 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](record_r7.attendance = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Absent");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const record_r7 = ctx.$implicit;
    const indexOfElement_r8 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](indexOfElement_r8 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate3"]("", record_r7.first_name, " ", record_r7.middle_name, " ", record_r7.last_name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("name", "age", indexOfElement_r8, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", record_r7.attendance)("checked", record_r7.attendance == "present");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("name", "age", indexOfElement_r8, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", record_r7.attendance)("checked", record_r7.attendance == "absent");
  }
}
const _c0 = a1 => ({
  itemsPerPage: 10,
  currentPage: a1
});
class PeriodAttendanceComponent {
  constructor(subjectService, studentService) {
    this.subjectService = subjectService;
    this.studentService = studentService;
    this.studentList = [];
    this.attendanceForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({
      id: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(null),
      course_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]),
      semester_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]),
      date: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]),
      subject_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required])
    });
    this.subjectService.getCourseListener().subscribe(response => {
      this.courseList = response;
    });
    this.courseList = this.subjectService.getCourses();
  }
  getSemester() {
    this.subjectService.getSemesterByCourseId(this.attendanceForm.value.course_id).subscribe(response => {
      // @ts-ignore
      this.semesterList = response.data;
    });
  }
  getSubject() {
    this.subjectService.getSubjects(this.attendanceForm.value.course_id, this.attendanceForm.value.semester_id).subscribe(response => {
      // @ts-ignore
      this.subjectList = response.data;
    });
  }
  getStudentAttendanceList() {
    this.studentList = [];
    this.studentService.getStudentAttendance(this.attendanceForm.value.course_id, this.attendanceForm.value.semester_id, this.attendanceForm.value.date, this.attendanceForm.value.subject_id).subscribe(response => {
      // @ts-ignore
      this.studentList = response.data;
    });
  }
  saveAttendance() {
    let date = this.attendanceForm.value.date;
    let subject_id = this.attendanceForm.value.subject_id;
    let course_id = this.attendanceForm.value.course_id;
    let semester_id = this.attendanceForm.value.semester_id;
    this.studentList.forEach(function (value) {
      value.date = date;
      value.subject_id = subject_id;
      value.course_id = course_id;
      value.semester_id = semester_id;
    });
    this.studentService.saveStudentAttendance(this.studentList).subscribe(response => {
      // @ts-ignore
      if (response.success == 1) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
          position: 'center',
          icon: 'success',
          title: 'Attendance saved',
          showConfirmButton: false,
          timer: 1000
        });
        this.attendanceForm.reset();
        this.studentList = [];
      }
    });
  }
  static #_ = this.ɵfac = function PeriodAttendanceComponent_Factory(t) {
    return new (t || PeriodAttendanceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_subject_service__WEBPACK_IMPORTED_MODULE_1__.SubjectService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_student_service__WEBPACK_IMPORTED_MODULE_2__.StudentService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: PeriodAttendanceComponent,
    selectors: [["app-period-attendance"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
    decls: 56,
    vars: 11,
    consts: [[1, "container-fluid"], [1, "row"], [1, "col-sm-12", "col-xl-12"], [1, "col-sm-12"], [1, "card"], [1, "card-header"], [1, "card-body"], [1, "theme-form", 3, "formGroup"], [1, "col-md-3", "mb-3"], ["formControlName", "course_id", "required", "", 1, "form-select", 2, "width", "100%", 3, "change"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "semester_id", "required", "", 1, "form-select", 2, "width", "100%", 3, "change"], ["formControlName", "date", "type", "date", "placeholder", "Select date", 1, "form-control"], ["formControlName", "subject_id", "required", "", 1, "form-select", 2, "width", "100%", 3, "change"], [1, "row", 3, "hidden"], [1, "table-responsive"], [1, "table"], ["scope", "col"], [4, "ngFor", "ngForOf"], [1, "btn", "btn-primary", "me-1", 3, "click"], [1, "card-footer"], [3, "value"], ["type", "radio", "id", "age1", "value", "present", 2, "margin-left", "15px", 3, "name", "ngModel", "checked", "ngModelChange"], ["for", "age1"], ["type", "radio", "id", "age1", "value", "absent", 2, "margin-left", "15px", 3, "name", "ngModel", "checked", "ngModelChange"]],
    template: function PeriodAttendanceComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 1)(4, "div", 3)(5, "div", 4)(6, "div", 5)(7, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Attendance");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Student period Attendance");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 6)(12, "form", 7)(13, "div", 1)(14, "div", 8)(15, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Select Course");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "select", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function PeriodAttendanceComponent_Template_select_change_17_listener() {
          return ctx.getSemester();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, PeriodAttendanceComponent_option_18_Template, 2, 2, "option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 8)(20, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "Select Semester");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "select", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function PeriodAttendanceComponent_Template_select_change_22_listener() {
          return ctx.getSubject();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](23, PeriodAttendanceComponent_option_23_Template, 2, 2, "option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 8)(25, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "Select Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](27, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 8)(29, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "Select Subject");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "select", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function PeriodAttendanceComponent_Template_select_change_31_listener() {
          return ctx.getStudentAttendanceList();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](32, PeriodAttendanceComponent_option_32_Template, 2, 2, "option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "div", 14)(34, "div", 3)(35, "div", 4)(36, "div", 5)(37, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38, "Student List");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "div", 6)(40, "div", 15)(41, "table", 16)(42, "thead")(43, "tr")(44, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](45, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](47, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](49, "Attendance");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](51, PeriodAttendanceComponent_tr_51_Template, 12, 10, "tr", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](52, "paginate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PeriodAttendanceComponent_Template_button_click_53_listener() {
          return ctx.saveAttendance();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](54, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](55, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.attendanceForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.courseList);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.semesterList);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.subjectList);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("hidden", ctx.studentList.length == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](52, 6, ctx.studentList, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](9, _c0, ctx.p)));
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIconModule, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, ngx_pagination__WEBPACK_IMPORTED_MODULE_7__.NgxPaginationModule, ngx_pagination__WEBPACK_IMPORTED_MODULE_7__.PaginatePipe, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 3041:
/*!************************************************************************************!*\
  !*** ./src/app/components/attendance/show-attendance/show-attendance.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ShowAttendanceComponent: () => (/* binding */ ShowAttendanceComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-pagination */ 71060);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _services_subject_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/subject.service */ 50729);
/* harmony import */ var _services_student_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/student.service */ 36550);








function ShowAttendanceComponent_form_13_option_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", data_r6.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", data_r6.course_name, " ");
  }
}
function ShowAttendanceComponent_form_13_option_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", data_r7.semester_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", data_r7.name, " ");
  }
}
function ShowAttendanceComponent_form_13_option_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", data_r8.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate3"](" ", data_r8.first_name, " ", data_r8.middle_name, " ", data_r8.last_name, " ");
  }
}
function ShowAttendanceComponent_form_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form", 12)(1, "div", 1)(2, "div", 13)(3, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Select Course");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "select", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function ShowAttendanceComponent_form_13_Template_select_change_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r9.getSemester());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, ShowAttendanceComponent_form_13_option_6_Template, 2, 2, "option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 13)(8, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Select Semester");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "select", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function ShowAttendanceComponent_form_13_Template_select_change_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r11.getStudents());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, ShowAttendanceComponent_form_13_option_11_Template, 2, 2, "option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 13)(13, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Select Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 13)(17, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Select Student");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "select", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, ShowAttendanceComponent_form_13_option_20_Template, 2, 4, "option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 13)(22, "div")(23, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ShowAttendanceComponent_form_13_Template_button_click_23_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r12.getStudentAttendanceList());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Search");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r0.attendanceForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.courseList);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.semesterList);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.copyStudentList);
  }
}
function ShowAttendanceComponent_form_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form", 12)(1, "div", 1)(2, "div", 13)(3, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Select Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 13)(7, "div")(8, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ShowAttendanceComponent_form_14_Template_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r14);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r13.getStudentAttendanceList());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Search");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r1.attendanceForm);
  }
}
function ShowAttendanceComponent_tr_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const record_r15 = ctx.$implicit;
    const indexOfElement_r16 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](indexOfElement_r16 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](record_r15.subject_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](record_r15.attendance);
  }
}
class ShowAttendanceComponent {
  constructor(subjectService, studentService, datepipe) {
    this.subjectService = subjectService;
    this.studentService = studentService;
    this.datepipe = datepipe;
    this.isSuperAdmin = false;
    let user = JSON.parse(localStorage.getItem('user') || '{}');
    this.attendanceForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({
      id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(null),
      course_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
      semester_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
      date: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]),
      student_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(null)
    });
    if (user.user_type_id == 1) {
      this.studentService.getStudentListener().subscribe(response => {
        this.studentList = response;
      });
      this.studentList = this.studentService.getStudentLists();
      this.isSuperAdmin = true;
    } else {
      this.studentService.getStudentListener().subscribe(response => {
        this.studentList = response;
        this.attendanceForm.patchValue(this.studentList.find(x => x.id == user.id));
        this.attendanceForm.patchValue({
          student_id: this.studentList.find(x => x.id == user.id).id
        });
        this.attendanceForm.patchValue({
          date: this.datepipe.transform(new Date(), 'yyyy-MM-dd')
        });
      });
      this.studentList = this.studentService.getStudentLists();
      if (this.studentList.length > 0) {
        this.attendanceForm.patchValue(this.studentList.find(x => x.id == user.id));
        this.attendanceForm.patchValue({
          student_id: this.studentList.find(x => x.id == user.id).id
        });
        this.attendanceForm.patchValue({
          date: this.datepipe.transform(new Date(), 'yyyy-MM-dd')
        });
      }
    }
    this.subjectService.getCourseListener().subscribe(response => {
      this.courseList = response;
    });
    this.courseList = this.subjectService.getCourses();
  }
  getSemester() {
    this.subjectService.getSemesterByCourseId(this.attendanceForm.value.course_id).subscribe(response => {
      // @ts-ignore
      this.semesterList = response.data;
    });
  }
  getStudents() {
    this.copyStudentList = this.studentList.filter(x => x.course_id == this.attendanceForm.value.course_id);
    this.copyStudentList = this.copyStudentList.filter(x => x.semester_id == this.attendanceForm.value.semester_id);
  }
  getStudentAttendanceList() {
    this.studentList = [];
    this.studentService.getUserAttendance(this.attendanceForm.value.course_id, this.attendanceForm.value.semester_id, this.attendanceForm.value.date, this.attendanceForm.value.student_id).subscribe(response => {
      // @ts-ignore
      this.attendanceList = response.data;
    });
  }
  static #_ = this.ɵfac = function ShowAttendanceComponent_Factory(t) {
    return new (t || ShowAttendanceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_subject_service__WEBPACK_IMPORTED_MODULE_0__.SubjectService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_student_service__WEBPACK_IMPORTED_MODULE_1__.StudentService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__.DatePipe));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: ShowAttendanceComponent,
    selectors: [["app-show-attendance"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([_angular_common__WEBPACK_IMPORTED_MODULE_4__.DatePipe]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
    decls: 28,
    vars: 3,
    consts: [[1, "container-fluid"], [1, "row"], [1, "col-sm-12", "col-xl-12"], [1, "col-sm-12"], [1, "card"], [1, "card-header"], [1, "card-body"], ["class", "theme-form", 3, "formGroup", 4, "ngIf"], [1, "table-responsive"], [1, "table"], ["scope", "col"], [4, "ngFor", "ngForOf"], [1, "theme-form", 3, "formGroup"], [1, "col-md-3", "mb-3"], ["formControlName", "course_id", "required", "", 1, "form-select", 2, "width", "100%", 3, "change"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "semester_id", "required", "", 1, "form-select", 2, "width", "100%", 3, "change"], ["formControlName", "date", "type", "date", "placeholder", "Select date", 1, "form-control"], ["formControlName", "student_id", "required", "", 1, "form-select", 2, "width", "100%"], [1, "btn", "btn-primary", "me-1", 2, "margin-top", "25px", 3, "click"], [3, "value"]],
    template: function ShowAttendanceComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 1)(4, "div", 3)(5, "div", 4)(6, "div", 4)(7, "div", 5)(8, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Attendance");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Student Attendance");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, ShowAttendanceComponent_form_13_Template, 25, 4, "form", 7)(14, ShowAttendanceComponent_form_14_Template, 10, 1, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 4)(16, "div", 8)(17, "table", 9)(18, "thead")(19, "tr")(20, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Subject Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Attendance");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](27, ShowAttendanceComponent_tr_27_Template, 7, 3, "tr", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isSuperAdmin);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isSuperAdmin);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.attendanceList);
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RequiredValidator, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, ngx_pagination__WEBPACK_IMPORTED_MODULE_5__.NgxPaginationModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 36550:
/*!*********************************************!*\
  !*** ./src/app/services/student.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StudentService: () => (/* binding */ StudentService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 72513);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 20553);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 2389);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 13738);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 54860);
/* harmony import */ var _error_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./error.service */ 68027);






class StudentService {
  getStudentListener() {
    return this.studentListSubject.asObservable();
  }
  constructor(http, errorService) {
    this.http = http;
    this.errorService = errorService;
    this.BASE_API_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.BASE_API_URL;
    this.studentList = [];
    this.studentListSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    this.http.get(this.BASE_API_URL + '/getStudents').subscribe(response => {
      this.studentList = response.data;
      this.studentListSubject.next([...this.studentList]);
    });
  }
  getUpdatedStudentList() {
    this.http.get(this.BASE_API_URL + '/getStudents').subscribe(response => {
      this.studentList = response.data;
      this.studentListSubject.next([...this.studentList]);
    });
  }
  getStudentLists() {
    return [...this.studentList];
  }
  saveStudent(data) {
    return this.http.post(this.BASE_API_URL + '/saveStudent', data).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.errorService.serverError), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(response => {
      // @ts-ignore
      if (response.success == 1) {
        // @ts-ignore
        this.studentList.push(response.data);
        this.studentListSubject.next([...this.studentList]);
      }
    }));
  }
  updateStudent(value) {
    return this.http.post(this.BASE_API_URL + '/updateStudent', value).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.errorService.serverError), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(response => {
      // @ts-ignore
      if (response.success == 1) {
        // @ts-ignore
        const index = this.studentList.findIndex(x => x.id === response.data.id);
        // @ts-ignore
        this.studentList[index] = response.data;
        this.studentListSubject.next([...this.studentList]);
      }
    }));
  }
  promoteStudents(value) {
    return this.http.post(this.BASE_API_URL + '/promoteStudents', value).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.errorService.serverError), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(response => {
      // @ts-ignore
      if (response.success == 1) {
        this.getUpdatedStudentList();
      }
    }));
  }
  deleteStudents(id) {
    return this.http.get(this.BASE_API_URL + '/deleteMember/' + id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.errorService.serverError), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(response => {
      // @ts-ignore
      if (response.success == 1) {
        // @ts-ignore
        const index = this.studentList.findIndex(x => x.id === response.data.id);
        this.studentList.splice(index, 1);
        this.studentListSubject.next([...this.studentList]);
      }
    }));
  }
  getStudentAttendance(course_id, semester_id, date, subject_id) {
    return this.http.get(this.BASE_API_URL + '/getStudentAttendance/' + course_id + '/' + semester_id + '/' + date + '/' + subject_id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.errorService.serverError), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(response => {}));
  }
  getUserAttendance(course_id, semester_id, date, user_id) {
    return this.http.get(this.BASE_API_URL + '/getStudentOwnAttendance/' + course_id + '/' + semester_id + '/' + date + '/' + user_id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.errorService.serverError), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(response => {}));
  }
  saveStudentAttendance(data) {
    return this.http.post(this.BASE_API_URL + '/saveAttendance', data).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.errorService.serverError), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(response => {}));
  }
  static #_ = this.ɵfac = function StudentService_Factory(t) {
    return new (t || StudentService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_error_service__WEBPACK_IMPORTED_MODULE_1__.ErrorService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
    token: StudentService,
    factory: StudentService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 50729:
/*!*********************************************!*\
  !*** ./src/app/services/subject.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SubjectService: () => (/* binding */ SubjectService)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 20553);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 72513);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 2389);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 13738);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 54860);
/* harmony import */ var _error_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./error.service */ 68027);






class SubjectService {
  getSemesterListener() {
    return this.semesterSubject.asObservable();
  }
  subjectGroupListener() {
    return this.subjectGroupSubject.asObservable();
  }
  getWeekListener() {
    return this.weekListSubject.asObservable();
  }
  getSubjectListListener() {
    return this.subjectListSubject.asObservable();
  }
  getCourseListener() {
    return this.coursesSubject.asObservable();
  }
  constructor(http, errorService) {
    this.http = http;
    this.errorService = errorService;
    this.BASE_API_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.BASE_API_URL;
    this.semesterList = [];
    this.courseList = [];
    this.subjectList = [];
    this.weekList = [];
    this.subjectGroupList = [];
    this.semesterSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    this.coursesSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    this.subjectListSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    this.weekListSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    this.subjectGroupSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    this.http.get(this.BASE_API_URL + '/getSemester').subscribe(response => {
      this.semesterList = response.data;
      this.semesterSubject.next([...this.semesterList]);
    });
    this.http.get(this.BASE_API_URL + '/getCourse').subscribe(response => {
      this.courseList = response.data;
      this.coursesSubject.next([...this.courseList]);
    });
    this.http.get(this.BASE_API_URL + '/getWeekdays').subscribe(response => {
      this.weekList = response.data;
      this.weekListSubject.next([...this.weekList]);
    });
    this.http.get(this.BASE_API_URL + '/getSubject').subscribe(response => {
      this.subjectList = response.data;
      this.subjectListSubject.next([...this.subjectList]);
    });
    this.http.get(this.BASE_API_URL + '/getSubjectGroup').subscribe(response => {
      this.subjectGroupList = response.data;
      this.subjectGroupSubject.next([...this.subjectGroupList]);
    });
  }
  updateSemester(value) {
    return this.http.post(this.BASE_API_URL + '/updateSemester', value).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.errorService.serverError), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(response => {
      // @ts-ignore
      if (response.success == 1) {
        // @ts-ignore
        const index = this.semesterList.findIndex(x => x.id === response.data.id);
        // @ts-ignore
        this.semesterList[index] = response.data;
        this.semesterSubject.next([...this.semesterList]);
      }
    }));
  }
  getCourses() {
    return [...this.courseList];
  }
  getWeekDays() {
    return [...this.weekList];
  }
  getSubjectGroupList() {
    return [...this.subjectGroupList];
  }
  getSemester() {
    return [...this.semesterList];
  }
  getSubjectList() {
    return [...this.subjectList];
  }
  deleteSemester(value) {
    return this.http.get(this.BASE_API_URL + '/deleteSemester/' + value).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.errorService.serverError), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(response => {
      // @ts-ignore
      if (response.success == 1) {
        // @ts-ignore
        const index = this.semesterList.findIndex(x => x.id === response.data.id);
        this.semesterList.splice(index, 1);
        this.semesterSubject.next([...this.semesterList]);
      }
    }));
  }
  saveCourse(data) {
    return this.http.post(this.BASE_API_URL + '/saveCourse', data).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.errorService.serverError), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(response => {
      // @ts-ignore
      if (response.success == 1) {
        // @ts-ignore
        this.courseList.push(response.data);
        this.coursesSubject.next([...this.courseList]);
      }
    }));
  }
  saveSubject(data) {
    return this.http.post(this.BASE_API_URL + '/saveSubject', data).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.errorService.serverError), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(response => {
      // @ts-ignore
      if (response.success == 1) {
        // @ts-ignore
        this.subjectList.push(response.data);
        this.subjectListSubject.next([...this.subjectList]);
      }
    }));
  }
  updateSubject(data) {
    return this.http.post(this.BASE_API_URL + '/updateSubject', data).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.errorService.serverError), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(response => {
      // @ts-ignore
      if (response.success == 1) {
        // @ts-ignore
        const index = this.subjectList.findIndex(x => x.id === response.data.id);
        // @ts-ignore
        this.subjectList[index] = response.data;
        this.subjectListSubject.next([...this.subjectList]);
      }
    }));
  }
  getSemesterByCourseId(course_id) {
    return this.http.get(this.BASE_API_URL + '/getSemesterByCourse/' + course_id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.errorService.serverError), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(response => {}));
  }
  getSemesterTimeTable(course_id, semester_id) {
    return this.http.get(this.BASE_API_URL + '/getSemesterTimeTableByCourseAndSemesterId/' + course_id + '/' + semester_id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.errorService.serverError), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(response => {}));
  }
  getSubjects(course_id, semester_id) {
    return this.http.get(this.BASE_API_URL + '/getSubject/' + course_id + '/' + semester_id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.errorService.serverError), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(response => {}));
  }
  getTeacherList(course_id, semester_id) {
    return this.http.get(this.BASE_API_URL + '/getTeacherByCourseAndSem/' + course_id + '/' + semester_id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.errorService.serverError), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(response => {}));
  }
  deleteSubject(value) {
    return this.http.get(this.BASE_API_URL + '/deleteSubject/' + value).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.errorService.serverError), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(response => {
      // @ts-ignore
      if (response.success == 1) {
        // @ts-ignore
        const index = this.subjectList.findIndex(x => x.id === response.data.id);
        this.subjectList.splice(index, 1);
        this.subjectListSubject.next([...this.subjectList]);
      }
    }));
  }
  deleteCourse(value) {
    return this.http.get(this.BASE_API_URL + '/deleteCourse/' + value).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.errorService.serverError), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(response => {
      // @ts-ignore
      if (response.success == 1) {
        // @ts-ignore
        const index = this.courseList.findIndex(x => x.id === response.data.id);
        this.courseList.splice(index, 1);
        this.coursesSubject.next([...this.courseList]);
      }
    }));
  }
  saveSemester(value) {
    return this.http.post(this.BASE_API_URL + '/saveSemester', value).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.errorService.serverError), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(response => {
      // @ts-ignore
      this.semesterList.push(response.data);
      this.semesterSubject.next([...this.semesterList]);
    }));
  }
  updateCourse(data) {
    return this.http.post(this.BASE_API_URL + '/updateCourse', data).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.errorService.serverError), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(response => {
      // @ts-ignore
      if (response.success == 1) {
        // @ts-ignore
        const index = this.courseList.findIndex(x => x.id === response.data.id);
        // @ts-ignore
        this.courseList[index] = response.data;
        this.coursesSubject.next([...this.courseList]);
      }
    }));
  }
  createSemesterTimetable(value) {
    return this.http.post(this.BASE_API_URL + '/saveSemesterTimeTable', value).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.errorService.serverError), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(response => {}));
  }
  updateSemesterTimeTable(data) {
    return this.http.post(this.BASE_API_URL + '/updateSemesterTimeTable', data).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.errorService.serverError), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(response => {}));
  }
  deleteSemesterTimeTable(id) {
    return this.http.get(this.BASE_API_URL + '/deleteSemesterTimeTable/' + id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.errorService.serverError), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(response => {}));
  }
  saveSubjectGroup(value) {
    return this.http.post(this.BASE_API_URL + '/saveSubjectGroup', value).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.errorService.serverError), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(response => {
      // @ts-ignore
      if (response.success == 1) {
        // @ts-ignore
        this.subjectGroupList = response.data;
        this.subjectGroupSubject.next([...this.subjectGroupList]);
      }
    }));
  }
  updateSubjectGroup(value) {
    return this.http.post(this.BASE_API_URL + '/updateSubjectGroup', value).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.errorService.serverError), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(response => {
      // @ts-ignore
      if (response.success == 1) {
        // @ts-ignore
        this.subjectGroupList = response.data;
        this.subjectGroupSubject.next([...this.subjectGroupList]);
      }
    }));
  }
  deleteSubjectGroup(course_id) {
    return this.http.get(this.BASE_API_URL + '/deleteSubjectGroup/' + course_id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.errorService.serverError), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(response => {
      // @ts-ignore
      if (response.success == 1) {
        // @ts-ignore
        this.subjectGroupList = response.data;
        this.subjectGroupSubject.next([...this.subjectGroupList]);
      }
    }));
  }
  static #_ = this.ɵfac = function SubjectService_Factory(t) {
    return new (t || SubjectService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_error_service__WEBPACK_IMPORTED_MODULE_1__.ErrorService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
    token: SubjectService,
    factory: SubjectService.ɵfac,
    providedIn: 'root'
  });
}

/***/ })

}]);
//# sourceMappingURL=src_app_components_attendance_attendance_module_ts.3c0b28c836404455.js.map