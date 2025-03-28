import React from "react";
import "./components.css";

const Menu = ({ isOpen }) => {
  return (
    <ul className={`nav-menu ${isOpen ? "open" : ""}`}>
      <li><a href="/">Home</a></li>
      <li><a href="/sobre">Sobre</a></li>
      <li><a href="/servicos">Serviços</a></li>
      <li><a href="/contato">Contato</a></li>
    </ul>
  );
};

export default Menu;

  