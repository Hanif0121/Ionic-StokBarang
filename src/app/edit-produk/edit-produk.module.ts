import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { IonicModule } from '@ionic/angular'; 
import { EditProdukPageRoutingModule } from './edit-produk-routing.module';

import { EditProdukPage } from './edit-produk.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule, 
    ReactiveFormsModule,
    EditProdukPageRoutingModule
  ],
  declarations: [EditProdukPage]
})
export class EditProdukPageModule {}
