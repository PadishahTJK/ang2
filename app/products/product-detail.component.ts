import {Component,OnInit} from '@angular/core';
import{ IProduct } from './product';
// To get  the parameter from URL 
import{ActivatedRoute} from '@angular/router';

@Component({
   templateUrl:'app/products/product-detail.component.html'
})

export class ProductDetailComponent{
   pageTitle: string = 'Product Detail Information';
   product:IProduct;


// To retrieve  appropriate  productor 
   constructor(private _route:ActivatedRoute){
         console.log(this._route.snapshot.params['id']);

   }

   ngOnInit():void {
     // + Convert  String  to numeric ID
      let id = +this._route.snapshot.params['id'];
      this.pageTitle +=`${id}`;
   }


 }                                                                                           