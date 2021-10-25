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

import {MatTabsModule} from '@angular/material/tabs';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatRadioModule } from '@angular/material/radio';
import { MatExpansionModule } from '@angular/material/expansion'
import { MatProgressBarModule, MatProgressBar } from '@angular/material/progress-bar';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule, MatCheckboxModule, MatListModule, MatButtonModule,MatTabsModule,
   
  
    MatSidenavModule,
    MatIconModule,
    MatListModule,
 
    MatSelectModule,
    MatMenuModule,
    MatSnackBarModule,  //this is basically toaster popups
  
    MatInputModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    
  ],
  declarations: [

  ],
  providers: [],
  exports: [ 
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule, 
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatTabsModule,
 
    BrowserAnimationsModule],
  entryComponents: []
})
export class AppCommonModule { }