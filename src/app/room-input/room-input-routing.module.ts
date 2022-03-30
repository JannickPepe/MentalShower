import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RoomInputPage } from './room-input.page';

const routes: Routes = [
  {
    path: '',
    component: RoomInputPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoomInputPageRoutingModule {}
