"use strict";
(self["webpackChunkRUDKARSH"] = self["webpackChunkRUDKARSH"] || []).push([["default-src_app_services_agent_service_ts-src_app_services_member_service_ts-src_app_services-c943f6"],{

/***/ 73421:
/*!*******************************************!*\
  !*** ./src/app/services/agent.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AgentService: () => (/* binding */ AgentService)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 20553);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 72513);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 2389);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 13738);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 54860);
/* harmony import */ var _error_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./error.service */ 68027);






class AgentService {
  getAgentListListener() {
    return this.agentListSubject.asObservable();
  }
  constructor(http, errorService) {
    this.http = http;
    this.errorService = errorService;
    this.BASE_API_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.BASE_API_URL;
    this.agentList = [];
    this.agentListSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    this.http.get(this.BASE_API_URL + '/getAgent').subscribe(response => {
      this.agentList = response.data;
      this.agentListSubject.next([...this.agentList]);
    });
  }
  getAgentList() {
    return [...this.agentList];
  }
  saveAgent(value) {
    return this.http.post(this.BASE_API_URL + '/saveAgent', value).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.errorService.serverError), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(response => {
      // @ts-ignore
      if (response.success == 1) {
        // @ts-ignore
        this.agentList.push(response.data);
        this.agentListSubject.next([...this.agentList]);
      }
    }));
  }
  updateAgent(data) {
    return this.http.post(this.BASE_API_URL + '/updateAgent', data).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.errorService.serverError), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(response => {
      // @ts-ignore
      if (response.success == 1) {
        // @ts-ignore
        const index = this.agentList.findIndex(x => x.id === response.data.id);
        // @ts-ignore
        this.agentList[index] = response.data;
        this.agentListSubject.next([...this.agentList]);
      }
    }));
  }
  deleteFeesType(id) {
    return this.http.get(this.BASE_API_URL + '/deleteAgent/' + id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.errorService.serverError), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(response => {
      // @ts-ignore
      if (response.success == 1) {
        // @ts-ignore
        const index = this.agentList.findIndex(x => x.id === response.data.id);
        // @ts-ignore
        this.agentList.splice(index, 1);
        this.agentListSubject.next([...this.agentList]);
      }
    }));
  }
  getStudentByAgentId(id) {
    return this.http.get(this.BASE_API_URL + '/getStudentByAgentId/' + id).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.errorService.serverError), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(response => {}));
  }
  static #_ = this.ɵfac = function AgentService_Factory(t) {
    return new (t || AgentService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_error_service__WEBPACK_IMPORTED_MODULE_1__.ErrorService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
    token: AgentService,
    factory: AgentService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 22371:
/*!********************************************!*\
  !*** ./src/app/services/member.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MemberService: () => (/* binding */ MemberService)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 20553);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 72513);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 2389);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 13738);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 54860);
/* harmony import */ var _error_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./error.service */ 68027);






class MemberService {
  getTeacherListener() {
    return this.teacherListSubject.asObservable();
  }
  getGeneratedPayrollListener() {
    return this.generatedPayrollSubject.asObservable();
  }
  getMemberListener() {
    return this.memberListSubject.asObservable();
  }
  getStaffAttendanceListener() {
    return this.staffAttendanceSubject.asObservable();
  }
  getCategoryListener() {
    return this.CategoryListSubject.asObservable();
  }
  constructor(http, errorService) {
    this.http = http;
    this.errorService = errorService;
    this.BASE_API_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.BASE_API_URL;
    this.teacherList = [];
    this.memberList = [];
    this.categoryList = [];
    this.staffAttendance = [];
    this.teacherListSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    this.memberListSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    this.CategoryListSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    this.staffAttendanceSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    this.generatedPayrollSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    this.http.get(this.BASE_API_URL + '/getTeachers').subscribe(response => {
      this.teacherList = response.data;
      this.teacherListSubject.next([...this.teacherList]);
    });
    this.http.get(this.BASE_API_URL + '/getAllMembers').subscribe(response => {
      this.memberList = response.data;
      this.memberListSubject.next([...this.memberList]);
    });
    this.http.get(this.BASE_API_URL + '/getCategory').subscribe(response => {
      this.categoryList = response.data;
      this.CategoryListSubject.next([...this.categoryList]);
    });
  }
  getTeacherList() {
    return [...this.teacherList];
  }
  getMemberList() {
    return [...this.memberList];
  }
  getCategoryList() {
    return [...this.categoryList];
  }
  getStaffAttendance(user_type_id, date) {
    return this.http.get(this.BASE_API_URL + '/getStaffAttendance/' + user_type_id + '/' + date).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.errorService.serverError), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(response => {}));
  }
  getMembers(user_type_id, month, year) {
    return this.http.get(this.BASE_API_URL + '/getMembers/' + user_type_id + '/' + month + '/' + year).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.errorService.serverError), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(response => {}));
  }
  saveAttendance(data) {
    return this.http.post(this.BASE_API_URL + '/saveStaffAttendance', data).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.errorService.serverError), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(response => {}));
  }
  saveMember(value) {
    return this.http.post(this.BASE_API_URL + '/saveMember', value).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.errorService.serverError), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(response => {
      // @ts-ignore
      if (response.success == 1) {
        // @ts-ignore
        this.memberList.push(response.data);
        this.memberListSubject.next([...this.memberList]);
      }
    }));
  }
  saveGeneratedPayroll(value) {
    return this.http.post(this.BASE_API_URL + '/savePayroll', value).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.errorService.serverError), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(response => {}));
  }
  updateMember(value) {
    return this.http.post(this.BASE_API_URL + '/updateMember', value).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.errorService.serverError), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(response => {
      // @ts-ignore
      if (response.success == 1) {
        // @ts-ignore
        const index = this.memberList.findIndex(x => x.id === response.data.id);
        // @ts-ignore
        this.memberList.splice(index, 1);
        this.memberListSubject.next([...this.memberList]);
      }
    }));
  }
  static #_ = this.ɵfac = function MemberService_Factory(t) {
    return new (t || MemberService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_error_service__WEBPACK_IMPORTED_MODULE_1__.ErrorService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
    token: MemberService,
    factory: MemberService.ɵfac,
    providedIn: 'root'
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

/***/ })

}]);
//# sourceMappingURL=default-src_app_services_agent_service_ts-src_app_services_member_service_ts-src_app_services-c943f6.d96d0764f9683010.js.map