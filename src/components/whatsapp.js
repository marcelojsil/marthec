import React from "react";
import "../styles/components.css";
import zap from "../img/logo.png";

function WhatsAppButton() {
  return (
    <a href="https://wa.me/5512991022315" target="_blank" rel="noopener noreferrer" className="whatsapp-button">
      <img src={zap} alt="WhatsApp" />
    </a>
  );
}

export default WhatsAppButton;
