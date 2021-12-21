import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Voyage } from 'src/app/classes/voyage';

import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-voyage',
  templateUrl: './update-voyage.component.html',
  styleUrls: ['./update-voyage.component.css']
})
export class UpdateVoyageComponent implements OnInit {
  id: any;
  data: any;
  voyage= new Voyage()
  
constructor(
  private acRoute: ActivatedRoute,
  private dataService: DataService,
  private router: Router,
) { }

ngOnInit(): void {
  this.id = this.acRoute.snapshot.params.id,
  this.getVoyage();
}
getVoyage() {
  this.dataService.getVoyage(this.id).subscribe(res => {
    this.data = res;
    this.voyage = this.data;
    console.log(this.voyage);
  }
  )
}
updateVoyage() {
  this.dataService.updateVoyage(this.voyage, this.voyage).subscribe(res => {
  this.router.navigateByUrl('/voyages');
 
  })

}
}
