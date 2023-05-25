import { Component, Input, OnInit } from '@angular/core';
import { Data_Paddy } from '../models/data.data';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-line-chart-paddy',
  templateUrl: './line-chart-paddy.component.html',
  styleUrls: ['./line-chart-paddy.component.css']
})
export class LineChartPaddyComponent implements OnInit {

  @Input() data!:Data_Paddy[];

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

  chart_temperature: any;
  chart_moisture: any;
  chart_waterLevel: any;
  autoRefresh: any;

  single_temperature: any;
  single_moisture: any;
  single_waterLevel: any;

  temperature_bool: boolean = true;
  moisture_bool: boolean = true;
  waterLevel_bool: boolean = true;

  ngOnInit(): void {

    Chart.register(...registerables)

    this.createChart_temperature();
    this.createChart_moisture();
    this.createChart_waterLevel();

    this.autoRefresh = 
      setInterval(() =>{

        this.chart_temperature.destroy();
        this.chart_moisture.destroy();
        this.chart_waterLevel.destroy();

        this.createChart_temperature();
        this.createChart_moisture();
        this.createChart_waterLevel();
      }, 10000)
  }

  ngOnDestroy(){
    clearInterval(this.autoRefresh);
  }

  createChart_temperature() {
    
    const labels = this.data.map(x=>x.date);
    const temperature = this.data.map(x=>x.temperature);

    this.single_temperature = temperature[0];
    console.log(temperature);
    console.log(this.single_temperature);

    if(this.single_temperature < 27 || this.single_temperature > 30){
      this.temperature_bool = false;
      console.log(this.temperature_bool);
    }
    else{
      this.temperature_bool = true;
      console.log(this.temperature_bool);
    }

    this.chart_temperature = new Chart("temperature", {
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

  createChart_moisture() {

    const labels = this.data.map(x=>x.date);
    const moisture=this.data.map(x=>x.moisture);

    this.single_moisture = moisture[0];
    console.log(moisture);
    console.log(this.single_moisture);

    if(this.single_moisture < 20 || this.single_moisture > 60){
      this.moisture_bool = false;
      console.log(this.moisture_bool);
    }
    else{
      this.moisture_bool = true;
      console.log(this.moisture_bool);
    }

    this.chart_moisture = new Chart("moisture", {
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

  createChart_waterLevel() {
    const labels = this.data.map(x=>x.date);
    const waterLevel=this.data.map(x=>x.waterLevel);

    this.single_waterLevel = waterLevel[0];
    console.log(waterLevel);
    console.log(this.single_waterLevel);

    if(this.single_waterLevel < 1 || this.single_waterLevel > 5){
      this.waterLevel_bool = false;
      console.log(this.waterLevel_bool);
    }
    else{
      this.waterLevel_bool = true;
      console.log(this.waterLevel_bool);
    }

    this.chart_waterLevel = new Chart("waterLevel", {
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
