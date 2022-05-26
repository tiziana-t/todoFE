import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormModificaComponent } from './components/form-modifica/form-modifica.component';
import { FormModificaRoutingModule } from './form-modifica-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FormModificaComponent
  ],
  imports: [
    CommonModule,
    FormModificaRoutingModule,
    FormsModule
  ],
  exports:[
    FormModificaComponent
  ]
})
export class FormModificaModule { }
