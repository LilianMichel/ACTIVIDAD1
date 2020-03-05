import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'view-employeed',
    loadChildren: () => import('./view/view-employeed/view-employeed.module').then( m => m.ViewEmployeedPageModule)
  },
  {
    path: 'view-formulario',
    loadChildren: () => import('./pages/view-formulario/view-formulario.module').then( m => m.ViewFormularioPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
