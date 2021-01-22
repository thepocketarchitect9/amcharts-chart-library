import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SemiCirclePieChartComponent } from './components/charts/semi-circle-pie-chart/semi-circle-pie-chart.component';
import { HeaderComponent } from './components/header/header.component';
import { SidemenuComponent } from './components/sidemenu/sidemenu.component';
import { Page404Component } from './components/page404/page404.component';
import { ChartsComponent } from './components/charts/charts.component';
import { GaugeComponent } from './components/charts/gauge/gauge.component';
import { TwoLevelPieChartComponent } from './components/charts/two-level-pie-chart/two-level-pie-chart.component';
import { StackedWaterfallChartComponent } from './components/charts/stacked-waterfall-chart/stacked-waterfall-chart.component';
import { PictorialStackedChartComponent } from './components/charts/pictorial-stacked-chart/pictorial-stacked-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    SemiCirclePieChartComponent,
    HeaderComponent,
    SidemenuComponent,
    Page404Component,
    ChartsComponent,
    GaugeComponent,
    TwoLevelPieChartComponent,
    StackedWaterfallChartComponent,
    PictorialStackedChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
