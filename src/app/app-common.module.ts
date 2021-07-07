import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";


import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatRadioModule } from '@angular/material/radio';
import { MatExpansionModule } from '@angular/material/expansion'
import { MatProgressBarModule, MatProgressBar } from '@angular/material/progress-bar';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule, MatCheckboxModule, MatListModule, MatButtonModule,
    MatSelectModule,
    MatRadioModule, MatExpansionModule, MatProgressBarModule,

    //  BrowserModule,
    RouterModule,
    // FlexLayoutModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTooltipModule,
    // MatOptionModule,
    MatSelectModule,
    MatMenuModule,
    MatSnackBarModule,  //this is basically toaster popups
    MatGridListModule,
    MatToolbarModule,
    // MatButtonModule,
    // MatRadioModule,
    // MatCheckboxModule,
    MatCardModule,
    // MatProgressBarModule,
    MatExpansionModule,
    MatProgressBarModule,
    MatInputModule,
    MatFormFieldModule,
    BrowserAnimationsModule
  ],
  declarations: [

  ],
  providers: [],
  exports: [ CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule, MatInputModule,
    MatCardModule, MatCheckboxModule, MatListModule, MatButtonModule,
    MatSelectModule,
    MatRadioModule, MatExpansionModule, MatProgressBarModule,

    //  BrowserModule,
    RouterModule,
    // FlexLayoutModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTooltipModule,
    // MatOptionModule,
    MatSelectModule,
    MatMenuModule,
    MatSnackBarModule,  //this is basically toaster popups
    MatGridListModule,
    MatToolbarModule,
    // MatButtonModule,
    // MatRadioModule,
    // MatCheckboxModule,
    MatCardModule,
    // MatProgressBarModule,
    MatExpansionModule,
    MatProgressBarModule,
    BrowserAnimationsModule],
  entryComponents: []
})
export class AppCommonModule { }