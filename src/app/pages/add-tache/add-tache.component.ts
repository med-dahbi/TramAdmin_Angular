import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute } from '@angular/router';
import { Routes, RouterModule } from '@angular/router';

import { Tache } from 'src/app/classes/tache';
import { Router } from '@angular/router';
import { ExcelService } from 'src/app/services/excel.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-add-tache',
  templateUrl: './add-tache.component.html',
  styleUrls: ['./add-tache.component.css']
})
export class AddTacheComponent implements OnInit {
  taches: any;
  cin: any;
  public copy: string;
  lignes: any;
  tache = new Tache();
  data: [][];
  constructor(
    private acRoute: ActivatedRoute,
    private dataService: DataService,
    private router: Router,

  ) { 

  }

  ngOnInit(): void {
    this.cin = this.acRoute.snapshot.params.cin;

  }

  insertTache() {
    this.dataService.insertTache(this.tache).subscribe(res => {
      this.router.navigateByUrl('/taches/'+ this.cin);
    }
    )
  }

}
