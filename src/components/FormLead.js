import React, { useState } from 'react';
import "../styles/cpmponents.css";
import axios from 'axios'; // Para fazer a requisição HTTP ao backend

function FormLead() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setMessage('Formulário enviado com sucesso!');

    // Validação do Front em REGEX
    /*
    if (!name || !email || !whatsapp) {
      setMessage('Por favor, preencha todos os campos.');
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setMessage('E-mail inválido.');
      return;
    }
    if (!/^\+?[0-9]+$/.test(whatsapp)) {
      setMessage('WhatsApp deve conter apenas números.');
      return;
    }
    */

    try {
      // Enviando dados ao backend no Vercel
      //const response = await axios.post('https://marthec-beckend.vercel.app/submit', {
      //const response = await axios.post('localhost:3001/submit',  { 
      const response = await axios.post('https://marthec-beckend.higk2txqr-marcelos-projects-0943cbb7.vercel.app/submit',  { 
        name,
        email,
        whatsapp,
      });

      // Tratando resposta do backend
      if (response.data.success) {
        setMessage('Mensagem enviada com sucesso! Agradecemos pelo seu contato.');
      } else {
        setMessage("Houve um problema ao enviar os dados. Tente novamente.");
      }
    } catch (error) {
      console.error("Erro ao enviar dados:", error);
      setMessage('Ocorreu um erro ao enviar o formulário. Tente novamente mais tarde.');
    }

    //console.log("FormLead renderizado");
    //console.log("State do Formulário:", name, email, whatsapp);
  };

  return (
    <div className='formLead'>
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
