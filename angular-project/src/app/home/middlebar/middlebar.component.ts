import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { consoleTestResultHandler } from 'tslint/lib/test';
import { Router } from '@angular/router';


@Component({
  selector: 'app-middlebar',
  templateUrl: './middlebar.component.html',
  styleUrls: ['./middlebar.component.css']
})
export class MiddlebarComponent implements OnInit{

  public list:any=[];
  

  
  constructor(private http: HttpClient,
    private router:Router)
  {}

  ngOnInit(): void{
    this.makeAjaxCall()
    
  }

  async makeAjaxCall() {
    const url = 'http://localhost:3200/uploadblock';
    let results:any = await this.http.get(url).toPromise();
    this.list = results;
    console.log(this.list);
  }
  

}
