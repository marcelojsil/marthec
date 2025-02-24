import React from "react";
import Logo from "../img/logo.png";
import "../css/fixos.css";
import MenuSuspenso from "./components/menuSuspenso";


const Header = () => {

  return (
      
      <header>

        <nav className="header">
      
          <img src={Logo} alt="Marthec, site para sua empresa" className="header-img"/>

          <MenuSuspenso />

        </nav>
      
      </header>
      
  );
  
}
  
export default Header;