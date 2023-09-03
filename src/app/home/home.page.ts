import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProdukService } from '../services/produk.service';
import { Product } from '../models/produk.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  data: any;

  constructor(private produk: ProdukService, private router: Router) {}

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.produk.getData().subscribe(
      response => {
        this.data = response;
        console.log(this.data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  delete(product_id: number) {
    this.produk.deleteData(product_id).subscribe(
      (response) => {
        console.log(response);
        // Remove the deleted product from the data array
        this.data = this.data.filter((item: Product) => item.product_id !== product_id);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  edit(product: Product) {
    this.router.navigate(['/edit-produk', product]);
  }
}