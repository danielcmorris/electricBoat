import { Component, Input, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { Performer } from '../models/performer';
import { Battery } from '../models/battery';
import { Boat } from '../models/boat';
import { Motor } from '../models/motor';
import { Propeller } from '../models/propeller';

// interface SimpleChanges {
//   __index(propName: string): SimpleChange
// }

@Component({
  selector: 'app-performance',
  templateUrl: './performance.component.html',
  styleUrls: ['./performance.component.scss']
})
export class PerformanceComponent implements OnInit {

  @Input() boat:Boat = new Boat();
  @Input() motor:Motor = new Motor();
  @Input() battery:Battery = new Battery();
  
  performers: any = [];
  speeds = [.3, .4, .5, .6, .7, .8, .9, .95, 1, 1.05, 1.1, 1.15, 1.2, 1.25, 1.3, 1.35]


  constructor() { 
    this.boat = new Boat();
    this.boat.propeller = new Propeller();
  }
  ngOnChanges(changes: SimpleChanges) {
   
    try{
      let b = changes['boat'];
      if(b){
        console.log('updating boat');
        this.boat = b.currentValue;      
      }
     
    }catch(e){
      
    }
    try{
      let m = changes['motor'];
      if(m){
        console.log('updating motor');
        this.motor = m.currentValue;      
      }
    }catch(e){
      
    }
    try{

      let bat = changes['battery'];
      if(bat){
        console.log('updating battery');
        this.battery = bat.currentValue;      
      }
      
    }catch(e){
      
    }
     console.log(changes);
     this.calculatePeformance()
  }
  ngOnInit(): void {
    this.calculatePeformance()
  }

  calculatePeformance(){
    if(this.boat.waterline && this.boat.propeller.diameter>0 && this.battery.peukertNumber>0){

      
    this.performers=[];
    console.log('calculating performance')
    let prop = this.boat.propeller || new Propeller();      
    this.speeds.forEach(s => {
      let speed = this.speed(s);
   
      var p = new Performer(speed, prop, this.motor, this.battery);

      this.performers.push(p);
    });

  }
  }
  speed(speedLength: number): number {

    return this.speedCalc(speedLength);
  }
  speedCalc(speedLength: number) {
    let wl = this.boat.waterline;
    let ratio = Math.pow(wl, .5)
    return (ratio * speedLength);
  }

}
