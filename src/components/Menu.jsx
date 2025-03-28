import React from "react";
import "./components.css";

const Menu = ({ isOpen }) => {
  return (
    <ul className={`nav-menu ${isOpen ? "open" : ""}`}>
      <li><a href="#">Home</a></li>
      <li><a href="#">Sobre</a></li>
      <li><a href="#">Serviços</a></li>
      <li><a href="#">Contato</a></li>
    </ul>
  );
};

export default Menu;

  