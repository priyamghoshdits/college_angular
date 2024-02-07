import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ChartConfiguration } from 'chart.js';
import * as chartData from './../../../shared/data/dashboard/crypto';

@Component({
  selector: 'app-bitcoin',
  templateUrl: './bitcoin.component.html',
  styleUrls: ['./bitcoin.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class BitcoinComponent implements OnInit {


  public isBTC = false;
  public isETH = false;
  public isDASH = false;
  public active1 = 1;

  constructor() { }

  ngOnInit() { }

  public chart1 = chartData.chart1;
  public chart2 = chartData.chart2;
  public chart3 = chartData.chart3;
  public chart4 = chartData.chart4;

  public saleChartType = chartData.saleChartType;
  public saleChartLable = chartData.saleChartLabels;
  public saleChartData = chartData.saleChartData;
  public saleChartOption = chartData.saleChartOptions;
  public saleChartLegend = chartData.saleChartLegend;

  //Invest Chart data and options
  public doughnutChartLabels: string[] = [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales' ];
  public doughnutChartDatasets: ChartConfiguration<'doughnut'>['data']['datasets'] = [
      { data: [ 40, 8, 10 ], label: 'Series A' },
    ];

  public doughnutChartOptions: any = {
    responsive: false,
    backgroundColor: ["#4466f2", "#f6f6f6", "#1ea6ec"],
  };

  public dailyChartLabels = chartData.dailyChartLabels;
  public dailyChartData = chartData.dailyChartData;
  public dailyChartColors = chartData.dailyChartColors;
  public dailyChartType = chartData.dailyChartType;
  public dailyChartLegend = chartData.dailyChartLegend;
  public dailyChartOptions = chartData.dailyChartOptions

}
