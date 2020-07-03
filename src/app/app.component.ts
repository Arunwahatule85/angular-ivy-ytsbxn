import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {
  chart: any;
   canvas: HTMLElement;

ngOnInit() {

   this.canvas = <HTMLCanvasElement>document.getElementById("canvas");
            //this.ctx = this.canvas.getContext("2d");
            this.chart = new Chart('canvas', {
              type: 'radar',

              options:
              {
                legend: {
                // enabled: true,
                },
                scale: {
                  pointLabels: {
                    fontSize: 8,
                    fontColor: 'rgb(0, 0, 0)'
                  },
                  ticks: {
                    callback: function () { return '' },
                    fontSize: 0,
                    backdropColor: 'rgb(242, 242, 242)'
                  },
                  gridLines: {
                    drawOnChartArea: false,
                    display: true,
                    drawTicks: false
                  },
                }
              },
              data: {
                labels: ["TataMotors","Motorolla","Tiktok","Oppo"],
                datasets: [
                  {
                    type: 'radar',
                    // label: 'DataCombination',
                    data: [100,100,100,200],
                    backgroundColor: 'rgba(37, 116, 169, 0.7)',
                    borderColor: 'rgba(37, 116, 169, 0.6)',
                    pointBorderColor: 'rgba(37, 116, 169, 1.5)',
                    pointBackgroundColor: 'rgba(37, 116, 169, 0.9)',
                    pointHoverBackgroundColor: 'rgba(37, 116, 169, 0.9)',
                    pointHoverBorderColor: 'rgba(37, 116, 169, 0.7)',
                    fill: true,
                    hideInLegendAndTooltip: false,
                    pointRadius: 4,
                  }
                ]
              },
            });
          }
        
}
