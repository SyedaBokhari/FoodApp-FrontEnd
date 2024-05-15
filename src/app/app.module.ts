import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { RestaurantAdminComponent } from './restaurant-admin/restaurant-admin.component';
import { DishAdminComponent } from './dish-admin/dish-admin.component';
import { EndUserDashboardComponent } from './end-user-dashboard/end-user-dashboard.component';
import { RestaurantEndUserComponent } from './restaurant-end-user/restaurant-end-user.component';
import { DishEndUserComponent } from './dish-end-user/dish-end-user.component';
import { CartComponent } from './cart/cart.component';
import { EndUserLoginComponent } from './end-user-login/end-user-login.component';
import { EndUserSignupComponent } from './end-user-signup/end-user-signup.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { OrderComponent } from './order/order.component';
import { EndUsersComponent } from './end-users/end-users.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    AdminDashboardComponent,
    RestaurantAdminComponent,
    DishAdminComponent,
    EndUserDashboardComponent,
    RestaurantEndUserComponent,
    DishEndUserComponent,
    CartComponent,
    EndUserLoginComponent,
    EndUserSignupComponent,
    CheckoutComponent,
    ConfirmationComponent,
    OrderComponent,
    EndUsersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
