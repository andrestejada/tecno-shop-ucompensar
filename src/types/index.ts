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

export interface Usuario {
  id: string;
  nombre: string;
  correo: string;
  contraseña: string;
}

export interface Comentario {
  id: string;
  contenido: string;
  fecha_prublicacion: string | Date;
}
