import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IntroModalPageRoutingModule } from './intro-modal-routing.module';

import { IntroModalPage } from './intro-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IntroModalPageRoutingModule
  ],
  declarations: [IntroModalPage]
})
export class IntroModalPageModule {}
