import React from "react";
import Logo from "../img/marthec_1.png";

import "../css/fixos.css";

const Footer = () => {

    return (
      
      <footer>
        <div className="footer">

          <img src={Logo} alt="Marthec, site para sua empresa" className="header-img"/>

          <div className="footer-sociais">
            <p>Instagram</p>
            <p>Facebook</p>
            <p>WhatsApp</p>
          </div>
          
        </div>

        <p>2024 - 2025 &copy; Desenvolvido por Marthec Web - Direitos reservados</p>

      </footer>
    );
  }
  

  export default Footer;