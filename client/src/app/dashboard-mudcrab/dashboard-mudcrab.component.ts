import { Component } from '@angular/core';
import { DashboardService } from '../services/dashboard.service';
import { Data_MudCrab } from '../models/data.data';

@Component({
  selector: 'app-dashboard-mudcrab',
  templateUrl: './dashboard-mudcrab.component.html',
  styleUrls: ['./dashboard-mudcrab.component.css']
})
export class DashboardMudcrabComponent {
  
  data?:Data_MudCrab[]
  interval:any;

  constructor(private dasboardService:DashboardService){
    this.getData();
  }

  ngOnInit(): void{
    this.interval= setInterval(()=>{
    this.getData();
    }, 10000)
  }

getData(){
  this.dasboardService.getMudCrabData().subscribe(res=>{
    this.data=res.reverse();
  });
  }

  ngOnDestroy(){
    clearInterval(this.interval)
  }
}
