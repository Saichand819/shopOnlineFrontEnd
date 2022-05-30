import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ColumnApi, GridApi, ICellRendererParams, RowNode } from 'ag-grid-community';
import { of } from 'rxjs';
import { ProductObject } from 'src/app/Shared/interfaces';
import ProductsService from 'src/app/Shared/Service/products.service';
import { UserDetailsService } from 'src/app/Shared/Service/user-details.service';

import { CustomCellComponent } from './custom-cell.component';

describe('CustomCellComponent', () => {
  let component: CustomCellComponent;
  let fixture: ComponentFixture<CustomCellComponent>;
  let userService : UserDetailsService;
  let productService : ProductsService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomCellComponent ]
    })
    .compileComponents();
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    userService = TestBed.inject(UserDetailsService);
    productService = TestBed.inject(ProductsService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initiate agint',()=>{
    component.agInit({data : {id :1}, rendering : 'title' , value : 'hey'});
    expect(component.id).toBe(1)
  })

  it('should initiate refresh',()=>{

    // let x= component.refresh({data : {id :1},  value : 'hey'});
    let x = component.refresh();

    expect(x).toBe(false)
    
  })

  it('Should add to cart on click of add to product',()=>{
     
    let productToAdd : ProductObject =  {
      "id": 1,
      "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      "price": 109.95,
      "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      "category": "men's clothing",
      "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    } 

    let spy = spyOn( userService , 'addToCart').and.returnValue(of(productToAdd));
    
    component.addToCart(productToAdd);
    
    expect(spy).toHaveBeenCalled()


  })


});
