import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './products/productList.component';
import { TresFuteViewComponent } from './tres-fute/views/tresFuteView.component';

const routes: Routes = [
  {path: 'products', component: ProductListComponent},
  {path: 'tres-fute', component: TresFuteViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
