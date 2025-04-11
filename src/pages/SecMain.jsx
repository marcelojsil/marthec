import React from "react";
import H2 from "../components/HTwo";
import "../css/components.css";

const SecMain = () => {
  return (
    <div className="fullscreen-container">
      <div className="overlay">
        <div className="fullscreen-conteudo">

          <h1>Site para sua empresa</h1>

          <H2 color="#fff">expanda seu horizonte e se destaque seu negócio no mundo
          digital com um site personalizado para o seu negócio</H2>

          <a href="/contato">
            <div className="btn saiba-mais">saiba mais</div>
          </a>

        </div>
      </div>
    </div>
  );
};

export default SecMain;