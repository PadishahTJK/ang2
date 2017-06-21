//IMPORTS  members  we need

// import { Component } from '@angular/core';


// Component  Decorator  defines  METADATA
// @Component({
//     selector: 'pm-app',
//     template: `
//         <h1>Angular2: Getting Started   Let see  what it brings </h1>
//     `
// })
// // here defining  Properties  and Classes

// export class AppComponent { 
//     pageTitle: string = 'ProductMng';
// }


// @Component({
//     selector: 'pm-app',
//     template: '<div> <h1> {{pageTilte}} </h1> </div>'
    
// })

// export class AppComponent{
//     pageTitle: string = 'productManagement';
// }

// @Component({
//     selector:'pm-app',
//     template:' <h1>Angular 2: Keep it Learning </h1>'
// })

// export class AppComponent{

// }

import { Component } from '@angular/core';
import {ProductService} from './products/product.service';

// @Component({
//    // selector:'<pm-app>',
//    selector: 'pm-app',
//    template: `
//         <div> 
//         <h1> {{pageTilte}} </h1>
//         <div> First Component </div>
//         </div>
//           `
// })

@Component({
    selector: 'pm-app',
    template: `
    <div>
        <nav class='navbar navbar-default'>
            <div class='container-fluid'>
                <a class='navbar-brand'>{{pageTitle}}</a>
                <ul class='nav navbar-nav'>
                    <li><a [routerLink]="['/welcome']">Home</a></li>
                    <li><a [routerLink]="['/products']">Product List</a></li>
                </ul>
            </div>
        </nav>
        <div class='container'>
            <router-outlet></router-outlet>
        </div>
     </div>
    
     `,
     //Creating  a provider  that  can  return 
    providers:[ProductService]

})

export class AppComponent {
    pageTitle: string = 'Product Management';
    
}