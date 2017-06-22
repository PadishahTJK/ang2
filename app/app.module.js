"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
//Dobavlyaem  Form  
// import {FormsModule}  from "@angular/forms";
//HTTP SERVICE PROVIDER
var http_1 = require("@angular/http");
// import { FormsModule }   from '@angular/forms';
var app_component_1 = require("./app.component");
var test_list_component_1 = require("./test/test-list.component");
var taftish_ilm_component_1 = require("./taftish/taftish-ilm.component");
var prov_component_1 = require("./prov/prov.component");
//Dobavlyaem   ProductFilterPipe  tochnee importiruem 
// import{ProductFilterPipe} from './products/product-filter.pipe';
// import{StarComponent} from './shared/star.component';
var welcome_component_1 = require("./home/welcome.component");
// import{ ProductDetailComponent } from  './products/product-detail.component';
//Router
var router_1 = require("@angular/router");
//
// import{ ProductDetailGuard } from './products/product-guard.service';
//IMPORTIRUEM PRODUCT.MODULE.TS
var product_module_1 = require("./products/product.module");
/*  Organize the  pieces  of 0our application
    Arrange them into blocks
    Extend  our application  with capabilities  from external libraries
    Provide a template resolution Environment  -> which means  helps us resolving Directives
    and Pipes in our Component
    Aggregate and  re-export

*/
var AppModule = (function () {
    /**
     *    Exports Array og  @NgModule
     * allows us  to share  with other components  directives and pipes
     * with other Modules
     *
     */
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule,
            //  FormsModule,
            http_1.HttpModule,
            router_1.RouterModule.forRoot([
                //  {path:'products',component:ProductListComponent },
                //  {path:'product/:id',
                //  canActivate:[ProductDetailGuard],
                //  component:ProductDetailComponent},
                { path: 'welcome', component: welcome_component_1.WelcomeComponent },
                { path: '', redirectTo: 'welcome', pathMatch: 'full' },
                { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
            ]),
            product_module_1.ProductModule
        ],
        declarations: [app_component_1.AppComponent,
            welcome_component_1.WelcomeComponent,
            // ProductListComponent,
            // ProductDetailComponent,  
            // ProductFilterPipe,
            // StarComponent,
            test_list_component_1.TestListComponent,
            taftish_ilm_component_1.TaftishIlmComponent,
            prov_component_1.ProvComponent,
        ],
        //Service Providers
        // providers:[ProductDetailGuard], 
        bootstrap: [app_component_1.AppComponent]
    })
    /**
     *    Exports Array og  @NgModule
     * allows us  to share  with other components  directives and pipes
     * with other Modules
     *
     */
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map