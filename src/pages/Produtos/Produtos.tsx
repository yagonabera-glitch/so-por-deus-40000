import './Produtos.css'


import { useEffect, useState } from 'react';
import type { Vela } from '../../types/vela';
import { getVelas } from '../../services/velasService';
import CardProduto from '../../components/CardProduto/CardProduto';
import Carrossel from '../../components/Carrossel/Carrossel';

import Header from '../../components/Header/Heade';
import { useLocation, useParams } from 'react-router-dom';
import Footer from '../../components/Footer/Footer'
import jacquin404 from '../../assets/img/ChatGPT Image 12 de dez. de 2025, 11_05_55.png';

export default function Produtos() {

    const [velas, setVelas] = useState<Vela[]>([]);
    const location = useLocation();
    const { categoria } = useParams<{ categoria: string }>();

    const parametrosPesquisados = new URLSearchParams(location.search);
    const termo_pesquisado = parametrosPesquisados.get('query');

    const fatchVela = async () => {
        try {
            const dados = await getVelas();
            console.log("termo pesquisado: ", termo_pesquisado);

            if (categoria) {
                const dados_filtrados = dados.filter(b =>
                    b.categorias.some(cat =>
                        cat.toLowerCase() === categoria.toLowerCase()));
                setVelas(dados_filtrados);
            } else if (termo_pesquisado) {
                const dados_filtrados = dados.filter(b =>
                    b.nome.toLowerCase()
                        .includes(termo_pesquisado.toLowerCase()) ||
                    b.categorias.some(cat => cat.toLowerCase()
                        .includes(termo_pesquisado
                            .toLowerCase()))
                )
                setVelas(dados_filtrados)
            } else {
                console.error("Nenhuma categoria ou termo de busca definidos.");
                setVelas([]);
            }
        } catch (error) {
            console.error("Erro ao executar getVela", error)
        }
    }

    useEffect(() => {
        fatchVela();
        console.log("Termo pesquisado: ", termo_pesquisado);
    }, [termo_pesquisado])


    return (
        <>
            <Header />

            <main>

                <Carrossel />
                <div>
                    <span className='Filtro'>
                        {
                            categoria
                                ? categoria.charAt(0).toUpperCase() + categoria.slice(1).toLowerCase()
                                : termo_pesquisado
                                    ? `Resultados para: ${termo_pesquisado}`
                                    : "Nenhum filtro aplicado"
                        }
                    </span>
                </div>

                <section className="cardis">

                    {
                        velas.map((b: Vela) => (
                            <CardProduto
                                key={b.id}
                                nome={b.nome}
                                imagem={b.imagens[0] ?? ""}
                                preco={b.preco}
                            />
                        ))
                    }
                    {
                        velas.length == 0 &&
                        <div className='jacquin404'>
                            <h3>O termo pesquisado <br />não foi encontrado</h3>
                            <img src={jacquin404} alt="foto_termo_nao_encontrado" />
                        </div>
                    }



                </section>
                <h1 className="acessivel">Pagina de Produtos de Outono</h1>

            </main>

            <Footer />
        </>
    )
}