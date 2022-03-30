import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HowInputPage } from './how-input.page';

const routes: Routes = [
  {
    path: '',
    component: HowInputPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HowInputPageRoutingModule {}
