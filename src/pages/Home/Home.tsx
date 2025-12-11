import './Home.css'
import cards_11 from '../../assets/image 11.svg'
import cards_12 from '../../assets/Frame 40.png'
import cards_13 from '../../assets/image 12.svg'
import cards_14 from '../../assets/inverno.png'
import cards_15 from '../../assets/foto vela.png'
import benner from '../../assets/Group 4.png'
import { Link } from 'react-router-dom'
import Header from '../../components/Header/Heade';
import Footer from '../../components/Footer/Footer'

export default function Home() {

    return (
        <>
            <Header />
            <main>
                <section className="banner_ruim">
                    <div className="cabecalho_vela">
                        <img src={benner} alt="" />
                    </div>

                </section>
                <div className="colecao_outono">
                    <img src={cards_15} alt="" />
                    <div>
                        <h2>Coleção de outono</h2>
                        <p>Inspirada nas cores aromas da estação, nossa coleção traz notas de vinho notas de vinho tinto, fruta
                            secas especiarias e o calor acolhedor de elegancia.</p>
                    </div>
                </div>

                <div className="container_estacoes">
                    <div className="estacoes_col1">
                        <Link to={"/produtos/verao"} className="">
                            <img src={cards_12} alt="" />
                        </Link>
                        <Link to={"/produtos/inverno"} className="">
                            <img src={cards_14} alt="" />
                        </Link>
                    </div>

                    <div className="estacoes_col2">
                        <Link to={"/produtos/outono"} className="">
                            <img src={cards_13} alt="" />
                        </Link>
                        <Link to={"/produtos/primavera"} className="">
                            <img src={cards_11} alt="" />
                        </Link>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )

}
