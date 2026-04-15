'use client'

import { useState } from "react";
import "./briefing.css";

import SectionTitle from '../../components/ui/SectionTitle';
import Subtitle from '../../components/ui/SubTitle';

export default function Briefing() {
  const [form, setForm] = useState({
    empresa: "",
    segmento: "",
    nome_responsavel: "",
    email: "",
    whatsapp: "",
    cidade: "",
    instagram: "",
    facebook: "",
    publico_alvo: "",
    servicos: "",
    diferenciais: "",
    
    observacoes: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/briefing", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      });

      if (res.ok) {
        alert("Briefing enviado com sucesso!");
      } else {
        alert("Erro ao enviar briefing");
      }
    } catch (err) {
      console.error(err);
      alert("Erro inesperado");
    }
  };

  return (
    <div className="briefing-container">
      <div className="briefing-card">
        <SectionTitle align="center" gradient="primary">
          Briefing básico do seu negócio
        </SectionTitle>
        <Subtitle>
          Com as informações abaixo iremos criar o esboço do site ideal para sua empresa.
        </Subtitle>
        
        <form onSubmit={handleSubmit} className="briefing-form">
          <div className="grid">
            <input name="empresa" placeholder="Nome da Empresa" onChange={handleChange} required />
            <input name="segmento" placeholder="Segmento do Negócio" onChange={handleChange} required />
            <input name="nome_responsavel" placeholder="Nome do Responsável" onChange={handleChange} required />
            <input name="email" placeholder="Email" type="email" onChange={handleChange} required />
            <input name="whatsapp" placeholder="WhatsApp" onChange={handleChange} required />
            <input name="cidade" placeholder="Cidade / Estado" onChange={handleChange} required />
          </div>

          <input name="instagram" placeholder="Link do Instagram" onChange={handleChange} required />
          <input name="facebook" placeholder="Link do Facebook (opcional)" onChange={handleChange} />
          <textarea name="publico_alvo" placeholder="Quem é o público-alvo? (opcional)" onChange={handleChange} />
          <textarea name="servicos" placeholder="Principais serviços/produtos (opcional)" onChange={handleChange} />
          <textarea name="diferenciais" placeholder="Diferenciais da empresa (opcional)" onChange={handleChange} />

          {/*
          <div className="grid">
            <input name="cores_preferidas" placeholder="Cores preferidas" onChange={handleChange} />
            <input name="referencias" placeholder="Sites de referência" onChange={handleChange} />
            
            <input name="prazo" placeholder="Prazo desejado" onChange={handleChange} />
          </div>
          

          <div className="grid">
            <select name="possui_logo" onChange={handleChange}>
              <option value="nao">Possui logo?</option>
              <option value="sim">Sim</option>
              <option value="nao">Não</option>
            </select>
          
            <select name="possui_textos" onChange={handleChange}>
              <option value="nao">Já possui textos?</option>
              <option value="sim">Sim</option>
              <option value="nao">Não</option>
            </select>
          </div>
          */}

          <textarea name="observacoes" placeholder="Observações adicionais (opcional)" onChange={handleChange} />

          <button type="submit">Enviar Briefing</button>
        </form>
      </div>
    </div>
  );
}







