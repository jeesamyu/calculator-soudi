import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-htmlpage',
  templateUrl: './htmlpage.component.html',
  styleUrls: ['./htmlpage.component.css']
})
export class HtmlpageComponent implements OnInit {

  constructor() { }
  screen="";
  a:any;
  b:any;
  c:any;
  d="";
  e="";

  ngOnInit(): void {
  }
  entervalue(value: any){
    if((this.b=="+")||(this.b=="-")||(this.b=="*")||this.b=="/"){
      this.d=this.d+value;
      this.screen=this.screen+value;
      this.c=this.d
      
    }

    else{
      this.screen=this.screen+value;
      this.a=this.screen;
    }
  }
  condition(value: any){
    this.screen=this.screen+value;
    this.b=value;
  }
  clear(){
    this.screen="";
    this.a="";
    this.b="";
    this.c="";
  }
  // objectArray=[];

  result(){
    if(this.b=="+"){
      this.screen=this.screen+"="+(parseInt(this.a) + parseInt(this.c)).toString();
      this.screen=(parseInt(this.screen)+parseInt(this.c)).toString();
      // this.objectArray.push(parseInt(this.screen)+parseInt(this.c));
      // console.log(this.objectArray)
    }

    if(this.b=="-"){
      this.screen=this.screen+"="+(parseInt(this.a) - parseInt(this.c)).toString;
      this.screen=(parseInt(this.screen)-parseInt(this.c)).toString();
    }
    if(this.b=="*"){
      this.screen=this.screen+"="+(parseInt(this.a) * parseInt(this.c)).toString;
      this.screen=(parseInt(this.screen)-parseInt(this.c)).toString();
    }
    if(this.b=="/"){
      this.screen=this.screen+"="+(parseInt(this.a) / parseInt(this.c)).toString;
      this.screen=(parseInt(this.screen)-parseInt(this.c)).toString();
    }
  }

}
