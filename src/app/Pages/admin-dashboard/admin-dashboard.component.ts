import { Component, OnInit, Inject, PLATFORM_ID, ViewChild } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import {
  NgApexchartsModule,
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexFill,
  ApexYAxis,
  ApexTooltip,
  ApexTitleSubtitle,
  ApexXAxis,
  ApexGrid
} from 'ng-apexcharts';

export type CustomApexChartSeries = {
  name: string;
  type: string;
  data: number[];
};

export type ChartOptions = {
  series: CustomApexChartSeries[];
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis | ApexYAxis[];
  title: ApexTitleSubtitle;
  labels: string[];
  grid: ApexGrid;
  stroke: any;
  colors: string[];
  dataLabels: any;
  fill?: ApexFill;
  tooltip?: ApexTooltip;
};

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    NgApexchartsModule,
  ],
  templateUrl: './admin.dashboard.component.html',
})
export class DashboardComponent implements OnInit {
  darkTheme: boolean = false;
  chartOptions: ChartOptions;

  @ViewChild('chart') chart: ChartComponent;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.chartOptions = {
      series: [],
      chart: { type: 'line' },
      stroke: {},
      grid: {},
      title: {},
      dataLabels: {},
      labels: [],
      colors: [],
      xaxis: { categories: [] },
      yaxis: [],
    };
  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.initializeChartOptions();
    }
  }

  initializeChartOptions(): void {
    this.chartOptions = {
      series: [
        {
          name: 'Apply',
          type: 'column',
          data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160, 211, 547, 412],
        },
        {
          name: 'Selected',
          type: 'line',
          data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16, 45, 97, 120],
        },
      ],
      chart: {
        height: 350,
        type: 'line',
        toolbar: {
          show: false,
        },
      },
      grid: {
        padding: {
          left: 0,
          right: 0,
        },
      },
      stroke: {
        width: [0, 4],
      },
      title: {
        text: 'Traffic Sources',
      },
      dataLabels: {
        enabled: true,
        enabledOnSeries: [1],
      },
      labels: [
        '01 Jan 2024', '02 Jan 2024', '03 Jan 2024', '04 Jan 2024', '05 Jan 2024', '06 Jan 2024',
        '07 Jan 2024', '08 Jan 2024', '09 Jan 2024', '10 Jan 2024', '11 Jan 2024', '12 Jan 2024',
        '13 Jan 2024', '14 Jan 2024', '15 Jan 2024'
      ],
      colors: ['#6654c3', '#71db97'],
      xaxis: {
        type: 'datetime',
      },
      yaxis: [
        {
          title: {
            text: 'Website Blog',
          },
        },
        {
          opposite: true,
          title: {
            text: 'Social Media',
          },
        },
      ],
    };
  }

  sortByColumn(): void {
    console.log('Sorting column...');
  }
}