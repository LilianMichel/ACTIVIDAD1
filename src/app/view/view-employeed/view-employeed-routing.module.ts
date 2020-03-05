import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewEmployeedPage } from './view-employeed.page';

const routes: Routes = [
  {
    path: '',
    component: ViewEmployeedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewEmployeedPageRoutingModule {}
