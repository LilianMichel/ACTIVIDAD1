import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewFormularioPage } from './view-formulario.page';

const routes: Routes = [
  {
    path: '',
    component: ViewFormularioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewFormularioPageRoutingModule {}
