// Formulario.js
import React, { useState } from 'react';

const FormLeed = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch('/api/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nome, email, whatsapp }),
    });
    const data = await response.json();
    if (data.success) {
      alert('Formulário enviado com sucesso!');
    }
  };

  return (
    <form onSubmit={handleSubmit}  className="form-leed">
      <label>
        Nome:
        <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} required />
      </label>
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </label>
      <label>
        WhatsApp:
        <input type="text" value={whatsapp} onChange={(e) => setWhatsapp(e.target.value)} required />
      </label>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default FormLeed;
