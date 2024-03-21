import React, { useEffect, useState } from "react";
import { Navbar } from "./Navbar";
import { UseForm } from "../hooks/useForm";
import { productoRepository } from "../repository/productoRepository";
import { Marca, Producto, CrearProductoDTO } from "../types";
import { marcaRepository } from "../repository/marcaRepository";
import { TablaProductos } from "./TablaProductos";
import { redirect, useLocation } from "react-router-dom";

export const CrearProductos = () => {
  const location = useLocation();
  console.log(location)
  const [listadoMarcas, setListadoMarcas] = useState<Marca[]>([]);
  const [listadoProductos, setListadoProductos] = useState<Producto[]>([]);
  const { values, reset, handleInputChange } = UseForm({
    titulo: "",
    imagenUrl:
      "",
    descripcion:
      "",
    precio: 0,
    marca: 0,
    unidades: 0,
  });
  useEffect(() => {
    marcaRepository.listarMarcas().then((res) => {
      setListadoMarcas(res);
    });

    listarProductos();
  }, []);

  const listarProductos = async () => {
    const productos = await productoRepository.listarProductos();
    setListadoProductos(productos);
  };

  const borrarProducto = async (productoId: number) => {
    await productoRepository.borrarProducto(productoId);
    await listarProductos();
  };
  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const producto: CrearProductoDTO = {
      titulo: values.titulo,
      imagenUrl: values.imagenUrl,
      descripcion: values.descripcion,
      precio: Number(values.precio),
      marcaId: Number(values.marca),
      unidades: Number(values.unidades),
      usuarioId:Number(location.state.id)
    };
    
    await productoRepository.crearProducto(producto);
    await listarProductos();
    reset();
  };
  // if(!location.state.id){
  //   redirect('/')
  // }
  return (
    <>
      <Navbar />

      <div style={{ padding: "10px" }}>
        <form className="mt-5" onSubmit={onSubmit}>
          <h2 className="text-center">Crear Producto</h2>
          <div className="form-group">
            <label htmlFor="titulo">Titulo</label>
            <input
              onChange={handleInputChange}
              value={values.titulo}
              name="titulo"
              type="titulo"
              className="form-control"
              id="titulo"
              placeholder="titulo del dispositivo"
            />
          </div>
          <div className="form-group">
            <label htmlFor="descripcion">Descripcion</label>
            <input
              onChange={handleInputChange}
              value={values.descripcion}
              name="descripcion"
              type="descripcion"
              className="form-control"
              id="descripcion"
              placeholder="descripcion del dispositivo"
            />
          </div>
          <div className="form-group">
            <label htmlFor="marca">marca</label>
            <select
              name="marca"
              onChange={handleInputChange}
              value={values.marca}
              className="form-select form-control"
              aria-label="Default select example"
            >
              <option>Selecciona una marca</option>
              {listadoMarcas.map((marca) => (
                <>
                  <option key={marca.id} value={marca.id}>
                    {marca.nombre}
                  </option>
                </>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="precio">precio</label>
            <input
              onChange={handleInputChange}
              value={values.precio}
              name="precio"
              type="number"
              className="form-control"
              id="precio"
              placeholder="precio del dispositivo"
            />
          </div>
          <div className="form-group">
            <label htmlFor="unidades">unidades</label>
            <input
              onChange={handleInputChange}
              value={values.unidades}
              name="unidades"
              type="number"
              className="form-control"
              id="unidades"
              placeholder="unidades del dispositivo"
            />
          </div>
          <div className="form-group">
            <label htmlFor="imagenUrl">URL de la imagen</label>
            <input
              onChange={handleInputChange}
              value={values.imagenUrl}
              name="imagenUrl"
              type="imagenUrl"
              className="form-control"
              id="imagenUrl"
              placeholder="imagenUrl del dispositivo"
            />
          </div>

          <button type="submit" className="btn btn-primary ">
            Crear Producto
          </button>
        </form>
        <TablaProductos
          borrarProducto={borrarProducto}
          listadoProductos={listadoProductos}
        />
      </div>
    </>
  );
};
