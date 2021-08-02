import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    size: number = 0;

    constructor(){
    }

    increase() : number{
        this.size++;
        console.log('product service : increase')

        return this.size;
    }
}