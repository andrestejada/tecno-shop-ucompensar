import { ProductoCard } from "./ProductoCard";
import { useId } from "react";
export const ListadoProductos = () => {
  const list = [];

  for (let i = 0; i < 6; i++) {
    list.push({
      id: self.crypto.randomUUID(),
      titulo: "Computador Portatil HP",
      imagenUrl:
        "https://exitocol.vtexassets.com/arquivos/ids/21481862/Computador-Portatil-HP-Pavilion-Intel-Core-i5-1235U-RAM-8-GB-512-GB-SSD-15-eg2519la-3488673_a.jpg?v=638430217287700000",
      descripcion:
        "Computador Portatil HP Pavilion Intel Core i5 1235U RAM 8 GB 512 GB SSD 15eg2519la",
      precio: 500_000,
    });
  }
  console.log(list)
  return (
    <div className="productos-container">
      {list.map((producto) => (
        <ProductoCard key={producto.id} producto={producto} />
      ))}
    </div>
  );
};
