import {Component, OnInit} from "@angular/core";
import{IProduct}  from './product';
import{ProductService} from './product.service';


@Component({
    selector:'pm-products',
    moduleId:module.id,
    templateUrl:'product-list.component.html',
    styleUrls:['product-list.component.css']
})
// A class  that  defines  our  associated  code 
export class ProductListComponent implements OnInit{
    imageWidth: number =50;
    imageMargin: number =4;
    showImage: boolean =false;
    listFilter: string;
    PageTitle: string ="Product List !"; 

    products : IProduct[];

    errorMessage:string;

 //    let sub x = x.subscribe(valueFn,errorFn,completeFn);

    /*
      Когда вы используете контейнер внедрения зависимостей, 
      вы выполняете сборку компонентов вне самих компонентов
       в одном месте, которое называется корень компоновки.
        Это то место, где вы пишете вот это:
    */
// here  should  be  Services  injected  as a DependencyInjection 
constructor(private _productService: ProductService){

}


    
      // Life cycle  Hook perform any initialization
   //It is  great place to retrieve data  from a template 
    ngOnInit(): void {
        console.log('In OnInit  method / Lifecycle  Ininitial Method is started');
       // Here  comes   the code of Constructor 
      //  this.products =this._productService.getProduct();

      //Subscribe  and  waits  fot  the data  or  Notification
      this._productService.getProducts()
               .subscribe(
                    products => this.products =products,
                    error =>this.errorMessage =<any>error);

    }

    
    toggleImage(): void{
        this.showImage = !this.showImage;
    }
 

    onRatingClicked(message: string): void {
        this.PageTitle = 'Product List: ' + message;
    }

    // onRatingClicked(message: string):void{
    //     this.PageTitle ='Product List:' +message; 
    // }

    // onNotify(message : string):void{

    // }

    
} 