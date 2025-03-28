import React, { useState } from "react";
import Menu from "../components/Menu";
import "./header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
        
        <a href="/home" className="logo">Marthec</a>

         
         <a href="/home" className="login-btn">Cliente</a>

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
