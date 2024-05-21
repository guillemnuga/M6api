import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { product, ProductResults } from '../interfaces/productos.module';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private urlLocal = "http://localhost:3000/api/productos";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }


  constructor(private http: HttpClient) { };
  
  GetProducts():Observable<ProductResults> {
    return this.http.get<ProductResults>(this.urlLocal);
  }

  GetProductById(productId: number): Observable<ProductResults> {
    return this.http.get<ProductResults>(`${this.urlLocal}/${productId}`);
  }

  DeleteProduct(productId: number): Observable<any> {
    return this.http.delete(`${this.urlLocal}/${productId}`);
  }
  
  AddProduct(product: product): Observable<product> {
    return this.http.post<product>(this.urlLocal, product, this.httpOptions);
  }



}
