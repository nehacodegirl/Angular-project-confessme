import { Component, OnInit } from '@angular/core';
import {faGoogle} from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

public faGoogle=faGoogle;


  constructor() { }

  ngOnInit(): void {
  }

}
