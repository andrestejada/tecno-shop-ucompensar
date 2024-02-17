export interface Producto {
  id: string;
  titulo: string;
  imagenUrl: string;
  descripcion: string;
  precio: number;
  marca: string;
  unidades: number;
  fechaPublicacion: string | Date;
}
