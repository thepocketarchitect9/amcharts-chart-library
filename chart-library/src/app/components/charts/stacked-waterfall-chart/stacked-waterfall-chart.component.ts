import { Component, Inject, NgZone, OnInit, PLATFORM_ID } from '@angular/core';

//Imports for AMCHARTS
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'chart-stacked-waterfall-chart',
  templateUrl: './stacked-waterfall-chart.component.html',
  styleUrls: ['./stacked-waterfall-chart.component.scss']
})
export class StackedWaterfallChartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
