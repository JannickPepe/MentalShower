import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InputCreatePage } from './input-create.page';

const routes: Routes = [
  {
    path: '',
    component: InputCreatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InputCreatePageRoutingModule {}
