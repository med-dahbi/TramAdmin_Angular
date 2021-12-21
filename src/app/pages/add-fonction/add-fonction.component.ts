import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import {Fonction} from 'src/app/classes/fonction';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-fonction',
  templateUrl: './add-fonction.component.html',
  styleUrls: ['./add-fonction.component.css']
})
export class AddFonctionComponent implements OnInit {
  public copy: string;
  fonctions:any;
  fonction= new Fonction();
  constructor(
    private dataService: DataService,
    private router:Router,
  ) { }

  ngOnInit(): void {
  }
  insertFonction() {
    this.dataService.insertFonction(this.fonction).subscribe(res => {
      this.router.navigateByUrl('/function');
     }
     )
  }
}
