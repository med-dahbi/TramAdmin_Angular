import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Station } from 'src/app/classes/station';

import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-station',
  templateUrl: './update-station.component.html',
  styleUrls: ['./update-station.component.css']
})
export class UpdateStationComponent implements OnInit {
  id: any;
  data: any;
  station = new Station()
  
  constructor(
    private acRoute: ActivatedRoute,
    private dataService: DataService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    
    this.id = this.acRoute.snapshot.params.id,
      this.getStation();
  }
  getStation() {
    this.dataService.getStation(this.id).subscribe(res => {
      this.data = res;
      this.station = this.data;
    }
    )
  }
  updateStation() {
    this.dataService.updateStation(this.station, this.station).subscribe(res => {
    this.router.navigateByUrl('/stations');
    })

  }
}
