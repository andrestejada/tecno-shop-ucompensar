export interface Producto {
  id: number;
  titulo: string;
  imagenUrl: string;
  descripcion: string;
  precio: number;
  marca: {
    id: number;
    name: string;
  };
  unidades: number;
  fecha_publicacion: string | Date;
}

export interface CrearProductoDTO {
  titulo: string;
  imagenUrl: string;
  descripcion: string;
  precio: number;
  marcaId: number;
  unidades: number;
  usuarioId: number;
}

export interface ActualizarProductoDTO extends CrearProductoDTO {
  id: number;
}

export interface Usuario {
  id: string;
  nombre: string;
  correo: string;
  password: string;
}
export interface LoginDto {
  id: string;
  nombre: string;
  correo: string;
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
