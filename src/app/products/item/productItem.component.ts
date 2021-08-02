import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Product } from "src/app/products";

@Component({
    selector: 'product-item',
    templateUrl: './productItem.component.html',
    styleUrls: ['./productItem.component.scss']
})

export class ProductItemComponent implements OnInit {
    @Input() product!: Product;

    constructor(
        private route: ActivatedRoute
    ){}

    ngOnInit(){

    }
}