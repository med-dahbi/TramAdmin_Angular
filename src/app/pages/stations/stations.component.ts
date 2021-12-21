import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ExcelService } from 'src/app/services/excel.service';

@Component({
  selector: 'app-stations',
  templateUrl: './stations.component.html',
  styleUrls: ['./stations.component.css']
})
export class StationsComponent implements OnInit {
  public copy: string;
  stations: any;
  constructor(
    private dataService: DataService,
    private excelService: ExcelService


  ) { }

  ngOnInit(): void {
    this.getStationsData();

  }

  getStationsData() {
    this.dataService.getStations().subscribe(res => {
      this.stations = res;
    }
    )
  }
  deleteStation(id) {
    console.log(id);
    this.dataService.deleteStation(id).subscribe(res => {
      this.getStationsData();
    }
    )
  }
  exportAsXLSX(): void {
    this.excelService.exportAsExcelFile(this.stations, 'stations');
  }

}
