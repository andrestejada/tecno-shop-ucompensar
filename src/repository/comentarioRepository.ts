import { Comentario } from "../types";

interface CrearComentarioDTO {
  correo: string;
  contraseña: string;
}

interface UsuarioRepository {
  crearComentario(comentario: CrearComentarioDTO): Promise<Comentario>;
  listarComentarios(productoId: string): Promise<Comentario[]>;
}

export const productoRepository: UsuarioRepository = {
  crearComentario: function (
    comentario: CrearComentarioDTO
  ): Promise<Comentario> {
    throw new Error("Function not implemented.");
  },
  listarComentarios: function (productoId: string): Promise<Comentario[]> {
    throw new Error("Function not implemented.");
  },
};
