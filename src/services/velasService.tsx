import axios from "axios";
import type { Vela } from "../types/vela";

export const getVelas = async (): Promise<Vela[]> => {
    try {
        const resposta = await axios.get("http://localhost:3000/produtos");
        return resposta.data;
    } catch (error) {
        console.error("Erro ao buscar os dados: ", error);
        throw error;
    }
}

export const deleteVela = async (idVela: string): Promise<void> =>{
    try{
        await axios.delete(`http://localhost:3000/produtos/${idVela}`)
    }catch (error){
        console.error("Erro ao deleter o Vela: ", error);
        throw error;
    }
}
export const enviarFotoParaAPI = async (file: File): Promise<string | undefined> => {
  const formData = new FormData();
  formData.append("file", file);

  try {
    const res = await axios.post("http://localhost:3000/produtos", formData, {
      headers: { "Content-Type": "multipart/form-data" }
    });
    return res.data.filename;
  } catch (error) {
    console.error("Erro no upload da imagem: ", error);
    return undefined;
  }
}

export const postVela = async (vela: Vela): Promise<void> => {
  try {
    await axios.post("http://localhost:3000/produtos", vela);
  } catch (error) {
    console.error("Erro ao cadastrar o vela", error);
    throw error;
  }
}