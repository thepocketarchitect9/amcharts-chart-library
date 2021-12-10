import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'charts-home',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit {

  constructor( private router: Router ) { }
   ngOnInit() {}

  // Takes you to the Semi Circle Pie Chart
  semiCirclePieChartBtn(){
    this.router.navigate(['/semi-circle-pie-chart']);
  }

  // Takes you to the Stacked Waterfall Chart
  StackedWaterfallChartBtn(){
    this.router.navigate(['/chart-stacked-waterfall-chart']);
  }

  // Takes you to the Stacked Waterfall Line Chart
  StackedColumnChartBtn(){
    this.router.navigate(['/stacked-waterfall-line-chart']);
  }

}
