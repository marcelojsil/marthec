import React from "react";
import Button from "./components/Button";

const Footer = () => {
    return (
      <div className="Footer">
        <p>Aqui fica o Rodapé.</p>

        <Button to="/solicitacao" label="Solicitação" />
      </div>
    );
  }
  
  export default Footer;