import { productoRepository } from "../repository/productoRepository";
import { Producto } from "../types";
import { ProductoCard } from "./ProductoCard";
import { useEffect, useState } from "react";
export const ListadoProductos = () => {
  const [productos, setProductos] = useState<Producto[]>([]);
  useEffect(() => {
    listarProductos();
  }, []);
  const listarProductos = async () => {
    const productos = await productoRepository.listarProductos();
    setProductos(productos);
  };
  return (
    <div className="productos-container">
      {productos.map((producto) => (
        <ProductoCard key={producto.id} producto={producto} />
      ))}
    </div>
  );
};
