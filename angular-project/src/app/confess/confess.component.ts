import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confess',
  templateUrl: './confess.component.html',
  styleUrls: ['./confess.component.css']
})
export class ConfessComponent implements OnInit {

  public uiInvalidCredential = false;

  public fbFormGroup = this.fb.group({
    username: ['', Validators.required],
    category:['', Validators.required],
    thoughts:['', Validators.required]
  });


  constructor(private http: HttpClient,
    private fb: FormBuilder,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  async confesshere() {
    const data = this.fbFormGroup.value;

    // ajax call
    const url = 'http://localhost:3200/update-user';
    const result: any = await this.http.post(url, data).toPromise();
    if (result.opr) {
      sessionStorage.setItem('sid', 'true');
      this.router.navigate(['confess']);
    } else {
      this.uiInvalidCredential = true;
    }
    this.fbFormGroup.reset();
  }


}
