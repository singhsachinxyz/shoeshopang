import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private api:ApiService) { }
  Products:any=[]
  total=0
  showCart=false
  ngOnInit(): void {
    this.Products=this.api.getCartProducts()
    this.Products.forEach((element: any) => {
      this.total+=element.price
    });
    if(this.Products.length>0){
      this.showCart=true
    }
  }
  remove(value:any){
    for( var i = 0; i < this.Products.length; i++){ 
      
      if ( this.Products[i].id == value.id) { 
        
        this.Products.splice(i, 1);
        this.total=0
          this.Products.forEach((element: any) => {
            this.total+=element.price
          });
          this.api.remove()
          if(this.Products.length==0){
            this.showCart=false
          }
          break
      }
      
  }
  }
  clear(){
    while(this.Products.length > 0) {
      this.Products.pop();
  }
    this.total=0
    this.api.remove()
    this.showCart=false

  }
  
}