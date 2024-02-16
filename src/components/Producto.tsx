export const Producto = () => {
  return (
    <section className="producto-container">
      <h3>Computador ASUS Vivobook</h3>
      <div className="producto-info">
        <div className="img-container">
          <img
            src="https://www.exito.com/_next/image?url=https%3A%2F%2Fexitocol.vtexassets.com%2Farquivos%2Fids%2F21481862%2FComputador-Portatil-HP-Pavilion-Intel-Core-i5-1235U-RAM-8-GB-512-GB-SSD-15-eg2519la-3488673_a.jpg%3Fundefined%26width%3D200%26height%3D200%26aspect%3Dtrue%3Fv%3D638430217287700000&w=256&q=75"
            alt="img"
          />
        </div>
        <section>
          <p>
            Computador ASUS Vivobook 15 Intel Core i5 1235U RAM 8 GB 1 TB SSD
            X1504ZANJ619W
          </p>
          <p className="precio">$ 2.129.040</p>
        </section>
      </div>
      <section className="comentarios">
        <form className="formulario" action="">
          <label htmlFor="">Deja tu comentario:</label>
          <textarea></textarea>
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
  );
};
