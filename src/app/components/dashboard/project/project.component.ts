import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { doughnutData, vertical_stack_chart, multiData, } from '../../../shared/data/dashboard/project';
import * as graphoptions from '../../../shared/data/dashboard/project';
import * as chartData from '../../../shared/data/chart/chartist';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProjectComponent implements OnInit {

  public doughnutData = doughnutData;
  public active1 = 1;
  public vertical_stack_chart = vertical_stack_chart;

  public chart7 = chartData.chart7;

  constructor() {
    Object.assign(this, { doughnutData, vertical_stack_chart, multiData, })
  }

  // doughnut
  public view :any= graphoptions.view;
  public doughnutChartColorScheme :any = graphoptions.doughnutChartcolorScheme;
  public doughnutChartShowLabels :any= graphoptions.doughnutChartShowLabels;
  public doughnutChartGradient :any= graphoptions.doughnutChartGradient;

  //vertical_stack_chart
  public verticalStackChartColorScheme :any = graphoptions.colorScheme;
  public verticalStackChartshowXAxis :any= graphoptions.showXAxis;
  public verticalStackChartshowYAxis :any= graphoptions.showYAxis;
  public verticalStackChartgradient :any= graphoptions.gradient;
  public verticalStackChartshowLegend :any= graphoptions.showLegend;
  public verticalStackChartshowXAxisLabel :any = graphoptions.showXAxisLabel;
  public verticalStackChartshowYAxisLabel :any = graphoptions.showYAxisLabel;

  public chart1 = graphoptions.chart1;
  public chart2 = graphoptions.chart2;
  public chart3 = graphoptions.chart3;
  public chart4 = graphoptions.chart4;
  public chart5 = graphoptions.chart5;
  public chart6 = graphoptions.chart6;

  public pieChart1 = graphoptions.pieChart1;
  public barChartSingle1 = graphoptions.barChartSingle1;
  public barChartSingle2 = graphoptions.barChartSingle2;
  public barChartSingle3 = graphoptions.barChartSingle3;

  ngOnInit() { }

}
