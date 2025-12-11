import type { JSX } from "react/jsx-runtime";

export interface Vela {
    map(arg0: (b: Vela) => JSX.Element): import("react").ReactNode;
    nome: string;
    id: string | undefined;
    categorias: string[];
    descricao: string;
    imagens: string[];
    preco: number;
    peso: number | null;
}