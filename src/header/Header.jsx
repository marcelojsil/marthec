import React, { useState } from "react";
import Menu from "../components/Menu";
import "./header.css";
import Logo from "../img/logo-semfundo.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">

        <a href="/" className="logo"><img src={Logo} alt="Marthec, site para sua empresa" className="logo"/></a>

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
