import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FullListContainerComponent } from './components/full-list-container/full-list-container.component';

const routes : Routes = [
  { path: '', component: FullListContainerComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class FullListRoutingModule { }
