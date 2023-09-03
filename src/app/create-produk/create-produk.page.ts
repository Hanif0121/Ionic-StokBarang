import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ProdukService } from '../services/produk.service';
import { Product } from '../models/produk.model';

@Component({
  selector: 'app-create-produk',
  templateUrl: './create-produk.page.html',
  styleUrls: ['./create-produk.page.scss'],
})

export class CreateProdukPage implements OnInit {

  product_name = '';
  product_price = 0;


  constructor(private produk: ProdukService) {}

  ngOnInit() {}

  create() {
    const data: Product = {
      product_name: this.product_name,
      product_price: this.product_price
    };

    // console.log(data)
    this.produk.createData(data).subscribe(
      response => {
        console.log(response);
        // Reset form
        this.product_name = '';
        this.product_price = 0;
      },
      error => {
        console.log(error);
      }
    );
  }

}