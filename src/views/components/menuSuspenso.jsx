import React, { useState } from 'react';
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
            <li className="nav-item"><a href="/" className="nav-link">Home</a></li>
            <li className="nav-item"><a href="/servicos" className="nav-link">Serviços</a></li>
            <li className="nav-item"><a href="/planos" className="nav-link">Planos</a></li>
            <li className="nav-item"><a href="/areaCliente" className="nav-link">Área do Cliente</a></li>
          </ul>
        </nav>
      </header>
    );
  };

export default MenuSuspenso;
