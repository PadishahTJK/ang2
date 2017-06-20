"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var product_service_1 = require("./product.service");
var ProductListComponent = (function () {
    //    let sub x = x.subscribe(valueFn,errorFn,completeFn);
    /*
      Когда вы используете контейнер внедрения зависимостей,
      вы выполняете сборку компонентов вне самих компонентов
       в одном месте, которое называется корень компоновки.
        Это то место, где вы пишете вот это:
    */
    // here  should  be  Services  injected  as a DependencyInjection 
    function ProductListComponent(_productService) {
        this._productService = _productService;
        this.imageWidth = 50;
        this.imageMargin = 4;
        this.showImage = false;
        this.PageTitle = "Product List !";
    }
    // Life cycle  Hook perform any initialization
    //It is  great place to retrieve data  from a template 
    ProductListComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('In OnInit  method / Lifecycle  Ininitial Method is started');
        // Here  comes   the code of Constructor 
        //  this.products =this._productService.getProduct();
        this._productService.getProducts()
            .subscribe(function (products) { return _this.products = products; }, function (error) { return _this.errorMessage = error; });
    };
    ProductListComponent.prototype.toggleImage = function () {
        this.showImage = !this.showImage;
    };
    ProductListComponent.prototype.onRatingClicked = function (message) {
        this.PageTitle = 'Product List: ' + message;
    };
    return ProductListComponent;
}());
ProductListComponent = __decorate([
    core_1.Component({
        selector: 'pm-products',
        moduleId: module.id,
        templateUrl: 'product-list.component.html',
        styleUrls: ['product-list.component.css']
    })
    // A class  that  defines  our  associated  code 
    ,
    __metadata("design:paramtypes", [product_service_1.ProductService])
], ProductListComponent);
exports.ProductListComponent = ProductListComponent;
//# sourceMappingURL=product-list.component.js.map