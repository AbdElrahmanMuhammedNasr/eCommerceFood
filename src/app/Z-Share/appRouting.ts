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
import { SignUpComponent } from '../sign-up/sign-up.component';
import { CategoryComponent } from '../home/category/category.component';
import { SnapshotPorductsComponent } from '../home/snapshot-porducts/snapshot-porducts.component';
import { ProductDetailsComponent } from '../home/snapshot-porducts/product-details/product-details.component';
import { AddProductComponent } from '../profile/add-product/add-product.component';


const routes: Routes = [
  {path: '', redirectTo: '/home/category', pathMatch: 'full'},
  {path: 'home', component: HomeComponent, children: [
    {path: 'category', component: CategoryComponent},
    {path: 'snapshot', component: SnapshotPorductsComponent},
    {path: 'productDetails', component: ProductDetailsComponent }

  ]},
  {path: 'notification', component: NotificationsComponent},
  {path: 'history', component: HistoryCartComponent},
  {path: 'profile', component: ProfileComponent, children: [
    {path: 'userData', component: UserDataComponent},
    {path: 'products', component: ProductsComponent},
    {path: 'comments', component: CommentsComponent},
    {path: 'add', component: AddProductComponent},
  ]},
  {path: 'login', component: LoginComponent},
  {path: 'signUp', component: SignUpComponent},

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
