import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Ligne } from 'src/app/classes/ligne';
import { Router } from '@angular/router';
import { ExcelService } from 'src/app/services/excel.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-add-lign',
  templateUrl: './add-lign.component.html',
  styleUrls: ['./add-lign.component.css']
})
export class AddLignComponent implements OnInit {
  public copy: string;
  lignes: any;
  ligne = new Ligne();
  data: [][];
  constructor(
    private dataService: DataService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }
  insertLigne() {
    this.dataService.insertLigne(this.ligne).subscribe(res => {
      this.router.navigateByUrl('/lignes');
    }
    )
  }
  onFileChange(evt: any) {
    const target: DataTransfer = <DataTransfer>(evt.target);

    if (target.files.length !== 1) throw new Error('Cannot use multiple files');

    const reader: FileReader = new FileReader();

    reader.onload = (e: any) => {
      const bstr: string = e.target.result;

      const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });

      const wsname: string = wb.SheetNames[0];

      const ws: XLSX.WorkSheet = wb.Sheets[wsname];

      console.log(ws);

      this.data = (XLSX.utils.sheet_to_json(ws, { header: 2 }));

      //   console.log(this.data);

      let x = this.data.slice(1);
      console.log(x);
      // this.lignes=x;
    };
    reader.readAsBinaryString(target.files[0]);
  }
  ImportFromXLSX() {
    this.lignes = this.data;
    console.log(this.lignes);
    this.dataService.insertLigne(this.lignes).subscribe(res => {
      this.router.navigateByUrl('/lignes');
    }
    )
  }
}
