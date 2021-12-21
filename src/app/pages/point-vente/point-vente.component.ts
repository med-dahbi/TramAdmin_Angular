import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ExcelService } from 'src/app/services/excel.service';

@Component({
  selector: 'app-point-vente',
  templateUrl: './point-vente.component.html',
  styleUrls: ['./point-vente.component.css']
})
export class PointVenteComponent implements OnInit {
  public copy: string;
  pvs: any;
  constructor(
    private dataService: DataService,
    private excelService: ExcelService


  ) { }

  ngOnInit(): void {
    this.getPvsData();

  }

  getPvsData() {
    this.dataService.getPvs().subscribe(res => {
     this.pvs= res;
    }
    )
  }
  deletepv(id){
    this.dataService.deletePv(id).subscribe(res => {
      this.getPvsData();
     }
     )}
     exportAsXLSX(): void {
      this.excelService.exportAsExcelFile(this.pvs, 'pvs');
    }
    
}
