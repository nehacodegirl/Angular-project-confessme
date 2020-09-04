import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-forget',
  templateUrl: './forget.component.html',
  styleUrls: ['./forget.component.css']
})
export class ForgetComponent implements OnInit {

  public uiInvalidCredential = false;

  public fbFormGroup = this.fb.group({
    emailid: ['', Validators.required],
    password: ['', Validators.required],
    cpassword: ['', Validators.required]
  });
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
  }

  async submitHere() {
    const data = this.fbFormGroup.value;

    // ajax call
    const url = 'http://localhost:3200/forget-user';
    const result: any = await this.http.post(url, data).toPromise();
    if (result.opr) {
      sessionStorage.setItem('sid', 'true');
      this.router.navigate(['login']);
    } else {
      this.uiInvalidCredential = true;
    }
    this.fbFormGroup.reset();
  }

}
