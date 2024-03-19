import React, { FormEventHandler } from "react";
import { Navbar } from "./Navbar";
import { useState } from "react";
import { UseForm } from "../hooks/useForm";
import { useNavigate } from "react-router-dom";
import { authRepository } from "../repository/authRepository";

export const Login = () => {
  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState({ isError: false, msg: "" });
  const { values, reset, handleInputChange } = UseForm({
    contraseña: "",
    email: "",
    nombre: "",
  });
  const login = async (e: React.FormEvent) => {
    e.preventDefault();
    setError({
      isError: false,
      msg: "",
    });
    if (values.contraseña.trim() === "" || values.email.trim() === "") {
      setError({
        isError: true,
        msg: "todos los campos de formulario son obligatorios.",
      });
      return;
    }
    try {
      const loginResponse = await authRepository.login({
        correo: values.email,
        password: values.contraseña,
      });
      navigate("/crear-productos", { state: { ...loginResponse } });
    } catch (error: any) {
      console.log(error.response.data.message);

      setError({
        isError: true,
        msg: error.response.data.message,
      });
    }
  };
  const registrar = async (e: React.FormEvent) => {
    e.preventDefault();
    setError({
      isError: false,
      msg: "",
    });
    if (
      values.contraseña.trim() === "" ||
      values.email.trim() === "" ||
      values.nombre.trim() === ""
    ) {
      setError({
        isError: true,
        msg: "todos los campos de formulario son obligatorios.",
      });
      return;
    }

    try {
      await authRepository.registrar({
        password: values.contraseña,
        correo: values.email,
        nombre: values.nombre,
      });
      reset();
      setIsLogin(true);
    } catch (error: any) {
      console.log(error.response.data.message);
      setError({
        isError: true,
        msg: error.response.data.message,
      });
    }
  };
  return (
    <>
      <Navbar />

      <div style={{ padding: "10px" }}>
        {isLogin ? (
          <form className="mt-5" onSubmit={login}>
            <h2 className="text-center">Iniciar sesión</h2>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email</label>
              <input
                onChange={handleInputChange}
                value={values.email}
                name="email"
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Ingrese un email valido"
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Contraseña</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
                name="contraseña"
                value={values.contraseña}
                onChange={handleInputChange}
              />
            </div>

            <button type="submit" className="btn btn-primary ">
              Iniciar sesión
            </button>
            <p>
              No tienes una cuenta presiona{" "}
              <a
                style={{ cursor: "pointer" }}
                onClick={() => setIsLogin(false)}
              >
                aqui para crear una
              </a>
            </p>
          </form>
        ) : (
          <form className="mt-5" onSubmit={registrar}>
            <h2 className="text-center">Registrarse</h2>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Ingrese un email valido"
                onChange={handleInputChange}
                value={values.email}
                name="email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="nombre">Nombre</label>
              <input
                type="text"
                className="form-control"
                id="nombre"
                aria-describedby="emailHelp"
                placeholder="Ingrese su nombre"
                onChange={handleInputChange}
                value={values.nombre}
                name="nombre"
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Contraseña</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
                onChange={handleInputChange}
                value={values.contraseña}
                name="contraseña"
              />
            </div>

            <button type="submit" className="btn btn-primary ">
              Registrarse
            </button>
            <p style={{ cursor: "pointer" }} onClick={() => setIsLogin(true)}>
              <a>Regresar al login</a>
            </p>
          </form>
        )}
        {error.isError && (
          <div className="alert alert-danger" role="alert">
            {error.msg}
          </div>
        )}
      </div>
    </>
  );
};
