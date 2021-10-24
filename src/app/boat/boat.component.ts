import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Boat } from '../models/boat';
import { Propeller } from '../models/propeller';

@Component({
  selector: 'app-boat',
  templateUrl: './boat.component.html',
  styleUrls: ['./boat.component.scss']
})
export class BoatComponent implements OnInit {
  @Output() myBoat = new EventEmitter<Boat>();

  boat: Boat = new Boat();
  propeller: Propeller = new Propeller();
  speeds: number[] = [.3, .4, .5, .6, .7, .8, .9, .95, 1, 1.05, 1.1, 1.15, 1.2, 1.25, 1.3, 1.35]
  constructor() {
    this.propeller.diameter = 14.00;
    this.propeller.rpmAtHullSpeed = 1300;
    this.propeller.maxHullSpeedInKnots = 6.57909;
  }

  ngOnInit(): void {
    this.save()
  }

  save() {
    this.boat.propeller = this.propeller;
    console.log('here is the prop',this.propeller)
     this.myBoat.emit(this.boat);
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



  prop(): string {
    let retVal = this.propCalc()
    return retVal.toFixed(2);
  }

  calculatedPitch() {
    let speed = this.propeller.maxHullSpeedInKnots;
    let rpm = this.propeller.rpmAtHullSpeed;
    return (((speed * 101.3) / rpm) * 12) / 0.55
  }
  propCalc(): number {


    let x = this.boat.draft * this.boat.beam;
    x = Math.pow(x, .5);
    x = x * 4.07
    return x;
  }


  efficient() {
    return this.efficientCalc().toFixed();
  }
  efficientCalc(): number {

    return (this.speedCalc(1.35) * 100);


  }
  optPitch() {
    // =((($Q$12*101.3)/B19)*12)/0.55
    let q12 = this.speedCalc(1.35);
    let eff = this.efficientCalc();
    let retval = (((q12 * 101.3) / eff) * 12) / .55;
    return retval.toFixed(2);
  }

}
