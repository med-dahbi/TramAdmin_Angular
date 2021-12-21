import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ExcelService } from 'src/app/services/excel.service';

@Component({
  selector: 'app-abonnemets',
  templateUrl: './abonnemets.component.html',
  styleUrls: ['./abonnemets.component.css']
})
export class AbonnemetsComponent implements OnInit {
  public copy: string;
  clients: any;
  constructor(
    private dataService: DataService,
    private excelService: ExcelService
  ) { }

  ngOnInit(): void {
    this.getClientsData();

  }
  getClientsData() {
    this.dataService.getClientAbonnés().subscribe(res => {
      this.clients = res;
    }
    )
  }


  exportAsXLSX(): void {
    this.excelService.exportAsExcelFile(this.clients, 'clients');
  }
}
