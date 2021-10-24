import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppCommonModule } from './app-common.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BatteryComponent } from './battery/battery.component';
import { BoatComponent } from './boat/boat.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { HomeComponent } from './home/home.component';
import { MotorComponent } from './motor/motor.component';
import { PerformanceComponent } from './performance/performance.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MotorComponent,
    BoatComponent,
    BatteryComponent,
    PerformanceComponent,
    CalculatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppCommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
