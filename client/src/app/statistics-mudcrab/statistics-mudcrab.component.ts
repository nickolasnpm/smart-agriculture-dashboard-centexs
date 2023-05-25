import { Component, Input, OnInit } from '@angular/core';
import { Avg_MudCrab } from '../models/data.data';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-statistics-mudcrab',
  templateUrl: './statistics-mudcrab.component.html',
  styleUrls: ['./statistics-mudcrab.component.css']
})
export class StatisticsMudcrabComponent implements OnInit{

  @Input() dataM!:Avg_MudCrab[];

//Create Chart

  single_temperatureM: any;
  single_pHM: any;
  single_salinityM: any;
  single_waterLevelM: any;

  chart_temperatureM: any;
  chart_phM: any;
  chart_salinityM: any;
  chart_waterLevelM: any;
  autoRefresh: any;

  ngOnInit(): void{

  Chart.register(...registerables)
  
  this.createChart_temperatureM();
  this.createChart_pHM();
  this.createChart_salinityM();
  this.createChart_waterLevelM();
  
  this.autoRefresh = 
    setInterval(() =>{

      this.chart_temperatureM.destroy();
      this.chart_phM.destroy();
      this.chart_salinityM.destroy();
      this.chart_waterLevelM.destroy();
      
      this.createChart_temperatureM();
      this.createChart_pHM();
      this.createChart_salinityM();
      this.createChart_waterLevelM();
    }, 10000)
}

ngOnDestroy(){
  clearInterval(this.autoRefresh);
}

createChart_temperatureM(): void {
  const labels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
  const temperature = this.dataM.map(x=>x.avgTemperature);

  this.single_temperatureM = temperature[1];
  console.log(temperature);
  console.log(this.single_temperatureM);

  this.chart_temperatureM = new Chart("temperatureM", {
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

createChart_pHM() {
  const labels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
  const ph=this.dataM.map(x=>x.avgpH);

  this.single_pHM = ph[0];
  console.log(ph);
  console.log(this.single_pHM);

  this.chart_phM = new Chart("pHM", {
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

createChart_salinityM() {
  const labels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
  const salinity = this.dataM.map(x=>x.avgSalinity);

  this.single_salinityM = salinity[0];
  console.log(salinity);
  console.log(this.single_salinityM);

  this.chart_salinityM = new Chart("salinityM", {
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

createChart_waterLevelM() {
  const labels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
  const waterLevel = this.dataM.map(x=>x.avgWaterLevel);

  this.single_waterLevelM = waterLevel[0];
  console.log(waterLevel);
  console.log(this.single_waterLevelM);

  this.chart_waterLevelM = new Chart("waterLevelM", {
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
