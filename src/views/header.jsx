import React from "react";
import Logo from "../img/logo.png";
import Button from "./partials/Button";

const Header = () => {



    return (
      
      <div className="header">
      
        <img src={Logo} alt="Marthec, site para sua empresa" />

        <Button to="/areaCliente" label="Área de Clientes" />

        <Button to="/solicitacao" label="Solicitação" />
      
      </div>
      
    );
  }
  
  export default Header;