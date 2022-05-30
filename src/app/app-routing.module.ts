import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { LoginComponent } from './login/login.component';
import { UserShowComponent } from './user-show/user-show.component';
import { PhotosComponent } from './photos/photos.component';

const routes: Routes = [
  { path: 'products', component: ProductListComponent },
  { path: 'products/add', component: ProductAddComponent },
  { path: 'products/:id', component: ProductDetailsComponent },
  { path: 'users/login', component: LoginComponent },
  { path: 'users/profile/:id', component: UserShowComponent },
  { path: 'photos', component: PhotosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
