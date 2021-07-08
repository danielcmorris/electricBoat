import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  makeModel="Alden 31	"
  waterline = 24 ;
  displacement=13300;
  depth=3.5;
  beam = 10.5;
  csa=19.24;
  prismatic=.45;
 

  boat:any= {};

  constructor() { }

  ngOnInit(): void {

 
  }
  register(x:NgForm){}

  speed(speedLength:number):string{
   
    return this.speedCalc(speedLength).toFixed(1);
  }
  speedCalc(speedLength:number){
    let wl = this.waterline;
    let ratio = Math.pow(wl,.5)
    return (ratio * speedLength);
  }
  hullDrag(i:number){
    
    return this.hullDragCalc(i).toFixed(0);
  }
  hullDragCalc(i:number){
    let d = this.displacement;
    let x = (d/2240) * i;
    return x;
  }


  hpReq(speedLength:number, hullDragIndex:number){

    let speed= this.speedCalc(speedLength);
    let hullDrag = this.hullDragCalc(hullDragIndex);
    let retVal = (speed * hullDrag * .0031)/.55
    return retVal.toFixed(2);
 
  }

  prop():string{
    let retVal = this.propCalc()
    return retVal.toFixed(2);
  }

  propCalc():number{

    
    let x = this.depth * this.beam;
    x = Math.pow(x,.5);
    x = x * 4.07
    return x;
  }


efficient(){
  return this.efficientCalc().toFixed();
}  
efficientCalc():number{

  return (this.speedCalc(1.35) * 100);


}
optPitch(){
  // =((($Q$12*101.3)/B19)*12)/0.55
  let q12=this.speedCalc(1.35);
  let eff = this.efficientCalc();
  let retval = ( ((q12 * 101.3)/eff )* 12)/.55;
  return retval.toFixed(2);
}

}
