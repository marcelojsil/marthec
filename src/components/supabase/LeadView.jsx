import { useEffect, useState } from 'react';
import { supabase } from './Supabase'; // Ajuste o caminho conforme necessário
import { useNavigate } from 'react-router-dom';

const LeadView = () => {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchLeads = async () => {
      const { data, error } = await supabase.from('cdt_pessoas').select('*');
      if (error) {
        console.error('Erro ao buscar dados:', error);
      } else {
        setLeads(data);
      }
      setLoading(false);
    };

    fetchLeads();
  }, []);

  return (
    <div className="leads-list">
      <h2>Lista de Leads</h2>
      {loading ? (
        <p>Carregando...</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Email</th>
              <th>Whatsapp</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {leads.map((lead) => (
              <tr key={lead.id}>
                <td>{lead.nome}</td>
                <td>{lead.email}</td>
                <td>{lead.whatsapp}</td>
                <td>
                  <button onClick={() => navigate(`/editar/${lead.id}`)}>Editar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default LeadView;
