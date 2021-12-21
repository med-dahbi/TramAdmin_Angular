import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Ligne } from 'src/app/classes/ligne';

import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-ligne',
  templateUrl: './update-ligne.component.html',
  styleUrls: ['./update-ligne.component.css']
})
export class UpdateLigneComponent implements OnInit {
  id: any;
  data: any;
  ligne = new Ligne()
  constructor(
    private acRoute: ActivatedRoute,
    private dataService: DataService,
    private router: Router,

  ) { }

  ngOnInit(): void {

    this.id = this.acRoute.snapshot.params.id,
      this.getLine();
  }
  getLine() {
    this.dataService.getLine(this.id).subscribe(res => {
      this.data = res;
      this.ligne = this.data;
    }
    )
  }
  updateLigne() {
    this.dataService.updateLigne(this.ligne, this.ligne).subscribe(res => {
    this.router.navigateByUrl('/lignes');
    })

  }
}
