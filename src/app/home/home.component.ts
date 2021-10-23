import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MonoTypeOperatorFunction } from 'rxjs';

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



  motor: Motor = {
    makeModel: "Motenergy ME1616",
    maxVoltageRating: 80,
    rpmAtMaxVoltage: 8000,
    maxContinuousCurrentRating: 130,
    maxContinuousTorqueRating: 130,
    maxPeakCurrentRating: 0,
    maxPeakTorqueRating: 0,
    motorEfficiencyRating: .92,
    motorTorqueConstantLbsPerFtPerAmp: 0.1475124299,
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

  battery:Battery = {
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
  speeds = [.3, .4, .5, .6, .7, .8, .9, .95, 1, 1.05, 1.1, 1.15, 1.2, 1.25, 1.3, 1.35]

  constructor() {

    this.propeller = new Propeller();
    this.propeller.diameter = 14.00;
    this.propeller.rpmAtHullSpeed = 1300;
    this.propeller.maxHullSpeedInKnots = 6.57909;


    
    this.speeds.forEach(s => {
      let speed = this.speed(s);
      var p = new Performer(speed, this.propeller, this.motor, this.battery);

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
        this.csa = Math.PI * Math.pow(d, 2) / 2;
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

export class Motor {

  makeModel: string = '';
  maxVoltageRating: number = 0;
  rpmAtMaxVoltage: number = 0;
  maxContinuousCurrentRating: number = 0;
  maxContinuousTorqueRating: number = 0;
  maxPeakCurrentRating: number = 0;
  maxPeakTorqueRating: number = 0;
  motorEfficiencyRating: number = 0;
  motorTorqueConstantLbsPerFtPerAmp: number = 0;
  motorVoltageConstantRpmsPerVolt: number = 0;
  motorshaftToPropShaftReductionRatio: number = 0;


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


export class Battery {
  makeModel: string = "";
  bci: any ="";
  ampHourRating: number = 0;
  voltage: number = 0;
  count: number = 0;
  stringVoltage: number = 0;
  peukertNumber: number = 0;
}

export class Performer {
  strSpeed: string = "";
  speed: number = 0;
  propeller: Propeller;
  public get rpm(): number {
    let r = (((this.speed * 6080) / 60) / (0.55) * (12 / this.propeller.pitch))
    return r
  }

  public get hp(): number {

    let y = Math.pow(((Math.pow(this.rpm, 0.6) / 632.7) * this.propeller.diameter), (1 / 0.2))

    return y;
  }

  public get torque(): number {
    let t = (this.hp * 5252) / this.rpm
    return t;
  }

  public get thrust(): number {
    //=(((D37*$B$22/12)^0.67)*62.72)
    let t = (Math.pow((this.speed * this.rpm / 12), 0.67) * 62.72)
    return t
  }


  public get motorTorque(): number {
    //=E37/$H$28
    let t = this.torque / this.motor.motorshaftToPropShaftReductionRatio
    return t
  }

  public get motorRpm(): number {
    let mr = this.rpm * this.motor.motorshaftToPropShaftReductionRatio;
    return mr;
  }


  public get volts(): number {
    let v = this.motorRpm / this.motor.motorVoltageConstantRpmsPerVolt;
    return v
  }


  public get current(): number {

    //=(G37/$H$26)/($H$25-0.04)
    let c = (this.motorTorque / this.motor.motorTorqueConstantLbsPerFtPerAmp) / (this.motor.motorEfficiencyRating - 0.04);
    return c

  }

  public get kw(): number {
    let k = this.volts * this.current / 1000
    return k;
  }


  public get motorHp(): number {
    let mhp = this.kw * 1000 / 746
    return mhp;
  }


  public get stringCurrent(): number {
    let sv = this.kw * 1000/this.battery.stringVoltage;
    return sv;
  }

  public get batteryCurrent() : number{
    //=M37/(($O$30*$O$29)/$O$31)
    let bc = this.stringCurrent/((this.battery.count*this.battery.voltage)/this.battery.stringVoltage)
    return bc;
  }



  public get runTime50():number{
    let rt50 =((this.battery.ampHourRating/Math.pow(this.batteryCurrent,this.battery.peukertNumber))*0.5)*60;
    return rt50;

  }
  public get runTime80():number{
    let rt50 =((this.battery.ampHourRating/Math.pow(this.batteryCurrent,this.battery.peukertNumber))*0.8)*60;
    return rt50;

  }
  
  public get runTimeHour():number{
    let rt50 =((this.battery.ampHourRating/Math.pow(this.batteryCurrent,this.battery.peukertNumber)));
    return rt50;

  } 
   public get runTimeFull():number{
    let rt50 =((this.battery.ampHourRating/Math.pow(this.batteryCurrent,this.battery.peukertNumber)))*60;
    return rt50;

  }



  constructor(speed: number, prop: Propeller, private motor: Motor, private battery: Battery) {
    this.speed = speed;
    this.strSpeed = speed.toFixed(1);
    this.propeller = prop;
  }







}
