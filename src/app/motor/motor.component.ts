import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Motor, PowerController } from '../models/motor';

@Component({
  selector: 'app-motor',
  templateUrl: './motor.component.html',
  styleUrls: ['./motor.component.scss']
})
export class MotorComponent implements OnInit {
  @Output() myMotor = new EventEmitter<Motor>();

  motor = new Motor();

  constructor() {

    this.motor.makeModel = "Motenergy ME1616"
    this.motor.maxVoltageRating = 80;
    this.motor.rpmAtMaxVoltage = 8000;
    this.motor.maxContinuousCurrentRating = 130;
    this.motor.maxContinuousTorqueRating = 130;
    this.motor.motorEfficiencyRating = .92;
    this.motor.motorTorqueConstantLbsPerFtPerAmp = 0.1475124299;
    this.motor.motorVoltageConstantRpmsPerVolt = 100;
    this.motor.motorshaftToPropShaftReductionRatio = 2.0;
    let c = new PowerController();
    c.makeModel = "Sevcon G4845";
    c.minVoltageRating = 48;
    c.maxVoltageRating = 69.6;
    c.MaxPeakVoltage = 450;
    c.maxOneHourRating = 180;
    c.maxContinuousCurrentRating = 0;
    this.motor.powerController = c;

  }

  ngOnInit(): void {
    this.save()

  }
  save() {
    this.myMotor.emit(this.motor);
  }
}
