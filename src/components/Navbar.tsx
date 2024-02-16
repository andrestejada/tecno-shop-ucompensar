import { useLocation } from "react-router-dom";

export const Navbar = () => {
  const { pathname } = useLocation();
  return (
    <nav className="navbar">
      Tecno shop
      {pathname === "/" && (
        <div className="buscador-dispositivos">
          <label htmlFor="buscar">Buscar Pelicula</label>
          <input type="text" onChange={() => {}} />
          <button type="button" onClick={() => {}}>
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
      )}
    </nav>
  );
};
