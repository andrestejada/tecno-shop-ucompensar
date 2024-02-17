import { Link, useLocation } from "react-router-dom";

export const Navbar = () => {
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  return (
    <nav className="navbar">
      Tecno shop
      {isHome && (
        <Link className="sign-in" to={"/login"}>
          Iniciar Sesion
        </Link>
      )}
      {isHome && (
        <div className="buscador-dispositivos">
          <label htmlFor="buscar">Buscar Dispositivo</label>
          <input type="text" onChange={() => {}} />
          <button type="button" onClick={() => {}}>
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
      )}
    </nav>
  );
};
