import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreaNuovoFormComponent } from './components/crea-nuovo-form/crea-nuovo-form.component';
import { CreaNuovoRoutingModule } from './crea-nuovo-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CreaNuovoFormComponent,
  ],
  imports: [
    CommonModule,
    CreaNuovoRoutingModule,
    FormsModule
  ],
  exports: [
    CreaNuovoFormComponent
  ]
})
export class CreaNuovoModule { }
