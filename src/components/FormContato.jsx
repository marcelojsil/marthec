'use client'

import { useState } from "react";
import { supabase } from "./Supabase";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    email: "",
    tipo: "",
    mensagem: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Enviando...");

    const { error } = await supabase.from("orcamentos").insert([formData]);

    if (error) {
      console.error(error);
      setStatus("Erro ao enviar. Tente novamente.");
    } else {
      setStatus("Enviado com sucesso!");
      setFormData({ nome: "", telefone: "", email: "", tipo: "", mensagem: "" });
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <h3>Entrar em contato</h3>

      <input
        type="text"
        name="nome"
        placeholder="Seu nome"
        value={formData.nome}
        onChange={handleChange}
        required
      />

      <input
        type="text"
        name="telefone"
        placeholder="(12) 99999-9999"
        value={formData.telefone}
        onChange={handleChange}
        required
      />

      <input
        type="email"
        name="email"
        placeholder="seu@email.com"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <select name="tipo" value={formData.tipo} onChange={handleChange} required>
        <option value="">Selecione...</option>
        <option value="Institucional">Site Institucional</option>
        <option value="Loja Virtual">Portifólio</option>
        <option value="Landing Page">Landing Page</option>
        <option value="Landing Page">Hospedagem</option>
        <option value="Landing Page">Automação WhatsApp</option>
        <option value="Landing Page">Automação Direct Instagram</option>
        <option value="Landing Page">Outros</option>
      </select>

      <textarea
        name="mensagem"
        placeholder="Conte-nos sobre seu projeto..."
        value={formData.mensagem}
        onChange={handleChange}
        required
      ></textarea>

      <button type="submit">Enviar</button>

      {status && <p className="status">{status}</p>}
    </form>
  );
};

export default ContactForm;
