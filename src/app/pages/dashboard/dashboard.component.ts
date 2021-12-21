import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';
import { DataService } from 'src/app/services/data.service';

// core components
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2
} from "../../variables/charts";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public copy: string;
  lignes: any;
  stations: any;
  employes: any;
  clients: any;
  public datasets: any;
  public data: any;
  public salesChart;
  public clicked: boolean = true;
  public clicked1: boolean = false;
  constructor(
    private dataService: DataService
  ) { 

  }
  ngOnInit() {
    this.getCountLignes();
    this.getCountClient();
    this.getCountEmploye();
    this.getCountStation();

    this.datasets = [
      [0, 20, 10, 30, 15, 40, 20, 60, 60],
      [0, 20, 5, 25, 10, 30, 15, 40, 40]
    ];
    this.data = this.datasets[0];


    var chartOrders = document.getElementById('chart-orders');

    parseOptions(Chart, chartOptions());


    var ordersChart = new Chart(chartOrders, {
      type: 'bar',
      options: chartExample2.options,
      data: chartExample2.data
    });

    var chartSales = document.getElementById('chart-sales');

    this.salesChart = new Chart(chartSales, {
			type: 'line',
			options: chartExample1.options,
			data: chartExample1.data
		});
  }


  public updateOptions() {
    this.salesChart.data.datasets[0].data = this.data;
    this.salesChart.update();
  }

  getCountLignes() {
    this.dataService.CountLigne().subscribe(res => {
      this.lignes = res;
      console.log(this.lignes);
    }
    )
  }
  
  getCountClient() {
    this.dataService.CountClient().subscribe(res => {
      this.clients = res;
      console.log(res);
    }
    )
  }
  getCountEmploye(){
    this.dataService.CountEmploye().subscribe(res => {
      this.employes = res;
      console.log(res);
    }
    )
  }
  getCountStation(){
    this.dataService.CountStation().subscribe(res => {
      this.stations = res;
      console.log(res);

    }
    )
  }
}
