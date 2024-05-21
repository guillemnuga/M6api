import { Component } from '@angular/core';
import { HeaderComponent } from '../app/header/header.component';
import { FooterComponent } from '../app/footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { ProductosComponent } from './productos/productos.component';
import { ContentComponent } from './content/content.component';
 
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, ProductosComponent, RouterOutlet, ContentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pagina_m6';
}