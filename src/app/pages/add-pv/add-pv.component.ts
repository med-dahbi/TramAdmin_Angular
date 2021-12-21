import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import {PointVent} from 'src/app/classes/point-vent';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-pv',
  templateUrl: './add-pv.component.html',
  styleUrls: ['./add-pv.component.css']
})
export class AddPvComponent implements OnInit {
  public copy: string;
  pvs:any;
  pv= new PointVent();
  constructor(
    private dataService: DataService,
    private router:Router,
  ) { }

  ngOnInit(): void {
  }
  insertPv() {
    this.dataService.insertPv(this.pv).subscribe(res => {
      this.router.navigateByUrl('/point-vente');
     }
     )
  }
}
