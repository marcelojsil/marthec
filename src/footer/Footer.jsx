import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faWhatsapp, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Contato */}
        <div className="footer-section">
          <h3>Contato</h3>
          <p>Email: marthec.web@gmail.com</p>
          <p>Telefone: (12) 9102-2315</p>
          <p>Pindamonhangaba - SP</p>
        </div>

        {/* Redes Sociais */}
        <div className="footer-section">
          <h3>Redes Sociais</h3>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} /></a>
            <a href="https://wa.me/5512991022315" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faWhatsapp} /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} /></a>
          </div>
        </div>

        {/* Menu */}
        <div className="footer-section">
          <h3>Menu</h3>
          <p><a href="/sobre">Sobre</a></p>
          <p><a href="/servicos">Serviços</a></p>
          <p><a href="/contato">Contato</a></p>
        </div>

        {/* Mapa 
        <div className="footer-section">
          <h3>Localização</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29394.707543849494!2d-45.46229660000001!3d-22.924655799999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ccf879b1967fb1%3A0x621eb77ebda75fbd!2sPindamonhangaba%2C%20SP!5e0!3m2!1spt-BR!2sbr!4v1711549890986!5m2!1spt-BR!2sbr"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
        */}

      </div>
      <div>
        <p>Desenvolvido por Marthec | 2024 - 2025 | Direitos reservados</p>
      </div>
    </footer>
  );
};

export default Footer;
