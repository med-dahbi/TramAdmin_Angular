import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PointVent } from 'src/app/classes/point-vent';

import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-pv',
  templateUrl: './update-pv.component.html',
  styleUrls: ['./update-pv.component.css']
})
export class UpdatePvComponent implements OnInit {
  id: any;
  data: any;
  pv = new PointVent()

  constructor(
    private acRoute: ActivatedRoute,
    private dataService: DataService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.id = this.acRoute.snapshot.params.id,
      this.getPv();
  }
  getPv() {
    this.dataService.getPv(this.id).subscribe(res => {
      this.data = res;
      this.pv = this.data;
    }
    )
  }
  updatePv() {
    this.dataService.updatePv(this.pv, this.pv).subscribe(res => {
      this.router.navigateByUrl('/point-vente');
    })
  }
}