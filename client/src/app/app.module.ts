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
import { HistoryMudcrabComponent } from './history-mudcrab/history-mudcrab.component';
import { HistoryPaddyComponent } from './history-paddy/history-paddy.component';
import { HistoryTableComponent } from './history-table/history-table.component';
import { AverageReadingPaddyComponent } from './components/average-reading-paddy/average-reading-paddy.component';
import { CurrentReadingPaddyComponent } from './components/current-reading-paddy/current-reading-paddy.component';
import { AverageReadingMudcrabComponent } from './components/average-reading-mudcrab/average-reading-mudcrab.component';
import { CurrentReadingMudcrabComponent } from './components/current-reading-mudcrab/current-reading-mudcrab.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardMudcrabComponent,
    LineChartMudcrabComponent,
    NavigationBarComponent,
    DashboardPaddyComponent,
    LineChartPaddyComponent,
    HistoryTableComponent,
    HistoryMudcrabComponent,
    HistoryPaddyComponent,
    AverageReadingPaddyComponent,
    CurrentReadingPaddyComponent,
    AverageReadingMudcrabComponent,
    CurrentReadingMudcrabComponent,
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
