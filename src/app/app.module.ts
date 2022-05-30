import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { FavoriteProductComponent } from './favorite-product/favorite-product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { StringslicePipe } from './stringslice.pipe';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductAddComponent } from './product-add/product-add.component';
import { PhotosComponent } from './photos/photos.component';
import {HttpClientModule} from '@angular/common/http';
import { UserShowComponent } from './user-show/user-show.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductCardComponent,
    FavoriteProductComponent,
    ProductDetailsComponent,
    StringslicePipe,
    LoginComponent,
    ProductAddComponent,
    PhotosComponent,
    UserShowComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
