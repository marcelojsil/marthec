import React, { useState } from 'react';
//import { supabase } from './Supabase'
import { createClient } from '@supabase/supabase-js'
import '../../css/components.css';  // Importação do arquivo CSS
import H2 from '../HTwo';

// Inicialize o cliente Supabase
const supabaseUrl = 'https://xlabrfblnrbgsneltjzp.supabase.co'  // Substitua pela URL do seu Supabase
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhsYWJyZmJsbnJiZ3NuZWx0anpwIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0NjQ0OTM2OSwiZXhwIjoyMDYyMDI1MzY5fQ.UkOrLcZf6x-PlMKiFo9U8VLXYcn1RlKVOSxgi7XxkGY'  // Substitua pela sua chave pública do Supabase
const supabase = createClient(supabaseUrl, supabaseKey)

const FormLead = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    // AQUI: Substitua pelo seu código de envio para o Supabase, como no exemplo anterior

    try {
      // Insira os dados na tabela marthec
      const { data, error } = await supabase
        .from('cdt_pessoas')  // Nome da tabela
        .insert([
          { nome, email, whatsapp }
        ])

      if (error) throw error
      setMessage('Dados enviados com sucesso!');
      setNome('');
      setEmail('');
      setWhatsapp('');
    } catch (error) {
      console.error('Erro ao enviar dados:', error);
      setMessage('Erro ao enviar os dados.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-container">
      <H2 color="#e95d2c">Receba o contato de um de nossos consultores</H2>

      {message && (
        <div className="message">
          {message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="form">
        <div className="input-group">
          <label htmlFor="nome" className="label">Nome</label>
          <input
            type="text"
            id="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
            className="input"
          />
        </div>

        <div className="input-group">
          <label htmlFor="email" className="label">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="input"
          />
        </div>

        <div className="input-group">
          <label htmlFor="whatsapp" className="label">Whatsapp</label>
          <input
            type="text"
            id="whatsapp"
            value={whatsapp}
            onChange={(e) => setWhatsapp(e.target.value)}
            required
            className="input"
          />
        </div>

        <button
          type="submit"
          className={`submit-button ${loading ? 'loading' : ''}`}
          disabled={loading}
        >
          {loading ? 'Enviando...' : 'Cadastrar'}
        </button>
      </form>
    </div>
  );
};

export default FormLead;
