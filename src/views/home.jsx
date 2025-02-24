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

                <h2>A Marthec com vc</h2>
                
                
            </div>

            <div className="compromisso">

            </div>

            <div className="home-servicos">

            </div>

            <div className="duvidas">

            </div>

            <div className="parceria">

            </div>

            <div className="home-planos">

            </div>

            <div className="portifolio">

            </div>

        </nav>
        
    );
}

export default Home;