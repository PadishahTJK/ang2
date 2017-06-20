"use strict";
//IMPORTS  members  we need
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
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
var core_1 = require("@angular/core");
var product_service_1 = require("./products/product.service");
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
var AppComponent = (function () {
    function AppComponent() {
        this.pageTitle = 'Product Management';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'pm-app',
        template: "\n    <div>\n        <nav class='navbar navbar-default'>\n            <div class='container-fluid'>\n                <a class='navbar-brand'>{{pageTitle}}</a>\n                <ul class='nav navbar-nav'>\n                    <li><a [routerLink]=\"['/welcome']\">Home</a></li>\n                    <li><a [routerLink]=\"['/products']\">Product List</a></li>\n                </ul>\n            </div>\n        </nav>\n        <div class='container'>\n            <router-outlet></router-outlet>\n        </div>\n     </div>\n   \n     ",
        //Creating  a provider  that  can  return 
        providers: [product_service_1.ProductService]
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map