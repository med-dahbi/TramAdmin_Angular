import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  formGroup: FormGroup;
  constructor(
    private dataService:DataService,
    private router: Router,

  ) {}

  ngOnInit() {
    this.initForm();
  }
  ngOnDestroy() {
  }
initForm(){
  this.formGroup = new FormGroup({
    cin: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required]),
    
  });
}
Login(){
  if(this.formGroup.valid){
    this.dataService.login(this.formGroup.value).subscribe(res=>{
      if(res.success){
        console.log(res);
        this.router.navigateByUrl('/dashboard');
     
      }
      else{
        alert(res.message);

      }
  
    })
  }
}
}
