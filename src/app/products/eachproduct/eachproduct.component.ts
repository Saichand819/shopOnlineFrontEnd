import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductObject } from 'src/app/Shared/interfaces';

@Component({
  selector: 'app-eachproduct',
  templateUrl: './eachproduct.component.html',
  styleUrls: ['./eachproduct.component.css']
})
export class EachproductComponent implements OnInit {
  @Input() product!:ProductObject;
  @Output() AddToCartEvent=new EventEmitter<ProductObject>();

  constructor() { }

  ngOnInit(): void {
  }

  AddToCart(product:ProductObject):void{
     this.AddToCartEvent.emit(product)
  }

}
