import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { AddProductComponent } from './add-product/add-product.component';
import { CartComponent } from './cart/cart.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { CheckoutComponent } from './checkout/checkout.component';
import ProductsService from './Shared/Service/products.service';
import {HttpClientModule} from "@angular/common/http";
import { EachproductComponent } from './products/eachproduct/eachproduct.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import {AgGridModule} from 'ag-grid-angular';
import { CustomCellComponent } from './products/custom-cell/custom-cell.component'

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    AddProductComponent,
    CartComponent,
    NotFoundComponent,
    HomeComponent,
    ProductDetailComponent,
    CheckoutComponent,
    EachproductComponent,
    LoginComponent,
    CustomCellComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AgGridModule.withComponents([])
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
