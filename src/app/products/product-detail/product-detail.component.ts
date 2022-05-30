import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import ProductsService from 'src/app/Shared/Service/products.service';
import { ProductObject } from 'src/app/Shared/interfaces';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product!:ProductObject;
  constructor(private productService:ProductsService, private route: ActivatedRoute,) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.productService.getProduct(id).subscribe((item)=>this.product=item)
  }

}
