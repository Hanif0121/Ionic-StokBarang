import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateProdukPage } from './create-produk.page';

const routes: Routes = [
  {
    path: '',
    component: CreateProdukPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateProdukPageRoutingModule {}
