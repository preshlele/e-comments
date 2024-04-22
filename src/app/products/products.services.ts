import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import {  Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private appUrl = environment.appUrl;

  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<any> {
    return this.http.get(`${this.appUrl}/products`);
  }

  searchProducts(query: string): Observable<any> {
    return this.http.get(`${this.appUrl}/products?q=${query}`);
  }

  getSingleProduct(id: number): Observable<any> {
    return this.http.get(`${this.appUrl}/products/${id}`);
  }
}
