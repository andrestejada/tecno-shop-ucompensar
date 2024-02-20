
interface IniciarSesionDTO {
  correo: string;
  contraseña: string;
}

interface RegistrarUsuarioDTO extends IniciarSesionDTO {
  nombre: string;
}

interface UsuarioRepository {
  iniciarSesion(usuario: IniciarSesionDTO): Promise<void>;
  registrar(usuario: RegistrarUsuarioDTO): Promise<void>;
}

export const productoRepository: UsuarioRepository = {
  iniciarSesion: function (usuario: IniciarSesionDTO): Promise<void> {
    throw new Error("Function not implemented.");
  },
  registrar: function (usuario: RegistrarUsuarioDTO): Promise<void> {
    throw new Error("Function not implemented.");
  },
};
