import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes : Routes = [
  { path: '', redirectTo: '/menu', pathMatch: 'full'},
  { path: 'menu', loadChildren: () => import('./features/menu/menu.module').then(m => m.MenuModule)}

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
