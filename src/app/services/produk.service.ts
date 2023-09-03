import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/produk.model';



@Injectable({
  providedIn: 'root'
})
export class ProdukService {

  apiUrl = 'http://localhost:3000/api/products';

  constructor(private http: HttpClient) { }


  getData(): Observable<any> {
    return this.http.get(`${this.apiUrl}`);
  }

  createData(data: Product): Observable<any> {
    return this.http.post(`${this.apiUrl}`, data);
  }

  deleteData(product_id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${product_id}`);
  }

  updateData(product_id: number, data: Product): Observable<any> {
    return this.http.put(`${this.apiUrl}/${product_id}`, data);
  }


  getDataById(product_id: number): Observable<Product> {
    const url = `${this.apiUrl}/${product_id}`;
    return this.http.get<Product>(url);
  }


}

