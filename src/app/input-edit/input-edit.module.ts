import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InputEditPageRoutingModule } from './input-edit-routing.module';

import { InputEditPage } from './input-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InputEditPageRoutingModule
  ],
  declarations: [InputEditPage]
})
export class InputEditPageModule {}
