import { Component, Input, OnInit } from '@angular/core';
import { Data_Paddy } from '../models/data.data';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-line-chart-paddy',
  templateUrl: './line-chart-paddy.component.html',
  styleUrls: ['./line-chart-paddy.component.css']
})
export class LineChartPaddyComponent implements OnInit {

  @Input() currentReading_Paddy!:Data_Paddy[];

  //temperature adjust
  temperatureRef: number = 28;

  plusTemperature() {
    if(this.temperatureRef < 100){
      this.temperatureRef +=1;
    }
  }

  minusTemperature() {
    if(this.temperatureRef > 0){
      this.temperatureRef -=1;
    }
  }

  //moisture adjust
  moistureRef: number = 20;

  plusMoisture() {
    if(this.moistureRef < 100){
      this.moistureRef +=1;
    }
  }

  minusMoisture() {
    if(this.moistureRef > 0){
      this.moistureRef -=1;
    }
  }

  //waterLevel adjust
  waterLevelRef: number = 1;

  plusWaterLevel() {
    if(this.waterLevelRef < 100){
      this.waterLevelRef +=1;
    }
  }

  minusWaterLevel() {
    if(this.waterLevelRef > 0){
      this.waterLevelRef -=1;
    }
  }


  //create line chart

  chart_temperaturePaddy: any;
  chart_moisturePaddy: any;
  chart_waterLevelPaddy: any;
  autoRefresh: any;

  currentReading_temperaturePaddy: any;
  currentReading_moisturePaddy: any;
  currentReading_waterLevelPaddy: any;

  temperature_bool: boolean = true;
  moisture_bool: boolean = true;
  waterLevel_bool: boolean = true;

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

  createChart_temperaturePaddy() {
    
    const labels = this.currentReading_Paddy.map(x=>x.date);
    const temperature = this.currentReading_Paddy.map(x=>x.temperature);

    this.currentReading_temperaturePaddy = temperature[0];

    if(this.currentReading_temperaturePaddy < 27 || this.currentReading_temperaturePaddy > 30){
      this.temperature_bool = false;
      console.log(this.temperature_bool);
    }
    else{
      this.temperature_bool = true;
      console.log(this.temperature_bool);
    }

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

    const labels = this.currentReading_Paddy.map(x=>x.date);
    const moisture=this.currentReading_Paddy.map(x=>x.moisture);

    this.currentReading_moisturePaddy = moisture[0];

    if(this.currentReading_moisturePaddy < 20 || this.currentReading_moisturePaddy > 60){
      this.moisture_bool = false;
      console.log(this.moisture_bool);
    }
    else{
      this.moisture_bool = true;
      console.log(this.moisture_bool);
    }

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
    const labels = this.currentReading_Paddy.map(x=>x.date);
    const waterLevel=this.currentReading_Paddy.map(x=>x.waterLevel);

    this.currentReading_waterLevelPaddy = waterLevel[0];

    if(this.currentReading_waterLevelPaddy < 1 || this.currentReading_waterLevelPaddy > 5){
      this.waterLevel_bool = false;
      console.log(this.waterLevel_bool);
    }
    else{
      this.waterLevel_bool = true;
      console.log(this.waterLevel_bool);
    }

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
