import { Producto } from "../types";
import productos from "../data/productos.json";
interface ProductoRepository {
  listarProductos(): Promise<Producto[]>;
  obtenerProductoPorId(productoId: string): Promise<Producto>;
}

export const productoRepository: ProductoRepository = {
  listarProductos: async function () {
    return productos.map<Producto>((producto) => ({
      id: producto.id,
      descripcion: producto.descripcion,
      precio: producto.precio,
      titulo: producto.titulo,
      imagenUrl: producto.imagenUrl,
      fechaPublicacion: producto.fechaPublicacion,
      marca: producto.marca,
      unidades: producto.unidades,
    }));
  },
  obtenerProductoPorId: async function (productoId: string): Promise<Producto> {
    return (
      productos.find((producto) => producto.id === productoId) ?? productos[0]
    );
  },
};
