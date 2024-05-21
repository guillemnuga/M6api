export interface product {
    id: number;
    referencia: string;
    nombre: string;
    precio: number;
    descripcion: string;
    imagen: string;
  }

  export interface ProductResults {
    gatos: product[]
}
