import './CardProduto.css';
import Vela_default from '../../assets/img/candle-holder.svg'
import type { CardProdutoProps } from '../../types/CardProdutoProps'
import { formatoService } from '../../services/formatosService';

export default function CardProduto({ nome, preco, imagem, id, }: CardProdutoProps) {
    return (
        <div key={id} className="card_produto">
            <h2>{nome}</h2>
            <img src={(imagem.length > 0) ? `http://localhost:3000/static/${imagem}` : Vela_default} alt={'imagem do produto'} />
            <span>{formatoService.PrecoBR(preco)} </span>
        </div>
    )
}