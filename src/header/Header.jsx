import React, { useState } from "react";
import Menu from "../components/Menu";
import "./header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
        
        <a href="#" className="logo">Marthec</a>

         
         <a href="#" className="login-btn">Login</a>

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
