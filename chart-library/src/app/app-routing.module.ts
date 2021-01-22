import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import the components for routing that you want
import { SemiCirclePieChartComponent } from './components/charts/semi-circle-pie-chart/semi-circle-pie-chart.component';
import { StackedWaterfallChartComponent } from './components/charts/stacked-waterfall-chart/stacked-waterfall-chart.component';
import { TwoLevelPieChartComponent } from './components/charts/two-level-pie-chart/two-level-pie-chart.component';
import { GaugeComponent } from './components/charts/gauge/gauge.component';
import { PictorialStackedChartComponent } from './components/charts/pictorial-stacked-chart/pictorial-stacked-chart.component';

import { Page404Component } from './components/page404/page404.component';
import { ChartsComponent } from './components/charts/charts.component';

// create the routes
const routes: Routes = [
  { path: 'semi-circle-pie-chart', component: SemiCirclePieChartComponent, data: { title: 'Semi Circle Pie Chart' }},
  { path: 'chart-gauge', component: GaugeComponent, data: { title: 'Gauge Chart' }},
  { path: 'chart-pictorial-stacked-chart', component: PictorialStackedChartComponent, data: { title: 'Pictorial Stacked Chart' }},
  { path: 'chart-stacked-waterfall-chart', component: StackedWaterfallChartComponent, data: { title: 'Stacked Waterfall Chart' }},
  { path: 'chart-two-level-pie-chart', component: TwoLevelPieChartComponent, data: { title: 'Two Level Pie Chart' }},
  { path: '', pathMatch: 'full', redirectTo: 'charts-home'}, 
  { path: 'charts-home', component: ChartsComponent },
  { path: '**', component: Page404Component, data: { title: '404' }},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { anchorScrolling: 'enabled', enableTracing: false, scrollPositionRestoration: 'top'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
