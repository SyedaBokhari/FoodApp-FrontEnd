import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EndUsersComponent } from './end-users/end-users.component';
import { DishAdminComponent } from './dish-admin/dish-admin.component';
import { RestaurantAdminComponent } from './restaurant-admin/restaurant-admin.component';
import { OrderComponent } from './order/order.component';

const routes: Routes = [
  { path: '', component: EndUsersComponent},
  { path: 'dishes', component: DishAdminComponent},
  { path: 'restaurants', component: RestaurantAdminComponent },
  { path: 'order', component: OrderComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
