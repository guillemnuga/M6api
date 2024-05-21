import { Injectable } from '@angular/core';
import {product} from '../interfaces/productos.module';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {


  private products: BehaviorSubject<product[]> = new BehaviorSubject<product[]>([]);
 
  constructor() { }
 
  public sendProduct(product: product): void {
    const currentProducts = this.products.getValue();
    currentProducts.push(product);
    this.products.next(currentProducts);
  }
 


}
