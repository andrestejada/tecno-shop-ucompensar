import { Producto, CrearProductoDTO, ActualizarProductoDTO } from "../types";
import { httpAdapter } from "../plugin/http-plugin";
interface ProductoRepository {
  listarProductos(): Promise<Producto[]>;
  crearProducto(producto: CrearProductoDTO): Promise<Producto>;
  borrarProducto(productoId: number): Promise<void>;
  actualizarProducto(
    productoAtualizar: ActualizarProductoDTO
  ): Promise<Producto>;
}

export const productoRepository: ProductoRepository = {
  listarProductos: async function () {
    const { data } = await httpAdapter.get("/producto");
    return data;
  },
  crearProducto: function (producto: CrearProductoDTO): Promise<Producto> {
    return httpAdapter.post("/producto", producto);
  },
  borrarProducto: function (productoId: number): Promise<void> {
    return httpAdapter.delete(`/producto/${productoId}`);
  },
  actualizarProducto: function (
    productoAtualizar: ActualizarProductoDTO
  ): Promise<Producto> {
    return httpAdapter.put("/producto", productoAtualizar);
  },
};
