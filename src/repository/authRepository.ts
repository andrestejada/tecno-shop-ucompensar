import { httpAdapter } from "../plugin/http-plugin";
import { LoginDto } from "../types";

interface IniciarSesionDTO {
  correo: string;
  password: string;
}

interface RegistrarUsuarioDTO extends IniciarSesionDTO {
  nombre: string;
}

interface AuthRepository {
  login(usuario: IniciarSesionDTO): Promise<LoginDto>;
  registrar(usuario: RegistrarUsuarioDTO): Promise<void>;
}

export const authRepository: AuthRepository = {
  login: async function (usuario: IniciarSesionDTO): Promise<LoginDto> {
    const { data } = await httpAdapter.post("/auth/login", usuario);
    return data;
  },
  registrar: function (usuario: RegistrarUsuarioDTO): Promise<void> {
    return httpAdapter.post("/auth/registrar", usuario);
  },
};
