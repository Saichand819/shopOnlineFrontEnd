import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { AddProductComponent } from './add-product/add-product.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { CheckoutComponent } from './checkout/checkout.component';

export const routes: Routes = [
  { path:"home", component:HomeComponent},
  { path: 'products', component:ProductsComponent},
  { path: 'add-product', component: AddProductComponent},
  { path: 'products/:id', component:ProductDetailComponent},
  { path: 'cart', component: CartComponent},
  { path: 'checkout', component: CheckoutComponent},
  { path: '',redirectTo:'/home',pathMatch:"full"},
  { path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
