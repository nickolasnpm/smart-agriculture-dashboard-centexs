import { Component, Input, OnInit } from '@angular/core';
import { Avg_Paddy } from '../models/data.data';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-statistics-paddy',
  templateUrl: './statistics-paddy.component.html',
  styleUrls: ['./statistics-paddy.component.css']
})
export class StatisticsPaddyComponent implements OnInit{

  @Input() dataP!:Avg_Paddy[];

  //Create Chart
  
    single_temperatureP: any;
    single_moistureP: any;
    single_waterLevelP: any;
  
    chart_temperatureP: any;
    chart_moistureP: any;
    chart_waterLevelP: any;
    autoRefresh: any;
  
    ngOnInit(): void {

      Chart.register(...registerables)
  
      this.createChart_temperatureP();
      this.createChart_moistureP();
      this.createChart_waterLevelP();
  
      this.autoRefresh = 
        setInterval(() =>{
  
          this.chart_temperatureP.destroy();
          this.chart_moistureP.destroy();
          this.chart_waterLevelP.destroy();
  
          this.createChart_temperatureP();
          this.createChart_moistureP();
          this.createChart_waterLevelP();
        }, 10000)
    }
  
    ngOnDestroy(){
      clearInterval(this.autoRefresh);
    }

  createChart_temperatureP(): void {
    const labels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
    const temperature = this.dataP.map(x=>x.avgTemperature);
  
    this.single_temperatureP = temperature[1];
    console.log(temperature);
    console.log(this.single_temperatureP);
  
    this.chart_temperatureP = new Chart("temperatureP", {
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
  
  createChart_moistureP() {
    const labels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
    const moisture=this.dataP.map(x=>x.avgMoisture);
  
    this.single_moistureP = moisture[1];
    console.log(moisture);
    console.log(this.single_moistureP);
  
    this.chart_moistureP = new Chart("moistureP", {
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
  
  createChart_waterLevelP() {
    const labels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
    const waterLevel = this.dataP.map(x=>x.avgWaterLevel);
  
    this.single_waterLevelP = waterLevel[1];
    console.log(waterLevel);
    console.log(this.single_waterLevelP);
  
    this.chart_waterLevelP = new Chart("waterLevelP", {
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
