import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Employe } from 'src/app/classes/employe';

import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-employe',
  templateUrl: './update-employe.component.html',
  styleUrls: ['./update-employe.component.css']
})
export class UpdateEmployeComponent implements OnInit {
  id: any;
  cin: any;
  data: any;
  employe = new Employe()
  constructor(
    private acRoute: ActivatedRoute,
    private dataService: DataService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.id = this.acRoute.snapshot.params.id,
    this.cin = this.acRoute.snapshot.params.cin,

    this.getEmploye();
  }
  getEmploye() {
    this.dataService.getEmploye(this.id).subscribe(res => {
      this.data = res;
      this.employe = this.data;
    }
    )
  }
  updateEmploye(cin){
    this.dataService.updateEmploye(cin, this.employe).subscribe(res => {
    this.router.navigateByUrl('/employe');
    })

  }

}
