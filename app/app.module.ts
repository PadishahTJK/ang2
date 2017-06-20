// 
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//Dobavlyaem  Form  
import {FormsModule}  from "@angular/forms";
//HTTP SERVICE PROVIDER
import { HttpModule } from '@angular/http';

// import { FormsModule }   from '@angular/forms';
import { AppComponent }  from './app.component';
import {ProductListComponent} from './products/product-list.component';
import {TestListComponent}  from  './test/test-list.component';
import {TaftishIlmComponent} from './taftish/taftish-ilm.component';
import{ProvComponent} from './prov/prov.component';  
//Dobavlyaem   ProductFilterPipe  tochnee importiruem 
import{ProductFilterPipe} from './products/product-filter.pipe';
import{StarComponent} from './shared/star.component';

import{WelcomeComponent} from './home/welcome.component';
import{ ProductDetailComponent } from  './products/product-detail.component';
//Router
import{RouterModule} from '@angular/router';

@NgModule({
  imports: [ BrowserModule,
             FormsModule,
             HttpModule,
             RouterModule.forRoot([
               { path:'products',component:ProductListComponent },
               {path:'product/:id',component:ProductDetailComponent},
               {path:'welcome',component:WelcomeComponent},
               {path:'',redirectTo:'welcome',pathMatch:'full'},
               {path:'**',redirectTo:'welcome',pathMatch:'full'}
             ])  
           ],
  declarations: [ AppComponent,
                ProductListComponent,
                ProductFilterPipe,
                
                TestListComponent,
                TaftishIlmComponent,
                ProvComponent,
                StarComponent,
                WelcomeComponent,
                ProductDetailComponent

                ],

  bootstrap: [ AppComponent ]
})
export class AppModule {
     
 }
