import { useEffect, useState } from 'react';
import { supabase } from './Supabase'; // Ajuste o caminho conforme necessário
import { useParams, useNavigate } from 'react-router-dom';

const ClientEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [lead, setLead] = useState({ cliente: '', dominio: '', cidade: '' });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchLead = async () => {
      const { data, error } = await supabase.from('cdt_clientes').select('*').eq('id', id).single();
      if (error) {
        console.error('Erro ao buscar lead:', error);
      } else {
        setLead(data);
      }
    };

    fetchLead();
  }, [id]);

  const handleChange = (e) => {
    const { cliente, value } = e.target;
    setLead({ ...lead, [cliente]: value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    const { error } = await supabase
      .from('cdt_pessoas')
      .update({ cliente: lead.cliente, dominio: lead.dominio, cidade: lead.cidade })
      .eq('id', id);

    if (error) {
      console.error('Erro ao atualizar:', error);
      setMessage('Erro ao atualizar.');
    } else {
      setMessage('Lead atualizado com sucesso!');
      setTimeout(() => navigate('/leads'), 1500); // Redireciona após sucesso
    }

    setLoading(false);
  };

  return (
    <div className="edit-lead">
      <h2>Editar Lead</h2>
      {message && <p>{message}</p>}
      <form onSubmit={handleUpdate}>
        <div>
          <label>Cliente:</label>
          <input type="text" name="nome" value={lead.cliente} onChange={handleChange} required />
        </div>
        <div>
          <label>Dominio:</label>
          <input type="email" name="email" value={lead.dominio} onChange={handleChange} required />
        </div>
        <div>
          <label>Cidade:</label>
          <input type="text" name="whatsapp" value={lead.cidade} onChange={handleChange} required />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? 'Atualizando...' : 'Salvar'}
        </button>
      </form>
    </div>
  );
};

export default ClientEdit;
