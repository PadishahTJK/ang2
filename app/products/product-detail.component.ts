import {Component,OnInit} from '@angular/core';
import{ IProduct } from './product';
import { ProductService } from './product.service';
// To get  the parameter from URL 
import{ActivatedRoute,Router} from '@angular/router';

@Component({
   templateUrl:'app/products/product-detail.component.html'
})

export class ProductDetailComponent{
   pageTitle: string = 'Product Detail Information';
   product:IProduct;


// To retrieve  appropriate  productor 
   constructor(private _route: ActivatedRoute,
               private _router:Router)
    {
         console.log(this._route.snapshot.params['id']);

   }

   ngOnInit():void {
     // + Convert  String  to numeric ID
      let id = +this._route.snapshot.params['id'];
      this.pageTitle +=`${id}`;
   }

   onBack(): void {
     this._router.navigate(['/products']);
   }

 
 }                                                                                           