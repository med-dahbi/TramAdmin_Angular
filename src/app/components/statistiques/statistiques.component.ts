import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ExcelService } from 'src/app/services/excel.service';

@Component({
  selector: 'app-statistiques',
  templateUrl: './statistiques.component.html',
  styleUrls: ['./statistiques.component.css']
})
export class StatistiquesComponent implements OnInit {
  public copy: string;
  lignes: any;
  stations: any;
  employes: any;
  clients: any;

  constructor(
    private dataService: DataService
  ) { 

  }

  ngOnInit(): void {
    this.getCountLignes();
    this.getCountClient();
    this.getCountEmploye();
    this.getCountStation();
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
