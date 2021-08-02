import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductItemComponent } from './products/item/productItem.component';
import { ProductListComponent } from './products/productList.component'
import { TresFuteModule } from './tres-fute/tres-fute.module';
@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TresFuteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
