import * as shape from 'd3-shape';

//BarChart
// options
export var barChartShowXAxis = true;
export var barChartShowYAxis = true;
export var barChartGradient = true;
export var barChartShowLegend = false;
export var barChartShowXAxisLabel = true;
export var barChartXAxisLabel = 'Month';
export var barChartShowYAxisLabel = true;
export var barChartYAxisLabel = '';
export var roundEdges: boolean = true;
export var barChartshowGridLines = false;
export var barChartColorScheme :any = {
    domain: ["#007bff", "#ff9f40", "#ff5370", "#1ea6ec"]
};

//Pie-Chart
//Options
export var pieChartShowLabels = true;
export var pieChartGradient = false;
export var pieChartcolorScheme :any = {
    domain: ["#143fef", "#1ea6ec", "#1a8436", "#0062cc", "#ff850d", "#ff2046"]
};
export var chartOptions = { responsive: true };


//Area Chart
export var areaChartshowXAxis = true;
export var areaChartshowYAxis = true;
export var areaChartgradient = false;
export var areaChartshowXAxisLabel = true;
export var areaChartxAxisLabel = 'Month';
export var areaChartshowYAxisLabel = true;
export var areaChartyAxisLabel = '';
export var areaChartcolorScheme :any= {
    domain: ["#007bff", "#ff9f40", "#ff5370"]
}
export var lineChartcurve = shape.curveStep;
export var lineChartcurve1 = shape.curveLinear;