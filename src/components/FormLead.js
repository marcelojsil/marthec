import React, { useState } from 'react';
import axios from 'axios'; // Para fazer a requisição HTTP ao backend

function FormLead() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://marthec-beckend.vercel.app/submit', {
        name,
        email,
        whatsapp,
      });
      if (response.data.success) {
        setMessage('Mensagem enviada com sucesso! Agradecemos pelo seu contato.');
      }
    } catch (error) {
      setMessage('Ocorreu um erro ao enviar o formulário. Tente novamente mais tarde.');
    }
  };

  return (
    <div>
      <h2>Entre em Contato</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nome:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          E-mail:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          WhatsApp:
          <input
            type="text"
            value={whatsapp}
            onChange={(e) => setWhatsapp(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit">Enviar</button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
}

export default FormLead;
