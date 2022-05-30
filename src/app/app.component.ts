import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { routingObject } from './Shared/interfaces';
import { UserDetailsService } from './Shared/Service/user-details.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'shopping';
  isUserLoggedIn!:boolean;
  sub!:Subscription;
  routingList:routingObject[]=[
    { routeName:'Home', routePath: '/home'},
    { routeName:'Products', routePath:'/products'},
    { routeName: 'Add-Product', routePath: '/add-product'},
    { routeName: 'Cart', routePath:'/cart' }
  ]
  constructor(private userService:UserDetailsService){}

  ngOnInit(): void {
    //  this.sub=this.userService.getIsUserLoggedIn().subscribe(each=>this.isUserLoggedIn=each)
    
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  LogTheUser():void{
    this.userService.userLoggingIn(true);
  }
}
