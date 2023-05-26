import { Component } from '@angular/core';
import { Avg_MudCrab, Avg_Paddy } from '../models/data.data';
import { DashboardService } from '../services/dashboard.service';

@Component({
  selector: 'app-history-table',
  templateUrl: './history-table.component.html',
  styleUrls: ['./history-table.component.css']
})
export class HistoryTableComponent {

  avg_MudCrab?:Avg_MudCrab[]
  avg_Paddy?:Avg_Paddy[]
  interval:any;

  constructor(private dashboardService:DashboardService){
    this.getData_MudCrab();
    this.getData_Paddy();
  }

  ngOnInit(): void{
    this.interval= setInterval(()=>{
    this.getData_MudCrab();
    this.getData_Paddy();
    }, 10000)
  }

getData_MudCrab(){
  this.dashboardService.getMudCrabAvg().subscribe(res=>{
    this.avg_MudCrab=res.reverse();
  });
  }

getData_Paddy(){
  this.dashboardService.getPaddyAvg().subscribe(res=>{
    this.avg_Paddy=res.reverse();
  })
}  

  ngOnDestroy(){
    clearInterval(this.interval)
  }

}
