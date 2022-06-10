import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes : Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'login', loadChildren: () =>(import('./features/login/login.module').then(m=>m.LoginModule))}
  { path: 'menu', loadChildren: () => import('./features/menu/menu.module').then(m => m.MenuModule)},
  { path: 'getAll', loadChildren: () => import('./features/full-list/full-list.module').then(m => m.FullListModule)},
  { path: 'creaNuovo', loadChildren:() => import('./features/crea-nuovo/crea-nuovo.module').then(m =>m.CreaNuovoModule)},
  { path: 'modifica', loadChildren:() => import('./features/form-modifica/form-modifica.module').then(m => m.FormModificaModule)},
  { path: 'cercaMemo', loadChildren:()=> import('./features/cerca-memo/cerca-memo.module').then(m => m.CercaMemoModule)},
  { path: 'memoTrovati', loadChildren:()=>import('./features/memo-trovati/memo-trovati.module').then(m=>m.MemoTrovatiModule)}

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
