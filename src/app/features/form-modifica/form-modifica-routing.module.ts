import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule, Routes } from '@angular/router';
import { FormModificaComponent } from './components/form-modifica/form-modifica.component';

const routes : Routes = [
  {path: ':id_to_change', component: FormModificaComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class FormModificaRoutingModule { }
