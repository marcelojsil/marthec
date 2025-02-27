import React, { useState } from 'react';
//import Link from "./link";
import { Link } from "react-router-dom";
import '../../css/components.css';




const MenuSuspenso = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <header className="menu">
        <div className="menu-toggle" onClick={toggleMenu}>
          &#9776;
        </div>
        <nav className={`nav ${isOpen ? 'open' : ''}`}>
          <ul className="nav-list">
            <li className="nav-item"><Link to="/" label="Home" /></li>
            <li className="nav-item"><Link to="/servicos" label="Serviços" /></li>
            <li className="nav-item"><Link to="/planos" label="Planos" className="nav-link" /></li>
            <li className="nav-item"><a href="/areaCliente" className="nav-link">Área do Cliente</a></li>
          </ul>
        </nav>
      </header>
    );
  };

export default MenuSuspenso;
