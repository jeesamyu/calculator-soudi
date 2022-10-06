import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit {
   inputBox: string = '';
  result: string = '';
  constructor(){}
  ngOnInit(): void {
  }
  
  Number(Number : string) {
    this.inputBox=this.inputBox + Number
    this.result=this.inputBox;
  }

  backspace() {
      this.inputBox = this.inputBox.substr(0, this.inputBox.length - 1)
    }

  allClear() {
    this.result = '';
    this.inputBox = '';
  }
  
  Answer() {
    this.result = eval (this.inputBox)
    this.inputBox = this.result;
  }

}