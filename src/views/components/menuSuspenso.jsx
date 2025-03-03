import React, { useState } from 'react';
import { Link } from "react-router-dom";
import '../../css/components.css';




const MenuSuspenso = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

  const handleCloseMenu = () => {
    setIsOpen(false);
  };
  
    return (
      <header className="menu">
        <div className="menu-toggle" onClick={toggleMenu}>
          &#9776;
        </div>
        <nav className={`nav ${isOpen ? 'open' : ''}`}>
          <ul className="nav-list">
            <li className="nav-item"><Link to="/" className="nav-link" onClick={handleCloseMenu}>Home</Link></li>
            <li className="nav-item"><Link to="/servicos" className="nav-link" onClick={handleCloseMenu}>Serviços</Link></li>
            <li className="nav-item"><Link to="/planos" className="nav-link" onClick={handleCloseMenu}>Planos</Link></li>
            <li className="nav-item"><Link to="/areaCliente" className="nav-link" onClick={handleCloseMenu}>Área do Cliente</Link></li>
          </ul>
        </nav>
      </header>
    );
  };

export default MenuSuspenso;
