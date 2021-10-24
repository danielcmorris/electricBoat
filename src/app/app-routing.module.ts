import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculatorComponent } from './calculator/calculator.component';
import { HomeComponent } from './home/home.component';
import { ManualComponent } from './manual/manual.component';

const routes: Routes = [{
  path: '',
  //canActivate: [AuthService],
  children: [
 
    {
      path: '',
      component: CalculatorComponent,
      data: { title: 'Calculator', breadcrumb: 'Calculator' }
    },
    {
      path: 'manual',
      component: ManualComponent,
      data: { title: 'Manual', breadcrumb: 'manual' }
    },
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
 export class AppRoutingModule { 
 
}
