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

  semiCirclePieChartBtn(){
    this.router.navigate(['/semi-circle-pie-chart']);
  }

}
