import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductObject } from 'src/app/Shared/interfaces';

import { EachproductComponent } from './eachproduct.component';

describe('EachproductComponent', () => {
  let component: EachproductComponent;
  let fixture: ComponentFixture<EachproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EachproductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EachproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should emit the product',()=>{
    let product : ProductObject =  {
      "id": 1,
      "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      "price": 109.95,
      "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      "category": "men's clothing",
      "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    }

    let spy = spyOn(component.AddToCartEvent, 'emit');

    component.AddToCart(product);

    expect(spy).toHaveBeenCalledWith(product)

  })
});
