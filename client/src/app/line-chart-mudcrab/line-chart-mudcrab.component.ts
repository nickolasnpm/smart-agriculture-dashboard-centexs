import { Component, Input, OnInit } from '@angular/core';
import { Chart,registerables } from 'chart.js';
import { Data_MudCrab } from '../models/data.data';

@Component({
  selector: 'app-line-chart-mudcrab',
  templateUrl: './line-chart-mudcrab.component.html',
  styleUrls: ['./line-chart-mudcrab.component.css']
})
export class LineChartMudcrabComponent implements OnInit {
  
  @Input() currentReading_Mudcrab!:Data_MudCrab[];

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

  chart_temperatureMudcrab: any;
  chart_phMudcrab: any;
  chart_salinityMudcrab: any;
  chart_waterLevelMudcrab: any;
  autoRefresh: any;

  currentReading_temperatureMudcrab: any;
  currentReading_pHMudcrab: any;
  currentReading_salinityMudcrab: any;
  currentReading_waterLevelMudcrab: any;

  temperature_bool: boolean = true;
  pH_bool: boolean = true;
  salinity_bool: boolean = true;
  waterLevel_bool: boolean = true;

  ngOnInit(): void{

    Chart.register(...registerables)
    
    this.createChart_temperatureMudcrab();
    this.createChart_pHMudcrab();
    this.createChart_salinityMudcrab();
    this.createChart_waterLevelMudcrab();
    
    this.autoRefresh = 
      setInterval(() =>{

        this.chart_temperatureMudcrab.destroy();
        this.chart_phMudcrab.destroy();
        this.chart_salinityMudcrab.destroy();
        this.chart_waterLevelMudcrab.destroy();
        
        this.createChart_temperatureMudcrab();
        this.createChart_pHMudcrab();
        this.createChart_salinityMudcrab();
        this.createChart_waterLevelMudcrab();
      }, 10000)
  }

  ngOnDestroy(){
    clearInterval(this.autoRefresh);
  }

  createChart_temperatureMudcrab(): void {
    const labels = this.currentReading_Mudcrab.map(x=>x.date);
    const temperature = this.currentReading_Mudcrab.map(x=>x.temperature);

    this.currentReading_temperatureMudcrab = temperature[0];

    if(this.currentReading_temperatureMudcrab < 27 || this.currentReading_temperatureMudcrab > 30){
      this.temperature_bool = false;
      console.log(this.temperature_bool);
    }
    else{
      this.temperature_bool = true;
      console.log(this.temperature_bool);
    }

    this.chart_temperatureMudcrab = new Chart("temperatureMudcrab", {
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

  createChart_pHMudcrab() {
    const labels = this.currentReading_Mudcrab.map(x=>x.date);
    const ph=this.currentReading_Mudcrab.map(x=>x.pH);

    this.currentReading_pHMudcrab = ph[0];

    if(this.currentReading_pHMudcrab < 7.5 || this.currentReading_pHMudcrab > 8.5){
      this.pH_bool = false;
      console.log(this.pH_bool);
    }
    else{
      this.pH_bool = true;
      console.log(this.pH_bool);
    }

    this.chart_phMudcrab = new Chart("pHMudcrab", {
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

  createChart_salinityMudcrab() {
    const labels = this.currentReading_Mudcrab.map(x=>x.date);
    const salinity=this.currentReading_Mudcrab.map(x=>x.salinity);

    this.currentReading_salinityMudcrab = salinity[0];

    if(this.currentReading_salinityMudcrab < 28 || this.currentReading_salinityMudcrab > 32){
      this.salinity_bool = false;
      console.log(this.salinity_bool);
    }
    else{
      this.salinity_bool = true;
      console.log(this.salinity_bool);
    }

    this.chart_salinityMudcrab = new Chart("salinityMudcrab", {
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

  createChart_waterLevelMudcrab() {
    const labels = this.currentReading_Mudcrab.map(x=>x.date);
    const waterLevel=this.currentReading_Mudcrab.map(x=>x.waterLevel);

    this.currentReading_waterLevelMudcrab = waterLevel[0];
    console.log(waterLevel);
    console.log(this.currentReading_waterLevelMudcrab);

    if(this.currentReading_waterLevelMudcrab < 1 || this.currentReading_waterLevelMudcrab > 5){
      this.waterLevel_bool = false;
      console.log(this.waterLevel_bool);
    }
    else{
      this.waterLevel_bool = true;
      console.log(this.waterLevel_bool);
    }

    this.chart_waterLevelMudcrab = new Chart("waterLevelMudcrab", {
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
