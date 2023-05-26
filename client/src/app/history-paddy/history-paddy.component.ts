import { Component, Input, OnInit } from '@angular/core';
import { Avg_Paddy } from '../models/data.data';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-history-paddy',
  templateUrl: './history-paddy.component.html',
  styleUrls: ['./history-paddy.component.css']
})
export class HistoryPaddyComponent implements OnInit{

  @Input() avgPaddy!:Avg_Paddy[];

  //Create Chart
  
    avg_temperaturePaddy: any;
    avg_moisturePaddy: any;
    avg_waterLevelPaddy: any;
  
    chart_temperaturePaddy: any;
    chart_moisturePaddy: any;
    chart_waterLevelPaddy: any;
    autoRefresh: any;
  
    ngOnInit(): void {

      Chart.register(...registerables)
  
      this.createChart_temperaturePaddy();
      this.createChart_moisturePaddy();
      this.createChart_waterLevelPaddy();
  
      this.autoRefresh = 
        setInterval(() =>{
  
          this.chart_temperaturePaddy.destroy();
          this.chart_moisturePaddy.destroy();
          this.chart_waterLevelPaddy.destroy();
  
          this.createChart_temperaturePaddy();
          this.createChart_moisturePaddy();
          this.createChart_waterLevelPaddy();
        }, 10000)
    }
  
    ngOnDestroy(){
      clearInterval(this.autoRefresh);
    }

  createChart_temperaturePaddy(): void {
    const labels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
    const temperature = this.avgPaddy.map(x=>x.avgTemperature);
  
    this.avg_temperaturePaddy = temperature[1];
  
    this.chart_temperaturePaddy = new Chart("temperaturePaddy", {
      type: 'line',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Temperature (°C)',
            data: temperature,
            borderColor: "blue",
            backgroundColor: "blue",
          },
        ],
      },
      options: {
        responsive: true,
        aspectRatio: 1.5,
        scales: {
          x: {
            grid: {
              color: 'white',
              tickColor: 'white',
            },
            ticks: {
              color: 'white'
            }
          },
          y: {
            grid: {
              color: 'white',
              tickColor: 'white'
            },
            ticks: {
              color: 'white'
            }
          }
        },
        plugins: {
          legend: {
            labels: {
              color: 'white'
            }
          }
        }
      },
    })
  }
  
  createChart_moisturePaddy() {
    const labels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
    const moisture=this.avgPaddy.map(x=>x.avgMoisture);
  
    this.avg_moisturePaddy = moisture[1];
  
    this.chart_moisturePaddy = new Chart("moisturePaddy", {
      type: 'line',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Moisture (%)',
            data: moisture,
            borderColor: "green",
            backgroundColor: "green",
          },
        ]
      },
      options: {
        responsive: true,
        aspectRatio: 1.5,
        scales: {
          x: {
            grid: {
              color: 'white',
              tickColor: 'white',
            },
            ticks: {
              color: 'white'
            }
          },
          y: {
            grid: {
              color: 'white',
              tickColor: 'white'
            },
            ticks: {
              color: 'white'
            }
          }
        },
        plugins: {
          legend: {
            labels: {
              color: 'white'
            }
          }
        }
      }
    })
  }
  
  createChart_waterLevelPaddy() {
    const labels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
    const waterLevel = this.avgPaddy.map(x=>x.avgWaterLevel);
  
    this.avg_waterLevelPaddy = waterLevel[1];
  
    this.chart_waterLevelPaddy = new Chart("waterLevelPaddy", {
      type: 'line',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Water Level (cm)',
            data: waterLevel,
            borderColor: "orange",
            backgroundColor: "orange",
          },
        ]
      },
      options: {
        responsive: true,
        aspectRatio: 1.5,
        scales: {
          x: {
            grid: {
              color: 'white',
              tickColor: 'white',
            },
            ticks: {
              color: 'white'
            }
          },
          y: {
            grid: {
              color: 'white',
              tickColor: 'white'
            },
            ticks: {
              color: 'white'
            }
          }
        },
        plugins: {
          legend: {
            labels: {
              color: 'white'
            }
          }
        }
      }
    })
  }

}
