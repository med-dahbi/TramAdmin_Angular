import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import {Employe} from 'src/app/classes/employe';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employe',
  templateUrl: './add-employe.component.html',
  styleUrls: ['./add-employe.component.css']
})
export class AddEmployeComponent implements OnInit {
  public copy: string;
  employes:any;
  employe= new Employe();
  constructor(
    private dataService: DataService,
    private router:Router,
  ) { }

  ngOnInit(): void {
  }
  insertEmploye() {
    this.dataService.insertEmploye(this.employe).subscribe(res => {
      this.router.navigateByUrl('/employe');
     }
     )
  }
}
