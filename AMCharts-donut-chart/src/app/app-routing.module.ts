import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import the components for routing that you want
import { SemiCirclePieChartComponent } from './components/semi-circle-pie-chart/semi-circle-pie-chart.component';
import { Page404Component } from './components/page404/page404.component';

// create the routes
const routes: Routes = [
  { path: 'semi-circle-pie-chart', component: SemiCirclePieChartComponent, data: { title: 'Semi Circle Pie Chart' }},
  { path: '**', component: Page404Component, data: { title: '404' }},
  { path: '', redirectTo: 'app-root', pathMatch: 'full' },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { anchorScrolling: 'enabled', enableTracing: false, scrollPositionRestoration: 'top'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
