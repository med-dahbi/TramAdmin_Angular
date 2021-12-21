import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import {Station} from 'src/app/classes/station';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-station',
  templateUrl: './add-station.component.html',
  styleUrls: ['./add-station.component.css']
})
export class AddStationComponent implements OnInit {
  public copy: string;
  stations:any;
  station= new Station();
  constructor(
    private dataService: DataService,
    private router:Router,
  ) { }

  ngOnInit(): void {
  }
  insertStation() {
    this.dataService.insertStation(this.station).subscribe(res => {
      this.router.navigateByUrl('/stations');
     }
     )
  }
}
