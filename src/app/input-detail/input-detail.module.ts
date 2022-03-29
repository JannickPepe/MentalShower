import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InputDetailPageRoutingModule } from './input-detail-routing.module';

import { InputDetailPage } from './input-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InputDetailPageRoutingModule
  ],
  declarations: [InputDetailPage]
})
export class InputDetailPageModule {}
