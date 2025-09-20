import React from "react";
import ContactForm from "./formContato";
import "../styles/contatos.css";
import { Phone, Mail, MapPin, Instagram, Facebook, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="contact-section-max">
        <h2>Vamos criar seu site?</h2>
        <p>Entre em contato conosco e receba uma proposta personalizada</p>
    
        <div className="contact-container">
          {/* Lado esquerdo - Informações */}
          <div className="contact-info">
            <h3>Informações de Contato</h3>
            <p><Phone size={18} /> (12) 99102-2315 <br /><small>WhatsApp e ligações</small></p>
            <p><Mail size={18} /> contato@marthec.com.br <br /><small>E-mail comercial</small></p>
            <p><MapPin size={18} /> Pindamonhangaba/SP <br /><small>Atendemos todo o Brasil</small></p>
    
            <h4>Horário de Atendimento</h4>
            <p>Segunda a Sexta: 8h às 18h</p>
            <p>Sábado: 8h às 12h</p>
            <p>Domingo: Fechado</p>
    
            <h4>Redes Sociais</h4>
            <div className="social-icons">
              <a href="#"><Instagram size={22} /></a>
              <a href="#"><Facebook size={22} /></a>
              <a href="#"><Linkedin size={22} /></a>
            </div>
          </div>
    
          {/* Lado direito - Formulário */}
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
