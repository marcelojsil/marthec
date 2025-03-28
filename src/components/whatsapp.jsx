import React from "react";
import "./components.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";


const WhatsAppButton = () => {
  return (
    <a href="https://wa.me/5512991022315" target="_blank" rel="noopener noreferrer" className="whatsapp-button">
      <FontAwesomeIcon icon={faWhatsapp} className="logo-whats"/>
    </a>
  );
};

export default WhatsAppButton;
