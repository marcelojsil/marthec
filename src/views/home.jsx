import React from "react";
import "../css/style.css";
import Button from "./components/Button";
import IMG1 from "../img/dev.png";
import IMG2 from "../img/manut.png";
import IMG3 from "../img/responsivo.png";
import IMG4 from "../img/seo.png";
import { Link } from "react-router-dom";


const Home = () => {

    return (
        <nav className="home">

            <div className="bg-imagem">
                <nav className="titulos">
                    <h1>Site para a sua empresa</h1>
                    <h2>Seu negócio visto além do horizonte</h2>
                    <Button  to="/contato" label="saiba mais" className="btn-titulos" />
                </nav>
            </div>
            
            <div className="solucao">
                <div className="solucao-conteudo">
                    <div className="solucao-conteudo-img"></div>
                    <div className="solucao-conteudo-txt">
                        <p>Seu negócio precisa ser visto!</p>
                        <p>Com um site profissional, seu negócio alcança mais clientes 
                            e expande suas oportunidades no mercado digital.
                        </p>
                        <h5>Marthec, levando seu negócio além!</h5>
                    </div>
                </div>                
            </div>
            {/*
            <div className="compromisso">
                <div className="comp-conteudo">
                    <div></div>
                    <div></div>
                </div>
            </div>
            */}
            <div className="home-servicos">
                <h4>SERVIÇOS PRESTADOS</h4>
                <p>Transformamos sua presença digital com sites institucionais sob 
                    medida, focados em inovação e resultados</p>
                <div className="home-serv-conteudo">
                    <div className="serv-conteudo">
                        <Link to="/servicos" className="serv-conteudo-item">
                            <img src={IMG1} alt="" />
                            <p>Desenvolvimento</p>
                        </Link>
                        <Link to="/servicos" className="serv-conteudo-item">
                            <img src={IMG2} alt="" />
                            <p>Manutenção</p>
                        </Link>
                    </div>
                    <div className="serv-conteudo">
                        <Link to="/servicos" className="serv-conteudo-item">
                            <img src={IMG3} alt="" />
                            <p>Responsividade</p>
                            </Link>
                        <Link to="/servicos" className="serv-conteudo-item">
                            <img src={IMG4} alt="" />
                            <p>SEO</p>
                        </Link>
                    </div>
                </div>
            </div>
            {/*
            <div className="duvidas">
                <div className="duvidas-conteudo">
                    <div>Aqui é uma imagem</div>
                    <div>Aqui é o formulário</div>
                </div>
            </div>

            <div className="parceria">
                <div className="parceria-conteudo">
                    <div></div>
                    <div></div>
                </div>
            </div>

            <div className="home-planos">
                <h4>Formas de Pagamento</h4>
                <p>a melhor forma para favorecer o seu negócio</p>
                <div className="home-planos-conteudo">
                    <div className="home-planos-conteudo-itens"></div>
                    <div className="home-planos-conteudo-itens"></div>
                    <div className="home-planos-conteudo-itens"></div>
                </div>

            </div>

            <div className="portifolio">
                <h4>Portifólio</h4>
                <div className="portifolio-carroussel">
                    <p>Aqui será o carrossel</p>
                </div>

            </div>
            */}

        </nav>
        
    );
}

export default Home;