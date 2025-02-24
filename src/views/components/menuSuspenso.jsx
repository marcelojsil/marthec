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
            <li className="nav-item"><a href="#home" className="nav-link">Home</a></li>
            <li className="nav-item"><a href="#about" className="nav-link">About</a></li>
            <li className="nav-item"><a href="#services" className="nav-link">Services</a></li>
            <li className="nav-item"><a href="#contact" className="nav-link">Contact</a></li>
          </ul>
        </nav>
      </header>
    );
  };

export default MenuSuspenso;
