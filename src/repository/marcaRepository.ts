import { httpAdapter } from "../plugin/http-plugin";
import { Marca } from "../types";

interface MarcaRepository {
  listarMarcas(): Promise<Marca[]>;
}

export const marcaRepository: MarcaRepository = {
  listarMarcas: async function (): Promise<Marca[]> {
    const { data } = await httpAdapter.get("/marca");
    return data
  },
};
