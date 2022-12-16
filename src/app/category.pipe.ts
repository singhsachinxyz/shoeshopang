import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  transform(array: any, catname: any): any {
    if(catname==undefined){
      return array;
    }
    else{
      let products = array.filter((prod: any)=>{
        if(prod.category==catname){
          return true
        }
        else{return false}
      })
      return products
    }
  }

}
