import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Tache } from 'src/app/classes/tache';

import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-tache',
  templateUrl: './update-tache.component.html',
  styleUrls: ['./update-tache.component.css']
})
export class UpdateTacheComponent implements OnInit {
  id: any;
  cin: any;

  data: any;
  tache = new Tache()
  constructor(
    private acRoute: ActivatedRoute,
    private dataService: DataService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    
    this.id = this.acRoute.snapshot.params.id,
    this.cin = this.acRoute.snapshot.params.cin,
      
    this.getTache();
  }
  getTache() {
    this.dataService.getTache(this.id).subscribe(res => {
      this.data = res;
      this.tache = this.data;
    }
    )
  }
  updateTache() {
    this.dataService.updateTache(this.tache, this.tache).subscribe(res => {
    this.router.navigateByUrl('/taches/'+ this.cin);
    })

  }

}
