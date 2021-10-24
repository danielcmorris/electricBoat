import { Battery } from "./battery";
import { Motor } from "./motor";
import { Propeller } from "./propeller";

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
        let sv = this.kw * 1000 / this.battery.stringVoltage;
        return sv;
    }

    public get batteryCurrent(): number {
        //=M37/(($O$30*$O$29)/$O$31)
        let bc = this.stringCurrent / ((this.battery.count * this.battery.voltage) / this.battery.stringVoltage)
        return bc;
    }



    public get runTime50(): number {
        let rt50 = ((this.battery.ampHourRating / Math.pow(this.batteryCurrent, this.battery.peukertNumber)) * 0.5) * 60;
        return rt50;

    }
    public get runTime80(): number {
        let rt50 = ((this.battery.ampHourRating / Math.pow(this.batteryCurrent, this.battery.peukertNumber)) * 0.8) * 60;
        return rt50;

    }

    public get runTimeHour(): number {
        let rt50 = ((this.battery.ampHourRating / Math.pow(this.batteryCurrent, this.battery.peukertNumber)));
        return rt50;

    }
    public get runTimeFull(): number {
        let rt50 = ((this.battery.ampHourRating / Math.pow(this.batteryCurrent, this.battery.peukertNumber))) * 60;
        return rt50;

    }



    constructor(speed: number, prop: Propeller, private motor: Motor, private battery: Battery) {
         this.speed = speed;
        this.strSpeed = speed.toFixed(1);
        this.propeller = prop;
    }







}
