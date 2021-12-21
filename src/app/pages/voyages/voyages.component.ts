import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ExcelService } from 'src/app/services/excel.service';

@Component({
  selector: 'app-voyages',
  templateUrl: './voyages.component.html',
  styleUrls: ['./voyages.component.css']
})
export class VoyagesComponent implements OnInit {
  public copy: string;
  voyages: any;
  constructor(
    private dataService: DataService,
    private excelService: ExcelService


  ) { }
  ngOnInit(): void {
    this.getVoyagesData();
  }
  
  getVoyagesData() {
    this.dataService.getVoyages().subscribe(res => {
     this.voyages= res;
    }
    )
  }
  deletevoyage(id){
    this.dataService.deleteVoyage(id).subscribe(res => {
      this.getVoyagesData();
     }
     )}
  
    
     exportAsXLSX(): void {
      this.excelService.exportAsExcelFile(this.voyages, 'voyages');
    }
}
