import React, { useState } from "react";
import { supabase } from "./supabaseClient";

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
      <h3>Solicite um Orçamento</h3>

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
        <option value="Institucional">Institucional</option>
        <option value="Loja Virtual">Loja Virtual</option>
        <option value="Landing Page">Landing Page</option>
      </select>

      <textarea
        name="mensagem"
        placeholder="Conte-nos sobre seu projeto..."
        value={formData.mensagem}
        onChange={handleChange}
        required
      ></textarea>

      <button type="submit">Solicitar Orçamento</button>

      {status && <p className="status">{status}</p>}
    </form>
  );
};

export default ContactForm;
