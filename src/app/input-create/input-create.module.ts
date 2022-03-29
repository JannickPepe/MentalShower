import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InputCreatePageRoutingModule } from './input-create-routing.module';

import { InputCreatePage } from './input-create.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InputCreatePageRoutingModule
  ],
  declarations: [InputCreatePage]
})
export class InputCreatePageModule {}
