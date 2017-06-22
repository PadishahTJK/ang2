import { NgModule }  from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms';

import { StarComponent } from './star.component';


@NgModule({ 
    // Tut  deklarirovat tolko Componenti 
    declarations:[
        StarComponent
    ],
    imports:[ CommonModule ],
    // We can export smth  without importing it first 
    // We'r  defining  what we want to share
    exports: [
         CommonModule,
         FormsModule,
         StarComponent
    ]
})

export class SharedModule{

}