import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrls: ['./viewproduct.component.css']
})
export class ViewproductComponent implements OnInit {

  constructor(private ar: ActivatedRoute, private api:ApiService) { }
  Shoes:any=[]
  shoeid:any
  ngOnInit(): void {
    this.api.getShoes().subscribe(shoe=>{
      this.Shoes=shoe
    })
    this.ar.params.subscribe(id=>{
      this.shoeid=id
    })
  }
  add(value:any){
    this.api.addToCart(value)
    window.alert('Your product has been added to the cart!')
  }
}
