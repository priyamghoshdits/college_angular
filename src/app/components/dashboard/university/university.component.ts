import { Component, OnInit, ViewChild, ViewEncapsulation } from "@angular/core";
import {NgbDateStruct, NgbDate, NgbCalendar, NgbDatepickerConfig, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import { ChartComponent, ChartOptions } from "chart.js";
import * as chartData from "./../../../shared/data/dashboard/university";
declare var require: any;
import * as chart from "../../../shared/data/chart/chartist";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {DatePipe} from "@angular/common";

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
  universityFormCalender: FormGroup;
  public date: any;
  constructor(private modalService: NgbModal,public datepipe: DatePipe) {
    this.universityFormCalender = new FormGroup({
      id: new FormControl(null),
      event_title: new FormControl(null, [Validators.required]),
      description: new FormControl(null),
      event_from: new FormControl(null),
      event_to: new FormControl(null),
      event_type: new FormControl(null),
    });
  }

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
}
