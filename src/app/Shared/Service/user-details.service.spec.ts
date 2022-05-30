import {  TestBed } from "@angular/core/testing";
import {
    HttpClientTestingModule,
    HttpTestingController,
  } from '@angular/common/http/testing';
import { ProductObject } from "../interfaces";
import { UserDetailsService } from "./user-details.service";

describe('User Service',()=>{
    let userService:UserDetailsService;
    let httpController: HttpTestingController;
    let url = 'http://localhost:8080'
    
    beforeEach(()=>{
       TestBed.configureTestingModule({
           imports: [HttpClientTestingModule]
       })
       userService = TestBed.inject(UserDetailsService);
       httpController = TestBed.inject(HttpTestingController);
    })

    it('is created',()=>{
        expect(userService).toBeDefined();
    })
    
    it('should call addProduct and return added Book', ()=>{
        const newProduct: ProductObject = {
            "id": 1,
            "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
            "price": 109.95,
            "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
            "category": "men's clothing",
            "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        };

        userService.addToCart(newProduct).subscribe((data)=>{
            expect(data).toEqual(newProduct);
        })

        const request = httpController.expectOne({
            method : 'POST',
            url: `${url}/cart/add-product`,
        })

        request.flush(newProduct)
    })

    it('should remove an item form the cart and return the cart',()=>{
        
        const inde = 1;

        const cart: ProductObject[] =[];

        userService.removeFromCart(inde).subscribe((data)=>{
            expect(data).toEqual(cart);
        })
        
        const request = httpController.expectOne({
            method : 'GET',
            url: `${url}/cart/${inde}`,
        })

        request.flush(cart);

    })

    it('should empty cart on checkout',()=>{
        
    
        const cart: ProductObject[] =[];

        userService.orderPlaced().subscribe((data)=>{
            expect(data).toEqual(cart);
        })
        
        const request = httpController.expectOne({
            method : 'GET',
            url: `${url}/checkout`,
        })
        request.flush(cart);

    })

    it('should send is userLogged in or not',(done : DoneFn)=>{  
        userService.getIsUserLoggedIn().subscribe((data)=>{
            expect(data).toBe(false);
            done();
        })
    })

    it('should log the user on userLogged in ',(done : DoneFn)=>{  
        
        userService.userLoggingIn(true);
        userService.getIsUserLoggedIn().subscribe((data)=>{
            expect(data).toBe(true);
            done();
        })

    })
    
})