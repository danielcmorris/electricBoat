import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculatorComponent } from './calculator/calculator.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [{
  path: '',
  //canActivate: [AuthService],
  children: [
 
    {
      path: 'calc',
      component: CalculatorComponent,
      data: { title: 'Calculator', breadcrumb: 'Calculator' }
    },
    {
      path: '',
      component: HomeComponent,
      data: { title: 'Home', breadcrumb: 'Home' }
    },
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
 export class AppRoutingModule { 
 
}
