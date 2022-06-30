import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { BurgerComponent } from './components/burgerBuilder/burger/burger.component';
import { OrdersComponent } from './components/orders/list/orders.component';
import { AuthComponent } from './components/login/auth.component';
import { CheckoutsummaryComponent } from './components/checkoutsummary/checkoutsummary.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '', component: BurgerComponent },
  { path: 'login', component: AuthComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'checkout', component: CheckoutsummaryComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
