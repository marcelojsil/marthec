import React , { useState }  from "react";
import "../styles/header.css";
import config from "../config";
import Menu from "../components/ui/menu";

const Header = () => {
   const [menuOpen, setMenuOpen] = useState(false); 

  return (
    <header className="header">
      <div className="header-container">

        <a href="/" className="logo">
          <img src={config.logo} alt={config.siteTitle} className="logo"/>
   
        </a>

        {/* BOTÃO DE MENU (MOBILE) */}
        <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>

        <Menu isOpen={menuOpen} />
        
      </div>
    </header>
  );
};

export default Header;
