import { Component, OnInit,EventEmitter, Output } from '@angular/core';
import { Battery } from '../models/battery';
 
@Component({
  selector: 'app-battery',
  templateUrl: './battery.component.html',
  styleUrls: ['./battery.component.scss']
})
export class BatteryComponent implements OnInit {

  @Output() myBattery = new EventEmitter<Battery>();
  battery = new Battery();
  constructor() { }

  ngOnInit(): void {
    this.battery.makeModel="Chevy Bolt 10S";
    this.battery.bci="N/A";
    this.battery.ampHourRating=170;
    this.battery.count = 2;
    this.battery.voltage = 36;
    this.battery.stringVoltage= 72;
    this.battery.peukertNumber= 1.06;
    this.save()
  }

  save() {
    this.myBattery.emit(this.battery);
  }

}
