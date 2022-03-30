import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RoomInputPageRoutingModule } from './room-input-routing.module';

import { RoomInputPage } from './room-input.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RoomInputPageRoutingModule
  ],
  declarations: [RoomInputPage]
})
export class RoomInputPageModule {}
