import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InputDetailPage } from './input-detail.page';

const routes: Routes = [
  {
    path: '',
    component: InputDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InputDetailPageRoutingModule {}
