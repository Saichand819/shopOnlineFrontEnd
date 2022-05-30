import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { ProductObject } from 'src/app/Shared/interfaces';
import ProductsService from 'src/app/Shared/Service/products.service';
import { UserDetailsService } from 'src/app/Shared/Service/user-details.service';



@Component({
  selector: 'app-custom-cell',
  template: `
    <a [routerLink]="['/products',id]" style="color:black; text-decoration:none" *ngIf="rendering==='title'">
        {{value}}
    </a>
    
    <button class="btn btn-primary " (click)="addToCart(product)" *ngIf="rendering === 'addToCartButton'">
          Add to Cart
    </button>
   
    <p *ngIf="rendering === 'price' ">
       $ {{value}}
    </p>
  `,
  styles: [
  ]
})

export class CustomCellComponent implements OnInit, ICellRendererAngularComp {
  constructor(private productService:ProductsService, private userService:UserDetailsService) { }
  value!:string;
  id!:number;
  rendering!:any;
  product!:ProductObject

  agInit(params: ICellRendererParams & any): void {
     this.value=params.value
     this.id=params.data.id
     this.rendering=params.rendering;
     this.product=params.data
     console.log(params)
  }

  refresh(): boolean {
    return false
  }

  ngOnInit(): void {
  }

  addToCart(payload:ProductObject):void{
    let x:any = this.userService.addToCart(payload)
    x.subscribe((each:any)=>console.log(each))
  }

}
