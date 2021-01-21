import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SemiCirclePieChartComponent } from './components/semi-circle-pie-chart/semi-circle-pie-chart.component';
import { HeaderComponent } from './components/header/header.component';
import { SidemenuComponent } from './components/sidemenu/sidemenu.component';
import { Page404Component } from './components/page404/page404.component';

@NgModule({
  declarations: [
    AppComponent,
    SemiCirclePieChartComponent,
    HeaderComponent,
    SidemenuComponent,
    Page404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
