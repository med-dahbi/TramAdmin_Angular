import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ExcelService } from 'src/app/services/excel.service';

@Component({
  selector: 'app-employes',
  templateUrl: './employes.component.html',
  styleUrls: ['./employes.component.css']
})
export class EmployesComponent implements OnInit {
  public copy: string;
  employes: any;
  constructor(
    private dataService: DataService,
    private excelService: ExcelService

  ) { }

  ngOnInit(): void {
    this.getEmployesData();

  }
  getEmployesData() {
    this.dataService.getEmployes().subscribe(res => {
     this.employes= res;
    }
    )
  }
  deleteEmploye(id){
    this.dataService.deleteEmploye(id).subscribe(res => {
      this.getEmployesData();
     }
     )}
     exportAsXLSX(): void {
      this.excelService.exportAsExcelFile(this.employes, 'employes');
    }
    

}
