import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InputEditPage } from './input-edit.page';

const routes: Routes = [
  {
    path: '',
    component: InputEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InputEditPageRoutingModule {}
