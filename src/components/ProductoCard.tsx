import { Link } from "react-router-dom";
import { Producto } from "../types";

interface Props {
  producto: Producto;
}
export const ProductoCard = ({ producto }: Props) => {
  return (
    <Link to={`producto/${producto.id}`}>
      <section className="producto-card-container">
        <h3>{producto.titulo}</h3>
        <div className="img-container">
          <img src={producto.imagenUrl} alt="img" />
        </div>
        <p>{producto.descripcion}</p>
        <p>
          Precio{": "}
          <span className="precio">
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
              maximumFractionDigits: 0,
            }).format(producto.precio)}
          </span>
        </p>
      </section>
    </Link>
  );
};
