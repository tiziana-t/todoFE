import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemoTrovatiComponent } from './components/memo-trovati/memo-trovati.component';
import { MemoTrovatiRoutingModule } from './memo-trovati-routing.module';



@NgModule({
  declarations: [
    MemoTrovatiComponent
  ],
  imports: [
    CommonModule,
    MemoTrovatiRoutingModule
  ],
  exports: [
    MemoTrovatiComponent
  ]
})
export class MemoTrovatiModule { }
