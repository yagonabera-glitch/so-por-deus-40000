import './Header.css';
import logo from '../../assets/img/Logo.png';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';


export default function Header() {

    const [pesquisa, setPesquisa] = useState<string>("");
    const navigate = useNavigate();


    const handleSearch = () => {
        navigate(`/produtos/pesquisa?query=${encodeURIComponent(pesquisa)}`)
    }

    const handleKeyDown = (evento: React.KeyboardEvent<HTMLInputElement>) => {
        if (evento.key === 'Enter') {
            handleSearch();
        }
    }

    return (
        <>
            <header>
                <Navbar expand="lg" className="container_cabecalho">
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Item>
                                <Link to={"/produtos/cadastro"} title='Cadastrar produtos'>
                                {/* <Link></Link> */}
                                <img className="logo" src={logo} alt="" />
                                </Link>
                            </Nav.Item>
                            <Nav.Item className="pagina_produtos">
                                <svg className="lupa_k" xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 640 640">
                                    <path fill="currentColor"
                                        d="M448 272C448 174.8 369.2 96 272 96C174.8 96 96 174.8 96 272C96 369.2 174.8 448 272 448C369.2 448 448 369.2 448 272zM407.3 430C371 461.2 323.7 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272C480 323.7 461.2 371 430 407.3L571.3 548.7C577.5 554.9 577.5 565.1 571.3 571.3C565.1 577.5 554.9 577.5 548.7 571.3L407.3 430z" />
                                </svg>
                                <div className="box_busca">
                                    <input className="campo_busca"
                                        type="text"
                                        value={pesquisa}
                                        onChange={p => setPesquisa(p.target.value)}
                                        onKeyDown={handleKeyDown}
                                        placeholder='pesquisar'
                                    />
                                </div>
                            </Nav.Item>
                            <Nav.Item>
                                   <Link to={"/"} title='Cadastrar produtos'>
                                <div className="colecao" id="colecao">
                                    <p>Home</p>
                                </div>
                                   </Link>
                                
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                </Navbar>
            </header>
        </>
    )
}
