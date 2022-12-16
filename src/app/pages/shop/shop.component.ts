import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  constructor(private api:ApiService) { }
  Shoes:any=[]
  searchText=""

  ngOnInit(): void {
    this.api.getShoes().subscribe(shoe=>{
      this.Shoes=shoe
    })
  }

  add(value:any){
    this.api.addToCart(value)
    window.alert('Your product has been added to the cart!')
  }

  cat=["men","women","boys","girls"]
  catname:any=undefined
}