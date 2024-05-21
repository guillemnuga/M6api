import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { product } from '../interfaces/productos.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ApiService } from '../services/api.service';


@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {

  constructor(private ApiService:ApiService, private fb:FormBuilder) { }
 
  addproduct = this.fb.group({
    nombre: [''],
    referencia: [''],
    precio: [0],
    imagen: [''],
    descripcion: ['']
  });
 
  submit() {
    const newProduct: product = {
      id: 0,
      referencia: this.addproduct.value.referencia ? this.addproduct.value.referencia : 'default',
      nombre: this.addproduct.value.nombre ? this.addproduct.value.nombre : 'default',
      descripcion: this.addproduct.value.descripcion ? this.addproduct.value.descripcion : 'default',
      precio: this.addproduct.value.precio ? this.addproduct.value.precio : 0,
      imagen: this.addproduct.value.imagen ? this.addproduct.value.imagen : 'default'
      
    };
 
    // Llamamos al método AddProduct del servicio para insertar el nuevo producto
    this.ApiService.AddProduct(newProduct).subscribe({
      next: (result) => {
        console.log('Producto insertado correctamente:', result);
      },
      error: (error) => {
        console.error('Error al insertar producto:', error);
      }
    });
 
    this.addproduct.reset();
  }
}
 

