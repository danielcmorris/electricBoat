import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppCommonModule } from './app-common.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BatteryComponent } from './battery/battery.component';
import { BoatComponent } from './boat/boat.component';
import { HomeComponent } from './home/home.component';
import { MotorComponent } from './motor/motor.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MotorComponent,
    BoatComponent,
    BatteryComponent
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
