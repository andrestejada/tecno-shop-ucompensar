import { Producto, ProductoGuardar } from "../types";
import productos from "../data/productos.json";
import { httpAdapter } from "../plugin/http-plugin";
interface ProductoRepository {
  listarProductos(): Promise<Producto[]>;
  obtenerProductoPorId(productoId: string): Promise<Producto>;
  crearProducto(producto: ProductoGuardar): Promise<Producto>;
}

export const productoRepository: ProductoRepository = {
  listarProductos: async function () {
    const { data } = await httpAdapter.get("/producto");
    return data;
  },
  obtenerProductoPorId: async function (productoId: string): Promise<Producto> {
    return (
      productos.find((producto) => producto.id === productoId) ?? productos[0]
    );
  },
  crearProducto: function (producto: ProductoGuardar): Promise<Producto> {
    return httpAdapter.post("/producto", producto);
  },
};
