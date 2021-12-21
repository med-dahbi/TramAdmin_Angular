import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute } from '@angular/router';
import { Routes, RouterModule } from '@angular/router';
import { ExcelService } from 'src/app/services/excel.service';

@Component({
  selector: 'app-taches',
  templateUrl: './taches.component.html',
  styleUrls: ['./taches.component.css']
})
export class TachesComponent implements OnInit {
  public copy: string;
  taches: any;
  cin: any;

  constructor(
    private acRoute: ActivatedRoute,
    private excelService: ExcelService,
    private dataService: DataService

  ) { 
  }

  ngOnInit(): void {
    this.cin = this.acRoute.snapshot.params.cin,
    this.getTachesCIN();
   

  }
  getTachesCIN() {
    this.dataService.getTachesCIN(this.cin).subscribe(res => {
     this.taches= res;
    }
    )
  }
  deleTetache(id){
    this.dataService.deleteTache(id).subscribe(res => {
      this.getTachesCIN();
     }
     )}
     AddTache(){}
     exportAsXLSX(): void {
      this.excelService.exportAsExcelFile(this.taches, 'taches');
    }
    
}
