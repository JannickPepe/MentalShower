import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConditionInputPage } from './condition-input.page';

const routes: Routes = [
  {
    path: '',
    component: ConditionInputPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConditionInputPageRoutingModule {}
