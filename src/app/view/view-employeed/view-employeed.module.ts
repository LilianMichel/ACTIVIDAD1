import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewEmployeedPageRoutingModule } from './view-employeed-routing.module';

import { ViewEmployeedPage } from './view-employeed.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewEmployeedPageRoutingModule
  ],
  declarations: [ViewEmployeedPage]
})
export class ViewEmployeedPageModule {}
