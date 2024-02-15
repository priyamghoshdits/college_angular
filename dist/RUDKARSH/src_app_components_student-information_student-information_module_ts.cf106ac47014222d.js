"use strict";
(self["webpackChunkRUDKARSH"] = self["webpackChunkRUDKARSH"] || []).push([["src_app_components_student-information_student-information_module_ts"],{

/***/ 35799:
/*!*******************************!*\
  !*** ./custom-filter.pipe.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomFilterPipe: () => (/* binding */ CustomFilterPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);

class CustomFilterPipe {
  transform(items, term, excludes = []) {
    if (!term || !items) return items;
    return CustomFilterPipe.filter(items, term, excludes);
  }
  static filter(items, term, excludes) {
    const toCompare = term.toLowerCase();
    function checkInside(item, term) {
      if (typeof item === "string" && item.toString().toLowerCase().includes(toCompare)) {
        return true;
      }
      for (let property in item) {
        if (item[property] === null || item[property] == undefined || excludes.includes(property)) {
          continue;
        }
        if (typeof item[property] === "object") {
          if (checkInside(item[property], term)) {
            return true;
          }
        } else if (item[property].toString().toLowerCase().includes(toCompare)) {
          return true;
        }
      }
      return false;
    }
    return items.filter(function (item) {
      return checkInside(item, term);
    });
  }
  static #_ = this.ɵfac = function CustomFilterPipe_Factory(t) {
    return new (t || CustomFilterPipe)();
  };
  static #_2 = this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
    name: "customFilter",
    type: CustomFilterPipe,
    pure: true,
    standalone: true
  });
}

/***/ }),

/***/ 31118:
/*!***************************************************************************************************!*\
  !*** ./src/app/components/student-information/student-admisssion/student-admisssion.component.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StudentAdmisssionComponent: () => (/* binding */ StudentAdmisssionComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ 86515);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 76101);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ 27889);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var custom_filter_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! custom-filter.pipe */ 35799);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _services_member_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/member.service */ 22371);
/* harmony import */ var _services_subject_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/subject.service */ 50729);
/* harmony import */ var _services_session_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/session.service */ 50983);
/* harmony import */ var _services_student_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/student.service */ 36550);
/* harmony import */ var _services_image_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/image.service */ 34490);
/* harmony import */ var _services_agent_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/agent.service */ 73421);
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../services/common.service */ 75731);
/* harmony import */ var _services_roles_and_permission_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../services/roles-and-permission.service */ 5730);

















function StudentAdmisssionComponent_div_1_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 6)(1, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "Show All Students");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("hidden", ctx_r1.active != 2);
  }
}
function StudentAdmisssionComponent_div_1_li_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "li", 11)(1, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function StudentAdmisssionComponent_div_1_li_15_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r13);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r12.activeTab(2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "Show Students");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngbNavItem", 2);
  }
}
function StudentAdmisssionComponent_div_1_option_136_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "option", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", data_r14.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", data_r14.name, " ");
  }
}
function StudentAdmisssionComponent_div_1_option_146_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "option", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", data_r15.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", data_r15.course_name, " ");
  }
}
function StudentAdmisssionComponent_div_1_option_151_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "option", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", data_r16.semester_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", data_r16.name, " ");
  }
}
function StudentAdmisssionComponent_div_1_option_165_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "option", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", data_r17.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", data_r17.name, " ");
  }
}
function StudentAdmisssionComponent_div_1_option_170_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "option", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", data_r18.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate2"](" ", data_r18.first_name, " ", data_r18.last_name, " ");
  }
}
function StudentAdmisssionComponent_div_1_button_227_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function StudentAdmisssionComponent_div_1_button_227_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r20);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r19.saveStudent());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Save Student");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("hidden", ctx_r9.isUpdateable == true);
  }
}
function StudentAdmisssionComponent_div_1_button_228_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function StudentAdmisssionComponent_div_1_button_228_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r22);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r21.updateStudent());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Update Student");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("hidden", ctx_r10.isUpdateable == false);
  }
}
function StudentAdmisssionComponent_div_1_div_231_th_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "th", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function StudentAdmisssionComponent_div_1_div_231_tr_28_a_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "a", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function StudentAdmisssionComponent_div_1_div_231_tr_28_a_16_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r31);
      const record_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r29.editStudent(record_r25));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
}
function StudentAdmisssionComponent_div_1_div_231_tr_28_a_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "a", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function StudentAdmisssionComponent_div_1_div_231_tr_28_a_17_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r34);
      const record_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r32.deleteStudent(record_r25));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
}
function StudentAdmisssionComponent_div_1_div_231_tr_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](16, StudentAdmisssionComponent_div_1_div_231_tr_28_a_16_Template, 3, 0, "a", 94)(17, StudentAdmisssionComponent_div_1_div_231_tr_28_a_17_Template, 3, 0, "a", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const record_r25 = ctx.$implicit;
    const indexOfElement_r26 = ctx.index;
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](indexOfElement_r26 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate3"]("", record_r25.first_name, " ", record_r25.middle_name, " ", record_r25.last_name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](record_r25.gender);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](record_r25.dob);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](record_r25.blood_group);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](record_r25.user_type);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](record_r25.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r24.permission[1].permission == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r24.permission[2].permission == 1);
  }
}
function StudentAdmisssionComponent_div_1_div_231_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 15)(1, "div", 85)(2, "div", 86)(3, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4, "Search");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "div", 87)(6, "input", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function StudentAdmisssionComponent_div_1_div_231_Template_input_ngModelChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r36);
      const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r35.searchItem = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "div", 5)(8, "div", 89)(9, "table", 90)(10, "thead")(11, "tr")(12, "th", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](13, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](14, "th", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](15, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "th", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](17, "Gender");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](18, "th", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](19, "Date Of Birth");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](20, "th", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](21, "Blood Group");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](22, "th", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](23, "Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](24, "th", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](25, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](26, StudentAdmisssionComponent_div_1_div_231_th_26_Template, 2, 0, "th", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](27, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](28, StudentAdmisssionComponent_div_1_div_231_tr_28_Template, 18, 11, "tr", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](29, "customFilter");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("hidden", ctx_r11.active != 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx_r11.searchItem);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r11.permission[0].permission == 1 && ctx_r11.permission[1].permission == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](29, 4, ctx_r11.studentList, ctx_r11.searchItem));
  }
}
function StudentAdmisssionComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 2)(1, "div", 3)(2, "div", 2)(3, "div", 4)(4, "div", 5)(5, "div", 6)(6, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7, "Student Admission");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](8, StudentAdmisssionComponent_div_1_div_8_Template, 3, 1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "div", 8)(10, "ul", 9, 10)(12, "li", 11)(13, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function StudentAdmisssionComponent_div_1_Template_a_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r38);
      const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r37.activeTab(1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](14, "Add Student");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](15, StudentAdmisssionComponent_div_1_li_15_Template, 3, 1, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](16, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](17, "div", 15)(18, "div", 16)(19, "form", 17)(20, "div", 2)(21, "div", 18)(22, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](23, "Student ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](24, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("blur", function StudentAdmisssionComponent_div_1_Template_input_blur_24_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r38);
      const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r39.checkUniqueId());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](25, "div", 18)(26, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](27, "First Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](28, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](29, "div", 18)(30, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](31, "Middle Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](32, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](33, "div", 18)(34, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](35, "Last Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](36, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](37, "div", 2)(38, "div", 18)(39, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](40, "Gender");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](41, "select", 23)(42, "option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](43, " Male ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](44, "option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](45, " Female ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](46, "div", 18)(47, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](48, "Date Of Birth");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](49, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](50, "div", 18)(51, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](52, "Admission date");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](53, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](54, "div", 18)(55, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](56, "Phone Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](57, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](58, "div", 2)(59, "div", 18)(60, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](61, "Emergency Contact Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](62, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](63, "div", 18)(64, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](65, "Material Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](66, "select", 30)(67, "option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](68, " Single ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](69, "option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](70, " Married ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](71, "option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](72, " Widowed ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](73, "option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](74, " Seperated ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](75, "option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](76, " Not Specified ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](77, "div", 18)(78, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](79, "Qualification");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](80, "input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](81, "div", 2)(82, "div", 18)(83, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](84, "Upload Image");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](85, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function StudentAdmisssionComponent_div_1_Template_input_change_85_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r38);
      const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r40.onSelect1($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](86, "div", 18)(87, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](88, "Blood Group");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](89, "select", 38)(90, "option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](91, " A+ ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](92, "option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](93, " A- ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](94, "option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](95, " B+ ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](96, "option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](97, " B- ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](98, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](99, " AB+ ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](100, "option", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](101, " AB- ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](102, "option", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](103, " O+ ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](104, "option", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](105, " O- ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](106, "div", 18)(107, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](108, "Religion");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](109, "select", 47)(110, "option", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](111, " Hinduism ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](112, "option", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](113, " Buddhism ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](114, "option", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](115, " Christianity ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](116, "option", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](117, " Confucianism ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](118, "option", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](119, " Islam ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](120, "option", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](121, " Jainism ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](122, "option", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](123, " Judaism ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](124, "option", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](125, " Shinto ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](126, "option", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](127, " Sikhism ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](128, "option", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](129, " Taoism ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](130, "option", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](131, " Zoroastrianism ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](132, "div", 18)(133, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](134, "Category");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](135, "select", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](136, StudentAdmisssionComponent_div_1_option_136_Template, 2, 2, "option", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](137, "div", 2)(138, "div", 18)(139, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](140, "Email address (Login Email)");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](141, "input", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](142, "div", 18)(143, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](144, "Select Course");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](145, "select", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function StudentAdmisssionComponent_div_1_Template_select_change_145_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r38);
      const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r41.getSemester());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](146, StudentAdmisssionComponent_div_1_option_146_Template, 2, 2, "option", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](147, "div", 18)(148, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](149, "Select Semester");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](150, "select", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](151, StudentAdmisssionComponent_div_1_option_151_Template, 2, 2, "option", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](152, "div", 2)(153, "div", 18)(154, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](155, "Current Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](156, "input", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](157, "div", 18)(158, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](159, "Permanent Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](160, "input", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](161, "div", 18)(162, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](163, "Select Session");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](164, "select", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](165, StudentAdmisssionComponent_div_1_option_165_Template, 2, 2, "option", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](166, "div", 18)(167, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](168, "Agent");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](169, "select", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](170, StudentAdmisssionComponent_div_1_option_170_Template, 2, 3, "option", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](171, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](172, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](173, "Guardian Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](174, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](175, "div", 2)(176, "div", 68)(177, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](178, "Father Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](179, "input", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](180, "div", 68)(181, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](182, "Father Phone no.");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](183, "input", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](184, "div", 68)(185, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](186, "Father Occupation");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](187, "input", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](188, "div", 2)(189, "div", 68)(190, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](191, "Mother Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](192, "input", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](193, "div", 68)(194, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](195, "Mother Phone no.");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](196, "input", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](197, "div", 68)(198, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](199, "Mother Occupation");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](200, "input", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](201, "div", 2)(202, "div", 68)(203, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](204, "Guardian Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](205, "input", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](206, "div", 68)(207, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](208, "Guardian Phone no.");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](209, "input", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](210, "div", 68)(211, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](212, "Guardian Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](213, "input", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](214, "div", 2)(215, "div", 68)(216, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](217, "Guardian Relation");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](218, "input", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](219, "div", 68)(220, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](221, "Guardian Occupation");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](222, "input", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](223, "div", 68)(224, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](225, "Guardian Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](226, "input", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](227, StudentAdmisssionComponent_div_1_button_227_Template, 2, 1, "button", 81)(228, StudentAdmisssionComponent_div_1_button_228_Template, 2, 1, "button", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](229, "button", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function StudentAdmisssionComponent_div_1_Template_button_click_229_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r38);
      const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r42.cancelUpdate());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](230, "cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](231, StudentAdmisssionComponent_div_1_div_231_Template, 30, 7, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](11);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("hidden", ctx_r0.active != 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.permission[3].permission == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("activeId", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngbNavItem", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.permission[3].permission == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngbNavOutlet", _r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("hidden", ctx_r0.active != 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formGroup", ctx_r0.studentCreationForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](66);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("multiple", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](51);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r0.categoryList);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r0.courseList);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r0.semesterList);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r0.sessionList);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx_r0.agentList);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](57);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.permission[0].permission == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.permission[1].permission == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("hidden", ctx_r0.isUpdateable == false);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.permission[3].permission == 1);
  }
}
class StudentAdmisssionComponent {
  constructor(memberService, subjectService, sessionService, studentService, imageService, agentService, commonService, roleAndPermissionService) {
    this.memberService = memberService;
    this.subjectService = subjectService;
    this.sessionService = sessionService;
    this.studentService = studentService;
    this.imageService = imageService;
    this.agentService = agentService;
    this.commonService = commonService;
    this.roleAndPermissionService = roleAndPermissionService;
    this.active = 1;
    this.isUpdateable = false;
    this.rolesAndPermission = [];
    this.permission = [];
    this.roleAndPermissionService.getRolesAndPermissionListener().subscribe(response => {
      this.rolesAndPermission = response;
      this.permission = this.rolesAndPermission.find(x => x.name == 'STUDENT ADMISSION').permission;
    });
    this.rolesAndPermission = this.roleAndPermissionService.getRolesAndPermission();
    if (this.rolesAndPermission.length > 0) {
      this.permission = this.rolesAndPermission.find(x => x.name == 'STUDENT ADMISSION').permission;
    }
    this.studentCreationForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormGroup({
      id: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(null),
      identification_no: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]),
      first_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]),
      middle_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]),
      last_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]),
      gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]),
      dob: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]),
      admission_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(null),
      image: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(null),
      mobile_no: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]),
      emergency_phone_number: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]),
      material_status: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]),
      admission_status: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]),
      qualification: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]),
      current_address: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]),
      permanent_address: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]),
      religion: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]),
      blood_group: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]),
      category_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]),
      email: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required]),
      course_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(null),
      semester_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(null),
      agent_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(null),
      father_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(null),
      father_phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(null),
      father_occupation: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(null),
      mother_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(null),
      mother_phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(null),
      mother_occupation: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(null),
      guardian_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(null),
      guardian_phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(null),
      guardian_email: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(null),
      guardian_relation: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(null),
      guardian_occupation: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(null),
      guardian_address: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(null),
      session_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControl(null)
    });
    this.memberService.getCategoryListener().subscribe(response => {
      this.categoryList = response;
    });
    this.categoryList = this.memberService.getCategoryList();
    this.subjectService.getCourseListener().subscribe(response => {
      this.courseList = response;
    });
    this.courseList = this.subjectService.getCourses();
    this.agentService.getAgentListListener().subscribe(response => {
      this.agentList = response;
    });
    this.agentList = this.agentService.getAgentList();
    this.sessionService.getSessionListener().subscribe(response => {
      this.sessionList = response;
    });
    this.sessionList = this.sessionService.getSessionList();
    this.studentService.getStudentListener().subscribe(response => {
      this.studentList = response;
    });
    this.studentList = this.studentService.getStudentLists();
  }
  getSemester() {
    this.subjectService.getSemesterByCourseId(this.studentCreationForm.value.course_id).subscribe(response => {
      // @ts-ignore
      this.semesterList = response.data;
    });
  }
  checkUniqueId() {
    this.commonService.checkId(this.studentCreationForm.value.identification_no).subscribe(response => {
      if (response.success == 0) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
          position: 'center',
          icon: 'error',
          title: 'Duplicate ID',
          showConfirmButton: false,
          timer: 1000
        });
        this.studentCreationForm.controls['identification_no'].reset();
      }
    });
  }
  onSelect1(event) {
    let file;
    file = event.target.files[0];
    const formData = new FormData();
    formData.append("image", file);
    // @ts-ignore
    formData.append("p_image", this.studentCreationForm.value.id ? this.studentCreationForm.value.id : null);
    this.imageService.uploadProfilePic(formData).subscribe();
    this.studentCreationForm.patchValue({
      image: file['name']
    });
  }
  activeTab(data) {
    this.active = data;
  }
  editStudent(data) {
    this.subjectService.getSemesterByCourseId(data.course_id).subscribe(response => {
      // @ts-ignore
      this.semesterList = response.data;
      this.studentCreationForm.patchValue(data);
      this.isUpdateable = true;
      this.active = 1;
    });
  }
  saveStudent() {
    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
      title: 'Please Wait !',
      html: 'Saving ...',
      allowOutsideClick: false,
      didOpen: () => {
        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().showLoading();
      }
    });
    this.studentService.saveStudent(this.studentCreationForm.value).subscribe(response => {
      // @ts-ignore
      if (response.success == 1) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().close();
        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
          position: 'center',
          icon: 'success',
          title: 'Student Saved',
          showConfirmButton: false,
          timer: 1000
        });
        this.studentCreationForm.reset();
      }
    });
  }
  updateStudent() {
    this.studentService.updateStudent(this.studentCreationForm.value).subscribe(response => {
      // @ts-ignore
      if (response.success == 1) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
          position: 'center',
          icon: 'success',
          title: 'Student Updated',
          showConfirmButton: false,
          timer: 1000
        });
        this.cancelUpdate();
      }
    });
  }
  cancelUpdate() {
    this.studentCreationForm.reset();
    this.isUpdateable = false;
  }
  deleteStudent(data) {
    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
      title: 'Confirmation',
      text: 'Do you sure to delete ?',
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete It!'
    }).then(result => {
      if (result.isConfirmed) {
        this.studentService.deleteStudents(data.id).subscribe(response => {
          // @ts-ignore
          if (response.success == 1) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
              position: 'center',
              icon: 'success',
              title: 'Student Deleted',
              showConfirmButton: false,
              timer: 1000
            });
          }
        });
      }
    });
  }
  static #_ = this.ɵfac = function StudentAdmisssionComponent_Factory(t) {
    return new (t || StudentAdmisssionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_services_member_service__WEBPACK_IMPORTED_MODULE_2__.MemberService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_services_subject_service__WEBPACK_IMPORTED_MODULE_3__.SubjectService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_services_session_service__WEBPACK_IMPORTED_MODULE_4__.SessionService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_services_student_service__WEBPACK_IMPORTED_MODULE_5__.StudentService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_services_image_service__WEBPACK_IMPORTED_MODULE_6__.ImageService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_services_agent_service__WEBPACK_IMPORTED_MODULE_7__.AgentService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_services_common_service__WEBPACK_IMPORTED_MODULE_8__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_services_roles_and_permission_service__WEBPACK_IMPORTED_MODULE_9__.RolesAndPermissionService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
    type: StudentAdmisssionComponent,
    selectors: [["app-student-admisssion"]],
    standalone: true,
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵStandaloneFeature"]],
    decls: 2,
    vars: 1,
    consts: [[1, "container-fluid"], ["class", "row", 4, "ngIf"], [1, "row"], [1, "col-sm-12", "col-xl-12"], [1, "col-sm-12"], [1, "card"], [1, "card-header", 3, "hidden"], ["class", "card-header", 3, "hidden", 4, "ngIf"], [1, "tabbed-card"], ["ngbNav", "", 1, "pull-right", "nav", "nav-pills", "nav-primary", 3, "activeId"], ["nav", "ngbNav"], [3, "ngbNavItem"], ["ngbNavLink", "", 3, "click"], [3, "ngbNavItem", 4, "ngIf"], [1, "mt-2", 3, "ngbNavOutlet"], [3, "hidden"], [1, "card-body"], [3, "formGroup"], [1, "col-md-3", "mb-3"], ["type", "text", "formControlName", "identification_no", "placeholder", "Student Id", "required", "", 1, "form-control", 3, "blur"], ["type", "text", "formControlName", "first_name", "placeholder", "First name", "required", "", 1, "form-control"], ["type", "text", "formControlName", "middle_name", "placeholder", "Middle Name", "required", "", 1, "form-control"], ["type", "text", "formControlName", "last_name", "placeholder", "Last Name", "required", "", 1, "form-control"], ["formControlName", "gender", "required", "", 1, "form-select", 2, "width", "100%"], ["value", "Male"], ["value", "Female"], ["type", "date", "formControlName", "dob", "id", "example-datetime-local-input", 1, "form-control", "digits"], ["type", "date", "formControlName", "admission_date", "id", "example-datetime-local-input", 1, "form-control", "digits"], ["type", "text", "formControlName", "mobile_no", "placeholder", "Phone Number", "required", "", 1, "form-control"], ["type", "text", "formControlName", "emergency_phone_number", "placeholder", "Emergency Contact Number", "required", "", 1, "form-control"], ["formControlName", "material_status", "required", "", 1, "form-select", 2, "width", "100%"], ["value", "Single"], ["value", "Married"], ["value", "Widowed"], ["value", "Seperated"], ["value", "Not Specified"], ["type", "text", "formControlName", "qualification", "placeholder", "Qualification", "required", "", 1, "form-control"], ["type", "file", 1, "form-control", 3, "multiple", "change"], ["formControlName", "blood_group", "required", "", 1, "form-select", 2, "width", "100%"], ["value", "A+"], ["value", "A-"], ["value", "B+"], ["value", "B-"], ["value", "AB+"], ["value", "AB-"], ["value", "O+"], ["value", "O-"], ["formControlName", "religion", "required", "", 1, "form-select", 2, "width", "100%"], ["value", "Hinduism"], ["value", "Buddhism"], ["value", "Christianity"], ["value", "Confucianism"], ["value", "Islam"], ["value", "Jainism"], ["value", "Judaism"], ["value", "Shinto"], ["value", "Sikhism"], ["value", "Taoism"], ["value", "Zoroastrianism"], ["formControlName", "category_id", "required", "", 1, "form-select", 2, "width", "100%"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "email", "formControlName", "email", "placeholder", "name@example.com", 1, "form-control"], ["formControlName", "course_id", "required", "", 1, "form-select", 2, "width", "100%", 3, "change"], ["formControlName", "semester_id", "required", "", 1, "form-select", 2, "width", "100%"], ["type", "text", "formControlName", "current_address", "placeholder", "Current Address", "required", "", 1, "form-control"], ["type", "text", "formControlName", "permanent_address", "placeholder", "Permanent Address", "required", "", 1, "form-control"], ["formControlName", "session_id", "required", "", 1, "form-select", 2, "width", "100%"], ["formControlName", "agent_id", "required", "", 1, "form-select", 2, "width", "100%"], [1, "col-md-4", "mb-3"], ["type", "text", "formControlName", "father_name", 1, "form-control"], ["type", "text", "formControlName", "father_phone", 1, "form-control"], ["type", "text", "formControlName", "father_occupation", 1, "form-control"], ["type", "text", "formControlName", "mother_name", 1, "form-control"], ["type", "text", "formControlName", "mother_phone", 1, "form-control"], ["type", "text", "formControlName", "mother_occupation", 1, "form-control"], ["type", "text", "formControlName", "guardian_name", 1, "form-control"], ["type", "text", "formControlName", "guardian_phone", 1, "form-control"], ["type", "text", "formControlName", "guardian_email", 1, "form-control"], ["type", "text", "formControlName", "guardian_relation", 1, "form-control"], ["type", "text", "formControlName", "guardian_occupation", 1, "form-control"], ["type", "text", "formControlName", "guardian_address", 1, "form-control"], ["class", "btn btn-primary me-1", "type", "submit", 3, "hidden", "click", 4, "ngIf"], ["type", "submit", 1, "btn", "btn-primary", "me-1", 3, "hidden", "click"], [3, "hidden", 4, "ngIf"], [3, "value"], [1, "row", 2, "text-align", "center"], [1, "col-3", 2, "margin-top", "9px"], [1, "col-9"], ["type", "text", "placeholder", "Search Or Filter", 1, "form-control", 2, "width", "60%", 3, "ngModel", "ngModelChange"], [1, "table-responsive"], [1, "table"], ["scope", "col"], ["scope", "col", 4, "ngIf"], [4, "ngFor", "ngForOf"], [3, "click", 4, "ngIf"], [3, "click"]],
    template: function StudentAdmisssionComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, StudentAdmisssionComponent_div_1_Template, 232, 18, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.permission.length > 0);
      }
    },
    dependencies: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIcon, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__.NgbNav, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__.NgbNavLink, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__.NgbNavLinkBase, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControlName, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__.NgbNavOutlet, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__.NgbNavItem, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgModel, custom_filter_pipe__WEBPACK_IMPORTED_MODULE_1__.CustomFilterPipe, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 16154:
/*!**************************************************************************************!*\
  !*** ./src/app/components/student-information/student-information-routing.module.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StudentInformationRoutingModule: () => (/* binding */ StudentInformationRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _student_admisssion_student_admisssion_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./student-admisssion/student-admisssion.component */ 31118);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);




const routes = [{
  path: 'studentAdmission',
  component: _student_admisssion_student_admisssion_component__WEBPACK_IMPORTED_MODULE_0__.StudentAdmisssionComponent,
  data: {
    title: "Student Admission",
    breadcrumb: "Student Admission"
  }
}];
class StudentInformationRoutingModule {
  static #_ = this.ɵfac = function StudentInformationRoutingModule_Factory(t) {
    return new (t || StudentInformationRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: StudentInformationRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](StudentInformationRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 84274:
/*!******************************************************************************!*\
  !*** ./src/app/components/student-information/student-information.module.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StudentInformationModule: () => (/* binding */ StudentInformationModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _student_information_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./student-information-routing.module */ 16154);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);



class StudentInformationModule {
  static #_ = this.ɵfac = function StudentInformationModule_Factory(t) {
    return new (t || StudentInformationModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: StudentInformationModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _student_information_routing_module__WEBPACK_IMPORTED_MODULE_0__.StudentInformationRoutingModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](StudentInformationModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _student_information_routing_module__WEBPACK_IMPORTED_MODULE_0__.StudentInformationRoutingModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_components_student-information_student-information_module_ts.cf106ac47014222d.js.map