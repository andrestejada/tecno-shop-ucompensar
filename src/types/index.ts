export interface Producto {
  id: string;
  titulo: string;
  imagen_url: string;
  descripcion: string;
  precio: number;
  marca: string;
  unidades: number;
  fecha_publicacion: string | Date;
}

export interface ProductoGuardar {
  titulo: string;
  imagenUrl: string;
  descripcion: string;
  precio: number;
  marcaId: number;
  unidades: number;
}

export interface Usuario {
  id: string;
  nombre: string;
  correo: string;
  password: string;
}

export interface Comentario {
  id: string;
  contenido: string;
  fecha_publicacion: string | Date;
}

export interface Marca {
  id: string;
  nombre: string;
}
