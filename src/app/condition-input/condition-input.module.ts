import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConditionInputPageRoutingModule } from './condition-input-routing.module';

import { ConditionInputPage } from './condition-input.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConditionInputPageRoutingModule
  ],
  declarations: [ConditionInputPage]
})
export class ConditionInputPageModule {}
