import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  makeModel="Make"
  prismatic="";
  csa="";
  waterline="";
  depth="";
  displacement="";


  test =0


  boat:any= {};

  constructor() { }

  ngOnInit(): void {


    let slr30=3.0
    

    this.test = Math.pow(10,.5)
  }

}
