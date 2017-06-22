import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//Dobavlyaem  Form  
// import {FormsModule}  from "@angular/forms";
//HTTP SERVICE PROVIDER
import { HttpModule } from '@angular/http';

// import { FormsModule }   from '@angular/forms';
import { AppComponent }  from './app.component';
import {ProductListComponent} from './products/product-list.component';
import {TestListComponent}  from  './test/test-list.component';
import {TaftishIlmComponent} from './taftish/taftish-ilm.component';
import{ProvComponent} from './prov/prov.component';  
//Dobavlyaem   ProductFilterPipe  tochnee importiruem 
// import{ProductFilterPipe} from './products/product-filter.pipe';
// import{StarComponent} from './shared/star.component';

import{WelcomeComponent} from './home/welcome.component';
// import{ ProductDetailComponent } from  './products/product-detail.component';
//Router
import{RouterModule} from '@angular/router';
//
// import{ ProductDetailGuard } from './products/product-guard.service';



//IMPORTIRUEM PRODUCT.MODULE.TS

import{ ProductModule } from './products/product.module';


/*  Organize the  pieces  of 0our application
    Arrange them into blocks
    Extend  our application  with capabilities  from external libraries
    Provide a template resolution Environment  -> which means  helps us resolving Directives 
    and Pipes in our Component
    Aggregate and  re-export

*/
@NgModule({
  imports: [ BrowserModule,
            //  FormsModule,
             HttpModule,
             RouterModule.forRoot([ 
              //  {path:'products',component:ProductListComponent },
              //  {path:'product/:id',
              //  canActivate:[ProductDetailGuard],
              //  component:ProductDetailComponent},
               {path:'welcome',component:WelcomeComponent},
               {path:'',redirectTo:'welcome',pathMatch:'full'}, 
               {path:'**',redirectTo:'welcome',pathMatch:'full'}
             ]),
             ProductModule
            
           ],
  declarations: [ AppComponent,
                  WelcomeComponent,
                // ProductListComponent,
                // ProductDetailComponent,  
                // ProductFilterPipe,
                // StarComponent,

                TestListComponent,
                TaftishIlmComponent, 
                ProvComponent,
                
                
                

                ], 
  //Service Providers
  // providers:[ProductDetailGuard], 
  bootstrap: [ AppComponent ]
})

/**
 *    Exports Array og  @NgModule
 * allows us  to share  with other components  directives and pipes
 * with other Modules
 * 
 */
export class AppModule {
     
 }
