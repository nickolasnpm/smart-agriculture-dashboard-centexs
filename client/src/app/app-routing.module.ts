import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardMudcrabComponent } from './dashboard-mudcrab/dashboard-mudcrab.component';
import { DashboardPaddyComponent } from './dashboard-paddy/dashboard-paddy.component';
import { HistoryTableComponent } from './history-table/history-table.component';

const routes: Routes = [
  {
    path:'dashboard-mudcrab',
    component:DashboardMudcrabComponent,
  },
  {
    path:'dashboard-paddy',
    component:DashboardPaddyComponent,
  },
  {
    path: 'history-table',
    component:HistoryTableComponent,
  },
  {
    path: '', 
    redirectTo: '/dashboard-mudcrab', 
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
