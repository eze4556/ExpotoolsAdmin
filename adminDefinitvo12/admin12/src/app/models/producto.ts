export interface Producto {
  id: string;
  nombre: string;
  descripcion: string;
  precio: number;
  precioFinal?: number;
  precioDistribuidor?: number;
  etiqueta?: string;
  categoria: string;
  marca: string;
  imagen?: string;
}
