import { Component, ViewChild, ElementRef } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  chart = new Chart({
    chart: {
      type: 'area'
    },
    title: {
      text: 'Linechart'
    },
    credits: {
      enabled: false
    },
    plotOptions: {
      area: {
        stacking: 'normal'
      },
      series: {
        marker: {
          enabled: false
        }
      }
    },
    tooltip: {
      shared: true
    },
    series: [
      {
        name: 'Line 1',
        color: 'rgba(255, 0, 0, .7)',
        data: [1, 2, 3, 3, 5, 6, 3, 2, 5, 6, 8]
      },
      {
        name: 'Line 2',
        color: 'rgba(255, 165, 0, .7)',
        data: [1, 2, 3, 3, 5, 6, 3, 2, 5, 6, 8]
      },
      {
        name: 'Line 3',
        color: 'rgba(255, 255, 0, .7)',
        data: [1, 2, 3, 3, 5, 6, 3, 2, 5, 6, 8]
      }
    ]
  });

  // add point to chart serie
  add() {
    this.chart.addPoint(Math.floor(Math.random() * 10), 0);
    this.chart.addPoint(Math.floor(Math.random() * 10), 1);
    this.chart.addPoint(Math.floor(Math.random() * 10), 2);
  }
}
