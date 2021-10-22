import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  makeModel = "Alden 31	"
  waterline = 24;
  displacement = 13300;
  depth = 3.5;
  beam = 10.5;
  csa = 19.24;
  prismatic = .45;



  motor = {
    makeModel: "Motenergy ME1616",
    maxVoltageRating: 80,
    rpmAtMaxVoltage: 8000,
    maxContinuousCurrentRating: 130,
    maxContinuousTorqueRating: 130,
    maxPeakCurrentRating: 0,
    maxPeakTorqueRating: 0,
    motorEfficiencyRating: .92,
    motorTorqueConstantLbsPerFtPerAmp: 0.148,
    motorVoltageConstantRpmsPerVolt: 100.00,
    motorshaftToPropShaftReductionRatio: 2.00
  }

  controller = {
    makeModel: "Sevcon G4845",
    minVoltageRating: 48,
    maxVoltageRating: 69.6,
    MaxPeakVoltage: 450,
    maxOneHourRating: 180,
    maxContinuousCurrentRating: 0,
  }

  battery = {
    makeModel: "Chevy Bolt 10S",
    bci: "N/A",
    ampHourRating: 173,
    voltage: 36,
    count: 2,
    stringVoltage: 72,
    peukertNumber: 1.06,
  }


  propeller: Propeller = new Propeller();
  boat: any = {};


  performers: any = [];
  constructor() {

    this.propeller = new Propeller();
    this.propeller.diameter = 14.00;
    this.propeller.rpmAtHullSpeed = 1300;
    this.propeller.maxHullSpeedInKnots = 6.57909    ;
   

    let speeds = [.3,.4,.5,.6,.7,.8,.9,.95,1,1.05, 1.1,1.15,1.2,1.25,1.3,1.35]

    speeds.forEach(s  => {
      let speed = this.speed(s);
      var p = new Performer(speed, this.propeller);

      this.performers.push(p);
    });

     



  }

  ngOnInit(): void {





  }


  getCSA() {

    var d = 0;
    this.csa = 0;
    try {
      d = parseFloat(`${this.depth}`);
      var pi;
      if (d > 0)
        this.csa = Math.PI * (d ^ 2) / 2;
    } catch {
      this.csa = 0;
    }



  }
  register(x: NgForm) { }

  speed(speedLength: number): number {

    return this.speedCalc(speedLength);
  }
  speedCalc(speedLength: number) {
    let wl = this.waterline;
    let ratio = Math.pow(wl, .5)
    return (ratio * speedLength);
  }
  hullDrag(i: number) {

    return this.hullDragCalc(i).toFixed(0);
  }
  hullDragCalc(i: number) {
    let d = this.displacement;
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


    let x = this.depth * this.beam;
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


export class Propeller {
  diameter: number = 0;
  rpmAtHullSpeed: number = 0;
  maxHullSpeedInKnots: number = 0;
  constructor() { }
  public get pitch(): number {
    return this.calculatedPitch()
  }
  private calculatedPitch() {
    let speed = this.maxHullSpeedInKnots;
    let rpm = this.rpmAtHullSpeed;
    return (((speed * 101.3) / rpm) * 12) / 0.55
  }



}
export class Performer {
  strSpeed :string ="";
  speed: number = 0;
  propeller: Propeller;
  public get rpm(): number {
    let r = (((this.speed * 6080) / 60) / (0.55) * (12 / this.propeller.pitch))
    return r
  }

  public get hp(): number {
    let h = ((((this.rpm ^ 0.6) / 632.7) * this.propeller.diameter ^ (1 / 0.2)))
    return h;
  }

  constructor(speed: number, prop: Propeller) {
    this.speed = speed;
    this.strSpeed = speed.toFixed(1);
    this.propeller = prop;
  }







}
