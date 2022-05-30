import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { UserDetailsService } from '../Shared/Service/user-details.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isUserLoggedIn!:Observable<any>;

  sub?:Subscription;
  constructor(private userService:UserDetailsService) { }

  ngOnInit(): void {
    // this.sub=this.userService.getIsUserLoggedIn().subscribe(each=>this.isUserLoggedIn=each)
    this.isUserLoggedIn=this.userService.login$;
  }

  LogTheUser():void{
    console.log(this.isUserLoggedIn,this.userService.isUserLoggedIn)

    this.userService.userLoggingIn(true);
    // this.isUserLoggedIn=true;
    console.log(this.isUserLoggedIn,this.userService.isUserLoggedIn)
  }
}
