import { Component } from '@angular/core';
import { Data_Paddy } from '../models/data.data';
import { DashboardService } from '../services/dashboard.service';

@Component({
  selector: 'app-dashboard-paddy',
  templateUrl: './dashboard-paddy.component.html',
  styleUrls: ['./dashboard-paddy.component.css']
})
export class DashboardPaddyComponent {

  data?:Data_Paddy[]
  interval:any;

  constructor(private dasboardService:DashboardService){
    this.getData();
  }

  ngOnInit(){
    this.interval= setInterval(()=>{
    this.getData();
    }, 10000)
}

getData(){
  this.dasboardService.getPaddyData().subscribe(res=>{
    this.data=res.reverse();
  });
  }

  ngOnDestroy(){
    clearInterval(this.interval)
  }

}
