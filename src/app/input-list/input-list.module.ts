import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InputListPageRoutingModule } from './input-list-routing.module';

import { InputListPage } from './input-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InputListPageRoutingModule
  ],
  declarations: [InputListPage]
})
export class InputListPageModule {}
