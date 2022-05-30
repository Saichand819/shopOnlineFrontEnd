import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { ProductObject } from '../interfaces';

@Injectable({
  providedIn: 'root'
})

export class UserDetailsService {
  
  url:string="http://localhost:8080";
  userCart:ProductObject[]=[];
  userOrders:any=[]
  isUserLoggedIn:boolean=false;
  loginSubject:BehaviorSubject<any> = new BehaviorSubject(false);
  login$:Observable<boolean> = this.loginSubject.asObservable();

  constructor(private http:HttpClient) { }
  
  getCart(){
    let headers = new HttpHeaders({ 'Access-Control-Allow-Origin': 'http://localhost:8080','content-type': 'application/json'}  )
    return this.http.get<ProductObject[]>(`${this.url}/cart`,{headers: headers})
  }
  
  addToCart(payload:ProductObject){
    console.log(payload)
    let headers = new HttpHeaders({ 'Access-Control-Allow-Origin': 'http://localhost:8080','content-type': 'application/json'}  )
    return this.http.post<ProductObject>(`${this.url}/cart/add-product`,payload,{headers: headers})
  }

  removeFromCart(inde:any){
    // let x:any=[]
    // this.userCart.map((each,index)=>{
    //    if(index!==inde){
    //       // console.log(each)
    //       x.push(each);
    //    }
    // })
    // this.userCart=x;
    let headers = new HttpHeaders({ 'Access-Control-Allow-Origin': 'http://localhost:8080','content-type': 'application/json'}  )
    return this.http.get<ProductObject[]>(`${this.url}/cart/${inde}`,{headers: headers})
  }

  getIsUserLoggedIn():Observable<boolean>{
     return of(this.isUserLoggedIn)
  }

  userLoggingIn(status:boolean):void{
    // of(true).subscribe((item)=>{
    //   this.isUserLoggedIn=item
    //   console.log(this.isUserLoggedIn)
    // })
    // this.isUserLoggedIn=!this.isUserLoggedIn
    // this.isUserLoggedIn[0]=true
    // this.isUserLoggedIn.map((each)=>each=true)
    this.isUserLoggedIn=true
    this.loginSubject.next(true);
  }
  
  orderPlaced(){
    let headers = new HttpHeaders({ 'Access-Control-Allow-Origin': 'http://localhost:8080','content-type': 'application/json'}  )
    return this.http.get<ProductObject[]>(`${this.url}/checkout`,{headers: headers})
  }
}
