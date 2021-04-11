import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {FormsModule} from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import {AppRouting} from './Z-Share/appRouting';

import { HomeComponent } from './home/home.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { HistoryCartComponent } from './history-cart/history-cart.component';
import { SingleNotificationsComponent } from './notifications/single-notifications/single-notifications.component';
import { ProfileComponent } from './profile/profile.component';
import { UserDataComponent } from './profile/user-data/user-data.component';
import { ProductsComponent } from './profile/products/products.component';
import { CommentsComponent } from './profile/comments/comments.component';
import { ProductComponent } from './profile/products/product/product.component';
import { CommentComponent } from './profile/comments/comment/comment.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { CategoryComponent } from './home/category/category.component';
import { SnapshotPorductsComponent } from './home/snapshot-porducts/snapshot-porducts.component';
import { ProductDetailsComponent } from './home/snapshot-porducts/product-details/product-details.component';
import { AddProductComponent } from './profile/add-product/add-product.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    HomeComponent,
    NotificationsComponent,
    HistoryCartComponent,
    SingleNotificationsComponent,
    ProfileComponent,
    UserDataComponent,
    ProductsComponent,
    CommentsComponent,
    ProductComponent,
    CommentComponent,
    SignUpComponent,
    CategoryComponent,
    SnapshotPorductsComponent,
    ProductDetailsComponent,
    AddProductComponent,
    FooterComponent,
  //


  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRouting,
    HttpClientModule,
    BrowserAnimationsModule,
    //
    MatFormFieldModule,
    MatIconModule,
    MatMenuModule,
    MatCardModule,
    MatTableModule


    //
    // StoreModule.forRoot({}),


  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
