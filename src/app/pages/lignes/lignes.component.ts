import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ExcelService } from 'src/app/services/excel.service';

@Component({
  selector: 'app-lignes',
  templateUrl: './lignes.component.html',
  styleUrls: ['./lignes.component.css']
})
export class LignesComponent implements OnInit {
  public copy: string;
  lignes: any;
 
  constructor(
    private dataService: DataService,
    private excelService: ExcelService
  ) { }
 
  ngOnInit(): void {
    this.getLignesData();
  }

  getLignesData() {
    this.dataService.getLignes().subscribe(res => {
      this.lignes = res;
    }
    )
  }
  deleteLigne(id) {
    this.dataService.deleteLigne(id).subscribe(res => {
      this.getLignesData();
    }
    )
  }

  exportAsXLSX(): void {
    this.excelService.exportAsExcelFile(this.lignes, 'lignes');
  }
}