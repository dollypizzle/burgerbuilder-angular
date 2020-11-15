import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BurgerComponent } from './components/burgerBuilder/burger/burger.component';
import { BurgerIngredientComponent } from './components/burgerBuilder/burger/burgerIngredient/burger-ingredient.component';
import { ControlsComponent } from './components/burgerBuilder/controls/controls.component';
import { OrderSummaryComponent } from './components/orders/summary/order-summary.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthComponent } from './components/login/auth.component';
import { OrdersComponent } from './components/orders/list/orders.component';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { CheckoutsummaryComponent } from './components/checkoutsummary/checkoutsummary.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BurgerComponent,
    BurgerIngredientComponent,
    ControlsComponent,
    OrderSummaryComponent,
    OrdersComponent,
    AuthComponent,
    CheckoutsummaryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
