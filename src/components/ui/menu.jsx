import "../../styles/header.css";

const Menu = ({ isOpen }) => {
  
  return (

    <ul className={`nav-menu ${isOpen ? "open" : ""}`}>

      <li><a href="/">Home</a></li>
      <li><a href="#servicos">Serviços</a></li>
      <li><a href="#portifolio">Portifólio</a></li>
      <li><a href="#pricing">Preços</a></li>
      <li><a href="#contato">Contato</a></li>
    </ul>

  );
};

export default Menu;

  