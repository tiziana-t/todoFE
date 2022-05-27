import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CercaMemoComponent } from './components/cerca-memo/cerca-memo.component';
import { CercaMemoRoutingModule } from './cerca-memo-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CercaMemoComponent
  ],
  imports: [
    CommonModule,
    CercaMemoRoutingModule,
    FormsModule
  ],
  exports: [
    CercaMemoComponent
  ]
})
export class CercaMemoModule { }
