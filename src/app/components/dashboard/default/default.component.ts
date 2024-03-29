import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import * as chartData from "./../../../shared/data/dashboard/default";
import {RolesAndPermissionService} from "../../../services/roles-and-permission.service";
import {Keepalive} from "@ng-idle/keepalive";
import {DEFAULT_INTERRUPTSOURCES, Idle} from "@ng-idle/core";
import {AuthService} from "../../../services/auth.service";
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
  attendanceYear = 0;
  attendanceMonth = 0;
  teacher = 0;
  idleState = 'Not started.';
  timedOut = false;
  // @ts-ignore
  lastPing?: Date = null;
  user : { id, first_name, middle_name, last_name, user_type_id, user_type_name,email, image, token};
  // constructor(private roleAndPermission: RolesAndPermissionService) {}
  constructor(private roleAndPermission: RolesAndPermissionService, private idle: Idle
              , private keepalive: Keepalive, private authService: AuthService) {

    this.authService.getLoggedInUserAttendance().subscribe((response: any) => {
      if(response.success == 1){
        this.attendanceYear = response.year;
        this.attendanceMonth = response.month;
        this.teacher = response.teacher;
      }
    })

    // @ts-ignore
    this.user = JSON.parse(localStorage.getItem('user'));
    // sets an idle timeout of 5 seconds, for testing purposes.
    idle.setIdle(250);
    // sets a timeout period of 5 seconds. after 10 seconds of inactivity, the user will be considered timed out.
    idle.setTimeout(250);
    // sets the default interrupts, in this case, things like clicks, scrolls, touches to the document
    idle.setInterrupts(DEFAULT_INTERRUPTSOURCES);

    idle.onIdleEnd.subscribe(() => this.idleState = 'No longer idle.');
    idle.onTimeout.subscribe(() => {
      this.idleState = 'Timed out!';
      this.timedOut = true;
      this.authService.logout();
    });
    idle.onIdleStart.subscribe(() => this.idleState = 'You\'ve gone idle!');
    idle.onTimeoutWarning.subscribe((countdown) => this.idleState = 'You will time out in ' + countdown + ' seconds!');

    // sets the ping interval to 15 seconds
    keepalive.interval(15);

    keepalive.onPing.subscribe(() => this.lastPing = new Date());

    this.reset();
  }

  reset() {
    this.idle.watch();
    this.idleState = 'Started.';
    this.timedOut = false;
  }
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
