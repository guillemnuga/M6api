import { Component, importProvidersFrom, OnInit } from '@angular/core';
import {ProductResults, product} from '../interfaces/productos.module';
import { ApiService } from '../services/api.service';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [AsyncPipe],
  providers: [ApiService],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent implements OnInit {
  public products$!: Observable<ProductResults>;
  
  constructor(private service: ApiService) { }

  ngOnInit(): void {
    this.products$ = this.service.GetProducts();
  }

  deleteProduct(productId: number): void {
    this.service.DeleteProduct(productId).subscribe(() => {
      this.products$ = this.service.GetProducts();
    });
  }
  
}
