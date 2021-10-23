import { Component, OnInit } from '@angular/core';
import { Boat } from '../models/boat';

@Component({
  selector: 'app-boat',
  templateUrl: './boat.component.html',
  styleUrls: ['./boat.component.scss']
})
export class BoatComponent implements OnInit {

  boat:Boat = new Boat();
  speeds:number[] = [.3, .4, .5, .6, .7, .8, .9, .95, 1, 1.05, 1.1, 1.15, 1.2, 1.25, 1.3, 1.35]
  constructor() { }

  ngOnInit(): void {
  }

  speed(speedLength: number): number {

    return this.speedCalc(speedLength);
  }
  speedCalc(speedLength: number) {
    let wl = this.boat.waterline;
    let ratio = Math.pow(wl, .5)
    return (ratio * speedLength);
  }
  hullDrag(i: number) {

    return this.hullDragCalc(i).toFixed(0);
  }
  hullDragCalc(i: number) {
    let d = this.boat.displacement;
    let x = (d / 2240) * i;
    return x;
  }


  hpReq(speedLength: number, hullDragIndex: number) {

    let speed = this.speedCalc(speedLength);
    let hullDrag = this.hullDragCalc(hullDragIndex);
    let retVal = (speed * hullDrag * .0031) / .55
    return retVal.toFixed(2);

  }

}
