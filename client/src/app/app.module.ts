import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardMudcrabComponent } from './dashboard-mudcrab/dashboard-mudcrab.component';
import { DashboardPaddyComponent } from './dashboard-paddy/dashboard-paddy.component';
import { LineChartMudcrabComponent } from './line-chart-mudcrab/line-chart-mudcrab.component';
import { LineChartPaddyComponent } from './line-chart-paddy/line-chart-paddy.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { StatisticsMudcrabComponent } from './statistics-mudcrab/statistics-mudcrab.component';
import { StatisticsPaddyComponent } from './statistics-paddy/statistics-paddy.component';
import { StatisticsTableComponent } from './statistics-table/statistics-table.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardMudcrabComponent,
    LineChartMudcrabComponent,
    NavigationBarComponent,
    DashboardPaddyComponent,
    LineChartPaddyComponent,
    StatisticsTableComponent,
    StatisticsMudcrabComponent,
    StatisticsPaddyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }