import { Component, OnInit, ViewChild, ViewEncapsulation } from "@angular/core";
import {NgbDateStruct, NgbDate, NgbCalendar, NgbDatepickerConfig, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import { ChartComponent, ChartOptions } from "chart.js";
import * as chartData from "./../../../shared/data/dashboard/university";
import * as chartDatas from '../../../shared/data/widgets-chart/chart-widget';
declare var require: any;
import * as chart from "../../../shared/data/chart/chartist";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {DatePipe} from "@angular/common";
import { barChartSingle, pieChart, multiData, single } from '../../../shared/data/chart/ngx-chart';
import * as graphoptions from '../../../shared/data/chart/config';
import { monthlydoughnutData, dailydoughnutData } from '../../../shared/data/widgets-chart/chart-widget';
import {DashboardService} from "../../../services/dashboard.service";

// var Knob = require('knob') // browserify require

var primary = localStorage.getItem("primary_color") || "#4466f2";
var secondary = localStorage.getItem("secondary_color") || "#1ea6ec";

@Component({
  selector: "app-university",
  templateUrl: "./university.component.html",
  styleUrls: ["./university.component.scss"],
  encapsulation: ViewEncapsulation.None,
  
})
export class UniversityComponent implements OnInit {
  public barChartsingle = barChartSingle;
  public multiData = multiData;
  universityFormCalender: FormGroup;
  public date: any;
  public dailydoughnutChartColorScheme = chartDatas.dailydoughnutChartcolorScheme;
  public dailydoughnutChartShowLabels = chartDatas.dailydoughnutChartShowLabels;
  public dailydoughnutChartGradient = chartDatas.dailydoughnutChartGradient;

  dailydoughnutData22 = [
    {
      value: 0,
      name: "Male"

    },
    {
      value: 0,
      name: "Female"
    }
  ];

  //variable declaration
  total_books = 0;
  no_of_fees_received = 0;
  total_fees_received = 0;
  total_expense = 0;
  total_student = 0;
  total_teacher = 0;
  total_male_student = 0;
  total_female_student = 0;
  total_study_material = 0;
  total_assignment = 0;
  noticeList: any[] = [];

  constructor(private modalService: NgbModal,public datepipe: DatePipe, public dashboardService: DashboardService) {
    Object.assign(this, { multiData, barChartSingle, pieChart, single });
    Object.assign(this, { monthlydoughnutData, dailydoughnutData })
    this.universityFormCalender = new FormGroup({
      id: new FormControl(null),
      event_title: new FormControl(null, [Validators.required]),
      description: new FormControl(null),
      event_from: new FormControl(null),
      event_to: new FormControl(null),
      event_type: new FormControl(null),
    });
    this.dashboardService.getDashboardData().subscribe((response: any) => {
      this.total_books = response.data.total_books;
      this.no_of_fees_received = response.data.no_of_fees_received;
      this.total_fees_received = response.data.total_fees_received;
      this.total_expense = response.data.total_expense;
      this.total_student = response.data.total_student;
      this.total_teacher = response.data.total_teacher;
      this.total_male_student = response.data.total_male_student;
      this.total_female_student = response.data.total_female_student;
      this.noticeList = response.data.notice;
      this.total_study_material = response.data.studyMaterial;
      this.total_assignment = response.data.total_assignment;
      this.dailydoughnutData22 = [
        {
          value: this.total_male_student,
          name: "Male"

        },
        {
          value: this.total_female_student,
          name: "Female"
        }
      ];
    })
  }



  // public dailydoughnutData = dailydoughnutData;

  ngOnInit() {}

  public chart1 = chartData.chart1;
  public chart2 = chartData.chart2;
  public chart3 = chartData.chart3;
  public chart4 = chartData.chart4;
  public chart5 = chartData.chart5;
  public admissionChartType = chartData.admissionChartType;
  public admissionChartLabels = chartData.admissionChartLabels;
  public admissionChartData = chartData.admissionChartData;
  public admissionChartOptions = chartData.admissionChartOptions;
  public admissionChartColors = chartData.admissionChartColors;
  public admissionChartLegend = chartData.admissionChartLegend;
  public smallColumnChart1 = chart.smallColumnChart1;
  public barChartShowYAxis = graphoptions.barChartShowYAxis;
  public barChartShowXAxis = graphoptions.barChartShowXAxis;
  public barChartGradient = graphoptions.barChartGradient;
  public barChartShowLegend = graphoptions.barChartShowLegend;
  public barChartShowXAxisLabel = graphoptions.barChartShowXAxisLabel;
  public barChartXAxisLabel = graphoptions.barChartXAxisLabel;
  public barChartShowYAxisLabel = graphoptions.barChartShowYAxisLabel;
  public barChartYAxisLabel = graphoptions.barChartYAxisLabel;
  public barChartColorScheme = graphoptions.barChartColorScheme;
  public barChartshowGridLines = graphoptions.barChartshowGridLines;

  public datePick = null;

  public RankerRatio : any= {
    series: [25],
    chart: {
      type: "radialBar",
      offsetY: -20,
      sparkline: {
        enabled: true,
      },
    },
    plotOptions: {
      radialBar: {
        startAngle: -135,
        endAngle: 135,
        track: {
          background: "#e7e7e7",
          // strokeWidth: "60%",
          margin: 5, // margin is in pixels
        },
        hollow: {
          margin: 15,
          size: "60%",
        },
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            offsetY: 64,
            fontSize: "22px",
          },
        },
      },
    },
    grid: {
      padding: {
        top: -10,
      },
    },
    stroke: {
      lineCap: "round",
    },
    labels: ["Average Results"],
  };

  TotalProfit: any = {
    series: [85],
    chart: {
      height: 300,
      type: "radialBar",
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: "80%",
        },
        track: {
          background: "#4466F2",
        },
      },
    },
    stroke: {
      lineCap: "round",
    },
    fill: {
      colors: ["#fff"],
    },
    dataLabels: {
      name: {
        show: true,
        color: "#fff",
        offsetY: -10,
      },
    },

    labels: ["TOTAL Student"],
  };

  openModal(data, content){
    const new_date_create =new Date(data.year + '-'+data.month +'-'+data.day);
    const new_date_create4 =this.datepipe.transform(new_date_create, 'yyyy-MM-dd');
    this.modalService.open(content,{ size: 'xl'});
    this.universityFormCalender.patchValue({event_from: new_date_create4, event_to: new_date_create4});
  }

  public onSelect(e) {  }
}
