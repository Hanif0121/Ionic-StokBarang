import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'create-produk',
    loadChildren: () => import('./create-produk/create-produk.module').then( m => m.CreateProdukPageModule)
  },
  {
    path: 'edit-produk/:id',
    loadChildren: () => import('./edit-produk/edit-produk.module').then( m => m.EditProdukPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
