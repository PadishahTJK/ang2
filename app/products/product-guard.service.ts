import{Injectable} from '@angular/core';
import {ActivatedRouteSnapshot,CanActivate,Router} from '@angular/router';

@Injectable()

export class ProductDetailGuard implements CanActivate {
    //DI
    constructor(private _router:Router){

    }
    
    canActivate(route :ActivatedRouteSnapshot): boolean{

        // +  at the behinning Converts  URL to the  Number
        let id = + route.url[1].path;

    // checking  if id is not  number  or  less  than  1 
        if(isNaN(id) || id < 1){
            alert('Invalid product ID');

            // start  a new  navigation  to redirect to list page
            this._router.navigate['/products'];

            // abort current  navigation 
            return false;
        }// check 
        return true;

    }// Method canActivate

}// Class  ProductDetailGuard