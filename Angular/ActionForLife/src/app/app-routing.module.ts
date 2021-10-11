import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { CategoryEditComponent } from './edit/category-edit/category-edit.component';
import { CategoryDeleteComponent } from './delete/category-delete/category-delete.component';
import { ProductEditComponent } from './edit/product-edit/product-edit.component';
import { ProductDeleteComponent } from './delete/product-delete/product-delete.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {path: '', redirectTo:'login', pathMatch: 'full'},
  {path: "login", component: LoginComponent},
  {path: "home", component: HomeComponent},
  {path: "registration", component: RegistrationComponent},
  {path: "products", component: ProductsComponent},
  {path: "category-edit/:id", component: CategoryEditComponent},
  {path: "category-delete/:id", component: CategoryDeleteComponent},
  {path: "product-edit/:id", component: ProductEditComponent},
  {path: "product-delete/:id", component: ProductDeleteComponent},
  {path: "about-us", component: AboutUsComponent},
  {path: "about", component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }