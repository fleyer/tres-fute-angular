import { Component } from '@angular/core';
import { ProductService } from './service/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test-angular';
  size : number = 0
  
  constructor(private productService : ProductService){
    this.size = productService.size
  }


}
