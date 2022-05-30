import { HttpClient } from "@angular/common/http";
import { fakeAsync, TestBed } from "@angular/core/testing";
import { defer } from "rxjs";
import ProductsService from "./products.service";
import {
    HttpClientTestingModule,
    HttpTestingController,
  } from '@angular/common/http/testing';
import { ProductObject } from "../interfaces";

describe('Product Service',()=>{
    let productService:ProductsService;
    let httpController: HttpTestingController;
    let url = 'http://localhost:8080'
    
    beforeEach(()=>{
       TestBed.configureTestingModule({
           imports: [HttpClientTestingModule]
       })
       productService = TestBed.inject(ProductsService);
       httpController = TestBed.inject(HttpTestingController);
    })

    it('is created',()=>{
        expect(productService).toBeDefined();
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

        productService.addProduct(newProduct).subscribe((data)=>{
            expect(data).toEqual(newProduct);
        })

        const request = httpController.expectOne({
            method : 'POST',
            url: `${url}/products/add-product`,
        })

        request.flush(newProduct)
    })
    
})