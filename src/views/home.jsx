import React from "react";
import "../css/style.css";
import Button from "./components/Button";


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
                    <div></div>
                    <div></div>
                </div>                
            </div>

            <div className="compromisso">
                <div className="comp-conteudo">
                    <div></div>
                    <div></div>
                </div>
            </div>

            <div className="home-servicos">
                <h4>Seviços prestados</h4>
                <p>Bla bla bla </p>
                <div className="home-serv-conteudo">
                    <div className="serv-conteudo">
                        <div className="serv-conteudo-item"></div>
                        <div className="serv-conteudo-item"></div>
                    </div>
                    <div className="serv-conteudo">
                        <div className="serv-conteudo-item"></div>
                        <div className="serv-conteudo-item"></div>
                    </div>
                </div>
            </div>

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

        </nav>
        
    );
}

export default Home;