import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-webpage',
  templateUrl: './webpage.component.html',
  styleUrls: ['./webpage.component.css']
})
export class WebpageComponent implements OnInit {

  constructor() { }

  menu_icon_variable: boolean = false;
  menuVariable: boolean = false;

  ngOnInit(): void {
  }
  
  openMenu() {

    this.menuVariable =! this.menuVariable;
    this.menu_icon_variable =! this.menu_icon_variable;

  }
  
}
