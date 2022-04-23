import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConditionInputPageRoutingModule } from './condition-input-routing.module';

import { ConditionInputPage } from './condition-input.page';
import { ConditionButtonComponent } from './condition-button/condition-button.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConditionInputPageRoutingModule
  ],
  declarations: [ConditionInputPage, ConditionButtonComponent]
})
export class ConditionInputPageModule {}
