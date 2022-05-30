import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductObject } from '../Shared/interfaces';
import ProductsService from '../Shared/Service/products.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
   
  newProduct!:ProductObject;
  title:string="";
  category:string="";  
  description:string="";
  price!:Number;
  image:string="";
  id!:number;

  constructor(private productService:ProductsService, private router:Router) { }

  ngOnInit(): void {
      this.productService.getProductList().subscribe((products)=>{
      this.id=products.length+1
      console.log(this.id)
    });
    console.log("add-product")
  }

  onSubmit(form:any){
    console.log(form)
    if(form){
      let newProduct={id:this.id,title:this.title,price:this.price,category:this.category,description:this.description,image:""}
      console.log(this.id)
      let x:any = this.productService.addProduct(newProduct).subscribe((data)=>this.goToProducts())
    }
   
  }

  goToProducts(){
    this.router.navigate(['/products'])
  }

}
