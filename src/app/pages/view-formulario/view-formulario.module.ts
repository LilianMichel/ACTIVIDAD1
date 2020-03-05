import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewFormularioPageRoutingModule } from './view-formulario-routing.module';

import { ViewFormularioPage } from './view-formulario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewFormularioPageRoutingModule
  ],
  declarations: [ViewFormularioPage]
})
export class ViewFormularioPageModule {}
