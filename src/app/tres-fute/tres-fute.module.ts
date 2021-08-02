import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TresFuteRoutingModule } from './tres-fute-routing.module';
import { BaseComponent } from './components/base/base.component';
import { TresFuteViewComponent } from './views/tresFuteView.component';
import { GridComponent } from './components/grid/grid.component';


@NgModule({
  declarations: [
    TresFuteViewComponent,
    BaseComponent,
    GridComponent
  ],
  imports: [
    CommonModule,
    TresFuteRoutingModule
  ]
})
export class TresFuteModule { }
