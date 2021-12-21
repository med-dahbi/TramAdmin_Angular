import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ExcelService } from 'src/app/services/excel.service';

@Component({
  selector: 'app-function',
  templateUrl: './function.component.html',
  styleUrls: ['./function.component.css']
})
export class FunctionComponent implements OnInit {
  public copy: string;
  fonctions: any;
  constructor(
  private dataService: DataService,
  private excelService: ExcelService


  ) { }

  ngOnInit(): void {
  this.getFonctionsData();
  }
  
  getFonctionsData() {
    this.dataService.getFonctions().subscribe(res => {
     console.log(res);
     this.fonctions= res;
    }
    )
  }
  deleteFonction(id){
    this.dataService.deleteFonction(id).subscribe(res => {
      this.getFonctionsData();
     }
     )}
  
     exportAsXLSX(): void {
      this.excelService.exportAsExcelFile(this.fonctions, 'clients');
    }

}
