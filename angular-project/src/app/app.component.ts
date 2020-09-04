import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'angular-project';
  linksList =[{title:'Login', link:'login'},
{title:'SignUp',link:'signup'},
{title:'Explore',link:'explore'}];



  constructor(private router: Router){

  }


  gotoroute(page){
    this.router.navigate([page]);
  }

  

 
}
