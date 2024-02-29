import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ProductoPage } from "./components/Producto.tsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Login } from "./components/Login.tsx";
import { CrearProductos } from "./components/CrearProductos.tsx";
import { EditarProducto } from "./components/EditarProducto.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "producto/:id",
    element: <ProductoPage />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "crear-productos",
    element: <CrearProductos />,
  },
  {
    path: "editar-producto",
    element: <EditarProducto />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
