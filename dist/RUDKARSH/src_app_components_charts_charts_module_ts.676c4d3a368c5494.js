"use strict";
(self["webpackChunkRUDKARSH"] = self["webpackChunkRUDKARSH"] || []).push([["src_app_components_charts_charts_module_ts"],{

/***/ 79161:
/*!******************************************************************!*\
  !*** ./src/app/components/charts/chartist/chartist.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChartistComponent: () => (/* binding */ ChartistComponent)
/* harmony export */ });
/* harmony import */ var _shared_data_chart_chartist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/data/chart/chartist */ 65871);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var ng_chartist__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-chartist */ 83568);



class ChartistComponent {
  constructor() {
    // Charts
    this.chart1 = _shared_data_chart_chartist__WEBPACK_IMPORTED_MODULE_0__.chart1;
    this.chart2 = _shared_data_chart_chartist__WEBPACK_IMPORTED_MODULE_0__.chart2;
    this.chart3 = _shared_data_chart_chartist__WEBPACK_IMPORTED_MODULE_0__.chart3;
    this.chart4 = _shared_data_chart_chartist__WEBPACK_IMPORTED_MODULE_0__.chart4;
    this.chart5 = _shared_data_chart_chartist__WEBPACK_IMPORTED_MODULE_0__.chart5;
    this.chart6 = _shared_data_chart_chartist__WEBPACK_IMPORTED_MODULE_0__.chart6;
    this.chart7 = _shared_data_chart_chartist__WEBPACK_IMPORTED_MODULE_0__.chart7;
    this.chart8 = _shared_data_chart_chartist__WEBPACK_IMPORTED_MODULE_0__.chart8;
    this.chart9 = _shared_data_chart_chartist__WEBPACK_IMPORTED_MODULE_0__.chart9;
    this.chart10 = _shared_data_chart_chartist__WEBPACK_IMPORTED_MODULE_0__.chart10;
    this.chart11 = _shared_data_chart_chartist__WEBPACK_IMPORTED_MODULE_0__.chart11;
    this.chart12 = _shared_data_chart_chartist__WEBPACK_IMPORTED_MODULE_0__.chart12;
  }
  static #_ = this.ɵfac = function ChartistComponent_Factory(t) {
    return new (t || ChartistComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: ChartistComponent,
    selectors: [["app-chartist"]],
    decls: 86,
    vars: 12,
    consts: [[1, "container-fluid"], [1, "row"], [1, "col-xl-6", "col-md-12", "col-sm-12"], [1, "card"], [1, "card-header"], [1, "card-body"], [3, "configuration"]],
    template: function ChartistComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Advanced SMIL Animations");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "x-chartist", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 2)(10, "div", 3)(11, "div", 4)(12, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "SVG Path animation");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "x-chartist", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 2)(17, "div", 3)(18, "div", 4)(19, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Animating a Donut with Svg.animate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "x-chartist", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 2)(24, "div", 3)(25, "div", 4)(26, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Bi-polar Line chart with area only");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "x-chartist", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 2)(31, "div", 3)(32, "div", 4)(33, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Line chart with area");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "x-chartist", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 2)(38, "div", 3)(39, "div", 4)(40, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Bi-polar bar chart");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "x-chartist", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 2)(45, "div", 3)(46, "div", 4)(47, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Stacked bar chart");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](50, "x-chartist", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 2)(52, "div", 3)(53, "div", 4)(54, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "Horizontal bar chart");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](57, "x-chartist", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "div", 2)(59, "div", 3)(60, "div", 4)(61, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "Extreme responsive configuration");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](64, "x-chartist", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "div", 2)(66, "div", 3)(67, "div", 4)(68, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, "Simple line chart");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](71, "x-chartist", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "div", 2)(73, "div", 3)(74, "div", 4)(75, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, "Holes in data");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](78, "x-chartist", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "div", 2)(80, "div", 3)(81, "div", 4)(82, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](83, "Filled holes in data");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](85, "x-chartist", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("configuration", ctx.chart1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("configuration", ctx.chart2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("configuration", ctx.chart3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("configuration", ctx.chart4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("configuration", ctx.chart5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("configuration", ctx.chart6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("configuration", ctx.chart7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("configuration", ctx.chart8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("configuration", ctx.chart9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("configuration", ctx.chart10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("configuration", ctx.chart11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("configuration", ctx.chart12);
      }
    },
    dependencies: [ng_chartist__WEBPACK_IMPORTED_MODULE_2__.ChartistComponent],
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"],
    encapsulation: 2
  });
}

/***/ }),

/***/ 4311:
/*!****************************************************************!*\
  !*** ./src/app/components/charts/chartjs/chartjs.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChartjsComponent: () => (/* binding */ ChartjsComponent)
/* harmony export */ });
/* harmony import */ var _shared_data_chart_chartjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/data/chart/chartjs */ 47829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-charts */ 46673);



class ChartjsComponent {
  constructor() {
    // barChart
    this.barChartOptions = _shared_data_chart_chartjs__WEBPACK_IMPORTED_MODULE_0__.barChartOptions;
    this.barChartLabels = _shared_data_chart_chartjs__WEBPACK_IMPORTED_MODULE_0__.barChartLabels;
    this.barChartType = _shared_data_chart_chartjs__WEBPACK_IMPORTED_MODULE_0__.barChartType;
    this.barChartLegend = _shared_data_chart_chartjs__WEBPACK_IMPORTED_MODULE_0__.barChartLegend;
    this.barChartData = _shared_data_chart_chartjs__WEBPACK_IMPORTED_MODULE_0__.barChartData;
    this.barChartColors = _shared_data_chart_chartjs__WEBPACK_IMPORTED_MODULE_0__.barChartColors;
    // lineGraph Chart
    this.lineGraphOptions = _shared_data_chart_chartjs__WEBPACK_IMPORTED_MODULE_0__.lineGraphOptions;
    this.lineGraphLabels = _shared_data_chart_chartjs__WEBPACK_IMPORTED_MODULE_0__.lineGraphLabels;
    this.lineGraphType = _shared_data_chart_chartjs__WEBPACK_IMPORTED_MODULE_0__.lineGraphType;
    this.lineGraphLegend = _shared_data_chart_chartjs__WEBPACK_IMPORTED_MODULE_0__.lineGraphLegend;
    this.lineGraphData = _shared_data_chart_chartjs__WEBPACK_IMPORTED_MODULE_0__.lineGraphData;
    this.lineGraphColors = _shared_data_chart_chartjs__WEBPACK_IMPORTED_MODULE_0__.lineGraphColors;
    // radarGraph Chart
    this.radarGraphOptions = _shared_data_chart_chartjs__WEBPACK_IMPORTED_MODULE_0__.radarGraphOptions;
    this.radarGraphLabels = _shared_data_chart_chartjs__WEBPACK_IMPORTED_MODULE_0__.radarGraphLabels;
    this.radarGraphType = _shared_data_chart_chartjs__WEBPACK_IMPORTED_MODULE_0__.radarGraphType;
    this.radarGraphLegend = _shared_data_chart_chartjs__WEBPACK_IMPORTED_MODULE_0__.radarGraphLegend;
    this.radarGraphData = _shared_data_chart_chartjs__WEBPACK_IMPORTED_MODULE_0__.radarGraphData;
    this.radarGraphColors = _shared_data_chart_chartjs__WEBPACK_IMPORTED_MODULE_0__.radarGraphColors;
    // lineChart
    this.lineChartData = _shared_data_chart_chartjs__WEBPACK_IMPORTED_MODULE_0__.lineChartData;
    this.lineChartLabels = _shared_data_chart_chartjs__WEBPACK_IMPORTED_MODULE_0__.lineChartLabels;
    this.lineChartOptions = _shared_data_chart_chartjs__WEBPACK_IMPORTED_MODULE_0__.lineChartOptions;
    this.lineChartColors = _shared_data_chart_chartjs__WEBPACK_IMPORTED_MODULE_0__.lineChartColors;
    this.lineChartLegend = _shared_data_chart_chartjs__WEBPACK_IMPORTED_MODULE_0__.lineChartLegend;
    this.lineChartType = _shared_data_chart_chartjs__WEBPACK_IMPORTED_MODULE_0__.lineChartType;
  }
  // events
  chartClicked(e) {}
  chartHovered(e) {}
  static #_ = this.ɵfac = function ChartjsComponent_Factory(t) {
    return new (t || ChartjsComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: ChartjsComponent,
    selectors: [["app-chartjs"]],
    decls: 30,
    vars: 20,
    consts: [[1, "container-fluid"], [1, "row"], [1, "col-xl-6", "col-md-12"], [1, "card"], [1, "card-header"], [1, "card-body", "chart-block"], ["baseChart", "", 1, "chart", 3, "datasets", "labels", "options", "legend", "type", "chartHover", "chartClick"], [1, "col-xl-4", "col-md-12"], [1, "col-xl-7", "col-md-12"]],
    template: function ChartjsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Bar Chart");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5)(8, "canvas", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("chartHover", function ChartjsComponent_Template_canvas_chartHover_8_listener($event) {
          return ctx.chartHovered($event);
        })("chartClick", function ChartjsComponent_Template_canvas_chartClick_8_listener($event) {
          return ctx.chartClicked($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 2)(10, "div", 3)(11, "div", 4)(12, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Line Graph");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 5)(15, "canvas", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("chartHover", function ChartjsComponent_Template_canvas_chartHover_15_listener($event) {
          return ctx.chartHovered($event);
        })("chartClick", function ChartjsComponent_Template_canvas_chartClick_15_listener($event) {
          return ctx.chartClicked($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 7)(17, "div", 3)(18, "div", 4)(19, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Radar Graph");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 5)(22, "canvas", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("chartHover", function ChartjsComponent_Template_canvas_chartHover_22_listener($event) {
          return ctx.chartHovered($event);
        })("chartClick", function ChartjsComponent_Template_canvas_chartClick_22_listener($event) {
          return ctx.chartClicked($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 8)(24, "div", 3)(25, "div", 4)(26, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Line Chart");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 5)(29, "canvas", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("chartHover", function ChartjsComponent_Template_canvas_chartHover_29_listener($event) {
          return ctx.chartHovered($event);
        })("chartClick", function ChartjsComponent_Template_canvas_chartClick_29_listener($event) {
          return ctx.chartClicked($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("datasets", ctx.barChartData)("labels", ctx.barChartLabels)("options", ctx.barChartOptions)("legend", ctx.barChartLegend)("type", ctx.barChartType);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("datasets", ctx.lineGraphData)("labels", ctx.lineGraphLabels)("options", ctx.lineGraphOptions)("legend", ctx.lineGraphLegend)("type", ctx.lineGraphType);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("datasets", ctx.radarGraphData)("labels", ctx.radarGraphLabels)("options", ctx.radarGraphOptions)("legend", ctx.radarGraphLegend)("type", ctx.radarGraphType);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("datasets", ctx.lineChartData)("labels", ctx.lineChartLabels)("options", ctx.lineChartOptions)("legend", ctx.lineChartLegend)("type", ctx.lineChartType);
      }
    },
    dependencies: [ng2_charts__WEBPACK_IMPORTED_MODULE_2__.BaseChartDirective],
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"],
    encapsulation: 2
  });
}

/***/ }),

/***/ 8307:
/*!************************************************************!*\
  !*** ./src/app/components/charts/charts-routing.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChartsRoutingModule: () => (/* binding */ ChartsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _google_google_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./google/google.component */ 43594);
/* harmony import */ var _chartjs_chartjs_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chartjs/chartjs.component */ 4311);
/* harmony import */ var _chartist_chartist_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chartist/chartist.component */ 79161);
/* harmony import */ var _ngx_chart_ngx_chart_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ngx-chart/ngx-chart.component */ 84415);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 61699);







const routes = [{
  path: '',
  children: [{
    path: 'google',
    component: _google_google_component__WEBPACK_IMPORTED_MODULE_0__.GoogleComponent,
    data: {
      title: "Google",
      breadcrumb: "Google"
    }
  }, {
    path: 'chartjs',
    component: _chartjs_chartjs_component__WEBPACK_IMPORTED_MODULE_1__.ChartjsComponent,
    data: {
      title: "ChartJS",
      breadcrumb: "ChartJS"
    }
  }, {
    path: 'chartist',
    component: _chartist_chartist_component__WEBPACK_IMPORTED_MODULE_2__.ChartistComponent,
    data: {
      title: "Chartist",
      breadcrumb: "Chartist"
    }
  }, {
    path: 'ngx-chart',
    component: _ngx_chart_ngx_chart_component__WEBPACK_IMPORTED_MODULE_3__.NgxChartComponent,
    data: {
      title: "Ngx-Chart",
      breadcrumb: "Ngx-Chart"
    }
  }]
}];
class ChartsRoutingModule {
  static #_ = this.ɵfac = function ChartsRoutingModule_Factory(t) {
    return new (t || ChartsRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
    type: ChartsRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](ChartsRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
  });
})();

/***/ }),

/***/ 79848:
/*!****************************************************!*\
  !*** ./src/app/components/charts/charts.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChartModule: () => (/* binding */ ChartModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _charts_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./charts-routing.module */ 8307);
/* harmony import */ var ng2_google_charts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-google-charts */ 62741);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-charts */ 46673);
/* harmony import */ var ng_chartist__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-chartist */ 83568);
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @swimlane/ngx-charts */ 48278);
/* harmony import */ var _google_google_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./google/google.component */ 43594);
/* harmony import */ var _chartjs_chartjs_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chartjs/chartjs.component */ 4311);
/* harmony import */ var _chartist_chartist_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chartist/chartist.component */ 79161);
/* harmony import */ var _ngx_chart_ngx_chart_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ngx-chart/ngx-chart.component */ 84415);
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-apexcharts */ 57854);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 61699);












class ChartModule {
  static #_ = this.ɵfac = function ChartModule_Factory(t) {
    return new (t || ChartModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
    type: ChartModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _charts_routing_module__WEBPACK_IMPORTED_MODULE_0__.ChartsRoutingModule, ng2_google_charts__WEBPACK_IMPORTED_MODULE_7__.Ng2GoogleChartsModule, ng2_charts__WEBPACK_IMPORTED_MODULE_8__.NgChartsModule, ng_chartist__WEBPACK_IMPORTED_MODULE_9__.ChartistModule, _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_10__.NgxChartsModule, ng_apexcharts__WEBPACK_IMPORTED_MODULE_11__.NgApexchartsModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](ChartModule, {
    declarations: [_google_google_component__WEBPACK_IMPORTED_MODULE_1__.GoogleComponent, _chartjs_chartjs_component__WEBPACK_IMPORTED_MODULE_2__.ChartjsComponent, _chartist_chartist_component__WEBPACK_IMPORTED_MODULE_3__.ChartistComponent, _ngx_chart_ngx_chart_component__WEBPACK_IMPORTED_MODULE_4__.NgxChartComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _charts_routing_module__WEBPACK_IMPORTED_MODULE_0__.ChartsRoutingModule, ng2_google_charts__WEBPACK_IMPORTED_MODULE_7__.Ng2GoogleChartsModule, ng2_charts__WEBPACK_IMPORTED_MODULE_8__.NgChartsModule, ng_chartist__WEBPACK_IMPORTED_MODULE_9__.ChartistModule, _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_10__.NgxChartsModule, ng_apexcharts__WEBPACK_IMPORTED_MODULE_11__.NgApexchartsModule]
  });
})();

/***/ }),

/***/ 43594:
/*!**************************************************************!*\
  !*** ./src/app/components/charts/google/google.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GoogleComponent: () => (/* binding */ GoogleComponent)
/* harmony export */ });
/* harmony import */ var _shared_data_chart_google_chart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/data/chart/google-chart */ 59413);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var ng2_google_charts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-google-charts */ 62741);



class GoogleComponent {
  constructor() {
    // Pie Chart
    this.pieChart1 = _shared_data_chart_google_chart__WEBPACK_IMPORTED_MODULE_0__.pieChart1;
    this.pieChart2 = _shared_data_chart_google_chart__WEBPACK_IMPORTED_MODULE_0__.pieChart2;
    this.pieChart3 = _shared_data_chart_google_chart__WEBPACK_IMPORTED_MODULE_0__.pieChart3;
    this.pieChart4 = _shared_data_chart_google_chart__WEBPACK_IMPORTED_MODULE_0__.pieChart4;
    // Area Chart
    this.areaChart1 = _shared_data_chart_google_chart__WEBPACK_IMPORTED_MODULE_0__.areaChart1;
    this.areaChart2 = _shared_data_chart_google_chart__WEBPACK_IMPORTED_MODULE_0__.areaChart2;
    // Column Chart
    this.columnChart1 = _shared_data_chart_google_chart__WEBPACK_IMPORTED_MODULE_0__.columnChart1;
    this.columnChart2 = _shared_data_chart_google_chart__WEBPACK_IMPORTED_MODULE_0__.columnChart2;
    // Bar Chart
    this.barChart1 = _shared_data_chart_google_chart__WEBPACK_IMPORTED_MODULE_0__.barChart1;
    this.barChart2 = _shared_data_chart_google_chart__WEBPACK_IMPORTED_MODULE_0__.barChart2;
    // Line Chart
    this.lineChart = _shared_data_chart_google_chart__WEBPACK_IMPORTED_MODULE_0__.lineChart;
    // Combo Chart
    this.comboChart = _shared_data_chart_google_chart__WEBPACK_IMPORTED_MODULE_0__.comboChart;
    this.geoChartData = {
      chartType: 'GeoChart',
      dataTable: [['City', 'Population'], ['Melbourne', 456789]],
      options: {
        'region': 'IT',
        'displayMode': 'markers',
        colors: ["#4466f2", "#1ea6ec", "#22af47", "#007bff", "#FF5370"]
      }
    };
  }
  static #_ = this.ɵfac = function GoogleComponent_Factory(t) {
    return new (t || GoogleComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: GoogleComponent,
    selectors: [["app-google"]],
    decls: 106,
    vars: 12,
    consts: [[1, "container-fluid"], [1, "row"], [1, "col-sm-12", "col-xl-6"], [1, "card"], [1, "card-header"], [1, "digits"], [1, "card-body", "chart-block"], [3, "data"], [1, "col-sm-12"]],
    template: function GoogleComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Pie Chart ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "google-chart", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 2)(12, "div", 3)(13, "div", 4)(14, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Pie Chart ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "google-chart", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 2)(21, "div", 3)(22, "div", 4)(23, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Pie Chart ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "google-chart", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 2)(30, "div", 3)(31, "div", 4)(32, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Pie Chart ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "google-chart", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 2)(39, "div", 3)(40, "div", 4)(41, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Area Chart ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](46, "google-chart", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 2)(48, "div", 3)(49, "div", 4)(50, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "Area Chart ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](55, "google-chart", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 2)(57, "div", 3)(58, "div", 4)(59, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "Column Chart ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](64, "google-chart", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "div", 2)(66, "div", 3)(67, "div", 4)(68, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, "Column Chart ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](73, "google-chart", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "div", 2)(75, "div", 3)(76, "div", 4)(77, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78, "Bars Chart ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](82, "google-chart", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "div", 2)(84, "div", 3)(85, "div", 4)(86, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](87, "Bars Chart ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](89, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](91, "google-chart", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "div", 8)(93, "div", 3)(94, "div", 4)(95, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](96, "Line Chart");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](98, "google-chart", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "div", 8)(100, "div", 3)(101, "div", 4)(102, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](103, "Combo Chart");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](105, "google-chart", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx.pieChart1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx.pieChart2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx.pieChart3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx.pieChart4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx.areaChart1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx.areaChart2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx.columnChart1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx.columnChart2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx.barChart1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx.barChart2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx.lineChart);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx.comboChart);
      }
    },
    dependencies: [ng2_google_charts__WEBPACK_IMPORTED_MODULE_2__.GoogleChartComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 84415:
/*!********************************************************************!*\
  !*** ./src/app/components/charts/ngx-chart/ngx-chart.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NgxChartComponent: () => (/* binding */ NgxChartComponent)
/* harmony export */ });
/* harmony import */ var _shared_data_chart_ngx_chart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/data/chart/ngx-chart */ 6812);
/* harmony import */ var _shared_data_chart_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/data/chart/config */ 68683);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swimlane/ngx-charts */ 48278);




class NgxChartComponent {
  constructor() {
    this.barChartsingle = _shared_data_chart_ngx_chart__WEBPACK_IMPORTED_MODULE_0__.barChartSingle;
    this.pieChart = _shared_data_chart_ngx_chart__WEBPACK_IMPORTED_MODULE_0__.pieChart;
    this.multiData = _shared_data_chart_ngx_chart__WEBPACK_IMPORTED_MODULE_0__.multiData;
    this.single = _shared_data_chart_ngx_chart__WEBPACK_IMPORTED_MODULE_0__.single;
    // Bar-chart options
    this.barChartShowYAxis = _shared_data_chart_config__WEBPACK_IMPORTED_MODULE_1__.barChartShowYAxis;
    this.barChartShowXAxis = _shared_data_chart_config__WEBPACK_IMPORTED_MODULE_1__.barChartShowXAxis;
    this.barChartGradient = _shared_data_chart_config__WEBPACK_IMPORTED_MODULE_1__.barChartGradient;
    this.barChartShowLegend = _shared_data_chart_config__WEBPACK_IMPORTED_MODULE_1__.barChartShowLegend;
    this.barChartShowXAxisLabel = _shared_data_chart_config__WEBPACK_IMPORTED_MODULE_1__.barChartShowXAxisLabel;
    this.barChartXAxisLabel = _shared_data_chart_config__WEBPACK_IMPORTED_MODULE_1__.barChartXAxisLabel;
    this.barChartShowYAxisLabel = _shared_data_chart_config__WEBPACK_IMPORTED_MODULE_1__.barChartShowYAxisLabel;
    this.barChartYAxisLabel = _shared_data_chart_config__WEBPACK_IMPORTED_MODULE_1__.barChartYAxisLabel;
    this.barChartColorScheme = _shared_data_chart_config__WEBPACK_IMPORTED_MODULE_1__.barChartColorScheme;
    this.barChartshowGridLines = _shared_data_chart_config__WEBPACK_IMPORTED_MODULE_1__.barChartshowGridLines;
    // pie-chart options
    this.pieChartColorScheme = _shared_data_chart_config__WEBPACK_IMPORTED_MODULE_1__.pieChartcolorScheme;
    this.pieChartShowLabels = _shared_data_chart_config__WEBPACK_IMPORTED_MODULE_1__.pieChartShowLabels;
    this.pieChartGradient = _shared_data_chart_config__WEBPACK_IMPORTED_MODULE_1__.pieChartGradient;
    this.chartOptions = _shared_data_chart_config__WEBPACK_IMPORTED_MODULE_1__.chartOptions;
    //Area-chart options
    this.areaChartshowXAxis = _shared_data_chart_config__WEBPACK_IMPORTED_MODULE_1__.areaChartshowXAxis;
    this.areaChartshowYAxis = _shared_data_chart_config__WEBPACK_IMPORTED_MODULE_1__.areaChartshowYAxis;
    this.areaChartgradient = _shared_data_chart_config__WEBPACK_IMPORTED_MODULE_1__.areaChartgradient;
    this.areaChartshowXAxisLabel = _shared_data_chart_config__WEBPACK_IMPORTED_MODULE_1__.areaChartshowXAxisLabel;
    this.areaChartxAxisLabel = _shared_data_chart_config__WEBPACK_IMPORTED_MODULE_1__.areaChartxAxisLabel;
    this.areaChartshowYAxisLabel = _shared_data_chart_config__WEBPACK_IMPORTED_MODULE_1__.areaChartshowYAxisLabel;
    this.areaChartcolorScheme = _shared_data_chart_config__WEBPACK_IMPORTED_MODULE_1__.areaChartcolorScheme;
    this.lineChartcurve = _shared_data_chart_config__WEBPACK_IMPORTED_MODULE_1__.lineChartcurve;
    this.lineChartcurve1 = _shared_data_chart_config__WEBPACK_IMPORTED_MODULE_1__.lineChartcurve1;
    Object.assign(this, {
      multiData: _shared_data_chart_ngx_chart__WEBPACK_IMPORTED_MODULE_0__.multiData,
      barChartSingle: _shared_data_chart_ngx_chart__WEBPACK_IMPORTED_MODULE_0__.barChartSingle,
      pieChart: _shared_data_chart_ngx_chart__WEBPACK_IMPORTED_MODULE_0__.pieChart,
      single: _shared_data_chart_ngx_chart__WEBPACK_IMPORTED_MODULE_0__.single
    });
  }
  ngOnInit() {}
  onSelect(e) {}
  static #_ = this.ɵfac = function NgxChartComponent_Factory(t) {
    return new (t || NgxChartComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: NgxChartComponent,
    selectors: [["app-ngx-chart"]],
    decls: 74,
    vars: 58,
    consts: [[1, "container-fluid"], [1, "row"], [1, "col-sm-6", "col-xl-6"], [1, "card"], [1, "card-header"], [1, "card-body"], [1, "flot-chart-container"], ["id", "github-issues", 1, "flot-chart-placeholder", "ngx-chart-direction"], [3, "scheme", "results", "gradient", "xAxis", "yAxis", "legend", "showXAxisLabel", "showYAxisLabel", "xAxisLabel", "yAxisLabel", "roundEdges", "select"], [1, "col-xl-6", "xl-100"], [3, "scheme", "results", "explodeSlices", "labels", "doughnut", "gradient", "select"], [1, "flot-chart-container", "grid-pie-chart"], [3, "scheme", "results", "select"], [3, "scheme", "results", "gradient", "xAxis", "yAxis", "showXAxisLabel", "showYAxisLabel", "xAxisLabel", "curve", "select"], [3, "scheme", "results", "gradient", "xAxis", "yAxis", "showXAxisLabel", "showYAxisLabel", "xAxisLabel", "select"], [3, "scheme", "results"]],
    template: function NgxChartComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Single Vertical Bar Chart");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 5)(8, "div", 6)(9, "div", 7)(10, "ngx-charts-bar-vertical", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("select", function NgxChartComponent_Template_ngx_charts_bar_vertical_select_10_listener($event) {
          return ctx.onSelect($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 2)(12, "div", 3)(13, "div", 4)(14, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Multiple Vertical Bar Chart");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 5)(17, "div", 6)(18, "div", 7)(19, "ngx-charts-bar-vertical-2d", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("select", function NgxChartComponent_Template_ngx_charts_bar_vertical_2d_select_19_listener($event) {
          return ctx.onSelect($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 9)(21, "div", 3)(22, "div", 4)(23, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Single Pie Chart");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 5)(26, "div", 6)(27, "div", 7)(28, "ngx-charts-pie-chart", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("select", function NgxChartComponent_Template_ngx_charts_pie_chart_select_28_listener($event) {
          return ctx.onSelect($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 9)(30, "div", 3)(31, "div", 4)(32, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "Grid Pie Chart");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 5)(35, "div", 11)(36, "div", 7)(37, "ngx-charts-pie-grid", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("select", function NgxChartComponent_Template_ngx_charts_pie_grid_select_37_listener($event) {
          return ctx.onSelect($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "div", 2)(39, "div", 3)(40, "div", 4)(41, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "Line Chart");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "div", 5)(44, "div", 6)(45, "div", 7)(46, "ngx-charts-line-chart", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("select", function NgxChartComponent_Template_ngx_charts_line_chart_select_46_listener($event) {
          return ctx.onSelect($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "div", 2)(48, "div", 3)(49, "div", 4)(50, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51, "Line Chart");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "div", 5)(53, "div", 6)(54, "div", 7)(55, "ngx-charts-line-chart", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("select", function NgxChartComponent_Template_ngx_charts_line_chart_select_55_listener($event) {
          return ctx.onSelect($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "div", 9)(57, "div", 3)(58, "div", 4)(59, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](60, "Area Chart");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "div", 5)(62, "div", 6)(63, "div", 7)(64, "ngx-charts-area-chart", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("select", function NgxChartComponent_Template_ngx_charts_area_chart_select_64_listener($event) {
          return ctx.onSelect($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "div", 9)(66, "div", 3)(67, "div", 4)(68, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](69, "Gauge Chart");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "div", 5)(71, "div", 6)(72, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](73, "ngx-charts-number-card", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("scheme", ctx.barChartColorScheme)("results", ctx.barChartsingle)("gradient", ctx.barChartGradient)("xAxis", ctx.barChartShowXAxis)("yAxis", ctx.barChartShowYAxis)("legend", ctx.barChartShowLegend)("showXAxisLabel", ctx.barChartShowXAxisLabel)("showYAxisLabel", ctx.barChartShowYAxisLabel)("xAxisLabel", ctx.barChartXAxisLabel)("yAxisLabel", ctx.barChartYAxisLabel)("roundEdges", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("scheme", ctx.barChartColorScheme)("results", ctx.multiData)("gradient", ctx.barChartGradient)("xAxis", ctx.barChartShowXAxis)("yAxis", ctx.barChartShowYAxis)("legend", ctx.barChartShowLegend)("showXAxisLabel", ctx.barChartShowXAxisLabel)("showYAxisLabel", ctx.barChartShowYAxisLabel)("xAxisLabel", ctx.barChartXAxisLabel)("yAxisLabel", ctx.barChartYAxisLabel)("roundEdges", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("scheme", ctx.pieChartColorScheme)("results", ctx.pieChart)("explodeSlices", true)("labels", ctx.pieChartShowLabels)("doughnut", false)("gradient", ctx.pieChartGradient);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("scheme", ctx.pieChartColorScheme)("results", ctx.pieChart);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("scheme", ctx.areaChartcolorScheme)("results", ctx.multiData)("gradient", ctx.areaChartgradient)("xAxis", ctx.areaChartshowXAxis)("yAxis", ctx.areaChartshowYAxis)("showXAxisLabel", ctx.areaChartshowXAxisLabel)("showYAxisLabel", ctx.areaChartshowYAxisLabel)("xAxisLabel", ctx.areaChartxAxisLabel)("curve", ctx.lineChartcurve);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("scheme", ctx.areaChartcolorScheme)("results", ctx.multiData)("gradient", ctx.areaChartgradient)("xAxis", ctx.areaChartshowXAxis)("yAxis", ctx.areaChartshowYAxis)("showXAxisLabel", ctx.areaChartshowXAxisLabel)("showYAxisLabel", ctx.areaChartshowYAxisLabel)("xAxisLabel", ctx.areaChartxAxisLabel)("curve", ctx.lineChartcurve1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("scheme", ctx.areaChartcolorScheme)("results", ctx.multiData)("gradient", ctx.areaChartgradient)("xAxis", ctx.areaChartshowXAxis)("yAxis", ctx.areaChartshowYAxis)("showXAxisLabel", ctx.areaChartshowXAxisLabel)("showYAxisLabel", ctx.areaChartshowYAxisLabel)("xAxisLabel", ctx.areaChartxAxisLabel);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("scheme", ctx.barChartColorScheme)("results", ctx.single);
      }
    },
    dependencies: [_swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_3__.AreaChartComponent, _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_3__.BarVerticalComponent, _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_3__.BarVertical2DComponent, _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_3__.LineChartComponent, _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_3__.NumberCardComponent, _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_3__.PieChartComponent, _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_3__.PieGridComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 47829:
/*!**********************************************!*\
  !*** ./src/app/shared/data/chart/chartjs.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   barChartColors: () => (/* binding */ barChartColors),
/* harmony export */   barChartData: () => (/* binding */ barChartData),
/* harmony export */   barChartLabels: () => (/* binding */ barChartLabels),
/* harmony export */   barChartLegend: () => (/* binding */ barChartLegend),
/* harmony export */   barChartOptions: () => (/* binding */ barChartOptions),
/* harmony export */   barChartType: () => (/* binding */ barChartType),
/* harmony export */   lineChartColors: () => (/* binding */ lineChartColors),
/* harmony export */   lineChartData: () => (/* binding */ lineChartData),
/* harmony export */   lineChartLabels: () => (/* binding */ lineChartLabels),
/* harmony export */   lineChartLegend: () => (/* binding */ lineChartLegend),
/* harmony export */   lineChartOptions: () => (/* binding */ lineChartOptions),
/* harmony export */   lineChartType: () => (/* binding */ lineChartType),
/* harmony export */   lineGraphColors: () => (/* binding */ lineGraphColors),
/* harmony export */   lineGraphData: () => (/* binding */ lineGraphData),
/* harmony export */   lineGraphLabels: () => (/* binding */ lineGraphLabels),
/* harmony export */   lineGraphLegend: () => (/* binding */ lineGraphLegend),
/* harmony export */   lineGraphOptions: () => (/* binding */ lineGraphOptions),
/* harmony export */   lineGraphType: () => (/* binding */ lineGraphType),
/* harmony export */   radarGraphColors: () => (/* binding */ radarGraphColors),
/* harmony export */   radarGraphData: () => (/* binding */ radarGraphData),
/* harmony export */   radarGraphLabels: () => (/* binding */ radarGraphLabels),
/* harmony export */   radarGraphLegend: () => (/* binding */ radarGraphLegend),
/* harmony export */   radarGraphOptions: () => (/* binding */ radarGraphOptions),
/* harmony export */   radarGraphType: () => (/* binding */ radarGraphType)
/* harmony export */ });
// barChart
var barChartOptions = {
  scaleShowVerticalLines: false,
  responsive: true
};
var barChartLabels = ["January", "February", "March", "April", "May", "June", "July"];
var barChartType = 'bar';
var barChartLegend = false;
var barChartData = [{
  data: [35, 59, 80, 81, 56, 55, 40],
  label: 'Series A'
}, {
  data: [28, 48, 40, 19, 86, 27, 90],
  label: 'Series B'
}];
var barChartColors = [{
  backgroundColor: '#4466f2',
  borderColor: "rgba(30, 166, 236, 0.8)",
  borderWidth: 1
}, {
  backgroundColor: '#1ea6ec',
  borderColor: "rgba(68, 102, 242, 0.8)",
  borderWidth: 1
}];
// LineGraph Chart
var lineGraphOptions = {
  scaleShowGridLines: true,
  scaleGridLineColor: "rgba(0,0,0,.05)",
  scaleGridLineWidth: 1,
  scaleShowHorizontalLines: true,
  scaleShowVerticalLines: true,
  bezierCurve: true,
  bezierCurveTension: 0.4,
  pointDot: true,
  pointDotRadius: 4,
  pointDotStrokeWidth: 1,
  pointHitDetectionRadius: 20,
  datasetStroke: true,
  datasetStrokeWidth: 2,
  datasetFill: true,
  legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"
};
var lineGraphLabels = ["January", "February", "March", "April", "May", "June", "July"];
var lineGraphType = 'line';
var lineGraphLegend = false;
var lineGraphData = [{
  data: [10, 59, 80, 81, 56, 55, 40],
  label: 'Series A'
}, {
  data: [28, 48, 40, 19, 86, 27, 90],
  label: 'Series B'
}];
var lineGraphColors = [{
  backgroundColor: 'rgba(68, 102, 242, 0.3)',
  borderColor: "#4466f2",
  borderWidth: 2
}, {
  backgroundColor: 'rgba(30, 166, 236, 0.3)',
  borderColor: "#1ea6ec",
  borderWidth: 2
}];
// RadarGraph Chart
var radarGraphOptions = {
  scaleShowGridLines: true,
  scaleGridLineColor: "rgba(0,0,0,.2)",
  scaleGridLineWidth: 1,
  scaleShowHorizontalLines: true,
  scaleShowVerticalLines: true,
  bezierCurve: true,
  bezierCurveTension: 0.4,
  pointDot: true,
  pointDotRadius: 3,
  pointDotStrokeWidth: 1,
  pointHitDetectionRadius: 20,
  datasetStroke: true,
  datasetStrokeWidth: 2,
  datasetFill: true,
  legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"
};
var radarGraphLabels = ["Ford", "Chevy", "Toyota", "Honda", "Mazda"];
var radarGraphType = 'radar';
var radarGraphLegend = false;
var radarGraphData = [{
  data: [12, 3, 5, 18, 7]
}];
var radarGraphColors = [{
  backgroundColor: 'rgba(68, 102, 242, 0.4)',
  borderWidth: 2
}];
//line chart
var lineChartData = [{
  data: [10, 20, 40, 30, 0, 20, 10, 30, 10]
}, {
  data: [20, 40, 10, 20, 40, 30, 40, 10, 20]
}, {
  data: [60, 10, 40, 30, 80, 30, 20, 90]
}];
var lineChartLabels = ["", "10", "20", "30", "40", "50", "60", "70", "80"];
var lineChartOptions = {
  responsive: true,
  scaleShowVerticalLines: false,
  maintainAspectRatio: false
};
var lineChartColors = [{
  backgroundColor: 'rgba(68, 102, 242, 0.3)',
  borderColor: "#4466f2",
  borderWidth: 2,
  lineTension: 0
}, {
  backgroundColor: 'rgba(30, 166, 236, 0.3)',
  borderColor: "#1ea6ec",
  borderWidth: 2,
  lineTension: 0
}, {
  backgroundColor: 'rgba(68, 102, 242, 0.4)',
  borderColor: "#4466f2",
  borderWidth: 2,
  lineTension: 0
}];
var lineChartLegend = false;
var lineChartType = 'line';

/***/ }),

/***/ 68683:
/*!*********************************************!*\
  !*** ./src/app/shared/data/chart/config.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   areaChartcolorScheme: () => (/* binding */ areaChartcolorScheme),
/* harmony export */   areaChartgradient: () => (/* binding */ areaChartgradient),
/* harmony export */   areaChartshowXAxis: () => (/* binding */ areaChartshowXAxis),
/* harmony export */   areaChartshowXAxisLabel: () => (/* binding */ areaChartshowXAxisLabel),
/* harmony export */   areaChartshowYAxis: () => (/* binding */ areaChartshowYAxis),
/* harmony export */   areaChartshowYAxisLabel: () => (/* binding */ areaChartshowYAxisLabel),
/* harmony export */   areaChartxAxisLabel: () => (/* binding */ areaChartxAxisLabel),
/* harmony export */   areaChartyAxisLabel: () => (/* binding */ areaChartyAxisLabel),
/* harmony export */   barChartColorScheme: () => (/* binding */ barChartColorScheme),
/* harmony export */   barChartGradient: () => (/* binding */ barChartGradient),
/* harmony export */   barChartShowLegend: () => (/* binding */ barChartShowLegend),
/* harmony export */   barChartShowXAxis: () => (/* binding */ barChartShowXAxis),
/* harmony export */   barChartShowXAxisLabel: () => (/* binding */ barChartShowXAxisLabel),
/* harmony export */   barChartShowYAxis: () => (/* binding */ barChartShowYAxis),
/* harmony export */   barChartShowYAxisLabel: () => (/* binding */ barChartShowYAxisLabel),
/* harmony export */   barChartXAxisLabel: () => (/* binding */ barChartXAxisLabel),
/* harmony export */   barChartYAxisLabel: () => (/* binding */ barChartYAxisLabel),
/* harmony export */   barChartshowGridLines: () => (/* binding */ barChartshowGridLines),
/* harmony export */   chartOptions: () => (/* binding */ chartOptions),
/* harmony export */   lineChartcurve: () => (/* binding */ lineChartcurve),
/* harmony export */   lineChartcurve1: () => (/* binding */ lineChartcurve1),
/* harmony export */   pieChartGradient: () => (/* binding */ pieChartGradient),
/* harmony export */   pieChartShowLabels: () => (/* binding */ pieChartShowLabels),
/* harmony export */   pieChartcolorScheme: () => (/* binding */ pieChartcolorScheme),
/* harmony export */   roundEdges: () => (/* binding */ roundEdges)
/* harmony export */ });
/* harmony import */ var d3_shape__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-shape */ 95177);
/* harmony import */ var d3_shape__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-shape */ 3215);

//BarChart
// options
var barChartShowXAxis = true;
var barChartShowYAxis = true;
var barChartGradient = true;
var barChartShowLegend = false;
var barChartShowXAxisLabel = true;
var barChartXAxisLabel = 'Country';
var barChartShowYAxisLabel = true;
var barChartYAxisLabel = 'Population';
var roundEdges = true;
var barChartshowGridLines = false;
var barChartColorScheme = {
  domain: ["#007bff", "#ff9f40", "#ff5370", "#1ea6ec"]
};
//Pie-Chart
//Options
var pieChartShowLabels = true;
var pieChartGradient = false;
var pieChartcolorScheme = {
  domain: ["#143fef", "#1ea6ec", "#1a8436", "#0062cc", "#ff850d", "#ff2046"]
};
var chartOptions = {
  responsive: true
};
//Area Chart
var areaChartshowXAxis = true;
var areaChartshowYAxis = true;
var areaChartgradient = false;
var areaChartshowXAxisLabel = true;
var areaChartxAxisLabel = 'Country';
var areaChartshowYAxisLabel = true;
var areaChartyAxisLabel = 'Population';
var areaChartcolorScheme = {
  domain: ["#007bff", "#ff9f40", "#ff5370"]
};
var lineChartcurve = d3_shape__WEBPACK_IMPORTED_MODULE_0__["default"];
var lineChartcurve1 = d3_shape__WEBPACK_IMPORTED_MODULE_1__["default"];

/***/ }),

/***/ 59413:
/*!***************************************************!*\
  !*** ./src/app/shared/data/chart/google-chart.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   areaChart1: () => (/* binding */ areaChart1),
/* harmony export */   areaChart2: () => (/* binding */ areaChart2),
/* harmony export */   barChart1: () => (/* binding */ barChart1),
/* harmony export */   barChart2: () => (/* binding */ barChart2),
/* harmony export */   columnChart1: () => (/* binding */ columnChart1),
/* harmony export */   columnChart2: () => (/* binding */ columnChart2),
/* harmony export */   comboChart: () => (/* binding */ comboChart),
/* harmony export */   lineChart: () => (/* binding */ lineChart),
/* harmony export */   pieChart1: () => (/* binding */ pieChart1),
/* harmony export */   pieChart2: () => (/* binding */ pieChart2),
/* harmony export */   pieChart3: () => (/* binding */ pieChart3),
/* harmony export */   pieChart4: () => (/* binding */ pieChart4)
/* harmony export */ });
// Pie Chart 1
var pieChart1 = {
  chartType: 'PieChart',
  dataTable: [['Task', 'Hours per Day'], ['Work', 5], ['Eat', 10], ['Commute', 15], ['Watch TV', 20], ['Sleep', 25]],
  options: {
    title: 'My Daily Activities',
    width: '100%',
    height: 400,
    colors: ["#4466f2", "#1ea6ec", "#22af47", "#007bff", "#FF5370"],
    backgroundColor: 'transparent'
  }
};
// Pie Chart 2
var pieChart2 = {
  chartType: 'PieChart',
  dataTable: [['Task', 'Hours per Day'], ['Work', 5], ['Eat', 10], ['Commute', 15], ['Watch TV', 20], ['Sleep', 25]],
  options: {
    title: 'My Daily Activities',
    is3D: true,
    width: '100%',
    height: 400,
    colors: ["#4466f2", "#1ea6ec", "#22af47", "#007bff", "#FF5370"],
    backgroundColor: 'transparent'
  }
};
// Pie Chart 3
var pieChart3 = {
  chartType: 'PieChart',
  dataTable: [['Task', 'Hours per Day'], ['Work', 2], ['Eat', 2], ['Commute', 11], ['Watch TV', 2], ['Sleep', 7]],
  options: {
    title: 'My Daily Activities',
    pieHole: 0.4,
    width: '100%',
    height: 400,
    colors: ["#4466f2", "#1ea6ec", "#22af47", "#007bff", "#FF5370", "#FF5370"],
    backgroundColor: 'transparent'
  }
};
// Pie Chart 4
var pieChart4 = {
  chartType: 'PieChart',
  dataTable: [['Language', 'Speakers (in millions)'], ['Assamese', 13], ['Bengali', 83], ['Bodo', 1.4], ['Dogri', 2.3], ['Gujarati', 46], ['Hindi', 300], ['Kannada', 38], ['Kashmiri', 5.5], ['Konkani', 5], ['Maithili', 20], ['Malayalam', 33], ['Manipuri', 1.5], ['Marathi', 72], ['Nepali', 2.9], ['Oriya', 33], ['Punjabi', 29], ['Sanskrit', 0.01], ['Santhali', 6.5], ['Sindhi', 2.5], ['Tamil', 61], ['Telugu', 74], ['Urdu', 52]],
  options: {
    title: 'Indian Language Use',
    legend: 'none',
    width: '100%',
    height: 400,
    pieSliceText: 'label',
    slices: {
      4: {
        offset: 0.2
      },
      12: {
        offset: 0.3
      },
      14: {
        offset: 0.4
      },
      15: {
        offset: 0.5
      }
    },
    // colors: ["#ab8ce4", "#26c6da"]
    colors: ["#4466f2", "#1ea6ec", "#22af47", "#007bff", "#ff9f40", "#FF5370", "#4466f2", "#1ea6ec", "#22af47", "#007bff", "#ff9f40", "#FF5370", "#4466f2", "#1ea6ec", "#22af47", "#007bff", "#ff9f40", "#FF5370", "#fd7b6c", "#22af47", "#007bff", "#ff9f40"],
    backgroundColor: 'transparent'
  }
};
// Area Chart 1
var areaChart1 = {
  chartType: 'AreaChart',
  dataTable: [['Year', 'Sales', 'Expenses'], ['2013', 1000, 400], ['2014', 1170, 460], ['2015', 660, 1120], ['2016', 1030, 540]],
  options: {
    title: 'Company Performance',
    hAxis: {
      title: 'Year',
      titleTextStyle: {
        color: '#333'
      }
    },
    vAxis: {
      minValue: 0
    },
    width: '100%',
    height: 400,
    colors: ["#4466f2", "#1ea6ec"],
    backgroundColor: 'transparent'
  }
};
// Area Chart 2
var areaChart2 = {
  chartType: 'AreaChart',
  dataTable: [['Year', 'Cars', 'Trucks', 'Drones', 'Segways'], ['2013', 100, 400, 2000, 400], ['2014', 500, 700, 530, 800], ['2015', 2000, 1000, 620, 120], ['2016', 120, 201, 2501, 540]],
  options: {
    title: 'Company Performance',
    hAxis: {
      title: 'Year',
      titleTextStyle: {
        color: '#333'
      }
    },
    vAxis: {
      minValue: 0
    },
    width: '100%',
    height: 400,
    colors: ["#4466f2", "#1ea6ec", "#22af47", "#007bff"],
    backgroundColor: 'transparent'
  }
};
// Column Chart 1
var columnChart1 = {
  chartType: 'ColumnChart',
  dataTable: [["Year", "Sales", "Expenses", "Profit"], ["2014", 1e3, 400, 250], ["2015", 1170, 460, 300], ["2016", 660, 1120, 400], ["2017", 1030, 540, 450]],
  options: {
    chart: {
      title: "Company Performance",
      subtitle: "Sales, Expenses, and Profit: 2014-2017"
    },
    bars: "vertical",
    vAxis: {
      format: "decimal"
    },
    height: 400,
    width: '100%',
    colors: ["#4466f2", "#1ea6ec", "#22af47"],
    backgroundColor: 'transparent'
  }
};
// Column-BarChart Chart 2
var columnChart2 = {
  chartType: 'BarChart',
  dataTable: [["Year", "Sales", "Expenses", "Profit"], ["2014", 1e3, 400, 250], ["2015", 1170, 460, 300], ["2016", 660, 1120, 400], ["2017", 1030, 540, 450]],
  options: {
    chart: {
      title: "Company Performance",
      subtitle: "Sales, Expenses, and Profit: 2014-2017"
    },
    bars: "horizontal",
    vAxis: {
      format: "decimal"
    },
    height: 400,
    width: '100%',
    colors: ["#4466f2", "#1ea6ec", "#22af47"],
    backgroundColor: 'transparent'
  }
};
// ColumnChart-BarChart Chart 1
var barChart1 = {
  chartType: 'ColumnChart',
  dataTable: [["Element", "Density", {
    role: "style"
  }], ["Copper", 10, "#4466f2"], ["Silver", 12, "#1ea6ec"], ["Gold", 14, "#22af47"], ["Platinum", 16, "color: #007bff"]],
  options: {
    title: "Density of Precious Metals, in g/cm^3",
    width: '100%',
    height: 400,
    bar: {
      groupWidth: "95%"
    },
    legend: {
      position: "none"
    },
    backgroundColor: 'transparent'
  }
};
// BarChart Chart 2
var barChart2 = {
  chartType: 'BarChart',
  dataTable: [["Element", "Density", {
    role: "style"
  }], ["Copper", 10, "#4466f2"], ["Silver", 12, "#1ea6ec"], ["Gold", 14, "#22af47"], ["Platinum", 16, "color: #007bff"]],
  options: {
    title: "Density of Precious Metals, in g/cm^3",
    width: '100%',
    height: 400,
    bar: {
      groupWidth: "95%"
    },
    legend: {
      position: "none"
    },
    backgroundColor: 'transparent'
  }
};
// Line Chart 
var lineChart = {
  chartType: 'LineChart',
  dataTable: [['Month', 'Guardians of the Galaxy', 'The Avengers', 'Transformers: Age of Extinction'], [1, 37.8, 80.8, 41.8], [2, 30.9, 10.5, 32.4], [3, 40.4, 57, 25.7], [4, 11.7, 18.8, 10.5], [5, 20, 17.6, 10.4], [6, 8.8, 13.6, 7.7], [7, 7.6, 12.3, 9.6], [8, 12.3, 29.2, 10.6], [9, 16.9, 42.9, 14.8], [10, 12.8, 30.9, 11.6], [11, 5.3, 7.9, 4.7], [12, 6.6, 8.4, 5.2]],
  options: {
    chart: {
      title: 'Box Office Earnings in First Two Weeks of Opening',
      subtitle: 'in millions of dollars (USD)'
    },
    colors: ["#4466f2", "#1ea6ec", "#22af47"],
    height: 500,
    width: '100%',
    backgroundColor: 'transparent'
  }
};
// Combo Chart
var comboChart = {
  chartType: 'ComboChart',
  dataTable: [['Month', 'Bolivia', 'Ecuador', 'Madagascar', 'Papua New Guinea', 'Rwanda', 'Average'], ['2004/05', 165, 938, 522, 998, 450, 614.6], ['2005/06', 135, 1120, 599, 1268, 288, 682], ['2006/07', 157, 1167, 587, 807, 397, 623], ['2007/08', 139, 1110, 615, 968, 215, 609.4], ['2008/09', 136, 691, 629, 1026, 366, 569.6]],
  options: {
    title: 'Monthly Coffee Production by Country',
    vAxis: {
      title: 'Cups'
    },
    hAxis: {
      title: 'Month'
    },
    seriesType: 'bars',
    series: {
      5: {
        type: 'line'
      }
    },
    height: 500,
    fullWidth: true,
    colors: ["#4466f2", "#1ea6ec", "#22af47", "#FF5370", "#007bff"],
    backgroundColor: 'transparent'
  }
};

/***/ }),

/***/ 6812:
/*!************************************************!*\
  !*** ./src/app/shared/data/chart/ngx-chart.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   barChartSingle: () => (/* binding */ barChartSingle),
/* harmony export */   multiData: () => (/* binding */ multiData),
/* harmony export */   pieChart: () => (/* binding */ pieChart),
/* harmony export */   single: () => (/* binding */ single)
/* harmony export */ });
var barChartSingle = [{
  "name": "Germany",
  "value": 894
}, {
  "name": "USA",
  "value": 500
}, {
  "name": "France",
  "value": 720
}, {
  "name": "Australia",
  "value": 650
}];
var single = [{
  "name": "Germany",
  "value": 8940000
}, {
  "name": "USA",
  "value": 5000000
}, {
  "name": "France",
  "value": 7200000
}];
var pieChart = [{
  name: "Germany",
  value: 8940000
}, {
  name: "USA",
  value: 6523140
}, {
  name: "France",
  value: 7200000
}, {
  name: "India",
  value: 5458796
}, {
  name: "NZ",
  value: 6145687
}, {
  name: "UK",
  value: 5234567
}];
var multiData = [{
  "name": "Germany",
  "series": [{
    "name": "2010",
    "value": 200
  }, {
    "name": "2011",
    "value": 500
  }, {
    "name": "2012",
    "value": 275
  }, {
    "name": "2013",
    "value": 1000
  }, {
    "name": "2014",
    "value": 650
  }, {
    "name": "2015",
    "value": 1900
  }, {
    "name": "2016",
    "value": 860
  }]
}, {
  "name": "USA",
  "series": [{
    "name": "2010",
    "value": 100
  }, {
    "name": "2011",
    "value": 300
  }, {
    "name": "2012",
    "value": 1350
  }, {
    "name": "2013",
    "value": 650
  }, {
    "name": "2014",
    "value": 250
  }, {
    "name": "2015",
    "value": 775
  }, {
    "name": "2016",
    "value": 730
  }]
}, {
  "name": "France",
  "series": [{
    "name": "2010",
    "value": 660
  }, {
    "name": "2011",
    "value": 900
  }, {
    "name": "2012",
    "value": 680
  }, {
    "name": "2013",
    "value": 675
  }, {
    "name": "2014",
    "value": 1500
  }, {
    "name": "2015",
    "value": 680
  }, {
    "name": "2016",
    "value": 690
  }]
}];

/***/ }),

/***/ 95177:
/*!*************************************************!*\
  !*** ./node_modules/d3-shape/src/curve/step.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   stepAfter: () => (/* binding */ stepAfter),
/* harmony export */   stepBefore: () => (/* binding */ stepBefore)
/* harmony export */ });
function Step(context, t) {
  this._context = context;
  this._t = t;
}
Step.prototype = {
  areaStart: function () {
    this._line = 0;
  },
  areaEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    this._x = this._y = NaN;
    this._point = 0;
  },
  lineEnd: function () {
    if (0 < this._t && this._t < 1 && this._point === 2) this._context.lineTo(this._x, this._y);
    if (this._line || this._line !== 0 && this._point === 1) this._context.closePath();
    if (this._line >= 0) this._t = 1 - this._t, this._line = 1 - this._line;
  },
  point: function (x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0:
        this._point = 1;
        this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y);
        break;
      case 1:
        this._point = 2;
      // falls through
      default:
        {
          if (this._t <= 0) {
            this._context.lineTo(this._x, y);
            this._context.lineTo(x, y);
          } else {
            var x1 = this._x * (1 - this._t) + x * this._t;
            this._context.lineTo(x1, this._y);
            this._context.lineTo(x1, y);
          }
          break;
        }
    }
    this._x = x, this._y = y;
  }
};
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(context) {
  return new Step(context, 0.5);
}
function stepBefore(context) {
  return new Step(context, 0);
}
function stepAfter(context) {
  return new Step(context, 1);
}

/***/ })

}]);
//# sourceMappingURL=src_app_components_charts_charts_module_ts.676c4d3a368c5494.js.map