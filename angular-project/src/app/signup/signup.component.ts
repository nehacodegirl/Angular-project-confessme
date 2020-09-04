import { Component, OnInit } from '@angular/core';
import {faUser} from '@fortawesome/free-regular-svg-icons';
import { HttpClient } from '@angular/common/http';
import { FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public uiInvalidCredential = false;
  public fbFormGroup = this.fb.group({
    username: ['',Validators.required],
    emailid: ['',Validators.required],
   password : ['',Validators.required],
   cpassword :['',Validators.required]
    
  });

  

 


  

  constructor(private fb: FormBuilder,
    private router: Router,
    private http: HttpClient) { }

  ngOnInit(): void {
  }
      async signuphere() {
        const data = this.fbFormGroup.value;
        const url = 'http://localhost:3200/adduser';
          await this.http.post(url,data).toPromise();
        
          this.router.navigate(['confess']);
        
        this.fbFormGroup.reset();
      }

     
}
