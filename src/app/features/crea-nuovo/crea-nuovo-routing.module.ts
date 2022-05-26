import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CreaNuovoFormComponent } from './components/crea-nuovo-form/crea-nuovo-form.component';

const routes : Routes = [
  {path: '', component: CreaNuovoFormComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CreaNuovoRoutingModule { }
