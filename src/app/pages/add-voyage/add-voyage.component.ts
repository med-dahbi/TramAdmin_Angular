import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import {Voyage} from 'src/app/classes/voyage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-voyage',
  templateUrl: './add-voyage.component.html',
  styleUrls: ['./add-voyage.component.css']
})
export class AddVoyageComponent implements OnInit {
  public copy: string;
  voyages: any;
  voyage= new Voyage();

  constructor(
    private dataService: DataService,
    private router:Router,
  ) { }

  ngOnInit(): void {
  }
  insertVoyage() {
    this.dataService.insertVoyage(this.voyage).subscribe(res => {
      this.router.navigateByUrl('/voyages');
     }
     )
}
}
