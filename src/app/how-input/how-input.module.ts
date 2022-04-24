import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HowInputPageRoutingModule } from './how-input-routing.module';

import { HowInputPage } from './how-input.page';
import { ComponentsModule } from '../components.module';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HowInputPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [HowInputPage]
})
export class HowInputPageModule {}
