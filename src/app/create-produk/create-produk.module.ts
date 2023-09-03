import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateProdukPageRoutingModule } from './create-produk-routing.module';

import { CreateProdukPage } from './create-produk.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateProdukPageRoutingModule
  ],
  declarations: [CreateProdukPage]
})
export class CreateProdukPageModule {}
