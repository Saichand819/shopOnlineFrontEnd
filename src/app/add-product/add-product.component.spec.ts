import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {FormsModule} from "@angular/forms"
import { AddProductComponent } from './add-product.component';
import { ActivatedRoute, Router } from '@angular/router';
import ProductsService from '../Shared/Service/products.service';
import { ProductsComponent } from '../products/products.component';
import { SpyLocation } from '@angular/common/testing'
import {routes} from "../app-routing.module"
import {Location} from "@angular/common"
import { Type } from '@angular/core';
import { defer, observable, Observable, of } from 'rxjs';
import { ProductObject } from '../Shared/interfaces';

describe('AddProductComponent', () => {
  let component: AddProductComponent;
  let fixture: ComponentFixture<AddProductComponent>;
  let routerSpy = {navigate: jasmine.createSpy('navigate')};


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddProductComponent ]
    })
    .compileComponents();
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        RouterTestingModule.withRoutes(routes),
        FormsModule
      ],
      providers : [ProductsService , { provide: Router, useValue: routerSpy }]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should route to products', (done : DoneFn) => {
    component.goToProducts()
    expect (routerSpy.navigate).toHaveBeenCalledWith(['/products']);
    done()
  })

  it('must go to products route on submit',()=>{
    let productService=TestBed.inject(ProductsService)
    let productToAdd : ProductObject =  {
      "id": 1,
      "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      "price": 109.95,
      "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      "category": "men's clothing",
      "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    }
    let x : Observable<ProductObject> = of(productToAdd) ;
    let spy = spyOn( productService, 'addProduct').and.returnValue(x)
    component.onSubmit(true);
    expect (routerSpy.navigate).toHaveBeenCalledWith(['/products']);
    expect(spy).toHaveBeenCalled()
  })

  it('should set id correctly when the onIt happen',()=>{
    let productService=TestBed.inject(ProductsService);
    let productList=[  {
      "id": 1,
      "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      "price": 109.95,
      "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      "category": "men's clothing",
      "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    }]

    let spy = spyOn( productService, 'getProductList').and.returnValue(of(productList))

    component.ngOnInit();

    expect(component.id).toEqual(2)

  })
});
