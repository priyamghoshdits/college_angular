"use strict";
(self["webpackChunkRUDKARSH"] = self["webpackChunkRUDKARSH"] || []).push([["src_app_components_widgets_widgets_module_ts"],{

/***/ 44027:
/*!*************************************************************!*\
  !*** ./src/app/components/widgets/chart/chart.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChartComponent: () => (/* binding */ ChartComponent)
/* harmony export */ });
/* harmony import */ var _shared_data_widgets_chart_chart_widget__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/data/widgets-chart/chart-widget */ 87902);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var ng_chartist__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-chartist */ 83568);
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swimlane/ngx-charts */ 48278);





class ChartComponent {
  constructor() {
    this.isOpened = true;
    this.monthlydoughnutData = _shared_data_widgets_chart_chart_widget__WEBPACK_IMPORTED_MODULE_0__.monthlydoughnutData;
    this.dailydoughnutData = _shared_data_widgets_chart_chart_widget__WEBPACK_IMPORTED_MODULE_0__.dailydoughnutData;
    this.chart1 = _shared_data_widgets_chart_chart_widget__WEBPACK_IMPORTED_MODULE_0__.chart1;
    this.chart2 = _shared_data_widgets_chart_chart_widget__WEBPACK_IMPORTED_MODULE_0__.chart2;
    this.chart3 = _shared_data_widgets_chart_chart_widget__WEBPACK_IMPORTED_MODULE_0__.chart3;
    this.WidgetBarChart1 = _shared_data_widgets_chart_chart_widget__WEBPACK_IMPORTED_MODULE_0__.WidgetBarChart1;
    this.WidgetBarChart2 = _shared_data_widgets_chart_chart_widget__WEBPACK_IMPORTED_MODULE_0__.WidgetBarChart2;
    this.liveProductChart = _shared_data_widgets_chart_chart_widget__WEBPACK_IMPORTED_MODULE_0__.liveProductChart;
    this.turnOverChart = _shared_data_widgets_chart_chart_widget__WEBPACK_IMPORTED_MODULE_0__.turnOverChart;
    this.monthlyChart = _shared_data_widgets_chart_chart_widget__WEBPACK_IMPORTED_MODULE_0__.monthlyChart;
    this.usesChart = _shared_data_widgets_chart_chart_widget__WEBPACK_IMPORTED_MODULE_0__.usesChart;
    this.financeWidget = _shared_data_widgets_chart_chart_widget__WEBPACK_IMPORTED_MODULE_0__.financeWidget;
    this.orderStatusWidget = _shared_data_widgets_chart_chart_widget__WEBPACK_IMPORTED_MODULE_0__.orderStatusWidget;
    this.skillWidget = _shared_data_widgets_chart_chart_widget__WEBPACK_IMPORTED_MODULE_0__.skillWidget;
    // Doughnut Chart (Monthlt visitor chart)
    this.monthlydoughnutChartColorScheme = _shared_data_widgets_chart_chart_widget__WEBPACK_IMPORTED_MODULE_0__.monthlydoughnutChartcolorScheme;
    this.monthlydoughnutChartShowLabels = _shared_data_widgets_chart_chart_widget__WEBPACK_IMPORTED_MODULE_0__.monthlydoughnutChartShowLabels;
    this.monthlydoughnutChartGradient = _shared_data_widgets_chart_chart_widget__WEBPACK_IMPORTED_MODULE_0__.monthlydoughnutChartGradient;
    // Doughnut Chart (Daily visitor chart)
    this.dailydoughnutChartColorScheme = _shared_data_widgets_chart_chart_widget__WEBPACK_IMPORTED_MODULE_0__.dailydoughnutChartcolorScheme;
    this.dailydoughnutChartShowLabels = _shared_data_widgets_chart_chart_widget__WEBPACK_IMPORTED_MODULE_0__.dailydoughnutChartShowLabels;
    this.dailydoughnutChartGradient = _shared_data_widgets_chart_chart_widget__WEBPACK_IMPORTED_MODULE_0__.dailydoughnutChartGradient;
    Object.assign(this, {
      monthlydoughnutData: _shared_data_widgets_chart_chart_widget__WEBPACK_IMPORTED_MODULE_0__.monthlydoughnutData,
      dailydoughnutData: _shared_data_widgets_chart_chart_widget__WEBPACK_IMPORTED_MODULE_0__.dailydoughnutData
    });
  }
  ngOnInit() {}
  static #_ = this.ɵfac = function ChartComponent_Factory(t) {
    return new (t || ChartComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: ChartComponent,
    selectors: [["app-chart"]],
    decls: 341,
    vars: 26,
    consts: [[1, "container-fluid"], [1, "row"], [1, "col-xl-4", "col-md-12"], [1, "card"], [1, "chart-widget-top"], [1, "row", "card-body"], [1, "col-5"], [1, "font-primary"], [1, "num"], [1, "counter"], [1, "icon-angle-up", "f-12", "ms-1"], [1, "col-7", "text-end"], [1, "num", "total-value"], ["id", "chart-widget-top-first", 1, "flot-chart-placeholder"], [3, "configuration"], [1, "col-7"], [1, "col-5", "text-end"], [1, "num", "total-value", "counter"], ["id", "chart-widget-top-second", 1, "flot-chart-placeholder"], [1, "col-8"], [1, "col-4", "text-end"], ["id", "chart-widget-top-third", 1, "flot-chart-placeholder"], [1, "col-xl-6", "col-md-12"], [1, "card", "o-hidden"], [1, "bar-chart-widget"], [1, "top-content", "bg-primary"], [1, "card-body", "pb-0"], [1, "earning-details"], [1, "text-start"], [1, "mt-1", "num", "mb-0"], [1, "icon-announcement"], [1, "bottom-content", "card-body"], [1, "col-4", "b-r-light"], [1, "num", "font-primary"], [1, "text-muted", "mt-2", "mb-2", "block-bottom"], [1, "num", "m-0"], [1, "counter", "color-bottom"], [1, "col-4"], [1, "icofont", "icofont-coins"], [1, "xl-50", "col-md-6"], [1, "small-chart-widget"], [1, "card-header"], [1, "card-body", "bg-primary"], [1, "chart-container"], [1, "live-products"], [1, "live-products", 3, "configuration"], [1, "card-body", "bg-secondary"], [1, "turnover"], [1, "monthly"], [1, "uses"], [1, "uses", 3, "configuration"], [1, "col-xl-4", "col-lg-12"], [1, "status-widget"], [1, "col-9"], [1, "col-3", "text-sm-right"], ["data-feather", "navigation", 1, "text-muted"], [1, "card-body"], [1, "status-details"], [1, "col-4", "text-center"], [1, "counter", "mb-0"], [1, "mb-0"], [1, "status-chart", "bg-primary"], ["id", "finance-graph", 1, "flot-chart-placeholder"], ["data-feather", "shopping-bag", 1, "text-muted"], [1, "status-chart", "bg-secondary"], ["id", "order-graph", 1, "flot-chart-placeholder"], ["data-feather", "trending-up", 1, "text-muted"], [1, "flot-chart-placeholder", 3, "configuration"], [1, "col-sm-6"], [1, "donut-chart-widget"], [3, "scheme", "results", "explodeSlices", "labels", "arcWidth", "doughnut", "gradient"], ["id", "website-visiter-chart", 1, "flot-chart-placeholder"]],
    template: function ChartComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "h5", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "SALE");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span", 8)(10, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "90");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 11)(15, "h4", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "$ ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "3654");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, ".00 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div")(21, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "x-chartist", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 2)(24, "div", 3)(25, "div", 4)(26, "div", 5)(27, "div", 15)(28, "h5", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "PROJECTS");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "span", 8)(31, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "30");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 16)(36, "h4", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "12569");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div")(39, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "x-chartist", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 2)(42, "div", 3)(43, "div", 4)(44, "div", 5)(45, "div", 19)(46, "h5", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "PRODUCTS");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "span", 8)(49, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "68");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](52, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 20)(54, "h4", 12)(55, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "93");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "M");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "div")(59, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](60, "x-chartist", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "div", 1)(62, "div", 22)(63, "div", 23)(64, "div", 24)(65, "div", 25)(66, "div", 1)(67, "div", 15)(68, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](69, "x-chartist", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "div", 6)(71, "div", 27)(72, "div", 28)(73, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, "Marketing Expenses");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "h4", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, "$ ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78, "3654");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](79, "i", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "div", 31)(81, "div", 1)(82, "div", 32)(83, "div")(84, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](85, "12%");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](86, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](88, "Marketing");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "h4", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](90, "$");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](92, "9313");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "div", 32)(94, "div")(95, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](96, "15%");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](97, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](99, "Affiliate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "h4", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](101, "$");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](103, "2314");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "div", 37)(105, "div")(106, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](107, "34%");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](108, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](110, "Advertise");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "h4", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](112, "$");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](113, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](114, "4219");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "div", 22)(116, "div", 23)(117, "div", 24)(118, "div", 25)(119, "div", 1)(120, "div", 15)(121, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](122, "x-chartist", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](123, "div", 6)(124, "div", 27)(125, "div", 28)(126, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](127, "Total Earning");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](128, "h4", 29)(129, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](130, "3653");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](131, " M ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](132, "i", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](133, "div", 31)(134, "div", 1)(135, "div", 32)(136, "div")(137, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](138, "12%");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](139, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](140, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](141, "Year");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](142, "h4", 35)(143, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](144, "3659");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](145, "M");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](146, "div", 32)(147, "div")(148, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](149, "15%");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](150, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](151, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](152, "Month");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](153, "h4", 35)(154, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](155, "698");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](156, "M");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](157, "div", 37)(158, "div")(159, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](160, "34%");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](161, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](162, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](163, "Today");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](164, "h4", 35)(165, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](166, "9361");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](167, "M");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](168, "div", 1)(169, "div", 39)(170, "div", 40)(171, "div", 3)(172, "div", 41)(173, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](174, "Live Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](175, "div", 42)(176, "div", 43)(177, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](178, "x-chartist", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](179, "div", 39)(180, "div", 40)(181, "div", 3)(182, "div", 41)(183, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](184, "Turnover");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](185, "div", 46)(186, "div", 43)(187, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](188, "x-chartist", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](189, "div", 39)(190, "div", 40)(191, "div", 3)(192, "div", 41)(193, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](194, "Monthly Sales");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](195, "div", 46)(196, "div", 43)(197, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](198, "x-chartist", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](199, "div", 39)(200, "div", 40)(201, "div", 3)(202, "div", 41)(203, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](204, "Uses");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](205, "div", 42)(206, "div", 43)(207, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](208, "x-chartist", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](209, "div", 1)(210, "div", 51)(211, "div", 52)(212, "div", 3)(213, "div", 41)(214, "div", 1)(215, "div", 53)(216, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](217, "Finance");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](218, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](219, "i", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](220, "div", 56)(221, "div", 57)(222, "div", 1)(223, "div", 58)(224, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](225, "Investor");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](226, "h4", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](227, "3659");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](228, "div", 58)(229, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](230, "Money");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](231, "h4", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](232, "$");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](233, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](234, "362");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](235, "div", 58)(236, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](237, "Earning");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](238, "h4", 60)(239, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](240, "86");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](241, "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](242, "div", 61)(243, "div", 43)(244, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](245, "x-chartist", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](246, "div", 51)(247, "div", 52)(248, "div", 3)(249, "div", 41)(250, "div", 1)(251, "div", 53)(252, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](253, "Order Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](254, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](255, "i", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](256, "div", 56)(257, "div", 57)(258, "div", 1)(259, "div", 58)(260, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](261, "Complete");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](262, "h4", 60)(263, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](264, "62");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](265, "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](266, "div", 58)(267, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](268, "Pending");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](269, "h4", 60)(270, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](271, "36");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](272, "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](273, "div", 58)(274, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](275, "Cancle");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](276, "h4", 60)(277, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](278, "20");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](279, "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](280, "div", 64)(281, "div", 43)(282, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](283, "x-chartist", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](284, "div", 51)(285, "div", 52)(286, "div", 3)(287, "div", 41)(288, "div", 1)(289, "div", 53)(290, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](291, "Skill Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](292, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](293, "i", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](294, "div", 56)(295, "div", 57)(296, "div", 1)(297, "div", 58)(298, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](299, "Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](300, "h4", 60)(301, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](302, "25");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](303, "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](304, "div", 58)(305, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](306, "Market");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](307, "h4", 60)(308, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](309, "40");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](310, "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](311, "div", 58)(312, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](313, "Converse");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](314, "h4", 60)(315, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](316, "35");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](317, "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](318, "div", 61)(319, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](320, "x-chartist", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](321, "div", 1)(322, "div", 68)(323, "div", 69)(324, "div", 3)(325, "div", 41)(326, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](327, "Browser Uses");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](328, "div", 56)(329, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](330, "ngx-charts-pie-chart", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](331, "div", 68)(332, "div", 69)(333, "div", 3)(334, "div", 41)(335, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](336, "Website Visiter");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](337, "div", 56)(338, "div", 43)(339, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](340, "ngx-charts-pie-chart", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("configuration", ctx.chart1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("configuration", ctx.chart2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("configuration", ctx.chart3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("configuration", ctx.WidgetBarChart1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("configuration", ctx.WidgetBarChart2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("configuration", ctx.liveProductChart);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("configuration", ctx.turnOverChart);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("configuration", ctx.monthlyChart);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("configuration", ctx.usesChart);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("configuration", ctx.financeWidget);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("configuration", ctx.orderStatusWidget);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("configuration", ctx.skillWidget);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("scheme", ctx.monthlydoughnutChartColorScheme)("results", ctx.monthlydoughnutData)("explodeSlices", true)("labels", ctx.monthlydoughnutChartShowLabels)("arcWidth", 0.3)("doughnut", true)("gradient", ctx.monthlydoughnutChartGradient);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("scheme", ctx.dailydoughnutChartColorScheme)("results", ctx.dailydoughnutData)("explodeSlices", true)("labels", ctx.dailydoughnutChartShowLabels)("arcWidth", 0.3)("doughnut", true)("gradient", ctx.dailydoughnutChartGradient);
      }
    },
    dependencies: [ng_chartist__WEBPACK_IMPORTED_MODULE_2__.ChartistComponent, _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_3__.PieChartComponent],
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"],
    encapsulation: 2
  });
}

/***/ }),

/***/ 50743:
/*!*****************************************************************!*\
  !*** ./src/app/components/widgets/general/general.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GeneralComponent: () => (/* binding */ GeneralComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 76101);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-owl-carousel-o */ 99436);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/components/feather-icons/feather-icons.component */ 49177);







function GeneralComponent_806_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 227);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 228);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h5", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r2.desc);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", data_r2.img, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r2.designation);
  }
}
function GeneralComponent_806_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, GeneralComponent_806_ng_template_0_Template, 8, 4, "ng-template", 226);
  }
}
class GeneralComponent {
  constructor(calender) {
    this.calender = calender;
    this.time = new Date();
    this.jstoday = '';
    this.today = Date.now();
    this.owlcarousel = [{
      desc: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia",
      img: "assets/images/dashboard/boy-2.png",
      name: "Poio klot",
      designation: "Developer"
    }, {
      desc: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia",
      img: "assets/images/dashboard/boy-2.png",
      name: "Poio klot",
      designation: "Developer"
    }];
    this.owlcarouselOptions = {
      loop: true,
      margin: 10,
      items: 1,
      nav: false,
      dots: false
    };
    this.model = calender.getToday();
    this.jstoday = (0,_angular_common__WEBPACK_IMPORTED_MODULE_2__.formatDate)(this.time, 'dd-MM-yyyy hh:mm:ss a', 'en-US', '+0530');
  }
  setTime() {
    this.intmin = setInterval(function () {
      var second = new Date().getSeconds();
      var sdegree = second * 6;
      var srotate = "rotate(" + sdegree + "deg)";
      var seconds = document.getElementById('sec').style.transform = srotate;
    }, 1000);
    this.intsec = setInterval(function () {
      var mins = new Date().getMinutes();
      var mdegree = mins * 6;
      var mrotate = "rotate(" + mdegree + "deg)";
      var minits = document.getElementById('min').style.transform = mrotate;
    }, 1000);
    this.inthour = setInterval(function () {
      var hour = new Date().getHours();
      var mints = new Date().getMinutes();
      var hdegree = hour * 30 + mints / 2;
      var hrotate = "rotate(" + hdegree + "deg)";
      var hours = document.getElementById('hour').style.transform = hrotate;
    }, 1000);
  }
  ngOnInit() {
    const now = new Date();
    this.setTime();
  }
  ngOnDestroy() {
    if (this.intmin) {
      clearInterval(this.intmin);
    }
    if (this.intsec) {
      clearInterval(this.intsec);
    }
    if (this.inthour) {
      clearInterval(this.inthour);
    }
  }
  static #_ = this.ɵfac = function GeneralComponent_Factory(t) {
    return new (t || GeneralComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbCalendar));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: GeneralComponent,
    selectors: [["app-general"]],
    decls: 831,
    vars: 11,
    consts: [[1, "container-fluid"], [1, "row"], [1, "col-sm-6", "col-xl-3", "col-lg-6"], [1, "card", "o-hidden"], [1, "bg-primary", "b-r-4", "card-body"], [1, "d-flex", "static-top-widget"], [1, "align-self-center", "text-center"], [3, "icon"], [1, "flex-grow-1", "mediaBody"], [1, "m-0"], [1, "mb-0", "counter"], ["data-feather", "navigation", 1, "icon-bg"], [1, "bg-secondary", "b-r-4", "card-body"], ["data-feather", "box", 1, "icon-bg"], ["data-feather", "message-square", 1, "icon-bg"], ["data-feather", "users", 1, "icon-bg"], [1, "col-xl-6", "xl-100"], [1, "widget-joins", "card"], [1, "col-sm-6", "pe-0"], [1, "d-flex", "mediaClass", "border-after-xs"], [1, "align-self-center", "me-3"], [1, "fa", "fa-angle-up", "ms-2"], [1, "flex-grow-1", "details", "ps-3"], [1, "mb-1"], [1, "mb-0", "counter", "digits"], [1, "flex-grow-1", "align-self-center"], ["data-feather", "shopping-bag", 1, "font-primary", "float-start", "ms-2"], [1, "col-sm-6", "ps-0"], [1, "d-flex", "mediaClass"], [1, "align-self-center", "me-3", "digits"], [1, "fa", "fa-angle-down", "ms-2"], ["data-feather", "layers", 1, "font-primary", "float-start", "ms-3"], [1, "flex-grow-1", "details", "ps-3", "pt-0"], ["data-feather", "shopping-cart", 1, "font-primary", "float-start", "ms-2"], ["data-feather", "dollar-sign", 1, "font-primary", "float-start", "ms-2"], [1, "widget-joins", "card", "widget-arrow"], [1, "align-self-center", "me-3", "text-start"], [1, "mb-0"], ["data-feather", "arrow-down", 1, "font-primary"], [1, "flex-grow-1"], [1, "counter"], ["data-feather", "arrow-up", 1, "font-primary"], [1, "flex-grow-1", "ps-2"], [1, "flex-grow-1", "align-self-center", "ps-3"], [1, "card"], [1, "cal-date-widget", "card-body"], [1, "col-xl-6", "col-xs-12", "col-md-6", "col-sm-6"], [1, "cal-info", "text-center"], [1, "d-inline-block", "mt-2"], [1, "b-r-dark", "mr-3", "pe-3"], [1, "ps-3"], [1, "mt-4", "f-16", "text-muted"], [1, "cal-datepicker", "custom-datepicker", "float-end"], ["data-language", "en", 1, "datepicker-here"], [3, "ngModel", "ngModelChange", "navigate"], ["dp", ""], [1, "col-xl-3", "xl-50", "col-sm-6"], [1, "weather-widget-two"], [1, "card-body"], [1, "d-flex"], ["id", "cloudDrizzleMoonAlt", "version", "1.1", "viewBox", "15 15 70 70", 1, "climacon", "climacon_cloudDrizzleMoonAlt"], ["id", "cloudFillClip"], ["d", "M15,15v70h70V15H15z M59.943,61.639c-3.02,0-12.381,0-15.999,0c-6.626,0-11.998-5.371-11.998-11.998c0-6.627,5.372-11.999,11.998-11.999c5.691,0,10.434,3.974,11.665,9.29c1.252-0.81,2.733-1.291,4.334-1.291c4.418,0,8,3.582,8,8C67.943,58.057,64.361,61.639,59.943,61.639z"], ["id", "moonCloudFillClip"], ["d", "M0,0v100h100V0H0z M60.943,46.641c-4.418,0-7.999-3.582-7.999-7.999c0-3.803,2.655-6.979,6.211-7.792c0.903,4.854,4.726,8.676,9.579,9.58C67.922,43.986,64.745,46.641,60.943,46.641z"], [1, "climacon_iconWrap", "climacon_iconWrap-cloudDrizzleMoonAlt"], ["clip-path", "url(#cloudFillClip)"], ["clip-path", "url(#moonCloudFillClip)", 1, "climacon_wrapperComponent", "climacon_wrapperComponent-moon", "climacon_componentWrap-moon_cloud"], ["d", "M61.023,50.641c-6.627,0-11.999-5.372-11.999-11.998c0-6.627,5.372-11.999,11.999-11.999c0.755,0,1.491,0.078,2.207,0.212c-0.132,0.576-0.208,1.173-0.208,1.788c0,4.418,3.582,7.999,8,7.999c0.614,0,1.212-0.076,1.788-0.208c0.133,0.717,0.211,1.452,0.211,2.208C73.021,45.269,67.649,50.641,61.023,50.641z", 1, "climacon_component", "climacon_component-stroke", "climacon_component-stroke_sunBody"], [1, "climacon_wrapperComponent", "climacon_wrapperComponent-drizzle"], ["id", "Drizzle-Left_1_", "d", "M56.969,57.672l-2.121,2.121c-1.172,1.172-1.172,3.072,0,4.242c1.17,1.172,3.07,1.172,4.24,0c1.172-1.17,1.172-3.07,0-4.242L56.969,57.672z", 1, "climacon_component", "climacon_component-stroke", "climacon_component-stroke_drizzle", "climacon_component-stroke_drizzle-left"], ["d", "M50.088,57.672l-2.119,2.121c-1.174,1.172-1.174,3.07,0,4.242c1.17,1.172,3.068,1.172,4.24,0s1.172-3.07,0-4.242L50.088,57.672z", 1, "climacon_component", "climacon_component-stroke", "climacon_component-stroke_drizzle", "climacon_component-stroke_drizzle-middle"], ["d", "M43.033,57.672l-2.121,2.121c-1.172,1.172-1.172,3.07,0,4.242s3.07,1.172,4.244,0c1.172-1.172,1.172-3.07,0-4.242L43.033,57.672z", 1, "climacon_component", "climacon_component-stroke", "climacon_component-stroke_drizzle", "climacon_component-stroke_drizzle-right"], ["clip-path", "url(#cloudFillClip)", 1, "climacon_wrapperComponent", "climacon_wrapperComponent-cloud"], ["d", "M59.943,41.642c-0.696,0-1.369,0.092-2.033,0.205c-2.736-4.892-7.961-8.203-13.965-8.203c-8.835,0-15.998,7.162-15.998,15.997c0,5.992,3.3,11.207,8.177,13.947c0.276-1.262,0.892-2.465,1.873-3.445l0.057-0.057c-3.644-2.061-6.106-5.963-6.106-10.445c0-6.626,5.372-11.998,11.998-11.998c5.691,0,10.433,3.974,11.666,9.29c1.25-0.81,2.732-1.291,4.332-1.291c4.418,0,8,3.581,8,7.999c0,3.443-2.182,6.371-5.235,7.498c0.788,1.146,1.194,2.471,1.222,3.807c4.666-1.645,8.014-6.077,8.014-11.305C71.941,47.014,66.57,41.642,59.943,41.642z", 1, "climacon_component", "climacon_component-stroke", "climacon_component-stroke_cloud"], [1, "flex-grow-1", "align-self-center", "text-white"], [1, "m-0", "f-w-600", "num"], [1, "m-0", "f-14"], ["id", "cloudRainMoon", "version", "1.1", "viewBox", "15 15 70 70", 1, "climacon", "climacon_cloudRainMoon"], ["id", "cloudFillClip1"], ["id", "moonCloudFillClip1"], [1, "climacon_iconWrap", "climacon_iconWrap-cloudRainMoon"], ["clip-path", "url(#cloudFillClip1)"], ["clip-path", "url(#moonCloudFillClip1)", 1, "climacon_wrapperComponent", "climacon_wrapperComponent-moon", "climacon_componentWrap-moon_cloud"], [1, "climacon_wrapperComponent", "climacon_wrapperComponent-rain"], ["d", "M41.946,53.641c1.104,0,1.999,0.896,1.999,2v15.998c0,1.105-0.895,2-1.999,2s-2-0.895-2-2V55.641C39.946,54.537,40.842,53.641,41.946,53.641z", 1, "climacon_component", "climacon_component-stroke", "climacon_component-stroke_rain", "climacon_component-stroke_rain-", "left"], ["d", "M49.945,57.641c1.104,0,2,0.896,2,2v15.998c0,1.104-0.896,2-2,2s-2-0.896-2-2V59.641C47.945,58.535,48.841,57.641,49.945,57.641z", 1, "climacon_component", "climacon_component-stroke", "climacon_component-stroke_rain", "climacon_component-stroke_rain-", "middle"], ["d", "M57.943,53.641c1.104,0,2,0.896,2,2v15.998c0,1.105-0.896,2-2,2c-1.104,0-2-0.895-2-2V55.641C55.943,54.537,56.84,53.641,57.943,53.641z", 1, "climacon_component", "climacon_component-stroke", "climacon_component-stroke_rain", "climacon_component-stroke_rain-", "right"], ["clip-path", "url(#cloudFillClip1)", 1, "climacon_wrapperComponent", "climacon_wrapperComponent-cloud"], ["id", "cloudDrizzle", "version", "1.1", "viewBox", "15 15 70 70", 1, "climacon", "climacon_cloudDrizzle"], [1, "climacon_iconWrap", "climacon_iconWrap-cloudDrizzle"], ["d", "M42.001,53.644c1.104,0,2,0.896,2,2v3.998c0,1.105-0.896,2-2,2c-1.105,0-2.001-0.895-2.001-2v-3.998C40,54.538,40.896,53.644,42.001,53.644z", 1, "climacon_component", "climacon_component-stroke", "climacon_component-stroke_drizzle", "climacon_component-stroke_drizzle-left"], ["d", "M49.999,53.644c1.104,0,2,0.896,2,2v4c0,1.104-0.896,2-2,2s-1.998-0.896-1.998-2v-4C48.001,54.54,48.896,53.644,49.999,53.644z", 1, "climacon_component", "climacon_component-stroke", "climacon_component-stroke_drizzle", "climacon_component-stroke_drizzle-middle"], ["d", "M57.999,53.644c1.104,0,2,0.896,2,2v3.998c0,1.105-0.896,2-2,2c-1.105,0-2-0.895-2-2v-3.998C55.999,54.538,56.894,53.644,57.999,53.644z", 1, "climacon_component", "climacon_component-stroke", "climacon_component-stroke_drizzle", "climacon_component-stroke_drizzle-right"], [1, "climacon_wrapperComponent", "climacon_wrapperComponent-cloud"], ["d", "M63.999,64.944v-4.381c2.387-1.386,3.998-3.961,3.998-6.92c0-4.418-3.58-8-7.998-8c-1.603,0-3.084,0.481-4.334,1.291c-1.232-5.316-5.973-9.29-11.664-9.29c-6.628,0-11.999,5.372-11.999,12c0,3.549,1.55,6.729,3.998,8.926v4.914c-4.776-2.769-7.998-7.922-7.998-13.84c0-8.836,7.162-15.999,15.999-15.999c6.004,0,11.229,3.312,13.965,8.203c0.664-0.113,1.336-0.205,2.033-0.205c6.627,0,11.998,5.373,11.998,12C71.997,58.864,68.655,63.296,63.999,64.944z", 1, "climacon_component", "climacon_component-stroke", "climacon_component-stroke_cloud"], [1, "top-bg-whether"], ["id", "cloudHailAltFill", "version", "1.1", "viewBox", "15 15 70 70", 1, "climacon", "climacon_cloudHailAltFill"], [1, "climacon_iconWrap", "climacon_iconWrap-cloudHailAltFill"], [1, "climacon_wrapperComponent", "climacon_wrapperComponent-hailAlt"], [1, "climacon_component", "climacon_component-stroke", "climacon_component-stroke_hailAlt", "climacon_component-stroke_hailAlt-left"], ["cx", "42", "cy", "65.498", "r", "2"], [1, "climacon_component", "climacon_component-stroke", "climacon_component-stroke_hailAlt", "climacon_component-stroke_hailAlt-middle"], ["cx", "49.999", "cy", "65.498", "r", "2"], [1, "climacon_component", "climacon_component-stroke", "climacon_component-stroke_hailAlt", "climacon_component-stroke_hailAlt-right"], ["cx", "57.998", "cy", "65.498", "r", "2"], [1, "climacon_componentWrap", "climacon_componentWrap_cloud"], ["d", "M43.945,65.639c-8.835,0-15.998-7.162-15.998-15.998c0-8.836,7.163-15.998,15.998-15.998c6.004,0,11.229,3.312,13.965,8.203c0.664-0.113,1.338-0.205,2.033-0.205c6.627,0,11.998,5.373,11.998,12c0,6.625-5.371,11.998-11.998,11.998C57.168,65.639,47.143,65.639,43.945,65.639z", 1, "climacon_component", "climacon_component-stroke", "climacon_component-stroke_cloud"], ["fill", "#FFFFFF", "d", "M59.943,61.639c4.418,0,8-3.582,8-7.998c0-4.417-3.582-8-8-8c-1.601,0-3.082,0.481-4.334,1.291c-1.23-5.316-5.973-9.29-11.665-9.29c-6.626,0-11.998,5.372-11.998,11.999c0,6.626,5.372,11.998,11.998,11.998C47.562,61.639,56.924,61.639,59.943,61.639z", 1, "climacon_component", "climacon_component-fill", "climacon_component-fill_cloud"], [1, "bottom-whetherinfo"], [1, "col-6"], [1, "whether-content"], [1, "num", "mb-0"], [1, "mobile-clock-widget"], [1, "bg-svg"], ["id", "cloudLightningMoon", "version", "1.1", "viewBox", "15 15 70 70", 1, "climacon", "climacon_cloudLightningMoon"], ["id", "moonCloudFillClipfill11"], ["id", "cloudFillClipfill19"], [1, "climacon_iconWrap", "climacon_iconWrap-cloudLightningMoon"], [1, "climacon_wrapperComponent", "climacon_wrapperComponent-lightning"], ["points", "48.001,51.641 57.999,51.641 52,61.641 58.999,61.641 46.001,77.639 49.601,65.641 43.001,65.641 ", 1, "climacon_component", "climacon_component-stroke", "climacon_component-stroke_lightning"], ["d", "M59.999,65.641c-0.28,0-0.649,0-1.062,0l3.584-4.412c3.182-1.057,5.478-4.053,5.478-7.588c0-4.417-3.581-7.998-7.999-7.998c-1.602,0-3.083,0.48-4.333,1.29c-1.231-5.316-5.974-9.29-11.665-9.29c-6.626,0-11.998,5.372-11.998,12c0,5.446,3.632,10.039,8.604,11.503l-1.349,3.777c-6.52-2.021-11.255-8.098-11.255-15.282c0-8.835,7.163-15.999,15.998-15.999c6.004,0,11.229,3.312,13.965,8.204c0.664-0.114,1.338-0.205,2.033-0.205c6.627,0,11.999,5.371,11.999,11.999C71.999,60.268,66.626,65.641,59.999,65.641z", 1, "climacon_component", "climacon_component-stroke", "climacon_component-stroke_cloud"], ["id", "clock", 1, "clock"], ["id", "hour", 1, "hour"], ["id", "min", 1, "min"], ["id", "sec", 1, "sec"], ["id", "date", 1, "date", "f-24", "mb-2"], [1, "m-0", "f-14", "text-light"], [1, "col-sm-6", "col-xl-3", "xl-50", "col-lg-6"], [1, "card", "social-widget-card"], ["data-label", "50%", 1, "redial-social-widget", "radial-bar-70"], [1, "fa", "fa-facebook", "font-primary"], [1, "b-b-light"], [1, "col", "text-center", "b-r-light"], [1, "counter", "mb-0"], [1, "col", "text-center"], [1, "fa", "fa-twitter", "font-primary"], [1, "fa", "fa-linkedin", "font-primary"], [1, "fa", "fa-google-plus", "font-primary"], [1, "col-md-4", "col-sm-12"], [1, "card", "browser-widget"], [1, "d-flex", "card-body"], [1, "media-img"], ["src", "assets/images/dashboard/chrome.png", "alt", ""], [1, "flex-grow-1", "align-self-center", "mediaClass"], ["src", "assets/images/dashboard/firefox.png", "alt", ""], ["src", "assets/images/dashboard/safari.png", "alt", ""], [1, "card-header"], [1, "user-status", "table-responsive"], [1, "table", "table-bordernone"], ["scope", "col"], [1, "digits"], [1, "font-primary"], [1, "font-secondary"], [1, "bd-t-none", "u-s-tb"], [1, "align-middle", "image-sm-size"], ["src", "assets/images/user/4.jpg", "alt", "", 1, "img-radius", "align-top", "m-r-15", "rounded-circle"], [1, "d-inline-block"], [1, "text-muted", "digits"], [1, "progress-showcase"], [1, "progress", 2, "height", "8px"], ["role", "progressbar", "aria-valuenow", "50", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-primary", 2, "width", "30%"], ["src", "assets/images/user/1.jpg", "alt", "", 1, "img-radius", "align-top", "m-r-15", "rounded-circle"], ["role", "progressbar", "aria-valuenow", "50", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-secondary", 2, "width", "70%"], ["src", "assets/images/user/5.jpg", "alt", "", 1, "img-radius", "align-top", "m-r-15", "rounded-circle"], ["role", "progressbar", "aria-valuenow", "50", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-primary", 2, "width", "60%"], ["src", "assets/images/user/6.jpg", "alt", "", 1, "img-radius", "align-top", "m-r-15", "rounded-circle"], ["role", "progressbar", "aria-valuenow", "50", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-secondary", 2, "width", "30%"], ["src", "assets/images/user/7.jpg", "alt", "", 1, "img-radius", "align-top", "m-r-15", "rounded-circle"], ["role", "progressbar", "aria-valuenow", "50", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-primary", 2, "width", "90%"], [1, "col-sm-12", "col-lg-6", "col-xl-4", "xl-50", "col-md-12"], [1, "calender-widget"], [1, "cal-img"], [1, "cal-date"], [1, "cal-desc", "text-center", "card-body"], [1, "f-w-600"], [1, "text-muted", "mt-3", "mb-0"], [1, "col-sm-12", "col-lg-6", "col-xl-8", "xl-50", "col-md-12"], [1, "contact-form", "card-body"], [1, "theme-form"], [1, "form-icon"], [1, "icofont", "icofont-envelope-open"], [1, "form-group"], ["for", "exampleInputName"], ["id", "exampleInputName", "type", "text", "placeholder", "John Dio", 1, "form-control"], ["for", "exampleInputEmail1", 1, "col-form-label"], ["id", "exampleInputEmail1", "type", "email", "placeholder", "Demo@gmail.com", 1, "form-control"], ["rows", "3", "cols", "50", "placeholder", "Your Message", 1, "form-control", "textarea"], [1, "text-sm-right"], [1, "btn", "btn-primary-gradien"], [1, "col-xl-4", "col-lg-12"], [1, "text-uppercase"], [1, "crm-activity"], [1, "me-3", "font-primary"], [1, "align-self-center", "flex-grow-1", "m-l-15"], [1, "mt-0"], [1, "dates"], [1, "me-3", "font-secondary"], [1, "m-r-3", "font-primary"], [1, "col-xl-4"], [1, "card", "custom-card"], ["src", "assets/images/user-card/3.jpg", "alt", "", 1, "img-fluid"], [1, "card-profile"], ["src", "assets/images/avtar/3.jpg", "alt", "", 1, "rounded-circle"], [1, "card-social"], ["href", "javascript:void(0)"], [1, "fa", "fa-facebook"], [1, "fa", "fa-google-plus"], [1, "fa", "fa-twitter"], [1, "fa", "fa-instagram"], [1, "fa", "fa-rss"], [1, "text-center", "profile-details"], [1, "card-footer", "row"], [1, "col-4", "col-sm-4"], [1, "card", "testimonial", "text-center"], [3, "options"], [4, "ngFor", "ngForOf"], [1, "card", "xl-none"], [1, "ecommerce-widget", "card-body"], [1, "total-num", "counter"], [1, "text-md-end"], [1, "product-stts", "font-primary", "ms-2"], [1, "icon-angle-up", "f-12", "ms-1"], [1, "icon-angle-down", "f-12", "me-1"], [1, "progress", "lg-progress-bar"], ["role", "progressbar", "aria-valuenow", "25", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-primary", 2, "width", "70%"], ["carouselSlide", "", "class", "item", "id", "data.id"], [1, "icon-quote-left"], ["alt", "", 1, "img-80", 3, "src"]],
    template: function GeneralComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "app-feather-icons", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 8)(9, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Earnings");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "h4", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "6659");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 2)(15, "div", 3)(16, "div", 12)(17, "div", 5)(18, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "app-feather-icons", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 8)(21, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "h4", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "9856");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 2)(27, "div", 3)(28, "div", 4)(29, "div", 5)(30, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "app-feather-icons", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 8)(33, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Messages");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "h4", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "893");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 2)(39, "div", 3)(40, "div", 4)(41, "div", 5)(42, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "app-feather-icons", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 8)(45, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "New User");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "h4", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "45631");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](49, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 16)(51, "div", 17)(52, "div", 1)(53, "div", 18)(54, "div", 19)(55, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "68%");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](57, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "div", 22)(59, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "New");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "h4", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "6982");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](64, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "div", 27)(66, "div", 28)(67, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "12%");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](69, "i", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "div", 22)(71, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, "Pending");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "h4", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, "783");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](76, "i", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "div", 18)(78, "div", 19)(79, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80, "68%");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](81, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "div", 32)(83, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](84, "Done");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "h4", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](86, "3674");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](88, "i", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "div", 27)(90, "div", 28)(91, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](92, "68%");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](93, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "div", 32)(95, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](96, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "h4", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](98, "69");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](100, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "div", 16)(102, "div", 35)(103, "div", 1)(104, "div", 18)(105, "div", 19)(106, "div", 36)(107, "h6", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](108, "Sale");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "h4", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](110, "Today");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](112, "i", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](113, "div", 39)(114, "h5", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](115, "$");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](116, "span", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](117, "25698");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](118, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](119, "-$2658(36%)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](120, "div", 27)(121, "div", 28)(122, "div", 36)(123, "h6", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](124, "Sale");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "h4", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](126, "Month");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](127, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](128, "i", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](129, "div", 42)(130, "h5", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](131, "$");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](132, "span", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](133, "6954");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](134, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](135, "+$369(15%)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](136, "div", 18)(137, "div", 19)(138, "div", 36)(139, "h6", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](140, "Sale");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](141, "h4", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](142, "Week");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](143, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](144, "i", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](145, "div", 39)(146, "h5", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](147, "$");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](148, "span", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](149, "63147");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](150, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](151, "+$69(65%)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](152, "div", 27)(153, "div", 28)(154, "div", 36)(155, "h6", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](156, "Sale");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](157, "h4", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](158, "Year");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](159, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](160, "i", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](161, "div", 42)(162, "h5", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](163, "$");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](164, "span", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](165, "963198");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](166, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](167, "+$3654(90%)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](168, "div", 16)(169, "div", 44)(170, "div", 45)(171, "div", 1)(172, "div", 46)(173, "div", 47)(174, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](175, "24");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](176, "div", 48)(177, "span", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](178, "March");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](179, "span", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](180, "2018");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](181, "p", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](182, "There is no minimum donation, any sum is appreciated");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](183, "div", 46)(184, "div", 52)(185, "div", 53)(186, "ngb-datepicker", 54, 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function GeneralComponent_Template_ngb_datepicker_ngModelChange_186_listener($event) {
          return ctx.model = $event;
        })("navigate", function GeneralComponent_Template_ngb_datepicker_navigate_186_listener($event) {
          return ctx.date = $event.next;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](188, "div", 56)(189, "div", 44)(190, "div", 57)(191, "div", 58)(192, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](193, "svg", 60)(194, "clippath", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](195, "path", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](196, "clippath", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](197, "path", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](198, "g", 65)(199, "g", 66)(200, "g", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](201, "path", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](202, "g", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](203, "path", 70)(204, "path", 71)(205, "path", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](206, "g", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](207, "path", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](208, "div", 75)(209, "h4", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](210, "25\u00B0C");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](211, "p", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](212, "Newyork");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](213, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](214, "svg", 78)(215, "clippath", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](216, "path", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](217, "clippath", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](218, "path", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](219, "g", 81)(220, "g", 82)(221, "g", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](222, "path", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](223, "g", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](224, "path", 85)(225, "path", 86)(226, "path", 87)(227, "path", 85)(228, "path", 86)(229, "path", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](230, "g", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](231, "path", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](232, "div", 75)(233, "h4", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](234, "95\u00B0F");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](235, "p", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](236, "Peris");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](237, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](238, "svg", 89)(239, "g", 90)(240, "g", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](241, "path", 91)(242, "path", 92)(243, "path", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](244, "g", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](245, "path", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](246, "div", 75)(247, "h4", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](248, "50\u00B0C");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](249, "p", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](250, "India");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](251, "div", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](252, "svg", 97)(253, "g", 98)(254, "g", 99)(255, "g", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](256, "circle", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](257, "g", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](258, "circle", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](259, "g", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](260, "circle", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](261, "g", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](262, "circle", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](263, "g", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](264, "circle", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](265, "g", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](266, "circle", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](267, "g", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](268, "path", 107)(269, "path", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](270, "div", 109)(271, "div", 1)(272, "div", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](273, "app-feather-icons", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](274, "div", 110)(275, "div", 111)(276, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](277, "India, Surat");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](278, "h4", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](279, "36\u00B0F");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](280, "div", 56)(281, "div", 44)(282, "div", 113)(283, "div", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](284, "svg", 115)(285, "clippath", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](286, "path", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](287, "clippath", 117);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](288, "path", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](289, "g", 118)(290, "g", 66)(291, "g", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](292, "path", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](293, "g", 119);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](294, "polygon", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](295, "g", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](296, "path", 121);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](297, "div")(298, "ul", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](299, "li", 123)(300, "li", 124)(301, "li", 125);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](302, "div", 126);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](303);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](304, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](305, "div")(306, "p", 127);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](307, "kolkata, India");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](308, "div", 128)(309, "div", 129)(310, "div", 58)(311, "div", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](312, "i", 131);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](313, "h5", 132);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](314, "Facebook");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](315, "div", 1)(316, "div", 133)(317, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](318, "Post");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](319, "h4", 134);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](320, "6589");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](321, "div", 135)(322, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](323, "Like");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](324, "h4", 134);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](325, "75269");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](326, "div", 128)(327, "div", 129)(328, "div", 58)(329, "div", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](330, "i", 136);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](331, "h5", 132);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](332, "Twitter");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](333, "div", 1)(334, "div", 133)(335, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](336, "Post");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](337, "h4", 134);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](338, "6589");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](339, "div", 135)(340, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](341, "Follower");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](342, "h4", 134);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](343, "75269");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](344, "div", 128)(345, "div", 129)(346, "div", 58)(347, "div", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](348, "i", 137);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](349, "h5", 132);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](350, "linkedin");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](351, "div", 1)(352, "div", 133)(353, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](354, "Post");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](355, "h4", 134);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](356, "1234");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](357, "div", 135)(358, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](359, "linkedin");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](360, "h4", 134);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](361, "4369");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](362, "div", 128)(363, "div", 129)(364, "div", 58)(365, "div", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](366, "i", 138);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](367, "h5", 132);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](368, "Google +");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](369, "div", 1)(370, "div", 133)(371, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](372, "Post");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](373, "h4", 134);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](374, "369");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](375, "div", 135)(376, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](377, "Follower");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](378, "h4", 134);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](379, "3458");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](380, "div", 139)(381, "div", 140)(382, "div", 141)(383, "div", 142);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](384, "img", 143);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](385, "div", 144)(386, "div")(387, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](388, "Daily ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](389, "h4")(390, "span", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](391, "36");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](392, "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](393, "div")(394, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](395, "Month ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](396, "h4")(397, "span", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](398, "96");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](399, "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](400, "div")(401, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](402, "Week ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](403, "h4")(404, "span", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](405, "46");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](406, "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](407, "div", 139)(408, "div", 140)(409, "div", 141)(410, "div", 142);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](411, "img", 145);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](412, "div", 144)(413, "div")(414, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](415, "Daily ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](416, "h4")(417, "span", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](418, "36");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](419, "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](420, "div")(421, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](422, "Month ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](423, "h4")(424, "span", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](425, "96");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](426, "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](427, "div")(428, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](429, "Week ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](430, "h4")(431, "span", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](432, "46");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](433, "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](434, "div", 139)(435, "div", 140)(436, "div", 141)(437, "div", 142);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](438, "img", 146);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](439, "div", 144)(440, "div")(441, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](442, "Daily ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](443, "h4")(444, "span", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](445, "36");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](446, "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](447, "div")(448, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](449, "Month ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](450, "h4")(451, "span", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](452, "96");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](453, "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](454, "div")(455, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](456, "Week ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](457, "h4")(458, "span", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](459, "46");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](460, "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](461, "div", 16)(462, "div", 44)(463, "div", 147)(464, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](465, "PRODUCTS CART");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](466, "div", 58)(467, "div", 148)(468, "table", 149)(469, "thead")(470, "tr")(471, "th", 150);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](472, "Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](473, "th", 150);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](474, "Quantity");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](475, "th", 150);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](476, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](477, "th", 150);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](478, "Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](479, "tbody")(480, "tr")(481, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](482, "Simply dummy text of the printing");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](483, "td", 151);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](484, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](485, "td", 152);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](486, "Pending");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](487, "td", 151);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](488, "$6523");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](489, "tr")(490, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](491, "Long established");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](492, "td", 151);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](493, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](494, "td", 153);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](495, "Cancle");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](496, "td", 151);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](497, "$6523");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](498, "tr")(499, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](500, "sometimes by accident");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](501, "td", 151);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](502, "10");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](503, "td", 153);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](504, "Cancle");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](505, "td", 151);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](506, "$6523");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](507, "tr")(508, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](509, "Classical Latin literature");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](510, "td", 151);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](511, "9");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](512, "td", 152);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](513, "Return");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](514, "td", 151);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](515, "$6523");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](516, "tr")(517, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](518, "keep the site on the Internet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](519, "td", 151);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](520, "8");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](521, "td", 152);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](522, "Pending");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](523, "td", 151);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](524, "$6523");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](525, "tr")(526, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](527, "Molestiae consequatur");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](528, "td", 151);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](529, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](530, "td", 153);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](531, "Cancle");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](532, "td", 151);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](533, "$6523");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](534, "tr")(535, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](536, "Pain can procure");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](537, "td", 151);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](538, "8");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](539, "td", 152);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](540, "Return");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](541, "td", 151);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](542, "$6523");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](543, "div", 16)(544, "div", 44)(545, "div", 147)(546, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](547, "EMPLOYEE STATUS");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](548, "div", 58)(549, "div", 148)(550, "table", 149)(551, "thead")(552, "tr")(553, "th", 150);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](554, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](555, "th", 150);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](556, "Designation");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](557, "th", 150);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](558, "Skill Level");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](559, "th", 150);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](560, "Experience");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](561, "tbody")(562, "tr")(563, "td", 154)(564, "div", 155);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](565, "img", 156);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](566, "div", 157)(567, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](568, "John Deo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](569, "span", 158);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](570, "(14+ Online)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](571, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](572, "Designer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](573, "td")(574, "div", 159)(575, "div", 160);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](576, "div", 161);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](577, "td", 151);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](578, "2 Year");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](579, "tr")(580, "td", 154)(581, "div", 155);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](582, "img", 162);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](583, "div", 157)(584, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](585, "Holio Mako ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](586, "span", 158);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](587, "(250+ Online)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](588, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](589, "Developer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](590, "td")(591, "div", 159)(592, "div", 160);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](593, "div", 163);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](594, "td", 151);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](595, "3 Year");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](596, "tr")(597, "td", 154)(598, "div", 155);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](599, "img", 164);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](600, "div", 157)(601, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](602, "Mohsib lara");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](603, "span", 158);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](604, "(99+ Online)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](605, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](606, "Tester");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](607, "td")(608, "div", 159)(609, "div", 160);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](610, "div", 165);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](611, "td", 151);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](612, "5 Month");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](613, "tr")(614, "td", 154)(615, "div", 155);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](616, "img", 166);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](617, "div", 157)(618, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](619, "Hileri Soli ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](620, "span", 158);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](621, "(150+ Online)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](622, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](623, "Designer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](624, "td")(625, "div", 159)(626, "div", 160);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](627, "div", 167);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](628, "td", 151);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](629, "3 Month");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](630, "tr")(631, "td", 154)(632, "div", 155);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](633, "img", 168);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](634, "div", 157)(635, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](636, "Pusiz bia ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](637, "span", 158);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](638, "(14+ Online)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](639, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](640, "Designer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](641, "td")(642, "div", 159)(643, "div", 160);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](644, "div", 169);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](645, "td", 151);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](646, "5 Year");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](647, "div", 170)(648, "div", 44)(649, "div", 171);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](650, "div", 172);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](651, "div", 173)(652, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](653, "25");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](654, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](655, "APRIL");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](656, "div", 174)(657, "h6", 175);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](658, "I must explain to you how all this mistaken idea truth");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](659, "p", 176);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](660, "Denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth,Letraset sheets containing Lorem Ipsum passages, and more recently.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](661, "div", 177)(662, "div", 44)(663, "div", 147)(664, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](665, "Contact Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](666, "div", 178)(667, "form", 179)(668, "div", 180);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](669, "i", 181);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](670, "div", 182)(671, "label", 183);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](672, "Your Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](673, "input", 184);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](674, "div", 182)(675, "label", 185);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](676, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](677, "input", 186);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](678, "div", 182)(679, "label", 185);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](680, "Message");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](681, "textarea", 187);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](682, "div", 188)(683, "button", 189);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](684, "SEND IT");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](685, "div", 190)(686, "div")(687, "div", 44)(688, "div", 147)(689, "h5", 191);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](690, "Recent Activity");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](691, "div", 58)(692, "ul", 192)(693, "li", 59)(694, "span", 193);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](695, "E");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](696, "div", 194)(697, "h6", 195);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](698, "Established fact that a reader will be distracted ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](699, "ul", 196)(700, "li", 151);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](701, "25 July 2017");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](702, "li", 151);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](703, "20 hours ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](704, "li", 59)(705, "span", 197);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](706, "A");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](707, "div", 194)(708, "h6", 195);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](709, "Any desktop publishing packages and web page editors.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](710, "ul", 196)(711, "li", 151);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](712, "25 July 2017");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](713, "li", 151);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](714, "20 hours ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](715, "li", 59)(716, "span", 193);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](717, "T");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](718, "div", 194)(719, "h6", 195);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](720, "There isn't anything embarrassing hidden.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](721, "ul", 196)(722, "li", 151);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](723, "25 July 2017");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](724, "li", 151);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](725, "20 hours ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](726, "li", 59)(727, "span", 197);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](728, "C");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](729, "div", 194)(730, "h6", 195);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](731, "Contrary to popular belief, Lorem Ipsum is not simply. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](732, "ul", 196)(733, "li", 151);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](734, "25 July 2017");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](735, "li", 151);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](736, "20 hours ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](737, "li", 59)(738, "span", 198);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](739, "H");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](740, "div", 194)(741, "h6", 195);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](742, "H-Code - A premium portfolio template from ThemeZaa ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](743, "ul", 196)(744, "li", 151);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](745, "25 July 2017");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](746, "li", 151);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](747, "20 hours ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](748, "li", 59)(749, "div", 194)(750, "ul", 196)(751, "li", 151);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](752, "25 July 2017");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](753, "li", 151);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](754, "20 hours ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](755, "div", 199)(756, "div", 200)(757, "div", 147);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](758, "img", 201);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](759, "div", 202);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](760, "img", 203);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](761, "ul", 204)(762, "li")(763, "a", 205);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](764, "i", 206);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](765, "li")(766, "a", 205);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](767, "i", 207);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](768, "li")(769, "a", 205);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](770, "i", 208);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](771, "li")(772, "a", 205);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](773, "i", 209);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](774, "li")(775, "a", 205);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](776, "i", 210);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](777, "div", 211)(778, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](779, "Mark Jecno");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](780, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](781, "Manager");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](782, "div", 212)(783, "div", 213)(784, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](785, "Follower");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](786, "h3", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](787, "9564");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](788, "div", 213)(789, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](790, "Following");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](791, "h3")(792, "span", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](793, "49");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](794, "K");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](795, "div", 213)(796, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](797, "Total Post");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](798, "h3")(799, "span", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](800, "96");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](801, "M");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](802, "div", 199)(803, "div", 214)(804, "div", 58)(805, "owl-carousel-o", 215);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](806, GeneralComponent_806_Template, 1, 0, null, 216);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](807, "div", 217)(808, "div", 218)(809, "div", 1)(810, "div", 110)(811, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](812, "New Order");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](813, "h3", 219);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](814, "16665");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](815, "div", 110)(816, "div", 220)(817, "ul")(818, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](819, "Profit");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](820, "span", 221);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](821, "8989");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](822, "i", 222);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](823, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](824, "Loss");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](825, "span", 221);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](826, "2560");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](827, "i", 223);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](828, "div", 159)(829, "div", 224);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](830, "div", 225);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", "navigation");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", "box");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", "message-square");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", "users");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](143);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.model);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](87);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", "cloud-drizzle");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](304, 9, ctx.today), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](502);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx.owlcarouselOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.owlcarousel);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbDatepicker, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_4__.CarouselComponent, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_4__.CarouselSlideDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgForm, _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_0__.FeatherIconsComponent, _angular_common__WEBPACK_IMPORTED_MODULE_2__.DatePipe],
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"],
    encapsulation: 2
  });
}

/***/ }),

/***/ 63378:
/*!**************************************************************!*\
  !*** ./src/app/components/widgets/widgets-routing.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WidgetsRoutingModule: () => (/* binding */ WidgetsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _general_general_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./general/general.component */ 50743);
/* harmony import */ var _chart_chart_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chart/chart.component */ 44027);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);





const routes = [{
  path: '',
  children: [{
    path: 'general',
    component: _general_general_component__WEBPACK_IMPORTED_MODULE_0__.GeneralComponent,
    data: {
      title: "General",
      breadcrumb: "General"
    }
  }, {
    path: 'chart',
    component: _chart_chart_component__WEBPACK_IMPORTED_MODULE_1__.ChartComponent,
    data: {
      title: "Chart",
      breadcrumb: "Chart"
    }
  }]
}];
class WidgetsRoutingModule {
  static #_ = this.ɵfac = function WidgetsRoutingModule_Factory(t) {
    return new (t || WidgetsRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: WidgetsRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](WidgetsRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
})();

/***/ }),

/***/ 60666:
/*!******************************************************!*\
  !*** ./src/app/components/widgets/widgets.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WidgetsModule: () => (/* binding */ WidgetsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _widgets_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./widgets-routing.module */ 63378);
/* harmony import */ var _general_general_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./general/general.component */ 50743);
/* harmony import */ var _chart_chart_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chart/chart.component */ 44027);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 76101);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-owl-carousel-o */ 99436);
/* harmony import */ var ng_chartist__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-chartist */ 83568);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng2-charts */ 46673);
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @swimlane/ngx-charts */ 48278);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/shared.module */ 56208);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 61699);












class WidgetsModule {
  static #_ = this.ɵfac = function WidgetsModule_Factory(t) {
    return new (t || WidgetsModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
    type: WidgetsModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _widgets_routing_module__WEBPACK_IMPORTED_MODULE_0__.WidgetsRoutingModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbModule, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_7__.CarouselModule, ng_chartist__WEBPACK_IMPORTED_MODULE_8__.ChartistModule, ng2_charts__WEBPACK_IMPORTED_MODULE_9__.NgChartsModule, _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_10__.NgxChartsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](WidgetsModule, {
    declarations: [_general_general_component__WEBPACK_IMPORTED_MODULE_1__.GeneralComponent, _chart_chart_component__WEBPACK_IMPORTED_MODULE_2__.ChartComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _widgets_routing_module__WEBPACK_IMPORTED_MODULE_0__.WidgetsRoutingModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbModule, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_7__.CarouselModule, ng_chartist__WEBPACK_IMPORTED_MODULE_8__.ChartistModule, ng2_charts__WEBPACK_IMPORTED_MODULE_9__.NgChartsModule, _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_10__.NgxChartsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule]
  });
})();

/***/ }),

/***/ 87902:
/*!***********************************************************!*\
  !*** ./src/app/shared/data/widgets-chart/chart-widget.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WidgetBarChart1: () => (/* binding */ WidgetBarChart1),
/* harmony export */   WidgetBarChart2: () => (/* binding */ WidgetBarChart2),
/* harmony export */   chart1: () => (/* binding */ chart1),
/* harmony export */   chart2: () => (/* binding */ chart2),
/* harmony export */   chart3: () => (/* binding */ chart3),
/* harmony export */   dailydoughnutChartGradient: () => (/* binding */ dailydoughnutChartGradient),
/* harmony export */   dailydoughnutChartShowLabels: () => (/* binding */ dailydoughnutChartShowLabels),
/* harmony export */   dailydoughnutChartcolorScheme: () => (/* binding */ dailydoughnutChartcolorScheme),
/* harmony export */   dailydoughnutData: () => (/* binding */ dailydoughnutData),
/* harmony export */   financeWidget: () => (/* binding */ financeWidget),
/* harmony export */   liveProductChart: () => (/* binding */ liveProductChart),
/* harmony export */   monthlyChart: () => (/* binding */ monthlyChart),
/* harmony export */   monthlydoughnutChartGradient: () => (/* binding */ monthlydoughnutChartGradient),
/* harmony export */   monthlydoughnutChartShowLabels: () => (/* binding */ monthlydoughnutChartShowLabels),
/* harmony export */   monthlydoughnutChartcolorScheme: () => (/* binding */ monthlydoughnutChartcolorScheme),
/* harmony export */   monthlydoughnutData: () => (/* binding */ monthlydoughnutData),
/* harmony export */   orderStatusWidget: () => (/* binding */ orderStatusWidget),
/* harmony export */   skillWidget: () => (/* binding */ skillWidget),
/* harmony export */   turnOverChart: () => (/* binding */ turnOverChart),
/* harmony export */   usesChart: () => (/* binding */ usesChart)
/* harmony export */ });
/* harmony import */ var chartist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chartist */ 65061);

var primary = localStorage.getItem('primary_color') || '#4466f2';
var secondary = localStorage.getItem('secondary_color') || '#1ea6ec';
//Line Chart
var chart1 = {
  type: 'Line',
  data: {
    series: [[25, 50, 30, 40, 60, 80, 50, 10, 50, 13, 0, 10, 30, 40, 10, 15, 20]]
  },
  options: {
    axisX: {
      showGrid: false,
      showLabel: false,
      offset: 0
    },
    axisY: {
      showGrid: false,
      low: 0,
      showLabel: false,
      offset: 0
    },
    chartPadding: {
      right: 0,
      left: 0,
      bottom: 0,
      top: 0
    },
    lineSmooth: chartist__WEBPACK_IMPORTED_MODULE_0__.Interpolation.cardinal({
      tension: 0
    }),
    showArea: true,
    fullWidth: true,
    height: 100,
    showPoint: false
  }
};
var chart2 = {
  type: 'Line',
  data: {
    series: [[25, 35, 70, 100, 90, 50, 60, 80, 40, 50, 60, 40, 80, 70, 60, 50, 100]]
  },
  options: {
    axisX: {
      showGrid: false,
      showLabel: false,
      offset: 0
    },
    axisY: {
      showGrid: false,
      low: 0,
      showLabel: false,
      offset: 0
    },
    chartPadding: {
      right: 0,
      left: 0,
      bottom: 0,
      top: 0
    },
    lineSmooth: chartist__WEBPACK_IMPORTED_MODULE_0__.Interpolation.cardinal({
      tension: 0
    }),
    showArea: true,
    fullWidth: true,
    height: 100,
    showPoint: false
  }
};
var chart3 = {
  type: 'Line',
  data: {
    series: [[50, 100, 80, 60, 50, 60, 40, 80, 40, 50, 60, 40, 60, 70, 40, 50, 20]]
  },
  options: {
    axisX: {
      showGrid: false,
      showLabel: false,
      offset: 0
    },
    axisY: {
      showGrid: false,
      low: 0,
      showLabel: false,
      offset: 0
    },
    chartPadding: {
      right: 0,
      left: 0,
      bottom: 0,
      top: 0
    },
    lineSmooth: chartist__WEBPACK_IMPORTED_MODULE_0__.Interpolation.cardinal({
      tension: 0
    }),
    showArea: true,
    fullWidth: true,
    height: 100,
    showPoint: false
  }
};
var WidgetBarChart1 = {
  type: 'Bar',
  data: {
    series: [[80.00, 80.00, 60.00, 20.00, 70.00, 0, 80.00, 60.00, 110.00, 20.00, 60.00, 100, 70, 30]]
  },
  options: {
    labels: [80.00, 80.00, 60.00, 20.00, 70.00, 0, 80.00, 60.00, 110.00, 20.00, 60.00, 100, 70, 30],
    legend: {
      labels: {
        fontColor: 'white'
      }
    },
    axisX: {
      showGrid: false,
      showLabel: true,
      offset: 0
    },
    axisY: {
      showGrid: false,
      low: 0,
      showLabel: true,
      offset: 0
    },
    tooltips: {
      disabled: true
    },
    toolTipContent: "<a href = {name}> {label}</a><hr/>Views: {y}",
    chartPadding: {
      bottom: 0,
      top: 0,
      left: 0
    },
    responsive: true,
    height: 200
  }
};
var WidgetBarChart2 = {
  type: 'Bar',
  data: {
    series: [[60.00, 110.00, 20.00, 60.00, 100.00, 70, 30.00, 80.00, 80.00, 60.00, 20.00, 70, 0, 80]]
  },
  options: {
    axisX: {
      showGrid: false,
      showLabel: false,
      offset: 0
    },
    axisY: {
      showGrid: false,
      low: 0,
      showLabel: false,
      offset: 0
    },
    chartPadding: {
      bottom: 0,
      top: 0,
      left: 0
    },
    showArea: true,
    fullWidth: true,
    height: 200
  }
};
var liveProductChart = {
  type: 'Line',
  data: {
    labels: ['1', '2', '3', '4', '5', '6'],
    series: [[1, 5, 2, 5, 4, 3, 6]]
  },
  options: {
    low: 0,
    showArea: false,
    showPoint: false,
    fullWidth: true,
    height: 300
  }
  // events: {
  //   draw: (data) => {
  //     if (data.type === 'line' || data.type === 'area') {
  //       data.element.animate({
  //         d: {
  //           begin: 2000 * data.index,
  //           dur: 2000,
  //           from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
  //           to: data.path.clone().stringify(),
  //           easing: Chartist.Svg.Easing.easeOutQuint
  //         }
  //       });
  //     }
  //   }
  // }
};

var turnOverChart = {
  type: 'Bar',
  data: {
    labels: ['1', '2', '3', '4', '5', '6'],
    series: [[1.9, 4.4, 1.5, 5, 4.4, 3.4], [6.4, 5.7, 7, 4, 5.5, 3.5], [5, 2.3, 3.6, 6, 3.6, 2.3]]
  },
  options: {
    height: 300
  }
};
var monthlyChart = {
  type: 'Bar',
  data: {
    labels: ['M1', 'M2', 'M3', 'M4', 'M5', 'M6', 'M7', 'M8', 'M9', 'M10'],
    series: [[100, 200, 300, 400, 500, 600, 700, 800, 900, 1000], [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000], [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000]]
  },
  options: {
    stackBars: true,
    axisY: {
      labelInterpolationFnc: function (value) {
        return value / 1000 + 'k';
      }
    },
    height: 300
  }
};
var usesChart = {
  type: 'Line',
  data: {
    labels: ['1', '2', '3', '4', '5', '6'],
    series: [[1, 5, 2, 5, 4, 3], [2, 3, 4, 8, 1, 2], [5, 4, 3, 2, 1, 0.5]]
  },
  options: {
    low: 0,
    showArea: true,
    showPoint: false,
    fullWidth: true,
    height: 300
  }
};
var financeWidget = {
  type: 'Line',
  data: {
    series: [[5, 30, 27, 35, 30, 50, 70], [0, 5, 10, 7, 25, 20, 30]]
  },
  options: {
    axisX: {
      showGrid: false,
      showLabel: false,
      offset: 0
    },
    axisY: {
      showGrid: false,
      low: 0,
      showLabel: false,
      offset: 0
    },
    chartPadding: {
      right: 0,
      left: 0,
      bottom: 0,
      top: 0
    },
    lineSmooth: chartist__WEBPACK_IMPORTED_MODULE_0__.Interpolation.cardinal({
      tension: 0
    }),
    showArea: true,
    fullWidth: true,
    height: 200,
    showPoint: false
  }
};
var orderStatusWidget = {
  type: 'Line',
  data: {
    series: [[null], [40, 15, 25, 20, 15, 20, 10, 25, 35, 13, 35, 10, 30, 20, 10, 15, 20]]
  },
  options: {
    axisX: {
      showGrid: false,
      showLabel: false,
      offset: 0
    },
    axisY: {
      showGrid: false,
      low: 0,
      showLabel: false,
      offset: 0
    },
    chartPadding: {
      right: 0,
      left: 0,
      bottom: 0,
      top: 0
    },
    lineSmooth: chartist__WEBPACK_IMPORTED_MODULE_0__.Interpolation.cardinal({
      tension: 0
    }),
    showArea: true,
    fullWidth: true,
    height: 200,
    showPoint: false
  }
};
var skillWidget = {
  type: 'Line',
  data: {
    series: [[null], [null], [5, 10, 20, 14, 17, 21, 20, 10, 4, 13, 0, 10, 30, 40, 10, 15, 20]]
  },
  options: {
    axisX: {
      showGrid: false,
      showLabel: false,
      offset: 0
    },
    axisY: {
      showGrid: false,
      low: 0,
      showLabel: false,
      offset: 0
    },
    chartPadding: {
      right: 0,
      left: 0,
      bottom: 0,
      top: 0
    },
    lineSmooth: chartist__WEBPACK_IMPORTED_MODULE_0__.Interpolation.cardinal({
      tension: 0
    }),
    showArea: true,
    fullWidth: true,
    height: 200,
    showPoint: false
  }
};
var monthlydoughnutData = [{
  value: 500,
  name: "Safari"
}, {
  value: 600,
  name: "Mozila Firefox"
}, {
  value: 400,
  name: "Google Crome"
}, {
  value: 700,
  name: "Opera Browser"
}];
//doughnut-Chart
//Monthly donught chart Options
var monthlydoughnutChartShowLabels = false;
var monthlydoughnutChartGradient = true;
var monthlydoughnutChartcolorScheme = {
  domain: [primary, secondary, primary, secondary]
};
var dailydoughnutData = [{
  value: 448,
  name: "India"
}, {
  value: 340,
  name: "USA"
}, {
  value: 270,
  name: "Canada"
}, {
  value: 359,
  name: "UK"
}];
//Monthly donught chart Options
var dailydoughnutChartShowLabels = false;
var dailydoughnutChartGradient = true;
var dailydoughnutChartcolorScheme = {
  domain: [primary, secondary, primary, secondary]
};

/***/ })

}]);
//# sourceMappingURL=src_app_components_widgets_widgets_module_ts.416c05273572d80e.js.map