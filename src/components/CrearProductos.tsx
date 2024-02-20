import React from "react";
import { Navbar } from "./Navbar";
import { UseForm } from "../hooks/useForm";

export const CrearProductos = () => {
  const { values, reset, handleInputChange } = UseForm({
    titulo: "",
    imagenUrl: "",
    descripcion: "",
    precio: "",
    marca: "",
    unidades: "",
  });
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    reset();
  };
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
            <label htmlFor="marca">Marca</label>
            <input
              onChange={handleInputChange}
              value={values.marca}
              name="marca"
              type="marca"
              className="form-control"
              id="marca"
              placeholder="marca del dispositivo"
            />
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
      </div>
    </>
  );
};
