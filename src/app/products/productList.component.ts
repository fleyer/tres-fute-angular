import { Component } from '@angular/core';

import { products } from '../products';
import { ProductService } from '../service/product.service';

@Component({
    selector: 'products',
    templateUrl: './productList.component.html',
    styleUrls: ['./productList.component.scss']
})
export class ProductListComponent {
    products = products;
    size : number = 0

    constructor(private productService : ProductService){

    }

    increase(){
        this.size = this.productService.increase()
    }
}