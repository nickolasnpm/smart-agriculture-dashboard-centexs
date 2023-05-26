import { Component, Input, OnInit } from '@angular/core';
import { Avg_MudCrab } from '../models/data.data';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-history-mudcrab',
  templateUrl: './history-mudcrab.component.html',
  styleUrls: ['./history-mudcrab.component.css']
})
export class HistoryMudcrabComponent implements OnInit{

  @Input() avgMudcrab!:Avg_MudCrab[];

//Create Chart

  avg_temperatureMudcrab: any;
  avg_pHMudcrab: any;
  avg_salinityMudcrab: any;
  avg_waterLevelMudcrab: any;

  chart_temperatureMudcrab: any;
  chart_phMudcrab: any;
  chart_salinityMudcrab: any;
  chart_waterLevelMudcrab: any;
  autoRefresh: any;

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
  const labels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
  const temperature = this.avgMudcrab.map(x=>x.avgTemperature);

  this.avg_temperatureMudcrab = temperature[1];

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
  const labels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
  const ph=this.avgMudcrab.map(x=>x.avgpH);

  this.avg_pHMudcrab = ph[0];

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
  const labels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
  const salinity = this.avgMudcrab.map(x=>x.avgSalinity);

  this.avg_salinityMudcrab = salinity[0];

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
  const labels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
  const waterLevel = this.avgMudcrab.map(x=>x.avgWaterLevel);

  this.avg_waterLevelMudcrab = waterLevel[0];

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
