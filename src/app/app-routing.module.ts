import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'introduction', pathMatch: 'full' },
  {
    path: 'room-input',
    loadChildren: () => import('./room-input/room-input.module').then( m => m.RoomInputPageModule)
  },
  {
    path: 'how-input',
    loadChildren: () => import('./how-input/how-input.module').then( m => m.HowInputPageModule)
  },
  {
    path: 'condition-input',
    loadChildren: () => import('./condition-input/condition-input.module').then( m => m.ConditionInputPageModule)
  },
  {
    path: 'overview',
    loadChildren: () => import('./overview/overview.module').then( m => m.OverviewPageModule)
  },
  {
    path: 'introduction',
    loadChildren: () => import('./introduction/introduction.module').then( m => m.IntroductionPageModule)
  },
  {
    path: 'intro-modal',
    loadChildren: () => import('./intro-modal/intro-modal.module').then( m => m.IntroModalPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
