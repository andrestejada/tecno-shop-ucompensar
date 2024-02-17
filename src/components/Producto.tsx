import { useEffect, useState } from "react";
import { Producto } from "../types";
import { Navbar } from "./Navbar";
import { productoRepository } from "../repository/productoRepository";
import { useParams } from "react-router-dom";

export const ProductoPage = () => {
  const { id } = useParams();
  const [producto, setProductos] = useState<Producto>({
    id: "2d778ad4-957d-4769-b98d-58de897eaaca",
    titulo: "Computador Portatil HP Pavilion",
    precio: 1285166,
    descripcion:
      "Computador Portatil HP Pavilion Intel Core i5 1235U RAM 8 GB 512 GB SSD 15eg2519la",
    fechaPublicacion: "2023-04-06T11:03:02Z",
    marca: "HP",
    imagenUrl:
      "https://exitocol.vtexassets.com/arquivos/ids/21481862/Computador-Portatil-HP-Pavilion-Intel-Core-i5-1235U-RAM-8-GB-512-GB-SSD-15-eg2519la-3488673_a.jpg?v=638430217287700000",
    unidades: 8,
  });
  useEffect(() => {
    obtenerProducto(id!);
  }, []);
  const obtenerProducto = async (productoId: string) => {
    const producto = await productoRepository.obtenerProductoPorId(productoId);
    setProductos(producto);
  };
  return (
    <>
      <Navbar />
      <section className="producto-container">
        <h3 className="mt-5">{producto.titulo}</h3>
        <div className="producto-info">
          <div className="img-container">
            <img src={producto.imagenUrl} alt={producto.titulo} />
          </div>
          <section>
            <p className="font-weight-bold">Descripcion:</p>
            <p>{producto.descripcion}</p>
            <p className="font-weight-bold">Marca:</p>
            <p>{producto.marca}</p>
            <p>{producto.descripcion}</p>
            <p className="font-weight-bold">Unidades Disponibles:</p>
            <p>{producto.unidades}</p>
            <p className="font-weight-bold">Precio:</p>
            <p className="precio">
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
                maximumFractionDigits: 0,
              }).format(producto.precio)}
            </p>
            <p className="font-weight-bold">Fecha de publicacion</p>
            <p>
              {new Date(producto.fechaPublicacion).toLocaleString("es-US", {
                month: "long",
                day: "2-digit",
                year: "numeric",
              })}
            </p>
          </section>
        </div>
        <section className="comentarios">
          <form className="formulario" action="">
            <label htmlFor="">Deja tu comentario:</label>
            <textarea></textarea>
            <button className="btn btn-secondary mt-3">Comentar</button>
          </form>
          <h4>Comentarios</h4>
          <p className="comentario">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            distinctio, quibusdam sunt consectetur esse laborum assumenda! Modi
            omnis vel laudantium, nam velit quia hic ad iste? Ipsum repellendus
            eveniet sapiente.
          </p>
          <p className="comentario">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            distinctio, quibusdam sunt consectetur esse laborum assumenda! Modi
            omnis vel laudantium, nam velit quia hic ad iste? Ipsum repellendus
            eveniet sapiente.
          </p>
          <p className="comentario">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            distinctio, quibusdam sunt consectetur esse laborum assumenda! Modi
            omnis vel laudantium, nam velit quia hic ad iste? Ipsum repellendus
            eveniet sapiente.
          </p>
        </section>
      </section>
    </>
  );
};
