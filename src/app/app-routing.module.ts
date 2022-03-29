import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'input-list', pathMatch: 'full' },
  {
    path: 'input-create',
    loadChildren: () => import('./input-create/input-create.module').then( m => m.InputCreatePageModule)
  },
  {
    path: 'input-edit/:id',
    loadChildren: () => import('./input-edit/input-edit.module').then( m => m.InputEditPageModule)
  },
  {
    path: 'input-list',
    loadChildren: () => import('./input-list/input-list.module').then( m => m.InputListPageModule)
  },
  {
    path: 'input-detail',
    loadChildren: () => import('./input-detail/input-detail.module').then( m => m.InputDetailPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
