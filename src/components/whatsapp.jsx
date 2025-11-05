import "../styles/whatsapp.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import config from "../config";

const WhatsAppButton = () => {


  return (

    <a href={`https://wa.me/${config.contactWhatsapp}?text=Olá,%20gostaria%20de%20um%20orçamento?`} target="_blank" rel="noopener noreferrer" className="whatsapp-button">

      <FontAwesomeIcon icon={faWhatsapp} className="logo-whats"/>
      
    </a>
    
  );
};

export default WhatsAppButton;
