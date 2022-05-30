import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { ProductObject } from '../Shared/interfaces';
import { UserDetailsService } from '../Shared/Service/user-details.service';

import { CheckoutComponent } from './checkout.component';

describe('CheckoutComponent', () => {
  let component: CheckoutComponent;
  let fixture: ComponentFixture<CheckoutComponent>;
  let userService : UserDetailsService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckoutComponent ],
    })
    .compileComponents();
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutComponent);
    userService = TestBed.inject(UserDetailsService)
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get all the cart items on initialization', ()=>{

    let cart : ProductObject[] = [{
      "id": 1,
      "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      "price": 109.95,
      "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      "category": "men's clothing",
      "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    }]

    let spy = spyOn(userService, 'getCart').and.returnValue(of(cart))

    component.ngOnInit();

    expect(spy).toHaveBeenCalled();
    expect(component.totalPrice).toEqual(109.95)
  })

  it('should return total cost on calling return cost',()=>{

    let x=[1,2,3];
    let y=component.returnCost(x);
    expect(y).toBe(6);
  })

  it('should empty cart on proceed to checkout',()=>{
     
     let spy = spyOn( userService , 'orderPlaced' ).and.returnValue(of([]));

     component.proceedToCheckOut();

     expect(spy).toHaveBeenCalled();
     expect(component.checkoutDone).toBe(true)
  })

});
