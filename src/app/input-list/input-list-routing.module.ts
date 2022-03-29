import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InputListPage } from './input-list.page';

const routes: Routes = [
  {
    path: '',
    component: InputListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InputListPageRoutingModule {}
