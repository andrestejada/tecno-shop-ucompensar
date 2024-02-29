import React from "react";
import { Producto } from "../types";
import { Link } from "react-router-dom";

interface Props {
  listadoProductos: Producto[];
  borrarProducto: (productoId: number) => Promise<void>;
}
export const TablaProductos = ({ listadoProductos, borrarProducto }: Props) => {
  if (!listadoProductos.length) {
    return (
      <>
        <h1 className="text-center mt-3">No hay productos creados</h1>
      </>
    );
  }
  return (
    <>
      <h2 className="text-center mb-5">Listado de productos</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Titulo</th>
            <th scope="col">Descripcion</th>
            <th scope="col">Precio</th>
            <th scope="col">Unidades</th>
            <th scope="col">Accciones</th>
          </tr>
        </thead>
        <tbody>
          {listadoProductos.map((producto) => (
            <tr key={producto.id}>
              <td>{producto.titulo}</td>
              <td>{producto.descripcion}</td>
              <td>{producto.precio}</td>
              <td>{producto.unidades}</td>
              <td>
                <button
                  onClick={() => borrarProducto(producto.id)}
                  type="button"
                  className="btn btn-danger mb-2"
                >
                  Borrar
                </button>
                <button
                  type="button"
                  className="btn btn-warning"
                >
                  <Link to={"/editar-producto"} state={producto}>
                    Editar
                  </Link>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
