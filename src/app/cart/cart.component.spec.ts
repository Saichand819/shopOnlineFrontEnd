import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { ProductObject } from '../Shared/interfaces';
import { UserDetailsService } from '../Shared/Service/user-details.service';

import { CartComponent } from './cart.component';

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;
  let routerSpy = {navigate: jasmine.createSpy('navigate')};
  let userService : UserDetailsService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartComponent ]
    })
    .compileComponents();
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        RouterTestingModule
      ],
      providers : [ UserDetailsService, { provide: Router, useValue: routerSpy }]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    userService = TestBed.inject(UserDetailsService)
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get the cart on calling getCall', ()=>{
     let cart =[
        {
          "id": 1,
          "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
          "price": 109.95,
          "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
          "category": "men's clothing",
          "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        }
     ]

     let spy = spyOn(userService, 'getCart').and.returnValue(of(cart));
     component.getCart();
     expect(spy).toHaveBeenCalled()
     expect(component.cart).toEqual(cart)

  })

  it('should get the cart on calling getCall', ()=>{
    
    let cart1: ProductObject[] =[]
    let inde= 0;
 
    let spy = spyOn(userService, 'removeFromCart').and.returnValue(of(cart1));
    let spy2 = spyOn( component , 'getCart');
    component.removeFromCart(inde);
    expect(spy).toHaveBeenCalled()
    expect(spy2).toHaveBeenCalled();
    

  })

  it('should navigate on checkout',()=>{
     component.proceedToCheckOut();
     expect (routerSpy.navigate).toHaveBeenCalledWith(['/checkout']);
  })


});
