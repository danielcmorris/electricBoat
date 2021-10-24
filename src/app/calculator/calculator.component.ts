import { Component, OnInit } from '@angular/core';
import { Battery } from '../models/battery';
import { Boat } from '../models/boat';
import { Motor, PowerController } from '../models/motor';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {
  boat:Boat =new Boat();
  motor:Motor= new Motor();
  battery:Battery = new Battery;
  controller:PowerController = new PowerController()
  constructor() { }

  ngOnInit(): void {
  }
  myBoat($e:Boat){
    console.log('myBoat',$e);
    this.boat = new Boat();
    this.boat = $e;
   }
  myMotor($e:Motor){
    console.log('myMotor',$e);
    this.motor = new Motor();
    this.motor = $e;
    this.controller = this.motor.powerController;
  }
  myBattery($e:Battery){
    console.log('myBattery',$e);
    this.battery = new Battery();
    this.battery = $e;
  }

}
