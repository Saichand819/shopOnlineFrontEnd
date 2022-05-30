import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductObject } from '../Shared/interfaces';
import { UserDetailsService } from '../Shared/Service/user-details.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  cart:ProductObject[]=[];
  totalPrice!:number;
  address:string="";
  checkoutDone:boolean=false;
  sub!:Subscription;
  constructor(private userService:UserDetailsService ) { }

  ngOnInit(): void {
    this.sub=this.userService.getCart().subscribe((item)=>{
      this.cart=item;
      if(item.length!==0){
          let x:any=[];
          this.cart.map((each)=>x.push(each.price))
          this.totalPrice=this.returnCost(x)
      }
    })
  }
  
  returnCost(x:any){
     return x.reduce((a:any,b:any)=>a+b)
  }
  proceedToCheckOut(){
     let x:any=this.userService.orderPlaced();
     x.subscribe((each:any)=>{
      this.checkoutDone=true;
     })
  }

}
