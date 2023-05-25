import { Component, Input, OnInit } from '@angular/core';
import { Chart,registerables } from 'chart.js';
import { Data_MudCrab } from '../models/data.data';

@Component({
  selector: 'app-line-chart-mudcrab',
  templateUrl: './line-chart-mudcrab.component.html',
  styleUrls: ['./line-chart-mudcrab.component.css']
})
export class LineChartMudcrabComponent implements OnInit {
  
  @Input() data!:Data_MudCrab[];

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

    //pH adjust
    pHRef: number = 8.0;

    pluspH() {
      if(this.pHRef < 14){
        this.pHRef +=1;
      }
    }
  
    minuspH() {
      if(this.pHRef > 0){
        this.pHRef -=1;
      }
    }

    //salinity adjust
    salinityRef: number = 30;

    plusSalinity() {
      if(this.salinityRef < 100){
        this.salinityRef +=1;
      }
    }
  
    minusSalinity() {
      if(this.salinityRef > 0){
        this.salinityRef -=1;
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




  //Create Chart

  single_temperature: any;
  single_pH: any;
  single_salinity: any;
  single_waterLevel: any;

  temperature_bool: boolean = true;
  pH_bool: boolean = true;
  salinity_bool: boolean = true;
  waterLevel_bool: boolean = true;

  chart_temperature: any;
  chart_ph: any;
  chart_salinity: any;
  chart_waterLevel: any;
  autoRefresh: any;

  ngOnInit(): void{

    Chart.register(...registerables)
    
    this.createChart_temperature();
    this.createChart_pH();
    this.createChart_salinity();
    this.createChart_waterLevel();
    
    this.autoRefresh = 
      setInterval(() =>{

        this.chart_temperature.destroy();
        this.chart_ph.destroy();
        this.chart_salinity.destroy();
        this.chart_waterLevel.destroy();
        
        this.createChart_temperature();
        this.createChart_pH();
        this.createChart_salinity();
        this.createChart_waterLevel();
      }, 10000)
  }

  ngOnDestroy(){
    clearInterval(this.autoRefresh);
  }

  createChart_temperature(): void {
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

  createChart_pH() {
    const labels = this.data.map(x=>x.date);
    const ph=this.data.map(x=>x.pH);

    this.single_pH = ph[0];
    console.log(ph);
    console.log(this.single_pH);

    if(this.single_pH < 7.5 || this.single_pH > 8.5){
      this.pH_bool = false;
      console.log(this.pH_bool);
    }
    else{
      this.pH_bool = true;
      console.log(this.pH_bool);
    }

    this.chart_ph = new Chart("pH", {
      type: 'line',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'ph Value',
            data: ph,
            borderColor: "purple",
            backgroundColor: "purple",
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

  createChart_salinity() {
    const labels = this.data.map(x=>x.date);
    const salinity=this.data.map(x=>x.salinity);

    this.single_salinity = salinity[0];
    console.log(salinity);
    console.log(this.single_salinity);

    if(this.single_salinity < 28 || this.single_salinity > 32){
      this.salinity_bool = false;
      console.log(this.salinity_bool);
    }
    else{
      this.salinity_bool = true;
      console.log(this.salinity_bool);
    }

    this.chart_salinity = new Chart("salinity", {
      type: 'line',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Salinity (%)',
            data: salinity,
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
