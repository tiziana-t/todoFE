import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullListContainerComponent } from './components/full-list-container/full-list-container.component';
import { FullListSingleItemComponent } from './components/full-list-single-item/full-list-single-item.component';
import { FullListRoutingModule } from './full-list-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    FullListContainerComponent,
    FullListSingleItemComponent
  ],
  imports: [
    CommonModule,
    FullListRoutingModule,
    SharedModule
  ],
  exports: [
    FullListContainerComponent
  ]
})
export class FullListModule { }
