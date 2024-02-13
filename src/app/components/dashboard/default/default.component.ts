import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import * as chartData from "./../../../shared/data/dashboard/default";
import {RolesAndPermissionService} from "../../../services/roles-and-permission.service";
declare var require: any;
// var Knob = require('knob')// browserify require

var primary = localStorage.getItem("primary_color") || "#4466f2";
var secondary = localStorage.getItem("secondary_color") || "#1ea6ec";

@Component({
  selector: "app-default",
  templateUrl: "./default.component.html",
  styleUrls: ["./default.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class DefaultComponent implements OnInit {
  constructor(private roleAndPermission: RolesAndPermissionService) {}

  ngOnInit() {
  }

  // Chart Data
  public chart1 = chartData.chartBox1;
  public chart2 = chartData.chartBox2;
  public chart3 = chartData.chartBox3;
  public chart4 = chartData.chartProduction;
  public chart5 = chartData.chartCalculation;

  TotalProfit: any = {
    series: [70],
    chart: {
      height: 350,
      type: "radialBar",
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: "60%",
        },
      },
    },
    stroke: {
      lineCap: 'round'
    },
    colors: ['#4466f2'],
    labels: ["TOTAL PROFIT"],
  };
}
