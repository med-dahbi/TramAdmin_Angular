import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ExcelService } from 'src/app/services/excel.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
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
    this.dataService.getClientNormaux().subscribe(res => {
      this.clients = res;
    }
    )
  }


  exportAsXLSX(): void {
    this.excelService.exportAsExcelFile(this.clients, 'clients');
  }
}
