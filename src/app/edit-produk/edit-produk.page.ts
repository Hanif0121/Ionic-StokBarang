import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProdukService } from '../services/produk.service';
import { Product } from '../models/produk.model';

@Component({
  selector: 'app-edit-produk',
  templateUrl: './edit-produk.page.html',
  styleUrls: ['./edit-produk.page.scss'],
})
export class EditProdukPage implements OnInit {
  form!: FormGroup;
  product: Product | null = null;
  product_id: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private produk: ProdukService,
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({
      product_name: ['', Validators.required],
      product_price: ['', Validators.required],
    });
  }
  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.product_id = params['id'];
      this.getData(this.product_id);
    });
  }

  getData(product_id: number) {
    this.produk.getDataById(product_id).subscribe(
      (response: Product) => {
        this.product = response;
        this.initializeForm();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  initializeForm() {
    this.form = this.formBuilder.group({
      product_name: [this.product?.product_name || '', Validators.required],
      product_price: [this.product?.product_price || '', Validators.required],
    });
  }

  onSubmit() {
    if (this.form.valid && this.product) {
      let data = this.form.value;
      if (this.product.product_id !== undefined) {
        this.produk.updateData(+this.product.product_id, data).subscribe(
          () => {
            this.form.reset();
            this.router.navigate(['/home']);
          }
        );
      }
    }
  }
}
