import { Routes } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { ProductosComponent } from './productos/productos.component';
import { AdminComponent } from './admin/admin.component';
 
export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: ContentComponent
    },
    {
        path: 'productos',
        component: ProductosComponent
    },
    {
        path: 'admin',
        component: AdminComponent
    }
];
 