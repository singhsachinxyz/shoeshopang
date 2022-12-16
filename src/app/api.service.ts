import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  CartProducts:any=[]
  Count:any=[{'no':this.CartProducts.length}]

  getShoes(){
    return this.http.get("assets/shoes.json")
  }
  addToCart(product:any){
    this.CartProducts.push(product)
    this.Count.pop()
    this.Count.push({'no':this.CartProducts.length})
  }
  getCartProducts(){
    return this.CartProducts
  }
  remove(){
    this.Count.pop()
    this.Count.push({'no':this.CartProducts.length})
  }

}