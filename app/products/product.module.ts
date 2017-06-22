import{ NgModule } from '@angular/core';
// import{ CommonModule } from '@angular/common';
// import{ FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

//import of Declarations
import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ProductFilterPipe } from './product-filter.pipe';
// import { StarComponent } from '../shared/star.component';

//import ProductDetailGuard
import { ProductDetailGuard } from './product-guard.service';
import { ProductService } from './product.service';
import{ SharedModule }  from '../shared/shared.module';

@NgModule({
    // moduleId:module.id,
    declarations:[
           ProductListComponent,
           ProductDetailComponent,
           ProductFilterPipe
        //    StarComponent 
    ],

    imports: [
        //  CommonModule,
        //  FormsModule,
         SharedModule,    

         RouterModule.forChild([
             {path:'products',component:ProductListComponent },
               {path:'product/:id',
               canActivate:[ProductDetailGuard],
               component:ProductDetailComponent},
         ])
    ],
    providers:[
        ProductService,
        ProductDetailGuard
    ]

})


export class ProductModule{

}

