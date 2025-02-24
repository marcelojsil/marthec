import React from "react";
import Button from "./components/Button";
import "../css/fixos.css";

const Footer = () => {
    return (

      <footer>
        <div className="footer">
          <p>Aqui fica o Rodapé.</p>
      
          <Button to="/solicitacao" label="Solicitação" />
        </div>
      </footer>
    );
  }
  
  export default Footer;