import React from "react";
import "./components.css"; 

const FullScreenImg = () => {
  return (
    <div className="fullscreen-container">
      <div className="overlay">
        <div className="fullscreen-conteudo">
          <h1>Site para sua empresa</h1>
          <h2>expanda seu horizonte e
              destaque seu negócio no mundo
              digital</h2>
          <a href="/contato">
            <div className="btn saiba-mais">saiba mais</div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default FullScreenImg;