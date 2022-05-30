import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { ProductObject } from '../Shared/interfaces';
import { UserDetailsService } from '../Shared/Service/user-details.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, OnDestroy {

  cart!:ProductObject[];
  sub!:Subscription;
  constructor(private userService:UserDetailsService, private router:Router) { }

  ngOnInit(): void {
    this.getCart();
    console.log("gugu")
  }

  getCart(){
    this.sub=this.userService.getCart().subscribe((cart)=> this.cart=cart);
  }

  removeFromCart(inde:Number):void{
    // let x:any=[]
    // this.cart.map((each,index)=>{
    //    if(index!==inde){
    //       // console.log(each)
    //       x.push(each);
    //    }
    // })
    // this.cart=x;
    let x:any = this.userService.removeFromCart(inde).subscribe((each:any)=>{console.log(each)
                    this.getCart();
                 })
   
  }

  proceedToCheckOut():void{
    this.router.navigate(['/checkout'])
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
  

}
