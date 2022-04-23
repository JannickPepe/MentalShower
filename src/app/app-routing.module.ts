import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'room-input', pathMatch: 'full' },
  {
    path: 'input-create',
    loadChildren: () =>
      import('./input-create/input-create.module').then(
        (m) => m.InputCreatePageModule
      ),
  },
  {
    path: 'input-edit/:id',
    loadChildren: () =>
      import('./input-edit/input-edit.module').then(
        (m) => m.InputEditPageModule
      ),
  },
  {
    path: 'input-list',
    loadChildren: () =>
      import('./input-list/input-list.module').then(
        (m) => m.InputListPageModule
      ),
  },
  {
    path: 'input-detail',
    loadChildren: () =>
      import('./input-detail/input-detail.module').then(
        (m) => m.InputDetailPageModule
      ),
  },
  {
    path: 'room-input',
    loadChildren: () =>
      import('./room-input/room-input.module').then(
        (m) => m.RoomInputPageModule
      ),
  },
  {
    path: 'how-input',
    loadChildren: () =>
      import('./how-input/how-input.module').then((m) => m.HowInputPageModule),
  },
  {
    path: 'condition-input',
    loadChildren: () =>
      import('./condition-input/condition-input.module').then(
        (m) => m.ConditionInputPageModule
      ),
  },
  {
    path: 'overview',
    loadChildren: () =>
      import('./overview/overview.module').then((m) => m.OverviewPageModule),
  },

  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminPageModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
