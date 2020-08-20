import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { HomeComponent } from '../home/home.component';
import { NotificationsComponent } from '../notifications/notifications.component';
import { HistoryCartComponent } from '../history-cart/history-cart.component';
import { ProfileComponent } from '../profile/profile.component';
import { UserDataComponent } from '../profile/user-data/user-data.component';
import { ProductsComponent } from '../profile/products/products.component';
import { CommentsComponent } from '../profile/comments/comments.component';


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'notification', component: NotificationsComponent},
  {path: 'history', component: HistoryCartComponent},
  {path: 'profile', component: ProfileComponent, children:[
    {path: 'userData', component: UserDataComponent},
    {path: 'products', component: ProductsComponent},
    {path: 'comments', component: CommentsComponent},
  ]},
  {path: 'login', component: LoginComponent},

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ]

})
export class AppRouting {

}
